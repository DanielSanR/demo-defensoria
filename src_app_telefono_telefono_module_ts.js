"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_telefono_telefono_module_ts"],{

/***/ 3696:
/*!*****************************************************!*\
  !*** ./src/app/telefono/telefono-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelefonoPageRoutingModule": () => (/* binding */ TelefonoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _telefono_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telefono.page */ 6826);




const routes = [
    {
        path: '',
        component: _telefono_page__WEBPACK_IMPORTED_MODULE_0__.TelefonoPage
    }
];
let TelefonoPageRoutingModule = class TelefonoPageRoutingModule {
};
TelefonoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TelefonoPageRoutingModule);



/***/ }),

/***/ 651:
/*!*********************************************!*\
  !*** ./src/app/telefono/telefono.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelefonoPageModule": () => (/* binding */ TelefonoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _telefono_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telefono-routing.module */ 3696);
/* harmony import */ var _telefono_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telefono.page */ 6826);







let TelefonoPageModule = class TelefonoPageModule {
};
TelefonoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _telefono_routing_module__WEBPACK_IMPORTED_MODULE_0__.TelefonoPageRoutingModule
        ],
        declarations: [_telefono_page__WEBPACK_IMPORTED_MODULE_1__.TelefonoPage]
    })
], TelefonoPageModule);



/***/ }),

/***/ 6826:
/*!*******************************************!*\
  !*** ./src/app/telefono/telefono.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelefonoPage": () => (/* binding */ TelefonoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _telefono_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telefono.page.html?ngResource */ 2484);
/* harmony import */ var _telefono_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telefono.page.scss?ngResource */ 1390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TelefonoPage = class TelefonoPage {
    constructor() { }
    ngOnInit() {
    }
};
TelefonoPage.ctorParameters = () => [];
TelefonoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-telefono',
        template: _telefono_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_telefono_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TelefonoPage);



/***/ }),

/***/ 1390:
/*!********************************************************!*\
  !*** ./src/app/telefono/telefono.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color: #fff;\n}\n\n.header {\n  border-radius: 0 0 15px 15px;\n  background-color: #F4F4F4;\n  padding-bottom: 20px;\n  /*    padding-bottom: 25px; */\n}\n\n.header-icon {\n  width: 100%;\n  height: max-content;\n  display: contents;\n}\n\n.Grid {\n  height: calc(100% - 286px);\n  display: flex;\n  flex-flow: column;\n  padding-left: 27px;\n  padding-right: 27px;\n}\n\n.Grid-row-col {\n  width: 100% !important;\n}\n\n.Grid-row-col-item {\n  --background: #FE910E;\n  --border-radius: 15px;\n  margin-top: -22px;\n}\n\n.Grid-row-col-item-label-p {\n  padding: 6px;\n  font-size: 18px;\n  color: #fff;\n}\n\n.Grid-row-col-item-icon {\n  margin: auto;\n  padding-left: 15px;\n  color: #fff;\n}\n\n.form {\n  width: 100%;\n  margin-top: 5px;\n  padding: 0px;\n  --background: #ffff;\n  border-radius: 15px;\n  border: 2px solid #5A4BB2;\n}\n\n.form-label {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.form-label-p {\n  padding: 0px;\n  color: gba(0, 0, 0, 0.87);\n  font-size: 14px;\n}\n\n.form-label-correo {\n  padding: 0px;\n  color: gba(0, 0, 0, 0.87);\n  font-size: 12px;\n  white-space: normal;\n}\n\n.form-label-h4 {\n  padding: 0px;\n  color: #000;\n  font-size: 12px;\n}\n\n.form-icon {\n  margin-right: 10px !important;\n}\n\n@media (min-width: 1023px) {\n  .header {\n    border-radius: 0 0 15px 15px;\n    background: url('numeros-utiles-header.svg') no-repeat center/100%;\n    height: 350px;\n    width: 100%;\n  }\n  .header-icon {\n    display: none;\n  }\n}\n\n@media (min-width: 280px) and (max-width: 380px) {\n  .Grid {\n    height: calc(100% - 221px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbGVmb25vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBQ0E7RUFDSSw0QkFBQTtFQUNBLHlCQUFBO0VBRUEsb0JBQUE7RUFDSCw2QkFBQTtBQUNEOztBQUNJO0VBRUksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBUjs7QUFNSTtFQUNJLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUhSOztBQUtRO0VBQ0ksc0JBQUE7QUFIWjs7QUFJWTtFQUVJLHFCQUFBO0VBQ0EscUJBQUE7RUFFQSxpQkFBQTtBQUpoQjs7QUFNZ0I7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNDLFdBQUE7QUFKckI7O0FBTWdCO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUpwQjs7QUFXSTtFQUVJLFdBQUE7RUFDQSxlQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBQ0QsbUJBQUE7RUFDQyx5QkFBQTtBQVZSOztBQVdRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBVFo7O0FBV1E7RUFFSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBVlo7O0FBWVE7RUFFSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFYWjs7QUFhUTtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVpaOztBQWNRO0VBQ0ksNkJBQUE7QUFaWjs7QUFnQks7RUFDRztJQUNJLDRCQUFBO0lBRUEsa0VBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQWRWO0VBZVU7SUFDQSxhQUFBO0VBYlY7QUFDRjs7QUFtQks7RUFDRztJQUNJLDBCQUFBO0VBakJWO0FBQ0YiLCJmaWxlIjoidGVsZWZvbm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcclxuIFxyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAvKiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDsgKi9cclxuIFxyXG4gICAgJi1pY29ue1xyXG4gICAgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0Om1heC1jb250ZW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5Hcmlke1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjg2cHgpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjdweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyN3B4O1xyXG4gXHJcbiAgICAgICAgJi1yb3ctY29se1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAmLWl0ZW17XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0ZFOTEwRTtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjJweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJi1sYWJlbC1we1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm17XHJcbiAgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgIFxyXG4gICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjNUE0QkIyO1xyXG4gICAgICAgICYtbGFiZWx7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWxhYmVsLXB7ICBcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjpnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1sYWJlbC1jb3JyZW97ICBcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjpnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1sYWJlbC1oNHsgIFxyXG5cclxuICAgICAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwOztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWljb257XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIEBtZWRpYSAobWluLXdpZHRoOjEwMjNweCkge1xyXG4gICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi9udW1lcm9zLXV0aWxlcy1oZWFkZXIuc3ZnJykgbm8tcmVwZWF0IGNlbnRlciAvIDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAmLWljb257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIEBtZWRpYSAobWluLXdpZHRoOjI4MHB4KSBhbmQgKG1heC13aWR0aDozODBweCkge1xyXG4gICAgICAgIC5Hcmlke1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIyMXB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgIH0iXX0= */";

/***/ }),

