export function listFiles(metadataStore, page = 1, pageSize = 20) {
  const all = metadataStore.all();
  const safePage = Math.max(1, page);
  const start = (safePage - 1) * pageSize;
  return all.slice(start, start + pageSize);
}