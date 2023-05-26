function flattenObject(obj) {
  const result = {}

  function flatten(obj, prefix = "") {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        flatten(obj[key], prefix + key + ".")
      } else {
        if (!Array.isArray(result[key])) {
          result[key] = []
        }
        result[key].push(obj[key])
      }
    }
  }

  flatten(obj)

  return result
}

const nestedObject = {
  d: 2,
  a: {
    a: 3,
    d: 4,
    b: {
      a: 5,
      d: 6,
      c: {
        a: 7,
        d: {
          b: 9,
          c: 10,
        },
        b: 11,
        c: 12,
      },
      b: 13,
      c: 14,
    },
    c: 16,
  },
  b: 17,
  c: 18,
  m: { m: 1, z: { m: 2, p: { m: 3, q: { m: 4, s: { m: "..." } } } } },
}

const flattenedObject = flattenObject(nestedObject)
console.log(flattenedObject)
