// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underscore');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./darnell-washington.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let maleCount = _.filter(array, function(customerObj){
        return customerObj.gender === "male";
    })
    return maleCount.length;
};

var femaleCount = function(array) {
    let femaleCount = _.reduce(array, function(acc, customerObj){
        if(customerObj.gender === "female") {
            acc++
            //console.log(femaleCount)
        }
        return acc;
    }, 0)
    return femaleCount;
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(acc, customerObj){
        if(customerObj.age > acc.age){
            acc = customerObj
        }
        return acc
    })
    return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(acc, customerObj){
        if(customerObj.age < acc.age){
            acc = customerObj
        }
        return acc
    })
    return youngest.name;
};

var averageBalance = function(array){
    let avgBal = _.reduce(array, function(acc, customerObj){
        acc += Number(customerObj.balance.replace(/[^\d\.]*/g, ''))
        //console.log(acc)
        return acc
    }, 0)
    return avgBal/array.length;
};

var firstLetterCount = function(array, letter){
    //Find how many customers name's in <array> begin with <letter>
    let same = _.reduce(array, function(acc, customerObj){
        if(customerObj.name[0].toLowerCase() === letter.toLowerCase()){
            //console.log(acc);
            return acc += 1
        } 
        return acc
    }, 0)
    return same;
};

var friendFirstLetterCount = function(array, customer, letter){
    //create avariable to hole the reduce function
    let same = _.reduce(array, function(acc, customerObj){
        //check if the customer is the current customer obj.
        if(customerObj.name === customer){
            //loop through the friends array and compare letter to the friend name
            let acc = _.filter(customerObj.friends, function(friend, i, friends){
                return friend.name[0].toLowerCase() === letter.toLowerCase()
            })
            //console.log(acc)
            return acc; 
        }
        return acc;
    }, []);
    return same.length;
};

var friendsCount = function(array, name){
    //if the friends list contains name, return that customers name
    // _.reduce(array, function(acc, ){
        
    // })
};

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
