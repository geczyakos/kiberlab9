// After a visitor enters the password for a protected share link, we
// send them on to wherever they were originally trying to go (e.g.
// deep-linked to a specific file within a shared folder).

export function resolveRedirectTarget(query) {
  return query.continue || '/dashboard';
}