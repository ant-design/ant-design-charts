// Returns the medium value of an array of numbers.
export function median(arr){
  arr.sort((a, b) => a - b);
  var i = arr.length / 2;
  return i % 1 === 0 ? (arr[i - 1] + arr[i]) / 2 : arr[Math.floor(i)];
}