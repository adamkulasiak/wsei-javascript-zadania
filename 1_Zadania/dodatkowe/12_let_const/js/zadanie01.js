//I. Sprawdź najpierw zasięg let
let numbers = [2, 3, 4];
{
    //A1 - wypisuję zmienną numbers przed deklaracją
    //Wynik w konsoli to : [2, 3, 4]
    //Dlaczego taki wynik? z wnetrza bloku mamy dostep do zmiennej poza blokiem, w 2 strone to nie dziala:
    console.log(numbers);

    //A2 - wypisuję zmienną numbers po deklaracji
    //Wynik w konsoli to : [2, 3, 4]
    //Dlaczego taki wynik? : z wnetrza bloku mamy dostep do zmiennej poza blokiem, w 2 strone to nie dziala:
    console.log(numbers);
}

//A3 - wypisuję zmienną numbers za blokiem
//Wynik w konsoli to : [2, 3, 4] 
//Dlaczego taki wynik? : z wnetrza bloku mamy dostep do zmiennej poza blokiem, w 2 strone to nie dziala:
console.log(numbers);



//II. Sprawdź teraz  zasięg const
const PI = 3.14;
{
    //A1 - wypisuję zmienną PI przed deklaracją
    //Wynik w konsoli to TODO: 3.14
    //Dlaczego taki wynik? TODO: z wnetrza bloku mamy dostep do stalej poza blokiem, w 2 strone to nie dziala
    console.log(PI);

    //A2 - wypisuję zmienną PI po deklaracji
    //Wynik w konsoli to TODO: 3.14
    //Dlaczego taki wynik? TODO: z wnetrza bloku mamy dostep do stalej poza blokiem, w 2 strone to nie dziala
    console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to TODO: 3.14
//Dlaczego taki wynik? TODO: z wnetrza bloku mamy dostep do stalej poza blokiem, w 2 strone to nie dziala
console.log(PI);
