function maybe(a, b, c) {
  return a(c) === true ? b(c) : c;
}