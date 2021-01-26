//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object)
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let valArr = Object.values(object);
    for(let i = 0; i < valArr.length;i++){
        if(typeof valArr[i] !== "string"){
            valArr.splice(i, 1);
        }
    }
    return valArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return "array";
    } else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let newArr = []
    let strArr = string.split(" ");
    console.log(strArr)
        for(let i = 0; i < strArr.length; i++){
            newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1));
    }
    return newArr.join(" ");
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return `Welcome ${object.name.charAt(0).toUpperCase() + object.name.slice(1)}!`
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return `${object.name.charAt(0).toUpperCase() + object.name.slice(1)} is a ${object.species.charAt(0).toUpperCase() + object.species.slice(1)}`
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
        if(Array.isArray(object.noises)){
            if(object.noises[0] === undefined){
                return "there are no noises"
            } else {
                return object.noises.join(" ")
            }
    } else {
        return "there are no noises"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  let result = false;
        let strArr = string.split(" ");
        console.log(strArr)
        for(let i = 0; i < strArr.length; i++) {
            if (strArr[i] === word) {
                return result = true;
            }
        }
        return result;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
        object.friends.push(name);
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
        let result = false;
        if(object.friends === undefined){
            return result;
        } else {
            for(let i = 0; i < object.friends.length; i++){
            if(object.friends[i] === name){
                result = true
                }    
            }
        }
        return result;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//return a list of all the array names that <name> is not friends with"////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let newArr = [];
  for(let person of array) {
        // Checking if the name is not the name from the object and the name is not inside the friends array.
        if(person.name !== name && !person.friends.includes(name) ) {
            // Adding that person to the friends array
            newArr.push(person.name);
        }
    }
    return newArr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    let newObject = {...object}
    newObject[key] = value;
    return newObject
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(let prop of array){
        if(object.hasOwnProperty(prop)){
            delete object[prop]
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
 let removeDupes = [...new Set(array)];
return removeDupes;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}