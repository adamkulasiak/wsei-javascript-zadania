document.addEventListener('DOMContentLoaded', function () {

    // const array = [2, 15, 268, 288, [358, 2, 14, 256], 586];
    // // var sorted= array.sort((a,b)=>a-b);
    // // // console.log(sorted);
    // // // var newVar = array.flat();
    // // // console.log(newVar);
    // // newVar.sort((a,b)=>a-b);
    // var flat = array.flat();
    // flat.sort((a, b) => a - b);
    // console.log(flat);
    // var newFlat = flat.map((element) => element * 2);
    // console.log(newFlat);
    // var newVar = newFlat.reduce((a, b) => a * b);
    // console.log(newVar);

});

//zad0

const whoAreYou = (person) => {
    return `My name is ${person.name} ${person.lastName}.
            I am ${new Date().getFullYear() - person.yearOfBirth} years old.
            My profession is ${person.profession}`;

};

const person = {
    name: 'Vlad',
    lastName: 'Draculea',
    yearOfBirth: 1431,
    profession: 'Lord of Wallachia'
};

console.log(whoAreYou(person));


//zad1

let x = 10, y = 15;
console.log(`Suma dwóch liczb ${x} i ${y} to ${x + y}`);


//zad2

let name = 'Adam', lastName = 'Kulasiak';
console.log(`Moje imie i nazwisko to: ${name} ${lastName}`);


//zad3

const logText = () => {
    console.log(`"Myślę, że jest wiele piękna
    w posiadaniu problemów.
    To jeden ze sposobów w jaki się uczymy"
    Herbie Hancock`);
};

logText();


//zad4

const button = {
    value: 'Send message',
    idName: 'sendMsg',
    width: '100px',
    padding: '20px',
};

console.log(`To jest button.
             Jego szerokość to ${button.width}.
             Napis, który na nim widnieje to "${button.value}"`);