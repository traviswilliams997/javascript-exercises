const add = function(a, b) {
   return a + b;
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(arr) {
   return arr.reduce((sums, value) => {return sums + value;}, 0);        
};

const multiply = function(arr) {
  return arr.reduce((mul, value) => {return mul * value;}, 1);    

};

const power = function(a, b) {
  let power = 1;
  for(let i = 1; i <= b; i++){
    power *= a;
  }
  return power;
  
};

const factorial = function(num) {
  if(num === 0){
    return 1;
  }
  let ans = 1;
  for(let i = 1; i <= num; i++){
     ans *= i;
  }
  return ans;


	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
