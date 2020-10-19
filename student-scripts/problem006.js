function divisible(a) {
  return !Object.keys(arguments).some(arg => arguments[0] % arguments[arg] !== 0);
}