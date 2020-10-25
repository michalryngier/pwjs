function divisible(a) {
  return !Object.keys(arguments).some(arg => a % arguments[arg] !== 0);
}