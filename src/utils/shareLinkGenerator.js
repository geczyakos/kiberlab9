// Generates a short, easy-to-read code for share links like
// files.example.com/s/A1B2C3, since long tokens don't fit well in
// the "copy link" UI on mobile.

export function generateShareCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}