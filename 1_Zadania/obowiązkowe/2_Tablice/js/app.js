//zad0
const distFromAvarage = (arr) => {
    let avg = 0, sum = 0;
    arr.forEach(item => {
        sum += item;
    })

    avg = sum / arr.length;

    let newArray = [];
    arr.forEach(item => {
        newArray.push(item - avg);
    })

    //console.log(newArray);
    return newArray;
}

distFromAvarage([1,2,3,4,5,6,7]);

//zad01
const favouriteFruits = ['apple', 'orange', 'pear', 'lemon'];
// console.log(favouriteFruits[0]);
// console.log(favouriteFruits[favouriteFruits.length-1]);
// favouriteFruits.forEach(item => {
//     console.log(item);
// })


//zad03
function printTable(array) {
    array.forEach(item => {
        console.log(item);
    })
}

// printTable([1,2,3,4,5,6,7,8,9]);

//zad04
function multiply(array) {
    let sum = 1;
    for(var i=0; i<array.length; i++) {
        sum *= array[i];
    }
    console.log(sum);
    return sum;
}

// multiply([1,2,3,4,5,6,7]);

//zad05
function getEvenAvarage(array) {
    let avg = 0;
    let evenArray = [];
    array.forEach(item => {
        if(item %2 == 0) {
            evenArray.push(item);
        }
    })

    if(evenArray.length == 0) {
        return null;
    }

    let sum = evenArray.reduce((prev, next) => prev + next);
    avg = sum / evenArray.length;

    // console.log(avg);
    return avg;
}

// getEvenAvarage([1,2,3,4,5,6,7]);
// getEvenAvarage([1,1,1,1]);
// getEvenAvarage([2,8,3,7,4]);

//zad06
function sortArray(array) {
    array.sort((a,b) => a - b);
    console.log(array);
    return array;
}

sortArray([145,11,3,64,4,6,10]);