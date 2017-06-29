webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wall_wall_component__ = __webpack_require__("../../../../../src/app/wall/wall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newmessage_newmessage_component__ = __webpack_require__("../../../../../src/app/newmessage/newmessage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messagedetails_messagedetails_component__ = __webpack_require__("../../../../../src/app/messagedetails/messagedetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commentmessage_commentmessage_component__ = __webpack_require__("../../../../../src/app/commentmessage/commentmessage.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'wallpage', component: __WEBPACK_IMPORTED_MODULE_3__wall_wall_component__["a" /* WallComponent */] },
    { path: 'newMessage', component: __WEBPACK_IMPORTED_MODULE_4__newmessage_newmessage_component__["a" /* NewmessageComponent */] },
    { path: "details/:messid", component: __WEBPACK_IMPORTED_MODULE_5__messagedetails_messagedetails_component__["a" /* MessagedetailsComponent */] },
    { path: "commentmessage", component: __WEBPACK_IMPORTED_MODULE_6__commentmessage_commentmessage_component__["a" /* CommentmessageComponent */] },
    { path: "answer/:messid", component: __WEBPACK_IMPORTED_MODULE_6__commentmessage_commentmessage_component__["a" /* CommentmessageComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wall_wall_component__ = __webpack_require__("../../../../../src/app/wall/wall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wall_wall_service__ = __webpack_require__("../../../../../src/app/wall/wall.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__commentmessage_commentmessage_service__ = __webpack_require__("../../../../../src/app/commentmessage/commentmessage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__messagedetails_messagedetails_service__ = __webpack_require__("../../../../../src/app/messagedetails/messagedetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__newmessage_newmessage_service__ = __webpack_require__("../../../../../src/app/newmessage/newmessage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__newmessage_newmessage_component__ = __webpack_require__("../../../../../src/app/newmessage/newmessage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__messagedetails_messagedetails_component__ = __webpack_require__("../../../../../src/app/messagedetails/messagedetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__commentmessage_commentmessage_component__ = __webpack_require__("../../../../../src/app/commentmessage/commentmessage.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__wall_wall_component__["a" /* WallComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__newmessage_newmessage_component__["a" /* NewmessageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__messagedetails_messagedetails_component__["a" /* MessagedetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__commentmessage_commentmessage_component__["a" /* CommentmessageComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__wall_wall_service__["a" /* WallService */], __WEBPACK_IMPORTED_MODULE_7__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_9__commentmessage_commentmessage_service__["a" /* CommentmessageService */], __WEBPACK_IMPORTED_MODULE_10__messagedetails_messagedetails_service__["a" /* MessagedetailsService */], __WEBPACK_IMPORTED_MODULE_11__newmessage_newmessage_service__["a" /* NewmessageService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/commentmessage/commentmessage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commentmessage/commentmessage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  commentmessage works!\n</p>\n<button (click)=\"cancel()\">Home</button>\n<button (click)=\"tomessage(messages._id)\">Go Back to Question</button>\n<!-- {{ messages | json }} -->\n<div>\n  <p>Question: {{messages.message}}</p>\n  <p>Description: {{messages.desc}}</p>\n  <p>By:{{messages._user.username}}</p>\n</div>\n<form (submit)=\"createcomment(formData, messages._id)\" #formData=\"ngForm\">\n  <h2>Your Answer:</h2>\n  <p>Answer:<input type=\"text\"  ngModel name=\"content\"></p>\n  <p>Supportive Material: <input type=\"text\" ngModel name=\"support\" ng-minlength=\"5\"></p>\n  <input type=\"submit\" name=\"\" value=\"Submit\">\n  <button (click)=\"cancel()\">Cancel</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/commentmessage/commentmessage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commentmessage_service__ = __webpack_require__("../../../../../src/app/commentmessage/commentmessage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentmessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentmessageComponent = (function () {
    function CommentmessageComponent(_router, commentmessageservice, _activated) {
        this._router = _router;
        this.commentmessageservice = commentmessageservice;
        this._activated = _activated;
        this.errormess = "message too short";
        this._activated.params.subscribe(function (param) {
            console.log(param.messid);
        });
    }
    CommentmessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activated.params.subscribe(function (params) {
            _this.messageid = params.messid;
        });
        this.grabmessage();
    };
    CommentmessageComponent.prototype.createcomment = function (formData, messageid) {
        var _this = this;
        this.commentmessageservice.commenting({ formstuff: formData.value, messid: messageid })
            .then(function (data) { console.log(data), _this.grabmessage(); })
            .catch(function (err) { return [_this.error = "message too short"]; });
    };
    CommentmessageComponent.prototype.grabmessage = function () {
        var _this = this;
        this.commentmessageservice.grabmessage({ id: this.messageid })
            .then(function (data) { _this.messages = data[0]; })
            .catch(function (err) { _this.error = _this.errormess, console.log(err); });
    };
    CommentmessageComponent.prototype.cancel = function () {
        this._router.navigate(['']);
    };
    CommentmessageComponent.prototype.tomessage = function (value) {
        this._router.navigate(['details/' + value]);
    };
    return CommentmessageComponent;
}());
CommentmessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-commentmessage',
        template: __webpack_require__("../../../../../src/app/commentmessage/commentmessage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/commentmessage/commentmessage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__commentmessage_service__["a" /* CommentmessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__commentmessage_service__["a" /* CommentmessageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], CommentmessageComponent);

var _a, _b, _c;
//# sourceMappingURL=commentmessage.component.js.map

/***/ }),

/***/ "../../../../../src/app/commentmessage/commentmessage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentmessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentmessageService = (function () {
    function CommentmessageService(_http) {
        this._http = _http;
    }
    CommentmessageService.prototype.grabmessage = function (value) {
        return this._http.post('/grabmessage', value)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    CommentmessageService.prototype.commenting = function (value) {
        return this._http.post('/commenting', value)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return CommentmessageService;
}());
CommentmessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CommentmessageService);

