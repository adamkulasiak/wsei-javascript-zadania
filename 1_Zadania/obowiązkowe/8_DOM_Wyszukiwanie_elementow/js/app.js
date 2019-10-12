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




});
