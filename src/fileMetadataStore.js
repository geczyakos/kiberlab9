export function createMetadataStore() {
  const files = new Map();
  let nextId = 1;

  return {
    add(meta) {
      const id = nextId++;
      files.set(id, { id, ...meta });
      return id;
    },
    get(id) {
      return files.get(id);
    },
    remove(id) {
      return files.delete(id);
    },
    all() {
      return Array.from(files.values());
    },
  };
}