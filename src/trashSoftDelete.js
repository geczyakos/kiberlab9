export function moveToTrash(metadataStore, fileId) {
  const meta = metadataStore.get(fileId);
  if (!meta) return null;
  meta.trashedAt = Date.now();
  return meta;
}

export function restoreFromTrash(metadataStore, fileId) {
  const meta = metadataStore.get(fileId);
  if (!meta) return null;
  delete meta.trashedAt;
  return meta;
}