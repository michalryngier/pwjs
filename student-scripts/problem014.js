const Vectors = {
  sum: (v1, v2) => {
    if (v1.length !== v2.length) return false;
    return v1.map((v, key) => v + v2[key]);
  },
  mulByScalar: (v, scalar) => {
    if (isNaN(scalar) || scalar === "" || Array.isArray(scalar)) return false;
    return v.map(value => value * scalar);
  }
};