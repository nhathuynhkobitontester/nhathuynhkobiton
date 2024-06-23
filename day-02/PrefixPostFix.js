let a=1;
let b=2;
let c = ++a + b++;
//prefix -->  right operand --> assignment --> postfix
console.log(c);
if (typeof c === "number") {
    console.log('true');
}