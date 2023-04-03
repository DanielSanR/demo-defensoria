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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.html?ngResource */ 5768);
/* harmony import */ var _perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page.scss?ngResource */ 5879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/form.service */ 9048);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ 4465);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sobre_nosotros_sobre_nosotros_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sobre-nosotros/sobre-nosotros.page */ 3541);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);




/* eslint-disable @typescript-eslint/dot-notation */










let PerfilPage = class PerfilPage {
  constructor(formBuilder, formService, userService, toastService, modalCtrl, alertController, router) {
    this.formBuilder = formBuilder;
    this.formService = formService;
    this.userService = userService;
    this.toastService = toastService;
    this.modalCtrl = modalCtrl;
    this.alertController = alertController;
    this.router = router;
    this.$obs = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.myForm = _this.formBuilder.group({
        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3)]],
        phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3)]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
      });
      _this.loaded = yield _this.userService.getUser();

      if (_this.loaded) {
        const sub = _this.userService.getData().subscribe(res => {
          _this.patchForm(res);
        });

        _this.$obs.add(sub);
      }
    })();
  }

  onSubmit() {
    var _this2 = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const a = yield _this2.userService.setUser(_this2.myForm.value);

      if (a) {
        _this2.title = _this2.myForm.controls['name'].value;
        _this2.loaded = true;
      } else {
        _this2.loaded = true;
      }
    })();
  }

  ionViewWillLeave() {
    this.$obs.unsubscribe();
  }

  patchForm(res) {
    this.myForm.patchValue({
      name: res.name,
      phone: res.phone,
      email: res.email,
      address: res.address
    });
    this.title = res.name;
  }

  modalAboutUs() {
    var _this3 = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalCtrl.create({
        component: _sobre_nosotros_sobre_nosotros_page__WEBPACK_IMPORTED_MODULE_6__.SobreNosotrosPage
      });
      modal.present();
      yield modal.onWillDismiss();
    })();
  }

  changeForm() {
    var _this4 = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        header: 'Estás seguro?',
        buttons: [{
          text: 'No',
          cssClass: 'alert-button-cancel'
        }, {
          text: 'Si',
          cssClass: 'alert-button-confirm',
          handler: () => {
            _this4.userService.clearData();
          }
        }]
      });
      yield alert.present();
    })();
  }

};

PerfilPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: _services_form_service__WEBPACK_IMPORTED_MODULE_3__.FormService
}, {
  type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
}, {
  type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}];

PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-perfil',
  template: _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PerfilPage);


/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 1188);
/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.service */ 9048);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast.service */ 4465);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);










let UserService = class UserService {
  constructor(http, storageService, formService, toastService, router) {
    this.http = http;
    this.storageService = storageService;
    this.formService = formService;
    this.toastService = toastService;
    this.router = router;
    this.user = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.optionChosed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.url;
  }

  loadUser() {
    var _this = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.storageService.getStorage2('user').then(res => {
        console.log(res);
      });
    })();
  }

  setUser(user) {
    var _this2 = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const id = yield _this2.storageService.getStorage2('id');
      const b = yield _this2.storageService.saveStorage('user', user);
      yield _this2.formService.update(user, 'user');

      try {
        const response = yield _this2.http.post(`${_this2.url}/help/${id}`, user).toPromise();

        if (response.status) {
          _this2.storageService.saveStorage('user_update', true);

          _this2.user.next(user);

          _this2.toastService.toast('Datos guardados ! :)', 'success');

          return Promise.resolve(true);
        }
      } catch {
        _this2.storageService.saveStorage('user_update', false);

        _this2.toastService.toast('Hubo un error al cargar tus datos :( ', 'danger');

        return Promise.resolve(false);
      }
    })();
  }

  getUser() {
    var _this3 = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let isData;
      yield _this3.storageService.hasValue('user').then(res => {
        isData = res;
      });

      if (isData) {
        _this3.user.next(yield _this3.storageService.getStorage2('user'));

        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    })();
  }

  getData() {
    return this.user.asObservable();
  }

  clearData() {
    this.storageService.clearData();
    this.router.navigate(['onboarding'], {
      replaceUrl: true
    });
  }

};

UserService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: _form_service__WEBPACK_IMPORTED_MODULE_2__.FormService
}, {
  type: _toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}];

UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: 'root'
})], UserService);


/***/ }),

