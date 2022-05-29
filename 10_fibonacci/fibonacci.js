const fibonacci = function(nth) {
    let n = 2;
    let a = 1;
    let b = 1;
    if(nth < 0){
        return "OOPS";
    }
    

    for(let i = n; i < nth; i++){
        let temp = a + b;
        a = b;
        b = temp;

    }
    return b;



};

// Do not edit below this line
module.exports = fibonacci;
