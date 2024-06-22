const readline = require('readline-sync');
// let myName =readline.question('Your name: ');
// let myAge = readline.question('Your age: ');
// console.log(`${myName}, ${myAge}`);

// let nextYearAge = Number(myage) +1;
// console.log(nextYearAge);

let arrivalTime =readline.question('arrivalTime: ');
isHeOnTime = (arrivalTime==7);
 if(isHeOnTime){
    console.log('Let\'s talk!')
 } else{
    console.log('Write a letter');
 }