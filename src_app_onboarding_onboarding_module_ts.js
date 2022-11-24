(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_onboarding_onboarding_module_ts"],{

/***/ 954:
/*!*********************************************************!*\
  !*** ./src/app/onboarding/onboarding-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingPage": () => (/* binding */ OnboardingPage)
/* harmony export */ });
/* harmony import */ var C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _onboarding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding.page.html?ngResource */ 3455);
/* harmony import */ var _onboarding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onboarding.page.scss?ngResource */ 4121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_Geolocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/Geolocation */ 824);
/* harmony import */ var esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri-leaflet-geocoder */ 3145);
/* harmony import */ var esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/storage.service */ 1188);











swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_3__.EffectFade]);
let OnboardingPage = class OnboardingPage {
  constructor(router, cd, alertController, storageService) {
    this.router = router;
    this.cd = cd;
    this.alertController = alertController;
    this.storageService = storageService;
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
        header: 'Permisos necesarios',
        message: 'Para poder brindarte una mejor experiencia, necesitamos que nos permitas acceder a tu ubicación',
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
      const ltlng = yield _this.storageService.setStorage('latlng', [_this.latitude, _this.longitude]);
      new esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_5__.reverseGeocode({
        apikey: _this.key
      }).latlng([_this.latitude, _this.longitude]).run((error, result, response) => {});
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
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}];

OnboardingPage.propDecorators = {
  swiper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: ['swiper', {
      static: false
    }]
  }]
};
OnboardingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-onboarding',
  template: _onboarding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_onboarding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], OnboardingPage);


/***/ }),

