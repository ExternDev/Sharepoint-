define("b4a7c812-cfc9-4ab9-97d7-11f92c43d9dc_0.0.1", ["@microsoft/sp-property-pane","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-webpart-base","react","EventCaptureSpfxWebPartStrings","react-dom","@microsoft/sp-http"], function(__WEBPACK_EXTERNAL_MODULE__26ea__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_cp40__, __WEBPACK_EXTERNAL_MODULE_faye__, __WEBPACK_EXTERNAL_MODULE_vlQI__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = /event\-capture\-spfx\-web\-part\.js/i;
/******/ 	  var publicPath;
/******/
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "Vy7I");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+iOO":
/*!**********************************************************************!*\
  !*** ./lib/webparts/eventCaptureSpfx/components/EventCaptureSpfx.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventCaptureSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventCaptureSpfx.module.scss */ "oJKg");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var EventCaptureSpfx = /** @class */ (function (_super) {
    __extends(EventCaptureSpfx, _super);
    function EventCaptureSpfx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventCaptureSpfx.prototype.render = function () {
        var _a = this.props, isDarkTheme = _a.isDarkTheme, environmentMessage = _a.environmentMessage, hasTeamsContext = _a.hasTeamsContext, userDisplayName = _a.userDisplayName;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", { className: "".concat(_EventCaptureSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].eventCaptureSpfx, " ").concat(hasTeamsContext ? _EventCaptureSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].teams : '') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _EventCaptureSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].welcome },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { alt: "", src: isDarkTheme ? __webpack_require__(/*! ../assets/welcome-dark.png */ "j2td") : __webpack_require__(/*! ../assets/welcome-light.png */ "cgjM"), className: _EventCaptureSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].welcomeImage }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null,
                    "Hi, ",
                    Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["escape"])(userDisplayName),
                    "!"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, environmentMessage),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "This web part will communicate the events to the AI panel.")))));
    };
    return EventCaptureSpfx;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["e"] = (EventCaptureSpfx);


/***/ }),

/***/ "26ea":
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: PropertyPaneTextField */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26ea__;

/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: escape */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: Version */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "VxMT":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/eventCaptureSpfx/components/EventCaptureSpfx.module.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".eventCaptureSpfx_30e00a5d{color:\"[theme:bodyText, default: #323130]\";color:var(--bodyText);overflow:hidden;padding:1em}.eventCaptureSpfx_30e00a5d.teams_30e00a5d{font-family:Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif}.welcome_30e00a5d{text-align:center}.welcomeImage_30e00a5d{max-width:420px;width:100%}.links_30e00a5d a{color:\"[theme:link, default:#03787c]\";color:var(--link);text-decoration:none}.links_30e00a5d a:hover{color:\"[theme:linkHovered, default: #014446]\";color:var(--linkHovered);text-decoration:underline}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "Vy7I":
/*!******************************************************************!*\
  !*** ./lib/webparts/eventCaptureSpfx/EventCaptureSpfxWebPart.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_RemoteEventReceiverConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/RemoteEventReceiverConstants */ "hZeN");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! EventCaptureSpfxWebPartStrings */ "cp40");
