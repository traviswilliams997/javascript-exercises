const sumAll = function(num1, num2) {

    //negative number check
    if(num1 < 0 || num2 < 0){
        return 'ERROR';
    }
    //non number check
    if(typeof num1 !== 'number'  || typeof num2 !== 'number' ){
        return 'ERROR';
    }

    let sum = 0;
    //num 2 greater than num 1 check
    if( num1 < num2){
        for(let i = num1; i <= num2; i++ ){
            sum += i;
        }
    }else{
        for(let i = num2; i <= num1; i++ ){
            sum += i;
        }

    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
