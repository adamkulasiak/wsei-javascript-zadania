let foods = [];

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }

  print() {
    console.log(` Nazwa: ${this.name}
                  Białko: ${this.protein}
                  Węglowodany: ${this.carbs}
                  Tłuszcz: ${this.fat}`);
  }
}

class FastFood extends Food {
  constructor(name, protein, carbs, fat) {
    super(name, protein, carbs, fat);
  }
}

class FatFreeFood extends Food {
  constructor(name, protein, carbs, fat) {
    super(name, protein, carbs, fat);
  }
}

document.addEventListener('DOMContentLoaded', function() {

  const name = document.querySelector('#name');
  const proteins = document.querySelector('#proteins');
  const carbs = document.querySelector('#carbs');
  const fat = document.querySelector('#fat');
  const submitBtn = document.querySelector('#add');
  const ul = document.querySelector('#products');
  const form = document.querySelector('form');

  const countCalories = (proteins, carbs, fat) => {
    return (proteins * 4) + (carbs * 4) + (fat * 9);
  };

  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let li = document.createElement('li');
    li.innerHTML = `
                  Nazwa: ${name.value}
                  Białko: ${proteins.value}
                  Węglowodany: ${carbs.value}
                  Tłuszcz: ${fat.value}`;
    ul.appendChild(li);

    const calories = countCalories(proteins.value, carbs.value, fat.value);
    let obj;
    if (calories >= 250) {
      obj = new FastFood(name.value, proteins.value, carbs.value, fat.value);
    } else {
      obj = new FatFreeFood(name.value, proteins.value, carbs.value, fat.value);
    }
    foods.push(obj);
    console.table(foods);
    form.reset();
  });
});
