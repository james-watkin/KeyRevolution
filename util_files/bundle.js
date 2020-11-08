/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./javascript/event_listeners.js":
/*!***************************************!*\
  !*** ./javascript/event_listeners.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar eventListeners = function eventListeners(canvas, game, ctx) {\n  // clicking difficulties buttons.\n  // Add functionality to disable buttons completely\n  var BUTTON_NAMES = [\"a-button\", \"s-button\", \"d-button\", \"f-button\", \"j-button\", \"k-button\", \"l-button\", \"colon-button\", \"space-button\"];\n  var easy = document.getElementById(\"easy-button\");\n\n  easy.onclick = function () {\n    BUTTON_NAMES.forEach(function (idName) {\n      var ele = document.getElementById(idName);\n\n      if (idName === \"a-button\" || idName === \"s-button\" || idName === \"l-button\" || idName === \"colon-button\") {\n        ele.className = idName;\n      } else {\n        ele.className = \"disabled-button\";\n      }\n    });\n    game.setKeyMap(\"easy\");\n  };\n\n  var medium = document.getElementById(\"medium-button\");\n\n  medium.onclick = function () {\n    BUTTON_NAMES.forEach(function (idName) {\n      var ele = document.getElementById(idName);\n\n      if (idName === \"a-button\" || idName === \"s-button\" || idName === \"l-button\" || idName === \"colon-button\" || idName === \"d-button\" || idName === \"k-button\") {\n        ele.className = idName;\n      } else {\n        ele.className = \"disabled-button\";\n      }\n    });\n    game.setKeyMap(\"medium\");\n  };\n\n  var hard = document.getElementById(\"hard-button\");\n\n  hard.onclick = function () {\n    BUTTON_NAMES.forEach(function (idName) {\n      var ele = document.getElementById(idName);\n\n      if (idName === \"a-button\" || idName === \"s-button\" || idName === \"l-button\" || idName === \"colon-button\" || idName === \"d-button\" || idName === \"k-button\" || idName === \"j-button\" || idName === \"f-button\") {\n        ele.className = idName;\n      } else {\n        ele.className = \"disabled-button\";\n      }\n    });\n    game.setKeyMap(\"hard\");\n  };\n\n  var extreme = document.getElementById(\"extreme-button\");\n\n  extreme.onclick = function () {\n    BUTTON_NAMES.forEach(function (idName) {\n      var ele = document.getElementById(idName);\n      ele.className = idName;\n    });\n    game.setKeyMap(\"extreme\");\n  }; // Audio event listeners\n\n\n  var volumeDown = document.getElementById(\"volume-down\");\n\n  volumeDown.onclick = function () {\n    game.handleAudio(\"down\");\n  };\n\n  var volumeUp = document.getElementById(\"volume-up\");\n\n  volumeUp.onclick = function () {\n    game.handleAudio(\"up\");\n  };\n\n  var playButton = document.getElementById(\"play-button\");\n\n  playButton.onclick = function () {\n    if (game.audio.paused) {\n      game.audio.play();\n    } else {\n      game.audio.pause();\n    }\n  }; // Listening for key presses\n\n\n  document.addEventListener(\"keydown\", function (event) {\n    switch (event.keyCode) {\n      case 65:\n        // A Key\n        game.handleKey(\"a-button\", \"a\");\n        return;\n\n      case 83:\n        // S Key\n        game.handleKey(\"s-button\", \"s\");\n        return;\n\n      case 68:\n        // D Key\n        game.handleKey(\"d-button\", \"d\");\n        return;\n\n      case 70:\n        // F Key\n        game.handleKey(\"f-button\", \"f\");\n        return;\n\n      case 74:\n        // J Key\n        game.handleKey(\"j-button\", \"j\");\n        return;\n\n      case 75:\n        // K Key\n        game.handleKey(\"k-button\", \"k\");\n        return;\n\n      case 76:\n        // L Key\n        game.handleKey(\"l-button\", \"l\");\n        return;\n\n      case 186:\n        // : Key\n        game.handleKey(\"colon-button\", \"colon\");\n        return;\n\n      case 32:\n        // space Key\n        game.handleKey(\"space-button\", \"space\");\n        return;\n\n      case 27:\n        // Escape key.dff\n        return game.stop(\"escape\");\n\n      case 82:\n        return game.stop('r');\n\n      default:\n        return;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventListeners);\n\n//# sourceURL=webpack://keyrevolution/./javascript/event_listeners.js?");

/***/ }),

