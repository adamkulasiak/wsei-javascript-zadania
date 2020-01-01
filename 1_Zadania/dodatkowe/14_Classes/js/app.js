//zad0
class Vehicle {
    constructor(name) {
        if (new.target === Vehicle) {
            throw new TypeError("Cannot construct Vehicle instances directly");
        }
        this.name = name;
    }

    whatICanDo() {
        console.log(name + ' can nothing');
    }
}

class Boat extends Vehicle {
    constructor(name) {
        super(name);
    }

    whatICanDo() {
        console.log(this.name + ' can float');
    }
}

class Car extends Vehicle {
    constructor(name) {
        super(name);
    }

    whatICanDo() {
        console.log(this.name + ' can drive');
    }
}

class Plane extends Vehicle {
    constructor(name) {
        super(name);
    }

    whatICanDo() {
        console.log(this.name + ' can fly');
    }
}

const boat = new Boat('boat');
const car = new Car('car');
const plane = new Plane('plane');

boat.whatICanDo();
car.whatICanDo();
plane.whatICanDo();


//zad1

class Kaczka {
    constructor(type = 'zwykla kaczka') {
        this.type = type;
    }

    kwacz() {
        console.log('kwa kwa');
    }

    plywaj() {
        console.log('plyne...');
    }

    wyswietl() {
        console.log(`Wyglada jak ${this.type}`);
    }

    lec() {
        console.log('Lecę');
    }
}

const kaczucha = new Kaczka();
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl();


//zad2
class DzikaKaczka extends Kaczka {
    constructor(type = 'dzika kaczka') {
        super(type);
    }
}

const dzikaKaczucha = new DzikaKaczka();
dzikaKaczucha.kwacz();
dzikaKaczucha.plywaj();
dzikaKaczucha.wyswietl();


//zad3
class KrzyzowkaKaczka extends Kaczka {
    constructor(type = 'krzyżówka') {
        super(type);
    }
}

const krzyzoKaczucha = new KrzyzowkaKaczka();
krzyzoKaczucha.kwacz();
krzyzoKaczucha.plywaj();
krzyzoKaczucha.wyswietl();


//zad4
//dodane w klasie bazowej


//zad5
class GumowaKaczka extends Kaczka {
    constructor(type = 'gumowa kaczka') {
        super(type);
    }

    lec() {
        console.log('Gumowe kaczki nie potrafia latac');
    }
}

const gumowaKaczka = new GumowaKaczka();
gumowaKaczka.kwacz();
gumowaKaczka.plywaj();
gumowaKaczka.wyswietl();
gumowaKaczka.lec();
