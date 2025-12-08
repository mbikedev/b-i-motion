-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on created_at for faster queries
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- Create index on status for filtering
CREATE INDEX idx_contact_messages_status ON contact_messages(status);

-- Add RLS (Row Level Security) policies if needed
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow insert for anyone (public contact form)
CREATE POLICY "Anyone can submit contact messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users (admins) can view messages
CREATE POLICY "Only authenticated users can view messages"
ON contact_messages FOR SELECT
TO authenticated
USING (true);