/***/ "./javascript/game.js":
/*!****************************!*\
  !*** ./javascript/game.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_listeners */ \"./javascript/event_listeners.js\");\n/* harmony import */ var _key_maps_easy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key_maps/easy */ \"./javascript/key_maps/easy.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n //Difficulties\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(canvas, width, height) {\n    _classCallCheck(this, Game);\n\n    // Keeps track of where we are in animation frames.\n    this.frameCount = 0; // Audio Stuff\n\n    this.audio;\n    this.audioVolume = 1.0; // Current key map set into arrays as to keep track of order.\n\n    this.currentKeyMap = '';\n    this.keys = {\n      a: [],\n      s: [],\n      d: [],\n      f: [],\n      j: [],\n      k: [],\n      l: [],\n      colon: [],\n      space: []\n    }; // Current Score\n\n    this.score = {\n      perfect: 0,\n      ok: 0,\n      bad: 0,\n      missed: 0\n    }; // Set the width/height of the game screen.\n\n    this.canvas = canvas;\n    this.canvas.width = width;\n    this.canvas.height = height; // Game Over Check\n\n    this.gameOver = false;\n    this.finished = false; // Score Screen\n\n    this.scoreScreen = false;\n    this.ctx = this.canvas.getContext(\"2d\");\n    (0,_event_listeners__WEBPACK_IMPORTED_MODULE_0__.default)(this.canvas, this, this.ctx);\n    this.setKeyMap(\"easy\");\n  }\n\n  _createClass(Game, [{\n    key: \"setKeyMap\",\n    value: function setKeyMap(difficulty) {\n      if (difficulty === \"easy\") {\n        var easyArr = (0,_key_maps_easy__WEBPACK_IMPORTED_MODULE_1__.default)();\n        this.keys = easyArr[0];\n        this.audio = easyArr[1];\n        this.currentKeyMap = \"easy\";\n      } else if (difficulty === \"medium\") {} else if (difficulty === \"hard\") {} else {}\n    } // Audio Methods\n\n  }, {\n    key: \"handleAudio\",\n    value: function handleAudio(input) {\n      if (input === \"down\" && this.audioVolume >= 0.05) {\n        this.audioVolume -= 0.05;\n      } else if (input === \"up\" && this.audioVolume <= 0.95) {\n        this.audioVolume += 0.05;\n      }\n\n      var volumePercentage = document.getElementById(\"volume-percentage\");\n      volumePercentage.innerHTML = \"Volume: \".concat(Math.floor(this.audioVolume * 100), \" \");\n      this.audio.volume = this.audioVolume;\n    }\n  }, {\n    key: \"stopAudio\",\n    value: function stopAudio() {\n      this.audio.pause();\n      this.audio.currentTime = 0;\n    } // End of Audio Methods\n\n  }, {\n    key: \"handleKey\",\n    value: function handleKey(button, key) {\n      // Handles if there are no keys left.\n      if (this.keys[key].length === 0) {\n        return;\n      }\n\n      var gameCanvas = document.getElementById(\"game-canvas\").getBoundingClientRect();\n      var currentButton = document.getElementById(button).getBoundingClientRect(); // Grabs Y position of button \n      // subtracts half the height of the current button in order to get the middle.\n\n      var buttonY = currentButton.top - gameCanvas.top - currentButton.height / 2; // Grabs Y position of first in line key falling down the screen.\n\n      var firstKey = this.keys[key][0]; // Takes Y Position of current key, adds frameCount to it to get the relative position.\n      // Then adds the total height of the key and divides by 2 to get the middle of the element\n\n      var keyY = firstKey.posY + this.frameCount + firstKey.height / 2; // Calculates if button is close enough to removed/counted etc\n\n      this.handleKeyAlignmentCollision(keyY, buttonY, key);\n    }\n  }, {\n    key: \"handleKeyAlignmentCollision\",\n    value: function handleKeyAlignmentCollision(keyY, buttonY, key) {\n      var overlapPosY = keyY - buttonY;\n\n      if (overlapPosY >= 15 && overlapPosY <= 35) {\n        this.keys[key].shift();\n        this.score[\"perfect\"] += 1;\n      } else if (overlapPosY >= 36 && overlapPosY <= 55 || overlapPosY <= 14 && overlapPosY >= -6) {\n        this.keys[key].shift();\n        this.score[\"ok\"] += 1;\n      } else if (overlapPosY >= 56 && overlapPosY <= 75 || overlapPosY <= -7 && overlapPosY >= -27) {\n        this.keys[key].shift();\n        this.score[\"bad\"] += 1;\n      }\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(count) {\n      var _this = this;\n\n      // Draws each element in current key map.\n      Object.keys(this.keys).forEach(function (key) {\n        _this.keys[key].forEach(function (keyElement) {\n          _this.ctx.drawImage(keyElement.img, keyElement.posX, keyElement.posY + count, keyElement.width, keyElement.height);\n        });\n      });\n    }\n  }, {\n    key: \"keyCleanUp\",\n    value: function keyCleanUp(count) {\n      var _this2 = this;\n\n      var gameCanvas = document.getElementById(\"game-canvas\").getBoundingClientRect(); // Checks each array of keys to see if they are out of bounds to be removed from play.\n\n      Object.keys(this.keys).forEach(function (key) {\n        var newKeyArr = [];\n        var currentButton = document.getElementById(\"\".concat(key, \"-button\")).getBoundingClientRect();\n        var buttonBounds = currentButton.top - gameCanvas.top - currentButton.height / 2;\n\n        _this2.keys[key].forEach(function (keyElement) {\n          var keyElePos = keyElement.posY + count + keyElement.height / 2;\n\n          if (keyElePos - buttonBounds <= 80) {\n            newKeyArr.push(keyElement);\n          }\n        });\n\n        if (_this2.keys[key].length != newKeyArr) {\n          _this2.score[\"missed\"] += _this2.keys[key].length - newKeyArr.length;\n        }\n\n        _this2.keys[key] = newKeyArr;\n      });\n    } // Soon to be modal to show current screen/gameover etc.\n\n  }, {\n    key: \"setScreenScores\",\n    value: function setScreenScores() {\n      var perfLI = document.getElementById(\"perfect-score\");\n      perfLI.innerHTML = this.score[\"perfect\"];\n      var okLI = document.getElementById(\"ok-score\");\n      okLI.innerHTML = this.score[\"ok\"];\n      var badLI = document.getElementById(\"bad-score\");\n      badLI.innerHTML = this.score[\"bad\"];\n      var missedLI = document.getElementById(\"missed-score\");\n      missedLI.innerHTML = this.score[\"missed\"];\n    }\n  }, {\n    key: \"showPauseScreen\",\n    value: function showPauseScreen(fin) {\n      this.setScreenScores();\n      var modal = document.getElementById(\"score-screen-outer-modal\"); // Changes inner HTML depending on if game is paused or finished.\n\n      var h1Modal = document.getElementById(\"paused-or-finished\");\n      var escInstructions = document.getElementById(\"esc-to-continue\");\n\n      if (fin === \"finished\") {\n        h1Modal.innerHTML = \"Finished!\";\n        escInstructions.innerHTML = \"Congrats!\";\n      } else {\n        h1Modal.innerHTML = \"Paused\";\n        escInstructions.innerHTML = \"<strong>ESC</strong> - To Continue\";\n      }\n\n      if (modal.style.display === \"block\") {\n        modal.style.display = \"none\";\n        this.scoreScreen = false;\n      } else {\n        modal.style.display = \"block\";\n        this.scoreScreen = true;\n        this.audio.pause();\n      }\n    } // Temporary stop game\n\n  }, {\n    key: \"checkGameOver\",\n    value: function checkGameOver() {\n      var _this3 = this;\n\n      var over = true;\n      Object.keys(this.keys).forEach(function (key) {\n        if (_this3.keys[key].length > 0) {\n          over = false;\n        }\n      });\n      this.gameOver = over;\n      this.finished = over;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop(key) {\n      //Reset Function\n      if (key === \"r\" && this.gameOver === true) {\n        this.showPauseScreen();\n        this.handleReset();\n      } else if (key === \"escape\") {\n        this.gameOver ? this.gameOver = false : this.gameOver = true; // If score screen is up.\n\n        if (this.scoreScreen) {\n          this.showPauseScreen(); // Plays audio when pause screen is put away.\n\n          this.audio.play();\n          this.start();\n        }\n      }\n    }\n  }, {\n    key: \"handleReset\",\n    value: function handleReset() {\n      // Sets keys to origional of keyMap specificed\n      this.setKeyMap(this.currentKeyMap); // Resets frame count\n\n      this.frameCount = 0;\n      this.gameOver = false;\n      this.score = {\n        perfect: 0,\n        ok: 0,\n        bad: 0,\n        missed: 0\n      }; // Pauses audio, resets it to begging of the track\n\n      this.stopAudio(); // Sets audio's volume to what user has it set at.\n\n      this.handleAudio(); // Starts audio track\n\n      this.audio.play();\n      this.start();\n    } // StartCountdown method.\n\n  }, {\n    key: \"startTimer\",\n    value: function startTimer() {\n      var _this4 = this;\n\n      var countdownBox = document.getElementById(\"countdown-box\");\n      countdownBox.style.display = \"block\";\n      setTimeout(function () {\n        countdownBox.innerHTML = \"3\";\n      }, 900);\n      setTimeout(function () {\n        countdownBox.innerHTML = \"2\";\n      }, 1900);\n      setTimeout(function () {\n        countdownBox.innerHTML = \"1\";\n      }, 2900);\n      setTimeout(function () {\n        countdownBox.style.display = \"none\";\n\n        _this4.audio.play();\n\n        _this4.start();\n      }, 4000);\n    } // Game loop\n\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      this.draw(this.frameCount++);\n      this.keyCleanUp(this.frameCount);\n\n      if (!this.gameOver) {\n        requestAnimationFrame(this.start.bind(this));\n        this.checkGameOver();\n      } else if (this.finished) {\n        this.showPauseScreen(\"finished\");\n      } else {\n        this.showPauseScreen();\n      }\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://keyrevolution/./javascript/game.js?");

