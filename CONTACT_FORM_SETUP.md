# Contact Form Setup Guide

This guide explains how to set up and configure the contact form with automatic email responses using Gmail.

## Features

- ✅ Contact form with validation
- ✅ Saves messages to Supabase database
- ✅ Automatic confirmation email to users
- ✅ Notification email to admin
- ✅ Beautiful HTML email templates
- ✅ Graceful error handling
- ✅ No domain required - works with Gmail!

## Prerequisites

1. Supabase account and project
2. Gmail account (free)
3. Gmail App Password (we'll create this)

## Setup Instructions

### 1. Database Setup

Run the database migration to create the `contact_messages` table:

#### Option A: Using Supabase CLI (Recommended)

```bash
# Make sure Supabase CLI is linked to your project
npx supabase link --project-ref your-project-ref

# Apply the migration
npx supabase db push
```

#### Option B: Using Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy the contents of `supabase/migrations/001_create_contact_messages.sql`
4. Run the SQL script

### 2. Gmail Setup (Create App Password)

To use Gmail for sending emails, you need to create an **App Password**. This is more secure than using your regular Gmail password.

#### Step 1: Enable 2-Step Verification

1. Go to your [Google Account](https://myaccount.google.com/)
2. Click on "Security" in the left menu
3. Under "Signing in to Google," click on "2-Step Verification"
4. Follow the steps to enable 2-Step Verification (if not already enabled)

#### Step 2: Create an App Password

1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google," click on "App passwords"
3. You may need to sign in again
4. In the "Select app" dropdown, choose "Mail"
5. In the "Select device" dropdown, choose "Other (Custom name)"
6. Enter "Blueprint In Motion" or any name you prefer
7. Click "Generate"
8. **Copy the 16-character password** that appears (it will look like: `xxxx xxxx xxxx xxxx`)
9. Save this password - you'll need it for the next step

**Important Notes:**
- You can only see this password once, so copy it immediately
- This password is specific to this application
- If you forget it, you can delete it and create a new one
- This is different from your regular Gmail password

### 3. Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add:

```env
# Gmail Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx

# Admin Email (optional - defaults to EMAIL_USER if not set)
ADMIN_EMAIL=your-email@gmail.com

# Supabase (should already be configured)
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

**Important Email Settings:**

- `EMAIL_USER`: Your Gmail address (e.g., `yourname@gmail.com`)
- `EMAIL_PASSWORD`: The 16-character App Password you created (not your regular Gmail password!)
- `ADMIN_EMAIL`: Where contact form notifications are sent (defaults to EMAIL_USER if not set)

### 4. Testing

#### Test in Development

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to any page with the footer
3. Fill out the contact form
4. Submit the form

#### What Should Happen

1. Form data is saved to the `contact_messages` table in Supabase
2. User receives a confirmation email at the address they provided
3. Admin receives a notification email with the message details
4. Success message is shown on the form

#### Check the Logs

Monitor your terminal for log messages:
- `Confirmation email sent successfully`
- `Admin notification sent successfully`

If you see errors, check:
- Your `EMAIL_USER` and `EMAIL_PASSWORD` are correct
- You're using the App Password, not your regular Gmail password
- 2-Step Verification is enabled on your Google account
- Your Supabase connection is working

### 5. Troubleshooting

#### Emails Not Sending

**Problem:** Contact form works but no emails are sent

**Solutions:**
1. Check that `EMAIL_USER` and `EMAIL_PASSWORD` are set in `.env.local`
2. Verify you're using the **App Password** (16 characters), not your regular Gmail password
3. Ensure 2-Step Verification is enabled on your Google account
4. Restart your development server after adding environment variables
5. Check the server console for specific error messages
6. Try the credentials with a simple Gmail test to verify they work

#### "Service temporarily unavailable" Error

**Problem:** Form submission fails

**Solutions:**
1. Ensure Supabase environment variables are set correctly
2. Verify the database migration was applied
3. Check Supabase dashboard for connection issues

#### Gmail Authentication Errors

**Problem:** "Invalid login" or "Username and Password not accepted" errors

**Solutions:**
1. Double-check you're using the **App Password**, not your regular password
2. Make sure 2-Step Verification is enabled
3. Remove any spaces from the App Password when pasting
4. Try creating a new App Password
5. Check if "Less secure app access" is disabled (it should be - use App Password instead)

### 6. Viewing Contact Messages

All contact form submissions are stored in Supabase. To view them:

1. Go to your Supabase project dashboard
2. Navigate to Table Editor
3. Select the `contact_messages` table
4. View all submissions with name, email, message, and timestamp

You can also build an admin panel to manage these messages using the helper functions in `lib/contact.js`:
- `getContactMessages()` - Fetch all messages
- `updateContactMessageStatus()` - Update message status

## Email Templates

The system sends two types of emails:

### 1. User Confirmation Email
- Professional branded design
- Confirms receipt of their message
- Includes their original message
- CTAs to explore the website
- Sent immediately after form submission

### 2. Admin Notification Email
- Alert about new contact form submission
- Complete contact details
- Message content
- Direct reply button
- Message ID for tracking

Both templates are fully responsive and work across all email clients.

## Customization

### Email Templates

Edit `lib/email-templates.js` to customize:
- Email subject lines
- HTML layout and styling
- Email copy and messaging
- Call-to-action buttons

### Form Fields

Edit `app/components/Footer.js` to add more fields:
1. Add to `formData` state
2. Add input/textarea to form
3. Update API validation in `app/api/contact/route.js`
4. Update database schema in migration file
5. Update email templates to include new fields

## Security Features

- ✅ Input validation (client and server-side)
- ✅ Email format validation
- ✅ Message length limits
- ✅ SQL injection protection (via Supabase)
- ✅ XSS protection (React escaping)
- ✅ Rate limiting (recommended: add Vercel rate limiting)
- ✅ Row Level Security (RLS) policies in Supabase

## Gmail Sending Limits

Gmail has daily sending limits:
- **Personal Gmail**: 500 emails per day
- **Google Workspace**: 2000 emails per day

For most contact forms, this is more than enough. If you need higher limits, consider using a dedicated email service.

## Production Checklist

Before deploying to production:

- [ ] Create a dedicated Gmail account for the application (recommended)
- [ ] Enable 2-Step Verification on the Gmail account
- [ ] Create an App Password
- [ ] Add environment variables to your hosting platform (Vercel, Netlify, etc.)
- [ ] Apply database migration to production Supabase
- [ ] Test form submission in production
- [ ] Verify emails are delivered
- [ ] Check spam folder if emails aren't received
- [ ] Set up monitoring/alerting for failed emails
- [ ] Consider adding rate limiting
- [ ] Test on multiple devices and email clients

## Upgrading to a Custom Domain (Future)

When you get a domain name, you can upgrade to a professional email service like:
- **Google Workspace** (paid, professional)
- **Resend** (developer-friendly, requires domain)
- **SendGrid** (high volume)
- **Mailgun** (transactional emails)

The email templates and code structure will work with any service - you'll just need to update `lib/email.js`.

## Support

If you encounter issues:

1. Check server logs for error messages
2. Verify all environment variables are set correctly
3. Test Gmail credentials by trying to log in normally
4. Verify App Password is created correctly
5. Test database connection in Supabase dashboard
6. Review this documentation

For Gmail App Password help: https://support.google.com/accounts/answer/185833
For Supabase support: https://supabase.com/docs
