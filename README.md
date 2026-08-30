# file-storage-toolkit

A small, dependency-light file storage, upload, and sharing library
for Node.js: metadata tracking, versioning, trash, sharing links,
and more.

## Installation

```
npm install file-storage-toolkit
```

## Utilities

- `createMetadataStore` – in-memory file metadata store
- `saveFileToDisk` / `readFileFromDisk` / `deleteFileFromDisk` – disk I/O helpers
- `handleUpload` / `handleDownload` – upload/download handlers
- `detectMimeType` – MIME type detection by extension
- `listFiles` – paginated file listing
- `formatFileSize` – human-readable file sizes
- `computeChecksum` / `findDuplicateByChecksum` – SHA-256 based dedup
- `createFolder` – folder structure support
- `extractZipEntries` – bulk-upload zip extraction
- `renameFile` / `moveFile` / `copyFileMeta` – file organization
- `importMetadataXml` – legacy XML metadata import
- `searchFiles` / `addTag` – search and tagging
- `writeStagingFile` – temporary upload staging
- `createRecentTracker` – recently-accessed file tracking
- `moveToTrash` / `restoreFromTrash` / `purgeExpiredTrash` – trash management
- `addVersion` – file versioning
- `generateShareCode` / `resolveRedirectTarget` – share links
- `computeUsage` / `recordUsageForUpload` – storage usage tracking
- `buildThumbnailKey` – thumbnail key generation
- `buildCorsHeaders` – cross-origin preview support
- `incrementDownloadCount` – per-file download counter
- `bulkDelete` – bulk delete helper
- `compressBuffer` / `decompressBuffer` – gzip helpers
- `createAuditLog` – file operation audit log
- `applyDefaultPermissions` – default file permission handling

## Usage

```js
import { createMetadataStore, handleUpload } from 'file-storage-toolkit';

const store = createMetadataStore();
const id = handleUpload('./uploads', 'report.pdf', buffer, store, userId);
```

## License

MIT