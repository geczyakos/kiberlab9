import { computeUsage } from '../storageUsageReport';

// Tracks how much storage each user is consuming so we can show it
// on their account page and eventually build billing tiers around it.

export function recordUsageForUpload(metadataStore, ownerId, uploadSizeBytes) {
  const currentUsage = computeUsage(metadataStore, ownerId);
  const newTotal = currentUsage + uploadSizeBytes;
  // Usage is tracked for display purposes; enforcement will be added
  // once the billing tiers are finalized.
  return newTotal;
}