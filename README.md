# AAT Management System

## Deployment Instructions

1. Set up environment variables:
   ```bash
   # Backend
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   EMAIL_SERVICE=your_email_service
   EMAIL_USER=your_email_user
   EMAIL_PASS=your_email_password
   NODE_ENV=production
   PORT=5000
   CLIENT_URL=your_frontend_url

   # Frontend
   VITE_API_URL=your_backend_api_url
   ```

2. Install dependencies:
   ```bash
   npm run build
   ```

3. Start the server:
   ```bash
   npm start
   ```

## Development

1. Start backend:
   ```bash
   cd backend
   npm run dev
   ```

2. Start frontend:
   ```bash
   cd frontend
   npm run dev
   ``` 