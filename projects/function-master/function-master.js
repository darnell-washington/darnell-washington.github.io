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
    let undefArr = [];
    let nonFriendArr = [];
    //Create an instance for an undefined array
    if(name.friends[0] === undefined){
        for(let i = 0; i < array.length; i++){
            undefArr.push(array[i]);
            console.log(undefArr);
      }
      return undefArr;
    } else {
      if(name.friends.length === 1){
        for(let i = 0; i < array.length; i++){
          if(name.friends[0] !== array[i]){
            nonFriendArr.push(array[i])
            console.log(nonFriendArr);
          }
        }
        return nonFriendArr;
      } else {
        for(let i = 0; i < array.length;i++){
          for(let y = 0; y < name.friends.length; i++){
            if(array[i] === name.friends[y]){
              console.log(nonFriendArr)
            } else {
              nonFriendArr.push(array[i])
            }
          }
        }
        return nonFriendArr;
      }
    }
  }

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

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