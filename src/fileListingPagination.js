export function listFiles(metadataStore, page = 1, pageSize = 20) {
  const all = metadataStore.all();
  const start = (page - 1) * pageSize;
  return all.slice(start, start + pageSize);
}