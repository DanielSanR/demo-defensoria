"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_perfil_perfil_module_ts"],{

/***/ 9810:
/*!*************************************************!*\
  !*** ./src/app/perfil/perfil-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageRoutingModule": () => (/* binding */ PerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page */ 9557);




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_0__.PerfilPage
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ 1320:
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageModule": () => (/* binding */ PerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-routing.module */ 9810);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page */ 9557);







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilPageRoutingModule
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_1__.PerfilPage]
    })
], PerfilPageModule);



/***/ }),

/***/ 9557:
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPage": () => (/* binding */ PerfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page.html?ngResource */ 5768);
/* harmony import */ var _perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.scss?ngResource */ 5879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let PerfilPage = class PerfilPage {
    constructor() { }
    ngOnInit() {
    }
};
PerfilPage.ctorParameters = () => [];
PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-perfil',
        template: _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PerfilPage);



/***/ }),

/***/ 5879:
/*!****************************************************!*\
  !*** ./src/app/perfil/perfil.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#F4F4F4;\n}\n\n.Grid {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 70px;\n  height: 100%;\n  display: block;\n  flex-flow: column;\n}\n\n.Grid-perfil-col {\n  border-radius: 20px;\n  background: #5A4BB2;\n  text-align: center;\n  align-items: center;\n  align-content: center;\n}\n\n.Grid-perfil-col-div {\n  width: 100%;\n  position: relative;\n  margin-bottom: 40px;\n}\n\n.Grid-perfil-col-div-image {\n  border-radius: 50%;\n  margin-top: -60px;\n  bottom: -84px;\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  background: #f4f4f4;\n  border: solid 2px #FE910E;\n  margin-bottom: 30px;\n}\n\n.Grid-perfil-col-div-label-p {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 5px;\n}\n\n.datos {\n  width: 100%;\n  margin-top: 18px;\n  border-radius: 15px;\n  padding: 10px;\n  --background: #ffff;\n  --border-radius: 15px;\n}\n\n.datos-label-p {\n  padding: 6px;\n  color: #000;\n  font-size: 18px;\n}\n\n.datos-datos-icon {\n  color: #000 !important;\n}\n\n.form {\n  width: 100%;\n  margin-top: 5px;\n  padding: 0px;\n  --background: #ffff;\n  border-radius: 15px;\n  border: 1px solid #5A4BB2;\n}\n\n.form-label-p {\n  padding: 0px;\n  color: #000;\n  font-size: 18px;\n}\n\n.form-datos-icon {\n  color: #000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUNJO0VBQ0ksbUJBQUE7RUFDRyxtQkFBQTtFQUNILGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNSOztBQUFRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFWjs7QUFBWTtFQUVJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNoQjs7QUFFZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBcEI7O0FBU0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBTko7O0FBUUk7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFQUjs7QUFTSTtFQUNRLHNCQUFBO0FBUFo7O0FBV0M7RUFFRyxXQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUNELG1CQUFBO0VBQ0MseUJBQUE7QUFWSjs7QUFXSTtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVZSOztBQVlJO0VBQ1Esc0JBQUE7QUFWWiIsImZpbGUiOiJwZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGNEY0RjQ7XHJcbn1cclxuXHJcbi5Hcmlke1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgJi1wZXJmaWwtY29se1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZDogIzVBNEJCMjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgJi1kaXZ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAmLWltYWdle1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYygtMSooODBweCArIDRweCkpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6c29saWQgMnB4ICNGRTkxMEU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAmLXB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXRvc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgICYtbGFiZWwtcHtcclxuICAgICAgICBcclxuICAgICAgICBwYWRkaW5nOjZweDtcclxuICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgICYtZGF0b3MtaWNvbntcclxuICAgICAgICAgICAgY29sb3I6IzAwMCAhaW1wb3J0YW50OyBcclxuICAgIH1cclxuIH1cclxuXHJcbiAuZm9ybXtcclxuICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gXHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzVBNEJCMjtcclxuICAgICYtbGFiZWwtcHtcclxuICAgICAgICBcclxuICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgICYtZGF0b3MtaWNvbntcclxuICAgICAgICAgICAgY29sb3I6IzAwMCAhaW1wb3J0YW50OyBcclxuICAgIH1cclxuIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 5768:
/*!****************************************************!*\
  !*** ./src/app/perfil/perfil.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n<ion-grid class=\"Grid \">\n  <ion-row class=\"Grid-perfil\" >\n  \n    <ion-col class=\"Grid-perfil-col\" size=\"12\">\n      <div class=\"Grid-perfil-col-div\">\n      <img src=\"../../assets/images/perfil.png\" class=\"Grid-perfil-col-div-image\">\n        <ion-label class=\"Grid-perfil-col-div-label\">\n          <p class=\"Grid-perfil-col-div-label-p\">¡ Hola,</p>\n          <p class=\"Grid-perfil-col-div-label-p\">Queremos conocerte mas !</p>\n        </ion-label>\n  </div>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-item button class=\"datos\" lines=\"none\" [routerLink]=\"['/principal/preguntas-frecuentes']\">\n    <ion-label class=\"datos-label ion-text-center\">\n    <p class=\"datos-label-p\">Tips Y consejos </p>\n    </ion-label>  \n    <ion-icon class=\"datos-icon\" slot=\"end\" src=\"../../assets/icon/chevron-black.svg\" ></ion-icon>\n</ion-item>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-item  class=\"form\" lines=\"none\" >\n    <ion-label class=\"form-label\" position=\"stacked\">Nombre</ion-label>\n    <ion-input class=\"form-label-p\" placeholder=\"Mi nombre es ...\"></ion-input>\n    <ion-icon src=\"../../assets/icon/nameForm.svg\"slot=\"start\"></ion-icon>\n</ion-item>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-item  class=\"form\" lines=\"none\" >\n    <ion-label class=\"form-label\" position=\"stacked\">Telefono</ion-label>\n    <ion-input class=\"form-label-p\" placeholder=\"Mi telefono es ...\"></ion-input>\n    <ion-icon src=\"../../assets/icon/phoneForm.svg\"slot=\"start\"></ion-icon>\n</ion-item>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-item  class=\"form\" lines=\"none\" >\n    <ion-label class=\"form-label\" position=\"stacked\">Correo electrónico</ion-label>\n    <ion-input class=\"form-label-p\" placeholder=\"Mi correo  es ...\"></ion-input>\n    <ion-icon src=\"../../assets/icon/mailForm.svg\"slot=\"start\"></ion-icon>\n</ion-item>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-item  class=\"form\" lines=\"none\" >\n    <ion-label class=\"form-label\" position=\"stacked\">Dirección</ion-label>\n    <ion-input class=\"form-label-p\" placeholder=\"Mi dirección es ...\"></ion-input>\n    <ion-icon src=\"../../assets/icon/locationForm.svg\"slot=\"start\"></ion-icon>\n</ion-item>\n</ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_perfil_perfil_module_ts.js.map