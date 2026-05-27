CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_ad timestamptz NOT NULL DEFAULT now()
);