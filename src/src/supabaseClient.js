src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zomhhzkmowidqnikdmpv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvbWhoemttb3dpZHFuaWtkbXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NDQ3OTgsImV4cCI6MjA2NTQyMDc5OH0.EzXLqw0X05WFWIIx8q_4T1077GcP7NtVad6kUv0truc'

export const supabase = createClient(supabaseUrl, supabaseKey)
