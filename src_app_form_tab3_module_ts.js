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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 4072);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/angular */ 8775);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 1510);










let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_9__.SwiperModule
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9267);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _assets_datos_DinamicForm_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/datos/DinamicForm.json */ 857);




/* eslint-disable arrow-body-style */






let Tab3Page = class Tab3Page {
  constructor(router, cd, loadingController) {
    this.router = router;
    this.cd = cd;
    this.loadingController = loadingController;
    this.dinamicForm = _assets_datos_DinamicForm_json__WEBPACK_IMPORTED_MODULE_4__;
    this.bandera = false;
    this.background = '#fff';
    this.backgroundChecked = '#FE910E';
    this.config = {
      allowTouchMove: false,
      autoHeight: true,
      preventInteractionOnTransition: true,
      speed: 3200
    };
  }

  ngOnInit() {
    /*     this.fillCheckbox(this.dinamicForm); */
    swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_3__.EffectCoverflow, swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_3__.Manipulation]);
    this.finalized = false;
    console.log(this.dinamicForm);
  }
  /*   ionViewWillEnter(){
    }
    onBeforeTransition() {
    } */


  next() {
    this.swiper.swiperRef.slideNext(500);
  }

  close() {
    this.router.navigateByUrl('/principal/inicio');
  }

  filterItems(arr) {
    return arr.filter(el => el).map(e => e.isChecked).includes(true);
  }

  select(entry, arr, index) {
    arr[index].isChecked = !arr[index].isChecked;
    console.log(arr);
    /*   if(!entry.isChecked) { this.isckecked = false; }
      else {this.isckecked = true;} */

    if (this.filterItems(arr)) {
      this.isckecked = true;
    } else {
      this.isckecked = false;
    }

    if (this.swiper.swiperRef.activeIndex === 6 && entry.isChecked === true) {
      this.bandera = true;
    } else {
      this.bandera = false;
    }
  }

  ageRange(ev) {
    this.selectedAge = ev.detail.value;
  }

  enviar() {
    this.bandera = false;
    this.swiper.swiperRef.slideNext(500);
    this.finalized = true;
  }

  checked(array) {
    return array.filter(x => x.isChecked === true).map(x => {
      delete x.isChecked;
      delete x.id;
      return x;
    });
  }

  ionViewWillLeave() {
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

  clearCheckbox() {
    /*   this.castigos.map(x => x.isChecked = false);
      this.victima.map(x => x.isChecked = false);
      this.generoAgresor.map(x => x.isChecked = false);
      this.motivos.map(x => x.isChecked = false);
      this.agresor.map(x => x.isChecked = false);
      this.lugar.map(x => x.isChecked = false);
      this.genero.map(x => x.isChecked = false); */

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

};

Tab3Page.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}];

Tab3Page.propDecorators = {
  swiper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['swiper', {
      static: false
    }]
  }]
};
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-tab3',
  template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
  styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab3Page);


/***/ }),

