const reverseString = function(string) {
    let newString = '';

    //start from last char of orginal string and each add char to new string
    for(let i = string.length -1; i >= 0; i-- ){
        newString += string.charAt(i);
    }
    return newString;


};

// Do not edit below this line
module.exports = reverseString;
