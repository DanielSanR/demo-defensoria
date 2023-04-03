"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_onboarding_onboarding_module_ts"],{

/***/ 954:
/*!*********************************************************!*\
  !*** ./src/app/onboarding/onboarding-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingPageRoutingModule": () => (/* binding */ OnboardingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding.page */ 513);




const routes = [
    {
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_0__.OnboardingPage
    }
];
let OnboardingPageRoutingModule = class OnboardingPageRoutingModule {
};
OnboardingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OnboardingPageRoutingModule);



/***/ }),

/***/ 3970:
/*!*************************************************!*\
  !*** ./src/app/onboarding/onboarding.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingPageModule": () => (/* binding */ OnboardingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding-routing.module */ 954);
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding.page */ 513);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 8775);








let OnboardingPageModule = class OnboardingPageModule {
};
OnboardingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_0__.OnboardingPageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule
        ],
        declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_1__.OnboardingPage]
    })
], OnboardingPageModule);



/***/ }),

/***/ 513:
/*!***********************************************!*\
  !*** ./src/app/onboarding/onboarding.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingPage": () => (/* binding */ OnboardingPage)
/* harmony export */ });
/* harmony import */ var C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _onboarding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding.page.html?ngResource */ 3455);
/* harmony import */ var _onboarding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onboarding.page.scss?ngResource */ 4121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_Geolocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/Geolocation */ 824);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_latlng_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/latlng.service */ 5993);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/storage.service */ 1188);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toast.service */ 4465);












swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_3__.EffectFade]);
let OnboardingPage = class OnboardingPage {
  constructor(router, cd, alertController, toastService, storageService, coordsService, loadingController) {
    this.router = router;
    this.cd = cd;
    this.alertController = alertController;
    this.toastService = toastService;
    this.storageService = storageService;
    this.coordsService = coordsService;
    this.loadingController = loadingController;
    this.key = 'AAPK895f48d83b5543ab80c5d058d510d5971uhYgfFtvdNCIB-no6TgvFEbUE-H-h6ZfPfs9GOWCpAtsp9cTGA8zFsd2DiPWwPf';
    this.config = {
      allowTouchMove: false,
      keyboard: true,
      pagination: {
        type: 'progressbar'
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 100000
      }
    };
  }

  ngOnInit() {
    this.background = '#F4F4F4';
  }

  next() {
    this.swiper.swiperRef.slideNext(500);
  }

  getLocation() {
    var _this = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Ubicaciónn rechazada',
        message: 'Debido a que no se tienen los permisos necesarios, tendras una ubicación anonima.',
        buttons: ['OK']
      });
      yield _capacitor_Geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.getCurrentPosition({
        enableHighAccuracy: true
      }).then(resp => {
        console.log(resp);
        _this.latitude = resp.coords.latitude;
        _this.longitude = resp.coords.longitude;

        _this.swiper.swiperRef.slideNext(500);
      }).catch(error => {
        (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield alert.present();
        })();
      });
      const loading = yield _this.loadingController.create();
      yield loading.present();

      _this.coordsService.setCoords([_this.latitude, _this.longitude]).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_) {
          yield loading.dismiss();
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }()
      /* ,
      async (res) =>
      {
      const a = await this.alertController.create({
        header: 'err',
        message: 'err',
        buttons: ['OK'],
      });
      await a.present();
      } */
      );
    })();
  }

  save() {
    var _this2 = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.selected !== null) {
        yield _this2.storageService.setStorage('selected', _this2.selected);
        yield _this2.storageService.setOnboarding();

        _this2.router.navigate(['/principal/inicio']);
      }
    })();
  }

  select(event) {
    console.log(event);
    this.selected = event;
  }

  skip() {
    this.swiper.swiperRef.slideNext(500);
  }

  ngOnDestroy() {
    this.swiper.swiperRef.destroy();
  }

  onAfterTransition() {
    if (this.swiper.swiperRef.activeIndex === 2) {
      this.background = 'url("../../assets/images/kid-teen.svg") no-repeat center center / cover';
    }
  }

};

OnboardingPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}, {
  type: _services_latlng_service__WEBPACK_IMPORTED_MODULE_5__.CoordsService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}];

