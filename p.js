function flattenObject(obj) {
  const result = {}

  function flatten(obj, prefix = "") {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        flatten(obj[key], prefix + key + ".")
      } else {
        if (!Array.isArray(result[key])) {
          // console.log("if", result[key])
          result[key] = []
        }
        // console.log("else", result[key])
        result[key].push(obj[key])
      }
      // console.log(obj)
    }
  }

  flatten(obj)
  // console.log(flatten(obj))

  return result
}

const array = { a: 2, a: { a: 1, b: 3, a: { c: 4, d: 7, e: { a: 6, f: 8 } } } }
const flattenedArray = flattenObject(array)
// console.log(flattenedArray)

// const newArray = array.reduce((acc, curr) => ({ ...acc, curr }))
// console.log(newArray)

function flattenObject2(obj, prefix = "") {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + "." : ""
    if (typeof obj[k] === "object") {
      Object.assign(acc, flattenObject2(obj[k], pre + k))
    } else {
      acc[pre + k] = obj[k]
    }
    return acc
  }, {})
}

// console.log("flattenObject2", flattenObject2(array))

const fo = {
  "a.a.c": 4,
  "a.a.d": 7,
  "a.a.e.a": 6,
  "a.a.e.f": 8,
  "a.b": 3,
}

let x = {
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
}

// console.log(flattenObject2(x))

const isObject = (o) => o && typeof o === "object" && !(o instanceof Date)

const flattenObject3 = (obj) => {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    console.log({ acc: acc }, { key: key }, { val: val })
    return {
      ...acc,
      ...(isObject(val) ? flattenObject3(val) : { [key]: val }),
    }
  }, {})
}

console.log("flattenObject2 array", flattenObject2(array))
// console.log("flattenObject3 array", flattenObject3(array))
// console.log("\nflattenObject3 x", flattenObject3(x))
