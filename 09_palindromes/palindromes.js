const palindromes = function (word) {
    let count = 0;
    //from stack overflow https://stackoverflow.com/a/25575009
    var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    var spaceRE = /\s+/g;

    //remove punctuation
    noPunct = word.replace(punctRE, '').replace(spaceRE, ' ');
    
    //remove spaces
   finalstring = noPunct.replaceAll(/\s/g,'');
  
    for(let i = finalstring.length -1; i >= 0; i--){
        
            //case insenstive quality check for each char
            if(finalstring.charAt(count).toUpperCase() == finalstring.charAt(i).toUpperCase()){
                count++;
            }else{
                return false;
            }
    }

    return true;

};

// Do not edit below this line
module.exports = palindromes;
