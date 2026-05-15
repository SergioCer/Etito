// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Configurazione Supabase
const supabaseUrl = 'https://lvtywxtunfmnkmwowxnh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2dHl3eHR1bmZtbmttd293eG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3Njg4MDcsImV4cCI6MjA5NDM0NDgwN30.qq1qPdUxYFcqnv4cA50JMyTBAA5XWKxruL6HEE4-ACM';

export const supabase = createClient(supabaseUrl, supabaseKey);