/***/ 2484:
/*!********************************************************!*\
  !*** ./src/app/telefono/telefono.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"header\">\n\n    <ion-icon src=\"../../assets/icon/numeros-utiles-header.svg\" class=\"header-icon\"> </ion-icon>\n  </div>\n  <ion-grid class=\"Grid\">\n    <ion-row class=\"Grid-row\" >\n      <ion-col class=\"Grid-row-col\" size=\"12\">\n          <ion-item class=\"Grid-row-col-item ion-text-center\" > \n          <ion-label class=\"Grid-row-col-item-label\" >\n            <p class=\"Grid-row-col-item-label-p\">Números utiles</p>\n          </ion-label>\n      \n        </ion-item>\n  </ion-col>\n    </ion-row>\n    <ion-row style=\"height: 100%;\n    align-content: center;\n    align-items: center;\n    text-align: center;\">\n  <ion-col size=\"12\">\n    <ion-item  class=\"form\" lines=\"none\" >\n      <ion-label class=\"form-label\">\n        <h4 class=\"form-label-h4\">Departamento de Policias</h4>\n        <p class=\"form-label-p\">3764 - 345421  \n        </p>\n      </ion-label>\n      <ion-icon class=\"form-icon\" src=\"../../assets/icon/comisaria-numeros.svg\"slot=\"start\"></ion-icon>\n  </ion-item>\n  </ion-col>\n  <ion-col size=\"12\">\n    <ion-item  class=\"form\" lines=\"none\" >\n      <ion-label class=\"form-label\">\n        <h4 class=\"form-label-h4\">Defensoria del Niño,Niña y Adolesc.</h4>\n        <p class=\"form-label-p\">3764 - 345421  \n        </p>\n      </ion-label>\n      <ion-icon class=\"form-icon\" src=\"../../assets/icon/secretaria-numeros.svg\"slot=\"start\"></ion-icon>\n  </ion-item>\n  </ion-col>\n  <ion-col size=\"12\">\n    <ion-item  class=\"form\" lines=\"none\" >\n      <ion-label class=\"form-label\">\n        <h4 class=\"form-label-h4\">Hospital Público</h4>\n        <p class=\"form-label-p\">3764 - 345421  \n        </p>\n      </ion-label>\n      <ion-icon class=\"form-icon\" src=\"../../assets/icon/hospital-numeros.svg\"slot=\"start\"></ion-icon>\n  </ion-item>\n  </ion-col>\n  <ion-col size=\"12\">\n    <ion-item  class=\"form\" lines=\"none\" >\n      <ion-label class=\"form-label\">\n        <h4 class=\"form-label-h4\">Secretaría Nacional Linea 102</h4>\n        <p class=\"form-label-p\">Número 102\n        </p>\n      </ion-label>\n      <ion-icon class=\"form-icon\" src=\"../../assets/icon/secretaria-numeros.svg\"slot=\"start\"></ion-icon>\n  </ion-item>\n  </ion-col>\n  <ion-col size=\"12\">\n    <ion-item  class=\"form\" lines=\"none\" >\n      <ion-label class=\"form-label\">\n        <h4 class=\"form-label-h4\">Correo electrónico</h4>\n        <p class=\"form-label-correo\">defensoriadennya.misiones@gmail.com\n        </p>\n      </ion-label>\n      <ion-icon class=\"form-icon\" src=\"../../assets/icon/mail-numeros.svg\"slot=\"start\"></ion-icon>\n  </ion-item>\n  </ion-col>\n    </ion-row>\n  </ion-grid>\n      <!-- <ion-grid class=\"Grid\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <div class=\"titulo\">\n                    <ion-label class=\"titulo-label\" >Números utiles</ion-label>\n                </div>\n            </ion-col>\n            <div class=\"Grid-row-div\">\n              <ion-col size=\"3\" class=\"Grid-row-div-col\">\n                  <ion-icon src=\"../../assets/icon/policia-tel.svg\"></ion-icon> \n              </ion-col>\n              <ion-col size=\"9\" >\n                  <ion-item lines=\"none\">\n                      <ion-label class=\"label-detalle\">\n                        <h3 class=\"label-detalle-titulo\">Comisaría</h3>\n                        <p class=\"label-detalle-sub\">Teléfono: 3764  417655</p>\n                      </ion-label>\n                    </ion-item>\n              </ion-col>\n            </div>\n          </ion-row>\n          <ion-row class=\"Grid-row\">\n            <div class=\"Grid-row-div\">\n              <ion-col size=\"3\" class=\"Grid-row-div-col\">\n                  <ion-icon src=\"../../assets/icon/defensoria-tel.svg\"></ion-icon> \n              </ion-col>\n              <ion-col size=\"9\">\n                  <ion-item lines=\"none\">\n                      <ion-label class=\"label-detalle\">\n                        <h3 class=\"label-detalle-titulo\">Defensoria del NNyA </h3>\n                        <p class=\"label-detalle-sub\">Teléfono: 3764  417655</p>\n                      </ion-label>\n                    </ion-item>\n              </ion-col>\n            </div>\n          </ion-row>\n          <ion-row class=\"Grid-row\">\n            <div class=\"Grid-row-div\">\n              <ion-col size=\"3\" class=\"Grid-row-div-col\">\n                  <ion-icon src=\"../../assets/icon/hospital-tel.svg\"></ion-icon> \n              </ion-col>\n              <ion-col size=\"9\">\n                  <ion-item lines=\"none\">\n                      <ion-label class=\"label-detalle\">\n                        <h3 class=\"label-detalle-titulo\">Hospital Público</h3>\n                        <p class=\"label-detalle-sub\">Teléfono: 3764  417655</p>\n                      </ion-label>\n                    </ion-item>\n              </ion-col>\n            </div>\n          </ion-row>\n          <ion-row class=\"Grid-row\">\n            <div class=\"Grid-row-div\">\n              <ion-col size=\"3\" class=\"Grid-row-div-col\">\n                  <ion-icon src=\"../../assets/icon/defensoria-tel.svg\"></ion-icon> \n              </ion-col>\n              <ion-col size=\"9\"> \n                  <ion-item lines=\"none\">\n                      <ion-label class=\"label-detalle\">\n                        <h3 class=\"label-detalle-titulo\">Secretaría Nacional NAyF</h3>\n                        <p class=\"label-detalle-sub\">Teléfono: 102</p>\n                      </ion-label>\n                    </ion-item>\n              </ion-col>\n            </div>\n          </ion-row>\n          <ion-row class=\"Grid-row\">\n            <ion-col size=\"12\">\n            <div class=\"titulo\">\n                <ion-label class=\"titulo-label\" >\n                    Correo electrónico           \n                 </ion-label></div>\n                </ion-col>\n                <div class=\"Grid-row-div\">\n                  <ion-col class=\"Grid-row-div-correo\" size=\"12\">\n                          <ion-label class=\"Grid-row-div-correo-label\">\n                              defensoriadennya.misiones@gmail.com\n                          </ion-label>\n                  </ion-col>\n                </div>\n              </ion-row>\n           </ion-grid> -->\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_telefono_telefono_module_ts.js.map