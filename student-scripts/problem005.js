function strangeSum(a, b) {
  if (Number.isInteger(a) === false || Number.isInteger(b) === false) return null;
  return a === b ?  3 * (a + b) :  a + b;
}