/***/ }),

/***/ "./javascript/index.js":
/*!*****************************!*\
  !*** ./javascript/index.js ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./javascript/game.js\");\n/* harmony import */ var _start_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start_view */ \"./javascript/start_view.js\");\n\n\nvar GAME_X = 1000;\nvar GAME_Y = 600;\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvasEl = document.getElementById('game-canvas');\n  var gameEl = new _game__WEBPACK_IMPORTED_MODULE_0__.default(canvasEl, GAME_X, GAME_Y);\n  var startView = new _start_view__WEBPACK_IMPORTED_MODULE_1__.default(gameEl);\n  startView.start();\n});\n\n//# sourceURL=webpack://keyrevolution/./javascript/index.js?");

/***/ }),

/***/ "./javascript/key_maps/easy.js":
/*!*************************************!*\
  !*** ./javascript/key_maps/easy.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ \"./javascript/key_maps/keys.js\");\n/* harmony import */ var _imgs_Alexzander_Archibeque_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../imgs/Alexzander_Archibeque.jpg */ \"./imgs/Alexzander_Archibeque.jpg\");\n\n // import audioFile from '../../songs/buttercup.mp3'\n\nvar PATH = document.URL.substr(0, document.URL.lastIndexOf('/'));\n\nfunction easy() {\n  var audioTrack = new Audio(\"\".concat(PATH, \"/songs/buttercup.mp3\")); // Grab the keymap letter you want to insert a letter into.\n  // push it in\n  // new KeyX(imageType, position in line);\n\n  var keyMap = {\n    a: [],\n    s: [],\n    d: [],\n    f: [],\n    j: [],\n    k: [],\n    l: [],\n    colon: [],\n    space: []\n  };\n  keyMap[\"a\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyA(2, 1));\n  keyMap[\"s\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyS(2, 1));\n  keyMap[\"a\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyA(2, 2));\n  keyMap[\"s\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyS(2, 2));\n  keyMap[\"a\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyA(2, 3));\n  keyMap[\"colon\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyColon(2, 3));\n  keyMap[\"l\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyL(1, 4));\n  keyMap[\"l\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyL(1, 5));\n  keyMap[\"s\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyS(2, 6));\n  keyMap[\"colon\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyColon(2, 6));\n  keyMap[\"s\"].push(new _keys__WEBPACK_IMPORTED_MODULE_0__.KeyS(1, 7));\n  return [keyMap, audioTrack];\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (easy);\n\n//# sourceURL=webpack://keyrevolution/./javascript/key_maps/easy.js?");

