document.addEventListener('DOMContentLoaded', function () {

    const x = 5;
    let y = 3;

    for (var i = 0; i < 10; i++) {
        console.log(i, y);
    }
    console.log(i, y);

    function myFn(param1) {
        let y = 4;
        let i = 20;
        console.log(param1, y, i);


    }
    myFn(i)

    console.log(x);
    {
        let y = 25;
        console.log(y);
        var z = 50;

    }

    console.log(z, y);

    //zad3

    for (var i = 0; i < 10; i++) {
        console.log('Inside loop: ', i);
    }
    console.log('Outside loop: ', i);
    // Poza petla zmienna i ma wartosc 10

    for (let j = 0; j < 10; j++) {
        console.log('Inside loop: ', j);
    }
    //console.log('Outside loop: ', j);
    //z zewnatrz nie ma dostepu do zmiennej j (blad na konsoli, j is not defined)

    //zad5

    (function() {
        console.log('hello world');
    }());

    //zad6
    (function(name) {
        console.log(name);
    }('Kazek'));
});