/***/ 8806:
/*!************************************************!*\
  !*** ./src/app/form/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".swiper {\n  width: 100%;\n  height: auto;\n}\n\n.main-header {\n  height: 30vh;\n  width: 100%;\n  background: #5A4BB2;\n  box-shadow: 0 1px 10px #5A4BB2;\n  border-radius: 0 0 25px 25px;\n  padding-top: 0px;\n}\n\nion-content {\n  --background:#F4F4F4;\n}\n\nion-footer {\n  /*  background-color: #ad83b1; */\n  background: #F4F4F4;\n  --border: #F4F4F4;\n}\n\n.list-form {\n  background: #F4F4F4;\n  margin-top: 40px;\n  margin-left: 55px;\n  margin-right: 55px;\n}\n\n.list-form-item {\n  --background: #fff;\n  --color: #000;\n  margin-bottom: 16px;\n  margin-top: 16px;\n  --border-color: #fff;\n  --border-style: dashed;\n  --border-width: 2px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  white-space: unset !important;\n}\n\n.list-form-item-label {\n  padding-left: 35px;\n  padding-top: 6px;\n  padding-bottom: 7px;\n  white-space: unset !important;\n}\n\n.close-icon {\n  padding-top: 15px;\n  padding-right: 15px;\n  width: 35px;\n  height: 35px;\n}\n\n.swiper-slide {\n  overflow: visible !important;\n}\n\n.titulo {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 120%;\n  color: #FFFFFF;\n}\n\n.btn {\n  --background: #5A4BB2;\n  width: 60px;\n  height: 60px;\n  --border-radius: 60% !important;\n  font-size: 17px;\n}\n\n.btn-enviar {\n  --background: #5A4BB2;\n  font-size: 17px;\n  --border-radius: 15px;\n  --color:#fff;\n  width: 100%;\n  height: 100%;\n  --padding-bottom: 0.5rem;\n  --padding-top: 0.5rem;\n  font-size: 16px;\n}\n\nion-range::part(tick) {\n  background: #C7793C;\n}\n\nion-range::part(tick-active) {\n  background: #C7793C;\n}\n\nion-range::part(pin) {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #C7793C;\n  color: #fff;\n  border-radius: 50%;\n  transform: scale(1.01);\n  top: -28px;\n  min-width: 38px;\n  height: 38px;\n  transition: transform 120ms ease, #C7793C 120ms ease;\n}\n\nion-range::part(pin)::before {\n  content: none;\n}\n\nion-range::part(knob) {\n  background: #C7793C;\n}\n\nion-range::part(bar) {\n  background: #C7793C;\n}\n\nion-range::part(bar-active) {\n  background: #C7793C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQztFQUNHLG9CQUFBO0FBQUo7O0FBSUE7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBQ0k7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUVSOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUE7RUFDSSw0QkFBQTtBQURKOztBQUdBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUtBO0VBQ0ksbUJBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0RBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksbUJBQUE7QUFGSiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vU3dpcGVyIFN5bGVzXHJcbi5zd2lwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBcclxufVxyXG4ubWFpbi1oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICM1QTRCQjI7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4ICM1QTRCQjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjVweCAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuIFxyXG59IFxyXG4gaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6I0Y0RjRGNDtcclxuIH1cclxuIFxyXG4vL0Zvb3RlciBcclxuaW9uLWZvb3RlciB7XHJcbiAgICAvKiAgYmFja2dyb3VuZC1jb2xvcjogI2FkODNiMTsgKi9cclxuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgICAtLWJvcmRlcjogI0Y0RjRGNDtcclxufVxyXG4ubGlzdC1mb3Jte1xyXG4gICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xyXG4gICAgJi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLS1jb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAmLWxhYmVse1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDozNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNsb3NlLWljb257XHJcbiAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4vL1N3aXBlciBDb250ZW50IFN0eWxlc1xyXG4uc3dpcGVyLXNsaWRle1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG4udGl0dWxvIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzVBNEJCMjtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA2MCUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmJ0bi1lbnZpYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNUE0QkIyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgLS1jb2xvcjojZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcblxyXG4vL3JhbmdlXHJcbmlvbi1yYW5nZTo6cGFydCh0aWNrKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzc3OTNDO1xyXG59XHJcblxyXG5pb24tcmFuZ2U6OnBhcnQodGljay1hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQ6ICNDNzc5M0M7XHJcbn1cclxuXHJcbmlvbi1yYW5nZTo6cGFydChwaW4pIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0M3NzkzQztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICAgIHRvcDogLTI4cHg7XHJcbiAgICBtaW4td2lkdGg6IDM4cHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTIwbXMgZWFzZSwgI0M3NzkzQyAxMjBtcyBlYXNlO1xyXG59XHJcblxyXG5pb24tcmFuZ2U6OnBhcnQocGluKTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1yYW5nZTo6cGFydChrbm9iKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzc3OTNDO1xyXG59XHJcblxyXG5pb24tcmFuZ2U6OnBhcnQoYmFyKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzc3OTNDO1xyXG59XHJcblxyXG5pb24tcmFuZ2U6OnBhcnQoYmFyLWFjdGl2ZSkge1xyXG4gICAgYmFja2dyb3VuZDogI0M3NzkzQztcclxufVxyXG5cclxuICJdfQ== */";

/***/ }),

