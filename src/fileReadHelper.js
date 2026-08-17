import fs from 'fs';

export function readFileFromDisk(filePath) {
  return fs.readFileSync(filePath);
}