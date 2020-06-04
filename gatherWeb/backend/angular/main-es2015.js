(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-root\">\r\n  <app-header></app-header>\r\n  <main>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n  <app-footer></app-footer>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-card class=\"login-card\"> -->\r\n<div>\r\n    <mat-spinner *ngIf=\"isLoading\" style=\"margin: auto;\"></mat-spinner>\r\n    <form class=\"login-form\" (submit)=\"onLogIn(logInForm)\" #logInForm=\"ngForm\" *ngIf=\"!isLoading\">\r\n        <div class=\"login-div\">\r\n            \r\n            <mat-form-field class=\"example-full-width\">\r\n                <mat-label>Email</mat-label>\r\n                <input matInput name=\"email\" ngModel placeholder=\"example@exp.com\" value=\"\" required #email=\"ngModel\" required email>\r\n                <mat-error *ngIf=\"email.invalid\">Please Enter a valid email</mat-error>\r\n            </mat-form-field>\r\n            <br>\r\n            <mat-form-field class=\"example-full-width-last\">\r\n                <mat-label>Password</mat-label>\r\n                <input matInput name=\"password\" ngModel placeholder=\"example1234\" value=\"\" required #password=\"ngModel\">\r\n                <mat-error *ngIf=\"password.invalid\">Please Enter a valid password</mat-error>\r\n            </mat-form-field>\r\n            <br>\r\n            <button mat-raised-button color=\"basic\">Sign-up</button>\r\n            <button type=\"submit\" mat-raised-button color=\"primary\">Log-in</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n    \r\n<!-- </mat-card> -->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/signup/signup.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/signup/signup.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <mat-spinner *ngIf=\"isLoading\" style=\"margin: auto\"></mat-spinner>\r\n    <form class=\"login-form\" (submit)=\"onSignUp(logInForm)\" #logInForm=\"ngForm\"  *ngIf=\"!isLoading\">\r\n        <div class=\"login-div\">\r\n            <mat-form-field class=\"example-full-width\">\r\n                <mat-label>Email</mat-label>\r\n                <input matInput name=\"email\" ngModel placeholder=\"example@exp.com\" value=\"\"  #email=\"ngModel\" required email>\r\n                <mat-error *ngIf=\"email.invalid\">Please Enter a valid email</mat-error>\r\n            </mat-form-field>\r\n            <br>\r\n            <mat-form-field class=\"example-full-width-last\">\r\n                <mat-label>Password</mat-label>\r\n                <input matInput name=\"password\" ngModel placeholder=\"example1234\" value=\"\"  #password=\"ngModel\" required password>\r\n                <mat-error *ngIf=\"password.invalid\">Please Enter a valid password</mat-error>\r\n            </mat-form-field>\r\n            <br>\r\n            <mat-form-field>\r\n                <mat-label>Team</mat-label>\r\n                <mat-select name=\"team\" ngModel #team='ngModel' #team='ngModel' required>\r\n                  <mat-option *ngFor=\"let team of Teams\" [value]=\"team\">\r\n                    {{team}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"team.invalid\">Please Enter a valid team</mat-error>\r\n            </mat-form-field>\r\n            <br>\r\n            <button type=\"submit\" mat-raised-button color=\"basic\">Sign-up</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"footer\" color=\"primary\">Footer</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button  mat-raised-button color=\"basic\" (click)=\"onStartGame()\">play</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/games/games.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/games/games.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>games works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"toolbar\" color=\"primary\">\r\n    <button mat-button routerLink=\"/\" class=\"login-btn\">Gather</button>\r\n    <div *ngIf=\"userIsAuthenticated\">\r\n        <button mat-button class=\"login-btn\" (click)=\"onLogOut()\">logout</button>\r\n        <button mat-button routerLink=\"/statistics\" class=\"login-btn\">statistics</button>\r\n    </div>\r\n    <div *ngIf=\"!userIsAuthenticated\">\r\n        <button mat-button routerLink=\"/login\" class=\"login-btn\">login</button>\r\n        <button mat-button routerLink=\"/signup\" class=\"login-btn\">signup</button>\r\n    </div>\r\n</mat-toolbar>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"logo-card\">Logo and chatch phrasre</mat-card>\r\n<hr>\r\n<mat-card class=\"body-card\">Body</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/perc-circle/perc-circle.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/perc-circle/perc-circle.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex-wrapper\">\r\n\r\n\r\n    <div class=\"single-chart\">\r\n      <svg viewBox=\"0 0 36 36\" class=\"circular-chart green\">\r\n        <path class=\"circle-bg\"\r\n          d=\"M18 2.0845\r\n            a 15.9155 15.9155 0 0 1 0 31.831\r\n            a 15.9155 15.9155 0 0 1 0 -31.831\"\r\n        />\r\n        <path class=\"circle\"\r\n        attr.stroke-dasharray=\"{{this.perctage}},100\"\r\n          d=\"M18 2.0845\r\n            a 15.9155 15.9155 0 0 1 0 31.831\r\n            a 15.9155 15.9155 0 0 1 0 -31.831\"\r\n        />\r\n        <path class=\"circle\"\r\n              attr.stroke-dasharray=\"{{this.perctage}},100\"\r\n              d=\"M18 2.0845\r\n            a 15.9155 15.9155 0 0 1 0 31.831\r\n            a 15.9155 15.9155 0 0 1 0 -31.831\"\r\n        />\r\n        <text x=\"18\" y=\"20.35\" class=\"percentage\">{{this.perctage}}</text>\r\n      </svg>\r\n    </div>\r\n\r\n\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/statistics/statistics.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/statistics/statistics.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Just another {{buzzersToGo}} buzzers to go! </h1>\r\n\r\n<app-perc-circle></app-perc-circle>\r\n\r\n<div class=\"info_statistis\">\r\n<div class=\"info_unit\" style=\"margin-right: 100px;\"> <p> today</p>\r\n    <p> {{buzzersToday}}</p>\r\n    <p> buzzer clicks</p></div>\r\n\r\n\r\n    <div class=\"info_unit\"> <p> this week</p>\r\n        <p> {{buzzersWeek}}</p>\r\n        <p> buzzer clicks</p></div>\r\n\r\n        <div class=\"info_unit\" style=\"margin-left: 100px;\"> <p> All time</p>\r\n            <p> {{buzzerGeneral}}</p>\r\n            <p> buzzer clicks</p></div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth/signup/signup.component */ "./src/app/components/auth/signup/signup.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/auth/auth.guard */ "./src/app/components/auth/auth.guard.ts");
/* harmony import */ var _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/statistics/statistics.component */ "./src/app/components/statistics/statistics.component.ts");









