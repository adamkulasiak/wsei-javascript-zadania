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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//zad0
var namesA = ['ala', 'ola', 'ela', 'kasia', 'basia'];
var namesB = ['igor', 'marian'].concat(namesA, ['Jan', 'Karol']);
console.log(namesB);

var getAverage = function getAverage() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  var count = numbers.length;
  var sum = numbers.reduce(function (prev, cur) {
    return prev + cur;
  });
  return sum / count;
};

console.log(getAverage(2, 4, 5, 6, 7, 79)); //zad1

var name = 'Adam';

var arr = _toConsumableArray(name);

console.table(arr); //zad2

var fruits = ['apple', 'orange', 'pear'];
var vegetables = ['cucumber', 'potato', 'tomato'];
var mix = [].concat(fruits, vegetables);
console.table(mix);

/***/ }),

/***/ "./js/zadanie03.js":
/*!*************************!*\
  !*** ./js/zadanie03.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var people = [{
  person: "Kim Yoo Suk",
  profession: "tyczkarz"
}, {
  person: "Sue Yoo",
  profession: "prawnik"
}, {
  person: "Dr. Alden Cockburn",
  profession: "urolog"
}, {
  person: "Rusty Kuntz",
  profession: "trener"
}];

var setFunnyName = function setFunnyName() {
  var persons = [];
  var professions = [];

  for (var i = 0; i < arguments.length; i++) {
    if (i == 0 || i % 2 === 0) {
      persons.push(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    } else {
      professions.push(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }
  }

  for (var _i = 0; _i < persons.length; _i++) {
    var ob = {
      person: persons[_i],
      profession: professions[_i]
    };
    people.push(ob);
  }
};

setFunnyName('Adam', 'programmer', 'Marta', 'recruiter');
console.table(people);

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./js/app.js ./js/zadanie03.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/app.js */"./js/app.js");
module.exports = __webpack_require__(/*! ./js/zadanie03.js */"./js/zadanie03.js");


/***/ })

/******/ });
//# sourceMappingURL=out.js.map