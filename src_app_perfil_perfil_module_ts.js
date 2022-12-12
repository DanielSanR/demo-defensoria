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
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
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
/* harmony import */ var C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.html?ngResource */ 5768);
/* harmony import */ var _perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page.scss?ngResource */ 5879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/form.service */ 9048);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2425);








let PerfilPage = class PerfilPage {
  constructor(formBuilder, formService) {
    this.formBuilder = formBuilder;
    this.formService = formService;
    this.$obs = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.title = 'Queremos conocerte mas!';
      _this.myForm = _this.formBuilder.group({
        nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
        telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
        correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
      });

      const sub = _this.formService.getForm().subscribe(_ => {
        if (Object.keys(_).length) {
          _this.myForm.patchValue({
            nombre: _?.name,
            telefono: _?.phone,
            correo: _?.email,
            direccion: _?.address
          });

          _this.title = _.name + ' !';
        }
      });

      _this.$obs.add(sub);
    })();
  }

  onSubmit() {
    var _this2 = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.formService.setPerfil(_this2.myForm.value);
    })();
  }

  ngOnDestroy() {
    this.$obs.unsubscribe();
  }

};

PerfilPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _services_form_service__WEBPACK_IMPORTED_MODULE_3__.FormService
}];

PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-perfil',
  template: _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PerfilPage);


/***/ }),

