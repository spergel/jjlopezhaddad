# Cloudflare Pages Setup Guide

## Option 1: Cloudflare Dashboard (Recommended)

1. **Go to Cloudflare Dashboard**
   - Log in to your Cloudflare account at https://dash.cloudflare.com
   - Navigate to **Pages** in the left sidebar

2. **Create a New Project**
   - Click **"Create a project"**
   - Select **"Connect to Git"**
   - Choose **GitHub** and authorize Cloudflare to access your repositories
   - Select the repository: **`spergel/jjlopezhaddad`**

3. **Configure Build Settings**
   - **Framework preset**: None (or "Plain HTML")
   - **Build command**: (leave empty - no build needed)
   - **Build output directory**: `/` (root directory)
   - **Root directory**: `/` (root directory)

4. **Deploy**
   - Click **"Save and Deploy"**
   - Cloudflare will automatically deploy your site
   - You'll get a URL like: `https://jjlopezhaddad.pages.dev`

5. **Custom Domain (Optional)**
   - After deployment, go to **Custom domains** in your project settings
   - Add your custom domain (e.g., `jjlopezhaddad.com`)
   - Follow the DNS setup instructions

## Option 2: Wrangler CLI (Advanced)

If you prefer using the command line:

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy to Pages
wrangler pages deploy . --project-name=jjlopezhaddad
```

## Important Notes

- **No build process needed**: This is a static site, so no build command is required
- **All files are in root**: Your HTML, CSS, JS, and assets are all in the root directory
- **Automatic deployments**: Cloudflare will automatically deploy when you push to your GitHub repository
- **Preview deployments**: Every pull request gets its own preview URL

## Environment Variables

No environment variables needed for this static site.

## Custom Headers (Optional)

If you need custom headers (e.g., for CORS, security headers), you can create a `_headers` file in your root directory.

