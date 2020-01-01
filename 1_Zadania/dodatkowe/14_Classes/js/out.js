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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//zad0
var Vehicle =
/*#__PURE__*/
function () {
  function Vehicle(name) {
    _classCallCheck(this, Vehicle);

    if ((this instanceof Vehicle ? this.constructor : void 0) === Vehicle) {
      throw new TypeError("Cannot construct Vehicle instances directly");
    }

    this.name = name;
  }

  _createClass(Vehicle, [{
    key: "whatICanDo",
    value: function whatICanDo() {
      console.log(name + ' can nothing');
    }
  }]);

  return Vehicle;
}();

var Boat =
/*#__PURE__*/
function (_Vehicle) {
  _inherits(Boat, _Vehicle);

  function Boat(name) {
    _classCallCheck(this, Boat);

    return _possibleConstructorReturn(this, _getPrototypeOf(Boat).call(this, name));
  }

  _createClass(Boat, [{
    key: "whatICanDo",
    value: function whatICanDo() {
      console.log(this.name + ' can float');
    }
  }]);

  return Boat;
}(Vehicle);

var Car =
/*#__PURE__*/
function (_Vehicle2) {
  _inherits(Car, _Vehicle2);

  function Car(name) {
    _classCallCheck(this, Car);

    return _possibleConstructorReturn(this, _getPrototypeOf(Car).call(this, name));
  }

  _createClass(Car, [{
    key: "whatICanDo",
    value: function whatICanDo() {
      console.log(this.name + ' can drive');
    }
  }]);

  return Car;
}(Vehicle);

var Plane =
/*#__PURE__*/
function (_Vehicle3) {
  _inherits(Plane, _Vehicle3);

  function Plane(name) {
    _classCallCheck(this, Plane);

    return _possibleConstructorReturn(this, _getPrototypeOf(Plane).call(this, name));
  }

  _createClass(Plane, [{
    key: "whatICanDo",
    value: function whatICanDo() {
      console.log(this.name + ' can fly');
    }
  }]);

  return Plane;
}(Vehicle);

var boat = new Boat('boat');
var car = new Car('car');
var plane = new Plane('plane');
boat.whatICanDo();
car.whatICanDo();
plane.whatICanDo(); //zad1

var Kaczka =
/*#__PURE__*/
function () {
  function Kaczka() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'zwykla kaczka';

    _classCallCheck(this, Kaczka);

    this.type = type;
  }

  _createClass(Kaczka, [{
    key: "kwacz",
    value: function kwacz() {
      console.log('kwa kwa');
    }
  }, {
    key: "plywaj",
    value: function plywaj() {
      console.log('plyne...');
    }
  }, {
    key: "wyswietl",
    value: function wyswietl() {
      console.log("Wyglada jak ".concat(this.type));
    }
  }, {
    key: "lec",
    value: function lec() {
      console.log('Lecę');
    }
  }]);

  return Kaczka;
}();

var kaczucha = new Kaczka();
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl(); //zad2

var DzikaKaczka =
/*#__PURE__*/
function (_Kaczka) {
  _inherits(DzikaKaczka, _Kaczka);

  function DzikaKaczka() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dzika kaczka';

    _classCallCheck(this, DzikaKaczka);

    return _possibleConstructorReturn(this, _getPrototypeOf(DzikaKaczka).call(this, type));
  }

  return DzikaKaczka;
}(Kaczka);

var dzikaKaczucha = new DzikaKaczka();
dzikaKaczucha.kwacz();
dzikaKaczucha.plywaj();
dzikaKaczucha.wyswietl(); //zad3

var KrzyzowkaKaczka =
/*#__PURE__*/
function (_Kaczka2) {
  _inherits(KrzyzowkaKaczka, _Kaczka2);

  function KrzyzowkaKaczka() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'krzyżówka';

    _classCallCheck(this, KrzyzowkaKaczka);

    return _possibleConstructorReturn(this, _getPrototypeOf(KrzyzowkaKaczka).call(this, type));
  }

  return KrzyzowkaKaczka;
}(Kaczka);

var krzyzoKaczucha = new KrzyzowkaKaczka();
krzyzoKaczucha.kwacz();
krzyzoKaczucha.plywaj();
krzyzoKaczucha.wyswietl(); //zad4
//dodane w klasie bazowej
//zad5

var GumowaKaczka =
/*#__PURE__*/
function (_Kaczka3) {
  _inherits(GumowaKaczka, _Kaczka3);

  function GumowaKaczka() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'gumowa kaczka';

    _classCallCheck(this, GumowaKaczka);

    return _possibleConstructorReturn(this, _getPrototypeOf(GumowaKaczka).call(this, type));
  }

  _createClass(GumowaKaczka, [{
    key: "lec",
    value: function lec() {
      console.log('Gumowe kaczki nie potrafia latac');
    }
  }]);

  return GumowaKaczka;
}(Kaczka);

var gumowaKaczka = new GumowaKaczka();
gumowaKaczka.kwacz();
gumowaKaczka.plywaj();
gumowaKaczka.wyswietl();
gumowaKaczka.lec();

