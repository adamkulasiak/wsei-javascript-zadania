
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//zad00
function checkArray(arr2D) {
    let newArr = [];
    arr2D.forEach(element => {
        element.forEach(el => {
            if(el %2 === 0) {
                newArr.push(true);
            }else {
                newArr.push(false);
            }
        })   
    });
    //console.log(newArr);
    return newArr;
}
var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ];
// checkArray(arr);

//zad01

//1
console.log(task1Array[3][2]);

//2
task1Array.forEach(elem => {
    console.log(elem.length);
});

//3
for(let i = 0; i < task1Array.length; i++) {
    for(let j = 0; j < task1Array[i].length; j++) {
        console.log(task1Array[i][j]);
    }
}
