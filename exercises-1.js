function add(num1,num2)
{
    return num1 + num2;
};
console.log(add(4,8));



function divide(x,y)
{
    return x / y;
};
console.log(divide(9,3));



let subtract = function(a,b,c)
{
    return a - b - c;
};
console.log(subtract(45,15,20));



const price = function(a1,a2)
{
    return a1 + " are really " + a2;
};
console.log(price("Diamonds","expensive!"));



var animal = {name : 'Dog', age : "3", breed : "Pomerian"
}
console.log(animal);




let harman = prompt('What is your name ?', 1);

alert(`Your name is ${harman}!`);




// How old are you and your wife?
let husbandAge = prompt('How old are you?', 55);
let wifeAge = prompt('How old are you?', 45);

// Why doesn't this work? I see 5545 and it should be 100 right?
alert(`${husbandAge} + ${wifeAge}=100`); // You are 100 years old!

// these are strings not numbers , so arithmatic operations can't be done