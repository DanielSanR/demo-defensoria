"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_form-kid_form-kid_module_ts"],{

/***/ 9231:
/*!*****************************************************!*\
  !*** ./src/app/form-kid/form-kid-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormKidPageRoutingModule": () => (/* binding */ FormKidPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _form_kid_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-kid.page */ 974);




const routes = [
    {
        path: '',
        component: _form_kid_page__WEBPACK_IMPORTED_MODULE_0__.FormKidPage
    }
];
let FormKidPageRoutingModule = class FormKidPageRoutingModule {
};
FormKidPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormKidPageRoutingModule);



/***/ }),

/***/ 1001:
/*!*********************************************!*\
  !*** ./src/app/form-kid/form-kid.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormKidPageModule": () => (/* binding */ FormKidPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _form_kid_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-kid-routing.module */ 9231);
/* harmony import */ var _form_kid_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-kid.page */ 974);







let FormKidPageModule = class FormKidPageModule {
};
FormKidPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _form_kid_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormKidPageRoutingModule
        ],
        declarations: [_form_kid_page__WEBPACK_IMPORTED_MODULE_1__.FormKidPage]
    })
], FormKidPageModule);



/***/ }),

/***/ 974:
/*!*******************************************!*\
  !*** ./src/app/form-kid/form-kid.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormKidPage": () => (/* binding */ FormKidPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _form_kid_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-kid.page.html?ngResource */ 8762);
/* harmony import */ var _form_kid_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-kid.page.scss?ngResource */ 2742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let FormKidPage = class FormKidPage {
    constructor() { }
    ngOnInit() {
    }
};
FormKidPage.ctorParameters = () => [];
FormKidPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-form-kid',
        template: _form_kid_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_form_kid_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormKidPage);



/***/ }),

/***/ 2742:
/*!********************************************************!*\
  !*** ./src/app/form-kid/form-kid.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWtpZC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 8762:
/*!********************************************************!*\
  !*** ./src/app/form-kid/form-kid.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>form-kid</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_form-kid_form-kid_module_ts.js.map