/***/ }),

/***/ "./javascript/key_maps/keys.js":
/*!*************************************!*\
  !*** ./javascript/key_maps/keys.js ***!
  \*************************************/
/*! namespace exports */
/*! export KeyA [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeyColon [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeyD [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeyF [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeyJ [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeyK [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeyL [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeyS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeySpace [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyA\": () => /* binding */ KeyA,\n/* harmony export */   \"KeyS\": () => /* binding */ KeyS,\n/* harmony export */   \"KeyD\": () => /* binding */ KeyD,\n/* harmony export */   \"KeyF\": () => /* binding */ KeyF,\n/* harmony export */   \"KeyJ\": () => /* binding */ KeyJ,\n/* harmony export */   \"KeyK\": () => /* binding */ KeyK,\n/* harmony export */   \"KeyL\": () => /* binding */ KeyL,\n/* harmony export */   \"KeyColon\": () => /* binding */ KeyColon,\n/* harmony export */   \"KeySpace\": () => /* binding */ KeySpace\n/* harmony export */ });\n/* harmony import */ var _imgs_keys_singles_a_key_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../imgs/keys/singles/a-key.png */ \"./imgs/keys/singles/a-key.png\");\n/* harmony import */ var _imgs_keys_singles_s_key_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../imgs/keys/singles/s-key.png */ \"./imgs/keys/singles/s-key.png\");\n/* harmony import */ var _imgs_keys_singles_d_key_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../imgs/keys/singles/d-key.png */ \"./imgs/keys/singles/d-key.png\");\n/* harmony import */ var _imgs_keys_singles_f_key_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../imgs/keys/singles/f-key.png */ \"./imgs/keys/singles/f-key.png\");\n/* harmony import */ var _imgs_keys_singles_j_key_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../imgs/keys/singles/j-key.png */ \"./imgs/keys/singles/j-key.png\");\n/* harmony import */ var _imgs_keys_singles_k_key_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../imgs/keys/singles/k-key.png */ \"./imgs/keys/singles/k-key.png\");\n/* harmony import */ var _imgs_keys_singles_l_key_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../imgs/keys/singles/l-key.png */ \"./imgs/keys/singles/l-key.png\");\n/* harmony import */ var _imgs_keys_singles_colon_key_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../imgs/keys/singles/colon-key.png */ \"./imgs/keys/singles/colon-key.png\");\n/* harmony import */ var _imgs_keys_doubles_a2_key_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../imgs/keys/doubles/a2-key.png */ \"./imgs/keys/doubles/a2-key.png\");\n/* harmony import */ var _imgs_keys_doubles_s2_key_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../imgs/keys/doubles/s2-key.png */ \"./imgs/keys/doubles/s2-key.png\");\n/* harmony import */ var _imgs_keys_doubles_d2_key_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../imgs/keys/doubles/d2-key.png */ \"./imgs/keys/doubles/d2-key.png\");\n/* harmony import */ var _imgs_keys_doubles_f2_key_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../imgs/keys/doubles/f2-key.png */ \"./imgs/keys/doubles/f2-key.png\");\n/* harmony import */ var _imgs_keys_doubles_j2_key_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../imgs/keys/doubles/j2-key.png */ \"./imgs/keys/doubles/j2-key.png\");\n/* harmony import */ var _imgs_keys_doubles_k2_key_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../imgs/keys/doubles/k2-key.png */ \"./imgs/keys/doubles/k2-key.png\");\n/* harmony import */ var _imgs_keys_doubles_l2_key_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../imgs/keys/doubles/l2-key.png */ \"./imgs/keys/doubles/l2-key.png\");\n/* harmony import */ var _imgs_keys_doubles_colon2_key_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../imgs/keys/doubles/colon2-key.png */ \"./imgs/keys/doubles/colon2-key.png\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// Brown keys, singular\n\n\n\n\n\n\n\n // green keys double.\n\n\n\n\n\n\n\n\n\nvar KeyA = function KeyA(img, posY) {\n  _classCallCheck(this, KeyA);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_a_key_png__WEBPACK_IMPORTED_MODULE_0__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_a2_key_png__WEBPACK_IMPORTED_MODULE_8__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = 10;\n  this.posY = posY * 100 * -1;\n};\nvar KeyS = function KeyS(img, posY) {\n  _classCallCheck(this, KeyS);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_s_key_png__WEBPACK_IMPORTED_MODULE_1__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_s2_key_png__WEBPACK_IMPORTED_MODULE_9__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = 100;\n  this.posY = posY * 100 * -1;\n};\nvar KeyD = function KeyD(img, posY) {\n  _classCallCheck(this, KeyD);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_d_key_png__WEBPACK_IMPORTED_MODULE_2__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_d2_key_png__WEBPACK_IMPORTED_MODULE_10__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = \"placeholder\";\n  this.posY = posY * 100 * -1;\n};\nvar KeyF = function KeyF(img, posY) {\n  _classCallCheck(this, KeyF);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_f_key_png__WEBPACK_IMPORTED_MODULE_3__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_f2_key_png__WEBPACK_IMPORTED_MODULE_11__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = \"placeholder\";\n  this.posY = posY * 100 * -1;\n};\nvar KeyJ = function KeyJ(img, posY) {\n  _classCallCheck(this, KeyJ);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_j_key_png__WEBPACK_IMPORTED_MODULE_4__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_j2_key_png__WEBPACK_IMPORTED_MODULE_12__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = \"placeholder\";\n  this.posY = posY * 100 * -1;\n};\nvar KeyK = function KeyK(img, posY) {\n  _classCallCheck(this, KeyK);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_k_key_png__WEBPACK_IMPORTED_MODULE_5__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_k2_key_png__WEBPACK_IMPORTED_MODULE_13__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = \"placeholder\";\n  this.posY = posY * 100 * -1;\n};\nvar KeyL = function KeyL(img, posY) {\n  _classCallCheck(this, KeyL);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_l_key_png__WEBPACK_IMPORTED_MODULE_6__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_l2_key_png__WEBPACK_IMPORTED_MODULE_14__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = 820;\n  this.posY = posY * 100 * -1;\n};\nvar KeyColon = function KeyColon(img, posY) {\n  _classCallCheck(this, KeyColon);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n\n  if (img === 1) {\n    keysImg.src = _imgs_keys_singles_colon_key_png__WEBPACK_IMPORTED_MODULE_7__.default;\n  } else if (img === 2) {\n    keysImg.src = _imgs_keys_doubles_colon2_key_png__WEBPACK_IMPORTED_MODULE_15__.default;\n  }\n\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = 910;\n  this.posY = posY * 100 * -1;\n};\nvar KeySpace = function KeySpace(img, posY) {\n  _classCallCheck(this, KeySpace);\n\n  // Set img to Img Object\n  var keysImg = new Image();\n  keysImg.src = img;\n  this.img = keysImg;\n  this.width = 80;\n  this.height = 80; // Where it starts on the canvas\n\n  this.posX = \"placeholder\";\n  this.posY = posY * 100 * -1;\n};\n\n//# sourceURL=webpack://keyrevolution/./javascript/key_maps/keys.js?");

