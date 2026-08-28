import zlib from 'zlib';

export function compressBuffer(buffer) {
  return zlib.gzipSync(buffer);
}

export function decompressBuffer(buffer) {
  return zlib.gunzipSync(buffer);
}