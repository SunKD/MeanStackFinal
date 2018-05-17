(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] },
    { path: 'details/:id', component: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"] },
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"] },
    // { path: 'newquote/:id', component: QuoteNewComponent },
    // use a colon and parameter name to include a parameter in the url
    // redirect to /alpha if there is nothing in the url
    { path: '', pathMatch: 'full', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"] },
    // the ** will catch anything that did not match any of the above routes
    { path: '**', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    margin-top: 20px;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n  <div class=\"col-md-12\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Pet Shelter';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_7__["NewComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_10__["ViewComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__["PagenotfoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    border: 1px solid grey;\r\n    padding: 40px;\r\n    border-top-right-radius: 15px;\r\n    border-top-left-radius: 15px;\r\n    margin-bottom: 30px;\r\n    box-shadow: 5px 10px #888888;\r\n}\r\n\r\n.buttons{\r\n    margin-top: 20px;\r\n}\r\n\r\n.form{\r\n    margin-top: 30px;\r\n}"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"editPet\">\n    <div class=\"row text-center\">\n      <div class=\"col-md-12\">\n        <h3>Know of a pet needing a home? </h3>\n      </div>\n    </div>\n    <div class=\"row\">\n      <span [hidden]=\"!errors.name\" class=\"text-danger\">{{errors.name.message}}</span>\n    </div>\n    <div class=\"row form\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n        <div class=\"box text-center\">\n          <form (submit)=\"onSubmit(editPet._id)\">\n            <div class=\"row\">\n              <div class=\"col-md-12 text-left\">\n                <label>Pet Name:</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <input type=\"text\" required minlength=\"3\" name=\"editPet.name\" [(ngModel)]=\"editPet.name\" #name=\"ngModel\" class=\"form-control\">\n                <!-- <span [hidden]=\"!errors.name || name.valid\" class=\"text-danger\">{{errors.name.message}}</span> -->\n              </div>\n            </div>\n            <div class=\"row\">\n              <div *ngIf=\"name.invalid && (name.dirty || !name.untouched)\" class=\"col-md-12 alert alert-danger\">\n                <div *ngIf=\"name.errors.required\">Name is required!</div>\n                <div *ngIf=\"name.errors.minlength\">Name must be at least 3 charaters long</div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 text-left\">\n                <label>Pet type:</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <input type=\"text\" required minlength=\"3\" name=\"editPet.petType\" [(ngModel)]=\"editPet.petType\" #pettype=\"ngModel\" class=\"form-control\">\n                <!-- <span [hidden]=\"!errors.pettype || pettype.valid\" class=\"text-danger\">{{errors.pettype.message}}</span> -->\n              </div>\n            </div>\n            <div class=\"row\">\n              <div *ngIf=\"!pettype.valid && (pettype.dirty || !pettype.untouched)\" class=\"col-md-12 alert alert-danger\">\n                <div *ngIf=\"pettype.errors.required\">Type is required!</div>\n                <div *ngIf=\"pettype.errors.minlength\">Type must be at least 3 charaters long</div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 text-left\">\n                <label>Description:</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <input type=\"text\" required minlength=\"3\" name=\"editPet.description\" [(ngModel)]=\"editPet.description\" #description=\"ngModel\"\n                  class=\"form-control\">\n                <!-- <span [hidden]=\"!errors.description || description.valid\" class=\"text-danger\">{{errors.description.message}}</span> -->\n              </div>\n            </div>\n            <div class=\"row\">\n              <div *ngIf=\"description.invalid && (description.dirty || !description.untouched)\" class=\"col-md-12 alert alert-danger\">\n                <div *ngIf=\"description.errors.required\">Description is required!</div>\n                <div *ngIf=\"description.errors.minlength\">Description must be at least 3 charaters long</div>\n              </div>\n            </div>\n            <div class=\"row text-left\">\n              <div class=\"col-md-12\">Skills:</div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-2\">Skill1:</div>\n              <div class=\"col-md-10\">\n                <input type=\"text\" name=\"skill1\" class=\"form-control\" [(ngModel)]=\"skill1\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-2\">Skill2:</div>\n              <div class=\"col-md-10\">\n                <input type=\"text\" name=\"skill2\" class=\"form-control\" [(ngModel)]=\"skill2\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-2\">Skill3:</div>\n              <div class=\"col-md-10\">\n                <input type=\"text\" name=\"skill3\" class=\"form-control\" [(ngModel)]=\"skill3\">\n              </div>\n            </div>\n            <div class=\"row buttons\">\n              <div class=\"col-md-6\">\n                <input type=\"submit\" class=\"btn btn-success form-control\" [disabled]=\"!name.valid\" value=\"submit\">\n              </div>\n              <div class=\"col-md-6\">\n                <button [routerLink]=\"['/details/' +editPet._id ]\" class=\"btn btn-danger form-control\">Cancel</button>\n  \n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"col-md-3\"></div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.message = "";
        this.errors = { name: "" };
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return (_this.id = params['id']); });
        this.getEditPet(this.id);
        this.editPet = {
            name: "",
            petType: "",
            description: "",
            skills: []
        };
    };
    EditComponent.prototype.getEditPet = function (id) {
        var _this = this;
        console.log('edit id ', id);
        var editing = this._httpService.getPet(this.id);
        editing.subscribe(function (data) {
            _this.editPet = data['data'];
            console.log(_this.editPet);
            _this.skill1 = _this.editPet.skills[0];
            _this.skill2 = _this.editPet.skills[1];
            _this.skill3 = _this.editPet.skills[2];
        });
        // this._httpService.getPet(id).subscribe(data=>{
        //   this.editPet = data;
        // })
    };
    EditComponent.prototype.onSubmit = function (id) {
        var _this = this;
        this.editPet.skills[0] = this.skill1;
        this.editPet.skills[1] = this.skill2;
        this.editPet.skills[2] = this.skill3;
        console.log(this.editPet);
        var update = this._httpService.updatePet(this.editPet, id);
        update.subscribe(function (data) {
            console.log("submited form");
            console.log(data);
            _this.message = data["message"];
            if (data['message'] === "Success") {
                _this.message = _this.editPet.name + "added updated!";
                _this._router.navigate(['/details/' + id]);
            }
            else {
                if (data['error'].errors['name']) {
                    _this.errors.name = data['error'].errors['name'];
                }
            }
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.getPets();
    }
    HttpService.prototype.getPets = function () {
        return this._http.get('/pets');
    };
    HttpService.prototype.getPet = function (id) {
        return this._http.get('/pets/' + id);
    };
    HttpService.prototype.addPet = function (newPet) {
        return this._http.post('/pets', newPet);
    };
    HttpService.prototype.likePet = function (id, pet) {
        return this._http.post('/pet/' + id, pet);
    };
    HttpService.prototype.updatePet = function (updateInfo, id) {
        return this._http.put('/pets/' + id, updateInfo);
    };
    HttpService.prototype.deletePet = function (id) {
        return this._http.delete('/pets/' + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-outline-success{\r\n    margin-bottom: 20px;\r\n}"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h5>These pets are looking for a home!</h5>\n<div class=\"row text-right\">\n  <div class=\"col-md-12\">\n    <u>\n      <button [routerLink]=\"['/new']\" class=\"btn btn-outline-success\">Add a pet to the shelter</button>\n    </u>\n  </div>\n</div>\n<table class=\"text-center table table-striped\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Type</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let pet of Pets\">\n      <td>{{pet.name}}</td>\n      <td>{{pet.petType}}</td>\n      <td>\n        <button [routerLink]=\"['/details/', pet._id]\" class=\"btn btn-primary\">Details</button>\n        <!-- <button (click)=\"delete(author._id)\">Delete</button> -->\n        <button [routerLink]=\"['/edit/', pet._id]\" class=\"btn btn-warning\">Edit</button>\n        <button (click)=\"delete(pet._id)\" class=\"btn btn-danger\">Delete</button>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(_httpService) {
        this._httpService = _httpService;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.newPet = {
            name: "",
            petType: "",
            description: "",
            skills: []
        };
        this.getAllPets();
    };
    ListComponent.prototype.getAllPets = function () {
        var _this = this;
        var Pets = this._httpService.getPets().subscribe(function (data) {
            console.log("get all Pet");
            console.log(data);
            _this.Pets = data['data'];
        });
    };
    ListComponent.prototype.edit = function (id) {
        var _this = this;
        var edit = this._httpService.getPet(id).subscribe(function (data) {
            _this.editPet = data;
        });
    };
    ListComponent.prototype.delete = function (id) {
        var deletePet = this._httpService.deletePet(id).subscribe(function (data) {
            console.log(data);
        });
        this.getAllPets();
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    border: 1px solid grey;\r\n    padding: 40px;\r\n    border-top-right-radius: 15px;\r\n    border-top-left-radius: 15px;\r\n    margin-bottom: 30px;\r\n    box-shadow: 5px 10px #888888;\r\n}\r\n\r\n.buttons{\r\n    margin-top: 20px;\r\n}\r\n\r\n.form{\r\n    margin-top: 30px;\r\n}"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n    <div class=\"col-md-12\">\n      <h3>Know of a pet needing a home? </h3>\n    </div>\n  </div>\n  <div class=\"row\">\n    <span [hidden]=\"!errors.name\" class=\"text-danger\">*{{errors.name.message}}</span>\n  </div>\n  <div class=\"row form\">\n    <div class=\"col-md-3 col-1\"></div>\n    <div class=\"col-md-6 col-10\">\n      <div class=\"box text-center\">\n        <form (submit)=\"onSubmit()\">\n          <div class=\"row\">\n            <div class=\"col-md-12 text-left\">\n              <label>Pet Name:</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <input type=\"text\" required minlength=\"3\" name=\"newPet.name\" [(ngModel)]=\"newPet.name\" #name=\"ngModel\" class=\"form-control\">\n              <!-- <span [hidden]=\"!errors.name || name.valid\" class=\"text-danger\">{{errors.name.message}}</span> -->\n            </div>\n          </div>\n          <div class=\"row\">\n            <div *ngIf=\"name.invalid && (name.dirty || !name.untouched)\" class=\"col-md-12 alert alert-danger\">\n              <div *ngIf=\"name.errors.required\">Name is required!</div>\n              <div *ngIf=\"name.errors.minlength\">Name must be at least 3 charaters long</div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12 text-left\">\n              <label>Pet type:</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <input type=\"text\" required minlength=\"3\" name=\"newPet.petType\" [(ngModel)]=\"newPet.petType\" #pettype=\"ngModel\" class=\"form-control\">\n              <!-- <span [hidden]=\"!errors.pettype || pettype.valid\" class=\"text-danger\">{{errors.pettype.message}}</span> -->\n            </div>\n          </div>\n          <div class=\"row\">\n            <div *ngIf=\"pettype.invalid && (pettype.dirty || !pettype.untouched)\" class=\"col-md-12 alert alert-danger\">\n              <div *ngIf=\"pettype.errors.required\">Type is required!</div>\n              <div *ngIf=\"pettype.errors.minlength\">Type must be at least 3 charaters long</div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12 text-left\">\n              <label>Description:</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <input type=\"text\" required minlength=\"3\" name=\"newPet.description\" [(ngModel)]=\"newPet.description\" #description=\"ngModel\"\n                class=\"form-control\">\n              <!-- <span [hidden]=\"!errors.description || description.valid\" class=\"text-danger\">{{errors.description.message}}</span> -->\n            </div>\n          </div>\n          <div class=\"row\">\n            <div *ngIf=\"description.invalid && (description.dirty || !description.untouched)\" class=\"col-md-12 alert alert-danger\">\n              <div *ngIf=\"description.errors.required\">Description is required!</div>\n              <div *ngIf=\"description.errors.minlength\">Description must be at least 3 charaters long</div>\n            </div>\n          </div>\n          <div class=\"row text-left\">\n            <div class=\"col-md-12\">Skills (optional): </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-2\">Skill1: </div>\n            <div class=\"col-md-10\">\n              <input type=\"text\" name=\"skill1\" class=\"form-control\" [(ngModel)]=\"skill1\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-2\">Skill2: </div>\n            <div class=\"col-md-10\">\n              <input type=\"text\" name=\"skill2\" class=\"form-control\" [(ngModel)]=\"skill2\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-2\">Skill3: </div>\n            <div class=\"col-md-10\">\n              <input type=\"text\" name=\"skill3\" class=\"form-control\" [(ngModel)]=\"skill3\">\n            </div>\n          </div>\n          <div class=\"row buttons\">\n            <div class=\"col-md-6\">\n              <input type=\"submit\" class=\"btn btn-success form-control\" [disabled]=\"!name.valid\" value=\"submit\">\n            </div>\n            <div class=\"col-md-6\">\n              <button [routerLink]=\"['/']\" class=\"btn btn-danger form-control\">Cancel</button>\n  \n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-1\"></div>\n  </div>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.message = "";
        this.errors = { name: "" };
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newPet = {
            name: "",
            petType: "",
            description: "",
            skills: []
        };
    };
    NewComponent.prototype.onSubmit = function () {
        var _this = this;
        this.allskills = [this.skill1, this.skill2, this.skill3,];
        this.newPet.skills = this.allskills;
        console.log(this.newPet.skills);
        console.log(this.skill1, this.skill2, this.skill3);
        var addPet = this._httpService.addPet(this.newPet).subscribe(function (data) {
            console.log(data);
            console.log("New Pet added");
            console.log("This is the message from data", data["message"]);
            _this.message = data["message"];
            if (data['message'] === "Success") {
                _this.message = _this.newPet.name + "added successfully!";
                _this._router.navigate(['/']);
            }
            else {
                if (data['error'].errors['name']) {
                    console.log("print this when error", data['error']);
                    _this.errors.name = data['error'].errors['name'];
                }
            }
        });
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    We're sorry, but we could not find the pet you are looking for. Would you like to add this pet to our database?\n</p>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-bottom: 10px;\r\n}\r\n\r\nh3{\r\n    margin-bottom: 20px;\r\n}"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"thisPet\">\n    <div class=\"row\">\n      <div class=\"col-md-8\"></div>\n      <div class=\"col-md-2\">\n        <button [routerLink]=\"['/']\" class=\"btn btn-outline-success form-control\">Home</button>\n      </div>\n      <!-- <div class=\"col-md-2\">\n        <a [routerLink]=\"['/newquote/', thisAuthor._id]\" class=\"btn btn-outline-success form-control\">Add a quote</a>\n      </div> -->\n      <div class=\"col-md-4\"></div>\n    </div>\n  \n    <h3>Details about {{thisPet.name}} </h3>\n    <div class=\"row\">\n      <div class=\"col-md-3 col-6 text-center\">\n        <h4>Pet type:</h4>\n      </div>\n      <div class=\"col-md-9 col-6\">\n        {{thisPet.petType}}\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 col-6 text-center\">\n        <h4>Description:</h4>\n      </div>\n      <div class=\"col-md-9 col-6\">\n        {{thisPet.description}}\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 col-6 text-center\">\n        <h4>Skills:</h4>\n      </div>\n      <div class=\"col-md-9 col-6\">\n        <div *ngFor=\"let skill of thisPet.skills\">\n          <p *ngIf=\"skill\">{{skill}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 col-6 text-center\">\n        <h4>Likes:</h4>\n      </div>\n      <div class=\"col-md-9 col-6\">\n        {{thisPet.likes}}\n      </div>\n    </div>\n    <div class=\"row text-center\">\n      <div class=\"col-md-3 col-6\"><button onclick=\"this.disabled=true\" (click)=\"like(thisPet._id)\" class=\"btn btn-success\">Like this Pet</button></div>\n      <div class=\"col-md-3 col-6\"><button (click)=\"delete()\" class=\"btn btn-primary\">Adopt this Pet!</button></div>\n    </div>\n    \n  "

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewComponent = /** @class */ (function () {
    function ViewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return (_this.id = params['id']); });
        var Pet = this._httpService.getPet(this.id).subscribe(function (data) {
            console.log(data);
            _this.thisPet = data['data'];
        });
    };
    ViewComponent.prototype.like = function (petId) {
        var _this = this;
        console.log("voteUp");
        var voted = this._httpService.likePet(petId, { "voteVal": 1 }).subscribe(function (data) {
            _this.thisPet = data['data'];
        });
    };
    ViewComponent.prototype.delete = function () {
        var _this = this;
        var deletequote = this._httpService.deletePet(this.thisPet._id)
            .subscribe(function (data) {
            _this.thisPet = data['data'];
            _this._router.navigate(['/']);
        });
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewComponent);
    return ViewComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SunDa\Desktop\desktop2018\DojoAssignments\MEAN\beltExam\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map