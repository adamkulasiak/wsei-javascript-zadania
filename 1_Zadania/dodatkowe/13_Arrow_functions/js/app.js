//zad1

const hello = () => {
    console.log('Hello World');
};

hello();

//zad2
const multiply = (n = 1) => {
    return n * 2;
};
console.log(multiply(5));

//zad3
const getBigger = (x1, x2) => {
    if (x1 === x2) {
        return x1;
    } else if (x1 > x2) {
        return x1;
    } else {
        return x2;
    }
};

console.log(getBigger(3, 4));

//zad4
const getSecondMaxNumber = (array) => {
    let sorted = array.sort((el1, el2) => {
        return el2 - el1;
    });
    return sorted[1];
};

console.log(getSecondMaxNumber([2, 3, 1, 6, 100, 49, 5, 7, 8, 9]));

//zad5
(function(param) {
    return param;
}('test'));

//zad6
const writeHello = (num = 5) => {
    if (num < 1 || num > 10) {
        return;
    }
    let counter = 1;
    const handler = setInterval(() => {
        console.log('Hello ', counter);
        if (counter === num) {
            clearInterval(handler);
        }
        counter++;
    }, 1000);
};

writeHello(10);
