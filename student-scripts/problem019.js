function carry(func) {
  const numOfArgs = func.length;
  if (arguments.length - 1 < numOfArgs) {
    return carry.bind(null, ...arguments);
  } else {
    return func.apply(null, Array.prototype.slice.call(arguments, 1));
  }
}