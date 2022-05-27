const ftoc = function(temp) {
  //conversion
  let newTemp  = (temp - 32 )  * (5/9);

  //round to 1 decimal
  return Math.round(newTemp * 10) / 10 ;

};

const ctof = function(temp) {
  //conversion
  let newTemp = (temp * (9/5) )  + 32;

  //round to 1 decimal
  return Math.round(newTemp * 10) / 10 ;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
