export function addVersion(metadataStore, fileId, newContentRef, maxVersions = 5) {
  const meta = metadataStore.get(fileId);
  if (!meta) return null;
  meta.versions = meta.versions || [];
  meta.versions.unshift({ ref: newContentRef, savedAt: Date.now() });
  if (meta.versions.length > maxVersions) meta.versions.pop();
  return meta;
}