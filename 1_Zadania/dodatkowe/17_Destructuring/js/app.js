//zad0a

const [snow, , sun] = ["snow", "rain", "sun"];
console.log(snow, sun);

//zad0b

const slider = {
    type: 'infinite',
    numberOfItems: 10,
    center: true,
    autoStart: true,
};

const { type, autoStart } = slider;
console.log(type, autoStart);


//zad1

const names = ['Ala', 'Ola', 'Ela'];

const [name1, name2, name3] = names;
console.log(name1, name2, name3);


//zad2

const generateRandomNumbers = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        arr.push(Math.floor(Math.random() * (5 - 1)) + 0);
    }
    return arr;
};

const [, one, , three , , ] = generateRandomNumbers();
console.log(one, three);


//zad4

const getAnimal = () => {
    const animal = {
        name: 'Mruczek',
        age: 10,
        getVoice: () => 'miau miau'
    };
    return animal;
};

const { 
    name: catName,
    getVoice: catVoice
 } = getAnimal();
console.log(catName, catVoice);