/***/ 5879:
/*!****************************************************!*\
  !*** ./src/app/perfil/perfil.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:#F4F4F4;\n}\n\n.Grid {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 20px;\n  height: 100%;\n  display: block;\n  flex-flow: column;\n}\n\n.Grid-perfil-col {\n  border-radius: 20px;\n  background: #5A4BB2;\n  text-align: center;\n  align-items: center;\n  align-content: center;\n}\n\n.Grid-perfil-col-div {\n  width: 100%;\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.Grid-perfil-col-div-image {\n  border-radius: 50%;\n  margin-top: -60px;\n  bottom: -84px;\n  width: 115px;\n  height: 115px;\n  border-radius: 50%;\n  background: #f4f4f4;\n  border: solid 2px #FE910E;\n  margin-bottom: 30px;\n}\n\n.Grid-perfil-col-div-label-p {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 5px;\n}\n\n.datos {\n  width: 100%;\n  border-radius: 15px;\n  padding: 10px;\n  --background: #ffff;\n  --border-radius: 15px;\n}\n\n.datos-label-p {\n  padding: 6px;\n  color: #000;\n  font-size: 18px;\n}\n\n.datos-datos-icon {\n  color: #000 !important;\n}\n\n.form {\n  width: 100%;\n  margin-top: 5px;\n  padding: 0px;\n  --background: #ffff;\n  border-radius: 15px;\n  border: 1px solid #5A4BB2;\n}\n\n.form-label-p {\n  padding: 0px;\n  color: #000;\n  font-size: 18px;\n}\n\n.form-datos-icon {\n  color: #000 !important;\n}\n\n.save {\n  font-weight: 100;\n  text-transform: none;\n  --background:#FE910E !important;\n  --color:#fff;\n  width: 100%;\n  height: 100%;\n  --padding-bottom: 0.5rem;\n  --border-radius: 0.2rem;\n  --padding-top: 0.5rem;\n  font-size: 1rem;\n  --border-radius:15px;\n}\n\n.toolbar {\n  --background:#F4F4F4;\n  --color:#5A4BB2;\n  --border-color: none;\n  --border-width: 0px !important;\n  --box-shadow:none;\n}\n\n.lista {\n  --inner-padding-end: 0;\n  border-radius: 8px;\n  --border-radius:8px;\n  --background: #f4f4f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUNJO0VBQ0ksbUJBQUE7RUFDRyxtQkFBQTtFQUNILGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNSOztBQUFRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFWjs7QUFBWTtFQUVJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNoQjs7QUFFZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBcEI7O0FBU0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQU5KOztBQVFJO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUFI7O0FBU0k7RUFDUSxzQkFBQTtBQVBaOztBQVdDO0VBRUcsV0FBQTtFQUNBLGVBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFDRCxtQkFBQTtFQUNDLHlCQUFBO0FBVko7O0FBV0k7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFWUjs7QUFZSTtFQUNRLHNCQUFBO0FBVlo7O0FBY0M7RUFDRyxnQkFBQTtFQUNRLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Qsb0JBQUE7QUFYWDs7QUFnQkE7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFzQiw4QkFBQTtFQUN0QixpQkFBQTtBQVpKOztBQWVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFaSiIsImZpbGUiOiJwZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGNEY0RjQ7XHJcbn1cclxuXHJcbi5Hcmlke1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgJi1wZXJmaWwtY29se1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZDogIzVBNEJCMjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgJi1kaXZ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAmLWltYWdle1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYygtMSooODBweCArIDRweCkpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDExNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6c29saWQgMnB4ICNGRTkxMEU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAmLXB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuIFxyXG4uZGF0b3N7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgICYtbGFiZWwtcHtcclxuICAgICAgICBcclxuICAgICAgICBwYWRkaW5nOjZweDtcclxuICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgICYtZGF0b3MtaWNvbntcclxuICAgICAgICAgICAgY29sb3I6IzAwMCAhaW1wb3J0YW50OyBcclxuICAgIH1cclxuIH1cclxuXHJcbiAuZm9ybXtcclxuICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gXHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzVBNEJCMjtcclxuICAgICYtbGFiZWwtcHtcclxuICAgICAgICBcclxuICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgICYtZGF0b3MtaWNvbntcclxuICAgICAgICAgICAgY29sb3I6IzAwMCAhaW1wb3J0YW50OyBcclxuICAgIH1cclxuIH1cclxuXHJcbiAuc2F2ZXtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6I0ZFOTEwRSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gfVxyXG5cclxuXHJcblxyXG4udG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDojRjRGNEY0O1xyXG4gICAgLS1jb2xvcjojNUE0QkIyO1xyXG4gICAgLS1ib3JkZXItY29sb3I6IG5vbmU7IC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcblxyXG4ubGlzdGF7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG59XHJcbiAiXX0= */";

/***/ }),

