import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://rwzayhatovnjxzdqsbez.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3emF5aGF0b3Zuanh6ZHFzYmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2NzgzMzgsImV4cCI6MjA5NTI1NDMzOH0.qGYOkYHEnNEUbPiZ0fXnAbUY3D4jbpLxCTdt7NI1qyc"
);