# 🔒 SECURITY NOTICE

## ⚠️ IMPORTANT: Exposed Credentials Detected

The Supabase service role key and anon key were accidentally committed to the git repository in previous commits. While these have been removed from the documentation files, **they remain in the git history**.

## Required Actions

### 1. Rotate Supabase Keys Immediately

You **MUST** rotate your Supabase API keys:

1. Go to your Supabase Dashboard: https://srcewloqkkltlbbkowbk.supabase.co
2. Navigate to **Project Settings** → **API**
3. Under **Project API keys**, click **Reset** for both:
   - `anon` (public) key
   - `service_role` key

4. Update your environment variables with the new keys:
   - Local: Update `.env.local`
   - Netlify: Update environment variables in Site Settings
   - Any other deployment platforms

### 2. Update Environment Variables

After rotating the keys, update them in:

#### Local Development (`.env.local`):
```bash
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<NEW-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<NEW-service-role-key>
```

#### Netlify:
- Go to Site Settings → Build & deploy → Environment variables
- Update `NEXT_PUBLIC_SUPABASE_ANON_KEY` with the new anon key
- Update `SUPABASE_SERVICE_ROLE_KEY` with the new service role key

### 3. Review Database Security

Check your Supabase database for any unauthorized access:

1. Go to **Authentication** → **Users** - check for unexpected users
2. Go to **Database** → **Tables** - verify data integrity
3. Go to **Logs** → **API Logs** - look for suspicious activity

### 4. Enable Additional Security

Consider enabling:
- **Two-factor authentication** on your Supabase account
- **IP restrictions** (if available in your plan)
- **Row Level Security** policies (already configured in schema)

## What Was Exposed

The following credentials were in git history:
- ❌ Supabase Project URL (public, but still sensitive)
- ❌ Supabase Anon Key (public-facing, limited permissions)
- ❌ Supabase Service Role Key (**CRITICAL** - bypasses RLS)

## Impact Assessment

### Service Role Key (CRITICAL)
This key bypasses all Row Level Security policies and has full database access. Potential risks:
- Unauthorized read/write access to all database tables
- Ability to create/delete users
- Access to sensitive user data

### Anon Key (MODERATE)
Limited by Row Level Security policies, but still provides:
- Public API access
- Ability to authenticate users
- Read access to public tables

## Prevention

To prevent this in the future:
- ✅ `.env.local` is already in `.gitignore`
- ✅ Documentation now uses placeholders instead of real keys
- ⚠️ Never paste real credentials in documentation files
- ⚠️ Use environment variables for all sensitive data
- ⚠️ Review commits before pushing

## Questions?

If you need help rotating keys or have security concerns, refer to:
- [Supabase Security Best Practices](https://supabase.com/docs/guides/platform/going-into-prod#security)
- [Supabase API Keys Documentation](https://supabase.com/docs/guides/api/api-keys)

---
**Status**: 🔴 Action Required - Rotate keys immediately
**Last Updated**: 2025-12-07
