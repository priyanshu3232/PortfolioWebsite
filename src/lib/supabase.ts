import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rlxooiyldwxozksfaptg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJseG9vaXlsZHd4b3prc2ZhcHRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzODc0NTMsImV4cCI6MjA2Njk2MzQ1M30.xzPCZ-9maHHf1kwvUxdgMxUemkk5beaAwxmkOdodueM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
