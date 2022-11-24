"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_faq_faq_module_ts"],{

/***/ 2783:
/*!*******************************************!*\
  !*** ./src/app/faq/faq-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageRoutingModule": () => (/* binding */ FaqPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page */ 4864);




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_0__.FaqPage
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ 5083:
/*!***********************************!*\
  !*** ./src/app/faq/faq.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageModule": () => (/* binding */ FaqPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-routing.module */ 2783);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page */ 4864);







let FaqPageModule = class FaqPageModule {
};
FaqPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPageRoutingModule
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_1__.FaqPage]
    })
], FaqPageModule);



/***/ }),

/***/ 4864:
/*!*********************************!*\
  !*** ./src/app/faq/faq.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPage": () => (/* binding */ FaqPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _faq_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page.html?ngResource */ 1645);
/* harmony import */ var _faq_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page.scss?ngResource */ 8140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let FaqPage = class FaqPage {
    constructor() { }
    ngOnInit() {
    }
};
FaqPage.ctorParameters = () => [];
FaqPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-faq',
        template: _faq_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_faq_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FaqPage);



/***/ }),

/***/ 8140:
/*!**********************************************!*\
  !*** ./src/app/faq/faq.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color: #f4f4f4;\n}\n\n.label-titulo {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  color: #000000;\n}\n\n.titulo {\n  padding: 34px 39px 9px 39px;\n  width: 100%;\n  margin-bottom: 56px;\n}\n\n.correo {\n  padding: 11px 39px 9px 39px;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\nion-icon {\n  width: 55px;\n  height: 55px;\n}\n\nion-grid {\n  padding: 0 30px;\n}\n\n.row-filled {\n  background: #E9E5E5;\n  border: 1px solid #90A4AE;\n  border-radius: 15px;\n  margin-bottom: 20px;\n}\n\nion-item {\n  --background: #E9E5E5;\n}\n\n.label-detalle {\n  font-family: \"Open Sans\";\n  font-style: normal;\n}\n\n.label-detalle-titulo {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 120%;\n  color: rgba(32, 32, 32, 0.7);\n}\n\n.label-detalle-sub {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 120%;\n  /* or 17px */\n  color: rgba(32, 32, 32, 0.7);\n}\n\n.label-correo {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 120%;\n  /* identical to box height, or 17px */\n  color: #000000;\n}\n\nion-accordion {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: #E9E5E5;\n  border: 1px solid #90A4AE;\n  border-radius: 15px;\n}\n\nion-accordion.accordion-expanding,\nion-accordion.accordion-expanded {\n  width: calc(100% - 32px);\n  margin: 16px auto;\n}\n\nion-accordion.accordion-collapsing ion-item[slot=header],\nion-accordion.accordion-collapsed ion-item[slot=header] {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-light-contrast);\n}\n\nion-accordion.accordion-expanding ion-item[slot=header],\nion-accordion.accordion-expanded ion-item[slot=header] {\n  --background: linear-gradient(180deg, rgba(255, 102, 0, 0.76) 0%, rgba(254, 145, 14, 0.82) 100%);\n  --color: var(--ion-color-primary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7QUFBSjs7QUFHSTtFQUNJLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQVI7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0oseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUE7O0FBR0E7RUFDSSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQUNSOztBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBR0EsNEJBQUE7QUFEUjs7QUFLQTtFQUNJLHdCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBR0EsY0FBQTtBQUpBOztBQU9BO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0oseUJBQUE7RUFDSSxtQkFBQTtBQUxKOztBQVFFOztFQUVFLHdCQUFBO0VBRUEsaUJBQUE7QUFOSjs7QUFTRTs7RUFFRSxvQ0FBQTtFQUNBLHdDQUFBO0FBTko7O0FBU0U7O0VBRUUsZ0dBQUE7RUFDQSwwQ0FBQTtBQU5KIiwiZmlsZSI6ImZhcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbn1cclxuXHJcbi5sYWJlbC10aXR1bG97XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgIFxyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50aXR1bG97XHJcbiAgICAgICAgcGFkZGluZzogMzRweCAzOXB4IDlweCAzOXB4IDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG59XHJcbi5jb3JyZW97XHJcbiAgICBwYWRkaW5nOiAxMXB4IDM5cHggOXB4IDM5cHggO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuaW9uLWljb257XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbn1cclxuXHJcbi5yb3ctZmlsbGVke1xyXG4gICAgYmFja2dyb3VuZDogI0U5RTVFNTtcclxuYm9yZGVyOiAxcHggc29saWQgIzkwQTRBRTtcclxuYm9yZGVyLXJhZGl1czogMTVweDtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFOUU1RTU7XHJcbn1cclxuXHJcbi5sYWJlbC1kZXRhbGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgJi10aXR1bG97XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMC43KTtcclxuICAgIH1cclxuICAgICYtc3Vie1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xyXG4gICAgICAgIC8qIG9yIDE3cHggKi9cclxuXHJcblxyXG4gICAgICAgIGNvbG9yOiByZ2JhKDMyLCAzMiwgMzIsIDAuNyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sYWJlbC1jb3JyZW97XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuZm9udC1zaXplOiAxNHB4O1xyXG5saW5lLWhlaWdodDogMTIwJTtcclxuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE3cHggKi9cclxuXHJcblxyXG5jb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuaW9uLWFjY29yZGlvbiB7XHJcbiAgXHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNFOUU1RTU7XHJcbmJvcmRlcjogMXB4IHNvbGlkICM5MEE0QUU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcsXHJcbiAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAxNnB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWNvbGxhcHNpbmcgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSxcclxuICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzZWQgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xyXG4gIH1cclxuICBcclxuICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSxcclxuICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCBpb24taXRlbVtzbG90PVwiaGVhZGVyXCJdIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDEwMiwgMCwgMC43NikgMCUsIHJnYmEoMjU0LCAxNDUsIDE0LCAwLjgyKSAxMDAlKTtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICB9Il19 */";

/***/ }),

