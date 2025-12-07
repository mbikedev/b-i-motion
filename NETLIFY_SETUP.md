# Netlify Deployment Setup

## Required Environment Variables

To deploy this application on Netlify, you need to configure the following environment variables:

### 1. Navigate to Netlify Environment Variables
1. Go to your Netlify site dashboard
2. Click **Site settings**
3. Navigate to **Build & deploy** → **Environment variables**
4. Click **Add a variable** for each of the following:

### 2. Add These Environment Variables

#### Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL=https://srcewloqkkltlbbkowbk.supabase.co
```

```
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyY2V3bG9xa2tsdGxiYmtvd2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxMTkwMjUsImV4cCI6MjA4MDY5NTAyNX0.IzTHFo3thtywZ0y_0U8xhlZXNCiHmdUnAXqN7lMP1rk
```

```
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyY2V3bG9xa2tsdGxiYmtvd2JrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTExOTAyNSwiZXhwIjoyMDgwNjk1MDI1fQ.Uf9DsxZyBstOl7dybRHGop35s4cZU4XweO4F0BZY2sA
```

#### NextAuth Configuration
```
NEXTAUTH_URL=https://your-site-name.netlify.app
```
(Replace `your-site-name` with your actual Netlify site name)

```
NEXTAUTH_SECRET=your-secret-key-change-this-in-production-12345
```
⚠️ **IMPORTANT**: Generate a secure random string for production:
```bash
openssl rand -base64 32
```

### 3. Deploy Settings

#### Build Settings (should already be configured):
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Functions directory**: (leave empty, Next.js handles this)

#### Build Plugin:
Make sure the **@netlify/plugin-nextjs** plugin is installed (it should be automatic for Next.js projects)

### 4. Trigger New Deploy

After adding all environment variables:
1. Click **Save**
2. Go to **Deploys** tab
3. Click **Trigger deploy** → **Deploy site**

## Troubleshooting

### Build Fails with ESLint Error
✅ Fixed: Added `eslint-config-next` to devDependencies

### Build Fails with "Missing Supabase environment variables"
✅ Fixed: Code now handles missing env vars during build
✅ Action Required: Add environment variables listed above to Netlify

### NEXTAUTH_URL Issues
- Make sure to update `NEXTAUTH_URL` with your actual Netlify domain
- Format: `https://your-site-name.netlify.app` (no trailing slash)
- You can also use a custom domain if configured

### Still Having Issues?
1. Check that all environment variables are spelled correctly
2. Verify there are no extra spaces in the values
3. Check the Netlify deploy logs for specific errors
4. Try clearing the cache: **Deploys** → **Trigger deploy** → **Clear cache and deploy site**

## Security Notes

⚠️ **Never commit `.env.local` to git**
- The `.env.local` file contains sensitive keys
- It's already in `.gitignore`
- Only configure these values in Netlify's environment variables UI

🔒 **Service Role Key**
- The `SUPABASE_SERVICE_ROLE_KEY` bypasses Row Level Security
- Only use it on the server-side
- Never expose it to the client

## Post-Deployment Checklist

- [ ] All environment variables added to Netlify
- [ ] NEXTAUTH_URL updated to production domain
- [ ] NEXTAUTH_SECRET changed to a secure random string
- [ ] Supabase database schema executed (see SUPABASE_SETUP.md)
- [ ] Test user registration on production site
- [ ] Test user login on production site
- [ ] Verify all pages load correctly
