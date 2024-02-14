// Create a const instance of weakMap
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!endpoint || typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint format');
  }

  const queryCount = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, queryCount + 1);

  if (queryCount + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
