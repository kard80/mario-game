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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/background.png":
/*!***********************************!*\
  !*** ./src/assets/background.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/assets/hills.png":
/*!******************************!*\
  !*** ./src/assets/hills.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/assets/platform.png":
/*!*********************************!*\
  !*** ./src/assets/platform.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/assets/platformSmallTall.png":
/*!******************************************!*\
  !*** ./src/assets/platformSmallTall.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/assets/spriteRunLeft.png":
/*!**************************************!*\
  !*** ./src/assets/spriteRunLeft.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/assets/spriteRunRight.png":
/*!***************************************!*\
  !*** ./src/assets/spriteRunRight.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/assets/spriteStandLeft.png":
/*!****************************************!*\
  !*** ./src/assets/spriteStandLeft.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/assets/spriteStandRight.png":
/*!*****************************************!*\
  !*** ./src/assets/spriteStandRight.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/background.png */ "./src/assets/background.png");
/* harmony import */ var _assets_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/hills.png */ "./src/assets/hills.png");
/* harmony import */ var _assets_platform_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/platform.png */ "./src/assets/platform.png");
/* harmony import */ var _assets_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/platformSmallTall.png */ "./src/assets/platformSmallTall.png");
/* harmony import */ var _assets_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/spriteRunLeft.png */ "./src/assets/spriteRunLeft.png");
/* harmony import */ var _assets_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/spriteRunRight.png */ "./src/assets/spriteRunRight.png");
/* harmony import */ var _assets_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/spriteStandLeft.png */ "./src/assets/spriteStandLeft.png");
/* harmony import */ var _assets_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/spriteStandRight.png */ "./src/assets/spriteStandRight.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var velocity = 0.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 66;
    this.height = 150;
    this.speed = 10;
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_assets_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        left: createImage(_assets_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(_assets_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        left: createImage(_assets_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropWidth: 340,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;

      if (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left) {
        this.frames > 59 ? this.frames = 0 : this.frames = this.frames;
      } else {
        this.frames > 28 ? this.frames = 0 : this.frames = this.frames;
      }

      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += velocity;
      }
    }
  }]);

  return Player;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, GenericObject);

    this.image = image;
    this.position = {
      x: x,
      y: y
    };
    this.width = this.image.width;
    this.height = this.image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

var keys = {
  left: {
    pressed: false
  },
  right: {
    pressed: false
  },
  jump: {
    pressed: false
  }
};

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var player = new Player();
var scrollOffset = 0;
var platformImage = createImage(_assets_platform_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var genericObjects = [];

function init() {
  player = new Player();
  player.draw();
  genericObjects = [new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_assets_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new GenericObject({
    x: platformImage.width * 3 + 100,
    y: 250,
    image: createImage(_assets_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new GenericObject({
    x: -1,
    y: 470,
    image: platformImage
  }), new GenericObject({
    x: platformImage.width - 3,
    y: 470,
    image: platformImage
  }), new GenericObject({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage
  }), new GenericObject({
    x: platformImage.width * 2 + 400,
    y: 470,
    image: platformImage
  }), new GenericObject({
    x: platformImage.width * 4 + 500,
    y: 470,
    image: platformImage
  })];
  scrollOffset = 0;
}

;

function animate() {
  requestAnimationFrame(animate);
  c.drawImage(createImage(_assets_background_png__WEBPACK_IMPORTED_MODULE_0__["default"]), 0, 0);
  genericObjects.forEach(function (object) {
    object.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && (player.position.x > 100 || scrollOffset === 0 && player.position.x > 50)) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
    genericObjects.forEach(function (object) {
      if (keys.right.pressed) {
        object.position.x -= player.speed;
        scrollOffset += player.speed;
      } else if (keys.left.pressed && scrollOffset > 0) {
        object.position.x += player.speed;
        scrollOffset -= player.speed;
      }
    });
  }

  var Yaxis = player.position.y + player.height;
  var Xaxis = player.position.x + player.width;
  genericObjects.forEach(function (object) {
    if (Yaxis <= object.position.y && Yaxis + player.velocity.y >= object.position.y && Xaxis >= object.position.x && Xaxis - 90 <= object.position.x + object.width) {
      player.velocity.y = 0;

      if (keys.jump.pressed) {
        player.velocity.y = -15;
      }
    }
  }); // win condition

  if (scrollOffset > 1000) {
    console.log('You Win');
  } // lose condition


  if (player.position.y >= canvas.height) {
    init();
  }
}

init();
animate();
addEventListener('keydown', function (_ref2) {
  var keyCode = _ref2.keyCode;

  switch (keyCode) {
    case 65:
      // key A
      keys.left.pressed = true;
      player.currentSprite = player.sprites.run.left;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;

    case 87:
      // key W
      keys.jump.pressed = true;
      break;

    case 68:
      // key D
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;

    case 83:
      // key S
      break;
  }
});
addEventListener('keyup', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 65:
      // key A
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;

    case 68:
      // key D
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;

    case 87:
      // key W
      keys.jump.pressed = false;
      break;

    case 83:
      // key S
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map