/***/ 9267:
/*!************************************************!*\
  !*** ./src/app/form/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content padding  scrollEvents=\"true\" fullscreen=\"true\">\n    <!--  (slideChange)=\"slideChanges()\" (slideChangeTransitionEnd)=\"onBeforeTransition()\" -->\n    <ion-grid style=\"padding:0px\">\n        <ion-row style=\"padding:0px\">\n            <ion-col size=\"12\" style=\"padding:0px\">\n                <swiper #swiper [config]=\"config\">\n                     <ng-template swiperSlide *ngFor=\"let item of dinamicForm;index as i\">\n                        <div class=\"slide-container\"> \n                         <div class=\"main-header\"  align=\"end\">\n                            <span  style=\"color:#ffff\">\n                                <ion-icon name=\"close-circle-outline\"  class=\"close-icon\" (click)=\"close()\"></ion-icon>\n                            </span>\n                             <div class=\"ion-text-center col-titulo\">\n                                        <label><p class=\"titulo\">\n                                            {{i+1}} / 7\n                                        </p> <p class=\"titulo\">\n                                            {{item.title}}\n                                        </p></label>\n                                    </div>\n                             </div>\n                             <ion-col [ngSwitch]=\"item.type\">\n                                <ion-list *ngSwitchCase=\"'range'\" lines=\"none\"  style=\"background:#f4f4f4;\"> \n                                                <ion-range (ionChange)=\"ageRange($event)\" [min]=\"0\" [max]=\"15\" [value]=\"5\" [pin]=\"true\" [snaps]=\"true\"></ion-range>        \n                                </ion-list>\n                                <ion-list *ngSwitchCase=\"'item'\" class=\"list-form\"  lines=\"none\">\n                                    <ion-item [ngStyle]=\" {'--background': entry?.isChecked===true ? backgroundChecked : background}\" button class=\"list-form-item\" *ngFor=\"let entry of item.preguntas as Preguntas;index as i\" (click)=\"select(entry,item.preguntas,i)\">\n                                        <ion-label [ngStyle]=\"{'--color': entry?.isChecked===true ? '#FFF' : '#000'}\" class=\"list-form-item-label\" > {{entry.val}}</ion-label>\n                                    </ion-item>\n                                </ion-list>\n                            </ion-col>\n                                </div>\n                    </ng-template> \n                    <ng-template swiperSlide>\n                        <div class=\"slide-container\" style=\"padding-top: 160px;\">\n                                <div class=\"ion-text-center\" style=\"height: 50%;\">\n                                    <ion-label class=\"ion-text-center\">\n                                        <ion-icon src=\"../../assets/icon/text.svg\" style=\"width:300px;height:178px;\"></ion-icon>         \n                                    </ion-label>\n                                </div>\n                                <div class=\"ion-text-center\" style=\"height: 50%;\" >\n                                    <ion-label class=\"ion-text-center\">\n                                        <ion-icon src=\"../../assets/icon/hands.svg\" style=\"width:300px;height:250px;\"></ion-icon>         \n                                    </ion-label>\n                                </div>\n                                </div>\n                    </ng-template> \n                </swiper>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>  \n<ion-footer class=\"ion-no-border\">\n    <ion-grid style=\"padding-left: 35px;\n    padding-right: 35px;\">\n        <ion-row>\n            <ion-col size=\"12\" *ngIf=\"bandera\" class=\"ion-text-center\" >\n                <ion-button class=\"btn-enviar\" (click)=\"enviar()\">\n                    ENVIAR FORMULARIO\n                </ion-button>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"finalized\" class=\"ion-text-center\" >\n                <ion-button class=\"btn-enviar\" (click)=\"enviar()\"  [routerLink]=\"['/principal/inicio']\">\n                    VOLVER AL MENU\n                </ion-button>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"!bandera && !finalized\" class=\"ion-text-center\">\n                <ion-button class=\"btn\" (click)=\"next()\">\n                    <ion-icon src=\"../../assets/icon/chevron-forward.svg\" style=\"width:35px ;height:34px;position: absolute;\"></ion-icon>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>";

/***/ }),

/***/ 857:
/*!*******************************************!*\
  !*** ./src/assets/datos/DinamicForm.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"key":"victima","title":"¿Para quién estas pidiendo ayuda?","type":"item","preguntas":[{"id":1,"val":"Para mi"},{"id":2,"val":"Para mi hermano/a"},{"id":3,"val":"Para mi vecino/a"},{"id":4,"val":"Otro"}]},{"key":"motivo","title":"Indicá el motivo por el cuál está pidiendo ayuda","type":"item","preguntas":[{"id":1,"val":"Amenazas"},{"id":2,"val":"Insultos diarios"},{"id":3,"val":"Castigos prohibiendo comida"},{"id":4,"val":"Encierros por mucho tiempo"},{"id":5,"val":"Tocamientos, manoseos, abrazos indeseados"},{"id":6,"val":"Hacer o ver cosas de manera obligada"},{"id":8,"val":"Otro motivo. Especificar"}]},{"key":"agresor","type":"item","title":"¿Quién es la persona agresora?","preguntas":[{"id":1,"val":"Papá/Mamá"},{"id":2,"val":"Padrastro/Madrastra"},{"id":3,"val":"Tío/Tía"},{"id":4,"val":"Vecino/a"},{"id":5,"val":"Maestro/a"},{"id":6,"val":"Profesor/a"},{"id":7,"val":"Un amigo/a"},{"id":8,"val":"Un extraño/a"},{"id":9,"val":"Otro motivo. Especificar"}]},{"key":"genero_agresor","title":" Género de la persona agresora","type":"item","preguntas":[{"id":1,"val":"Mujer"},{"id":2,"val":"Varon"}]},{"key":"edad","type":"range","title":"Cuantos años tenes?"},{"key":"genero","type":"item","title":"Indica tu genero","preguntas":[{"id":1,"val":"Mujer"},{"id":2,"val":"Varon"},{"id":3,"val":"Prefiero no decirlo"},{"id":4,"val":"Otro. especificar"}]},{"key":"lugar","title":"Lugar en que ocurre la violencia","type":"item","preguntas":[{"id":1,"val":"Mi casa"},{"id":2,"val":"Casa del vecino"},{"id":3,"val":"Casa de un familiar"},{"id":4,"val":"Escuela"},{"id":5,"val":"Club"},{"id":6,"val":"Otro. Especificar"}]}]');

/***/ })

}]);
//# sourceMappingURL=src_app_form_tab3_module_ts.js.map