/* harmony import */ var EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_EventCaptureSpfx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/EventCaptureSpfx */ "+iOO");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_8__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var EventCaptureSpfxWebPart = /** @class */ (function (_super) {
    __extends(EventCaptureSpfxWebPart, _super);
    function EventCaptureSpfxWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.webUrl = "";
        _this._isDarkTheme = false;
        _this._environmentMessage = "";
        _this.sequenceNumber = 15001;
        _this.synchronization = 2;
        _this.eventTypes = {
            itemAdded: 10001,
            itemUpdated: 10002,
            itemDeleted: 10003,
            itemCheckedIn: 10004,
            itemCheckedOut: 10005,
        };
        return _this;
    }
    EventCaptureSpfxWebPart.prototype.render = function () {
        var element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_EventCaptureSpfx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "e"], {
            description: this.properties.description,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName,
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](element, this.domElement);
    };
    EventCaptureSpfxWebPart.prototype.onInit = function () {
        var _this = this;
        if (this.context.pageContext.web.absoluteUrl == "https://t4m8d.sharepoint.com") {
            this.webUrl = "https://t4m8d.sharepoint.com/sites/Sprint6Demo";
        }
        else {
            this.webUrl = this.context.pageContext.web.absoluteUrl;
        }
        console.log("this is the web urls :- ".concat(this.webUrl));
        this._registerRemoteEventReceiverForAllList();
        return this._getEnvironmentMessage().then(function (message) {
            _this._environmentMessage = message;
        });
    };
    /*
      Method : _registerRemoteEventReceiverForAllList()
      Params : no parameter
      Returns : void
      Description : _registerRemoteEventReceiverForAllList() method is responsible for getting all list
                    present on hosted SharePoint site and sending each list name to _registerRemoteEventReceiver(listName:string) method
                    for registering the remote event recieiver
    */
    EventCaptureSpfxWebPart.prototype._registerRemoteEventReceiverForAllList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("in the register remote event re");
                        return [4 /*yield*/, this.context.spHttpClient.get("".concat(this.webUrl, "/_api/web/lists"), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_8__["SPHttpClient"].configurations.v1, {})];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        response
                            .json()
                            .then(function (x) {
                            return x.value.map(function (xy) {
                                return _this._registerRemoteEventReceiver(xy.Title);
                            });
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /*
      Method : _registerRemoteEventReceiver(listName: string)
      @Params : no parameter
      Returns : void
      Description : _registerRemoteEventReceiver(listName: string) method is responsible for getting a list
                    send by _registerRemoteEventReceiverForAllList() method and checking if the remote event receiver
                    is already registered for particular site if not it calls the _registerRemoteEventReceiverForEventType(listname: string, eventType: number)
                    method for registering the remote event receiver with event type
    */
    EventCaptureSpfxWebPart.prototype._registerRemoteEventReceiver = function (listName) {
        return __awaiter(this, void 0, void 0, function () {
            var response, remoteEventreceiverResponse, a, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, this.context.spHttpClient.get("".concat(this.webUrl, "/_api/web/lists/getbytitle('").concat(listName, "')/eventreceivers"), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_8__["SPHttpClient"].configurations.v1, {})];
                    case 1:
                        response = _a.sent();
                        remoteEventreceiverResponse = response
                            .json()
                            .then(function (x) {
                            return x.value.filter(function (f) {
                                return f.receiverName === _constants_RemoteEventReceiverConstants__WEBPACK_IMPORTED_MODULE_4__[/* ReceiverName */ "a"];
                            });
                        });
                        console.log(remoteEventreceiverResponse);
                        return [4 /*yield*/, remoteEventreceiverResponse.then(function (x) { return x.length === 0; })];
                    case 2:
                        if (_a.sent()) {
                            console.log("in if with list names ".concat(listName));
                            this._registerRemoteEventReceiverForEventType(listName, this.eventTypes.itemAdded); //add
                            this._registerRemoteEventReceiverForEventType(listName, this.eventTypes.itemUpdated); //update
                            this._registerRemoteEventReceiverForEventType(listName, this.eventTypes.itemDeleted); //delete
                            this._registerRemoteEventReceiverForEventType(listName, this.eventTypes.itemCheckedIn); //checkedIn
                            this._registerRemoteEventReceiverForEventType(listName, this.eventTypes.itemCheckedOut); //checkedOut
                        }
                        return [4 /*yield*/, remoteEventreceiverResponse.then(function (x) {
                                return x.some(function (a) {
                                    return a.eventType !== _this.eventTypes.itemAdded;
                                });
                            })];
                    case 3:
                        if (_a.sent()) {
                            a = this._registerRemoteEventReceiverForEventType(listName, this.eventTypes.itemAdded);
                            console.log(a);
                        }
                        return [4 /*yield*/, remoteEventreceiverResponse.then(function (x) {
                                return x.some(function (a) {
                                    return a.eventType !== _this.eventTypes.itemUpdated;
                                });
                            })];
                    case 4:
                        if (_a.sent()) {
                            this._registerRemoteEventReceiverForEventType(listName, this.eventTypes.itemUpdated);
                        }
                        return [4 /*yield*/, remoteEventreceiverResponse.then(function (x) {
                                return x.some(function (a) {
                                    return a.eventType !== _this.eventTypes.itemDeleted;
                                });
                            })];
                    case 5:
                        if (_a.sent()) {
                            this._registerRemoteEventReceiverForEventType(listName, this.eventTypes.itemDeleted);
                        }
                        return [4 /*yield*/, remoteEventreceiverResponse.then(function (x) {
                                return x.some(function (a) { return _this.eventTypes.itemCheckedIn; });
                            })];
                    case 6:
                        if (_a.sent()) {
                            this._registerRemoteEventReceiverForEventType(listName, this.eventTypes.itemCheckedIn);
                        }
                        return [4 /*yield*/, remoteEventreceiverResponse.then(function (x) {
                                return x.some(function (a) {
                                    return a.eventType !== _this.eventTypes.itemCheckedOut;
                                });
                            })];
                    case 7:
                        if (_a.sent()) {
                            this._registerRemoteEventReceiverForEventType(listName, this.eventTypes.itemCheckedOut);
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        error_2 = _a.sent();
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /*
      Method : _registerRemoteEventReceiverForEventType(listName: string, eventType: number)
      Params : no parameter
      Returns : void
      Description : _registerRemoteEventReceiverForEventType(listName: string, eventType: number) method is responsible for
                    registering the remote event receiver with list name and eventType
    */
    EventCaptureSpfxWebPart.prototype._registerRemoteEventReceiverForEventType = function (listName, eventType) {
        return __awaiter(this, void 0, void 0, function () {
            var eventReceivePayload, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("in rer...........");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        eventReceivePayload = {
                            ReceiverAssembly: _constants_RemoteEventReceiverConstants__WEBPACK_IMPORTED_MODULE_4__[/* ReceiverAssembly */ "e"],
                            ReceiverClass: _constants_RemoteEventReceiverConstants__WEBPACK_IMPORTED_MODULE_4__[/* ReceiverClass */ "t"],
                            ReceiverId: _constants_RemoteEventReceiverConstants__WEBPACK_IMPORTED_MODULE_4__[/* ReceiverId */ "n"],
                            ReceiverName: _constants_RemoteEventReceiverConstants__WEBPACK_IMPORTED_MODULE_4__[/* ReceiverName */ "a"],
                            SequenceNumber: this.sequenceNumber,
                            Synchronization: this.synchronization,
                            EventType: eventType,
                            ReceiverUrl: _constants_RemoteEventReceiverConstants__WEBPACK_IMPORTED_MODULE_4__[/* ReceiverUrl */ "i"],
                        };
                        return [4 /*yield*/, this.context.spHttpClient.post("".concat(this.webUrl, "/_api/web/lists/getbytitle('").concat(listName, "')/eventreceivers"), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_8__["SPHttpClient"].configurations.v1, {
                                body: JSON.stringify(eventReceivePayload),
                            })];
                    case 2:
                        response = _a.sent();
                        console.log("the post for RER", response);
                        if (response.ok) {
                            console.log("The RER is registered for list".concat(listName, " for event type ").concat(eventType));
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EventCaptureSpfxWebPart.prototype._getEnvironmentMessage = function () {
        var _this = this;
        if (!!this.context.sdks.microsoftTeams) {
            // running in Teams, office.com or Outlook
            return this.context.sdks.microsoftTeams.teamsJs.app
                .getContext()
                .then(function (context) {
                var environmentMessage = "";
                switch (context.app.host.name) {
                    case "Office": // running in Office
                        environmentMessage = _this.context.isServedFromLocalhost
                            ? EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppLocalEnvironmentOffice"]
                            : EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppOfficeEnvironment"];
                        break;
                    case "Outlook": // running in Outlook
                        environmentMessage = _this.context.isServedFromLocalhost
                            ? EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppLocalEnvironmentOutlook"]
                            : EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppOutlookEnvironment"];
                        break;
                    case "Teams": // running in Teams
                    case "TeamsModern":
                        environmentMessage = _this.context.isServedFromLocalhost
                            ? EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppLocalEnvironmentTeams"]
                            : EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppTeamsTabEnvironment"];
                        break;
                    default:
                        environmentMessage = EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["UnknownEnvironment"];
                }
                return environmentMessage;
            });
        }
        return Promise.resolve(this.context.isServedFromLocalhost
            ? EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppLocalEnvironmentSharePoint"]
            : EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppSharePointEnvironment"]);
    };
    EventCaptureSpfxWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        if (semanticColors) {
            this.domElement.style.setProperty("--bodyText", semanticColors.bodyText || null);
            this.domElement.style.setProperty("--link", semanticColors.link || null);
            this.domElement.style.setProperty("--linkHovered", semanticColors.linkHovered || null);
        }
    };
    EventCaptureSpfxWebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](this.domElement);
    };
    Object.defineProperty(EventCaptureSpfxWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Version"].parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    EventCaptureSpfxWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["PropertyPaneDescription"],
                    },
                    groups: [
                        {
                            groupName: EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])("description", {
                                    label: EventCaptureSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["DescriptionFieldLabel"],
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return EventCaptureSpfxWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (EventCaptureSpfxWebPart);


/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: BaseClientSideWebPart */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! exports used: Component, createElement */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "cgjM":
/*!****************************************************************!*\
  !*** ./lib/webparts/eventCaptureSpfx/assets/welcome-light.png ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "welcome-light_1eaf582a9b78272e22113e1e733138b8.png";

/***/ }),

/***/ "cp40":
/*!*************************************************!*\
  !*** external "EventCaptureSpfxWebPartStrings" ***!
  \*************************************************/
/*! no static exports found */
/*! exports used: AppLocalEnvironmentOffice, AppLocalEnvironmentOutlook, AppLocalEnvironmentSharePoint, AppLocalEnvironmentTeams, AppOfficeEnvironment, AppOutlookEnvironment, AppSharePointEnvironment, AppTeamsTabEnvironment, BasicGroupName, DescriptionFieldLabel, PropertyPaneDescription, UnknownEnvironment */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cp40__;

/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/*! exports used: render, unmountComponentAtNode */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "hZeN":
/*!*******************************************************!*\
  !*** ./lib/constants/RemoteEventReceiverConstants.js ***!
  \*******************************************************/
/*! exports provided: ReceiverAssembly, ReceiverClass, ReceiverId, ReceiverName, ReceiverUrl */
/*! exports used: ReceiverAssembly, ReceiverClass, ReceiverId, ReceiverName, ReceiverUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ReceiverAssembly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ReceiverClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ReceiverId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiverName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ReceiverUrl; });
var ReceiverAssembly = "RemoteEventRx, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null";
var ReceiverClass = "RemoteEventReceiver1";
var ReceiverId = "528a72eb-7319-4cc8-9479-096e3f573cf2";
var ReceiverName = "RemoteEventReceiver1";
var ReceiverUrl = "https://ai-event-rx.azurewebsites.net/services/RemoteEventReceiver1.svc";


/***/ }),

/***/ "j2td":
/*!***************************************************************!*\
  !*** ./lib/webparts/eventCaptureSpfx/assets/welcome-dark.png ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "welcome-dark_dcd6e9e4aa4b30169bf8ab6002b643a7.png";

/***/ }),

/***/ "oJKg":
/*!**********************************************************************************!*\
  !*** ./lib/webparts/eventCaptureSpfx/components/EventCaptureSpfx.module.scss.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./EventCaptureSpfx.module.css */ "ydgx");
var styles = {
    eventCaptureSpfx: 'eventCaptureSpfx_30e00a5d',
    teams: 'teams_30e00a5d',
    welcome: 'welcome_30e00a5d',
    welcomeImage: 'welcomeImage_30e00a5d',
    links: 'links_30e00a5d'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "vlQI":
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/*! no static exports found */
/*! exports used: SPHttpClient */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vlQI__;

/***/ }),

/***/ "xMn6":
/*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitStyles = exports.detokenize = exports.clearStyles = exports.loadTheme = exports.flush = exports.configureRunMode = exports.configureLoadStyles = exports.loadStyles = void 0;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* Mode.sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* Mode.async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    // Use "self" to distinguish conflicting global typings for setTimeout() from lib.dom.d.ts vs Jest's @types/node
    // https://github.com/jestjs/jest/issues/14418
    return self.setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* ClearStyleOptions.all */; }
    if (option === 3 /* ClearStyleOptions.all */ || option === 2 /* ClearStyleOptions.onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* ClearStyleOptions.all */ || option === 1 /* ClearStyleOptions.onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* ClearStyleOptions.onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                // eslint-disable-next-line no-console
                console.warn("Theming value not provided for \"".concat(themeSlot, "\". Falling back to \"").concat(defaultValue, "\"."));
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ydgx":
/*!******************************************************************************!*\
  !*** ./lib/webparts/eventCaptureSpfx/components/EventCaptureSpfx.module.css ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./EventCaptureSpfx.module.css */ "VxMT");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ })

/******/ })});;
//# sourceMappingURL=event-capture-spfx-web-part.js.map