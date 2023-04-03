"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_form-kid_form-kid_module_ts"],{

/***/ 9231:
/*!*****************************************************!*\
  !*** ./src/app/form-kid/form-kid-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormKidPageRoutingModule": () => (/* binding */ FormKidPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _form_kid_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-kid.page */ 974);




const routes = [
    {
        path: '',
        component: _form_kid_page__WEBPACK_IMPORTED_MODULE_0__.FormKidPage
    }
];
let FormKidPageRoutingModule = class FormKidPageRoutingModule {
};
FormKidPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormKidPageRoutingModule);



/***/ }),

/***/ 1001:
/*!*********************************************!*\
  !*** ./src/app/form-kid/form-kid.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormKidPageModule": () => (/* binding */ FormKidPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 8775);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _form_kid_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-kid-routing.module */ 9231);
/* harmony import */ var _form_kid_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-kid.page */ 974);








let FormKidPageModule = class FormKidPageModule {
};
FormKidPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _form_kid_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormKidPageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule
        ],
        declarations: [_form_kid_page__WEBPACK_IMPORTED_MODULE_1__.FormKidPage]
    })
], FormKidPageModule);



/***/ }),

/***/ 974:
/*!*******************************************!*\
  !*** ./src/app/form-kid/form-kid.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormKidPage": () => (/* binding */ FormKidPage)
/* harmony export */ });
/* harmony import */ var C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _form_kid_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-kid.page.html?ngResource */ 8762);
/* harmony import */ var _form_kid_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-kid.page.scss?ngResource */ 2742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _assets_datos_DinamicFormKid_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/datos/DinamicFormKid.json */ 8051);
/* harmony import */ var _models_Help__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Help */ 5080);
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/form.service */ 9048);




/* eslint-disable @typescript-eslint/quotes */

/* eslint-disable arrow-body-style */







let FormKidPage = class FormKidPage {
  constructor(router, formService, cd, loadingController) {
    this.router = router;
    this.formService = formService;
    this.cd = cd;
    this.loadingController = loadingController;
    this.dinamicForm = _assets_datos_DinamicFormKid_json__WEBPACK_IMPORTED_MODULE_3__;
    this.help = new _models_Help__WEBPACK_IMPORTED_MODULE_4__.Help();
    this.bandera = false;
    this.background = '#ffffff';
    this.backgroundChecked = '#FE910E';
    this.config = {
      allowTouchMove: false,
      autoHeight: true,
      preventInteractionOnTransition: true,
      speed: 250,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    };
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.background = '#ffffff';
    this.finalized = false;
  }

  next() {
    this.selected = false;
    this.swiper.swiperRef.slideNext(500);
  }

  prev() {
    if (this.swiper.swiperRef.activeIndex === 0) {
      this.close();
    }

    this.selected = false;
    this.swiper.swiperRef.slidePrev(500);
  }

  close() {
    this.selected = false;
    this.router.navigateByUrl('/principal/inicio');
  } //check


  filterItems(arr) {
    return arr.filter(el => el).map(e => e.isChecked).includes(true);
  }

  select(entry, arr, index) {
    if (!this.filterItems(arr.preguntas)) {
      arr.preguntas[index].isChecked = true;
    } else if (this.filterItems(arr.preguntas) && arr.multiple === true) {
      if (arr.preguntas[index].isChecked) {
        arr.preguntas[index].isChecked = false;
      } else {
        arr.preguntas[index].isChecked = true;
      }
    } else {
      arr.preguntas[index].isChecked = false;
    }

    this.selected = this.filterItems(arr.preguntas);

    if (this.swiper.swiperRef.activeIndex === 6 && entry.isChecked === true) {
      this.bandera = true;
      this.selected = true;
    } else {
      this.bandera = false;
    }
  }

  ageRange(ev) {
    this.selectedAge = ev.detail.value;
    this.selected = true;
  }

  backHome() {
    var _this = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        message: 'Cerrando Formulario...',
        spinner: 'circles'
      });
      yield loading.present();
      yield _this.clearCheckbox();
      _this.finalized = false;

      _this.swiper.swiperRef.destroy(true, true);

      loading.dismiss();
    })();
  }

  enviar() {
    var _this2 = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const formTemp = {
        victim: _this2.checked(_this2.dinamicForm[0]),
        reason: _this2.checked(_this2.dinamicForm[1]),
        agressor: _this2.checked(_this2.dinamicForm[2]),
        agressorGender: _this2.checked(_this2.dinamicForm[3]),
        age: _this2.selectedAge,
        gender: _this2.checked(_this2.dinamicForm[5]),
        place: _this2.checked(_this2.dinamicForm[6])
      };
      console.log(formTemp);
      const val = yield _this2.formService.setForm(formTemp);

      if (val) {
        _this2.swiper.swiperRef.slideNext(500);

        _this2.bandera = false;
        _this2.finalized = true;
      } else {
        _this2.finalized = true;
        _this2.bandera = false;
      }
    })();
  }

  onAfterTransitionEnd() {
    setTimeout(() => {
      this.background = '#5A4BB2';
    }, 300);
  }

  checked(array) {
    if (array.multiple === true) {
      return array.preguntas.filter(x => x.isChecked === true).map(x => {
        delete x.isChecked;
        delete x.id;
        return x.val;
      });
    } else {
      return array.preguntas.filter(x => x.isChecked === true)[0].val;
    }

    ;
  }

  ionViewWillLeave() {
    var _this3 = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingController.create({
        message: 'Cerrando Formulario...',
        spinner: 'circles'
      });
      yield loading.present();
      yield _this3.clearCheckbox();
      _this3.finalized = false;
      loading.dismiss();
      _this3.background = '#ffffff';

      _this3.swiper.swiperRef.destroy(true, true);
    })();
  }

  clearCheckbox() {
    var _this4 = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.dinamicForm.forEach(e => {
        if (e.key !== 'edad') {
          e.preguntas.map(preg => {
            preg.isChecked = false;
          });
        }
      });
    })();
  }

};

FormKidPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _services_form_service__WEBPACK_IMPORTED_MODULE_5__.FormService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}];

FormKidPage.propDecorators = {
  swiper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['swiper', {
      static: false
    }]
  }]
};
FormKidPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-form-kid',
  template: _form_kid_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_form_kid_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], FormKidPage);


/***/ }),

/***/ 2742:
/*!********************************************************!*\
  !*** ./src/app/form-kid/form-kid.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".swiper {\n  width: 100%;\n  height: auto;\n}\n\n.main-header {\n  height: 30vh;\n  width: 100%;\n  background: #5A4BB2;\n  box-shadow: 0 1px 10px #5A4BB2;\n  border-radius: 0 0 25px 25px;\n  padding-top: 0px;\n}\n\nion-content {\n  --background:#fff;\n}\n\nion-footer {\n  /*  background-color: #ad83b1; */\n  background: white;\n  --border: #ffff;\n}\n\n.list-form {\n  background: white;\n  margin-top: 40px;\n  margin-left: 55px;\n  margin-right: 55px;\n}\n\n.list-form-item {\n  --background: #fff;\n  --color: #000;\n  margin-bottom: 16px;\n  margin-top: 16px;\n  --border-color: transparent;\n  --border-width: 1px solid;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  --border-radius: 15px !important;\n  border-radius: 15px;\n  white-space: unset !important;\n  /*     ion-button::part(native){\n          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n          --border-radius: 15px;\n          border-radius: 15px;\n      }\n      ion-button::part(activate){\n          --border-radius: 15px;\n          border-radius: 15px;\n      } */\n}\n\n.list-form-item-label {\n  --border-radius: 8px;\n  padding-left: 25px;\n  padding-top: 6px;\n  padding-bottom: 7px;\n  white-space: unset !important;\n}\n\n.close-icon {\n  padding-top: 15px;\n  padding-right: 15px;\n  width: 35px;\n  height: 35px;\n}\n\n.swiper-slide {\n  overflow: visible !important;\n}\n\n.titulo {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 120%;\n  color: #FFFFFF;\n}\n\n.btn {\n  --background: #5A4BB2;\n  width: 60px;\n  height: 60px;\n  --border-radius: 60% !important;\n  font-size: 17px;\n}\n\n.btn-enviar {\n  --background: #FE910E;\n  font-size: 17px;\n  --border-radius: 15px;\n  --color:#fff;\n  width: 100%;\n  height: 100%;\n  --padding-bottom: 0.7rem;\n  --padding-top: 0.7rem;\n  font-size: 16px;\n}\n\nion-range::part(tick) {\n  background: #C7793C;\n}\n\nion-range::part(tick-active) {\n  background: #C7793C;\n}\n\nion-range::part(pin) {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #C7793C;\n  color: #fff;\n  border-radius: 50%;\n  transform: scale(1.01);\n  top: -28px;\n  min-width: 38px;\n  height: 38px;\n  transition: transform 120ms ease, #C7793C 120ms ease;\n}\n\nion-range::part(pin)::before {\n  content: none;\n}\n\nion-range::part(knob) {\n  background: #C7793C;\n}\n\nion-range::part(bar) {\n  background: #C7793C;\n}\n\nion-range::part(bar-active) {\n  background: #C7793C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0ta2lkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0M7RUFDRyxpQkFBQTtBQUFKOztBQUlBO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBQ0k7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0o7Ozs7Ozs7O1NBQUE7QUFTQTs7QUFBSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFFUjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBQ0ksNEJBQUE7QUFESjs7QUFHQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFLQTtFQUNJLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9EQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0FBRko7O0FBS0E7RUFDSSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksbUJBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0FBRkoiLCJmaWxlIjoiZm9ybS1raWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9Td2lwZXIgU3lsZXNcclxuLnN3aXBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIFxyXG59XHJcbi5tYWluLWhlYWRlcntcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzVBNEJCMjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggIzVBNEJCMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyNXB4IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gXHJcbn0gXHJcbiBpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDojZmZmO1xyXG4gfVxyXG4gXHJcbi8vRm9vdGVyIFxyXG5pb24tZm9vdGVyIHtcclxuICAgIC8qICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQ4M2IxOyAqL1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICAtLWJvcmRlcjogI2ZmZmY7XHJcbn1cclxuLmxpc3QtZm9ybXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgbWFyZ2luLXRvcDo0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDU1cHg7XHJcbiAgICAmLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtLWNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IFxyXG4gICAgLS1ib3JkZXItd2lkdGg6IDFweCBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuLyogICAgIGlvbi1idXR0b246OnBhcnQobmF0aXZlKXtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbjo6cGFydChhY3RpdmF0ZSl7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB9ICovXHJcbiAgICAmLWxhYmVse1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDoyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNsb3NlLWljb257XHJcbiAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4vL1N3aXBlciBDb250ZW50IFN0eWxlc1xyXG4uc3dpcGVyLXNsaWRle1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG4udGl0dWxvIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzVBNEJCMjtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA2MCUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmJ0bi1lbnZpYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkU5MTBFO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgLS1jb2xvcjojZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwLjdyZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwLjdyZW07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcblxyXG4vL3JhbmdlXHJcbmlvbi1yYW5nZTo6cGFydCh0aWNrKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzc3OTNDO1xyXG59XHJcblxyXG5pb24tcmFuZ2U6OnBhcnQodGljay1hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQ6ICNDNzc5M0M7XHJcbn1cclxuXHJcbmlvbi1yYW5nZTo6cGFydChwaW4pIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0M3NzkzQztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICAgIHRvcDogLTI4cHg7XHJcbiAgICBtaW4td2lkdGg6IDM4cHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTIwbXMgZWFzZSwgI0M3NzkzQyAxMjBtcyBlYXNlO1xyXG59XHJcblxyXG5pb24tcmFuZ2U6OnBhcnQocGluKTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1yYW5nZTo6cGFydChrbm9iKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzc3OTNDO1xyXG59XHJcblxyXG5pb24tcmFuZ2U6OnBhcnQoYmFyKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzc3OTNDO1xyXG59XHJcblxyXG5pb24tcmFuZ2U6OnBhcnQoYmFyLWFjdGl2ZSkge1xyXG4gICAgYmFja2dyb3VuZDogI0M3NzkzQztcclxufVxyXG5cclxuIFxyXG5cclxuIl19 */";

