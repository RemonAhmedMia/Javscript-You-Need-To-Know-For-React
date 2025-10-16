const firstName = 'Sadman Riyan';
const lastName = 'Rimon';

console.log(`Hello My Name Is ${firstName} ${lastName}`);


// Spread Operator====

const numbr = [1,2,3,4,5,6];
//console.log(numbr); evhabe dile kebol pura array ta dhekabe

console.log(...numbr); //ekhn array er man gula k dhekabe

//Noton Array jug korar jonno
newNumber =[...numbr , 10,20,30];
console.log(newNumber);

// একাধিক Array জোড়া লাগানো========
const fruits = ['apple', 'mango'];
const moreFruits = ['banana', 'orange'];

const allFruits = [...fruits, ...moreFruits];

console.log(allFruits);
// ['apple', 'mango', 'banana', 'orange']