const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'testguard', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'testgame', component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"], canActivate: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'statistics', component: _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_8__["StatisticsComponent"], canActivate: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-root{\r\n    height: 100vh;\r\n}\r\n\r\napp-header {\r\n    height: 10vh;\r\n}\r\n\r\napp-footer {\r\n    height: 10vh;\r\n}\r\n\r\nmain{\r\n    height: 100%;\r\n    margin-top: 1rem;\r\n    margin-bottom: 2rem;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXJvb3R7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hcHAtaGVhZGVyIHtcclxuICAgIGhlaWdodDogMTB2aDtcclxufVxyXG5cclxuYXBwLWZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbn1cclxuXHJcbm1haW57XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'gatherWeb';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_games_games_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/games/games.component */ "./src/app/components/games/games.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/auth/signup/signup.component */ "./src/app/components/auth/signup/signup.component.ts");
/* harmony import */ var _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/auth/auth-interceptor */ "./src/app/components/auth/auth-interceptor.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _components_perc_circle_perc_circle_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/perc-circle/perc-circle.component */ "./src/app/components/perc-circle/perc-circle.component.ts");
/* harmony import */ var _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/statistics/statistics.component */ "./src/app/components/statistics/statistics.component.ts");

// Module Imports






// Components Import












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _components_games_games_component__WEBPACK_IMPORTED_MODULE_9__["GamesComponent"],
            _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
            _components_game_game_component__WEBPACK_IMPORTED_MODULE_16__["GameComponent"],
            _components_perc_circle_perc_circle_component__WEBPACK_IMPORTED_MODULE_17__["PercCircleComponent"],
            _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_18__["StatisticsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        ],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/auth/auth-interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/auth/auth-interceptor.ts ***!
  \*****************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/components/auth/auth.service.ts");



let AuthInterceptor = class AuthInterceptor {
    constructor(authAService) {
        this.authAService = authAService;
    }
    intercept(req, next) {
        const authToken = this.authAService.getToken();
        const authReq = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + authToken)
        });
        return next.handle(req);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/components/auth/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/components/auth/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/components/auth/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            // deny access 
            this.router.navigate(['/login']);
        }
        return isAuth;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/components/auth/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/components/auth/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






