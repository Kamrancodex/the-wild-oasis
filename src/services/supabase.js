import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bobevpmbaumyllzxyyox.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvYmV2cG1iYXVteWxsenh5eW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxMjI4ODAsImV4cCI6MjAzOTY5ODg4MH0.D9ft42fYmQy23oN4aGxE-H6jYgf6fHeiBRLnvi6_zz4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
