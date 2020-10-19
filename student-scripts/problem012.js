function objectsDiff(a, b) {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  const keys = [];
  for (let key of keysA) {
    if (keysB.includes(key) === false) keys.push(key);
  }
  for (let key of keysB) {
    if (keysA.includes(key) === false) keys.push(key);
  }
  return keys;
}