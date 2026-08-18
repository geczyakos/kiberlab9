export function findDuplicateByChecksum(metadataStore, checksum) {
  return metadataStore.all().find((file) => file.checksum === checksum);
}