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

module.exports = "ion-content {\n  --ion-background-color: #fff;\n}\n\n.Grid {\n  display: block;\n  flex-flow: column;\n}\n\n.Grid-row-col {\n  width: 100% !important;\n}\n\n.Grid-row-col-item {\n  --background: #FE910E;\n  --border-radius: 15px;\n  margin-top: -22px;\n}\n\n.Grid-row-col-item-label-p {\n  padding: 6px;\n  font-size: 18px;\n  color: #fff;\n}\n\n.Grid-row-col-item-icon {\n  margin: auto;\n  padding-left: 15px;\n  color: #fff;\n}\n\n.header {\n  border-radius: 0 0 15px 15px;\n  background-color: #F4F4F4;\n  /*    padding-bottom: 25px; */\n}\n\n.header-icon {\n  width: 100%;\n  height: max-content;\n  display: contents;\n}\n\n.titulo {\n  padding: 34px 39px 9px 39px;\n  width: 100%;\n  margin-bottom: 56px;\n}\n\n.correo {\n  padding: 11px 39px 9px 39px;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\nion-list {\n  background: #fff !important;\n}\n\nion-grid {\n  padding: 0 28px;\n}\n\n.label-detalle {\n  font-family: \"Open Sans\";\n  font-style: normal;\n}\n\n.label-detalle-titulo {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 120%;\n  color: rgba(32, 32, 32, 0.7);\n}\n\n.label-detalle-sub {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 120%;\n  /* or 17px */\n  color: rgba(32, 32, 32, 0.7);\n}\n\n.label-correo {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 120%;\n  /* identical to box height, or 17px */\n  color: #000000;\n}\n\nion-accordion {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: white;\n  border: 1px solid #5A4BB2;\n  border-radius: 15px;\n}\n\nion-accordion.accordion-expanding,\nion-accordion.accordion-expanded {\n  width: 100%;\n  margin: 16px auto;\n}\n\nion-accordion.accordion-collapsing ion-item[slot=header],\nion-accordion.accordion-collapsed ion-item[slot=header] {\n  --background: #fff;\n  --color: #5A4BB2;\n}\n\nion-accordion.accordion-expanding ion-item[slot=header],\nion-accordion.accordion-expanded ion-item[slot=header] {\n  --background: #ffff;\n  --color: #5A4BB2;\n}\n\n@media (min-width: 1023px) {\n  .header {\n    border-radius: 0 0 15px 15px;\n    background: url('faq-2.svg') no-repeat center/100%;\n    height: 350px;\n    width: 100%;\n  }\n  .header-icon {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBQ0k7RUFDSSxzQkFBQTtBQUNSOztBQUFRO0VBRUkscUJBQUE7RUFDQSxxQkFBQTtFQUVBLGlCQUFBO0FBQVo7O0FBRVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNDLFdBQUE7QUFBakI7O0FBRVk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQWhCOztBQU1BO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtFQUdILDZCQUFBO0FBTEQ7O0FBT0k7RUFFSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQU5SOztBQVdJO0VBQ0ksMkJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFSUjs7QUFVQTtFQUNJLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBUEo7O0FBV0M7RUFDRywyQkFBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtBQVJKOztBQWFBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtBQVZKOztBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQVRSOztBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBR0EsNEJBQUE7QUFYUjs7QUFlQTtFQUNJLHdCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBR0EsY0FBQTtBQWRBOztBQWlCQTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFmSjs7QUFrQkU7O0VBRUUsV0FBQTtFQUVBLGlCQUFBO0FBaEJKOztBQW1CRTs7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0FBaEJKOztBQW1CRTs7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0FBaEJKOztBQW9CQztFQUNHO0lBQ0ksNEJBQUE7SUFFQSxrREFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0VBbEJOO0VBbUJNO0lBQ0EsYUFBQTtFQWpCTjtBQUNGIiwiZmlsZSI6ImZhcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4uR3JpZHtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgJi1yb3ctY29se1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgJi1pdGVte1xyXG4gICAgICBcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRkU5MTBFO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMnB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJi1sYWJlbC1we1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1pY29ue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuLmhlYWRlcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xyXG4gXHJcbiAgIFxyXG4gLyogICAgcGFkZGluZy1ib3R0b206IDI1cHg7ICovXHJcbiBcclxuICAgICYtaWNvbntcclxuICAgIFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDptYXgtY29udGVudDtcclxuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgIFxyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGl0dWxve1xyXG4gICAgICAgIHBhZGRpbmc6IDM0cHggMzlweCA5cHggMzlweCA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTZweDtcclxufVxyXG4uY29ycmVve1xyXG4gICAgcGFkZGluZzogMTFweCAzOXB4IDlweCAzOXB4IDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcbiBpb24tbGlzdHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbmlvbi1ncmlke1xyXG4gICAgcGFkZGluZzogMCAyOHB4O1xyXG59XHJcblxyXG4gXHJcbiBcclxuLmxhYmVsLWRldGFsbGV7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAmLXRpdHVsb3tcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcclxuICAgICAgICBjb2xvcjogcmdiYSgzMiwgMzIsIDMyLCAwLjcpO1xyXG4gICAgfVxyXG4gICAgJi1zdWJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XHJcbiAgICAgICAgLyogb3IgMTdweCAqL1xyXG5cclxuXHJcbiAgICAgICAgY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMC43KTtcclxuICAgIH1cclxufVxyXG5cclxuLmxhYmVsLWNvcnJlb3tcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmxpbmUtaGVpZ2h0OiAxMjAlO1xyXG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTdweCAqL1xyXG5cclxuXHJcbmNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5pb24tYWNjb3JkaW9uIHtcclxuICBcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNUE0QkIyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiBcclxuICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcsXHJcbiAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICBtYXJnaW46IDE2cHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2luZyBpb24taXRlbVtzbG90PVwiaGVhZGVyXCJdLFxyXG4gIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWNvbGxhcHNlZCBpb24taXRlbVtzbG90PVwiaGVhZGVyXCJdIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC0tY29sb3I6ICM1QTRCQjI7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZyBpb24taXRlbVtzbG90PVwiaGVhZGVyXCJdLFxyXG4gIGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgIC0tY29sb3I6ICM1QTRCQjI7XHJcbiAgfVxyXG4gXHJcblxyXG4gQG1lZGlhIChtaW4td2lkdGg6MTAyM3B4KSB7XHJcbiAgICAuaGVhZGVye1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ljb24vZmFxLTIuc3ZnJykgbm8tcmVwZWF0IGNlbnRlciAvIDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmLWljb257XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiB9Il19 */";

