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

module.exports = "ion-content {\n  --ion-background-color: #f4f4f4;\n}\n\n.titulo {\n  text-align: center;\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.titulo-label {\n  font-weight: 700;\n  font-size: 18px;\n  color: #000000;\n}\n\n.Grid {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 30px 30px 10px 30px;\n}\n\n.Grid-row-div {\n  display: flex;\n  height: auto;\n  width: 100%;\n  background: #E9E5E5;\n  border: 1px solid #90A4AE;\n  border-radius: 15px;\n  margin-bottom: 15px;\n}\n\n.Grid-row-div-col {\n  padding-bottom: 15px;\n  padding-left: 16px;\n  padding-top: 10px;\n}\n\n.Grid-row-div-correo {\n  text-align: center;\n  padding: 15px 0px 15px 0px;\n  align-content: center;\n  width: 100%;\n}\n\n.Grid-row-div-correo-label {\n  white-space: nowrap;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 120%;\n}\n\n.Grid-row:last-child {\n  align-content: center;\n  height: 100%;\n}\n\nion-icon {\n  width: 55px;\n  height: 55px;\n}\n\nion-item {\n  --background: #E9E5E5;\n}\n\n.label-detalle {\n  font-family: \"Open Sans\";\n  font-style: normal;\n}\n\n.label-detalle-titulo {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 120%;\n  color: rgba(32, 32, 32, 0.7);\n}\n\n.label-detalle-sub {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 120%;\n  color: rgba(32, 32, 32, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbGVmb25vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVSOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUVPO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBUjs7QUFDUTtFQUNJLG9CQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNkOztBQUNRO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNaOztBQUFZO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVoQjs7QUFJSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUZSOztBQU1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLHFCQUFBO0FBSEo7O0FBTUE7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBSUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBRlI7O0FBSUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBRlIiLCJmaWxlIjoidGVsZWZvbm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG59XHJcblxyXG4udGl0dWxve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAmLWxhYmVse1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuXHJcbi5Hcmlke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHggMzBweCAxMHB4IDMwcHg7XHJcbiAgICAmLXJvd3tcclxuICAgICAgICYtZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNFOUU1RTU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzkwQTRBRTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgJi1jb2x7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb3JyZW97XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICYtbGFiZWx7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICAgICYtcm93Omxhc3QtY2hpbGR7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgIH1cclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFOUU1RTU7XHJcbn1cclxuXHJcbi5sYWJlbC1kZXRhbGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgJi10aXR1bG97XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMC43KTtcclxuICAgIH1cclxuICAgICYtc3Vie1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDMyLCAzMiwgMzIsIDAuNyk7XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 2484:
/*!********************************************************!*\
  !*** ./src/app/telefono/telefono.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n      <ion-grid class=\"Grid\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <div class=\"titulo\">\n                    <ion-label class=\"titulo-label\" >Números utiles</ion-label>\n                </div>\n            </ion-col>\n            <div class=\"Grid-row-div\">\n              <ion-col size=\"3\" class=\"Grid-row-div-col\">\n                  <ion-icon src=\"../../assets/icon/policia-tel.svg\"></ion-icon> \n              </ion-col>\n              <ion-col size=\"9\" >\n                  <ion-item lines=\"none\">\n                      <ion-label class=\"label-detalle\">\n                        <h3 class=\"label-detalle-titulo\">Comisaría</h3>\n                        <p class=\"label-detalle-sub\">Teléfono: 3764  417655</p>\n                      </ion-label>\n                    </ion-item>\n              </ion-col>\n            </div>\n          </ion-row>\n          <ion-row class=\"Grid-row\">\n            <div class=\"Grid-row-div\">\n              <ion-col size=\"3\" class=\"Grid-row-div-col\">\n                  <ion-icon src=\"../../assets/icon/defensoria-tel.svg\"></ion-icon> \n              </ion-col>\n              <ion-col size=\"9\">\n                  <ion-item lines=\"none\">\n                      <ion-label class=\"label-detalle\">\n                        <h3 class=\"label-detalle-titulo\">Defensoria del NNyA </h3>\n                        <p class=\"label-detalle-sub\">Teléfono: 3764  417655</p>\n                      </ion-label>\n                    </ion-item>\n              </ion-col>\n            </div>\n          </ion-row>\n          <ion-row class=\"Grid-row\">\n            <div class=\"Grid-row-div\">\n              <ion-col size=\"3\" class=\"Grid-row-div-col\">\n                  <ion-icon src=\"../../assets/icon/hospital-tel.svg\"></ion-icon> \n              </ion-col>\n              <ion-col size=\"9\">\n                  <ion-item lines=\"none\">\n                      <ion-label class=\"label-detalle\">\n                        <h3 class=\"label-detalle-titulo\">Hospital Público</h3>\n                        <p class=\"label-detalle-sub\">Teléfono: 3764  417655</p>\n                      </ion-label>\n                    </ion-item>\n              </ion-col>\n            </div>\n          </ion-row>\n          <ion-row class=\"Grid-row\">\n            <div class=\"Grid-row-div\">\n              <ion-col size=\"3\" class=\"Grid-row-div-col\">\n                  <ion-icon src=\"../../assets/icon/defensoria-tel.svg\"></ion-icon> \n              </ion-col>\n              <ion-col size=\"9\"> \n                  <ion-item lines=\"none\">\n                      <ion-label class=\"label-detalle\">\n                        <h3 class=\"label-detalle-titulo\">Secretaría Nacional NAyF</h3>\n                        <p class=\"label-detalle-sub\">Teléfono: 102</p>\n                      </ion-label>\n                    </ion-item>\n              </ion-col>\n            </div>\n          </ion-row>\n          <ion-row class=\"Grid-row\">\n            <ion-col size=\"12\">\n            <div class=\"titulo\">\n                <ion-label class=\"titulo-label\" >\n                    Correo electrónico           \n                 </ion-label></div>\n                </ion-col>\n                <div class=\"Grid-row-div\">\n                  <ion-col class=\"Grid-row-div-correo\" size=\"12\">\n                          <ion-label class=\"Grid-row-div-correo-label\">\n                              defensoriadennya.misiones@gmail.com\n                          </ion-label>\n                  </ion-col>\n                </div>\n              </ion-row>\n           </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_telefono_telefono_module_ts.js.map