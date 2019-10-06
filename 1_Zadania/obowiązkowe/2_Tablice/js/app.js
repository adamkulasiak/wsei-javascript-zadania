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

printTable([1,2,3,4,5,6,7,8,9]);
