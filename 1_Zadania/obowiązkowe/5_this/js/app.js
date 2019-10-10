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

console.log(car.printCarinfo());
car.drive(20);
console.log(car.printCarinfo());