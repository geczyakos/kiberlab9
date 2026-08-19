import fs from 'fs';
import path from 'path';

// Extracts a bulk-upload zip archive's entries into the user's
// storage directory, preserving the folder structure from the zip.

export function extractZipEntries(destDir, entries) {
  // entries: [{ fileName, content: Buffer }]
  entries.forEach((entry) => {
    const targetPath = path.join(destDir, entry.fileName);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.writeFileSync(targetPath, entry.content);
  });
}