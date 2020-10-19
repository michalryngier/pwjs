function stringRotate(str, value) {
  if (value < 0) return "";
  if (value === 0) return str;
  let newString = "";
  for (let i = value; i < str.length + value; ++i) {
    let index = i > str.length - 1
      ? i - str.length
      : i;
    newString += str[index];
  }
  return newString;
}