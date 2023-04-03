"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_form_tab3_module_ts"],{

/***/ 1510:
/*!*********************************************!*\
  !*** ./src/app/form/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 4072);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 1871:
/*!*************************************!*\
  !*** ./src/app/form/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 4072);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 8775);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3-routing.module */ 1510);








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab3PageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 4072:
/*!***********************************!*\
  !*** ./src/app/form/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9267);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _assets_datos_DinamicForm_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/datos/DinamicForm.json */ 857);
/* harmony import */ var _models_Help__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Help */ 5080);
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/form.service */ 9048);




/* eslint-disable @typescript-eslint/quotes */

/* eslint-disable arrow-body-style */







let Tab3Page = class Tab3Page {
  constructor(router, formService, cd, loadingController) {
    this.router = router;
    this.formService = formService;
    this.cd = cd;
    this.loadingController = loadingController;
    this.dinamicForm = _assets_datos_DinamicForm_json__WEBPACK_IMPORTED_MODULE_3__;
    this.help = new _models_Help__WEBPACK_IMPORTED_MODULE_4__.Help();
    this.bandera = false;
    this.background = '#F4F4F4';
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
    this.background = '#F4F4F4';
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
      _this2.bandera = false;
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

        _this2.finalized = true;
      } else {
        _this2.finalized = true;
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
      _this3.background = '#F4F4F4';

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

Tab3Page.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _services_form_service__WEBPACK_IMPORTED_MODULE_5__.FormService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}];

Tab3Page.propDecorators = {
  swiper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['swiper', {
      static: false
    }]
  }]
};
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-tab3',
  template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewEncapsulation.None,
  styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab3Page);


/***/ }),

/***/ 8806:
/*!************************************************!*\
  !*** ./src/app/form/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".swiper {\n  width: 100%;\n  height: auto;\n}\n\n.main-header {\n  height: 30vh;\n  width: 100%;\n  background: #5A4BB2;\n  box-shadow: 0 1px 10px #5A4BB2;\n  border-radius: 0 0 25px 25px;\n  padding-top: 0px;\n}\n\nion-content {\n  --background:#F4F4F4;\n}\n\nion-footer {\n  /*  background-color: #ad83b1; */\n  background: #F4F4F4;\n  --border: #F4F4F4;\n}\n\n.list-form {\n  background: #F4F4F4;\n  margin-top: 40px;\n  margin-left: 55px;\n  margin-right: 55px;\n}\n\n.list-form-item {\n  --background: #fff;\n  --color: #000;\n  margin-bottom: 16px;\n  margin-top: 16px;\n  --border-color: #fff;\n  --border-style: none;\n  --border-width: 2px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  white-space: unset !important;\n}\n\n.list-form-item-label {\n  padding-left: 35px;\n  padding-top: 6px;\n  padding-bottom: 7px;\n  white-space: unset !important;\n}\n\n.close-icon {\n  padding-top: 15px;\n  padding-right: 15px;\n  width: 35px;\n  height: 35px;\n}\n\n.swiper-slide {\n  overflow: visible !important;\n}\n\n.titulo {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 120%;\n  color: #FFFFFF;\n}\n\n.btn {\n  --background: #5A4BB2;\n  width: 60px;\n  height: 60px;\n  --border-radius: 60% !important;\n  font-size: 17px;\n}\n\n.btn-enviar {\n  --background: #FE910E;\n  font-size: 17px;\n  --border-radius: 15px;\n  --color:#fff;\n  width: 100%;\n  height: 100%;\n  --padding-bottom: 0.7rem;\n  --padding-top: 0.7rem;\n  font-size: 16px;\n}\n\nion-range::part(tick) {\n  background: #C7793C;\n}\n\nion-range::part(tick-active) {\n  background: #C7793C;\n}\n\nion-range::part(pin) {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #C7793C;\n  color: #fff;\n  border-radius: 50%;\n  transform: scale(1.01);\n  top: -28px;\n  min-width: 38px;\n  height: 38px;\n  transition: transform 120ms ease, #C7793C 120ms ease;\n}\n\nion-range::part(pin)::before {\n  content: none;\n}\n\nion-range::part(knob) {\n  background: #C7793C;\n}\n\nion-range::part(bar) {\n  background: #C7793C;\n}\n\nion-range::part(bar-active) {\n  background: #C7793C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQztFQUNHLG9CQUFBO0FBQUo7O0FBSUE7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBQ0k7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUVSOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUE7RUFDSSw0QkFBQTtBQURKOztBQUdBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUtBO0VBQ0ksbUJBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0RBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksbUJBQUE7QUFGSiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vU3dpcGVyIFN5bGVzXHJcbi5zd2lwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBcclxufVxyXG4ubWFpbi1oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICM1QTRCQjI7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4ICM1QTRCQjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjVweCAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuIFxyXG59IFxyXG4gaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6I0Y0RjRGNDtcclxuIH1cclxuIFxyXG4vL0Zvb3RlciBcclxuaW9uLWZvb3RlciB7XHJcbiAgICAvKiAgYmFja2dyb3VuZC1jb2xvcjogI2FkODNiMTsgKi9cclxuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgICAtLWJvcmRlcjogI0Y0RjRGNDtcclxufVxyXG4ubGlzdC1mb3Jte1xyXG4gICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xyXG4gICAgJi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLS1jb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgJi1sYWJlbHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MzVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jbG9zZS1pY29ue1xyXG4gICAgcGFkZGluZy10b3A6MTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLy9Td2lwZXIgQ29udGVudCBTdHlsZXNcclxuLnN3aXBlci1zbGlkZXtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpdHVsbyB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1QTRCQjI7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5idG4tZW52aWFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZFOTEwRTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIC0tY29sb3I6I2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMC43cmVtO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMC43cmVtO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5cclxuLy9yYW5nZVxyXG5pb24tcmFuZ2U6OnBhcnQodGljaykge1xyXG4gICAgYmFja2dyb3VuZDogI0M3NzkzQztcclxufVxyXG5cclxuaW9uLXJhbmdlOjpwYXJ0KHRpY2stYWN0aXZlKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzc3OTNDO1xyXG59XHJcblxyXG5pb24tcmFuZ2U6OnBhcnQocGluKSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNDNzc5M0M7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbiAgICB0b3A6IC0yOHB4O1xyXG4gICAgbWluLXdpZHRoOiAzOHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEyMG1zIGVhc2UsICNDNzc5M0MgMTIwbXMgZWFzZTtcclxufVxyXG5cclxuaW9uLXJhbmdlOjpwYXJ0KHBpbik6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG59XHJcblxyXG5pb24tcmFuZ2U6OnBhcnQoa25vYikge1xyXG4gICAgYmFja2dyb3VuZDogI0M3NzkzQztcclxufVxyXG5cclxuaW9uLXJhbmdlOjpwYXJ0KGJhcikge1xyXG4gICAgYmFja2dyb3VuZDogI0M3NzkzQztcclxufVxyXG5cclxuaW9uLXJhbmdlOjpwYXJ0KGJhci1hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQ6ICNDNzc5M0M7XHJcbn1cclxuXHJcbiAiXX0= */";

