function compose(a) {
  let func = x => x;
  if (arguments.length > 0) {
    for (let i = arguments.length - 1; i <= 0 ; --i) {
      if (i === arguments.length - 1) {
        func = x => arguments[i];
      } else {
        func = func(arguments[i]);
      }
    }
  }
  return func;
}
