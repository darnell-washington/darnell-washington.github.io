/**
* A function is block of code that takes an input and produces an output of some sort. 
* Functions are the backbone of javascript, and allow code to act apon itself or other functions.
* They are executed when they are invoked, and when they get declared they are immedietly hoisted.
* 
*   1. Syntax:
* A function is declared using the function keyword, followed by a name.
* Parentheses house the parameters. These are separated by commas
* The code to be executed, is placed inside curly brackets
* The return keyword will stop the function from executing.
* 
* To call or "invoke" a function use its name followed by the data you want to act on in parenthesis.
* The data in the parenthesis during a function call are called arguments.
* 
*   1.5 Parameters VS Arguments
* Parameters are place holders for certain types of data. Here we determine what a function can use and how.
* Arguments are used when invoking or calling a function. This IS the actual data we are running the function on, 
* where-as parameters are place holders.
* ex:
* The first function below is anonomys because it is not assigned a variable.
*/
function myFunc() {//This function has a name and no parameters. 
  console.log("Hello")//It has no return key word, but if called the code will execute.
}

myFunc();//Logs "Hello" to the console. No areguments are needed for this function to run.

// assigning a functions to a variable

let times2 = function(num){//The num paramater will hold a number.
  return num * 2;//This is the code that will be executed.
}

times2(10);//This returns 20;



/**
 *  2. Scope:
 * Functions are block scope. Whenever a function is invoked everything created in its code block is only available
 * to any scope further created within it.
 * Think parent and children.
 * Children functions can access parent functions for their values but not the other way around.
 * Any variable declared within the window object is viewed in the Global Scope.
 * Global variables can be used by any function declared in the window.
 * Otherwise the variable is realzed as local scope.(local to the function it's in. 
 */
var string1 = "This is in the global scope"
let func = function(){
  var string2 = "This is local and cant be used outside of this functions"
  console.log(string1)
}
//console.log(string2);//This code creates a runtime error. This variable does not exist in the window object.

func()//This will print the string in string1.  
