"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _guard_onboarding_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guard/onboarding.guard */ 4746);





const routes = [
    {
        path: 'principal',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'inicio',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/tab1.module */ 1513)).then(m => m.Tab1PageModule),
                canLoad: [_guard_onboarding_guard__WEBPACK_IMPORTED_MODULE_1__.OnboardingGuard]
            },
            {
                path: 'search',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_search_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../search/tab2.module */ 8612)).then(m => m.Tab2PageModule),
                canLoad: [_guard_onboarding_guard__WEBPACK_IMPORTED_MODULE_1__.OnboardingGuard]
            },
            {
                path: 'mapa',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_esri-leaflet_src_EsriLeaflet_js"), __webpack_require__.e("src_app_map_map_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../map/map.module */ 2622)).then(m => m.MapPageModule),
                canLoad: [_guard_onboarding_guard__WEBPACK_IMPORTED_MODULE_1__.OnboardingGuard]
            },
            {
                path: 'preguntas-frecuentes',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../faq/faq.module */ 5083)).then(m => m.FaqPageModule),
                canLoad: [_guard_onboarding_guard__WEBPACK_IMPORTED_MODULE_1__.OnboardingGuard]
            },
            {
                path: 'numeros-utiles',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_telefono_telefono_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../telefono/telefono.module */ 651)).then(m => m.TelefonoPageModule),
                canLoad: [_guard_onboarding_guard__WEBPACK_IMPORTED_MODULE_1__.OnboardingGuard]
            },
            {
                path: 'perfil',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_perfil_perfil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../perfil/perfil.module */ 1320)).then(m => m.PerfilPageModule),
                canLoad: [_guard_onboarding_guard__WEBPACK_IMPORTED_MODULE_1__.OnboardingGuard]
            },
            {
                path: '',
                redirectTo: '/principal/inicio',
                pathMatch: 'full'
            }
        ],
    },
    {
        path: '',
        redirectTo: '/principal/inicio',
        pathMatch: 'full',
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/form.service */ 9048);






