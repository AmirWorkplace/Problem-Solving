<?php

/* // http://localhost/test/index.php







      // function flattenObject($mainObject){
      //   return var_dump($mainObject);

      // }

      // flattenObject(["name"=>"amir ali"]);


 
      //  function functionName($parameter)
      // {
      //   echo $parameter;
      //   // Function code block
      //   // Perform desired operations here
      //   // You can use the provided parameters within the function

      //   // Return a value if needed
      //   // return $result;
      // }

      // // Call the function
      // functionName('$arg1, $arg2');

  */

$x = [
  'a' => 5,
  [
    'b' => 6,
    [
      'c' => 7,
      'a' => 10
    ],
    'a' => 9
  ],
  'b' => 8
];

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
  // echo var_dump($nestedObject);
  // echo json_encode($nestedObject);
  // echo gettype($nestedObject);

  $result = [];

  function flatten($object, $prefix = "")
  {
    foreach ($object as $key => $value) {
      if (gettype($object[$key]) === 'array') {
        flatten($object[$key], $prefix . $key . ".");
      } else {
        if (!is_array($object[$key])) {
          $result[$key] = array();
        }
        array_push($result[$key], $object[$key]);
      }
    }
  }

  flatten($nestedObject);
  echo json_encode($result);
  return $result;
}

// flattenObject($x);


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

echo json_encode(flattenObject2($x));