/***/ }),

/***/ 8762:
/*!********************************************************!*\
  !*** ./src/app/form-kid/form-kid.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content padding  scrollEvents=\"true\" fullscreen=\"true\" [style.--background]=\"background\">\n  <!--  (slideChange)=\"slideChanges()\" (slideChangeTransitionEnd)=\"onBeforeTransition()\" -->\n  <ion-grid style=\"padding:0px\">\n      <ion-row style=\"padding:0px\">\n          <ion-col size=\"12\" style=\"padding:0px\">\n              <swiper #swiper [config]=\"config\" *ngIf=\"dinamicForm\" (reachEnd)=\"onAfterTransitionEnd()\" >\n                    <ng-template swiperSlide *ngFor=\"let item of dinamicForm;index as i\">\n                      <div class=\"slide-container\"> \n                       <div class=\"main-header\"  align=\"end\">\n                          <span  style=\"color:#ffff\">\n                              <ion-icon name=\"close-circle-outline\"  class=\"close-icon\" (click)=\"close()\"></ion-icon>\n                          </span>\n                           <div class=\"ion-text-center col-titulo\">\n                                      <label><p class=\"titulo\">\n                                          {{i+1}} / 7\n                                      </p> <p class=\"titulo\">\n                                          {{item.title}}\n                                      </p></label>\n                                  </div>\n                           </div>\n                           <ion-col [ngSwitch]=\"item.type\" style=\"--background:#fff;\">\n                              <ion-list *ngSwitchCase=\"'range'\" lines=\"none\"  style=\"background:#ffffff;\"> \n                                              <ion-range (ionChange)=\"ageRange($event)\" [min]=\"0\" [max]=\"12\" [value]=\"5\" [pin]=\"true\" [snaps]=\"true\"></ion-range>        \n                              </ion-list>\n                              <ion-list *ngSwitchCase=\"'item'\" class=\"list-form\"  lines=\"none\">\n                                 <div *ngIf=\"item.icon === false\">\n                                <ion-item   [ngStyle]=\" {'--background': entry?.isChecked===true ? backgroundChecked : background}\" button class=\"list-form-item\" *ngFor=\"let entry of item.preguntas as Preguntas;index as i\" (click)=\"select(entry,item,i)\">\n                                      <ion-label [ngStyle]=\"{'--color': entry?.isChecked===true ? '#FFF' : '#000'}\" class=\"list-form-item-label\" > {{entry.val}}</ion-label>\n                                  </ion-item>\n   <!--                                <ion-item ngIf=\"icon === true\"  [ngStyle]=\" {'--background': entry?.isChecked===true ? backgroundChecked : background}\" button class=\"list-form-item\" *ngFor=\"let entry of item.preguntas as Preguntas;index as i\" (click)=\"select(entry,item,i)\">\n                                    <ion-label [ngStyle]=\"{'--color': entry?.isChecked===true ? '#FFF' : '#000'}\" class=\"list-form-item-label\" > {{entry.val}}</ion-label>\n                                    <ion-icon [src]=\"entry.icon\">\n\n                                    </ion-icon>\n                                </ion-item> -->\n                              </div> \n                              <div *ngIf=\"item.icon === true\">\n                                <ion-item   [ngStyle]=\" {'--border-color': entry?.isChecked===true ? backgroundChecked : background}\" button=\"clear\" class=\"list-form-item\" *ngFor=\"let entry of item.preguntas as Preguntas;index as i\" (click)=\"select(entry,item,i)\"> \n                                  <ion-label class=\"list-form-item-label\" > {{entry.val}}</ion-label><ion-icon slot=\"end\" [src]=\"entry.icon\" style=\"width: 55px;height: 55px;\"></ion-icon>\n                                </ion-item> \n                              </div> \n                              </ion-list>\n                          </ion-col>\n                              </div>\n                  </ng-template>  \n                  <ng-template swiperSlide>\n                      <div class=\"slide-container\" style=\"padding-top: 150px;\">\n                              <div class=\"ion-text-center\" style=\"height: 50%;\">\n                                  <ion-label class=\"ion-text-center\">\n                                      <ion-icon src=\"../../assets/icon/text.svg\" style=\"width:300px;height:178px;\"></ion-icon>         \n                                  </ion-label>\n                              </div>\n                              <div class=\"ion-text-center\" style=\"padding-top: 20px;\">\n                               <ion-thumbnail style=\"display: contents;\">\n                                      <ion-icon src=\"../../assets/icon/send.svg\" style=\"width:300px;height:250px;\"></ion-icon>         \n                                  </ion-thumbnail>\n                              </div>\n                              </div>\n                  </ng-template> \n              </swiper>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>  \n<ion-footer class=\"ion-no-border\" [style.background]=\"background\">\n  <ion-grid style=\"padding-left: 35px;\n  padding-right: 35px;\" >\n      <ion-row>\n          <ion-col size=\"12\" *ngIf=\"bandera\" class=\"ion-text-center\" >\n              <ion-button class=\"btn-enviar\" (click)=\"enviar()\">\n                  ENVIAR FORMULARIO\n              </ion-button>\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"finalized\" class=\"ion-text-center\" >\n              <ion-button class=\"btn-enviar\" (click)=\"backHome()\"  [routerLink]=\"['/principal/inicio']\">\n                  VOLVER AL MENU\n              </ion-button>\n          </ion-col>\n          <ion-col size=\"6\" *ngIf=\"!bandera && !finalized\" style=\"padding-right: 15px;\"  class=\"ion-text-end\">\n            <ion-button class=\"btn\" (click)=\"prev()\" [disabled]=\"selected\">\n                <ion-icon src=\"../../assets/icon/chevron-forward.svg\" style=\"width:35px ;height:34px;position: absolute;transform: rotate(180deg);\"></ion-icon>\n            </ion-button>\n        </ion-col>\n        <ion-col size=\"6\" *ngIf=\"!bandera && !finalized\" style=\"padding-left: 15px\" class=\"ion-text-start\">\n            <ion-button class=\"btn\" (click)=\"next()\" [disabled]=\"!selected\">\n                <ion-icon src=\"../../assets/icon/chevron-forward.svg\" style=\"width:35px ;height:34px;position: absolute;\"></ion-icon>\n            </ion-button>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-footer>";

/***/ }),