let TabsPage = class TabsPage {
    constructor(platform, formService) {
        this.platform = platform;
        this.formService = formService;
        this.select = this.formService.getSelected();
    }
    ngOnInit() {
        this.select.subscribe((data) => {
            this.route = data;
        });
        this.width = this.platform.width();
    }
    tabChange(tabsRef) {
        this.activeTab = tabsRef.outlet.activatedView.element;
    }
    ionViewWillLeave() {
        this.propagateToActiveTab('ionViewWillLeave');
    }
    ionViewDidLeave() {
        this.propagateToActiveTab('ionViewDidLeave');
    }
    ionViewWillEnter() {
        this.propagateToActiveTab('ionViewWillEnter');
    }
    ionViewDidEnter() {
        this.propagateToActiveTab('ionViewDidEnter');
    }
    propagateToActiveTab(eventName) {
        if (this.activeTab) {
            this.activeTab.dispatchEvent(new CustomEvent(eventName));
        }
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _services_form_service__WEBPACK_IMPORTED_MODULE_2__.FormService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 4710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ":host {\n  background: white;\n}\n\nion-tab-bar {\n  position: relative;\n  margin: 0 auto;\n  --background: #fff !important;\n  border-top: 7px solid #5A4BB2;\n  border-radius: 15px;\n  width: 100%;\n  padding-bottom: 5px;\n}\n\nion-tab-button {\n  --color: #000;\n  --color-selected: #5A4BB2;\n}\n\nion-tab-button::before {\n  background-color: transparent;\n  display: block;\n  content: \"\";\n  margin: 0 auto;\n  width: 20px;\n  height: 2px;\n}\n\nion-tab-button.tab-selected::before {\n  background-color: #5A4BB2;\n}\n\nion-label.hidden {\n  display: none;\n}\n\nion-label {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  min-width: max-content;\n  line-height: 120%;\n  color: #000;\n  /*     flex: none;\n      order: 1; */\n  opacity: 0.7;\n  /*     flex-grow: 0; */\n}\n\n@media (max-width: 360px) {\n  ion-tab-bar {\n    min-height: 60px;\n  }\n  ion-tab-button {\n    width: 56px;\n    min-width: 56px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQUk7RUFDRSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRU47O0FBQ0k7RUFDRSx5QkFBQTtBQUNOOztBQUlBO0VBQ0ksYUFBQTtBQURKOztBQUtBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0o7aUJBQUE7RUFFSSxZQUFBO0VBQ0osc0JBQUE7QUFGQTs7QUFLQTtFQUNJO0lBQ0ksZ0JBQUE7RUFGTjtFQUlGO0lBQ0ksV0FBQTtJQUNBLGVBQUE7RUFGRjtBQUNGIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi10YWItYmFye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgIzVBNEJCMjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5pb24tdGFiLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogIzAwMDtcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiAjNUE0QkIyO1xuICBcbiAgICAmOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgfVxuICBcbiAgICAmLnRhYi1zZWxlY3RlZDo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1QTRCQjI7XG4gICAgfVxuICB9XG5cblxuaW9uLWxhYmVsLmhpZGRlbntcbiAgICBkaXNwbGF5OiBub25lO1xuICAgXG59XG4gXG5pb24tbGFiZWx7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIGNvbG9yOiMwMDA7XG4vKiAgICAgZmxleDogbm9uZTtcbiAgICBvcmRlcjogMTsgKi9cbiAgICBvcGFjaXR5OiAwLjc7XG4vKiAgICAgZmxleC1ncm93OiAwOyAqL1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDozNjBweCkge1xuICAgIGlvbi10YWItYmFye1xuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIH1cbmlvbi10YWItYnV0dG9uIHtcbiAgICB3aWR0aDogNTZweDtcbiAgICBtaW4td2lkdGg6IDU2cHg7XG59XG5cbn1cblxuXG4gIl19 */";

/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs #tabs (ionTabsDidChange)=\"tabChange(tabs)\">\n    <ion-tab-bar slot=\"bottom\" mode=\"ios\">\n      \n        <ion-tab-button *ngIf=\"(route === 'teen')\" [routerLink]=\"['/formulario']\"  layout=\"icon-top\">\n            <ion-icon src=\"../../assets/icon/microfono.svg\" ></ion-icon>\n            <ion-label  [ngClass]=\"{'hidden': width <  360}\">Formulario</ion-label>\n        </ion-tab-button>\n        <ion-tab-button *ngIf=\"route === 'kid'\" [routerLink]=\"['/formulario-kids']\" layout=\"icon-top\" >\n            <ion-icon src=\"../../assets/icon/microfono.svg\" ></ion-icon>\n            <ion-label  [ngClass]=\"{'hidden': width <  360}\">Formulario</ion-label>\n        </ion-tab-button>\n   \n        <ion-tab-button tab=\"mapa\" layout=\"icon-top\" >\n            <ion-icon src=\"../../assets/icon/mapa.svg\"></ion-icon>\n                       <ion-label [ngClass]=\"{'hidden': width <  360}\">Mapa</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"inicio\" layout=\"icon-top\">\n            <ion-icon src=\"../../assets/icon/inicio.svg\" ></ion-icon>\n                       <ion-label [ngClass]=\"{'hidden': width <  360}\">Inicio</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"numeros-utiles\" layout=\"icon-top\">\n            <ion-icon src=\"../../assets/icon/telefono.svg\"></ion-icon>\n                       <ion-label [ngClass]=\"{'hidden': width <  360}\">Telefono</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"perfil\" layout=\"icon-top\">\n            <ion-icon src=\"../../assets/icon/perfil.svg\"></ion-icon>\n                       <ion-label [ngClass]=\"{'hidden': width <  360}\">Perfil</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map