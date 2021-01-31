// String manipulation!

/** string methods help you to manipulate your string into what you need.
 * 
 * Split: 
 * This will split a string into an array. The first parameter is the parenthesis represents where to split it.
 */
 let sentence = "Wow what a project!"
 sentence.split(" ");//This output will be [Wow, what, a, project!] Now an array with 4 index's.

/**Slice:
 * This string method will slice out a chosen section of a string and return the changed string.
 * The first argument in this method represents the spot from which to take something.
 * The second argument represents how much to extract(How many indexs).
 */  
let strSlice = "DA1arnell"
strSlice.slice(1, 2)//The 1 represents where to start(the indexwith the one value[A])
//The second represents how many indexs over we will slice.(2 indexs so A and 1).
/**Replace:
 * Replace is a useful tool that can choose what to replace in a string and what to replace it with.
 * Syntax: a . is followed by the replace keyword which will have a pair of parenthesis after it
 * these parenthesis hold the values you want to replace and what will take it's place.\
 * Warning: Replace recognizes patterns. be sure what you're replacing doesn't hve other uses.
 */ 
 let str = "Darbell";
 str.replace("b", "n")// This will change str into "Darnell"


/**toUpperCase & toLowerCase
 * These return string properties manipulated into a case of your choosing.
 * Syntax:
 * the . begins these methods. attach a period to the end of the variable representing your string.
 * follow it with toUpperCase or toLowerCase camelCased followed by n empty pair of parenthesis.
 */
let string = "darnell"
// .toUpperCase returns the string all in CAPS!
let newString = string.toUpperCase();

console.log(newString); // returns "DARNELL"

newString.toLowerCase()//This will make newString = "darnell".

/**Index Of
 * This method returns the index of the first instance of a specified value.
 */
 let indexString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 indexString.indexOf("F")//This will return the number 5 because the first index is always 0.
 