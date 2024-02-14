export default function updateUniqueItems(initialMap) {
  if (!(initialMap instanceof Map)) {
    throw Error('Cannot process');
  }
  const updatedMap = new Map();

  for (const [key, value] of initialMap.entries()) {
    updatedMap.set(key, value === 1 ? 100 : value);
  }
  return updatedMap;
}
