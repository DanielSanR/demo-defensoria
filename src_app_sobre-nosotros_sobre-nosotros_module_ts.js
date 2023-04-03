"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sobre-nosotros_sobre-nosotros_module_ts"],{

/***/ 8437:
/*!*****************************************************************!*\
  !*** ./src/app/sobre-nosotros/sobre-nosotros-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SobreNosotrosPageRoutingModule": () => (/* binding */ SobreNosotrosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _sobre_nosotros_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sobre-nosotros.page */ 3541);




const routes = [
    {
        path: '',
        component: _sobre_nosotros_page__WEBPACK_IMPORTED_MODULE_0__.SobreNosotrosPage
    }
];
let SobreNosotrosPageRoutingModule = class SobreNosotrosPageRoutingModule {
};
SobreNosotrosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SobreNosotrosPageRoutingModule);



/***/ }),

/***/ 9669:
/*!*********************************************************!*\
  !*** ./src/app/sobre-nosotros/sobre-nosotros.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SobreNosotrosPageModule": () => (/* binding */ SobreNosotrosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sobre_nosotros_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sobre-nosotros-routing.module */ 8437);
/* harmony import */ var _sobre_nosotros_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sobre-nosotros.page */ 3541);







let SobreNosotrosPageModule = class SobreNosotrosPageModule {
};
SobreNosotrosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sobre_nosotros_routing_module__WEBPACK_IMPORTED_MODULE_0__.SobreNosotrosPageRoutingModule
        ],
        declarations: [_sobre_nosotros_page__WEBPACK_IMPORTED_MODULE_1__.SobreNosotrosPage]
    })
], SobreNosotrosPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_sobre-nosotros_sobre-nosotros_module_ts.js.map