# Supabase Database Setup Guide

## Database Information
- **Project Name**: Blueprint database
- **Project URL**: https://srcewloqkkltlbbkowbk.supabase.co
- **Database Password**: QAfdg12355()

## Setup Steps

### 1. Create Database Tables

1. Go to your Supabase dashboard: https://srcewloqkkltlbbkowbk.supabase.co
2. Navigate to the **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the entire contents of `supabase-schema.sql` into the SQL editor
5. Click **Run** to execute the schema

This will create:
- **users** table - For storing user accounts
- **books** table - For storing book information
- **purchases** table - For tracking user purchases
- Row Level Security (RLS) policies for data protection
- Necessary indexes for performance

### 2. Verify Tables Were Created

1. Go to **Table Editor** in the left sidebar
2. You should see three tables: `users`, `books`, and `purchases`

### 3. Environment Variables (Already Configured)

The following environment variables have been added to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://srcewloqkkltlbbkowbk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. Application Updates

The following files have been created/updated:

1. **lib/supabase.js** - Supabase client initialization
2. **lib/users.js** - Updated to use Supabase instead of in-memory storage
3. **.env.local** - Added Supabase credentials

### 5. Test the Setup

After running the SQL schema:

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Try registering a new user at http://localhost:3002/register
3. Check your Supabase dashboard's **Table Editor** > **users** table to see the new user

## Database Schema Overview

### Users Table
- `id` (UUID) - Primary key
- `name` (VARCHAR) - User's full name
- `email` (VARCHAR) - User's email (unique)
- `password` (VARCHAR) - Hashed password
- `created_at` (TIMESTAMP) - Account creation date
- `updated_at` (TIMESTAMP) - Last update date

### Books Table
- `id` (UUID) - Primary key
- `title` (VARCHAR) - Book title
- `author` (VARCHAR) - Book author
- `description` (TEXT) - Book description
- `price` (DECIMAL) - Book price
- `image_url` (VARCHAR) - Book cover image URL
- `stock` (INTEGER) - Available stock
- `created_at` (TIMESTAMP) - Creation date
- `updated_at` (TIMESTAMP) - Last update date

### Purchases Table
- `id` (UUID) - Primary key
- `user_id` (UUID) - Foreign key to users
- `book_id` (UUID) - Foreign key to books
- `quantity` (INTEGER) - Number of books purchased
- `total_price` (DECIMAL) - Total purchase price
- `purchase_date` (TIMESTAMP) - Purchase date
- `status` (VARCHAR) - Purchase status

## Security Features

- **Row Level Security (RLS)** enabled on all tables
- Users can only view/update their own data
- Books are publicly readable
- Purchases are private to the purchasing user
- Service role key used for admin operations (user creation, authentication)

## Next Steps

1. Run the SQL schema in Supabase SQL Editor
2. Test user registration and login
3. Add sample books to the database (if needed)
4. Configure any additional RLS policies as needed

## Troubleshooting

If you encounter issues:

1. **Check environment variables**: Ensure `.env.local` has the correct Supabase credentials
2. **Verify tables exist**: Check Supabase Table Editor
3. **Check RLS policies**: Ensure Row Level Security policies are properly set
4. **Review logs**: Check Supabase logs in the dashboard for any errors
5. **Restart server**: After schema changes, restart your Next.js dev server
