//zad0

const car = {
    brand: 'Mercedes',
    color: 'Black',
    numberOfKilometers: 0,
    printCarinfo: function() {
        return `${this.color} ${this.brand}, ${this.numberOfKilometers}`;
    },
    drive: function(kilometers) {
        this.numberOfKilometers += kilometers;
    }
};

// console.log(car.printCarinfo());
// car.drive(20);
// console.log(car.printCarinfo());


//zad01

car.datesOfInspections = [
    '2017-02-02',
    '2018-02-02',
    '2019-02-02'
];

car.addDateOfInspection = function(date) {
    this.datesOfInspections.push(date);
}

car.getAllInspections = function() {
    return this.datesOfInspections;
}

// car.addDateOfInspection('2016-02-02');
// console.log(car.getAllInspections());