/***/ }),

/***/ 9267:
/*!************************************************!*\
  !*** ./src/app/form/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content padding  scrollEvents=\"true\" fullscreen=\"true\" [style.--background]=\"background\">\n    <!--  (slideChange)=\"slideChanges()\" (slideChangeTransitionEnd)=\"onBeforeTransition()\" -->\n    <ion-grid style=\"padding:0px\">\n        <ion-row style=\"padding:0px\">\n            <ion-col size=\"12\" style=\"padding:0px\">\n                <swiper #swiper [config]=\"config\" *ngIf=\"dinamicForm\" (reachEnd)=\"onAfterTransitionEnd()\" >\n                      <ng-template swiperSlide *ngFor=\"let item of dinamicForm;index as i\">\n                        <div class=\"slide-container\"> \n                         <div class=\"main-header\"  align=\"end\">\n                            <span  style=\"color:#ffff\">\n                                <ion-icon name=\"close-circle-outline\"  class=\"close-icon\" (click)=\"close()\"></ion-icon>\n                            </span>\n                             <div class=\"ion-text-center col-titulo\">\n                                        <label><p class=\"titulo\">\n                                            {{i+1}} / 7\n                                        </p> <p class=\"titulo\">\n                                            {{item.title}}\n                                        </p></label>\n                                    </div>\n                             </div>\n                             <ion-col [ngSwitch]=\"item.type\">\n                                <ion-list *ngSwitchCase=\"'range'\" lines=\"none\"  style=\"background:#f4f4f4;\"> \n                                                <ion-range (ionChange)=\"ageRange($event)\" [min]=\"0\" [max]=\"18\" [value]=\"5\" [pin]=\"true\" [snaps]=\"true\"></ion-range>        \n                                </ion-list>\n                                <ion-list *ngSwitchCase=\"'item'\" class=\"list-form\"  lines=\"none\">\n                                    <ion-item [ngStyle]=\" {'--background': entry?.isChecked===true ? backgroundChecked : background}\" button class=\"list-form-item\" *ngFor=\"let entry of item.preguntas as Preguntas;index as i\" (click)=\"select(entry,item,i)\">\n                                        <ion-label [ngStyle]=\"{'--color': entry?.isChecked===true ? '#FFF' : '#000'}\" class=\"list-form-item-label\" > {{entry.val}}</ion-label>\n                                    </ion-item>\n                                </ion-list>\n                            </ion-col>\n                                </div>\n                    </ng-template>  \n                    <ng-template swiperSlide>\n                        <div class=\"slide-container\" style=\"padding-top: 150px;\">\n                                <div class=\"ion-text-center\" style=\"height: 50%;\">\n                                    <ion-label class=\"ion-text-center\">\n                                        <ion-icon src=\"../../assets/icon/text.svg\" style=\"width:300px;height:178px;\"></ion-icon>         \n                                    </ion-label>\n                                </div>\n                                <div class=\"ion-text-center\" style=\"padding-top: 20px;\">\n                                 <ion-thumbnail style=\"display: contents;\">\n                                        <ion-icon src=\"../../assets/icon/send.svg\" style=\"width:300px;height:250px;\"></ion-icon>         \n                                    </ion-thumbnail>\n                                </div>\n                                </div>\n                    </ng-template> \n                </swiper>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>  \n<ion-footer class=\"ion-no-border\" [style.background]=\"background\">\n    <ion-grid style=\"padding-left: 35px;\n    padding-right: 35px;\" >\n        <ion-row>\n            <ion-col size=\"12\" *ngIf=\"bandera\" class=\"ion-text-center\" >\n                <ion-button class=\"btn-enviar\" (click)=\"enviar()\">\n                    ENVIAR FORMULARIO\n                </ion-button>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"finalized\" class=\"ion-text-center\" >\n                <ion-button class=\"btn-enviar\" (click)=\"backHome()\"  [routerLink]=\"['/principal/inicio']\">\n                    VOLVER AL MENU\n                </ion-button>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"!bandera && !finalized\" style=\"padding-right: 15px;\"  class=\"ion-text-end\">\n                <ion-button class=\"btn\" (click)=\"prev()\" [disabled]=\"selected\">\n                    <ion-icon src=\"../../assets/icon/chevron-forward.svg\" style=\"width:35px ;height:34px;position: absolute;transform: rotate(180deg);\"></ion-icon>\n                </ion-button>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"!bandera && !finalized\" style=\"padding-left: 15px\" class=\"ion-text-start\">\n                <ion-button class=\"btn\" (click)=\"next()\" [disabled]=\"!selected\">\n                    <ion-icon src=\"../../assets/icon/chevron-forward.svg\" style=\"width:35px ;height:34px;position: absolute;\"></ion-icon>\n                </ion-button>\n            </ion-col>\n\n        </ion-row>\n    </ion-grid>\n</ion-footer>";

/***/ }),