OnboardingPage.propDecorators = {
  swiper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['swiper', {
      static: false
    }]
  }]
};
OnboardingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-onboarding',
  template: _onboarding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_onboarding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], OnboardingPage);


/***/ }),

/***/ 5993:
/*!********************************************!*\
  !*** ./src/app/services/latlng.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoordsService": () => (/* binding */ CoordsService)
/* harmony export */ });
/* harmony import */ var C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 1188);
/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.service */ 9048);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);


/* eslint-disable quote-props */

/* eslint-disable @typescript-eslint/quotes */

/* eslint-disable @typescript-eslint/member-delimiter-style */








let CoordsService = class CoordsService {
  constructor(http, storageService, formService) {
    this.http = http;
    this.storageService = storageService;
    this.formService = formService;
    this.coords = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this.optionChosed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.url;
  }

  loadUser() {
    var _this = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.storageService.getStorage2('latlng').then(res => {
        console.log(res);
      });
    })();
  }

  setCoords(latlng) {
    console.log(latlng);
    const data = {
      "latitude": latlng[0],
      "longitude": latlng[1]
    };
    const b = this.storageService.saveStorage('latlng', latlng);
    this.formService.update(latlng, 'latlng');
    return this.http.post(`${this.url}/help`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(res => {
      const id = this.storageService.setStorage('id', res.nameId);
      this.formService.setId(id);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(id);
    })
    /* ,
    tap(_ => {
    console.log("datos guardados");
    }) */
    );
  }

  getCoords() {
    var _this2 = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let isData;
      yield _this2.storageService.hasValue('latlng').then(res => {
        isData = res;
      });

      if (isData) {
        _this2.coords.next(yield _this2.storageService.getStorage2('latlng'));

        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    })();
  }

  getData() {
    return this.coords.asObservable();
  }

};

CoordsService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
}, {
  type: _form_service__WEBPACK_IMPORTED_MODULE_2__.FormService
}];

CoordsService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: 'root'
})], CoordsService);


/***/ }),

/***/ 7243:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/Geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 824:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/Geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 7243);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_Geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 3569)).then(m => new m.GeolocationWeb())
});



/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');


/***/ }),

