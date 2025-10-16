// **04 For Loop=====

const bondhu = ['Rimon', 'Shakib' , 'Akib'];
for (let index = 0; index < bondhu.length; index++) {
    const element = bondhu[index];
    console.log(element);
}

// **05=====Function====

function sum (a,b) {
    const result = a + b;
    return result;
}

const final = sum (4,6);
console.log(final);

// 07: Object==========

const person = {
    name : 'Rimon',
    friens : ['Rimo' , 'Simo' , 'Kimo'],
    age: 10,
    status: 'Single'
}
person.name = "Sadman Riyan Rimon"
console.log(person.name);
console.log(person.friens[2]);