/***/ 5768:
/*!****************************************************!*\
  !*** ./src/app/perfil/perfil.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n \n<ion-content> \n  <ion-grid style=\"display: flex;flex-direction: row-reverse;padding: 0px;\">\n    <ion-row>\n      <ion-col size=\"12\">\n         <ion-button id=\"open-popover\" class=\"toolbar\" ><ion-icon slot=\"icon-only\"  name=\"ellipsis-horizontal\"></ion-icon></ion-button></ion-col>\n    </ion-row>\n  </ion-grid>\n<form style=\"padding-top:0px\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n<ion-grid class=\"Grid \">\n  \n  <ion-row class=\"Grid-perfil\">\n    <ion-col class=\"Grid-perfil-col\" size=\"12\">\n      <div class=\"Grid-perfil-col-div\">\n      <img src=\"../../assets/images/perfil.png\" class=\"Grid-perfil-col-div-image\">\n        <ion-label class=\"Grid-perfil-col-div-label\">\n          <p class=\"Grid-perfil-col-div-label-p\">¡ Hola,</p>\n          <p class=\"Grid-perfil-col-div-label-p\">{{ loaded ? title : 'Queremos Conocerte más'}} !</p>\n        </ion-label>\n  </div>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-item detail='false' button class=\"datos\" lines=\"none\" [routerLink]=\"['/principal/preguntas-frecuentes']\">\n    <ion-label class=\"datos-label ion-text-center\">\n    <p class=\"datos-label-p\">Tips Y consejos </p>\n    </ion-label>  \n    <ion-icon class=\"datos-icon\" slot=\"end\" src=\"../../assets/icon/chevron-black.svg\" ></ion-icon>\n</ion-item> \n</ion-col>\n<ion-col size=\"12\">\n  <ion-item  class=\"form\" lines=\"none\" >\n    <ion-label class=\"form-label\" position=\"stacked\">Nombre</ion-label>\n    <ion-input class=\"form-label-p\" formControlName=\"name\" placeholder=\"Mi nombre es ...\"></ion-input>\n    <ion-icon src=\"../../assets/icon/nameForm.svg\"slot=\"start\"></ion-icon>\n</ion-item>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-item  class=\"form\" lines=\"none\" >\n    <ion-label class=\"form-label\" position=\"stacked\">Telefono</ion-label>\n    <ion-input class=\"form-label-p\" formControlName=\"phone\" placeholder=\"Mi telefono es ...\"></ion-input>\n    <ion-icon src=\"../../assets/icon/phoneForm.svg\"slot=\"start\"></ion-icon>\n</ion-item>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-item  class=\"form\" lines=\"none\" >\n    <ion-label class=\"form-label\" position=\"stacked\">Correo electrónico</ion-label>\n    <ion-input class=\"form-label-p\" formControlName=\"email\" placeholder=\"Mi correo  es ...\"></ion-input>\n    <ion-icon src=\"../../assets/icon/mailForm.svg\"slot=\"start\"></ion-icon>\n</ion-item>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-item  class=\"form\" lines=\"none\" >\n    <ion-label class=\"form-label\" position=\"stacked\">Dirección</ion-label>\n    <ion-input class=\"form-label-p\" formControlName=\"address\" placeholder=\"Mi dirección es ...\"></ion-input>\n    <ion-icon src=\"../../assets/icon/locationForm.svg\"slot=\"start\"></ion-icon>\n</ion-item>\n</ion-col>\n<ion-col size=\"12\">\n  <ion-button class=\"save\" type=\"submit\" [disabled]=\"!this.myForm.valid\">Actualizar</ion-button>\n</ion-col>\n  </ion-row>\n</ion-grid>\n</form>\n\n<ion-popover [dismissOnSelect]=\"true\" [keepContentsMounted]=\"true\" trigger=\"open-popover\" >\n  <ng-template >\n    <ion-content class=\"ion-padding\"  style=\"--background: #f4f4f4;\">\n     <ion-list  style=\"background: #f4f4f4;padding:0px;\">\n      <ion-list-header style=\"--background: #5A4BB2;border-radius: 8px;\">\n          <ion-label align=\"center\" style=\"\">\n            <h2 style=\"font-size: 16px;font-weight: 500;color:#fff\">Configuración</h2>\n          </ion-label>\n      </ion-list-header>\n      <ion-item class=\"lista\" detail='false' button   (click)=\"changeForm()\" lines=\"none\">\n        <ion-label>\n          <p>Elegír otro Formulario</p>\n        </ion-label>\n        <ion-icon style=\"color:#5A4BB2;\" name=\"chevron-forward-outline\"></ion-icon>\n      </ion-item>\n      <ion-item class=\"lista\" detail='false' button   lines=\"none\">\n        <ion-label>\n          <p>Eliminar mis datos \n        </ion-label>\n        <ion-icon style=\"color:#5A4BB2;\" name=\"chevron-forward-outline\"></ion-icon>\n      </ion-item>\n      <ion-item  class=\"lista\" detail='false' button (click)=\"modalAboutUs()\"  lines=\"none\">\n        <ion-label>\n          <p>Sobre nosotros</p>\n        </ion-label>\n        <ion-icon style=\"color:#5A4BB2;\" name=\"chevron-forward-outline\"></ion-icon>\n      </ion-item>\n     </ion-list>\n    </ion-content>\n  </ng-template>\n</ion-popover>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_perfil_perfil_module_ts.js.map