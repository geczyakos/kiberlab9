export function buildThumbnailKey(fileId, width = 200) {
  return `thumb-${fileId}-${width}.jpg`;
}