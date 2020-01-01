//zad0

const namesA = ['ala', 'ola', 'ela', 'kasia', 'basia'];
const namesB = ['igor', 'marian', ...namesA, 'Jan', 'Karol'];

console.log(namesB);

const getAverage = (...numbers) => {
    const count = numbers.length;
    let sum = numbers.reduce((prev, cur) => {
        return prev + cur;
    });
    return sum / count;
};

console.log(getAverage(2, 4, 5, 6, 7, 79));

//zad1

let name = 'Adam';
let arr = [...name];
console.table(arr);

//zad2

const fruits = ['apple', 'orange', 'pear'];
const vegetables = ['cucumber', 'potato', 'tomato'];
const mix = [...fruits, ...vegetables];
console.table(mix);