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

document.addEventListener('DOMContentLoaded', function () {// const array = [2, 15, 268, 288, [358, 2, 14, 256], 586];
  // // var sorted= array.sort((a,b)=>a-b);
  // // // console.log(sorted);
  // // // var newVar = array.flat();
  // // // console.log(newVar);
  // // newVar.sort((a,b)=>a-b);
  // var flat = array.flat();
  // flat.sort((a, b) => a - b);
  // console.log(flat);
  // var newFlat = flat.map((element) => element * 2);
  // console.log(newFlat);
  // var newVar = newFlat.reduce((a, b) => a * b);
  // console.log(newVar);
}); //zad0

var whoAreYou = function whoAreYou(person) {
  return "My name is ".concat(person.name, " ").concat(person.lastName, ".\n            I am ").concat(new Date().getFullYear() - person.yearOfBirth, " years old.\n            My profession is ").concat(person.profession);
};

var person = {
  name: 'Vlad',
  lastName: 'Draculea',
  yearOfBirth: 1431,
  profession: 'Lord of Wallachia'
};
console.log(whoAreYou(person)); //zad1

var x = 10,
    y = 15;
console.log("Suma dw\xF3ch liczb ".concat(x, " i ").concat(y, " to ").concat(x + y)); //zad2

var name = 'Adam',
    lastName = 'Kulasiak';
console.log("Moje imie i nazwisko to: ".concat(name, " ").concat(lastName)); //zad3

var logText = function logText() {
  console.log("\"My\u015Bl\u0119, \u017Ce jest wiele pi\u0119kna\n    w posiadaniu problem\xF3w.\n    To jeden ze sposob\xF3w w jaki si\u0119 uczymy\"\n    Herbie Hancock");
};

logText(); //zad4

var button = {
  value: 'Send message',
  idName: 'sendMsg',
  width: '100px',
  padding: '20px'
};
console.log("To jest button.\n             Jego szeroko\u015B\u0107 to ".concat(button.width, ".\n             Napis, kt\xF3ry na nim widnieje to \"").concat(button.value, "\""));

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/app.js */"./js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=out.js.map