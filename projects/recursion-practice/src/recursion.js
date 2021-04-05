// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // base 
  if(n === 0){
    return 1;
  }
  // recursive
  if(n < 0){
  return null;
  } else {
  return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base
  if (array.length === 1){
    return array[0]
  } else if (array.length === 0){
    return 0
  }
  //recursive
  if (array.length > 1){
    return array[0] + sum(array.slice(1))
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, total = 0) {
  // base case
  if(array.length === 0) {
    return 0;
  }
  var sum = 0;
  // recursive case
  for(var i = 0; i < array.length; i++){
    if(array[i] instanceof Array){
      sum += arraySum(array[i]);
    } else {
      sum += array[i];
    }
  }
  return sum;
  //if the value in the index is an array return the total of those index
  
  
};

// 4. Check if a number is even.
var isEven = function(n) {
  //base
  if (n === 0){
    return true
  } else if (n === 1){
    return false
  }
  //recursive
  if(n > 0){
    return isEven(n - 2)
  } else if (n < 0){
    return isEven(n + 2)
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base
  if(n === 0){
    return 0
  }
  //recursive
  if(n > 0){
    return (n - 1) + sumBelow(n - 1)
  } else if (n < 0){
    return (n + 1) + sumBelow(n + 1)
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, arr = []) {
  //base
  if(x === y || y - x === 1 || x - y === 1){
    return []
  } 
  //recursive
  if(x < y){
    arr.push(x + 1)
    return arr.concat(range(x + 1, y))
  } else if (y < x){
    arr.push(x - 1)
    return arr.concat(range(x - 1, y))
  }
  
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base
  if(exp === 1){
    return base
  } else if (exp === 0){
    return 1
  } 
  //recursive
  if(exp > 0){
  return base * exponent(base, exp - 1)
  } else if (exp < 0){
  return exponent(base, exp + 1) / base
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base
  if(n === 0){
    return false
  } else if(n === 1){
    return true
  }
  //recursive
  return powerOfTwo(n/2)
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, strArr = []) {
  //base
  if(string.length === 0){
    return strArr.join("")
  }
  //recursive
  strArr.unshift(string[0])
  return reverse(string.slice(1), strArr)
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // base case
  string = string.replace(" ", "")
  if(string.length === 1){
    return true;
  } else if(string[0].toLowerCase() !== string[string.length -1].toLowerCase()){
    return false;
  }
  return palindrome(string.slice(1, -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
// if y is equal to 0, you would want to return NaN, and you 
//if x is less than 0 then you want to cancel out that negative 
//and make it a positive, and if y is less than 0 you want to cancel out the positive
var modulo = function(x, y) {
     if ( x === 0 && y ===0 ) {
       return NaN;
     } else if ( x === y ){
      return 0;
    } else if ( x === 0 ) {
      return 0;
    }
    
    if (x > 0 && y > 0) {
        if (x < y){
          return x;
        } else {
          return modulo(x-y,y);
        }
    } else if ( x < 0 && y < 0) {
        if (-x < -y){
          return x;
        } else {
          return modulo(x-y,y);
        }
    } else if( x > 0 && y < 0) {
        if (x < -y){
          return x;
        } else {
          return modulo(x + y, y)
        }
    } else if ( x < 0 && y > 0) {
        if(-x < y){
          return x;
        } else {
          return modulo(x+y,y);
        }
    }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  
  if(x === 0 || y === 0){
    return 0
  } else if (y === 1){
    return x
  }
  if(y < 0){
  return -x + multiply(x, y + 1)
  } else {
  return x + multiply(x, y - 1)
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  if(y === 1) {
    return x
  } else if (y === 0){
    return NaN
  } else if (x < y){
    return 0
  }
  
  if(y < 0){
  return -divide(x, -y)
  } else {
  return 1 + divide(x - y, y)
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  //base
  if(x < 0 || y < 0){
    return null
  } else if (x === y){
    return x;
  }
  //recursive
  if(x > y){
    return gcd(x - y, y)
  } else if(x < y){
    return gcd(x, y - x)
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base
  if(str1.length === 0 && str2.length === 0){
    return true
  } else if(str1[0] !== str2[0]){
      return false
    } 
    return compareStr(str1.substring(1), str2.substring(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, arr = []){
  //base
  if(str.length === 0){
    return arr
  }
  //recur
  arr.push(str[0])
  return createArray(str.slice(1), arr);
};

// 17. Reverse the order of an array
var reverseArr = function (array, arr = []) {
  //base
  if(array.length === 0){
    return arr;
  }
  //recur
  arr.push(array[array.length - 1]);
  return reverseArr(array.slice(0, -1), arr)
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, arr = []) {
  //base
  if(length === 0){
    return arr;
  }
  arr.push(value)
  return buildList(value, length - 1, arr)
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // base case:
  if(array.length === 0){
    return 0;
  }
  // recursive case:
  if(array[0] === value) {
    return 1 + countOccurrence(array.slice(1, array.length), value)
  } else {
    return countOccurrence(array.slice(1, array.length), value);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, arr = []) {
  // base case
  if(array.length === 0){ 
    return arr; 
  }
  // recursive
  arr.push(callback(array[0]))
  return rMap(array.slice(1, array.length), callback, arr); 
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0; // set count to zero
  
  // base case
  for(var prop in obj){ // looking for property in obj
    if(prop === key){ // if the property = to a key
      count++; // count key
    }
  // recursive
    if(obj[prop] instanceof Object){ // checking if obj property is an object
      count += countKeysInObj(obj[prop], key); // counting the objects to find obj property
    }
  }
  return count; // returning count
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  
  //base
  for(var prop in obj){
    if(obj[prop] ===  value){
      count++
    }
    if(obj[prop] instanceof Object){ // if obj property is an object
      count += countValuesInObj(obj[prop], value); // call the function on said value
    }
  }
  return count; 
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  // base case
  for(var prop in obj){
    if(prop === key){ // if property is a key
      obj[newKey] = obj[prop]; // obj property is now set to new key
      delete obj[prop]; // deleting old property
    }
    // recursive case
    if(obj[prop] instanceof Object){ // if looking for obj property in object
      replaceKeysInObj(obj[prop], key, newKey); // call back function to find key and replace key in object
    }
  }
  return obj; // returning obj
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  // base case
  if(n <= 0) {
    return null; // if n <= 0 return null
  }
  if(n === 1) {
    return [0, 1]; // if n = 1 return 0, 1
  }
  // recursive case
  var list = fibonacci(n - 1); // make list = function call subrtacting a number from param.
  if(list[n] !== undefined) return list[n]; // if number is not underfined return number
  list[n] = list[n - 1] + list[n - 2]; // first index of list is the first number -1 + the second number -2
  return list; // return list
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // base case
  if(n < 0) {
    return null; // if n < 0 return null
  } else if(n === 0) {
    return 0; // if n = 0 return zero
  } else if(n === 1) {
    return 1; // if n = 1 retur one
  }
  // recursive case
  return nthFibo(n - 1) + nthFibo(n - 2); // for every return subtract parameters from current number
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  // base case
  if(input.length === 0) {
    return []; // if inputs length is 0 returh array lit
  }
  // recurive case:
  var list = capitalizeWords(input.slice(1, input.length)); // slice input at 1st index till it's length
  list.unshift(input[0].toUpperCase()); // take all index in input and cap em
  return list; // return list
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  // base case
  if(array.length === 0) return []; // if array's length is 0 return array lit
  
  var list = capitalizeFirst(array.slice(1, array.length)); // takes first first index of array and for the rest of it's length
  list.unshift(array[0][0].toUpperCase() + array[0].substring(1)); // take the letter of every index and cap it, whilst leaving the rest of the string lowcased
  return list; // return list
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for(var prop in obj){
    if(obj[prop] % 2 === 0) {
      sum += obj[prop];
    }
    if(obj[prop] instanceof Object) {
      sum += nestedEvenSum(obj[prop]);
    }
  }
  return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  var list = [];
  if(arrays.length === 0) return [];
  for(var i = 0; i < arrays.length; i++){
    if(arrays[i] instanceof Array){
      list.push(...flatten(arrays[i]));
    } else {
      list.push(arrays[i]);
    }
  }
  return list;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  // base case
  if(str.length === 0) return obj; // if strings length is 0, return obj
  // recursive case
  letterTally(str.substring(1), obj); // loop through string in object
  if(obj[str[0]] === undefined){ // for the first time seeing that string in any index
    obj[str[0]] = 1; // make it equal a vaule of one
  } else {
    obj[str[0]] += 1; // add count to string
  }
  return obj; // return obj
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  // base case
  if(list.length === 0) return []; // if list length is 0 return []
  
  // recursive case
  var res = compress(list.slice(1)); // taking off first index in array, and setting it to it's own variable
  if(list[0] !== res[0]){ // if numbers do not match
    res.unshift(list[0]); // place number in new array
  }
  return res; // return new array (res)
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
   // base case
  if(array.length === 0) return []; // if arrarys list is 0 return 0
  
  //recursive case
  var list = augmentElements(array.slice(1), aug); // taking first index of any array
  array[0].push(aug); // push aug into all arrays at last index
  list.unshift(array[0]); // place current index at begginging of array
  return list; // return new array
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  // base case
  if(array.length === 0) return [];
  
  // recurisive
  var list = minimizeZeroes(array.slice(1)); // check first index of array each time
    if((array[0] === 0 ^ list[0] === 0) || array[0] !== 0){ // if index duplicates zero
      list.unshift(array[0]); // adding current index to front of array
  }
  return list; // return list
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if(array.length === 0) return []; // if arrays length is zero return []
  
  var list = alternateSign(array.slice(0, array.length - 1));
  var lng = array.length; // lng = arrays length
  
  if(lng%2 === 0){ // for every other index in array
    if(array[lng-1] > 0){ // if current index is greater than zero
      array[lng-1] = -array[lng-1]; // set current index to negative number
    }
  } else {
    if(array[lng-1] < 0){ // if index is less that zero
      array[lng-1] = -array[lng-1]; // leave current index as negative number
    }
  }
  list.push(array[lng-1]); // push new array into list
  return list; // return list
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if(str.length === 0) return '';
  var tempStr = numToText(str.substring(0, str.length - 1));
  var replace;
  
  switch (str[str.length - 1]){
    case '1': replace = 'one';
    break;
    case '2': replace = 'two';
    break;
    case '3': replace = 'three';
    break;
    case '4': replace = 'four';
    break;
    case '5': replace = 'five';
    break;
    case '6': replace = 'six';
    break;
    case '7': replace = 'seven';
    break;
    case '8': replace = 'eight';
    break;
    case '9': replace = 'nine';
    break;
    default: replace = str[str.length - 1];
    break;
  }
  return tempStr + replace;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
