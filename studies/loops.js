/**
 *  Loops:
 * Loops execute repeated code based on a set condition.
 * Types:
 * 
 *      1. For Loops:
 * A for loop repeats until a specified condition evaluates to false.
 * These can iterate through arrays using thier index or until a condition with a numeric value is met.
 * 
 * Syntax: for loops are written using the for keyword followed by paranthesis.
 * The parenthesis hold the conditions of the loop seperated by semi-colons.
 * The conditions start with the initializer which chooses what value the loop begins at.
 * The second part of the loop's conditions is the condition expression. written using a conditonal operator to represent when the loop will end.
 * The final piece is the increment expression, giving new value to the iterator when it is repeated.
 * 
 * for(where i begins; when to stop iterating; how much to iterate by){code to be executed}
 */ 
for (var i = 0; i < 10; i++){//Setting the variable i to 0 first; This loop will continue as long as i is less than 10; The amount you want iterate.
    console.log(i)//This will log 0-9 one at a time to the console
}

let arr = [1, 2, 3, 4];
//It's also possible to loop backwards through arrays.
for(var i = 0; i < arr.length; i++){
    console.log(i);
}
/**     2. For In Loops:
 * For in loops are used to iterate over key value pairs in objects.
 * For each distinct property, JavaScript executes the specified statements.
 * 
 * Syntax: For in loops start with the key word for as well, but contain the in keyword in the conditional statement.
 */
 var myObj = {
     name: "Darnell",
     age: 27,
 }
for (var key in myObj){//For every key property in the object log the value to the console.
    console.log(myObj[key]);
}
//For of loops are written the same as for in loops.
for(var keyy of myObj){
    console.log(key)//Logs the names of the keys for each key in the object.
}
/**      3. While Loops:
 * A while loop also repeats until a specified condition evaluates to true.
 * 
 * Syntax: While keyword starts these loops, followed by parenthesis containing the condition.
 * The code to be executed is in curly braces after the conditional.
 * 
 * while (condition)
 * statement
 * 
 */
var count = 0;
while(count < 5){
    console.log(count);
    count ++;
}
/**
 *      4. The switch statement evaluates an expression, matching the expression's value to a case clause, 
 * and executes statements associated with that case, as well as statements in cases that follow the matching case.
 * 
 * The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements 
 * associated with that case, as well as statements in cases that follow the matching case.
 * 
 * Basically the conditional is written in each case statement.
 * In every case statment we'll be chaging the result of the expression.
 * Before creating another condtional case we have to use the break key word to move on.
 * The "default" expression is the last step in switch statements.
 * 
 */
 var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal will go on Noah\'s Ark.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not.');
  switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
    [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
};