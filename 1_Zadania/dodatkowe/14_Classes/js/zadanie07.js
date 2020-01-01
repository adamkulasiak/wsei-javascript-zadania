class MenuGenerator {
    constructor(type, elements) {
        this.type = type;
        this.elements = elements;
    }

    getType() {
        console.log(this.type);
    }

    showItems() {
        console.log(this.elements);
    }
}

class HorizontalMenuGenerator extends MenuGenerator {
    constructor(type, elements) {
        super(type, elements);
    }
}

class VerticalMenuGenerator extends MenuGenerator {
    constructor(type, elements) {
        super(type, elements);
    }

    doAnimate() {
        console.log('Aminacja menu typu: ' + this.type);
    }
}

let hMenuGenerator = new HorizontalMenuGenerator('horizontal', ['start', 'about']);
hMenuGenerator.getType();
hMenuGenerator.showItems();

let vMenuGenerator = new VerticalMenuGenerator('vertical', ['home', 'contact']);
vMenuGenerator.getType();
vMenuGenerator.showItems();
vMenuGenerator.doAnimate();