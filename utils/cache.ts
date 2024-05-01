// rateLimitUtil.js

const NodeCache = require("node-cache");
const requestCache = new NodeCache();
const IP_TTL = 1; // Durée de conservation des adresses IP dans le cache (en secondes)
const MAX_REQUESTS_PER_SECOND = 10; // Nombre maximal de requêtes autorisées par seconde

function incrementRequestCount(ip: any) {
  let count = requestCache.get(ip) || 0;
  count++;
  requestCache.set(ip, count, IP_TTL);
  return count;
}

function isRateLimited(ip: any) {
  const count = requestCache.get(ip) || 0;
  return count > MAX_REQUESTS_PER_SECOND;
}

module.exports = { incrementRequestCount, isRateLimited };
