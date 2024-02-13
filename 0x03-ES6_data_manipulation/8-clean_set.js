export default function cleanSet(set, startString) {
  if (startString.trim() === '') {
    return ''; // Return an empty sting if startString is empty or contains whitespace
  }

  const filteredValues = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));
  const concatString = filteredValues.join('-');
  return concatString;
}
