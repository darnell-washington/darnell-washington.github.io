/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myCar;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myCar); // prints => undefined

// 2. initialization or assignment //
var myName = 'Mamba';
console.log(myCar); // prints => Miata

// 3. re-assignment //
var myName = 'Mx-5';
console.log(myCar); // prints => Mx-5

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
/* 
 *  The let statement delclares a varible in block-scope
 *  unlike var which is globally or locally scoped.
 *  
 *  let variables can not be read/written until they have been declared and fully initialized.
 *  if no value is specified on declarations that value becomes undefined.
 *  Accessing the variable before initialization results in a ReferenceError.
 */
 
 // Using let as a declaratioin
 let x = 5;
 
 // This is an example of declacring let in block=scope.  
 if(x === 5){
     let x = 2;
     console.log(x); // Output: 2
 }
 
 // Output is still 5 because x was declared and assigned to 5 in global-scope
 console.log(x); // Output: 5
 
 
 
 /*
  * 
  *  const must be assigned a value when delcared.
  * 
  *  const can be redeclared in another scope or blaock.
  * 
  *  conts does not define a constant value, but a constant reference to a value.
  *  This allows us to change the properties of a constant object.
  * 
  *  const object properties and array elements can be changed but NOT reassigned.
  * 
  * 
  */
  
  // creating a const declaration on an object named car
  const car = {make:'Chrysler', model:'300c', color:'Black'};
  
  // changing a property in car object
  car.color = 'White';
  
  // adding a property in car object
  car.owner = 'Darnell';
  
  
  // Hoisting to the top 
  
  // Hoisting in Javascript is the behavior of moving all declarations to the top of the current scope
  // when a variable is delcared after it has been used.
  
  // Hoisting can only work with the var keyword. Meaning let and const will not hoist!
  
  
  // created an unasigned variable
  var name;
  // console logging name. // undefined
  console.log(name);
  // "Darnell" is hoisted to name variable.
  name = 'Darnell';