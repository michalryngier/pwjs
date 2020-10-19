function parametricSort(a, b) {
  if ("asc" === b) return a.sort((a1, a2) => (a1 - a2));
  if ("desc" === b) return a.sort((a1, a2) => (a2 - a1));
  return false
}