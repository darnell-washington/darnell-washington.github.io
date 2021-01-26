// Operators


/*
 * Types:
 *   1. Assignment: An assignment operator assigns a value to its left operand based on the value of its right operand.
 *  = : re-assigning the left variable.
 */ var a = 1; 
/* += : add the value of the right variable to the left one.
 */ var b = a+= 3;//adds 3 to the variable b
/* -= : subtracts the value from the variable.  
 */ var c = a-= 2;//subtracts 2 from c
/* *= : multiply the variable times 2.
 */ var d = a *= 4
/* %= 
 * 
 * 
 *  2. Arithmetic: Arithmetic operators take numerical values (either literals or variables) as their operands 
 * and return a single numerical value.
 */
 var x = 4;
 var y = 2;

 var z = x + y; // z = 6: Addition
 var z = x - y; // z = 2: Subtraction
 var z = x * y; // z = 8: Multiplication
 var z = x / y; // z = 2: Division
 var z = x % y;
/*var z = x / y; // z = 2: Division
 *
 *   3. Comparison: Comparison operators are used in logical statements to determine equality 
 * or difference between variables or values.
 */
 var a = 2
 var b = 5
 
 a > b // false: greater than
 a < b // true:  less that
 a >= b // false: greater than/equal to
 a <= b // true: less than/equal to
 a != b // Inequality operator/ true: a is not partially equal to b. 
 a !== b // Nonidentity operator/ true: a is not strickly equal to b.
 a == b // Equality operator/ false: a is not partially equal to b.
 a === b// Identity Operator/ false: a is not strickly equal to b.
 
/**   4. Logical: 
 * Logical operators like comparison operators determine weather something is true or false.
 * Syntax.
 *  Or: ||
 */x || y;
/*  And: &&
 */x && y
/*  Not: !
 */var x = !y; 
 
 // Unary Operators 
 
 // The unary plus operator (+) precedes its operand and evaluates to its operand 
 // but attempts to convert it into a number, if it isn't already.
 
const f = 1;
const g = -1;

console.log(+f);
// expected output: 1

console.log(+g);
// expected output: -1

console.log(+'');
// expected output: 0

console.log(+true);
// expected output: 1

console.log(+false);
// expected output: 0

console.log(+'hello');
// expected output: NaN

 
// Although unary negation (-) also can convert non-numbers,
// unary plus is the fastest and preferred way of converting something into a number,
// because it does not perform any other operations on the number.



// Ternary operator 

/**
 *  The conditional (ternary) operator is the only JavaScript operator
 *  that takes three operands:
 *  a condition followed by ( ? ), 
 *  an expression to execute if the condition is truthy followed by a colon ( : ) 
 *  and lastly the expression to execute if the condition is falsy
 */
 
// condition ? true : false
 
 
 var age = 27;
var beverage = (age >= 21) ? "Yes" : "Nope";
console.log(beverage); // "Enjoy your Old Fahsioned"