const SERVER_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getToken() {
        return this.token;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getIsAuth() {
        return this.isAthenticated;
    }
    createUser(email, password, team) {
        const authData = { email: email, password: password, team: team };
        this.http.post(`${SERVER_URL}api/user/signup`, authData)
            .subscribe(response => {
            console.log(response);
            this.router.navigate(['/']);
        });
    }
    login(email, password) {
        const authData = { email: email, password: password };
        this.http.post(`${SERVER_URL}api/user/login`, authData)
            .subscribe(response => {
            const token = response.token;
            this.token = token;
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAthenticated = true;
                this.authStatusListener.next(true);
                let now = new Date();
                let expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                // let team = response.team
                this.saveAuthData(token, expirationDate);
                this.router.navigate(['/testgame']);
            }
        });
    }
    autoAuthUser() {
        const authInfo = this.getAuthData();
        const now = new Date();
        const expiresIn = authInfo.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInfo.token;
            this.isAthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }
    logout() {
        this.token = null;
        this.isAthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    }
    setAuthTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    saveAuthData(token, expirationDate) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        // localStorage.setItem('team', team.toString());
    }
    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
    }
    getAuthData() {
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expiration");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token,
            expirationDate: new Date(expirationDate)
        };
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
], AuthService);



/***/ }),

/***/ "./src/app/components/auth/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.example-full-width-last{\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.login-card {\r\n    width: 80%;\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aC1sYXN0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmxvZ2luLWNhcmQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/components/auth/auth.service.ts");



let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    ngOnInit() {
    }
    onLogIn(form) {
        if (form.invalid) {
            return;
        }
        console.log("Login posted");
        this.isLoading = true;
        return this.authService.login(form.value.email, form.value.password);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/auth/signup/signup.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/auth/signup/signup.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/auth/signup/signup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/auth/signup/signup.component.ts ***!
  \************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/components/auth/auth.service.ts");



let SignupComponent = class SignupComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoading = false;
        this.Teams = [1, 2, 3, 4];
    }
    ngOnInit() {
    }
    onSignUp(form) {
        if (form.invalid) {
            console.log('form is invalid');
            return;
        }
        this.isLoading = true;
        this.authService.createUser(form.value.email, form.value.password, form.value.team);
    }
};
SignupComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/components/auth/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/game/game.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/game/game.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/components/auth/auth.service.ts");




let GameComponent = class GameComponent {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ngOnInit() {
    }
    onStartGame() {
        console.log('starting game');
        const { token } = this.authService.getAuthData();
        const res = this.http.get('http://localhost:3000/api/games', { headers: {
                Authorization: `Bearer ${token}`
            } }).toPromise().then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }
};
GameComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.css */ "./src/app/components/game/game.component.css")).default]
    })
], GameComponent);



/***/ }),

