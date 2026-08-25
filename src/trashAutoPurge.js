const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

export function purgeExpiredTrash(metadataStore, now = Date.now()) {
  const purged = [];
  metadataStore.all().forEach((file) => {
    if (file.trashedAt && now - file.trashedAt > THIRTY_DAYS_MS) {
      metadataStore.remove(file.id);
      purged.push(file.id);
    }
  });
  return purged;
}