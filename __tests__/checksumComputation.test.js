import { computeChecksum } from '../src/checksumComputation';

test('produces a stable SHA-256 hex digest', () => {
  const buffer = Buffer.from('hello world');
  const checksum = computeChecksum(buffer);
  expect(checksum).toMatch(/^[0-9a-f]{64}$/);
  expect(computeChecksum(buffer)).toBe(checksum);
});