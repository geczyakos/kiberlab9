export function moveFile(metadataStore, fileId, newParentId) {
  const meta = metadataStore.get(fileId);
  if (!meta) return null;
  meta.parentId = newParentId;
  return meta;
}

export function copyFileMeta(metadataStore, fileId) {
  const meta = metadataStore.get(fileId);
  if (!meta) return null;
  return metadataStore.add({ ...meta, id: undefined, copiedAt: Date.now() });
}