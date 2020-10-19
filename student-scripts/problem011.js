function deepFindAndCount(a, b) {
  let count = 0;
  let findElement = (arr) => {
    for (let el of arr) {
      if (Array.isArray(el)) {
        findElement(el);
      } else {
        count += el === b ? 1 : 0;
      }
    }
  }
  findElement(a);
  return count;
}
