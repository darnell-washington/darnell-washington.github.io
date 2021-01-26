/**
 *  0. Data Types
 * Data Types are the different forms of values that java can understand and maniupulate.
 * There are simple/primitive datatypes and complex data types.
 * 
 *  1. Simple Data Types
 * Simple Data types include:
 *
 * Undefined- This value is automatically assigned to any variable that has only been declared.
 * The same goes for if this variable is an argument in a function call that doesn't contain corresponding parameters.
 */
var undef; //Since undef hasn't been assigned a variable it's value is undefined;
console.log(undef);//undefined will be logged to the console

/* Numbers- This value can be any numeric value and can operate as such.
 */
var a = 7;// The value of a is 3.
console.log(a)// This will log 7 to the console.
var times2 = a * 2;// times2 is a variable that will multiply a times 2.

/* Strings- This value is any text stored within quotation marks.
 * Once in quotes even numbers are recognized as strings.
 */ 
var sentence = "This is a string"
console.log(sentence)// "This is a string" will print to the console

/* Boolean- Boolean values are true or false. Condidionals use boolean values to determine what route to take in the code.
 */
var bool = true// The varialble bool is set to true
console.log(bool)// This will print true to the console

/* Null- This value is similar to undefined but we can use it to determine if something has value. 
 */
var nothing = null
console.log(nothing) //This will print no to the console
/**
 *  2. Complex Date Types
 * Complex Data Types include:
 * 
 * Arrays - Arrays are data types that can hold different values at each index
 * Any data type can be stored in these index
 * An index is a values place within an Array
 * The first index of Arrays always begins at 0.
 * Arrays are used best whenn representing lists. 
 */ 
var myArray = [1, "two", true, ["this", 2, false]] 
// At index 0 the value is the number 1. We can access this value using bracket notation like so.. myArray[0]
// Once we access the value we want we can use this syntax and treat it as the value
var plus3 = myArray[0] + 3;// The value of plus3 is now set to the Array's first index plus 3
console.log(plus3)// This will print 4 to the console
// You can access the data within arrays that are in an array the same way
var plus1 = myArray[3][1]//We first access the 3rd and final index of the parent array. 
//Once in that array we can treat myArray[3] as it's own array and access the values within it. myArray[3][1]
/**
 *  3. Objects - Objects are data types that can also hold any data type in it's key value pairs
 * Keys are recognized as string values when refrenced.
 * Values are assigned to keys. They can be accessed using dot or bracket notation shown below.
 * Just use the objects name followed by brackets or a dot notation and the key
 */
 var myObject = {
    key1: 1,// Refrencing key1's value using bracket notation looks like this myObject[key1]
    key2: "value2",// Refrencing key2's value using dot notation look like this myObject.key2
    key3: [5,6,7],// To access a value of this array you must first refrence the third key. myObject.key3[0]
    key4: {
        name: "Darnell",// The name of this key is actually name
        age: 27,// The name of this sey is age
    }
 }
console.log(myObject)// This prints the entire object to the console
console.log(myObject["key1"])//prints 1 to the console
console.log(myObject.key2)//prints the string "value2" to the console
console.log(myObject.key3[1])// This prints the number 6 to the console
//This will access the value in key3 witch is an array
//Then we can use it like an array and access its second index
console.log(myObject.key4.name)//This will print "Darnell" to the console since name is the key in key4's object.