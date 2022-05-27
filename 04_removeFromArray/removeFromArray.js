const removeFromArray = function(array, ...args) {
 
//for all arguments  entered after orginal array
    for (const a of args) {
        //loop through original array  
        for(let i = 0; i < array.length; i++){
            //check if equal to argument we wish to delete
            if(array[i] ===  a ){    
                //remove only the argument to be deleted
                array.splice(i, 1);
                
            }

            
        }
    }
   
    return  array;

};

// Do not edit below this line
module.exports = removeFromArray;
