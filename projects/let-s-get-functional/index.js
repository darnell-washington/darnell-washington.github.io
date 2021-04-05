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
    //create avariable to hold the reduce function
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
        let result = _.filter(array, function(customerObj){
            //let friendsArr = customerObj.friends
            for(let i = 0; i < customerObj.friends.length; i++){
                if (customerObj.friends[i].name === name){
                    return customerObj;
                }
            }
        });
        //console.log(result);
         return _.pluck(result, "name");
    };

var topThreeTags = function(arr){
    var result = [];
//assign the variable of tagsArray to a reduced version of the input array.
var tagsArray = _.reduce(arr, function(acc, curr){
    //get the tags from the current customer object and let it equal tags
let tags = curr.tags;
//concat all tags from each person into empty seed array
acc = acc.concat(tags); 
     return acc;
},[]);
// console.log(tagsArray);
//code that counts the tags and puts them in a counter object with the objects as keys and numbers as values
var tagsCountObj =_.reduce(tagsArray, function(acc, curr){
    if(acc[curr]){
        acc[curr] += 1;
    } else {
        acc[curr] = 1;
    } return acc;
}, {});
//code that gets the counters with the max value
    var getMax = object => {
        return Object.keys(object).filter(x => {
             return object[x] == Math.max.apply(null, 
             Object.values(object));
       });
    };
result = getMax(tagsCountObj);
return result;
};

function genderCount(customerArray, obj = {}){
    if(!customerArray.length){
      //base case
      return obj;
    } else {
      let gender = customerArray[0].gender;
      if(obj[gender]){
        obj[gender]++
      } else {
        obj[gender] = 1;
      }
      return genderCount(customerArray.slice(1), obj)
    }
}

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
