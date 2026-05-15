// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Connessione centrale
const supabaseUrl = 'https://lvtywxtunfmnkmwowxnh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2dHl3eHR1bmZtbmttd293eG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3Njg4MDcsImV4cCI6MjA5NDM0NDgwN30.qq1qPdUxYFcqnv4cA50JMyTBAA5XWKxruL6HEE4-ACM';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Funzioni generiche riutilizzabili
export async function fetchAll(table) {
  const { data, error } = await supabase.from(table).select('*');
  if (error) throw error;
  return data;
}

export async function insertRow(table, obj) {
  const { data, error } = await supabase.from(table).insert([obj]).select();
  if (error) throw error;
  return data;
}

export async function updateRow(table, idField, idValue, obj) {
  const { data, error } = await supabase.from(table).update(obj).eq(idField, idValue);
  if (error) throw error;
  return data;
}

export async function deleteRow(table, idField, idValue) {
  const { data, error } = await supabase.from(table).delete().eq(idField, idValue);
  if (error) throw error;
  return data;
}
