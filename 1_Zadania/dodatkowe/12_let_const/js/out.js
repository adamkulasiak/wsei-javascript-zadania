/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var x = 5;
  var y = 3;

  for (var i = 0; i < 10; i++) {
    console.log(i, y);
  }

  console.log(i, y);

  function myFn(param1) {
    var y = 4;
    var i = 20;
    console.log(param1, y, i);
  }

  myFn(i);
  console.log(x);
  {
    var _y = 25;
    console.log(_y);
    var z = 50;
  }
  console.log(z, y); //zad3

  for (var i = 0; i < 10; i++) {
    console.log('Inside loop: ', i);
  }

  console.log('Outside loop: ', i); // Poza petla zmienna i ma wartosc 10

  for (var j = 0; j < 10; j++) {
    console.log('Inside loop: ', j);
  } //console.log('Outside loop: ', j);
  //z zewnatrz nie ma dostepu do zmiennej j (blad na konsoli, j is not defined)
  //zad5


  (function () {
    console.log('hello world');
  })(); //zad6


  (function (name) {
    console.log(name);
  })('Kazek');
});

/***/ }),

/***/ "./js/zadanie01.js":
/*!*************************!*\
  !*** ./js/zadanie01.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

//I. Sprawdź najpierw zasięg let
var numbers = [2, 3, 4];
{
  //A1 - wypisuję zmienną numbers przed deklaracją
  //Wynik w konsoli to : [2, 3, 4]
  //Dlaczego taki wynik? z wnetrza bloku mamy dostep do zmiennej poza blokiem, w 2 strone to nie dziala:
  console.log(numbers); //A2 - wypisuję zmienną numbers po deklaracji
  //Wynik w konsoli to : [2, 3, 4]
  //Dlaczego taki wynik? : z wnetrza bloku mamy dostep do zmiennej poza blokiem, w 2 strone to nie dziala:

  console.log(numbers);
} //A3 - wypisuję zmienną numbers za blokiem
//Wynik w konsoli to : [2, 3, 4] 
//Dlaczego taki wynik? : z wnetrza bloku mamy dostep do zmiennej poza blokiem, w 2 strone to nie dziala:

console.log(numbers); //II. Sprawdź teraz  zasięg const

var PI = 3.14;
{
  //A1 - wypisuję zmienną PI przed deklaracją
  //Wynik w konsoli to TODO: 3.14
  //Dlaczego taki wynik? TODO: z wnetrza bloku mamy dostep do stalej poza blokiem, w 2 strone to nie dziala
  console.log(PI); //A2 - wypisuję zmienną PI po deklaracji
  //Wynik w konsoli to TODO: 3.14
  //Dlaczego taki wynik? TODO: z wnetrza bloku mamy dostep do stalej poza blokiem, w 2 strone to nie dziala

  console.log(PI);
} //A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to TODO: 3.14
//Dlaczego taki wynik? TODO: z wnetrza bloku mamy dostep do stalej poza blokiem, w 2 strone to nie dziala

console.log(PI);

/***/ }),

/***/ "./js/zadanie02.js":
/*!*************************!*\
  !*** ./js/zadanie02.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var character = "księżniczka";
var timeOfDay = "dzień";
var lover = 'Shrek';
{
  var _timeOfDay = "noc";
  var _character = "ogrzyca";
  console.log("Teraz jest: " + _timeOfDay + " i Fiona to: " + _character + ", a jej ukochany to: " + lover); // TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.
  // pod zmienna timeOfDay kryje sie noc, pod charakter ogrzyca a pod lover Shrek
  // dlatego ze jestesmy wewnatrz bloku i js bierze wartosci ze zmiennych z bloku a nie z globalnych 
}
console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover); // TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.
// pod zmienna timeOfDay kryje sie dzien, pod charakter ksiezniczka a pod lover Shrek
// dlatego ze nie mamy tu dostepu do zmiennych wewnatrz bloku i uzywane sa zmienne globalne

/***/ }),

/***/ "./js/zadanie04.js":
/*!*************************!*\
  !*** ./js/zadanie04.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
var name = "Agata"; //name = "Aneta";
// nie da sie tego zrobic bo jest to stala tylko do odczytu
//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray

var simpleArray = [1, 2, 10, 4, 5]; //simpleArray = [];

console.log(simpleArray); //a - nie da sie
//b - da sie
//c - da sie
//Stala nie pozwala nam zmieniac referencji do tablicy, jednak mozemy modyfikowac zawartosc tej tablicy
//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age

var dog = {
  name: "Puszek",
  skill: "barking",
  age: 10 //dog = {};
  //a nie da sie
  //b - da sie
  //c - da sie
  // tak samo jak przy tablicy, const nie pozwala nam zmienic referencji do obiektu, mozemy modyfikowac zawartosc obiektu

};

/***/ }),

/***/ 0:
/*!*******************************************************************************!*\
  !*** multi ./js/app.js ./js/zadanie01.js ./js/zadanie02.js ./js/zadanie04.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/app.js */"./js/app.js");
__webpack_require__(/*! ./js/zadanie01.js */"./js/zadanie01.js");
__webpack_require__(/*! ./js/zadanie02.js */"./js/zadanie02.js");
module.exports = __webpack_require__(/*! ./js/zadanie04.js */"./js/zadanie04.js");


/***/ })

/******/ });
//# sourceMappingURL=out.js.map