/***/ 7243:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/Geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 824:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/Geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 3145:
/*!********************************************************************************!*\
  !*** ./node_modules/esri-leaflet-geocoder/dist/esri-leaflet-geocoder-debug.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* esri-leaflet-geocoder - v3.1.3 - Fri Apr 08 2022 10:06:56 GMT-0500 (Central Daylight Time)
 * Copyright (c) 2022 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! leaflet */ 5836), __webpack_require__(/*! esri-leaflet */ 1223)) : 0;
})(this, function (exports, leaflet, esriLeaflet) {
  'use strict';

  var version = "3.1.3";
  var WorldGeocodingServiceUrl = 'https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/';
  var Geocode = esriLeaflet.Task.extend({
    path: 'findAddressCandidates',
    params: {
      outSr: 4326,
      forStorage: false,
      outFields: '*',
      maxLocations: 20
    },
    setters: {
      address: 'address',
      neighborhood: 'neighborhood',
      city: 'city',
      subregion: 'subregion',
      region: 'region',
      postal: 'postal',
      country: 'country',
      text: 'singleLine',
      category: 'category',
      token: 'token',
      apikey: 'apikey',
      key: 'magicKey',
      fields: 'outFields',
      forStorage: 'forStorage',
      maxLocations: 'maxLocations',
      // World Geocoding Service (only works with singleLine)
      countries: 'sourceCountry'
    },
    initialize: function (options) {
      options = options || {};
      options.url = options.url || WorldGeocodingServiceUrl;
      esriLeaflet.Task.prototype.initialize.call(this, options);
    },
    within: function (bounds) {
      bounds = leaflet.latLngBounds(bounds);
      this.params.searchExtent = esriLeaflet.Util.boundsToExtent(bounds);
      return this;
    },
    nearby: function (coords, radius) {
      var centroid = leaflet.latLng(coords);
      this.params.location = centroid.lng + ',' + centroid.lat;

      if (radius) {
        this.params.distance = Math.min(Math.max(radius, 2000), 50000);
      }

      return this;
    },
    run: function (callback, context) {
      if (this.options.token) {
        this.params.token = this.options.token;
      }

      if (this.options.apikey) {
        this.params.token = this.options.apikey;
      }

      if (this.options.customParam) {
        this.params[this.options.customParam] = this.params.singleLine;
        delete this.params.singleLine;
      }

      return this.request(function (error, response) {
        var processor = this._processGeocoderResponse;
        var results = !error ? processor(response) : undefined;
        callback.call(context, error, {
          results: results
        }, response);
      }, this);
    },
    _processGeocoderResponse: function (response) {
      var results = [];

      for (var i = 0; i < response.candidates.length; i++) {
        var candidate = response.candidates[i];

        if (candidate.extent) {
          var bounds = esriLeaflet.Util.extentToBounds(candidate.extent);
        }

        results.push({
          text: candidate.address,
          bounds: bounds,
          score: candidate.score,
          latlng: leaflet.latLng(candidate.location.y, candidate.location.x),
          properties: candidate.attributes
        });
      }

      return results;
    }
  });

  function geocode(options) {
    return new Geocode(options);
  }

  var ReverseGeocode = esriLeaflet.Task.extend({
    path: 'reverseGeocode',
    params: {
      outSR: 4326,
      returnIntersection: false
    },
    setters: {
      distance: 'distance',
      language: 'langCode',
      intersection: 'returnIntersection',
      apikey: 'apikey'
    },
    initialize: function (options) {
      options = options || {};
      options.url = options.url || WorldGeocodingServiceUrl;
      esriLeaflet.Task.prototype.initialize.call(this, options);
    },
    latlng: function (coords) {
      var centroid = leaflet.latLng(coords);
      this.params.location = centroid.lng + ',' + centroid.lat;
      return this;
    },
    run: function (callback, context) {
      if (this.options.token) {
        this.params.token = this.options.token;
      }

      if (this.options.apikey) {
        this.params.token = this.options.apikey;
      }

      return this.request(function (error, response) {
        var result;

        if (!error) {
          result = {
            latlng: leaflet.latLng(response.location.y, response.location.x),
            address: response.address
          };
        } else {
          result = undefined;
        }

        callback.call(context, error, result, response);
      }, this);
    }
  });

  function reverseGeocode(options) {
    return new ReverseGeocode(options);
  }

  var Suggest = esriLeaflet.Task.extend({
    path: 'suggest',
    params: {},
    setters: {
      text: 'text',
      category: 'category',
      countries: 'countryCode',
      maxSuggestions: 'maxSuggestions'
    },
    initialize: function (options) {
      options = options || {};

      if (!options.url) {
        options.url = WorldGeocodingServiceUrl;
        options.supportsSuggest = true;
      }

      esriLeaflet.Task.prototype.initialize.call(this, options);
    },
    within: function (bounds) {
      bounds = leaflet.latLngBounds(bounds);
      var center = bounds.getCenter();
      var ne = bounds.getNorthWest();
      this.params.location = center.lng + ',' + center.lat;
      this.params.distance = Math.min(Math.max(center.distanceTo(ne), 2000), 50000);
      this.params.searchExtent = esriLeaflet.Util.boundsToExtent(bounds);
      return this;
    },
    nearby: function (coords, radius) {
      var centroid = leaflet.latLng(coords);
      this.params.location = centroid.lng + ',' + centroid.lat;

      if (radius) {
        this.params.distance = Math.min(Math.max(radius, 2000), 50000);
      }

      return this;
    },
    run: function (callback, context) {
      if (this.options.supportsSuggest) {
        return this.request(function (error, response) {
          callback.call(context, error, response, response);
        }, this);
      } else {
        console.warn('this geocoding service does not support asking for suggestions');
      }
    }
  });

  function suggest(options) {
    return new Suggest(options);
  }

  var GeocodeService = esriLeaflet.Service.extend({
    initialize: function (options) {
      options = options || {};

      if (options.apikey) {
        options.token = options.apikey;
      }

      if (options.url) {
        esriLeaflet.Service.prototype.initialize.call(this, options);

        this._confirmSuggestSupport();
      } else {
        options.url = WorldGeocodingServiceUrl;
        options.supportsSuggest = true;
        esriLeaflet.Service.prototype.initialize.call(this, options);
      }
    },
    geocode: function () {
      return geocode(this);
    },
    reverse: function () {
      return reverseGeocode(this);
    },
    suggest: function () {
      // requires either the Esri World Geocoding Service or a <10.3 ArcGIS Server Geocoding Service that supports suggest.
      return suggest(this);
    },
    _confirmSuggestSupport: function () {
      this.metadata(function (error, response) {
        if (error) {
          return;
        } // pre 10.3 geocoding services dont list capabilities (and dont support maxLocations)
        // only SOME individual services have been configured to support asking for suggestions


        if (!response.capabilities) {
          this.options.supportsSuggest = false;
        } else if (response.capabilities.indexOf('Suggest') > -1) {
          this.options.supportsSuggest = true;
        } else {
          this.options.supportsSuggest = false;
        } // whether the service supports suggest or not, utilize the metadata response to determine the appropriate parameter name for single line geocoding requests


        this.options.customParam = response.singleLineAddressField.name;
      }, this);
    }
  });

  function geocodeService(options) {
    return new GeocodeService(options);
  }

  var GeosearchCore = leaflet.Evented.extend({
    options: {
      zoomToResult: true,
      useMapBounds: 12,
      searchBounds: null
    },
    initialize: function (control, options) {
      leaflet.Util.setOptions(this, options);
      this._control = control;

      if (!options || !options.providers || !options.providers.length) {
        throw new Error('You must specify at least one provider');
      }

      this._providers = options.providers;
    },
    _geocode: function (text, key, provider) {
      var activeRequests = 0;
      var allResults = [];
      var bounds;
      var callback = leaflet.Util.bind(function (error, results) {
        activeRequests--;

        if (error) {
          return;
        }

        if (results) {
          allResults = allResults.concat(results);
        }

        if (activeRequests <= 0) {
          bounds = this._boundsFromResults(allResults);
          this.fire('results', {
            results: allResults,
            bounds: bounds,
            latlng: bounds ? bounds.getCenter() : undefined,
            text: text
          }, true);

          if (this.options.zoomToResult && bounds) {
            this._control._map.fitBounds(bounds);
          }

          this.fire('load');
        }
      }, this);

      if (key) {
        activeRequests++;
        provider.results(text, key, this._searchBounds(), callback);
      } else {
        for (var i = 0; i < this._providers.length; i++) {
          activeRequests++;

          this._providers[i].results(text, key, this._searchBounds(), callback);
        }
      }
    },
    _suggest: function (text) {
      var activeRequests = this._providers.length;
      var suggestionsLength = 0;
      var createCallback = leaflet.Util.bind(function (text, provider) {
        return leaflet.Util.bind(function (error, suggestions) {
          activeRequests = activeRequests - 1;
          suggestionsLength += suggestions.length;

          if (error) {
            // an error occurred for one of the providers' suggest requests
            this._control._clearProviderSuggestions(provider); // perform additional cleanup when all requests are finished


            this._control._finalizeSuggestions(activeRequests, suggestionsLength);

            return;
          }

          if (suggestions.length) {
            for (var i = 0; i < suggestions.length; i++) {
              suggestions[i].provider = provider;
            }
          } else {
            // we still need to update the UI
            this._control._renderSuggestions(suggestions);
          }

          if (provider._lastRender !== text) {
            this._control._clearProviderSuggestions(provider);
          }

          if (suggestions.length && this._control._input.value === text) {
            provider._lastRender = text;

            this._control._renderSuggestions(suggestions);
          } // perform additional cleanup when all requests are finished


          this._control._finalizeSuggestions(activeRequests, suggestionsLength);
        }, this);
      }, this);
      this._pendingSuggestions = [];

      for (var i = 0; i < this._providers.length; i++) {
        var provider = this._providers[i];
        var request = provider.suggestions(text, this._searchBounds(), createCallback(text, provider));

        this._pendingSuggestions.push(request);
      }
    },
    _searchBounds: function () {
      if (this.options.searchBounds !== null) {
        return this.options.searchBounds;
      }

      if (this.options.useMapBounds === false) {
        return null;
      }

      if (this.options.useMapBounds === true) {
        return this._control._map.getBounds();
      }

      if (this.options.useMapBounds <= this._control._map.getZoom()) {
        return this._control._map.getBounds();
      }

      return null;
    },
    _boundsFromResults: function (results) {
      if (!results.length) {
        return;
      }

      var nullIsland = leaflet.latLngBounds([0, 0], [0, 0]);
      var resultBounds = [];
      var resultLatlngs = []; // collect the bounds and center of each result

      for (var i = results.length - 1; i >= 0; i--) {
        var result = results[i];
        resultLatlngs.push(result.latlng); // make sure bounds are valid and not 0,0. sometimes bounds are incorrect or not present

        if (result.bounds && result.bounds.isValid() && !result.bounds.equals(nullIsland)) {
          resultBounds.push(result.bounds);
        }
      } // form a bounds object containing all center points


      var bounds = leaflet.latLngBounds(resultLatlngs); // and extend it to contain all bounds objects

      for (var j = 0; j < resultBounds.length; j++) {
        bounds.extend(resultBounds[j]);
      }

      return bounds;
    },
    _getAttribution: function () {
      var attribs = [];
      var providers = this._providers;

      for (var i = 0; i < providers.length; i++) {
        if (providers[i].options.attribution) {
          attribs.push(providers[i].options.attribution);
        }
      }

      return attribs.join(', ');
    }
  });

  function geosearchCore(control, options) {
    return new GeosearchCore(control, options);
  }

  var ArcgisOnlineProvider = GeocodeService.extend({
    options: {
      label: 'Places and Addresses',
      maxResults: 5
    },
    suggestions: function (text, bounds, callback) {
      var request = this.suggest().text(text);

      if (bounds) {
        request.within(bounds);
      }

      if (this.options.nearby) {
        // "distance"/"radius" is not supported by the ArcGIS Online Geocoder,
        // so that is intentionally not passed here:
        request.nearby(this.options.nearby);
      }

      if (this.options.countries) {
        request.countries(this.options.countries);
      }

      if (this.options.categories) {
        request.category(this.options.categories);
      } // 15 is the maximum number of suggestions that can be returned


      request.maxSuggestions(this.options.maxResults);
      return request.run(function (error, results, response) {
        var suggestions = [];

        if (!error) {
          while (response.suggestions.length && suggestions.length <= this.options.maxResults - 1) {
            var suggestion = response.suggestions.shift();

            if (!suggestion.isCollection) {
              suggestions.push({
                text: suggestion.text,
                unformattedText: suggestion.text,
                magicKey: suggestion.magicKey
              });
            }
          }
        }

        callback(error, suggestions);
      }, this);
    },
    results: function (text, key, bounds, callback) {
      var request = this.geocode().text(text);

      if (key) {
        request.key(key);
      } // in the future Address/StreetName geocoding requests that include a magicKey will always only return one match


      request.maxLocations(this.options.maxResults);

      if (bounds) {
        request.within(bounds);
      }

      if (this.options.forStorage) {
        request.forStorage(true);
      }

      if (this.options.nearby) {
        // "distance"/"radius" is not supported by the ArcGIS Online Geocoder,
        // so that is intentionally not passed here:
        request.nearby(this.options.nearby);
      }

      if (this.options.countries) {
        request.countries(this.options.countries);
      }

      if (this.options.categories) {
        request.category(this.options.categories);
      }

      return request.run(function (error, response) {
        callback(error, response.results);
      }, this);
    }
  });

  function arcgisOnlineProvider(options) {
    return new ArcgisOnlineProvider(options);
  }

  var Geosearch = leaflet.Control.extend({
    includes: leaflet.Evented.prototype,
    options: {
      position: 'topleft',
      collapseAfterResult: true,
      expanded: false,
      allowMultipleResults: true,
      placeholder: 'Search for places or addresses',
      title: 'Location Search'
    },
    initialize: function (options) {
      leaflet.Util.setOptions(this, options);

      if (!options || !options.providers || !options.providers.length) {
        if (!options) {
          options = {};
        }

        options.providers = [arcgisOnlineProvider()];
      } // instantiate the underlying class and pass along options


      this._geosearchCore = geosearchCore(this, options);
      this._geosearchCore._providers = options.providers; // bubble each providers events to the control

      this._geosearchCore.addEventParent(this);

      for (var i = 0; i < this._geosearchCore._providers.length; i++) {
        this._geosearchCore._providers[i].addEventParent(this);
      }

      this._geosearchCore._pendingSuggestions = [];
      leaflet.Control.prototype.initialize.call(this, options);
    },
    _renderSuggestions: function (suggestions) {
      var currentGroup;

      if (suggestions.length > 0) {
        this._suggestions.style.display = 'block';
      }

      var list;
      var header;
      var suggestionTextArray = [];

      for (var i = 0; i < suggestions.length; i++) {
        var suggestion = suggestions[i];

        if (!header && this._geosearchCore._providers.length > 1 && currentGroup !== suggestion.provider.options.label) {
          header = leaflet.DomUtil.create('div', 'geocoder-control-header', suggestion.provider._contentsElement);
          header.textContent = suggestion.provider.options.label;
          header.innerText = suggestion.provider.options.label;
          currentGroup = suggestion.provider.options.label;
        }

        if (!list) {
          list = leaflet.DomUtil.create('ul', 'geocoder-control-list', suggestion.provider._contentsElement);
        }

        if (suggestionTextArray.indexOf(suggestion.text) === -1) {
          var suggestionItem = leaflet.DomUtil.create('li', 'geocoder-control-suggestion', list);
          suggestionItem.innerHTML = suggestion.text;
          suggestionItem.provider = suggestion.provider;
          suggestionItem['data-magic-key'] = suggestion.magicKey;
          suggestionItem.unformattedText = suggestion.unformattedText;
        } else {
          for (var j = 0; j < list.childNodes.length; j++) {
            // if the same text already appears in the list of suggestions, append an additional ObjectID to its magicKey instead
            if (list.childNodes[j].innerHTML === suggestion.text) {
              list.childNodes[j]['data-magic-key'] += ',' + suggestion.magicKey;
            }
          }
        }

        suggestionTextArray.push(suggestion.text);
      } // when the geocoder position is either "topleft" or "topright":
      // set the maxHeight of the suggestions box to:
      //  map height
      //  - suggestions offset (distance from top of suggestions to top of control)
      //  - control offset (distance from top of control to top of map)
      //  - 10 (extra padding)


      if (this.getPosition().indexOf('top') > -1) {
        this._suggestions.style.maxHeight = this._map.getSize().y - this._suggestions.offsetTop - this._wrapper.offsetTop - 10 + 'px';
      } // when the geocoder position is either "bottomleft" or "bottomright":
      // 1. set the maxHeight of the suggestions box to:
      //  map height
      //  - corner control container offsetHeight (height of container of bottom corner)
      //  - control offsetHeight (height of geocoder control wrapper, the main expandable button)
      // 2. to move it up, set the top of the suggestions box to:
      //  negative offsetHeight of suggestions box (its own negative height now that it has children elements
      //  - control offsetHeight (height of geocoder control wrapper, the main expandable button)
      //  + 20 (extra spacing)


      if (this.getPosition().indexOf('bottom') > -1) {
        this._setSuggestionsBottomPosition();
      }
    },
    _setSuggestionsBottomPosition: function () {
      this._suggestions.style.maxHeight = this._map.getSize().y - this._map._controlCorners[this.getPosition()].offsetHeight - this._wrapper.offsetHeight + 'px';
      this._suggestions.style.top = -this._suggestions.offsetHeight - this._wrapper.offsetHeight + 20 + 'px';
    },
    _boundsFromResults: function (results) {
      if (!results.length) {
        return;
      }

      var nullIsland = leaflet.latLngBounds([0, 0], [0, 0]);
      var resultBounds = [];
      var resultLatlngs = []; // collect the bounds and center of each result

      for (var i = results.length - 1; i >= 0; i--) {
        var result = results[i];
        resultLatlngs.push(result.latlng); // make sure bounds are valid and not 0,0. sometimes bounds are incorrect or not present

        if (result.bounds && result.bounds.isValid() && !result.bounds.equals(nullIsland)) {
          resultBounds.push(result.bounds);
        }
      } // form a bounds object containing all center points


      var bounds = leaflet.latLngBounds(resultLatlngs); // and extend it to contain all bounds objects

      for (var j = 0; j < resultBounds.length; j++) {
        bounds.extend(resultBounds[j]);
      }

      return bounds;
    },
    clear: function () {
      this._clearAllSuggestions();

      if (this.options.collapseAfterResult) {
        this._input.value = '';
        this._lastValue = '';
        this._input.placeholder = '';
        leaflet.DomUtil.removeClass(this._wrapper, 'geocoder-control-expanded');
      }

      if (!this._map.scrollWheelZoom.enabled() && this._map.options.scrollWheelZoom) {
        this._map.scrollWheelZoom.enable();
      }
    },
    _clearAllSuggestions: function () {
      this._suggestions.style.display = 'none';

      for (var i = 0; i < this.options.providers.length; i++) {
        this._clearProviderSuggestions(this.options.providers[i]);
      }
    },
    _clearProviderSuggestions: function (provider) {
      provider._contentsElement.innerHTML = '';
    },
    _finalizeSuggestions: function (activeRequests, suggestionsLength) {
      // check if all requests are finished to remove the loading indicator
      if (!activeRequests) {
        leaflet.DomUtil.removeClass(this._input, 'geocoder-control-loading'); // when the geocoder position is either "bottomleft" or "bottomright",
        // it is necessary in some cases to recalculate the maxHeight and top values of the this._suggestions element,
        // even though this is also being done after each provider returns their own suggestions

        if (this.getPosition().indexOf('bottom') > -1) {
          this._setSuggestionsBottomPosition();
        } // also check if there were 0 total suggest results to clear the parent suggestions element
        // otherwise its display value may be "block" instead of "none"


        if (!suggestionsLength) {
          this._clearAllSuggestions();
        }
      }
    },
    _setupClick: function () {
      leaflet.DomUtil.addClass(this._wrapper, 'geocoder-control-expanded');

      this._input.focus();
    },
    disable: function () {
      this._input.disabled = true;
      leaflet.DomUtil.addClass(this._input, 'geocoder-control-input-disabled');
      leaflet.DomEvent.removeListener(this._wrapper, 'click', this._setupClick, this);
    },
    enable: function () {
      this._input.disabled = false;
      leaflet.DomUtil.removeClass(this._input, 'geocoder-control-input-disabled');
      leaflet.DomEvent.addListener(this._wrapper, 'click', this._setupClick, this);
    },
    getAttribution: function () {
      var attribs = [];

      for (var i = 0; i < this._providers.length; i++) {
        if (this._providers[i].options.attribution) {
          attribs.push(this._providers[i].options.attribution);
        }
      }

      return attribs.join(', ');
    },
    geocodeSuggestion: function (e) {
      var suggestionItem = e.target || e.srcElement;

      if (suggestionItem.classList.contains('geocoder-control-suggestions') || suggestionItem.classList.contains('geocoder-control-header')) {
        return;
      } // make sure and point at the actual 'geocoder-control-suggestion'


      if (suggestionItem.classList.length < 1) {
        suggestionItem = suggestionItem.parentNode;
      }

      this._geosearchCore._geocode(suggestionItem.unformattedText, suggestionItem['data-magic-key'], suggestionItem.provider);

      this.clear();
    },
    onAdd: function (map) {
      // include 'Powered by Esri' in map attribution
      esriLeaflet.Util.setEsriAttribution(map);
      this._map = map;
      this._wrapper = leaflet.DomUtil.create('div', 'geocoder-control');
      this._input = leaflet.DomUtil.create('input', 'geocoder-control-input leaflet-bar', this._wrapper);
      this._input.title = this.options.title;

      if (this.options.expanded) {
        leaflet.DomUtil.addClass(this._wrapper, 'geocoder-control-expanded');
        this._input.placeholder = this.options.placeholder;
      } // create the main suggested results container element


      this._suggestions = leaflet.DomUtil.create('div', 'geocoder-control-suggestions leaflet-bar', this._wrapper); // create a child contents container element for each provider inside of this._suggestions
      // to maintain the configured order of providers for suggested results

      for (var i = 0; i < this.options.providers.length; i++) {
        this.options.providers[i]._contentsElement = leaflet.DomUtil.create('div', null, this._suggestions);
      }

      var credits = this._geosearchCore._getAttribution();

      if (map.attributionControl) {
        map.attributionControl.addAttribution(credits);
      }

      leaflet.DomEvent.addListener(this._input, 'focus', function (e) {
        this._input.placeholder = this.options.placeholder;
        leaflet.DomUtil.addClass(this._wrapper, 'geocoder-control-expanded');
      }, this);
      leaflet.DomEvent.addListener(this._wrapper, 'click', this._setupClick, this); // make sure both click and touch spawn an address/poi search

      leaflet.DomEvent.addListener(this._suggestions, 'mousedown', this.geocodeSuggestion, this);
      leaflet.DomEvent.addListener(this._input, 'blur', function (e) {
        // TODO: this is too greedy and should not "clear"
        // when trying to use the scrollbar or clicking on a non-suggestion item (such as a provider header)
        this.clear();
      }, this);
      leaflet.DomEvent.addListener(this._input, 'keydown', function (e) {
        var text = (e.target || e.srcElement).value;
        leaflet.DomUtil.addClass(this._wrapper, 'geocoder-control-expanded');

        var list = this._suggestions.querySelectorAll('.' + 'geocoder-control-suggestion');

        var selected = this._suggestions.querySelectorAll('.' + 'geocoder-control-selected')[0];

        var selectedPosition;

        for (var i = 0; i < list.length; i++) {
          if (list[i] === selected) {
            selectedPosition = i;
            break;
          }
        }

        switch (e.keyCode) {
          case 13:
            /*
              if an item has been selected, geocode it
              if focus is on the input textbox, geocode only if multiple results are allowed and more than two characters are present, or if a single suggestion is displayed.
              if less than two characters have been typed, abort the geocode
            */
            if (selected) {
              this._input.value = selected.innerText;

              this._geosearchCore._geocode(selected.unformattedText, selected['data-magic-key'], selected.provider);

              this.clear();
            } else if (this.options.allowMultipleResults && text.length >= 2) {
              this._geosearchCore._geocode(this._input.value, undefined);

              this.clear();
            } else {
              if (list.length === 1) {
                leaflet.DomUtil.addClass(list[0], 'geocoder-control-selected');

                this._geosearchCore._geocode(list[0].innerHTML, list[0]['data-magic-key'], list[0].provider);
              } else {
                this.clear();

                this._input.blur();
              }
            }

            leaflet.DomEvent.preventDefault(e);
            break;

          case 38:
            if (selected) {
              leaflet.DomUtil.removeClass(selected, 'geocoder-control-selected');
            }

            var previousItem = list[selectedPosition - 1];

            if (selected && previousItem) {
              leaflet.DomUtil.addClass(previousItem, 'geocoder-control-selected');
            } else {
              leaflet.DomUtil.addClass(list[list.length - 1], 'geocoder-control-selected');
            }

            leaflet.DomEvent.preventDefault(e);
            break;

          case 40:
            if (selected) {
              leaflet.DomUtil.removeClass(selected, 'geocoder-control-selected');
            }

            var nextItem = list[selectedPosition + 1];

            if (selected && nextItem) {
              leaflet.DomUtil.addClass(nextItem, 'geocoder-control-selected');
            } else {
              leaflet.DomUtil.addClass(list[0], 'geocoder-control-selected');
            }

            leaflet.DomEvent.preventDefault(e);
            break;

          default:
            // when the input changes we should cancel all pending suggestion requests if possible to avoid result collisions
            for (var x = 0; x < this._geosearchCore._pendingSuggestions.length; x++) {
              var request = this._geosearchCore._pendingSuggestions[x];

              if (request && request.abort && !request.id) {
                request.abort();
              }
            }

            break;
        }
      }, this);
      leaflet.DomEvent.addListener(this._input, 'keyup', leaflet.Util.throttle(function (e) {
        var key = e.which || e.keyCode;
        var text = (e.target || e.srcElement).value; // require at least 2 characters for suggestions

        if (text.length < 2) {
          this._lastValue = this._input.value;

          this._clearAllSuggestions();

          leaflet.DomUtil.removeClass(this._input, 'geocoder-control-loading');
          return;
        } // if this is the escape key it will clear the input so clear suggestions


        if (key === 27) {
          this._clearAllSuggestions();

          return;
        } // if this is NOT the up/down arrows or enter make a suggestion


        if (key !== 13 && key !== 38 && key !== 40) {
          if (this._input.value !== this._lastValue) {
            this._lastValue = this._input.value;
            leaflet.DomUtil.addClass(this._input, 'geocoder-control-loading');

            this._geosearchCore._suggest(text);
          }
        }
      }, 50, this), this);
      leaflet.DomEvent.disableClickPropagation(this._wrapper); // when mouse moves over suggestions disable scroll wheel zoom if its enabled

      leaflet.DomEvent.addListener(this._suggestions, 'mouseover', function (e) {
        if (map.scrollWheelZoom.enabled() && map.options.scrollWheelZoom) {
          map.scrollWheelZoom.disable();
        }
      }); // when mouse moves leaves suggestions enable scroll wheel zoom if its disabled

      leaflet.DomEvent.addListener(this._suggestions, 'mouseout', function (e) {
        if (!map.scrollWheelZoom.enabled() && map.options.scrollWheelZoom) {
          map.scrollWheelZoom.enable();
        }
      });

      this._geosearchCore.on('load', function (e) {
        leaflet.DomUtil.removeClass(this._input, 'geocoder-control-loading');
        this.clear();

        this._input.blur();
      }, this);

      return this._wrapper;
    }
  });

  function geosearch(options) {
    return new Geosearch(options);
  }

  var FeatureLayerProvider = esriLeaflet.FeatureLayerService.extend({
    options: {
      label: 'Feature Layer',
      maxResults: 5,
      bufferRadius: 1000,
      searchMode: 'contain',
      formatSuggestion: function (feature) {
        return feature.properties[this.options.searchFields[0]];
      }
    },
    initialize: function (options) {
      if (options.apikey) {
        options.token = options.apikey;
      }

      esriLeaflet.FeatureLayerService.prototype.initialize.call(this, options);

      if (typeof this.options.searchFields === 'string') {
        this.options.searchFields = [this.options.searchFields];
      }

      this._suggestionsQuery = this.query();
      this._resultsQuery = this.query();
    },
    suggestions: function (text, bounds, callback) {
      var query = this._suggestionsQuery.where(this._buildQuery(text)).returnGeometry(false);

      if (bounds) {
        query.intersects(bounds);
      }

      if (this.options.idField) {
        query.fields([this.options.idField].concat(this.options.searchFields));
      }

      var request = query.run(function (error, results, raw) {
        if (error) {
          callback(error, []);
        } else {
          this.options.idField = raw.objectIdFieldName;
          var suggestions = [];

          for (var i = results.features.length - 1; i >= 0; i--) {
            var feature = results.features[i];
            suggestions.push({
              text: this.options.formatSuggestion.call(this, feature),
              unformattedText: feature.properties[this.options.searchFields[0]],
              magicKey: feature.id
            });
          }

          callback(error, suggestions.slice(0, this.options.maxResults));
        }
      }, this);
      return request;
    },
    results: function (text, key, bounds, callback) {
      var query = this._resultsQuery;

      if (key) {
        // if there are 1 or more keys available, use query.featureIds()
        delete query.params.where;
        query.featureIds([key]);
      } else {
        // if there are no keys available, use query.where()
        query.where(this._buildQuery(text));
      }

      if (bounds) {
        query.within(bounds);
      }

      return query.run(leaflet.Util.bind(function (error, features) {
        var results = [];

        for (var i = 0; i < features.features.length; i++) {
          var feature = features.features[i];

          if (feature) {
            var bounds = this._featureBounds(feature);

            var result = {
              latlng: bounds.getCenter(),
              bounds: bounds,
              text: this.options.formatSuggestion.call(this, feature),
              properties: feature.properties,
              geojson: feature
            };
            results.push(result); // clear query parameters for the next search

            delete this._resultsQuery.params['objectIds'];
          }
        }

        callback(error, results);
      }, this));
    },
    orderBy: function (fieldName, order) {
      this._suggestionsQuery.orderBy(fieldName, order);
    },
    _buildQuery: function (text) {
      var queryString = [];

      for (var i = this.options.searchFields.length - 1; i >= 0; i--) {
        var field = 'upper("' + this.options.searchFields[i] + '")';

        if (this.options.searchMode === 'contain') {
          queryString.push(field + " LIKE upper('%" + text + "%')");
        } else if (this.options.searchMode === 'startWith') {
          queryString.push(field + " LIKE upper('" + text + "%')");
        } else if (this.options.searchMode === 'endWith') {
          queryString.push(field + " LIKE upper('%" + text + "')");
        } else if (this.options.searchMode === 'strict') {
          queryString.push(field + " LIKE upper('" + text + "')");
        } else {
          throw new Error('L.esri.Geocoding.featureLayerProvider: Invalid parameter for "searchMode". Use one of "contain", "startWith", "endWith", or "strict"');
        }
      }

      if (this.options.where) {
        return this.options.where + ' AND (' + queryString.join(' OR ') + ')';
      } else {
        return queryString.join(' OR ');
      }
    },
    _featureBounds: function (feature) {
      var geojson = leaflet.geoJson(feature);

      if (feature.geometry.type === 'Point') {
        var center = geojson.getBounds().getCenter();
        var lngRadius = this.options.bufferRadius / 40075017 * 360 / Math.cos(180 / Math.PI * center.lat);
        var latRadius = this.options.bufferRadius / 40075017 * 360;
        return leaflet.latLngBounds([center.lat - latRadius, center.lng - lngRadius], [center.lat + latRadius, center.lng + lngRadius]);
      } else {
        return geojson.getBounds();
      }
    }
  });

  function featureLayerProvider(options) {
    return new FeatureLayerProvider(options);
  }

  var MapServiceProvider = esriLeaflet.MapService.extend({
    options: {
      layers: [0],
      label: 'Map Service',
      bufferRadius: 1000,
      maxResults: 5,
      formatSuggestion: function (feature) {
        return feature.properties[feature.displayFieldName] + ' <small>' + feature.layerName + '</small>';
      }
    },
    initialize: function (options) {
      if (options.apikey) {
        options.token = options.apikey;
      }

      esriLeaflet.MapService.prototype.initialize.call(this, options);

      this._getIdFields();
    },
    suggestions: function (text, bounds, callback) {
      var request = this.find().text(text).fields(this.options.searchFields).returnGeometry(false).layers(this.options.layers);
      return request.run(function (error, results, raw) {
        var suggestions = [];

        if (!error) {
          var count = Math.min(this.options.maxResults, results.features.length);
          raw.results = raw.results.reverse();

          for (var i = 0; i < count; i++) {
            var feature = results.features[i];
            var result = raw.results[i];
            var layer = result.layerId;
            var idField = this._idFields[layer];
            feature.layerId = layer;
            feature.layerName = this._layerNames[layer];
            feature.displayFieldName = this._displayFields[layer];

            if (idField) {
              suggestions.push({
                text: this.options.formatSuggestion.call(this, feature),
                unformattedText: feature.properties[feature.displayFieldName],
                magicKey: result.attributes[idField] + ':' + layer
              });
            }
          }
        }

        callback(error, suggestions.reverse());
      }, this);
    },
    results: function (text, key, bounds, callback) {
      var results = [];
      var request;

      if (key && !key.includes(',')) {
        // if there is only 1 key available, use query()
        var featureId = key.split(':')[0];
        var layer = key.split(':')[1];
        request = this.query().layer(layer).featureIds(featureId);
      } else {
        // if there are no keys or more than 1 keys available, use find()
        request = this.find().text(text).fields(this.options.searchFields).layers(this.options.layers);
      }

      return request.run(function (error, features, response) {
        if (!error) {
          if (response.results) {
            response.results = response.results.reverse();
          }

          for (var i = 0; i < features.features.length; i++) {
            var feature = features.features[i];
            layer = layer || response.results[i].layerId;

            if (feature && layer !== undefined) {
              var bounds = this._featureBounds(feature);

              feature.layerId = layer;
              feature.layerName = this._layerNames[layer];
              feature.displayFieldName = this._displayFields[layer];
              var result = {
                latlng: bounds.getCenter(),
                bounds: bounds,
                text: this.options.formatSuggestion.call(this, feature),
                properties: feature.properties,
                geojson: feature
              };
              results.push(result);
            }
          }
        }

        callback(error, results.reverse());
      }, this);
    },
    _featureBounds: function (feature) {
      var geojson = leaflet.geoJson(feature);

      if (feature.geometry.type === 'Point') {
        var center = geojson.getBounds().getCenter();
        var lngRadius = this.options.bufferRadius / 40075017 * 360 / Math.cos(180 / Math.PI * center.lat);
        var latRadius = this.options.bufferRadius / 40075017 * 360;
        return leaflet.latLngBounds([center.lat - latRadius, center.lng - lngRadius], [center.lat + latRadius, center.lng + lngRadius]);
      } else {
        return geojson.getBounds();
      }
    },
    _layerMetadataCallback: function (layerid) {
      return leaflet.Util.bind(function (error, metadata) {
        if (error) {
          return;
        }

        this._displayFields[layerid] = metadata.displayField;
        this._layerNames[layerid] = metadata.name;

        for (var i = 0; i < metadata.fields.length; i++) {
          var field = metadata.fields[i];

          if (field.type === 'esriFieldTypeOID') {
            this._idFields[layerid] = field.name;
            break;
          }
        }
      }, this);
    },
    _getIdFields: function () {
      this._idFields = {};
      this._displayFields = {};
      this._layerNames = {};

      for (var i = 0; i < this.options.layers.length; i++) {
        var layer = this.options.layers[i];
        this.get(layer, {}, this._layerMetadataCallback(layer));
      }
    }
  });

  function mapServiceProvider(options) {
    return new MapServiceProvider(options);
  }

  var GeocodeServiceProvider = GeocodeService.extend({
    options: {
      label: 'Geocode Server',
      maxResults: 5
    },
    suggestions: function (text, bounds, callback) {
      if (this.options.supportsSuggest) {
        var request = this.suggest().text(text);

        if (bounds) {
          request.within(bounds);
        }

        return request.run(function (error, results, response) {
          var suggestions = [];

          if (!error) {
            while (response.suggestions.length && suggestions.length <= this.options.maxResults - 1) {
              var suggestion = response.suggestions.shift();

              if (!suggestion.isCollection) {
                suggestions.push({
                  text: suggestion.text,
                  unformattedText: suggestion.text,
                  magicKey: suggestion.magicKey
                });
              }
            }
          }

          callback(error, suggestions);
        }, this);
      } else {
        callback(null, []);
        return false;
      }
    },
    results: function (text, key, bounds, callback) {
      var request = this.geocode().text(text);

      if (key) {
        request.key(key);
      }

      request.maxLocations(this.options.maxResults);

      if (bounds) {
        request.within(bounds);
      }

      return request.run(function (error, response) {
        callback(error, response.results);
      }, this);
    }
  });

  function geocodeServiceProvider(options) {
    return new GeocodeServiceProvider(options);
  }

  exports.ArcgisOnlineProvider = ArcgisOnlineProvider;
  exports.FeatureLayerProvider = FeatureLayerProvider;
  exports.Geocode = Geocode;
  exports.GeocodeService = GeocodeService;
  exports.GeocodeServiceProvider = GeocodeServiceProvider;
  exports.Geosearch = Geosearch;
  exports.GeosearchCore = GeosearchCore;
  exports.MapServiceProvider = MapServiceProvider;
  exports.ReverseGeocode = ReverseGeocode;
  exports.Suggest = Suggest;
  exports.VERSION = version;
  exports.WorldGeocodingServiceUrl = WorldGeocodingServiceUrl;
  exports.arcgisOnlineProvider = arcgisOnlineProvider;
  exports.featureLayerProvider = featureLayerProvider;
  exports.geocode = geocode;
  exports.geocodeService = geocodeService;
  exports.geocodeServiceProvider = geocodeServiceProvider;
  exports.geosearch = geosearch;
  exports.geosearchCore = geosearchCore;
  exports.mapServiceProvider = mapServiceProvider;
  exports.reverseGeocode = reverseGeocode;
  exports.suggest = suggest;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ 4121:
/*!************************************************************!*\
  !*** ./src/app/onboarding/onboarding.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  --background: #F4F4F4;\n  font-family: \"Open Sans\";\n  font-style: normal;\n}\n\n.swiper {\n  width: 100%;\n  height: 100%;\n}\n\nion-content {\n  background: #F4F4F4;\n  --background:url('kid-teen.svg') no-repeat center center / cover;\n}\n\n.Grid-first {\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n}\n\n.Grid-first-icon {\n  height: 32px;\n  width: 32px;\n}\n\n.Grid-first-col-text {\n  padding-top: 0.5rem;\n}\n\n.Grid-first-col-text-title-h1 {\n  margin-top: 0rem !important;\n  font-size: 1.2rem !important;\n  font-weight: 700;\n}\n\n.Grid-first-col-text-title-p {\n  text-align: justify;\n  margin-top: 0.5rem !important;\n  font-weight: 400;\n  font-size: 0.9rem !important;\n  line-height: 120%;\n}\n\n.Grid-first-row {\n  flex-grow: 1;\n}\n\n.Grid-first-row-col {\n  padding-top: 1rem;\n}\n\n.Grid-first-row-col-icon-onboarding {\n  height: 200px;\n  width: 300px;\n}\n\n.Grid-first-row-col-icon-location-onboarding {\n  height: 300px;\n  width: 300px;\n}\n\n.Grid-first-col-tyc-text {\n  color: #7B7676;\n  font-weight: 400;\n  font-size: 0.8rem;\n  line-height: 140%;\n}\n\n.Grid-first-col-tyc-text-note {\n  font-size: 0.6rem;\n}\n\n.Grid-first-button-row {\n  text-align: center;\n}\n\n.Grid-first-button-row-col-nextBtn {\n  font-weight: 100;\n  text-transform: none;\n  --background:#FE910E !important;\n  --color:#fff;\n  width: 100%;\n  height: 100%;\n  --padding-bottom: 0.5rem;\n  --border-radius: 0.2rem;\n  --padding-top: 0.5rem;\n  font-size: 1rem;\n}\n\n.Grid-first-button-row-col-skipBtn {\n  font-weight: 500;\n  text-transform: none;\n  --color:#FE910E;\n  font-size: 0.9rem;\n}\n\n.Grid-choice {\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n}\n\n.Grid-choice-row {\n  text-align: center;\n  padding-top: 50px !important;\n  height: 100%;\n}\n\n.Grid-choice-row-col-Btn {\n  width: 80%;\n  height: auto;\n  --padding-top:11px;\n  --padding-bottom:11px;\n  font-weight: 400;\n  font-size: 18px;\n  --border-radius: 15px;\n  --background: #fff;\n  color: #000;\n  --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);\n  --ripple-color: #FE910E;\n}\n\n.Grid-choice-row ion-button:hover::part(native), .Grid-choice-row ion-button:focus::part(native) {\n  --background:#FE910E;\n  color: #fff !important;\n}\n\n.Grid-choice .Arrow-Btn {\n  height: 49px !important;\n  width: 49px !important;\n  --background: #FE910E;\n  --border-radius: 50%;\n}\n\n.Grid-choice .Arrow-Btn-Icon {\n  height: 35px;\n  width: 35px;\n  position: absolute;\n}\n\n@media (max-width: 376px) {\n  .Grid-choice .Grid-choice-row-col-Btn {\n    font-size: 16px;\n  }\n}\n\n/* \nion-grid {\n    --ion-grid-padding: 20px;\n\n    --ion-grid-padding-xs: 20px;\n    --ion-grid-padding-sm: 20px;\n    --ion-grid-padding-md: 20px;\n    --ion-grid-padding-lg: 20px;\n    --ion-grid-padding-xl: 20px;\n\n    --ion-grid-column-padding: 30px;\n\n    --ion-grid-column-padding-xs: 30px;\n    --ion-grid-column-padding-sm: 30px;\n    --ion-grid-column-padding-md: 30px;\n    --ion-grid-column-padding-lg: 30px;\n    --ion-grid-column-padding-xl: 30px;\n  } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnRUFBQTtBQUdKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUNJO0VBQ0ksWUFBQTtFQUFZLFdBQUE7QUFFcEI7O0FBQUk7RUFDSSxtQkFBQTtBQUVSOztBQUFZO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBRWhCOztBQUFZO0VBQ0ksbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQUVoQjs7QUFFSTtFQUNJLFlBQUE7QUFBUjs7QUFDUTtFQUNJLGlCQUFBO0FBQ1o7O0FBQVk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUVoQjs7QUFBWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRWhCOztBQUdRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQURaOztBQUVZO0VBQ0ksaUJBQUE7QUFBaEI7O0FBSUk7RUFDSSxrQkFBQTtBQUZSOztBQUdRO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQURaOztBQUdRO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURaOztBQVFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUxKOztBQU1JO0VBQ0ksa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUFKUjs7QUFLUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtBQUhaOztBQU13QjtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFKeEI7O0FBU0M7RUFDRyx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQVBKOztBQVFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQU5SOztBQVVHO0VBQ0M7SUFDSSxlQUFBO0VBUk47QUFDRjs7QUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQUEiLCJmaWxlIjoib25ib2FyZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIC0tYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG4uc3dpcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgICAtLWJhY2tncm91bmQ6dXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9raWQtdGVlbi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuXHJcbn1cclxuXHJcbi8vUHJpbWVyIHNsaWRlclxyXG4vL1NUQVJUIEdSSUQgRk9SIFNMSURFUiAxIEFORCAyXHJcbi5HcmlkLWZpcnN0e1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAmLWljb257XHJcbiAgICAgICAgaGVpZ2h0OjMycHg7d2lkdGg6IDMycHg7XHJcbiAgICB9XHJcbiAgICAmLWNvbC10ZXh0e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjAuNXJlbTtcclxuICAgICAgICAmLXRpdGxle1xyXG4gICAgICAgICAgICAmLWgxe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1we1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTsgXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1yb3d7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICYtY29se1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDoxcmVtO1xyXG4gICAgICAgICAgICAmLWljb24tb25ib2FyZGluZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWljb24tbG9jYXRpb24tb25ib2FyZGluZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDozMDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtY29sLXR5Y3tcclxuICAgICAgICAmLXRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjN0I3Njc2O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0MCU7XHJcbiAgICAgICAgICAgICYtbm90ZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLWJ1dHRvbi1yb3d7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICYtY29sLW5leHRCdG57XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6I0ZFOTEwRSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbC1za2lwQnRue1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgLS1jb2xvcjojRkU5MTBFO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIFxyXG5cclxuLy9HcmlkIGZvciBUZWVuS2lkXHJcbi5HcmlkLWNob2ljZXtcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgJi1yb3d7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICYtY29sLUJ0bntcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctdG9wOjExcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206MTFweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2IoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiAjRkU5MTBFO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpb24tYnV0dG9uOmhvdmVyLGlvbi1idXR0b246Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OnBhcnQobmF0aXZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiNGRTkxMEU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgXHJcbiB9XHJcblxyXG4gLkFycm93LUJ0bntcclxuICAgIGhlaWdodDogNDlweCAhaW1wb3J0YW50OyBcclxuICAgIHdpZHRoOiA0OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRTkxMEU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICYtSWNvbntcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gfVxyXG4gLy9tZWRpYSBmb3IgbGVzcyB0YW4gMzYwLCBmb3IgYWRqdXN0IGZvbnQtc2l6ZVxyXG4gICBAbWVkaWEgKG1heC13aWR0aDozNzZweCApIHtcclxuICAgIC5HcmlkLWNob2ljZS1yb3ctY29sLUJ0bntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gICAgIH1cclxufVxyXG4vL21lZGlhIGZvciB3aWR0aCA0MTIgb3IgbW9yZSwgZm9yIGFkanVzdCBwYWRkaW5nIG9mIGdyaWRcclxuQG1lZGlhIChtaW4td2lkdGg6Mzc2cHggKSB7XHJcbiBcclxuXHJcbiAgICAgXHJcbn0gIFxyXG59ICBcclxuLyogXHJcbmlvbi1ncmlkIHtcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZzogMjBweDtcclxuICBcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZy14czogMjBweDtcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZy1zbTogMjBweDtcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZy1tZDogMjBweDtcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZy1sZzogMjBweDtcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZy14bDogMjBweDtcclxuICBcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDMwcHg7XHJcbiAgXHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhzOiAzMHB4O1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1zbTogMzBweDtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbWQ6IDMwcHg7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLWxnOiAzMHB4O1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14bDogMzBweDtcclxuICB9ICovIl19 */";

/***/ }),

