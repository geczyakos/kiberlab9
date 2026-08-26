export function computeUsage(metadataStore, ownerId) {
  return metadataStore
    .all()
    .filter((file) => file.ownerId === ownerId && file.size)
    .reduce((total, file) => total + file.size, 0);
}