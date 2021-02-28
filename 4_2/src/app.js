export function sortMatchers(arr) {
  const fieldSort = 'health';
  return arr.sort(
    (a, b) => (a[fieldSort] < b[fieldSort] && 1) || (a[fieldSort] > b[fieldSort] && -1) || 0,
  );
}
