function converNumberToReversedArray(num) {
  return String(num)
    .split("")
    .map((n) => +n)
    .reverse();
}
console.log(converNumberToReversedArray(5678246));