var _a;
//# sourceMappingURL=commentmessage.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Welcome to the Market!</h2>\n<form (submit)=\"logreg()\" method=\"post\">\n  <p><input type=\"text\" name=\"username\" value=\"\"\n[(ngModel)]=\"username\"\n    ></p>\n  <input type=\"submit\" name=\"\" value=\"Enter\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_loginservice, _router) {
        this._loginservice = _loginservice;
        this._router = _router;
        this.username = "";
        this.users = [];
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logreg = function () {
        var _this = this;
        this._loginservice.logreg({ username: this.username })
            .then(function (returndata) {
            _this.users = returndata;
            _this._router.navigate(['/wallpage']);
        })
            .catch(function (err) {
            if (err) {
                _this.errors = err;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
    }
    LoginService.prototype.logreg = function (data) {
        return this._http.post('/logreg', data)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/messagedetails/messagedetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messagedetails/messagedetails.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  messagedetails works!\n</p>\n{{ messages | json }}\n<a [routerLink]=\"['']\">Home</a>\n<button (click)=\"logout()\">Logout</button>\n<button (click)=\"addanswer(messages._id)\">Add an Answer</button>\n<div>\n  <p>by: {{messages._user.username}}</p>\n <p>Message: {{ messages.message }}</p>\n  <p>Description:{{ messages.desc }} </p>\n  <fieldset *ngFor=\"let comment of messages.comment\">\n    <p>by: {{ comment._user.username }}</p>\n    <p>likes: {{ comment.likes.length }}</p>\n    <p>comment: {{ comment.comment }}</p>\n    <button (click)=\"commentliking(messages._id,comment._id)\">like comment</button>\n\n  </fieldset>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/messagedetails/messagedetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messagedetails_service__ = __webpack_require__("../../../../../src/app/messagedetails/messagedetails.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagedetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagedetailsComponent = (function () {
    function MessagedetailsComponent(_router, messagedetailsservice, _activated) {
        this._router = _router;
        this.messagedetailsservice = messagedetailsservice;
        this._activated = _activated;
        this._activated.params.subscribe(function (param) {
            console.log(param.messid);
        });
    }
    MessagedetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activated.params.subscribe(function (params) {
            _this.message = params.messid;
        });
        this.grabmessage();
    };
    MessagedetailsComponent.prototype.grabmessage = function () {
        var _this = this;
        this.messagedetailsservice.grabmessage({ id: this.message })
            .then(function (data) { _this.messages = data[0]; })
            .catch(function (err) { _this.error = err; });
    };
    MessagedetailsComponent.prototype.commentliking = function (messid, commid) {
        var _this = this;
        this.messagedetailsservice.commentliking({ messid: messid, commid: commid })
            .then(function (data) { console.log(data), _this.grabmessage(); })
            .catch(function (err) { _this.error = err; });
    };
    MessagedetailsComponent.prototype.addanswer = function (value) {
        this._router.navigate(['answer/' + value]);
    };
    return MessagedetailsComponent;
}());
MessagedetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-messagedetails',
        template: __webpack_require__("../../../../../src/app/messagedetails/messagedetails.component.html"),
        styles: [__webpack_require__("../../../../../src/app/messagedetails/messagedetails.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__messagedetails_service__["a" /* MessagedetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__messagedetails_service__["a" /* MessagedetailsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], MessagedetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=messagedetails.component.js.map

/***/ }),

/***/ "../../../../../src/app/messagedetails/messagedetails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagedetailsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagedetailsService = (function () {
    function MessagedetailsService(_http) {
        this._http = _http;
    }
    MessagedetailsService.prototype.grabmessage = function (value) {
        return this._http.post('/grabmessage', value)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    MessagedetailsService.prototype.commentliking = function (value) {
        return this._http.post('/commentliking', value)
            .map(function (response) { return response.json; })
            .toPromise();
    };
    return MessagedetailsService;
}());
MessagedetailsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MessagedetailsService);

var _a;
//# sourceMappingURL=messagedetails.service.js.map

/***/ }),

