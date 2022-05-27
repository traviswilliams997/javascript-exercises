const repeatString = function(string, num) {
    
    //if num of times is negative return error
    if(num < 0){
        return 'ERROR';
    }
   
    //variable to hold new string
    let holder = '';
   
    //add string  'num' number of times 
    for(let i = 0; i < num; i++){
        holder += string;
    }

    return holder;

};

// Do not edit below this line
module.exports = repeatString;
