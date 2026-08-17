import fs from 'fs';

export function deleteFileFromDisk(filePath) {
  try {
    fs.unlinkSync(filePath);
    return true;
  } catch (_) {
    return false;
  }
}