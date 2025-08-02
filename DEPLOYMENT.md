# Vercel Deployment Guide

## Quick Deploy
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically detect the configuration and deploy

## Manual Deploy via CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# For production deployment
vercel --prod
```

## Project Structure
- Root contains `vercel.json` configuration
- Frontend code is in `/frontend` directory
- Build output goes to `/frontend/dist`

## Build Process
- Vercel runs: `cd frontend && npm install`
- Then runs: `cd frontend && npm run build`
- Serves from: `frontend/dist`

## Environment Variables (if needed)
Add these in Vercel dashboard under Settings > Environment Variables:
- `NODE_ENV=production`

## Custom Domain
1. Go to Vercel dashboard
2. Select your project
3. Go to Settings > Domains
4. Add your custom domain

## Troubleshooting
- If build fails, check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Check that TypeScript compiles without errors locally first