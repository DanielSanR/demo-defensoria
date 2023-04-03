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

module.exports = "ion-content {\n  --ion-background-color: #fff;\n}\n\n.Grid {\n  display: block;\n  flex-flow: column;\n}\n\n.Grid-row-col {\n  width: 100% !important;\n}\n\n.Grid-row-col-item {\n  --background: #FE910E;\n  --border-radius: 15px;\n  margin-top: -22px;\n}\n\n.Grid-row-col-item-label-p {\n  padding: 6px;\n  font-size: 18px;\n  color: #fff;\n}\n\n.Grid-row-col-item-icon {\n  margin: auto;\n  padding-left: 15px;\n  color: #fff;\n}\n\n.header {\n  border-radius: 0 0 15px 15px;\n  background-color: #F4F4F4;\n  /*    padding-bottom: 25px; */\n}\n\n.header-icon {\n  width: 100%;\n  height: max-content;\n  display: contents;\n}\n\n.titulo {\n  padding: 34px 39px 9px 39px;\n  width: 100%;\n  margin-bottom: 56px;\n}\n\n.correo {\n  padding: 11px 39px 9px 39px;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\nion-list {\n  background: #fff !important;\n}\n\nion-grid {\n  padding: 0 28px;\n}\n\n.label-detalle {\n  font-family: \"Open Sans\";\n  font-style: normal;\n}\n\n.label-detalle-titulo {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 120%;\n  color: rgba(32, 32, 32, 0.7);\n}\n\n.label-detalle-sub {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 120%;\n  /* or 17px */\n  color: rgba(32, 32, 32, 0.7);\n}\n\n.label-correo {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 120%;\n  /* identical to box height, or 17px */\n  color: #000000;\n}\n\nion-accordion {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background: white;\n  border: 1px solid #5A4BB2;\n  border-radius: 15px;\n}\n\nion-accordion.accordion-expanding,\nion-accordion.accordion-expanded {\n  width: 100%;\n  margin: 5px auto;\n}\n\nion-accordion.accordion-collapsing ion-item[slot=header],\nion-accordion.accordion-collapsed ion-item[slot=header] {\n  --background: #fff;\n  font-size: 14px;\n  --color: #5A4BB2;\n}\n\nion-accordion.accordion-expanding ion-item[slot=header],\nion-accordion.accordion-expanded ion-item[slot=header] {\n  --background: #ffff;\n  --color: #5A4BB2;\n}\n\n@media (min-width: 1023px) {\n  .header {\n    border-radius: 0 0 15px 15px;\n    background: url('faq-2.svg') no-repeat center/100%;\n    height: 350px;\n    width: 100%;\n  }\n  .header-icon {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBQ0k7RUFDSSxzQkFBQTtBQUNSOztBQUFRO0VBRUkscUJBQUE7RUFDQSxxQkFBQTtFQUVBLGlCQUFBO0FBQVo7O0FBRVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNDLFdBQUE7QUFBakI7O0FBRVk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQWhCOztBQU1BO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtFQUdILDZCQUFBO0FBTEQ7O0FBT0k7RUFFSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQU5SOztBQVdJO0VBQ0ksMkJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFSUjs7QUFVQTtFQUNJLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBUEo7O0FBV0M7RUFDRywyQkFBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtBQVJKOztBQWFBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtBQVZKOztBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQVRSOztBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBR0EsNEJBQUE7QUFYUjs7QUFlQTtFQUNJLHdCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBR0EsY0FBQTtBQWRBOztBQWlCQTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFmSjs7QUFrQkU7O0VBRUUsV0FBQTtFQUVBLGdCQUFBO0FBaEJKOztBQW1CRTs7RUFFRSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtBQWpCSjs7QUFvQkU7O0VBRUUsbUJBQUE7RUFDQSxnQkFBQTtBQWpCSjs7QUFxQkM7RUFDRztJQUNJLDRCQUFBO0lBRUEsa0RBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQW5CTjtFQW9CTTtJQUNBLGFBQUE7RUFsQk47QUFDRiIsImZpbGUiOiJmYXEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLkdyaWR7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICYtcm93LWNvbHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICYtaXRlbXtcclxuICAgICAgXHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0ZFOTEwRTtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjJweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYtbGFiZWwtcHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaWNvbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcclxuIFxyXG4gICBcclxuIC8qICAgIHBhZGRpbmctYm90dG9tOiAyNXB4OyAqL1xyXG4gXHJcbiAgICAmLWljb257XHJcbiAgICBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6bWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICBcclxuICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRpdHVsb3tcclxuICAgICAgICBwYWRkaW5nOiAzNHB4IDM5cHggOXB4IDM5cHggO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XHJcbn1cclxuLmNvcnJlb3tcclxuICAgIHBhZGRpbmc6IDExcHggMzlweCA5cHggMzlweCA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG4gaW9uLWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG5pb24tZ3JpZHtcclxuICAgIHBhZGRpbmc6IDAgMjhweDtcclxufVxyXG5cclxuIFxyXG4gXHJcbi5sYWJlbC1kZXRhbGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgJi10aXR1bG97XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMC43KTtcclxuICAgIH1cclxuICAgICYtc3Vie1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xyXG4gICAgICAgIC8qIG9yIDE3cHggKi9cclxuXHJcblxyXG4gICAgICAgIGNvbG9yOiByZ2JhKDMyLCAzMiwgMzIsIDAuNyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sYWJlbC1jb3JyZW97XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuZm9udC1zaXplOiAxNHB4O1xyXG5saW5lLWhlaWdodDogMTIwJTtcclxuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE3cHggKi9cclxuXHJcblxyXG5jb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuaW9uLWFjY29yZGlvbiB7XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNUE0QkIyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiBcclxuICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcsXHJcbiAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1jb2xsYXBzaW5nIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0sXHJcbiAgaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tY29sbGFwc2VkIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgXHJcbiAgICAtLWNvbG9yOiAjNUE0QkIyO1xyXG4gIH1cclxuICBcclxuICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSxcclxuICBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCBpb24taXRlbVtzbG90PVwiaGVhZGVyXCJdIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICAtLWNvbG9yOiAjNUE0QkIyO1xyXG4gIH1cclxuIFxyXG5cclxuIEBtZWRpYSAobWluLXdpZHRoOjEwMjNweCkge1xyXG4gICAgLmhlYWRlcntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29uL2ZhcS0yLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgLyAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgJi1pY29ue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gfSJdfQ== */";

