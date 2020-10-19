function strangeSum(a, b) {
  if (isNaN(a) || isNaN(b) || Number.isInteger(a) === false || Number.isInteger(b) === false) return null;
  return a === b ?  3 * (a + b) :  a + b;
}