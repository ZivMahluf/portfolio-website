/*
  # Create visitors table with role-based access control

  1. New Tables
    - `visitors`
      - `id` (uuid, primary key)
      - `timestamp` (timestamptz)
      - `page` (text)
      - `ip_address` (text)

  2. Security
    - Enable RLS on `visitors` table
    - Add policy for admin users to read data
    - Add policy for anonymous users to insert data
*/

CREATE TABLE IF NOT EXISTS visitors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  timestamp timestamptz DEFAULT now(),
  page text NOT NULL,
  ip_address text
);

ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'visitors' 
    AND policyname = 'Enable read access for admins'
  ) THEN
    CREATE POLICY "Enable read access for admins" ON visitors
      FOR SELECT 
      TO authenticated
      USING ((auth.jwt() ->> 'role'::text) = 'admin'::text);
  END IF;
END $$;

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'visitors' 
    AND policyname = 'Enable insert access for all'
  ) THEN
    CREATE POLICY "Enable insert access for all" ON visitors
      FOR INSERT 
      TO anon
      WITH CHECK (true);
  END IF;
END $$;