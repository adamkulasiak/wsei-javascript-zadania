document.addEventListener('DOMContentLoaded', function () {
    var numbers = [5, 10, 12, 20, 100];
    var result = numbers.reduce(function (prev, curr, index, array) {
        return prev * curr;
    })
    console.log(result);

    //zad0
    var cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
    let length = cities.map(city => city.length);
    console.log(length);

    //zad1
    //todo


    //zad2
    var animals = ["cat", "shrimp", "giraffe"];
    animals.forEach(animal => {
        console.log(animal);
    });

    //zad3
    var years = [1995, 1856, 2014, 1987];
    let ages = years.map(year => (new Date()).getFullYear() - year);
    console.log(ages);

    //zad4
    var numbersArr = [1,2,3,4,5,6,7,8,9,10];

    var sum = numbersArr.reduce((a, b) => a + b);
    console.log('Suma: ', sum);

    var multiply = numbersArr.reduce((a, b) => a * b);
    console.log('Iloczyn: ', multiply);
});