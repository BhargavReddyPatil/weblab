import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import superadminRoutes from "./routes/superadminRoutes.js";
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import helmet from 'helmet';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('trust proxy', 1);
// Middleware
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/superadmin", superadminRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Enable compression
  app.use(compression());
  
  // Enhanced security headers
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'", "https://your-production-domain.com"]
      }
    },
    crossOriginEmbedderPolicy: false
  }));

  // CORS configuration for production
  app.use(cors({
    origin: process.env.CORS_ORIGIN || 'https://your-production-domain.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));

  // Serve static files
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  
  // Handle client-side routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }
    
    await mongoose.connect(process.env.MONGODB_URI, {
      // Remove deprecated options
      // useNewUrlParser and useUnifiedTopology are no longer needed
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Log more details about the error
    if (error.code === 'ECONNREFUSED') {
      console.error('Could not connect to MongoDB. Please check if:');
      console.error('1. Your MongoDB connection string is correct');
      console.error('2. Your IP address is whitelisted in MongoDB Atlas');
      console.error('3. Your network connection is stable');
    }
    process.exit(1);
  }
};

// Function to start the server
const startServer = async () => {
  try {
    await connectDB();
    
    const PORT = process.env.PORT || 5000;
    
    // Check if port is in use
    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Trying another port...`);
        server.close();
        app.listen(0, () => {
          console.log(`Server running on port ${server.address().port}`);
        });
      } else {
        console.error('Server error:', error);
      }
    });
  } catch (error) {
    console.error('Server startup error:', error);
    process.exit(1);
  }
};

startServer();
