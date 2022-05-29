const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    //add age value
    people.map(person => { 
              if(person.yearOfDeath == undefined){
                person.age = currentYear - person.yearOfBirth;
              }else{
                person.age = person.yearOfDeath - person.yearOfBirth;
              }
            });

    //sort oldest to youngest      
     people.sort((a,b) => a.age > b.age ? -1: 1 );

    //return name of first person
    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
