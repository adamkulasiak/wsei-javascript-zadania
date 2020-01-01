let people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
];

const setFunnyName = (...params) => {
    let persons = [];
    let professions = [];
    for (let i = 0; i < params.length; i++) {
        if (i == 0 || i % 2 === 0) {
            persons.push(params[i]);
        }else {
            professions.push(params[i]);
        }
    }
    for (let i = 0; i < persons.length; i++) {
        let ob = { person: persons[i], profession: professions[i] };
        people.push(ob);
    }
};

setFunnyName('Adam', 'programmer', 'Marta', 'recruiter');
console.table(people);
