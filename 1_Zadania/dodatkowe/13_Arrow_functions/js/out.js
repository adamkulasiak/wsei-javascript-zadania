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

//zad1
var hello = function hello() {
  console.log('Hello World');
};

hello(); //zad2

var multiply = function multiply() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return n * 2;
};

console.log(multiply(5)); //zad3

var getBigger = function getBigger(x1, x2) {
  if (x1 === x2) {
    return x1;
  } else if (x1 > x2) {
    return x1;
  } else {
    return x2;
  }
};

console.log(getBigger(3, 4)); //zad4

var getSecondMaxNumber = function getSecondMaxNumber(array) {
  var sorted = array.sort(function (el1, el2) {
    return el2 - el1;
  });
  return sorted[1];
};

console.log(getSecondMaxNumber([2, 3, 1, 6, 100, 49, 5, 7, 8, 9])); //zad5

(function (param) {
  return param;
})('test'); //zad6


var writeHello = function writeHello() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

  if (num < 1 || num > 10) {
    return;
  }

  var counter = 1;
  var handler = setInterval(function () {
    console.log('Hello ', counter);

    if (counter === num) {
      clearInterval(handler);
    }

    counter++;
  }, 1000);
};

writeHello(10);

/***/ }),

/***/ "./js/zadanie00.js":
/*!*************************!*\
  !*** ./js/zadanie00.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  //zad0
  function Students(arr) {
    var _this = this;

    this.numberOfLetters = [], this.countLetters = function () {
      for (var i = 0; i < arr.length; i++) {
        _this.numberOfLetters.push(arr[i].length);
      }
    };
  }

  var students = new Students(["Ania", "Kamil", "Mariusz"]);
  students.countLetters();
  console.log(students.numberOfLetters);
});

/***/ }),

/***/ "./js/zadanie07.js":
/*!*************************!*\
  !*** ./js/zadanie07.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var App = function App() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
};

App.prototype.generateLinks = function () {
  var _this = this;

  this.websites.forEach(function (link) {
    _this.links.push("https://".concat(link, ".com"));
  });
};

var app = new App();
app.generateLinks();
console.log(app.links);
var menuItems = $('.menu li a'); // tu jest uzyte jquery

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].setAttribute('href', app.links[i]);
}

/***/ }),

/***/ "./js/zadanie08.js":
/*!*************************!*\
  !*** ./js/zadanie08.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var dog = {
  type: "Mammal",
  name: "",
  setName: function setName(newName) {
    this.name = newName;
  }
};
dog.setName("Reksio");
console.log('name', dog.name);

/***/ }),

/***/ "./js/zadanie09.js":
/*!*************************!*\
  !*** ./js/zadanie09.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var getSpan = document.querySelectorAll('span');
var getUl = document.querySelectorAll('ul');

for (var i = 0; i < getUl.length; i++) {
  getUl[i].style.display = 'none';
}

for (var _i = 0; _i < getSpan.length; _i++) {
  getSpan[_i].addEventListener('mouseover', function (event) {
    event.target.nextElementSibling.style.display = 'block';
  });

  getSpan[_i].addEventListener('mouseout', function (event) {
    event.target.nextElementSibling.style.display = 'none';
  });
}

;

/***/ }),

/***/ 0:
/*!*************************************************************************************************!*\
  !*** multi ./js/app.js ./js/zadanie00.js ./js/zadanie07.js ./js/zadanie08.js ./js/zadanie09.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/app.js */"./js/app.js");
__webpack_require__(/*! ./js/zadanie00.js */"./js/zadanie00.js");
__webpack_require__(/*! ./js/zadanie07.js */"./js/zadanie07.js");
__webpack_require__(/*! ./js/zadanie08.js */"./js/zadanie08.js");
module.exports = __webpack_require__(/*! ./js/zadanie09.js */"./js/zadanie09.js");


/***/ })

/******/ });
//# sourceMappingURL=out.js.map