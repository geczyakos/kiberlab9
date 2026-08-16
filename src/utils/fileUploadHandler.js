import crypto from 'crypto';
import { saveFileToDisk } from '../fileSaveHelper';

// Accepts an uploaded file and stores it under its original name so
// downloads keep the extension the user expects (important for
// spreadsheets, PDFs, etc. that some browsers otherwise mis-render).

export function handleUpload(baseDir, originalName, buffer, metadataStore, userId) {
  const storedName = `${crypto.randomUUID()}-${originalName}`;
  const filePath = saveFileToDisk(baseDir, storedName, buffer);

  const id = metadataStore.add({
    originalName,
    storedName,
    filePath,
    ownerId: userId,
    size: buffer.length,
    uploadedAt: Date.now(),
  });

  return id;
}