/***/ 8051:
/*!**********************************************!*\
  !*** ./src/assets/datos/DinamicFormKid.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"key":"victima","title":"¿Quién necesita ayuda?","type":"item","multiple":false,"icon":false,"preguntas":[{"id":1,"val":"Yo"},{"id":2,"val":"Mi hermano/a"},{"id":3,"val":"Mi amigo/a"},{"id":4,"val":"Otra persona"}]},{"key":"motivo","title":"¿Por qué necesitas ayuda? Podes elegir más de una","type":"item","multiple":true,"icon":true,"preguntas":[{"id":1,"val":"Hay amenazas o insultos","icon":"../../assets/icon/form/question1p0.svg"},{"id":2,"val":"Se prohíbe la comida","icon":"../../assets/icon/form/question1p1.svg"},{"id":3,"val":"Hay encierros por mucho tiempo","icon":"../../assets/icon/form/question1p2.svg"},{"id":4,"val":"Hay golpes,cortes,quemaduras,etc.","icon":"../../assets/icon/form/question1p3.svg"},{"id":5,"val":"Hay niños trabajando","icon":"../../assets/icon/form/question1p4.svg"},{"id":6,"val":"Hay manoseos en el cuerpo o abrazos no agradables","icon":"../../assets/icon/form/question1p5.svg"},{"id":8,"val":"Hacen ver cosas no agradables por la computadora","icon":"../../assets/icon/form/question1p6.svg"},{"id":8,"val":"Otra razón","icon":"../../assets/icon/form/interrogation.svg"}]},{"key":"agresor","type":"item","multiple":true,"icon":false,"title":"¿Quién te lastima o lastima a quien conocés?","preguntas":[{"id":1,"val":"Papá/Mamá"},{"id":2,"val":"Padrastro/Madrastra"},{"id":3,"val":"Tío/Tía"},{"id":4,"val":"Vecino/a"},{"id":5,"val":"Maestro/a"},{"id":6,"val":"Profesor/a"},{"id":7,"val":"Un amigo/a"},{"id":8,"val":"Un extraño/a"},{"id":9,"val":"Otro motivo. Especificar"},{"id":9,"val":"No lo quiero decir"}]},{"key":"genero_agresor","title":" Género de la persona agresora","type":"item","multiple":false,"icon":true,"preguntas":[{"id":1,"val":"Mujer","icon":"../../assets/icon/form/question4p1.svg"},{"id":2,"val":"Varon","icon":"../../assets/icon/form/question4p2.svg"}]},{"key":"edad","type":"range","multiple":false,"icon":false,"title":"Cuántos años tenés?"},{"key":"genero","type":"item","multiple":false,"icon":true,"title":"¿Cuál es tu género?","preguntas":[{"id":1,"val":"Mujer","icon":"../../assets/icon/form/question6p1.svg"},{"id":2,"val":"Varon","icon":"../../assets/icon/form/question6p2.svg"},{"id":3,"val":"Prefiero no decirlo","icon":"../../assets/icon/form/question6p3.svg"}]},{"key":"lugar","title":"¿Dónde pasa todo?","type":"item","multiple":true,"icon":true,"preguntas":[{"id":1,"val":"Mi casa","icon":"../../assets/icon/form/question7p1.svg"},{"id":2,"val":"Casa del vecino","icon":"../../assets/icon/form/question7p2.svg"},{"id":3,"val":"Casa de un familiar","icon":"../../assets/icon/form/question7p3.svg"},{"id":4,"val":"Escuela","icon":"../../assets/icon/form/question7p4.svg"},{"id":5,"val":"Club","icon":"../../assets/icon/form/question7p5.svg"},{"id":6,"val":"En internet/ instagram/ facebook/ juegos","icon":"../../assets/icon/form/question7p6.svg"},{"id":7,"val":"Otro. Especificar","icon":"../../assets/icon/form/interrogation.svg"}]}]');

/***/ })

}]);
//# sourceMappingURL=src_app_form-kid_form-kid_module_ts.js.map