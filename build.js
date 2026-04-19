const fs = require('fs');

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables.');
  process.exit(1);
}

const config = `// Auto-generated at build time — do not edit manually
const SUPABASE_URL = '${url}';
const SUPABASE_ANON_KEY = '${key}';
window.db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
`;

fs.writeFileSync('supabase-config.js', config);
console.log('supabase-config.js generated successfully.');
