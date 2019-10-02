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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\src\\index.js: In strict mode code, functions can only be declared at top level or inside a block (17:8)\n\n\u001b[0m \u001b[90m 15 | \u001b[39m$( \u001b[36mfunction\u001b[39m() {\u001b[0m\n\u001b[0m \u001b[90m 16 | \u001b[39m  $(\u001b[32m'.token'\u001b[39m)\u001b[33m.\u001b[39mdraggable()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 17 | \u001b[39m  drop\u001b[33m:\u001b[39m \u001b[36mfunction\u001b[39m( event\u001b[33m,\u001b[39m ui ) {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 18 | \u001b[39m    $(\u001b[36mthis\u001b[39m )\u001b[33m.\u001b[39mtext()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 | \u001b[39m  }\u001b[0m\n\u001b[0m \u001b[90m 20 | \u001b[39m})\u001b[33m;\u001b[39m\u001b[0m\n    at Parser.raise (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:6387:17)\n    at Parser.parseStatementContent (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:9932:18)\n    at Parser.parseStatement (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:9900:17)\n    at Parser.parseLabeledStatement (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:10427:22)\n    at Parser.parseStatementContent (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:10032:19)\n    at Parser.parseStatement (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:9900:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:10476:25)\n    at Parser.parseBlockBody (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:10463:10)\n    at Parser.parseBlock (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:10447:10)\n    at Parser.parseFunctionBody (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:9495:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:9465:10)\n    at withTopicForbiddingContext (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:10606:12)\n    at Parser.withTopicForbiddingContext (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:9773:14)\n    at Parser.parseFunction (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:10605:10)\n    at Parser.parseFunctionExpression (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8948:17)\n    at Parser.parseExprAtom (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8861:21)\n    at Parser.parseExprSubscripts (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8483:23)\n    at Parser.parseMaybeUnary (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8463:21)\n    at Parser.parseExprOps (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8329:23)\n    at Parser.parseMaybeConditional (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8302:23)\n    at Parser.parseMaybeAssign (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8249:21)\n    at Parser.parseExprListItem (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:9562:18)\n    at Parser.parseCallExpressionArguments (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8692:22)\n    at Parser.parseSubscript (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8585:29)\n    at Parser.parseSubscripts (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8504:19)\n    at Parser.parseExprSubscripts (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8493:17)\n    at Parser.parseMaybeUnary (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8463:21)\n    at Parser.parseExprOps (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8329:23)\n    at Parser.parseMaybeConditional (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8302:23)\n    at Parser.parseMaybeAssign (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8249:21)\n    at Parser.parseExpression (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:8197:23)\n    at Parser.parseStatementContent (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:10029:23)\n    at Parser.parseStatement (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:9900:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:10476:25)\n    at Parser.parseBlockBody (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:10463:10)\n    at Parser.parseTopLevel (C:\\Users\\y.griha\\OneDrive - Interface3\\Javascript\\Exos\\Roulette\\node_modules\\@babel\\parser\\lib\\index.js:9829:10)");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map