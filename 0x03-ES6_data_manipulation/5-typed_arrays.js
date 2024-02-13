export default function createInt8TypedArray(length, position, value) {
  // Check if the position specified is within range
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }

  // Create a new ArrayBuffer using the length provided
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view on the ArrayBuffer
  const int8Array = new Int8Array(buffer);

  // Set the value at the position specified
  int8Array[position] = value;

  return new DataView(buffer);
}
