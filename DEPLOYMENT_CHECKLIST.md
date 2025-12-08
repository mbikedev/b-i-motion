# 🚀 Deployment Checklist

## Current Issue
Registration is failing with a 500 error on Netlify because environment variables are not configured.

Error: `POST https://bluepri.netlify.app/api/auth/register 500 (Internal Server Error)`

## Required Actions

### ⚠️ CRITICAL: Configure Environment Variables in Netlify

1. **Go to Netlify Dashboard**
   - URL: https://app.netlify.com
   - Navigate to your site: bluepri.netlify.app
   - Go to: **Site settings** → **Build & deploy** → **Environment variables**

2. **Add These Environment Variables:**

   Click "Add a variable" for each:

   ```
   Variable: NEXT_PUBLIC_SUPABASE_URL
   Value: [Get from Supabase Dashboard → Project Settings → API → Project URL]
   ```

   ```
   Variable: NEXT_PUBLIC_SUPABASE_ANON_KEY
   Value: [Get from Supabase Dashboard → Project Settings → API → anon public key]
   ```

   ```
   Variable: SUPABASE_SERVICE_ROLE_KEY
   Value: [Get from Supabase Dashboard → Project Settings → API → service_role key]
   ```

   ```
   Variable: NEXTAUTH_URL
   Value: https://bluepri.netlify.app
   ```

   ```
   Variable: NEXTAUTH_SECRET
   Value: [Generate with: openssl rand -base64 32]
   ```

3. **After Adding All Variables:**
   - Click **Save**
   - Go to **Deploys** tab
   - Click **Trigger deploy** → **Deploy site**

### 🔒 Security Reminder

**IMPORTANT:** If you haven't already rotated your Supabase keys (from the earlier security incident), do it NOW before adding them to Netlify:

1. Go to Supabase Dashboard
2. Project Settings → API
3. Click **Reset** for both anon and service_role keys
4. Update `.env.local` locally with new keys
5. Add NEW keys to Netlify (not the old exposed ones)

See `SECURITY_NOTICE.md` for details.

## Verification Steps

After deploying with environment variables:

1. ✅ Go to https://bluepri.netlify.app/register
2. ✅ Try creating a new account
3. ✅ Check for successful registration
4. ✅ Try logging in with the new account
5. ✅ Verify you can log out successfully

## Troubleshooting

### Still Getting 500 Error?
1. Check Netlify deploy logs for specific errors
2. Verify all environment variables are spelled correctly
3. Ensure there are no extra spaces in the values
4. Confirm Supabase database schema has been executed (see SUPABASE_SETUP.md)

### Build Fails?
1. Check that `eslint-config-next` is in package.json (it should be)
2. Review build logs for specific error messages
3. Try: **Deploys** → **Trigger deploy** → **Clear cache and deploy site**

### Database Connection Issues?
1. Verify Supabase project is active
2. Check that database tables exist (users, books, purchases)
3. Confirm Row Level Security policies are configured

## Additional Resources

- **Netlify Setup Guide**: See `NETLIFY_SETUP.md`
- **Supabase Setup Guide**: See `SUPABASE_SETUP.md`
- **Security Notice**: See `SECURITY_NOTICE.md`

## Quick Reference

| What | Where |
|------|-------|
| Netlify Dashboard | https://app.netlify.com |
| Your Site | https://bluepri.netlify.app |
| Supabase Dashboard | https://supabase.com/dashboard |
| Environment Variables | Netlify → Site settings → Build & deploy → Environment variables |

---
**Status**: 🔴 Environment variables required
**Next Step**: Add environment variables to Netlify and redeploy
