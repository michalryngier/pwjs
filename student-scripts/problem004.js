function getTotalNumberOfNewYaersEveSundays(a, b) {
  let sundays = 0;
  for (a; a <= b; a++) {
    const century = a % 100 === 0 ? a / 100 - 1 : Math.floor(a / 100);
    sundays += (1 + 1 + a + century) % 7 === 1 ? 1 : 0;
  }
  return sundays;
}