/***/ 4121:
/*!************************************************************!*\
  !*** ./src/app/onboarding/onboarding.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --background: #F4F4F4;\n  font-family: \"Open Sans\";\n  font-style: normal;\n}\n\n.swiper {\n  width: 100%;\n  height: 100%;\n}\n\nion-content {\n  background: #F4F4F4;\n  --background:url('kid-teen.svg') no-repeat center center / cover;\n}\n\n.Grid-first {\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n}\n\n.Grid-first-icon {\n  height: 32px;\n  width: 32px;\n}\n\n.Grid-first-col-text {\n  padding-top: 0.5rem;\n}\n\n.Grid-first-col-text-title-h1 {\n  margin-top: 0rem !important;\n  font-size: 1.2rem !important;\n  font-weight: 700;\n}\n\n.Grid-first-col-text-title-p {\n  text-align: justify;\n  margin-top: 0.5rem !important;\n  font-weight: 400;\n  font-size: 0.9rem !important;\n  line-height: 120%;\n}\n\n.Grid-first-row {\n  flex-grow: 1;\n}\n\n.Grid-first-row-col {\n  padding-top: 1rem;\n}\n\n.Grid-first-row-col-icon-onboarding {\n  height: 200px;\n  width: 300px;\n}\n\n.Grid-first-row-col-icon-location-onboarding {\n  height: 300px;\n  width: 300px;\n}\n\n.Grid-first-col-tyc-text {\n  color: #7B7676;\n  font-weight: 400;\n  font-size: 0.8rem;\n  line-height: 140%;\n}\n\n.Grid-first-col-tyc-text-note {\n  font-size: 0.6rem;\n}\n\n.Grid-first-button-row {\n  text-align: center;\n}\n\n.Grid-first-button-row-col-nextBtn {\n  font-weight: 100;\n  text-transform: none;\n  --background:#FE910E !important;\n  --color:#fff;\n  width: 100%;\n  height: 100%;\n  --padding-bottom: 0.5rem;\n  --border-radius: 0.2rem;\n  --padding-top: 0.5rem;\n  font-size: 1rem;\n}\n\n.Grid-first-button-row-col-skipBtn {\n  font-weight: 500;\n  text-transform: none;\n  --color:#FE910E;\n  font-size: 0.9rem;\n}\n\n.Grid-choice {\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n}\n\n.Grid-choice-row {\n  text-align: center;\n  padding-top: 50px !important;\n  height: 100%;\n}\n\n.Grid-choice-row-col-Btn {\n  width: 80%;\n  height: auto;\n  --padding-top:11px;\n  --padding-bottom:11px;\n  font-weight: 400;\n  font-size: 18px;\n  --border-radius: 15px;\n  --background: #fff;\n  color: #000;\n  --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);\n  --ripple-color: #FE910E;\n}\n\n.Grid-choice-row ion-button:hover::part(native), .Grid-choice-row ion-button:focus::part(native) {\n  --background:#FE910E;\n  color: #fff !important;\n}\n\n.Grid-choice .Arrow-Btn {\n  height: 49px !important;\n  width: 49px !important;\n  --background: #FE910E;\n  --border-radius: 50%;\n}\n\n.Grid-choice .Arrow-Btn-Icon {\n  height: 35px;\n  width: 35px;\n  position: absolute;\n}\n\n@media (max-width: 376px) {\n  .Grid-choice .Grid-choice-row-col-Btn {\n    font-size: 16px;\n  }\n}\n\n/* \nion-grid {\n    --ion-grid-padding: 20px;\n\n    --ion-grid-padding-xs: 20px;\n    --ion-grid-padding-sm: 20px;\n    --ion-grid-padding-md: 20px;\n    --ion-grid-padding-lg: 20px;\n    --ion-grid-padding-xl: 20px;\n\n    --ion-grid-column-padding: 30px;\n\n    --ion-grid-column-padding-xs: 30px;\n    --ion-grid-column-padding-sm: 30px;\n    --ion-grid-column-padding-md: 30px;\n    --ion-grid-column-padding-lg: 30px;\n    --ion-grid-column-padding-xl: 30px;\n  } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnRUFBQTtBQUdKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUNJO0VBQ0ksWUFBQTtFQUFZLFdBQUE7QUFFcEI7O0FBQUk7RUFDSSxtQkFBQTtBQUVSOztBQUFZO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBRWhCOztBQUFZO0VBQ0ksbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQUVoQjs7QUFFSTtFQUNJLFlBQUE7QUFBUjs7QUFDUTtFQUNJLGlCQUFBO0FBQ1o7O0FBQVk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUVoQjs7QUFBWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRWhCOztBQUdRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQURaOztBQUVZO0VBQ0ksaUJBQUE7QUFBaEI7O0FBSUk7RUFDSSxrQkFBQTtBQUZSOztBQUdRO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQURaOztBQUdRO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURaOztBQVFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUxKOztBQU1JO0VBQ0ksa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUFKUjs7QUFLUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtBQUhaOztBQU13QjtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFKeEI7O0FBU0M7RUFDRyx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQVBKOztBQVFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQU5SOztBQVVHO0VBQ0M7SUFDSSxlQUFBO0VBUk47QUFDRjs7QUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQUEiLCJmaWxlIjoib25ib2FyZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIC0tYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG4uc3dpcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgICAtLWJhY2tncm91bmQ6dXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9raWQtdGVlbi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuXHJcbn1cclxuXHJcbi8vUHJpbWVyIHNsaWRlclxyXG4vL1NUQVJUIEdSSUQgRk9SIFNMSURFUiAxIEFORCAyXHJcbi5HcmlkLWZpcnN0e1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAmLWljb257XHJcbiAgICAgICAgaGVpZ2h0OjMycHg7d2lkdGg6IDMycHg7XHJcbiAgICB9XHJcbiAgICAmLWNvbC10ZXh0e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjAuNXJlbTtcclxuICAgICAgICAmLXRpdGxle1xyXG4gICAgICAgICAgICAmLWgxe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1we1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTsgXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1yb3d7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICYtY29se1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDoxcmVtO1xyXG4gICAgICAgICAgICAmLWljb24tb25ib2FyZGluZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWljb24tbG9jYXRpb24tb25ib2FyZGluZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDozMDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtY29sLXR5Y3tcclxuICAgICAgICAmLXRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjN0I3Njc2O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0MCU7XHJcbiAgICAgICAgICAgICYtbm90ZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLWJ1dHRvbi1yb3d7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICYtY29sLW5leHRCdG57XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6I0ZFOTEwRSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbC1za2lwQnRue1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgLS1jb2xvcjojRkU5MTBFO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIFxyXG5cclxuLy9HcmlkIGZvciBUZWVuS2lkXHJcbi5HcmlkLWNob2ljZXtcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgJi1yb3d7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICYtY29sLUJ0bntcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctdG9wOjExcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206MTFweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2IoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiAjRkU5MTBFO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpb24tYnV0dG9uOmhvdmVyLGlvbi1idXR0b246Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OnBhcnQobmF0aXZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiNGRTkxMEU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgXHJcbiB9XHJcblxyXG4gLkFycm93LUJ0bntcclxuICAgIGhlaWdodDogNDlweCAhaW1wb3J0YW50OyBcclxuICAgIHdpZHRoOiA0OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRTkxMEU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICYtSWNvbntcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gfVxyXG4gLy9tZWRpYSBmb3IgbGVzcyB0YW4gMzYwLCBmb3IgYWRqdXN0IGZvbnQtc2l6ZVxyXG4gICBAbWVkaWEgKG1heC13aWR0aDozNzZweCApIHtcclxuICAgIC5HcmlkLWNob2ljZS1yb3ctY29sLUJ0bntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gICAgIH1cclxufVxyXG4vL21lZGlhIGZvciB3aWR0aCA0MTIgb3IgbW9yZSwgZm9yIGFkanVzdCBwYWRkaW5nIG9mIGdyaWRcclxuQG1lZGlhIChtaW4td2lkdGg6Mzc2cHggKSB7XHJcbiBcclxuXHJcbiAgICAgXHJcbn0gIFxyXG59ICBcclxuLyogXHJcbmlvbi1ncmlkIHtcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZzogMjBweDtcclxuICBcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZy14czogMjBweDtcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZy1zbTogMjBweDtcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZy1tZDogMjBweDtcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZy1sZzogMjBweDtcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZy14bDogMjBweDtcclxuICBcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDMwcHg7XHJcbiAgXHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhzOiAzMHB4O1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1zbTogMzBweDtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbWQ6IDMwcHg7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLWxnOiAzMHB4O1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14bDogMzBweDtcclxuICB9ICovIl19 */";

