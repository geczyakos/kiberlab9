export function incrementDownloadCount(metadataStore, fileId) {
  const meta = metadataStore.get(fileId);
  if (!meta) return null;
  meta.downloadCount = (meta.downloadCount || 0) + 1;
  return meta.downloadCount;
}