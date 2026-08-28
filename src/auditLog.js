export function createAuditLog() {
  const entries = [];
  return {
    record(action, fileId, userId) {
      entries.push({ action, fileId, userId, timestamp: Date.now() });
    },
    all() {
      return [...entries];
    },
  };
}