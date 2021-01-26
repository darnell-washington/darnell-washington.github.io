/**
 *  0. Control Flow: 
 * Control flow is the process of using if/else statements to set conditions that will execute specific code depending on a boolean value.
 * 
 *  1. Syntax and Delaration
 * The syntax for if/else statments begins with an if statement followed by parenthesis holding the condition to be true or false.
 * After the condition is chosen, close the parenthesis and open a pair of curley braces that will contain the code that will be executed. 
 * To connect more conditions follow the curly braces with an else if statement that can conatain a new condition followed by 
 * the code you want executed.
 * 
 * if(condition to be true){
 * code to be executed
 }
 *///example:
 let a = 10;
 let b = 5;
   //This conditional statement will print the value of whichever letter has the highest value to the two.
 if(a < b){  //The condition set here is if the value of a is less than the value of be, execute the code that follows
    console.log(b);  //The code to be executed if the condition before it is true(the value of b will print to the console)
 } else if(a > b){  //This is the code that will actually be executed because thecondition is true(a is greater than b)
    console.log(a);  //10 will print to the console because 10 is greater than 5(or a is greater than b)
 } else {   //else statements end conditional statements
    console.log("These are equal!")  //If none of the above if/else if statements are true, this code block will execute.
      //If a and b are equal "These are equal!" will print to the console.
 }
/**
 *  2. Don'ts
 * You can't follow an if statement with an if statement.
 * Javascript will read this as if a group of code to execute.
 * 
 * if(1st condidion){
    code 1
   } if (){
    code 2
   }
 * All of the current code would execute because each if statement will be read as new conditions.  
 * You also can't put an else statement in the middle of an if/else if, or the code will recognize this as an end the 
 * current code block/condtional statemnets. 
 * if(1st condition){
    code 1
   } else {
    code 2
   } else if (3re condition){
    code 3
   }
   if statements are the beginning of conditionals
   else if statements follow ifs and can end conditionals if they are not followed by anything.
 * else statements only end conditional statements.
 */