/***/ 3455:
/*!************************************************************!*\
  !*** ./src/app/onboarding/onboarding.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-content class=\"ion-padding\" [style.--background]=\"background\">\n\n    <swiper #swiper [config]=\"config\" (slideChangeTransitionEnd)=\"onAfterTransition()\">\n   \n     <!-- Slide 1 -->\n       <ng-template swiperSlide >\n    <ion-grid class=\"Grid-first\"> \n    \n     <ion-row>\n     <ion-col size=\"12\" >\n     <ion-icon src=\"../../assets/icon/navigate.svg\" class=\"Grid-first-icon\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"12\" class=\"Grid-first-col-text\">\n        <ion-text class=\"Grid-first-col-text-title\">\n          <h1 class=\"Grid-first-col-text-title-h1\">!Hola!</h1>\n          <p class=\"Grid-first-col-text-title-p\">\n            Esta es una aplicación que te permitirá realizar un pedido de ayuda en el caso que estés pasando por alguna situación de violencia. \n            Tené en cuenta que toda la información que brindes es confidencial y será utilizada solamente por las personas que procederán a ayudarte (ley 25326).\n            A continuación, tendrás que responder unas breves preguntas para que podamos ayudarte.\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"Grid-first-row\">\n      <ion-col class=\"Grid-first-row-col\" size=\"12\">\n        <ion-icon src=\"../../assets/icon/family-onboarding.svg\" class=\"Grid-first-row-col-icon-onboarding\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"12\" class=\"Grid-first-col-tyc\">\n        <ion-text class=\"Grid-first-col-tyc-text\">\n            <p> Apretando el boton “Continuar”, aceptas nuestros\n              <span class=\"Grid-first-col-tyc-text-note\">“Terminos y Condiciones & Politicas de Privacidad”.</span>\n            </p>\n      </ion-text>\n      </ion-col>\n     </ion-row>\n      <ion-row class=\"Grid-first-button-row\">\n        <ion-col size=\"12\" class=\"Grid-first-button-row-col\">\n          <ion-button class=\"Grid-first-button-row-col-nextBtn\" (click)=\"next()\">Continuar</ion-button>\n        </ion-col>\n       </ion-row>\n    </ion-grid>\n  </ng-template>    \n    <!-- Slide 2 -->\n     <ng-template swiperSlide>\n    <ion-grid class=\"Grid-first\">\n     <ion-row>\n      <ion-col size=\"12\">\n        <ion-icon src=\"../../assets/icon/navigate.svg\" class=\"Grid-first-icon\"></ion-icon>\n      </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col size=\"12\" class=\"Grid-first-col-text\">\n        <ion-text class=\"Grid-first-col-text-title\">\n          <h1 class=\"Grid-first-col-text-title-h1\">Habilita tu ubicación.</h1>\n          <p class=\"Grid-first-col-text-title-p\">\n            Este sitio web necesita tu ubicación.\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"Grid-first-row\">\n      <ion-col class=\"Grid-first-row-col\" size=\"12\">\n        <ion-icon src=\"../../assets/icon/location-onboarding.svg\" class=\"Grid-first-row-col-icon-location-onboarding\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"12\" class=\"Grid-first-col-tyc\">\n        <ion-text class=\"Grid-first-col-tyc-text\">\n            <p>\n              Este sitio web utiliza tu ubicación para poder brindarte una mejor experiencia y poder proceder correctamente con tu solicitud.\n            </p>\n      </ion-text>\n      </ion-col>\n     </ion-row>\n      <ion-row class=\"Grid-first-button-row\">\n        <ion-col size=\"12\" class=\"Grid-first-button-row-col\">\n          <ion-button class=\"Grid-first-button-row-col-nextBtn\" (click)=\"getLocation()\">Habilitar ubicación</ion-button>\n        </ion-col>\n        <ion-col size=\"12\" class=\"Grid-first-button-row-col\">\n          <ion-button  fill=\"clear\" class=\"Grid-first-button-row-col-skipBtn\" (click)=\"skip()\">\n              No, más tarde.\n          </ion-button>\n        </ion-col>\n       </ion-row>\n    </ion-grid>\n  </ng-template>     \n  <ng-template swiperSlide>\n    <ion-grid fullscreen=\"true\" class=\"Grid-choice\">\n      <ion-row class=\"Grid-choice-row\" style=\"flex-grow: 1;\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n          <ion-icon src=\"../../assets/icon/kid.svg\" style=\"height:150px;width: 230px;\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"Grid-choice-row-col\"  size=\"12\">\n          <ion-button  class=\"Grid-choice-row-col-Btn\" (click)=\"select('kid')\"> SOY NIÑO / NIÑA</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"Grid-choice-row\">\n        <ion-col class=\"ion-text-center\" size=\"12\">\n          <ion-icon src=\"../../assets/icon/teen.svg\" style=\"height:150px;width: 230px;\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"Grid-choice-row-col\"size=\"12\">\n          <ion-button class=\"Grid-choice-row-col-Btn\"  (click)=\"select('teen')\" > SOY ADOLESCENTE</ion-button>\n        </ion-col>\n      </ion-row>\n<ion-row>\n\n  <ion-col size=\"12\" class=\"ion-text-center\">\n    <ion-button class=\"Arrow-Btn\" (click)=\"save()\" [disabled]=\"!selected\">\n      <ion-icon  class=\"Arrow-Btn-Icon\" src=\"../../assets/icon/chevron-forward.svg\"></ion-icon>\n  </ion-button>\n  </ion-col>\n</ion-row>\n\n    </ion-grid>\n    \n  </ng-template>\n\n</swiper>  \n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_onboarding_onboarding_module_ts.js.map