/***/ }),

/***/ "./js/zadanie06.js":
/*!*************************!*\
  !*** ./js/zadanie06.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var foods = [];

var Food =
/*#__PURE__*/
function () {
  function Food(name, protein, carbs, fat) {
    _classCallCheck(this, Food);

    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }

  _createClass(Food, [{
    key: "print",
    value: function print() {
      console.log(" Nazwa: ".concat(this.name, "\n                  Bia\u0142ko: ").concat(this.protein, "\n                  W\u0119glowodany: ").concat(this.carbs, "\n                  T\u0142uszcz: ").concat(this.fat));
    }
  }]);

  return Food;
}();

var FastFood =
/*#__PURE__*/
function (_Food) {
  _inherits(FastFood, _Food);

  function FastFood(name, protein, carbs, fat) {
    _classCallCheck(this, FastFood);

    return _possibleConstructorReturn(this, _getPrototypeOf(FastFood).call(this, name, protein, carbs, fat));
  }

  return FastFood;
}(Food);

var FatFreeFood =
/*#__PURE__*/
function (_Food2) {
  _inherits(FatFreeFood, _Food2);

  function FatFreeFood(name, protein, carbs, fat) {
    _classCallCheck(this, FatFreeFood);

    return _possibleConstructorReturn(this, _getPrototypeOf(FatFreeFood).call(this, name, protein, carbs, fat));
  }

  return FatFreeFood;
}(Food);

document.addEventListener('DOMContentLoaded', function () {
  var name = document.querySelector('#name');
  var proteins = document.querySelector('#proteins');
  var carbs = document.querySelector('#carbs');
  var fat = document.querySelector('#fat');
  var submitBtn = document.querySelector('#add');
  var ul = document.querySelector('#products');
  var form = document.querySelector('form');

  var countCalories = function countCalories(proteins, carbs, fat) {
    return proteins * 4 + carbs * 4 + fat * 9;
  };

  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var li = document.createElement('li');
    li.innerHTML = "\n                  Nazwa: ".concat(name.value, "\n                  Bia\u0142ko: ").concat(proteins.value, "\n                  W\u0119glowodany: ").concat(carbs.value, "\n                  T\u0142uszcz: ").concat(fat.value);
    ul.appendChild(li);
    var calories = countCalories(proteins.value, carbs.value, fat.value);
    var obj;

    if (calories >= 250) {
      obj = new FastFood(name.value, proteins.value, carbs.value, fat.value);
    } else {
      obj = new FatFreeFood(name.value, proteins.value, carbs.value, fat.value);
    }

    foods.push(obj);
    console.table(foods);
    form.reset();
  });
});

/***/ }),

/***/ "./js/zadanie07.js":
/*!*************************!*\
  !*** ./js/zadanie07.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MenuGenerator =
/*#__PURE__*/
function () {
  function MenuGenerator(type, elements) {
    _classCallCheck(this, MenuGenerator);

    this.type = type;
    this.elements = elements;
  }

  _createClass(MenuGenerator, [{
    key: "getType",
    value: function getType() {
      console.log(this.type);
    }
  }, {
    key: "showItems",
    value: function showItems() {
      console.log(this.elements);
    }
  }]);

  return MenuGenerator;
}();

var HorizontalMenuGenerator =
/*#__PURE__*/
function (_MenuGenerator) {
  _inherits(HorizontalMenuGenerator, _MenuGenerator);

  function HorizontalMenuGenerator(type, elements) {
    _classCallCheck(this, HorizontalMenuGenerator);

    return _possibleConstructorReturn(this, _getPrototypeOf(HorizontalMenuGenerator).call(this, type, elements));
  }

  return HorizontalMenuGenerator;
}(MenuGenerator);

var VerticalMenuGenerator =
/*#__PURE__*/
function (_MenuGenerator2) {
  _inherits(VerticalMenuGenerator, _MenuGenerator2);

  function VerticalMenuGenerator(type, elements) {
    _classCallCheck(this, VerticalMenuGenerator);

    return _possibleConstructorReturn(this, _getPrototypeOf(VerticalMenuGenerator).call(this, type, elements));
  }

  _createClass(VerticalMenuGenerator, [{
    key: "doAnimate",
    value: function doAnimate() {
      console.log('Aminacja menu typu: ' + this.type);
    }
  }]);

  return VerticalMenuGenerator;
}(MenuGenerator);

var hMenuGenerator = new HorizontalMenuGenerator('horizontal', ['start', 'about']);
hMenuGenerator.getType();
hMenuGenerator.showItems();
var vMenuGenerator = new VerticalMenuGenerator('vertical', ['home', 'contact']);
vMenuGenerator.getType();
vMenuGenerator.showItems();
vMenuGenerator.doAnimate();

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./js/app.js ./js/zadanie06.js ./js/zadanie07.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/app.js */"./js/app.js");
__webpack_require__(/*! ./js/zadanie06.js */"./js/zadanie06.js");
module.exports = __webpack_require__(/*! ./js/zadanie07.js */"./js/zadanie07.js");


/***/ })

/******/ });
//# sourceMappingURL=out.js.map