import { createMetadataStore } from '../src/fileMetadataStore';

test('adds and retrieves file metadata by id', () => {
  const store = createMetadataStore();
  const id = store.add({ originalName: 'test.txt' });
  expect(store.get(id).originalName).toBe('test.txt');
});

test('removes file metadata', () => {
  const store = createMetadataStore();
  const id = store.add({ originalName: 'test.txt' });
  store.remove(id);
  expect(store.get(id)).toBeUndefined();
});