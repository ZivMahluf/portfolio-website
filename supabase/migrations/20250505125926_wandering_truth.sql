/*
  # Create visitors tracking table

  1. New Tables
    - `visitors`
      - `id` (uuid, primary key)
      - `timestamp` (timestamptz)
      - `page` (text)
      - `ip_address` (text)

  2. Security
    - Enable RLS on `visitors` table
    - Add policy for admin role to read data
    - Add policy for anonymous users to insert data
*/

CREATE TABLE IF NOT EXISTS visitors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  timestamp timestamptz DEFAULT now(),
  page text NOT NULL,
  ip_address text
);

ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;

-- Only allow users with admin role to view the data
CREATE POLICY "Enable read access for admins" ON visitors
  FOR SELECT 
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Allow inserts from anyone (to track visits)
CREATE POLICY "Enable insert access for all" ON visitors
  FOR INSERT 
  TO anon
  WITH CHECK (true);