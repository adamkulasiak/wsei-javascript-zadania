let character = "księżniczka";
let timeOfDay = "dzień";
const lover = 'Shrek';

{
    let timeOfDay = "noc";
    let character = "ogrzyca";
    console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
    // TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.
    // pod zmienna timeOfDay kryje sie noc, pod charakter ogrzyca a pod lover Shrek
    // dlatego ze jestesmy wewnatrz bloku i js bierze wartosci ze zmiennych z bloku a nie z globalnych 
}

console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
// TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.
// pod zmienna timeOfDay kryje sie dzien, pod charakter ksiezniczka a pod lover Shrek
// dlatego ze nie mamy tu dostepu do zmiennych wewnatrz bloku i uzywane sa zmienne globalne