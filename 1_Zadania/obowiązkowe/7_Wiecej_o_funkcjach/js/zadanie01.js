
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// funkcja majaca w srodku tablice do posortowania
function sortArray() {

    // tablica z wartosciami typu number do posortowania
    var points = [41, 3, 6, 1, 114, 54, 64];

    // funkcja sortujaca tablice od wartosci najmniejszej do najwiekszej
    points.sort(function (a, b) {
        // w srodku sort tzw compare function ktora porownuje elementy tablicy i sortuje je
        // domyslnie w js sort sortuje w porzadku alfabetycznym dlatego zeby posortowac liczby musimy uzyc compare function
        return a - b;
    });

    // zwrocenie posortowanej tablicy liczb
    return points;
}

// wywolanie funkcji
sortArray();
