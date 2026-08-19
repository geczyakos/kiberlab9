export function createFolder(metadataStore, name, parentId, ownerId) {
  return metadataStore.add({
    type: 'folder',
    name,
    parentId: parentId || null,
    ownerId,
    createdAt: Date.now(),
  });
}