/***/ }),

/***/ "./javascript/start_view.js":
/*!**********************************!*\
  !*** ./javascript/start_view.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar StartView = /*#__PURE__*/function () {\n  function StartView(game) {\n    _classCallCheck(this, StartView);\n\n    this.game = game;\n  }\n\n  _createClass(StartView, [{\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      var startButton = document.getElementById(\"start-button\");\n      var startScreen = document.getElementById(\"start-screen-outer-modal\");\n      startButton.addEventListener(\"click\", function () {\n        startScreen.style.display = \"none\";\n\n        _this.game.stopAudio();\n\n        _this.game.startTimer();\n      });\n    }\n  }]);\n\n  return StartView;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartView);\n\n//# sourceURL=webpack://keyrevolution/./javascript/start_view.js?");

/***/ }),

/***/ "./imgs/Alexzander_Archibeque.jpg":
/*!****************************************!*\
  !*** ./imgs/Alexzander_Archibeque.jpg ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"79f8fbc765311938314ba7e00984144b.jpg\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/Alexzander_Archibeque.jpg?");

/***/ }),

/***/ "./imgs/keys/doubles/a2-key.png":
/*!**************************************!*\
  !*** ./imgs/keys/doubles/a2-key.png ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"cd08e9ed478e704e31622cec5bac0bd9.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/a2-key.png?");

/***/ }),

