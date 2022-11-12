import { createClient } from '@supabase/supabase-js';

// -- Supabase - (Desativado no MOMENTO !!)
const PROJECT_URL = 'https://loepraihanzspexrtinn.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvZXByYWloYW56c3BleHJ0aW5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMDk2MTMsImV4cCI6MTk4Mzc4NTYxM30.J7a1X0ilYMY5r2U_ek_M3apSSaAFSncLGK0XlX0m6mc'
const supabase = createClient(PROJECT_URL, SUPABASE_KEY)


export function videoService() {
    return {
        getAllVideos() {
            return supabase.from('videos')
                .select('*')
                // .then ...
        }
    }
}