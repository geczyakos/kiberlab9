export function createRecentTracker(maxItems = 20) {
  const recent = [];
  return {
    touch(fileId) {
      const idx = recent.indexOf(fileId);
      if (idx !== -1) recent.splice(idx, 1);
      recent.unshift(fileId);
      if (recent.length > maxItems) recent.pop();
    },
    getRecent() {
      return [...recent];
    },
  };
}