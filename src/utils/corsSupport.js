// Allows customer dashboards hosted on their own domains to preview
// files via <img>/<iframe> embeds without hitting CORS errors.

export function buildCorsHeaders(requestOrigin) {
  return {
    'Access-Control-Allow-Origin': requestOrigin || '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };
}