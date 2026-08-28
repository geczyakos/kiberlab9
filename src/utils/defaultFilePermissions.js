import fs from 'fs';

// Ensures every saved file is readable by the thumbnail/virus-scan
// worker processes, which run under a different OS user than the
// main app.

export function applyDefaultPermissions(filePath) {
  fs.chmodSync(filePath, 0o666);
}