/***/ }),

/***/ 1645:
/*!**********************************************!*\
  !*** ./src/app/faq/faq.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n    <div class=\"header\">\n\n      <ion-icon src=\"../../assets/icon/faq-2.svg\" class=\"header-icon\"> </ion-icon>\n    </div>\n    <ion-grid class=\"Grid\">\n      <ion-row class=\"Grid-row\">\n        <ion-col class=\"Grid-row-col\" size=\"12\">\n            <ion-item class=\"Grid-row-col-item ion-text-center\" > \n            <ion-label class=\"Grid-row-col-item-label\" >\n              <p class=\"Grid-row-col-item-label-p\">Preguntas Frecuentes</p>\n            </ion-label>\n            <ion-icon  class=\"Grid-row-col-item-icon\" slot=\"start\"   src=\"../../assets/icon/faq.svg\"></ion-icon>\n          </ion-item>\n \n    </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-accordion-group>\n            <ion-accordion value=\"first\" >\n              <ion-item slot=\"header\">\n                <ion-label>¿Cuáles  son la señal de alerta?</ion-label>\n              </ion-item>\n              <div class=\"ion-padding\" slot=\"content\">\n               Señales\n              </div>\n            </ion-accordion>\n            <ion-accordion value=\"second\">\n              <ion-item slot=\"header\" class=\"accordion-item\">\n                <ion-label class=\"accordion-item-label\" >Ejemplos de maltrato</ion-label>\n              </ion-item>\n              <div class=\"ion-padding\" slot=\"content\">\n              <ion-list  style=\"background:#fff;\">\n                <ion-item>\n                    <ion-label>\n                        <p>Ejemplo 1 </p>\n                        <h2>detalle</h2>\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <p>Ejemplo 2 </p>\n                        <h2>detalle</h2>\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <p>Ejemplo 3 </p>\n                        <h2>detalle</h2>\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <p>Ejemplo 4 </p>\n                        <h2>detalle</h2>\n                    </ion-label>\n                </ion-item>\n              </ion-list>\n              </div>\n            </ion-accordion>\n            <ion-accordion value=\"third\">\n              <ion-item slot=\"header\">\n                <ion-label>¿Dónde  me van a ayudar?</ion-label>\n              </ion-item>\n              <div class=\"ion-padding\" slot=\"content\">\n                <h4>Lugares de ayuda</h4>\n                <p>   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quasi aliquam harum similique culpa est natus tempora incidunt at. Quidem eaque ipsum, alias error maiores dolores fugiat quaerat labore nihil.\n                </p></div>\n            </ion-accordion>\n            <ion-accordion value=\"fourth\">\n              <ion-item slot=\"header\">\n                <ion-label>Otra pregunta </ion-label>\n              </ion-item>\n              <div class=\"ion-padding\" slot=\"content\">\n                <h4>Lugares de ayuda</h4>\n                <p>   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quasi aliquam harum similique culpa est natus tempora incidunt at. Quidem eaque ipsum, alias error maiores dolores fugiat quaerat labore nihil.\n                </p></div>\n            </ion-accordion>\n          </ion-accordion-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n       \n</ion-content>\n\n  \n ";

/***/ })

}]);
//# sourceMappingURL=src_app_faq_faq_module_ts.js.map