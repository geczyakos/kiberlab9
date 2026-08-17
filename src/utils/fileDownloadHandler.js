import { readFileFromDisk } from '../fileReadHelper';

// Streams a stored file back to the client by its numeric metadata id.

export function handleDownload(metadataStore, fileId) {
  const meta = metadataStore.get(fileId);
  if (!meta) {
    throw new Error('File not found');
  }
  return {
    filename: meta.originalName,
    buffer: readFileFromDisk(meta.filePath),
  };
}