/***/ 5879:
/*!****************************************************!*\
  !*** ./src/app/perfil/perfil.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#F4F4F4;\n}\n\n.Grid {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 70px;\n  height: 100%;\n  display: block;\n  flex-flow: column;\n}\n\n.Grid-perfil-col {\n  border-radius: 20px;\n  background: #5A4BB2;\n  text-align: center;\n  align-items: center;\n  align-content: center;\n}\n\n.Grid-perfil-col-div {\n  width: 100%;\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.Grid-perfil-col-div-image {\n  border-radius: 50%;\n  margin-top: -60px;\n  bottom: -84px;\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  background: #f4f4f4;\n  border: solid 2px #FE910E;\n  margin-bottom: 30px;\n}\n\n.Grid-perfil-col-div-label-p {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 5px;\n}\n\n.datos {\n  width: 100%;\n  border-radius: 15px;\n  padding: 10px;\n  --background: #ffff;\n  --border-radius: 15px;\n}\n\n.datos-label-p {\n  padding: 6px;\n  color: #000;\n  font-size: 18px;\n}\n\n.datos-datos-icon {\n  color: #000 !important;\n}\n\n.form {\n  width: 100%;\n  margin-top: 5px;\n  padding: 0px;\n  --background: #ffff;\n  border-radius: 15px;\n  border: 1px solid #5A4BB2;\n}\n\n.form-label-p {\n  padding: 0px;\n  color: #000;\n  font-size: 18px;\n}\n\n.form-datos-icon {\n  color: #000 !important;\n}\n\n.save {\n  font-weight: 100;\n  text-transform: none;\n  --background:#FE910E !important;\n  --color:#fff;\n  width: 100%;\n  height: 100%;\n  --padding-bottom: 0.5rem;\n  --border-radius: 0.2rem;\n  --padding-top: 0.5rem;\n  font-size: 1rem;\n  --border-radius:15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUNJO0VBQ0ksbUJBQUE7RUFDRyxtQkFBQTtFQUNILGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNSOztBQUFRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFWjs7QUFBWTtFQUVJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNoQjs7QUFFZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBcEI7O0FBU0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQU5KOztBQVFJO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUFI7O0FBU0k7RUFDUSxzQkFBQTtBQVBaOztBQVdDO0VBRUcsV0FBQTtFQUNBLGVBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFDRCxtQkFBQTtFQUNDLHlCQUFBO0FBVko7O0FBV0k7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFWUjs7QUFZSTtFQUNRLHNCQUFBO0FBVlo7O0FBY0M7RUFDRyxnQkFBQTtFQUNRLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Qsb0JBQUE7QUFYWCIsImZpbGUiOiJwZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGNEY0RjQ7XHJcbn1cclxuXHJcbi5Hcmlke1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgJi1wZXJmaWwtY29se1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZDogIzVBNEJCMjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgJi1kaXZ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAmLWltYWdle1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYygtMSooODBweCArIDRweCkpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6c29saWQgMnB4ICNGRTkxMEU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAmLXB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXRvc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gICAgJi1sYWJlbC1we1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBhZGRpbmc6NnB4O1xyXG4gICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgJi1kYXRvcy1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjojMDAwICFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG4gfVxyXG5cclxuIC5mb3Jte1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiBcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjNUE0QkIyO1xyXG4gICAgJi1sYWJlbC1we1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgJi1kYXRvcy1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjojMDAwICFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG4gfVxyXG5cclxuIC5zYXZle1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDojRkU5MTBFICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XHJcbiB9XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 5768:
/*!****************************************************!*\
  !*** ./src/app/perfil/perfil.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <form style=\"padding-top:0px\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n<ion-grid class=\"Grid \">\n  <ion-row class=\"Grid-perfil\" >\n  \n    <ion-col class=\"Grid-perfil-col\" size=\"12\">\n      <div class=\"Grid-perfil-col-div\">\n      <img src=\"../../assets/images/perfil.png\" class=\"Grid-perfil-col-div-image\">\n        <ion-label class=\"Grid-perfil-col-div-label\">\n          <p class=\"Grid-perfil-col-div-label-p\">¡ Hola,</p>\n          <p class=\"Grid-perfil-col-div-label-p\">{{title}}</p>\n        </ion-label>\n  </div>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-item button class=\"datos\" lines=\"none\" [routerLink]=\"['/principal/preguntas-frecuentes']\">\n    <ion-label class=\"datos-label ion-text-center\">\n    <p class=\"datos-label-p\">Tips Y consejos </p>\n    </ion-label>  \n    <ion-icon class=\"datos-icon\" slot=\"end\" src=\"../../assets/icon/chevron-black.svg\" ></ion-icon>\n</ion-item>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-item  class=\"form\" lines=\"none\" >\n    <ion-label class=\"form-label\" position=\"stacked\">Nombre</ion-label>\n    <ion-input class=\"form-label-p\" formControlName=\"nombre\" placeholder=\"Mi nombre es ...\"></ion-input>\n    <ion-icon src=\"../../assets/icon/nameForm.svg\"slot=\"start\"></ion-icon>\n</ion-item>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-item  class=\"form\" lines=\"none\" >\n    <ion-label class=\"form-label\" position=\"stacked\">Telefono</ion-label>\n    <ion-input class=\"form-label-p\" formControlName=\"telefono\" placeholder=\"Mi telefono es ...\"></ion-input>\n    <ion-icon src=\"../../assets/icon/phoneForm.svg\"slot=\"start\"></ion-icon>\n</ion-item>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-item  class=\"form\" lines=\"none\" >\n    <ion-label class=\"form-label\" position=\"stacked\">Correo electrónico</ion-label>\n    <ion-input class=\"form-label-p\" formControlName=\"correo\" placeholder=\"Mi correo  es ...\"></ion-input>\n    <ion-icon src=\"../../assets/icon/mailForm.svg\"slot=\"start\"></ion-icon>\n</ion-item>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-item  class=\"form\" lines=\"none\" >\n    <ion-label class=\"form-label\" position=\"stacked\">Dirección</ion-label>\n    <ion-input class=\"form-label-p\" formControlName=\"direccion\" placeholder=\"Mi dirección es ...\"></ion-input>\n    <ion-icon src=\"../../assets/icon/locationForm.svg\"slot=\"start\"></ion-icon>\n</ion-item>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-button class=\"save\" type=\"submit\" [disabled]=\"!this.myForm.valid\">Actualizar</ion-button>\n</ion-col>\n  </ion-row>\n</ion-grid>\n</form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_perfil_perfil_module_ts.js.map