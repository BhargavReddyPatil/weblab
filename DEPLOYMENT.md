# Deployment Checklist

## Environment Variables
- [ ] Set MONGODB_URI
- [ ] Set JWT_SECRET
- [ ] Set NODE_ENV=production
- [ ] Set CORS_ORIGIN
- [ ] Set CLIENT_URL
- [ ] Set PORT

## Frontend
- [ ] Update API_URL in .env.production
- [ ] Build frontend (npm run build)
- [ ] Test production build locally
- [ ] Check all API endpoints

## Backend
- [ ] Test MongoDB connection
- [ ] Verify JWT authentication
- [ ] Check CORS configuration
- [ ] Test file uploads
- [ ] Verify error handling

## Security
- [ ] Enable HTTPS
- [ ] Set security headers
- [ ] Configure rate limiting
- [ ] Enable compression
- [ ] Set up monitoring

## Performance
- [ ] Optimize images
- [ ] Enable caching
- [ ] Minify assets
- [ ] Configure CDN (if needed) 