/***/ }),

/***/ 3455:
/*!************************************************************!*\
  !*** ./src/app/onboarding/onboarding.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content class=\"ion-padding\" [style.--background]=\"background\">\n\n    <swiper #swiper [config]=\"config\" (slideChangeTransitionEnd)=\"onAfterTransition()\">\n   \n     <!-- Slide 1 -->\n       <ng-template swiperSlide >\n    <ion-grid class=\"Grid-first\"> \n    \n     <ion-row>\n     <ion-col size=\"12\" >\n     <ion-icon src=\"../../assets/icon/navigate.svg\" class=\"Grid-first-icon\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"12\" class=\"Grid-first-col-text\">\n        <ion-text class=\"Grid-first-col-text-title\">\n          <h1 class=\"Grid-first-col-text-title-h1\">!Hola!</h1>\n          <p class=\"Grid-first-col-text-title-p\">\n            Esta es una aplicación que te permitirá realizar un pedido de ayuda en el caso que estés pasando por alguna situación de violencia. \n            Tené en cuenta que toda la información que brindes es confidencial y será utilizada solamente por las personas que procederán a ayudarte (ley 25326).\n            A continuación, tendrás que responder unas breves preguntas para que podamos ayudarte.\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"Grid-first-row\">\n      <ion-col class=\"Grid-first-row-col\" size=\"12\">\n        <ion-icon src=\"../../assets/icon/family-onboarding.svg\" class=\"Grid-first-row-col-icon-onboarding\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"12\" class=\"Grid-first-col-tyc\">\n        <ion-text class=\"Grid-first-col-tyc-text\">\n            <p> Apretando el boton “Continuar”, aceptas nuestros\n              <span class=\"Grid-first-col-tyc-text-note\">“Terminos y Condiciones & Politicas de Privacidad”.</span>\n            </p>\n      </ion-text>\n      </ion-col>\n     </ion-row>\n      <ion-row class=\"Grid-first-button-row\">\n        <ion-col size=\"12\" class=\"Grid-first-button-row-col\">\n          <ion-button class=\"Grid-first-button-row-col-nextBtn\" (click)=\"next()\">Continuar</ion-button>\n        </ion-col>\n       </ion-row>\n    </ion-grid>\n  </ng-template>    \n    <!-- Slide 2 -->\n     <ng-template swiperSlide>\n    <ion-grid class=\"Grid-first\">\n     <ion-row>\n      <ion-col size=\"12\">\n        <ion-icon src=\"../../assets/icon/navigate.svg\" class=\"Grid-first-icon\"></ion-icon>\n      </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col size=\"12\" class=\"Grid-first-col-text\">\n        <ion-text class=\"Grid-first-col-text-title\">\n          <h1 class=\"Grid-first-col-text-title-h1\">Habilita tu ubicación.</h1>\n          <p class=\"Grid-first-col-text-title-p\">\n            Este sitio utilizará tu ubicación para poder ayudarte.\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"Grid-first-row\">\n      <ion-col class=\"Grid-first-row-col\" size=\"12\">\n        <ion-icon src=\"../../assets/icon/location-onboarding.svg\" class=\"Grid-first-row-col-icon-location-onboarding\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"12\" class=\"Grid-first-col-tyc\">\n        <ion-text class=\"Grid-first-col-tyc-text\">\n            <p>\n              Este sitio web utiliza tu ubicación para poder brindarte una mejor experiencia y poder proceder correctamente con tu solicitud.\n            </p>\n      </ion-text>\n      </ion-col>\n     </ion-row>\n      <ion-row class=\"Grid-first-button-row\">\n        <ion-col size=\"12\" class=\"Grid-first-button-row-col\">\n          <ion-button class=\"Grid-first-button-row-col-nextBtn\" (click)=\"getLocation()\">Habilitar ubicación</ion-button>\n        </ion-col>\n        <ion-col size=\"12\" class=\"Grid-first-button-row-col\">\n          <ion-button  fill=\"clear\" class=\"Grid-first-button-row-col-skipBtn\" (click)=\"skip()\">\n              No, más tarde.\n          </ion-button>\n        </ion-col>\n       </ion-row>\n    </ion-grid>\n  </ng-template>     \n  <ng-template swiperSlide>\n    <ion-grid fullscreen=\"true\" class=\"Grid-choice\">\n      <ion-row class=\"Grid-choice-row\" style=\"flex-grow: 1;\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n          <ion-icon src=\"../../assets/icon/kid.svg\" style=\"height:150px;width: 230px;\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"Grid-choice-row-col\"  size=\"12\">\n          <ion-button  class=\"Grid-choice-row-col-Btn\" (click)=\"select('kid')\"> SOY NIÑO / NIÑA</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"Grid-choice-row\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n          <ion-icon src=\"../../assets/icon/teen.svg\" style=\"height:150px;width: 230px;\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"Grid-choice-row-col\"size=\"12\">\n          <ion-button class=\"Grid-choice-row-col-Btn\"  (click)=\"select('teen')\" > SOY ADOLESCENTE</ion-button>\n        </ion-col>\n      </ion-row>\n<ion-row>\n\n  <ion-col size=\"12\" class=\"ion-text-center\">\n    <ion-button class=\"Arrow-Btn\" (click)=\"save()\" [disabled]=\"!selected\">\n      <ion-icon  class=\"Arrow-Btn-Icon\" src=\"../../assets/icon/chevron-forward.svg\"></ion-icon>\n  </ion-button>\n  </ion-col>\n</ion-row>\n\n    </ion-grid>\n    \n  </ng-template>\n\n</swiper>  \n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_onboarding_onboarding_module_ts.js.map