/***/ 857:
/*!*******************************************!*\
  !*** ./src/assets/datos/DinamicForm.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"key":"victima","title":"¿Para quién estas pidiendo ayuda?","type":"item","multiple":false,"preguntas":[{"id":1,"val":"Para mi"},{"id":2,"val":"Para mi hermano/a"},{"id":3,"val":"Para mi vecino/a"},{"id":4,"val":"Otro"}]},{"key":"motivo","title":"Indicá el motivo por el cuál está pidiendo ayuda","type":"item","multiple":true,"preguntas":[{"id":1,"val":"Amenazas"},{"id":2,"val":"Insultos diarios"},{"id":3,"val":"Castigos prohibiendo comida"},{"id":4,"val":"Encierros por mucho tiempo"},{"id":5,"val":"Tocamientos, manoseos, abrazos indeseados"},{"id":6,"val":"Hacer o ver cosas de manera obligada"},{"id":8,"val":"Otro motivo. Especificar"}]},{"key":"agresor","type":"item","multiple":true,"title":"¿Quién es la persona agresora?","preguntas":[{"id":1,"val":"Papá/Mamá"},{"id":2,"val":"Padrastro/Madrastra"},{"id":3,"val":"Tío/Tía"},{"id":4,"val":"Vecino/a"},{"id":5,"val":"Maestro/a"},{"id":6,"val":"Profesor/a"},{"id":7,"val":"Un amigo/a"},{"id":8,"val":"Un extraño/a"},{"id":9,"val":"Otro motivo. Especificar"}]},{"key":"genero_agresor","title":" Género de la persona agresora","type":"item","multiple":false,"preguntas":[{"id":1,"val":"Mujer"},{"id":2,"val":"Varon"}]},{"key":"edad","type":"range","multiple":false,"title":"Cuantos años tenes?"},{"key":"genero","type":"item","multiple":false,"title":"Indica tu genero","preguntas":[{"id":1,"val":"Mujer"},{"id":2,"val":"Varon"},{"id":3,"val":"Prefiero no decirlo"},{"id":4,"val":"Otro. especificar"}]},{"key":"lugar","title":"Lugar en que ocurre la violencia","type":"item","multiple":true,"preguntas":[{"id":1,"val":"Mi casa"},{"id":2,"val":"Casa del vecino"},{"id":3,"val":"Casa de un familiar"},{"id":4,"val":"Escuela"},{"id":5,"val":"Club"},{"id":6,"val":"Otro. Especificar"}]}]');

/***/ })

}]);
//# sourceMappingURL=src_app_form_tab3_module_ts.js.map