/***/ "../../../../../src/app/newmessage/newmessage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newmessage/newmessage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  newmessage works!\n</p>\n<p></p>\n<form (submit)=\"postMessage()\">\n  <label>Post a Message: <input type=\"text\" name=\"message\" [(ngModel)]=\"newMessage.message\" ng-minlength=\"5\"></label>\n  <label>Description(optional):<input type=\"text\" name=\"desc\" [(ngModel)]='newMessage.desc'></label>\n  <input type=\"submit\" value=\"Post Message\">\n  <button (click)=\"cancelpressed()\">Cancel</button>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/newmessage/newmessage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newmessage_service__ = __webpack_require__("../../../../../src/app/newmessage/newmessage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewmessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewmessageComponent = (function () {
    function NewmessageComponent(newmessageservice, _router) {
        this.newmessageservice = newmessageservice;
        this._router = _router;
        this.newMessage = { message: "", desc: "" };
        this.error = "";
    }
    NewmessageComponent.prototype.ngOnInit = function () {
    };
    NewmessageComponent.prototype.cancelpressed = function () {
        this._router.navigate(['']);
    };
    NewmessageComponent.prototype.postMessage = function () {
        var _this = this;
        this.newmessageservice.postMessage({ message: this.newMessage })
            .then(function (data) { _this._router.navigate(['wallpage']); })
            .catch(function (err) { _this.error = err; });
    };
    return NewmessageComponent;
}());
NewmessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-newmessage',
        template: __webpack_require__("../../../../../src/app/newmessage/newmessage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/newmessage/newmessage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__newmessage_service__["a" /* NewmessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__newmessage_service__["a" /* NewmessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NewmessageComponent);

var _a, _b;
//# sourceMappingURL=newmessage.component.js.map

/***/ }),

/***/ "../../../../../src/app/newmessage/newmessage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewmessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewmessageService = (function () {
    function NewmessageService(_http) {
        this._http = _http;
    }
    NewmessageService.prototype.postMessage = function (value) {
        return this._http.post('/posting', value)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return NewmessageService;
}());
NewmessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NewmessageService);

var _a;
//# sourceMappingURL=newmessage.service.js.map

/***/ }),

