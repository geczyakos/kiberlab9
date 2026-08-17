const EXT_TO_MIME = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain',
  '.json': 'application/json',
};

export function detectMimeType(filename) {
  const ext = filename.slice(filename.lastIndexOf('.')).toLowerCase();
  return EXT_TO_MIME[ext] || 'application/octet-stream';
}