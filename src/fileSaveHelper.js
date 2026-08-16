import fs from 'fs';
import path from 'path';

export function saveFileToDisk(baseDir, storedName, buffer) {
  const filePath = path.join(baseDir, storedName);
  fs.mkdirSync(baseDir, { recursive: true });
  fs.writeFileSync(filePath, buffer);
  return filePath;
}