/***/ }),

/***/ 1645:
/*!**********************************************!*\
  !*** ./src/app/faq/faq.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n    <div class=\"header\">\n\n      <ion-icon src=\"../../assets/icon/faq-2.svg\" class=\"header-icon\"> </ion-icon>\n    </div>\n    <ion-grid class=\"Grid\">\n<!--       <ion-row class=\"Grid-row\">\n        <ion-col class=\"Grid-row-col\" size=\"12\">\n            <ion-item class=\"Grid-row-col-item ion-text-center\" > \n            <ion-label class=\"Grid-row-col-item-label\" >\n              <p class=\"Grid-row-col-item-label-p\">Sobre tus Derechos</p>\n            </ion-label>\n            <ion-icon  class=\"Grid-row-col-item-icon\" slot=\"start\" src=\"../../assets/icon/faq.svg\"></ion-icon>\n          </ion-item>\n \n    </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-accordion-group>\n            <ion-accordion value=\"first\" >\n              <ion-item slot=\"header\">\n                <ion-label>Sobre tus Derechos</ion-label>\n              </ion-item>\n              <div style=\"padding-left: 10px;\" slot=\"content\">\n                <ion-list>\n                <ion-list-header>\n                  <ion-label style=\"    font-size: 14px;\n                  color: black;\n                  font-weight: 600;\">¿Cuáles son los derechos de los Niños, Niñas y Adolescentes?</ion-label>\n                </ion-list-header>\n                <ion-item>\n                  <ion-text color=\"dark\">\n                    <p style=\"    font-size: 12px;\n                    color: black;\n                    font-weight: 400;\">\n                     <strong style=\"font-size: 18px;padding-right: 5px;\">•</strong> Identidad: tienen derecho a una identidad; es decir, tienen derecho a una inscripción oficial de quiénes son, que incluya su nombre, nacionalidad y relaciones familiares. <br>\n                     <strong style=\"font-size: 18px;padding-right: 5px;\">•</strong> Vivir en familia: no se debe separar a los niños, niñas y adolescentes de su padre y su madre, a menos que estos no los cuiden como es debido (por ejemplo, si el padre o la madre hacen daño al niño o le descuidan). Cuando el padre y la madre no vivan juntos, el niño debería permanecer en contacto con los dos, salvo que esto le perjudique. <br>\n                     <strong style=\"font-size: 18px;padding-right: 5px;\">•</strong> A ser escuchados: tienen derecho a expresar su opinión sobre los asuntos que les afectan. Los adultos deben escuchar a los niños y tomarles en serio. <br>\n                     <strong style=\"font-size: 18px;padding-right: 5px;\">•</strong> A tener buena salud: tienen derecho a la mejor atención de la salud que se les pueda brindar, al agua limpia para beber, a una alimentación sana y a un entorno limpio y seguro en el que vivir. <br>\n                     <strong style=\"font-size: 18px;padding-right: 5px;\">•</strong> A la educación: tienen derecho a recibir una educación. La educación primaria debería ser gratuita. La educación secundaria y superior deben estar al alcance de todos los niños. Se debería apoyar a los niños para que asistan a la escuela hasta completar el grado más alto posible. <br>\n                     <strong style=\"font-size: 18px;padding-right: 5px;\">•</strong> A una alimentación saludable, vestimenta y vivienda digna: tienen derecho a la alimentación, al vestido y a un lugar seguro donde vivir, para que puedan crecer del mejor modo posible.  <br>\n                     <strong style=\"font-size: 18px;padding-right: 5px;\">•</strong> Al descanso y recreación: tienen derecho al descanso, a relajarse, a jugar y a participar en actividades culturales y creativas. <br>\n                     \n                      <strong style=\"font-size: 18px;padding-right: 5px;\">•</strong> Podés conocer más derechos aquí <a target=\"_blank\" href=\"https://www.unicef.org/es/convencion-derechos-nino/convencion-version-ninos\">  https://www.unicef.org/es/convencion-derechos-nino/convencion-version-ninos </a></p></ion-text>\n                    </ion-item>\n              </ion-list>\n              </div>\n            </ion-accordion>\n<!--             <ion-accordion value=\"second\">\n              <ion-item slot=\"header\" class=\"accordion-item\">\n                <ion-label class=\"accordion-item-label\" >¿En qué lugares me pueden ayudar?</ion-label>\n              </ion-item>\n              <div style=\"padding-left:10px;\" slot=\"content\">\n                <ion-list>\n                  <ion-list-header>\n                    <ion-label style=\"    font-size: 14px;\n                    color: black;\n                    font-weight: 600;\">¿En qué lugares me pueden ayudar?</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-text color=\"dark\">\n                      <p style=\"    font-size: 12px;\n                      color: black;\n                      font-weight: 400;\">Si has sufrido algun tipo de abuso, es importante que busques ayuda lo antes posible. Hay varios lugares donde puedes buscar ayuda y apoyo, como en las siguientes opciones: <br>\n                  <br><strong> Puedes ... </strong> <br>\n\n                  <strong> Puedes ... </strong> <br>\n                  \n                <strong> Puedes ... </strong> <br>\n                  \n                <strong> Puedes ... </strong> <br>\n                 </ion-text>\n                </ion-item>\n                </ion-list>\n              </div>\n            </ion-accordion>\n            <ion-accordion value=\"third\">\n              <ion-item slot=\"header\">\n                <ion-label>¿Qué es el abuso sexual?</ion-label>\n              </ion-item>\n              <div style=\"padding-left: 10px;\" slot=\"content\">\n                <ion-list>\n                  <ion-list-header>\n                    <ion-label style=\"    font-size: 14px;\n                    color: black;\n                    font-weight: 600;\">Abuso sexual contra niños, niñas y/o adolescentes</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-text color=\"dark\">\n                      <p style=\"    font-size: 12px;\n                      color: black;\n                      font-weight: 400;\">El abuso sexual es un acto muy serio que ocurre cuando alguien te toca o te hace cosas sexuales sin tu consentimiento. Esto significa que la otra persona no te pregunta si quieres que te toquen o te hagan esas cosas, o te engañan para que creas que es lo que quieres. El abuso sexual es un delito, lo que significa que es ilegal y que la persona que lo hace puede ir a la cárcel. <br>\n\nEs importante recordar que el abuso sexual nunca es culpa tuya. Si alguien te ha abusado sexualmente, no es porque hayas hecho algo malo, sino porque la otra persona ha elegido hacerte daño. Si alguien te ha abusado sexualmente, es importante que cuentes a un adulto de confianza para que te ayuden. No tienes que sentirte avergonzado o asustado de contar lo que ha pasado. Los adultos están ahí para ayudarte y protegerte.</p>\n                    </ion-text>\n                  </ion-item>\n                </ion-list></div>\n            </ion-accordion>\n            <ion-accordion value=\"fourth\">\n              <ion-item slot=\"header\">\n                <ion-label>¿Qué parte de mi cuerpo NO me pueden tocar? </ion-label>\n              </ion-item>\n              <div style=\"padding-right: 10px;\" slot=\"content\">\n                <ion-list>\n                  <ion-list-header>\n                    <ion-label style=\"    font-size: 14px;\n                    color: black;\n                    font-weight: 600;\">Abuso sexual contra niños, niñas y/o adolescentes</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-text color=\"dark\">\n                      <p style=\"    font-size: 12px;\n                      color: black;\n                      font-weight: 400;\">\n                      Nadie tiene derecho a tocar ninguna parte de tu cuerpo sin tu consentimiento. Esto incluye a cualquier parte de tu cuerpo, ya sea tu cabeza, tu cara, tu cuerpo o tus extremidades. Tú tienes el derecho de decidir qué pasa con tu cuerpo y de protegerte a ti mismo de cualquier tipo de abuso o violencia.\n                    <br>\n                    Si alguien te toca de una manera que no te gusta o te hace sentir mal, no dudes en decir \"no\" y en buscar ayuda.</p></ion-text>\n                  </ion-item>\n                </ion-list></div></ion-accordion>\n            <ion-accordion value=\"fift\">\n              <ion-item slot=\"header\">\n                <ion-label>¿Cuáles son las señales de alerta? </ion-label>\n              </ion-item>\n              <div style=\"padding-right: 10px;\" slot=\"content\">\n                <ion-list>\n                  <ion-list-header>\n                    <ion-label style=\"    font-size: 14px;\n                    color: black;\n                    font-weight: 600;\">Señales de alerta </ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-text color=\"dark\">\n                      <p style=\"    font-size: 12px;\n                      color: black;\n                      font-weight: 400;\">Hay varias señales de alerta que pueden indicar que estás siendo víctima de abuso o violencia. Estas señales pueden ser físicas, emocionales o comportamentales. Algunas señales de alerta comunes incluyen: <br>\n                      <strong style=\"font-size: 18px;padding-right: 5px;\">•</strong> Lesiones físicas, como moretones, cortes o quemaduras, que no tienen una explicación clara o que aparecen de forma regular.<br>\n                       <strong style=\"font-size: 18px;padding-right: 5px;\">•</strong>Cambios en el comportamiento, como aislamiento social, cambios en el apetito o en el sueño, o dificultad para concentrarse. <br>\n                       <strong style=\"font-size: 18px;padding-right: 5px;\">•</strong>Cambios en el estado de ánimo, como depresión, ansiedad o irritabilidad. <br>\n                       <strong style=\"font-size: 18px;padding-right: 5px;\">•</strong> Miedo a ciertas personas o situaciones, o dificultad para tomar decisiones. <br> \n                      Si notas alguna de estas señales en un niño que conoces, es importante que busques ayuda lo antes posible. Puedes hablar con un adulto de confianza, como un profesional de la salud o puedes contactar a una organización de ayuda para víctimas de abuso o violencia. Ellos pueden ayudarte a proteger al niño y a encontrar formas de superar el abuso o la violencia. <br>\n                    </p>\n                    </ion-text>\n                  </ion-item>\n                </ion-list></div>\n            </ion-accordion>\n            <ion-accordion value=\"glosario\">\n              <ion-item slot=\"header\">\n                <ion-label>Glosario\n                </ion-label>\n              </ion-item>\n              <div  style=\"padding-right: 10px;\" slot=\"content\">\n                <ion-list>\n                  <ion-list-header>\n                    <ion-label style=\"    font-size: 14px;\n                    color: black;\n                    font-weight: 600;\">Abuso sexual contra niños, niñas y/o adolescentes</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-text color=\"dark\">\n                      <p style=\"    font-size: 12px;\n                      color: black;\n                      font-weight: 400;\">El abuso sexual ocurre cuando un niño es utilizado para la estimulación sexual de su agresor (un adulto conocido o desconocido, un pariente u otro NNyA) o la gratificación de un observador. Implica toda interacción sexual en la que el consentimiento no existe o no puede ser dado, independientemente de si el niño entiende la naturaleza sexual de la actividad e incluso cuando no muestre signos de rechazo. El contacto sexual entre un adolescente y un niño o una niña más pequeños también puede ser abusivo si hay una significativa disparidad en la edad, el desarrollo, el tamaño o si existe un aprovechamiento intencionado de esas diferencias.\n                      </p>\n                    </ion-text>\n                  </ion-item>\n                </ion-list>\n                <ion-list>\n                  <ion-list-header>\n                    <ion-label style=\"    font-size: 14px;\n                    color: black;\n                    font-weight: 600;\">Trata con fines de explotación sexual de niñas, niños y adolescentes</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-text color=\"dark\">\n                      <p style=\"    font-size: 12px;\n                      color: black;\n                      font-weight: 400;\">Es la explotación por un adulto de un niño, niña o adolescente, menor de 18 años, acompañada del pago en efectivo o en especie al niño, niña o adolescente, o a un tercero o terceros. Implica el ofrecimiento, la captación, el transporte y/o traslado -dentro del país, desde o hacia el exterior-, la acogida o la recepción de personas menores de 18 años, con fines de explotación sexual o laboral. La Organización Internacional del Trabajo (OIT) considera que la explotación sexual comercial infantil (ESCI) es una grave violación de los derechos humanos de niños, niñas y adolescentes, y una forma de explotación económica análoga a la esclavitud y al trabajo forzoso, que constituye además un delito por parte de los que utilizan a niñas, niños y adolescentes para el comercio sexual. (Fuente: OIT)\n</p>\n                    </ion-text>\n                  </ion-item>\n                </ion-list>\n                <ion-list>\n                  <ion-list-header>\n                    <ion-label style=\"    font-size: 14px;\n                    color: black;\n                    font-weight: 600;\">Explotación sexual infantil</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-text color=\"dark\">\n                      <p style=\"    font-size: 12px;\n                      color: black;\n                      font-weight: 400;\">Es la expresión correcta para describir un intercambio sexual de un niño con un adulto a cambio de dinero. Porque detrás de esta situación siempre existe otro adulto que incita u obliga al menor de edad a la acción para su provecho económico. (Fuente. Unicef) </p>\n                    </ion-text>\n                  </ion-item>\n                </ion-list>\n                <ion-list>\n                  <ion-list-header>\n                    <ion-label style=\"    font-size: 14px;\n                    color: black;\n                    font-weight: 600;\">Grooming</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-text color=\"dark\">\n                      <p style=\"    font-size: 12px;\n                      color: black;\n                      font-weight: 400;\"> Es la acción deliberada de un adulto de acosar sexualmente a un niño o niña mediante el uso de Internet. (Fuente: Unicef)</p>\n                    </ion-text>\n                  </ion-item>\n                </ion-list>\n                <ion-list>\n                  <ion-list-header>\n                    <ion-label style=\"    font-size: 14px;\n                    color: black;\n                    font-weight: 600;\">Te recomendamos:</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-text color=\"dark\">\n                      <p style=\"    font-size: 12px;\n                      color: black;\n                      font-weight: 400;\"> \n                      <strong>Canciones: </strong>Hay Secretos de canticuentos. \n                      <strong>Cuentos:</strong><br>\n                      <strong> - ¡Estela grita muy fuerte!</strong> La maestra le da un consejo a Estela: gritar cuando pase algo que no le guste. El objetivo de este cuento es propiciar el diálogo entre padres e hijos sobre las situaciones que disgustan o hacen daño a niñas y niños. Destinado a niñas y niños de 6 años en adelante. \n                      <br><strong>- La Regla de Kiko y la Mano:</strong>  Este cuento ilustrado que nos cuenta la historia de Kiko y una mano, quienes reflexionan acerca sobre los tipos de contactos que están permitidos y no. Destinado a niñas y niños de menos de 6 años.</ion-text>\n                  </ion-item>\n                </ion-list>\n                <ion-list>\n                  <ion-list-header>\n                    <ion-label style=\"    font-size: 14px;\n                    color: black;\n                    font-weight: 600;\">Señales para que tengas en cuenta</ion-label>\n                  </ion-list-header>\n                  <ion-item>\n                    <ion-text color=\"dark\">\n                      <p style=\"    font-size: 12px;\n                      color: black;\n                      font-weight: 400;\"> \n                      <strong>-Estás más retraíd@.</strong><br>\n                      <strong>-Estás más agresiv@.</strong><br>\n                      <strong>-Mojas la cama.</strong><br>\n                      <strong>-Cambiaste tus hábitos alimentarios.</strong><br>\n                      <strong>-Tenés dificultades para dormir.</strong><br>\n                      <strong>-Tenés miedo a ciertos lugares y personas.</strong><br>\n                      <strong>-Te cuesta concentrarte en la escuela.</strong><br>\n                      <strong style=\"color:red\">-Tener lenguaje o comportamiento sexual que no va con su edad.</strong><br>\n                      </ion-text>\n                      </ion-item>\n                </ion-list>\n              </div>\n            </ion-accordion> -->\n          </ion-accordion-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n       \n</ion-content>\n\n  \n ";

/***/ })

}]);
//# sourceMappingURL=src_app_faq_faq_module_ts.js.map