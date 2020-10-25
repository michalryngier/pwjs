function triangleArea(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.round((area + Number.EPSILON) * 100) / 100;
  }
  return -1
}