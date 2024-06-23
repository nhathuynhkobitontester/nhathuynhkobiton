const readline = require('readline-sync');
let number = readline.question('Input your number:');
if(number % 2 == 0){
    console.log('Even number');
} else if(number % 2 !=0){
    console.log('Odd number');
}