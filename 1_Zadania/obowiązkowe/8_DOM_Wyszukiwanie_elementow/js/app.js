document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

     //zad00

     const title = document.querySelector('.title');
    
     function getDataAnimation(element) {
        let animation = element.dataset.animation;
        return animation;
     }

     const result = getDataAnimation(title);
     // console.log(result);


     //zad01

     const home = document.querySelector('#home');
     const home2 = document.getElementById('home');
     console.log(home, home2);

     const direction = document.querySelector('li');
     console.log(direction);

     const block = document.querySelector('.block');
     console.log(block);

});
