
//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = "Agata";
//name = "Aneta";
// nie da sie tego zrobic bo jest to stala tylko do odczytu


//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1, 2, 10, 4, 5];
//simpleArray = [];
console.log(simpleArray);
//a - nie da sie
//b - da sie
//c - da sie
//Stala nie pozwala nam zmieniac referencji do tablicy, jednak mozemy modyfikowac zawartosc tej tablicy


//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
    name: "Puszek",
    skill: "barking",
    age: 10
}

//dog = {};

//a nie da sie
//b - da sie
//c - da sie
// tak samo jak przy tablicy, const nie pozwala nam zmienic referencji do obiektu, mozemy modyfikowac zawartosc obiektu
