/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


// funkcja zewnetrzna
function jeden() {

    // zmienna lokalna w funkcji zewnetrznej
    var zmienna1 = 1;

    // funkcja wewnetrzna
    function dwa() {

        // funkcja wewnetrzna ma dostep do zmiennej w funkcji zewnetrznej dlatego to zadziala
        console.log(zmienna1);

        // zmienna lokalna w funkcji wewnetrznej do ktorej nie ma dostepu funkcja zewnetrzna
        var zmienna2 = 3;
    }

    // wywolanie funkcji wewnetrznej z funkcji zewnetrznej, zadziala
    dwa();

    // proba wyswietlenia zmiennej w funkcji wewnetrznej z poza tej funkcji, nie ma dostepu do tej zmiennej dlatego to nie zadziala
    console.log(zmienna2)
}

// wywolanie funkcji zewnetrznej a co za tym idzie wewnetrzej tez bo funkcja zewnetrzna w srodku wywoluje funkcje wewnetrzna
jeden()