/***/ "./imgs/keys/doubles/colon2-key.png":
/*!******************************************!*\
  !*** ./imgs/keys/doubles/colon2-key.png ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"dc37e7af308a1c5bc4a5b562b75d75b1.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/colon2-key.png?");

/***/ }),

/***/ "./imgs/keys/doubles/d2-key.png":
/*!**************************************!*\
  !*** ./imgs/keys/doubles/d2-key.png ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a326f56e7708fd6b5ca5ea04200db24e.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/d2-key.png?");

/***/ }),

/***/ "./imgs/keys/doubles/f2-key.png":
/*!**************************************!*\
  !*** ./imgs/keys/doubles/f2-key.png ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1e73d63860aa61fbec004cc6311580ac.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/f2-key.png?");

/***/ }),

/***/ "./imgs/keys/doubles/j2-key.png":
/*!**************************************!*\
  !*** ./imgs/keys/doubles/j2-key.png ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1ea09369b3b279e8c9015d42ea9c91c8.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/j2-key.png?");

/***/ }),

/***/ "./imgs/keys/doubles/k2-key.png":
/*!**************************************!*\
  !*** ./imgs/keys/doubles/k2-key.png ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"93f65144bb204363e9968424c009b886.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/k2-key.png?");

/***/ }),

/***/ "./imgs/keys/doubles/l2-key.png":
/*!**************************************!*\
  !*** ./imgs/keys/doubles/l2-key.png ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a1c52481341d298317c406bdaeeae00d.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/l2-key.png?");

/***/ }),

