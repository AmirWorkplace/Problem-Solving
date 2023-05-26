<?php


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


function flattenObject($nestedObject)
{
  $result = [];

  // Inside the `Flatten` function, a `for` loop is used to iterate over the keys of the parameter of `nestedObject`!
  function flatten($mainObj, $prefix = "", &$result)
  {
    foreach ($mainObj as $key => $value) {
      if (is_array($value)) {
        flatten($value, $prefix . $key . ".", $result);
      } else {
        if (!isset($result[$key])) {
          $result[$key] = [];
        }
        $result[$key][] = $value;
      }
    }
  }


  flatten($nestedObject, "", $result);
  return $result;
}

// print_r(flattenObject($x));
echo json_encode(flattenObject($x));

/**
 * 
 * @param OUTPUT of flattenObject(x)
 
  Array ( [d] => Array ( [0] => 2 [1] => 4 [2] => 6 ) [a] => Array ( [0] => 3 [1] => 5 ) [c] => Array ( [0] => 14 [1] => 16 [2] => 18 ) [b] => Array ( [0] => 13 [1] => 17 ) [m] => Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => ... ) )

 * @param AND
  
  {
    "d": [
      2,
      4,
      6
    ],
    "a": [
      3,
      5
    ],
    "c": [
      14,
      16,
      18
    ],
    "b": [
      13,
      17
    ],
    "m": [
      1,
      2,
      3,
      4,
      "..."
    ]
  }

 */


 // http://localhost/Problem_Solving/flattenObject.php