/***/ 1645:
/*!**********************************************!*\
  !*** ./src/app/faq/faq.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n    <div  class=\"ion-text-center titulo\">\n        <ion-label class=\"label-titulo\" >\n            Preguntas Frecuentes\n        </ion-label></div>\n\n        <ion-grid fixed>\n            <ion-accordion-group>\n                <ion-accordion value=\"first\">\n                  <ion-item slot=\"header\">\n                    <ion-label>¿Dónde  me van a ayudar?</ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\">\n                    Lugares de ayuda\n                  </div>\n                </ion-accordion>\n                <ion-accordion value=\"second\">\n                  <ion-item slot=\"header\">\n                    <ion-label>Ejemplos de maltrato</ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\">\n                  <ion-list  style=\"background:#E9E5E5;\">\n                    <ion-item>\n                        <ion-label>\n                            <p>Ejemplo 1 </p>\n                            <h2>detalle</h2>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>\n                            <p>Ejemplo 2 </p>\n                            <h2>detalle</h2>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>\n                            <p>Ejemplo 3 </p>\n                            <h2>detalle</h2>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>\n                            <p>Ejemplo 4 </p>\n                            <h2>detalle</h2>\n                        </ion-label>\n                    </ion-item>\n                  </ion-list>\n                  </div>\n                </ion-accordion>\n                <ion-accordion value=\"third\">\n                  <ion-item slot=\"header\">\n                    <ion-label>¿Cuáles  son la señal de alerta?</ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\">\n                    <h4>Señales de alerta</h4>\n                    <p>   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quasi aliquam harum similique culpa est natus tempora incidunt at. Quidem eaque ipsum, alias error maiores dolores fugiat quaerat labore nihil.\n                    </p></div>\n                </ion-accordion>\n              </ion-accordion-group>\n             </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_faq_faq_module_ts.js.map