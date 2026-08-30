import { createMetadataStore } from '../src/fileMetadataStore';
import { moveToTrash, restoreFromTrash } from '../src/trashSoftDelete';
import { addVersion } from '../src/fileVersioning';

test('moves a file to trash and restores it', () => {
  const store = createMetadataStore();
  const id = store.add({ originalName: 'test.txt' });

  moveToTrash(store, id);
  expect(store.get(id).trashedAt).toBeDefined();

  restoreFromTrash(store, id);
  expect(store.get(id).trashedAt).toBeUndefined();
});

test('keeps only the last N versions', () => {
  const store = createMetadataStore();
  const id = store.add({ originalName: 'test.txt' });

  for (let i = 0; i < 7; i++) {
    addVersion(store, id, `ref-${i}`, 5);
  }

  expect(store.get(id).versions).toHaveLength(5);
  expect(store.get(id).versions[0].ref).toBe('ref-6');
});