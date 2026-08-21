export function addTag(metadataStore, fileId, tag) {
  const meta = metadataStore.get(fileId);
  if (!meta) return null;
  meta.tags = meta.tags || [];
  if (!meta.tags.includes(tag)) meta.tags.push(tag);
  return meta;
}