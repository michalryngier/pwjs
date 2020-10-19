function isLeapYear(a) {
  if (a % 4 === 0) {
    if (a % 100 === 0) {
      return a % 400 === 0;
    }
    return true
  }
  return false;
}