/***/ "../../../../../src/app/wall/wall.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wall/wall.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  wall works!\n</p>\n\n<!-- {{ messages | json }} -->\n  <!-- <h3 *ngIf=\"currentUser\">Welcome {{currentUser.username}}</h3> -->\n  <button (click)=\"logout()\">logout</button>\n\n  <!-- <form (submit)=\"postMessage()\">\n    <label>Post a Message: <input type=\"text\" name=\"message\" [(ngModel)]=\"newMessage.message\"></label>\n    <input type=\"submit\" value=\"Post Message\">\n\n  </form> -->\n  {{ username | json }}\n  <h3>Hi! {{ username.username }}</h3>\n<button (click)=\"createmessage()\">New Question</button>\n\n<div *ngFor=\"let thismess of messages; let i = index\">\n  <p style=\"color:red;\">Question:{{ thismess.message }}</p>\n  <p>Description: {{ thismess.desc }}</p>\n  <p>by:{{ thismess._user.username }}</p>\n  <p>Number of Answers {{ thismess.comment.length }}</p>\n  <button (click)=\"showmessage(thismess._id)\">Show Question</button>\n  <!-- <button (click)=\"ilikeit(thismess._id)\">Like Message!</button> -->\n  <h4>Add an Answer on this Question:</h4>\n\n  <p>Message Likes:{{ thismess.count.length }}</p>\n  <button (click)=\"addanswer(thismess._id)\">Add Answer!</button>\n  <fieldset *ngFor=\"let comments of thismess.comment\">\n    <p>{{ comments.comment }}</p>\n    <p>by: {{ comments._user.username }}</p>\n    <p>{{comments.support}}</p>\n    <p>Comment likes: {{ comments.likes.length }}</p>\n    <button (click)=\"commentliking(thismess._id,comments._id)\">like this comment</button>\n  </fieldset>\n  <form (submit)=\"createcomment(formData, thismess._id)\" #formData=\"ngForm\">\n    <input type=\"text\" ngModel name=\"content\">\n    <input type=\"submit\" name=\"\" value=\"Submit\">\n  </form>\n<br>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wall/wall.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wall_service__ = __webpack_require__("../../../../../src/app/wall/wall.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WallComponent = (function () {
    function WallComponent(wallservice, _router, ActivatedRoute) {
        this.wallservice = wallservice;
        this._router = _router;
        this.ActivatedRoute = ActivatedRoute;
        this.newMessage = { message: "" };
        this.error = "";
        this.messages = [];
        this.username = "";
    }
    WallComponent.prototype.ngOnInit = function () {
        this.checker();
        this.refresh();
        this.getusername();
    };
    WallComponent.prototype.getusername = function () {
        var _this = this;
        this.wallservice.getusername()
            .then(function (data) { _this.username = data; });
    };
    WallComponent.prototype.postMessage = function () {
        var _this = this;
        this.wallservice.postMessage({ message: this.newMessage.message })
            .then(function (data) { _this.messages = data, _this.refresh(); })
            .catch(function (err) { _this.error = err; });
    };
    WallComponent.prototype.refresh = function () {
        var _this = this;
        this.wallservice.refreshpage()
            .then(function (data) {
            _this.messages = data;
            _this.newMessage.message = "";
        }).catch(function (err) { _this._router.navigate(['']); });
    };
    WallComponent.prototype.createcomment = function (formData, messageid) {
        var _this = this;
        this.wallservice.commenting({ formstuff: formData.value, messid: messageid })
            .then(function (data) { console.log(data), _this.refresh(); })
            .catch(function (err) { _this.error = err; });
    };
    WallComponent.prototype.ilikeit = function (value) {
        var _this = this;
        this.wallservice.ilikeit({ messid: value })
            .then(function (data) { console.log(data), _this.refresh(); })
            .catch(function (err) { _this.error = err; });
    };
    WallComponent.prototype.logout = function () {
        var _this = this;
        this.wallservice.logout()
            .then(function (data) { _this._router.navigate(['']); })
            .catch(function (err) { _this._router.navigate(['']); });
    };
    WallComponent.prototype.checker = function () {
        var _this = this;
        this.wallservice.checker()
            .then(function (data) { console.log("working"); })
            .catch(function (err) { _this._router.navigate(['']); });
    };
    WallComponent.prototype.commentliking = function (messid, commid) {
        var _this = this;
        this.wallservice.commentliking({ messid: messid, commid: commid })
            .then(function (data) { console.log(data), _this.refresh(); })
            .catch(function (err) { _this.error = err; });
    };
    WallComponent.prototype.showmessage = function (value) {
        this._router.navigate(['details/' + value]);
    };
    WallComponent.prototype.createmessage = function () {
        this._router.navigate(['newMessage']);
    };
    WallComponent.prototype.addanswer = function (value) {
        this._router.navigate(['answer/' + value]);
    };
    return WallComponent;
}());
WallComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-wall',
        template: __webpack_require__("../../../../../src/app/wall/wall.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wall/wall.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__wall_service__["a" /* WallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__wall_service__["a" /* WallService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], WallComponent);

var _a, _b, _c;
//# sourceMappingURL=wall.component.js.map

/***/ }),

/***/ "../../../../../src/app/wall/wall.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WallService = (function () {
    function WallService(_http) {
        this._http = _http;
    }
    WallService.prototype.postMessage = function (value) {
        return this._http.post('/posting', value)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    WallService.prototype.refreshpage = function () {
        console.log("in service's get messages");
        return this._http.get('/refresh')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    WallService.prototype.commenting = function (value) {
        console.log("somethings happening");
        console.log(value);
        return this._http.post('/commenting', value)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    WallService.prototype.ilikeit = function (value) {
        return this._http.post('/liking', value)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    WallService.prototype.logout = function () {
        return this._http.get('/logout')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    WallService.prototype.checker = function () {
        return this._http.get('/checker')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    WallService.prototype.getusername = function () {
        return this._http.get('/getusername')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    WallService.prototype.commentliking = function (value) {
        return this._http.post('/commentliking', value)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return WallService;
}());
WallService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WallService);

var _a;
//# sourceMappingURL=wall.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map