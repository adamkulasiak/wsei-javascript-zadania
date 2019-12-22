document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     //zad00

    const ex5 = document.querySelectorAll('.ex5 li');
    //console.log(ex5);
    ex5[4].classList.add('big');
    for (let i = 0; i < ex5.length; i++) {
        if (i === 0 || i % 2 === 0) {
            ex5[i].style.backgroundColor = 'green';
        }
        if (i === 0 || i % 3 === 0) {
            ex5[i].style.textDecoration = 'underline';
        }
    }

    //zad01

    const chrome = document.querySelector('.chrome');
    const edge = document.querySelector('.edge');
    const firefox = document.querySelector('.firefox');

    edge.style.backgroundImage = 'url("./assets/img/edge.png")';
    firefox.style.backgroundImage = 'url("./assets/img/firefox.png")';

    chrome.nextElementSibling.setAttribute('href', 'https://www.google.com/intl/pl_pl/chrome/');
    chrome.nextElementSibling.innerText = 'Chrome';

    edge.nextElementSibling.setAttribute('href', 'https://www.microsoft.com/pl-pl/windows/microsoft-edge');

    firefox.nextElementSibling.setAttribute('href', 'https://www.mozilla.org/pl/firefox/new/');
    firefox.nextElementSibling.innerText = 'Firefox';
    chrome.style.width = '100px';

    //zad02
    const name = document.querySelector('#name');
    const favColor = document.querySelector('#fav_color');
    const favMeal = document.querySelector('#fav_meal');

    name.innerHTML = 'Adam Kulasiak';
    favColor.innerHTML = 'black';
    favMeal.innerHTML = 'pizza';
});