/***/ "./src/app/components/games/games.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/games/games.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/games/games.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/games/games.component.ts ***!
  \*****************************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GamesComponent = class GamesComponent {
    constructor() { }
    ngOnInit() {
    }
};
GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-games',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./games.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/games/games.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./games.component.css */ "./src/app/components/games/games.component.css")).default]
    })
], GamesComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/components/auth/auth.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.userIsAuthenticated = false;
    }
    ngOnInit() {
        this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
        });
    }
    onLogOut() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.authListenerSubs.unsubscribe();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/perc-circle/perc-circle.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/perc-circle/perc-circle.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-wrapper {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: center;\r\n    margin-top: 100px;\r\n  }\r\n  \r\n  .single-chart {\r\n    width: 33%;\r\n    justify-content: space-around ;\r\n  }\r\n  \r\n  .circular-chart {\r\n    display: block;\r\n    margin: 10px auto;\r\n    max-width: 80%;\r\n    max-height: 250px;\r\n  }\r\n  \r\n  .circle-bg {\r\n    fill: none;\r\n    stroke: #eee;\r\n    stroke-width: 3.8;\r\n  }\r\n  \r\n  .circle {\r\n    fill: none;\r\n    stroke-width: 2.8;\r\n    stroke-linecap: round;\r\n    -webkit-animation: progress 1s ease-out forwards;\r\n            animation: progress 1s ease-out forwards;\r\n  }\r\n  \r\n  @-webkit-keyframes progress {\r\n    0% {\r\n      stroke-dasharray: 0 100;\r\n    }\r\n  }\r\n  \r\n  @keyframes progress {\r\n    0% {\r\n      stroke-dasharray: 0 100;\r\n    }\r\n  }\r\n  \r\n  .circular-chart.orange .circle {\r\n    stroke: #ff9f00;\r\n  }\r\n  \r\n  .circular-chart.green .circle {\r\n    stroke: #4CC790;\r\n  }\r\n  \r\n  .circular-chart.blue .circle {\r\n    stroke: #3c9ee5;\r\n  }\r\n  \r\n  .percentage {\r\n    fill: #666;\r\n    font-family: sans-serif;\r\n    font-size: 0.5em;\r\n    text-anchor: middle;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJjLWNpcmNsZS9wZXJjLWNpcmNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtJQUNWLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0RBQXdDO1lBQXhDLHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCO0VBQ0Y7O0VBSkE7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtFQUNGOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZXJjLWNpcmNsZS9wZXJjLWNpcmNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpbmdsZS1jaGFydCB7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgO1xyXG4gIH1cclxuICBcclxuICAuY2lyY3VsYXItY2hhcnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXJjbGUtYmcge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogI2VlZTtcclxuICAgIHN0cm9rZS13aWR0aDogMy44O1xyXG4gIH1cclxuICBcclxuICAuY2lyY2xlIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDIuODtcclxuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xyXG4gICAgMCUge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNpcmN1bGFyLWNoYXJ0Lm9yYW5nZSAuY2lyY2xlIHtcclxuICAgIHN0cm9rZTogI2ZmOWYwMDtcclxuICB9XHJcbiAgXHJcbiAgLmNpcmN1bGFyLWNoYXJ0LmdyZWVuIC5jaXJjbGUge1xyXG4gICAgc3Ryb2tlOiAjNENDNzkwO1xyXG4gIH1cclxuICBcclxuICAuY2lyY3VsYXItY2hhcnQuYmx1ZSAuY2lyY2xlIHtcclxuICAgIHN0cm9rZTogIzNjOWVlNTtcclxuICB9XHJcbiAgXHJcbiAgLnBlcmNlbnRhZ2Uge1xyXG4gICAgZmlsbDogIzY2NjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/perc-circle/perc-circle.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/perc-circle/perc-circle.component.ts ***!
  \*****************************************************************/
/*! exports provided: PercCircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercCircleComponent", function() { return PercCircleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/components/auth/auth.service.ts");




let PercCircleComponent = class PercCircleComponent {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.perctage = this.getPrecentage();
    }
    ngOnInit() {
        this.getPrecentage();
    }
    ngAfterViewInit() {
    }
    getPrecentage() {
        const { token } = this.authService.getAuthData();
        const currentPoints = this.http.get('http://localhost:3000/api/statistics', { headers: {
                Authorization: `Bearer ${token}`
            } }).toPromise().then(res => {
            this.perctage = res.points;
        }).catch(err => {
            console.log(err);
        });
    }
};
PercCircleComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
PercCircleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perc-circle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./perc-circle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/perc-circle/perc-circle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./perc-circle.component.css */ "./src/app/components/perc-circle/perc-circle.component.css")).default]
    })
], PercCircleComponent);



/***/ }),

/***/ "./src/app/components/statistics/statistics.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/statistics/statistics.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".info_statistis{\r\n    display: inline-flex;\r\n}\r\n\r\n.info_unit{\r\n    margin-top: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb19zdGF0aXN0aXN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxuLmluZm9fdW5pdHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/statistics/statistics.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/statistics/statistics.component.ts ***!
  \***************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatisticsComponent = class StatisticsComponent {
    constructor() { }
    ngOnInit() {
        this.buzzersToGo = 347;
        this.buzzersToday = 20;
        this.buzzersWeek = 143;
        this.buzzerGeneral = 764;
    }
};
StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statistics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/statistics/statistics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./statistics.component.css */ "./src/app/components/statistics/statistics.component.css")).default]
    })
], StatisticsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: "http://localhost:3000/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nimfel01\OneDrive - ARM\Desktop\milab-finalproj\gather-mean-stack\gatherWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map