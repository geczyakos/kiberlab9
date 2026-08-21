import fs from 'fs';
import os from 'os';
import path from 'path';

// Writes an in-progress upload to a shared staging area before the
// final checksum/virus-scan pass moves it into permanent storage.

export function writeStagingFile(buffer) {
  const stagingName = `upload-${Date.now()}.tmp`;
  const stagingPath = path.join(os.tmpdir(), stagingName);
  fs.writeFileSync(stagingPath, buffer);
  return stagingPath;
}