"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_tab1_module_ts"],{

/***/ 7804:
/*!*********************************************!*\
  !*** ./src/app/home/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 8729);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 1513:
/*!*************************************!*\
  !*** ./src/app/home/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 8729);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 7804);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 8729:
/*!***********************************!*\
  !*** ./src/app/home/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 7698);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/form.service */ 9048);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);



/* eslint-disable @typescript-eslint/no-unused-expressions */



let Tab1Page = class Tab1Page {
    constructor(formService, router) {
        this.formService = formService;
        this.router = router;
        this.values = [
            { id: 1, text: 'Pedir Ayuda', icon: 'microfono.svg', page: '/formulario' },
            { id: 2, text: 'Consejos', icon: 'faq.svg', page: 'principal/preguntas-frecuentes' },
            { id: 3, text: 'Sitio Web', icon: 'globe-outline.svg', page: '' },
            { id: 4, text: 'Violentometro', icon: 'thermometer-outline.svg', page: '' },
        ];
        this.$selected = this.formService.optionChosed;
    }
    ngOnInit() {
        this.$selected.subscribe(opt => {
            this.formRoute = (opt === 'teen' && opt != null) ? '/formulario' : '/formulario-kids';
            this.selected = opt;
        });
    }
    setSelected(valor) {
        this.selected = valor;
        setTimeout(() => {
            const navigate = valor === 'form' ? this.formRoute : '/principal/preguntas-frecuentes';
            this.router.navigateByUrl(navigate);
        }, 200);
    }
    ionViewDidLeave() {
        this.selected = '';
    }
    redirect(page) {
        this.router.navigateByUrl(page);
        console.log(page);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_form_service__WEBPACK_IMPORTED_MODULE_2__.FormService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 313:
/*!************************************************!*\
  !*** ./src/app/home/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color: #fff;\n  font-family: \"Open Sans\";\n  font-style: normal;\n}\n\n.datos {\n  width: 100%;\n  margin-top: 31px;\n  border-radius: 15px;\n  padding: 10px;\n  --background: #FE910E;\n  --border-radius: 15px;\n}\n\n.datos-label-p {\n  padding: 6px;\n  color: #fff;\n  font-size: 18px;\n}\n\n.datos-datos-icon {\n  --color:#fff !important;\n}\n\n.Grid {\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  align-content: center;\n}\n\n.Grid-row {\n  margin-bottom: 30px;\n  height: 100%;\n  align-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0px 16px 0px 16px;\n}\n\n.Grid-row-col-card {\n  margin: 0px auto;\n  padding-left: 0px;\n  width: 100%;\n  --background: #5A4BB2;\n  --color:#fff;\n  border-radius: 15px;\n}\n\n.Grid-row-col-card-header {\n  padding-top: 30px;\n  padding-bottom: 0px;\n}\n\n.Grid-row-col-card-content {\n  padding-bottom: 25px;\n  font-size: 18px;\n  white-space: nowrap;\n}\n\n.Grid-row-col-icon {\n  height: 111px;\n  width: 121px;\n  text-align: center;\n}\n\n.Grid-row:first-child {\n  height: 100%;\n  align-content: end;\n  padding-bottom: 40px;\n  align-items: center;\n}\n\nion-button {\n  font-size: 20px;\n  --color: #202020;\n  opacity: 0.8;\n  min-height: 80px;\n  min-width: 100%;\n  --background: #FFFFFF;\n  --background-activated: #ffffff;\n  --border-radius: 15px;\n}\n\nion-button::part(native) {\n  border: 1.5px solid #C7C7C7;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\nion-button:hover::part(native), ion-button:focus::part(native) {\n  border-color: rgba(255, 102, 0, 0.83);\n  --border-style: solid;\n  --border-width: 3px;\n}\n\n@media (min-width: 360px) and (max-width: 380px) {\n  ion-button {\n    min-height: 60px;\n    font-size: 16px;\n    max-width: 240px;\n  }\n}\n\n@media (min-width: 280px) and (max-width: 359px) {\n  ion-button {\n    min-height: 55px;\n    font-size: 12px;\n    max-width: 240px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBQ1I7O0FBRUM7RUFDRyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFFUjs7QUFBSTtFQUVRLHVCQUFBO0FBQ1o7O0FBSUE7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUZKOztBQUdJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFEUjs7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBWjs7QUFDWTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFDaEI7O0FBQ1k7RUFDSSxvQkFBQTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtBQUNqQjs7QUFFUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBWjs7QUFJSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFGUjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7QUFISjs7QUFLSTtFQUNJLDJCQUFBO0VBQ0EsMkNBQUE7QUFIUjs7QUFRUTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUxSOztBQVVJO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQVBWO0FBQ0Y7O0FBV0E7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBVE47QUFDRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAuZGF0b3N7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDMxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkU5MTBFO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgJi1sYWJlbC1we1xyXG4gICAgICAgIHBhZGRpbmc6NnB4O1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgJi1kYXRvcy1pY29ue1xyXG4gICAgIFxyXG4gICAgICAgICAgICAtLWNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBcclxuICAgIH1cclxuIH1cclxuXHJcbi5Hcmlke1xyXG5cclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICYtcm93e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOjBweCAxNnB4IDBweCAxNnB4O1xyXG4gICAgICAgICYtY29sLWNhcmR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNUE0QkIyO1xyXG4gICAgICAgICAgICAtLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICYtaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtY29udGVudHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY29sLWljb257XHJcbiAgICAgICAgICAgIGhlaWdodDoxMTFweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1yb3c6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGVuZDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgLS1jb2xvcjogIzIwMjAyMDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgXHJcbiAgICAmOjpwYXJ0KG5hdGl2ZSl7XHJcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjQzdDN0M3O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmlvbi1idXR0b246aG92ZXIsaW9uLWJ1dHRvbjpmb2N1c3tcclxuICAgICAgICAmOjpwYXJ0KG5hdGl2ZSl7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOnJnYmEoMjU1LCAxMDIsIDAsIDAuODMpO1xyXG4gICAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAtLWJvcmRlci13aWR0aDogM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBzbWFsbCBkZXZpY2VzIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MzYwcHgpIGFuZCAobWF4LXdpZHRoOjM4MHB4KSAge1xyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNDBweDtcclxuICAgICAgICB9XHJcbiBcclxufVxyXG4vL2ZvciBmb2xkc1xyXG5AbWVkaWEgIChtaW4td2lkdGg6MjgwcHgpIGFuZCAobWF4LXdpZHRoOjM1OXB4KSAge1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBtaW4taGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 7698:
/*!************************************************!*\
  !*** ./src/app/home/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n    <ion-grid [fixed]=\"true\" class=\"Grid\">\n        <ion-row   class=\"ion-justify-content-center ion-align-items-center\">\n            <ion-col size=\"12\">\n              <ion-item button class=\"datos\" [routerLink]=\"['/principal/perfil']\">\n                    <ion-label class=\"datos-label ion-text-center\">\n                    <p class=\"datos-label-p\">¡ Completa tus datos !</p>\n                      \n                    </ion-label>  \n                    <ion-icon class=\"datos-icon\" slot=\"end\" src=\"../../assets/icon/chevron-forward.svg\" ></ion-icon>\n                </ion-item>\n        \n            </ion-col>\n        </ion-row>\n        <ion-row class=\"Grid-row\">\n            <ion-col size=\"12\" class=\"Grid-row-col\">\n                <ion-icon src=\"../../assets/icon/home-icon1.svg\" class=\"Grid-row-col-icon\"></ion-icon>\n            </ion-col>\n        </ion-row>   \n        <ion-row class=\"Grid-row ion-justify-content-center\">\n            <ion-col class=\"Grid-row-col\" size=\"6\" *ngFor=\"let item of values\">\n            <ion-card class=\"Grid-row-col-card\" (click)=\"redirect(item.page)\">\n                <ion-card-header class=\"Grid-row-col-card-header ion-text-center\">\n                    <div align=\"center\">\n                    <ion-thumbnail style=\"width:35px;height:35px;margin-bottom:15px\">\n                        <ion-icon src=\"../../assets/icon/{{item.icon}}\" style=\"color:white;width: 25px;height: 25px;margin-top:15px\">\n                        </ion-icon>\n                    </ion-thumbnail>\n                </div>\n                </ion-card-header>\n                <ion-card-content class=\"Grid-row-col-card-content\">\n                   {{ item.text}}\n                </ion-card-content>\n            </ion-card>\n            </ion-col>\n            <ion-col class=\"ion-padding-top\" size=\"6\">\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_tab1_module_ts.js.map