/***/ "./imgs/keys/doubles/s2-key.png":
/*!**************************************!*\
  !*** ./imgs/keys/doubles/s2-key.png ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"063eaeae470348956ced0cc324089707.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/doubles/s2-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/a-key.png":
/*!*************************************!*\
  !*** ./imgs/keys/singles/a-key.png ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f13dc0de7323a1f969b2bc715cfbbfc2.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/a-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/colon-key.png":
/*!*****************************************!*\
  !*** ./imgs/keys/singles/colon-key.png ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"325bf04f5582a5b14ea3fe3deb90104d.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/colon-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/d-key.png":
/*!*************************************!*\
  !*** ./imgs/keys/singles/d-key.png ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"199c37ff7860b5d39b69584febc2b449.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/d-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/f-key.png":
/*!*************************************!*\
  !*** ./imgs/keys/singles/f-key.png ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"dab5caa64a255e06f9928b1c59005766.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/f-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/j-key.png":
/*!*************************************!*\
  !*** ./imgs/keys/singles/j-key.png ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0d1f66da2880be5fcd377fae1dc2501e.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/j-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/k-key.png":
/*!*************************************!*\
  !*** ./imgs/keys/singles/k-key.png ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c3ed66da8ff4702e4c295309f989018c.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/k-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/l-key.png":
/*!*************************************!*\
  !*** ./imgs/keys/singles/l-key.png ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e649d7ec6a8581071b3144a0c9c33c7f.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/l-key.png?");

/***/ }),

/***/ "./imgs/keys/singles/s-key.png":
/*!*************************************!*\
  !*** ./imgs/keys/singles/s-key.png ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"7fe09b83b489e0bf1b701b113daa219f.png\");\n\n//# sourceURL=webpack://keyrevolution/./imgs/keys/singles/s-key.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./javascript/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;