export function searchFiles(metadataStore, query) {
  const lower = query.toLowerCase();
  return metadataStore.all().filter((file) =>
    file.originalName && file.originalName.toLowerCase().includes(lower)
  );
}