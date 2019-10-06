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

    console.log(newArray);
    return newArray;
}

distFromAvarage([1,2,3,4,5,6,7])