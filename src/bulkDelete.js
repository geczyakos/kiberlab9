import { deleteFileFromDisk } from './fileDeleteHelper';

export function bulkDelete(metadataStore, fileIds) {
  return fileIds.map((id) => {
    const meta = metadataStore.get(id);
    if (!meta) return { id, deleted: false };
    deleteFileFromDisk(meta.filePath);
    metadataStore.remove(id);
    return { id, deleted: true };
  });
}