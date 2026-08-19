export function renameFile(metadataStore, fileId, newName) {
  const meta = metadataStore.get(fileId);
  if (!meta) return null;
  meta.originalName = newName;
  return meta;
}