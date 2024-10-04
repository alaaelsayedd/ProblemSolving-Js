function sumWithoutHighestLowest(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current);
}
console.log(sumWithoutHighestLowest([1, 5, 1, 9, 13, 5, 22, 5, 9, 7, 8]));
