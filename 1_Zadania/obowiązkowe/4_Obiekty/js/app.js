// zad0a

const city = {
    capital: 'Warsaw',
    population: 38000000,
    president: 'Andrzej',
    primeMinisters: [
        'Marek ZAGÓRSKI',
        'Dariusz PIONTKOWSKI',
        'Krzysztof TCHÓRZEWSKI'
    ]
};

// console.log(`capital: ${city.capital}`);
// console.log(`population: ${city.population}`);
// console.log(`president: ${city.president}`);
// console.log(`primeMinisters: ${city.primeMinisters}`);

//zad0b

const timeMachine = {
    shape: 'circle',
    model: 'pumba',
    run: (date, place) => {
        console.log(`Now(${date}) we are in ${place}`);
    }
};
console.log(`shape: ${timeMachine.shape}`);
console.log(`model: ${timeMachine.model}`);
timeMachine.run('2050-01-01', 'the Moon');