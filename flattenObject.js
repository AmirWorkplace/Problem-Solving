const x = {
  d: 2,
  a: {
    a: 3,
    d: 4,
    b: {
      a: 5,
      d: 6,
      c: { a: 7, d: { b: 9, c: 10 }, b: 11, c: 12 },
      b: 13,
      c: 14,
    },
    c: 16,
  },
  b: 17,
  c: 18,
  m: { m: 1, z: { m: 2, p: { m: 3, q: { m: 4, s: { m: "and more..." } } } } },
};

function flattenObject(nestedObject) {
  let result = {};

  const Flatten = (mainObj, prefix = "") => {
    for (let key in mainObj) {
      if (typeof mainObj[key] === "object") {
        Flatten(mainObj[key], prefix + key + ".");
      } else {
        if (!Array.isArray(result[key])) {
          result[key] = [];
        }
        result[key].push(mainObj[key]);
      }
    }
  };

  // Inside the `Flatten` function, a `for` loop is used to iterate over the keys of the parameter of `nestedObject`!
  Flatten(nestedObject);
  return result;
}

console.log(flattenObject(x));
/**
 * 
 * @OUTPUT of flattenObject(x)
 
  {
    d: [ 2, 4, 6 ],
    a: [ 3, 5 ],
    c: [ 14, 16, 18 ],
    b: [ 13, 17 ],
    m: [ 1, 2, 3, 4, 'and more...' ]
  }
  
*/

/** 
 * @param PHP
 * Using PHP
  
  $x = [
    "d" => 2,
    "a" => [
      "a" => 3,
      "d" => 4,
      "b" => [
        "a" => 5,
        "d" => 6,
        "c" => ["a" => 7, "d" => ["b" => 9, "c" => 10], "b" => 11, "c" => 12],
        "b" => 13,
        "c" => 14,
      ],
      "c" => 16,
    ],
    "b" => 17,
    "c" => 18,
    "m" => ["m" => 1, "z" => ["m" => 2, "p" => ["m" => 3, "q" => ["m" => 4, "s" => ["m" => "..."]]]]],
  ];


  function flattenObject2($nestedObject)
  {
    $result = [];

    function flatten2($mainObj, $prefix = "", &$result)
    {
      foreach ($mainObj as $key => $value) {
        if (is_array($value)) {
          flatten2($value, $prefix . $key . ".", $result);
        } else {
          if (!isset($result[$key])) {
            $result[$key] = [];
          }
          $result[$key][] = $value;
        }
      }
    }

    flatten2($nestedObject, "", $result);
    return $result;
  }

  print_r(flattenObject2($x));


*/
