const readline = require('readline-sync');
let height = readline.question('Please input your hieght: ');
let weight = readline.question('Please input your weight: ');
let BMI = weight / (height * 2);
if(BMI <= 18.5){
    console.log('Underweight');
} else if(BMI >= 18.5 && BMI<24.9){
    console.log('Normal weight')
} else if(BMI >=25 && BMI <=29 ){
    console.log('Overweight');
} else{
    console.log('Obesity')
}