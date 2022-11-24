(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_map_map_module_ts"],{

/***/ 1216:
/*!*******************************************!*\
  !*** ./src/app/map/map-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 9510);




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapPageRoutingModule);



/***/ }),

/***/ 2622:
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageModule": () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 1216);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page */ 9510);








let MapPageModule = class MapPageModule {
};
MapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage]
    })
], MapPageModule);



/***/ }),

/***/ 9510:
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page.html?ngResource */ 7122);
/* harmony import */ var _map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.page.scss?ngResource */ 5621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ 5836);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var esri_leaflet_geocoder_dist_esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri-leaflet-geocoder/dist/esri-leaflet-geocoder */ 3158);
/* harmony import */ var esri_leaflet_geocoder_dist_esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(esri_leaflet_geocoder_dist_esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/map.service */ 9947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);


/* eslint-disable max-len */

/* eslint-disable no-underscore-dangle */

/* eslint-disable prefer-const */



 //leaflet imports





let MapPage = class MapPage {
  constructor(_mapService, loadingController) {
    this._mapService = _mapService;
    this.loadingController = loadingController;
    this.properties = [];
    this.$cords = this._mapService.ltlng;
    this.key = 'AAPK895f48d83b5543ab80c5d058d510d5971uhYgfFtvdNCIB-no6TgvFEbUE-H-h6ZfPfs9GOWCpAtsp9cTGA8zFsd2DiPWwPf';
    this.greenIcon = new leaflet__WEBPACK_IMPORTED_MODULE_3__.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
  }

  ionViewDidEnter() {
    var _this = this;

    return (0,C_proyectos_defensoria_Camara_defensoria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._mapService.loadCoordenates();

      const loading = yield _this.loadingController.create({
        message: 'Loading...',
        spinner: 'circles'
      });
      loading.present();

      _this.$cords.subscribe(data => {
        _this.cords = data;

        _this._mapService.generateMap(_this.cords);

        loading.dismiss();
      });
    })();
  }

};

MapPage.ctorParameters = () => [{
  type: _services_map_service__WEBPACK_IMPORTED_MODULE_5__.MapService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}];

MapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-map',
  template: _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MapPage);


/***/ }),

/***/ 9947:
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapService": () => (/* binding */ MapService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 5836);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var esri_leaflet_geocoder_dist_esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! esri-leaflet-geocoder/dist/esri-leaflet-geocoder */ 3158);
/* harmony import */ var esri_leaflet_geocoder_dist_esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(esri_leaflet_geocoder_dist_esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ 1188);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);

/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
/* eslint-disable prefer-const */

//leaflet imports






let MapService = class MapService {
    constructor(plt, storageService, storage) {
        this.plt = plt;
        this.storageService = storageService;
        this.storage = storage;
        this.properties = [];
        this.hospitales = [];
        this.ltlng = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.greenIcon = new leaflet__WEBPACK_IMPORTED_MODULE_0__.Icon({
            iconUrl: '../../assets/icon/policia.svg',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [42, 42],
            iconAnchor: [42, 42],
            popupAnchor: [1, -34],
            shadowSize: [32, 32]
        });
        this.hospitalIcon = new leaflet__WEBPACK_IMPORTED_MODULE_0__.Icon({
            iconUrl: '../../assets/icon/hospital.svg',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [42, 42],
            iconAnchor: [42, 42],
            popupAnchor: [1, -34],
            shadowSize: [32, 32]
        });
        this.key = 'AAPK895f48d83b5543ab80c5d058d510d5971uhYgfFtvdNCIB-no6TgvFEbUE-H-h6ZfPfs9GOWCpAtsp9cTGA8zFsd2DiPWwPf';
        this.loadCoordenates();
    }
    loadCoordenates() {
        this.storageService.getStorage('latlng').then((data) => {
            if (data) {
                this.ltlng.next(data);
            }
            else {
                this.ltlng.next(false);
            }
        });
    }
    getCoord() {
        return this.ltlng.asObservable();
    }
    generateMap(cords) {
        if (!cords) {
            (cords = [-27.366667, -55.896944]);
        }
        if (this.map !== undefined) {
            this.map.remove();
        }
        this.map = new leaflet__WEBPACK_IMPORTED_MODULE_0__.Map('map').setView([Number(cords[0]), Number(cords[1])], 16);
        leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer('https://api.mapbox.com/styles/v1/danielsanr/cl7s448ej004i15lqz3hudwgv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGFuaWVsc2FuciIsImEiOiJjbDdzNGJ3MTcwbHQyM3ZvODg5NHhxeTdzIn0.9FGfq9AypFMgmFR6gWjlFw', {
            maxZoom: 19,
            attribution: "<a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
        }).addTo(this.map);
        fetch('./assets/datos/comisarias.json').then(res => res.json())
            .then(data => {
            this.properties = data;
            for (const m of this.properties) {
                let lt = [m.longitud, m.latitud];
                let address = (m.descripcion > 1 ? m.descripcion : 'Direccion no disponible');
                let name = (m.nombre.length > 1 ? m.nombre : 'Nombre no disponible');
                let city = (m.ciudad.length > 1 ? m.ciudad : 'Ciudad no disponible');
                let phone = (m.telefono.length > 1 ? m.telefono : 'Telefono no disponible');
                leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([m.longitud, m.latitud], { icon: this.greenIcon }).addTo(this.map)
                    .bindPopup(`<div style="font-weight: bold; text-align: center;">COMISARIA</div><hr>` +
                    `<strong>Ciudad: </strong>${city}<br>` +
                    `<strong>Nombre: </strong>${name}<br>` +
                    `<strong>Direccion: </strong>${address}<br>` +
                    `<strong>Telefono: </strong>${phone}<br><hr>`);
            }
            let circle = leaflet__WEBPACK_IMPORTED_MODULE_0__.circleMarker(cords, {
                radius: 50,
                color: 'cornflowerblue',
                fillOpacity: 0.2,
                opacity: 0.5
            }).addTo(this.map);
        });
        /*  .catch( err =>{
          console.error(err);
         }); */
        fetch('./assets/datos/hospitales.json').then(res => res.json())
            .then(data => {
            this.hospitales = data;
            for (const m of this.hospitales) {
                let lt = [m.Longitud, m.Latitud];
                console.log(lt);
                let address = (m.Direccion > 1 ? m.Direccion : 'Direccion no disponible');
                let name = (m.Nombre.length > 1 ? m.Nombre : 'Nombre no disponible');
                let city = (m.Localidad.length > 1 ? m.Localidad : 'Ciudad no disponible');
                let phone = ((m.Telefono_1.length > 1 || m.Telefono_2.length > 1) ? m.Telefono_1 + ' / ' + m.Telefono_2 : 'Telefono no disponible');
                leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([m.Latitud, m.Longitud], { icon: this.hospitalIcon }).addTo(this.map)
                    .bindPopup(`<div style="font-weight: bold; text-align: center;">HOSPITAL</div><hr>` +
                    `<strong>Ciudad: </strong>${city}<br>` +
                    `<strong>Nombre: </strong>${name}<br>` +
                    `<strong>Direccion: </strong>${address}<br>` +
                    `<strong>Telefono: </strong>${phone}<br><hr>`);
            }
        });
    }
};
MapService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage }
];
MapService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], MapService);

/*     new ELG.reverseGeocode()
    .latlng(lt)
    .run( (error, result, response)=>{
      console.log(error);
      let address = ( result.address.Address.length> 1 ? result.address.Address : 'Direccion no disponible');
      let name = (m.nombre.length > 1 ? m.nombre : 'Nombre no disponible');
      let city = ( result.address.City.length> 1 ? result.address.City : 'Ciudad no disponible');
      let phone = (m.telefono.length > 1 ? m.telefono : 'Telefono no disponible');
      Leaflet.marker([m.longitud,m.latitud],{icon:this.greenIcon}).addTo(this.map)
      .bindPopup(`<div style="font-weight: bold; text-align: center;">COMISARIA</div><hr>` +
      `<strong>Ciudad: </strong>${ city }<br>` +
      `<strong>Nombre: </strong>${ name}<br>` +
      `<strong>Direccion: </strong>${ address}<br>` +
      `<strong>Telefono: </strong>${ phone }<br><hr>`);
    }); */


/***/ }),

/***/ 3158:
/*!**************************************************************************!*\
  !*** ./node_modules/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* esri-leaflet-geocoder - v3.1.3 - Fri Apr 08 2022 10:06:57 GMT-0500 (Central Daylight Time)
 * Copyright (c) 2022 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
!function (e, t) {
   true ? t(exports, __webpack_require__(/*! leaflet */ 5836), __webpack_require__(/*! esri-leaflet */ 1223)) : 0;
}(this, function (e, t, s) {
  "use strict";

  var i = "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/",
      o = s.Task.extend({
    path: "findAddressCandidates",
    params: {
      outSr: 4326,
      forStorage: !1,
      outFields: "*",
      maxLocations: 20
    },
    setters: {
      address: "address",
      neighborhood: "neighborhood",
      city: "city",
      subregion: "subregion",
      region: "region",
      postal: "postal",
      country: "country",
      text: "singleLine",
      category: "category",
      token: "token",
      apikey: "apikey",
      key: "magicKey",
      fields: "outFields",
      forStorage: "forStorage",
      maxLocations: "maxLocations",
      countries: "sourceCountry"
    },
    initialize: function (e) {
      (e = e || {}).url = e.url || i, s.Task.prototype.initialize.call(this, e);
    },
    within: function (e) {
      return e = t.latLngBounds(e), this.params.searchExtent = s.Util.boundsToExtent(e), this;
    },
    nearby: function (e, s) {
      var i = t.latLng(e);
      return this.params.location = i.lng + "," + i.lat, s && (this.params.distance = Math.min(Math.max(s, 2e3), 5e4)), this;
    },
    run: function (e, t) {
      return this.options.token && (this.params.token = this.options.token), this.options.apikey && (this.params.token = this.options.apikey), this.options.customParam && (this.params[this.options.customParam] = this.params.singleLine, delete this.params.singleLine), this.request(function (s, i) {
        var o = this._processGeocoderResponse,
            r = s ? void 0 : o(i);
        e.call(t, s, {
          results: r
        }, i);
      }, this);
    },
    _processGeocoderResponse: function (e) {
      for (var i = [], o = 0; o < e.candidates.length; o++) {
        var r = e.candidates[o];
        if (r.extent) var n = s.Util.extentToBounds(r.extent);
        i.push({
          text: r.address,
          bounds: n,
          score: r.score,
          latlng: t.latLng(r.location.y, r.location.x),
          properties: r.attributes
        });
      }

      return i;
    }
  });

  function r(e) {
    return new o(e);
  }

  var n = s.Task.extend({
    path: "reverseGeocode",
    params: {
      outSR: 4326,
      returnIntersection: !1
    },
    setters: {
      distance: "distance",
      language: "langCode",
      intersection: "returnIntersection",
      apikey: "apikey"
    },
    initialize: function (e) {
      (e = e || {}).url = e.url || i, s.Task.prototype.initialize.call(this, e);
    },
    latlng: function (e) {
      var s = t.latLng(e);
      return this.params.location = s.lng + "," + s.lat, this;
    },
    run: function (e, s) {
      return this.options.token && (this.params.token = this.options.token), this.options.apikey && (this.params.token = this.options.apikey), this.request(function (i, o) {
        var r;
        r = i ? void 0 : {
          latlng: t.latLng(o.location.y, o.location.x),
          address: o.address
        }, e.call(s, i, r, o);
      }, this);
    }
  });

  function a(e) {
    return new n(e);
  }

  var l = s.Task.extend({
    path: "suggest",
    params: {},
    setters: {
      text: "text",
      category: "category",
      countries: "countryCode",
      maxSuggestions: "maxSuggestions"
    },
    initialize: function (e) {
      (e = e || {}).url || (e.url = i, e.supportsSuggest = !0), s.Task.prototype.initialize.call(this, e);
    },
    within: function (e) {
      var i = (e = t.latLngBounds(e)).getCenter(),
          o = e.getNorthWest();
      return this.params.location = i.lng + "," + i.lat, this.params.distance = Math.min(Math.max(i.distanceTo(o), 2e3), 5e4), this.params.searchExtent = s.Util.boundsToExtent(e), this;
    },
    nearby: function (e, s) {
      var i = t.latLng(e);
      return this.params.location = i.lng + "," + i.lat, s && (this.params.distance = Math.min(Math.max(s, 2e3), 5e4)), this;
    },
    run: function (e, t) {
      if (this.options.supportsSuggest) return this.request(function (s, i) {
        e.call(t, s, i, i);
      }, this);
      console.warn("this geocoding service does not support asking for suggestions");
    }
  });

  function u(e) {
    return new l(e);
  }

  var h = s.Service.extend({
    initialize: function (e) {
      (e = e || {}).apikey && (e.token = e.apikey), e.url ? (s.Service.prototype.initialize.call(this, e), this._confirmSuggestSupport()) : (e.url = i, e.supportsSuggest = !0, s.Service.prototype.initialize.call(this, e));
    },
    geocode: function () {
      return r(this);
    },
    reverse: function () {
      return a(this);
    },
    suggest: function () {
      return u(this);
    },
    _confirmSuggestSupport: function () {
      this.metadata(function (e, t) {
        e || (t.capabilities && t.capabilities.indexOf("Suggest") > -1 ? this.options.supportsSuggest = !0 : this.options.supportsSuggest = !1, this.options.customParam = t.singleLineAddressField.name);
      }, this);
    }
  });
  var d = t.Evented.extend({
    options: {
      zoomToResult: !0,
      useMapBounds: 12,
      searchBounds: null
    },
    initialize: function (e, s) {
      if (t.Util.setOptions(this, s), this._control = e, !s || !s.providers || !s.providers.length) throw new Error("You must specify at least one provider");
      this._providers = s.providers;
    },
    _geocode: function (e, s, i) {
      var o,
          r = 0,
          n = [],
          a = t.Util.bind(function (t, s) {
        r--, t || (s && (n = n.concat(s)), r <= 0 && (o = this._boundsFromResults(n), this.fire("results", {
          results: n,
          bounds: o,
          latlng: o ? o.getCenter() : void 0,
          text: e
        }, !0), this.options.zoomToResult && o && this._control._map.fitBounds(o), this.fire("load")));
      }, this);
      if (s) r++, i.results(e, s, this._searchBounds(), a);else for (var l = 0; l < this._providers.length; l++) r++, this._providers[l].results(e, s, this._searchBounds(), a);
    },
    _suggest: function (e) {
      var s = this._providers.length,
          i = 0,
          o = t.Util.bind(function (e, o) {
        return t.Util.bind(function (t, r) {
          if (s -= 1, i += r.length, t) return this._control._clearProviderSuggestions(o), void this._control._finalizeSuggestions(s, i);
          if (r.length) for (var n = 0; n < r.length; n++) r[n].provider = o;else this._control._renderSuggestions(r);
          o._lastRender !== e && this._control._clearProviderSuggestions(o), r.length && this._control._input.value === e && (o._lastRender = e, this._control._renderSuggestions(r)), this._control._finalizeSuggestions(s, i);
        }, this);
      }, this);
      this._pendingSuggestions = [];

      for (var r = 0; r < this._providers.length; r++) {
        var n = this._providers[r],
            a = n.suggestions(e, this._searchBounds(), o(e, n));

        this._pendingSuggestions.push(a);
      }
    },
    _searchBounds: function () {
      return null !== this.options.searchBounds ? this.options.searchBounds : !1 === this.options.useMapBounds ? null : !0 === this.options.useMapBounds || this.options.useMapBounds <= this._control._map.getZoom() ? this._control._map.getBounds() : null;
    },
    _boundsFromResults: function (e) {
      if (e.length) {
        for (var s = t.latLngBounds([0, 0], [0, 0]), i = [], o = [], r = e.length - 1; r >= 0; r--) {
          var n = e[r];
          o.push(n.latlng), n.bounds && n.bounds.isValid() && !n.bounds.equals(s) && i.push(n.bounds);
        }

        for (var a = t.latLngBounds(o), l = 0; l < i.length; l++) a.extend(i[l]);

        return a;
      }
    },
    _getAttribution: function () {
      for (var e = [], t = this._providers, s = 0; s < t.length; s++) t[s].options.attribution && e.push(t[s].options.attribution);

      return e.join(", ");
    }
  });

  function c(e, t) {
    return new d(e, t);
  }

  var p = h.extend({
    options: {
      label: "Places and Addresses",
      maxResults: 5
    },
    suggestions: function (e, t, s) {
      var i = this.suggest().text(e);
      return t && i.within(t), this.options.nearby && i.nearby(this.options.nearby), this.options.countries && i.countries(this.options.countries), this.options.categories && i.category(this.options.categories), i.maxSuggestions(this.options.maxResults), i.run(function (e, t, i) {
        var o = [];
        if (!e) for (; i.suggestions.length && o.length <= this.options.maxResults - 1;) {
          var r = i.suggestions.shift();
          r.isCollection || o.push({
            text: r.text,
            unformattedText: r.text,
            magicKey: r.magicKey
          });
        }
        s(e, o);
      }, this);
    },
    results: function (e, t, s, i) {
      var o = this.geocode().text(e);
      return t && o.key(t), o.maxLocations(this.options.maxResults), s && o.within(s), this.options.forStorage && o.forStorage(!0), this.options.nearby && o.nearby(this.options.nearby), this.options.countries && o.countries(this.options.countries), this.options.categories && o.category(this.options.categories), o.run(function (e, t) {
        i(e, t.results);
      }, this);
    }
  });

  function g(e) {
    return new p(e);
  }

  var f = t.Control.extend({
    includes: t.Evented.prototype,
    options: {
      position: "topleft",
      collapseAfterResult: !0,
      expanded: !1,
      allowMultipleResults: !0,
      placeholder: "Search for places or addresses",
      title: "Location Search"
    },
    initialize: function (e) {
      t.Util.setOptions(this, e), e && e.providers && e.providers.length || (e || (e = {}), e.providers = [g()]), this._geosearchCore = c(this, e), this._geosearchCore._providers = e.providers, this._geosearchCore.addEventParent(this);

      for (var s = 0; s < this._geosearchCore._providers.length; s++) this._geosearchCore._providers[s].addEventParent(this);

      this._geosearchCore._pendingSuggestions = [], t.Control.prototype.initialize.call(this, e);
    },
    _renderSuggestions: function (e) {
      var s, i, o;
      e.length > 0 && (this._suggestions.style.display = "block");

      for (var r = [], n = 0; n < e.length; n++) {
        var a = e[n];

        if (!o && this._geosearchCore._providers.length > 1 && s !== a.provider.options.label && ((o = t.DomUtil.create("div", "geocoder-control-header", a.provider._contentsElement)).textContent = a.provider.options.label, o.innerText = a.provider.options.label, s = a.provider.options.label), i || (i = t.DomUtil.create("ul", "geocoder-control-list", a.provider._contentsElement)), -1 === r.indexOf(a.text)) {
          var l = t.DomUtil.create("li", "geocoder-control-suggestion", i);
          l.innerHTML = a.text, l.provider = a.provider, l["data-magic-key"] = a.magicKey, l.unformattedText = a.unformattedText;
        } else for (var u = 0; u < i.childNodes.length; u++) i.childNodes[u].innerHTML === a.text && (i.childNodes[u]["data-magic-key"] += "," + a.magicKey);

        r.push(a.text);
      }

      this.getPosition().indexOf("top") > -1 && (this._suggestions.style.maxHeight = this._map.getSize().y - this._suggestions.offsetTop - this._wrapper.offsetTop - 10 + "px"), this.getPosition().indexOf("bottom") > -1 && this._setSuggestionsBottomPosition();
    },
    _setSuggestionsBottomPosition: function () {
      this._suggestions.style.maxHeight = this._map.getSize().y - this._map._controlCorners[this.getPosition()].offsetHeight - this._wrapper.offsetHeight + "px", this._suggestions.style.top = -this._suggestions.offsetHeight - this._wrapper.offsetHeight + 20 + "px";
    },
    _boundsFromResults: function (e) {
      if (e.length) {
        for (var s = t.latLngBounds([0, 0], [0, 0]), i = [], o = [], r = e.length - 1; r >= 0; r--) {
          var n = e[r];
          o.push(n.latlng), n.bounds && n.bounds.isValid() && !n.bounds.equals(s) && i.push(n.bounds);
        }

        for (var a = t.latLngBounds(o), l = 0; l < i.length; l++) a.extend(i[l]);

        return a;
      }
    },
    clear: function () {
      this._clearAllSuggestions(), this.options.collapseAfterResult && (this._input.value = "", this._lastValue = "", this._input.placeholder = "", t.DomUtil.removeClass(this._wrapper, "geocoder-control-expanded")), !this._map.scrollWheelZoom.enabled() && this._map.options.scrollWheelZoom && this._map.scrollWheelZoom.enable();
    },
    _clearAllSuggestions: function () {
      this._suggestions.style.display = "none";

      for (var e = 0; e < this.options.providers.length; e++) this._clearProviderSuggestions(this.options.providers[e]);
    },
    _clearProviderSuggestions: function (e) {
      e._contentsElement.innerHTML = "";
    },
    _finalizeSuggestions: function (e, s) {
      e || (t.DomUtil.removeClass(this._input, "geocoder-control-loading"), this.getPosition().indexOf("bottom") > -1 && this._setSuggestionsBottomPosition(), s || this._clearAllSuggestions());
    },
    _setupClick: function () {
      t.DomUtil.addClass(this._wrapper, "geocoder-control-expanded"), this._input.focus();
    },
    disable: function () {
      this._input.disabled = !0, t.DomUtil.addClass(this._input, "geocoder-control-input-disabled"), t.DomEvent.removeListener(this._wrapper, "click", this._setupClick, this);
    },
    enable: function () {
      this._input.disabled = !1, t.DomUtil.removeClass(this._input, "geocoder-control-input-disabled"), t.DomEvent.addListener(this._wrapper, "click", this._setupClick, this);
    },
    getAttribution: function () {
      for (var e = [], t = 0; t < this._providers.length; t++) this._providers[t].options.attribution && e.push(this._providers[t].options.attribution);

      return e.join(", ");
    },
    geocodeSuggestion: function (e) {
      var t = e.target || e.srcElement;
      t.classList.contains("geocoder-control-suggestions") || t.classList.contains("geocoder-control-header") || (t.classList.length < 1 && (t = t.parentNode), this._geosearchCore._geocode(t.unformattedText, t["data-magic-key"], t.provider), this.clear());
    },
    onAdd: function (e) {
      s.Util.setEsriAttribution(e), this._map = e, this._wrapper = t.DomUtil.create("div", "geocoder-control"), this._input = t.DomUtil.create("input", "geocoder-control-input leaflet-bar", this._wrapper), this._input.title = this.options.title, this.options.expanded && (t.DomUtil.addClass(this._wrapper, "geocoder-control-expanded"), this._input.placeholder = this.options.placeholder), this._suggestions = t.DomUtil.create("div", "geocoder-control-suggestions leaflet-bar", this._wrapper);

      for (var i = 0; i < this.options.providers.length; i++) this.options.providers[i]._contentsElement = t.DomUtil.create("div", null, this._suggestions);

      var o = this._geosearchCore._getAttribution();

      return e.attributionControl && e.attributionControl.addAttribution(o), t.DomEvent.addListener(this._input, "focus", function (e) {
        this._input.placeholder = this.options.placeholder, t.DomUtil.addClass(this._wrapper, "geocoder-control-expanded");
      }, this), t.DomEvent.addListener(this._wrapper, "click", this._setupClick, this), t.DomEvent.addListener(this._suggestions, "mousedown", this.geocodeSuggestion, this), t.DomEvent.addListener(this._input, "blur", function (e) {
        this.clear();
      }, this), t.DomEvent.addListener(this._input, "keydown", function (e) {
        var s = (e.target || e.srcElement).value;
        t.DomUtil.addClass(this._wrapper, "geocoder-control-expanded");

        for (var i, o = this._suggestions.querySelectorAll(".geocoder-control-suggestion"), r = this._suggestions.querySelectorAll(".geocoder-control-selected")[0], n = 0; n < o.length; n++) if (o[n] === r) {
          i = n;
          break;
        }

        switch (e.keyCode) {
          case 13:
            r ? (this._input.value = r.innerText, this._geosearchCore._geocode(r.unformattedText, r["data-magic-key"], r.provider), this.clear()) : this.options.allowMultipleResults && s.length >= 2 ? (this._geosearchCore._geocode(this._input.value, void 0), this.clear()) : 1 === o.length ? (t.DomUtil.addClass(o[0], "geocoder-control-selected"), this._geosearchCore._geocode(o[0].innerHTML, o[0]["data-magic-key"], o[0].provider)) : (this.clear(), this._input.blur()), t.DomEvent.preventDefault(e);
            break;

          case 38:
            r && t.DomUtil.removeClass(r, "geocoder-control-selected");
            var a = o[i - 1];
            r && a ? t.DomUtil.addClass(a, "geocoder-control-selected") : t.DomUtil.addClass(o[o.length - 1], "geocoder-control-selected"), t.DomEvent.preventDefault(e);
            break;

          case 40:
            r && t.DomUtil.removeClass(r, "geocoder-control-selected");
            var l = o[i + 1];
            r && l ? t.DomUtil.addClass(l, "geocoder-control-selected") : t.DomUtil.addClass(o[0], "geocoder-control-selected"), t.DomEvent.preventDefault(e);
            break;

          default:
            for (var u = 0; u < this._geosearchCore._pendingSuggestions.length; u++) {
              var h = this._geosearchCore._pendingSuggestions[u];
              h && h.abort && !h.id && h.abort();
            }

        }
      }, this), t.DomEvent.addListener(this._input, "keyup", t.Util.throttle(function (e) {
        var s = e.which || e.keyCode,
            i = (e.target || e.srcElement).value;
        if (i.length < 2) return this._lastValue = this._input.value, this._clearAllSuggestions(), void t.DomUtil.removeClass(this._input, "geocoder-control-loading");
        27 !== s ? 13 !== s && 38 !== s && 40 !== s && this._input.value !== this._lastValue && (this._lastValue = this._input.value, t.DomUtil.addClass(this._input, "geocoder-control-loading"), this._geosearchCore._suggest(i)) : this._clearAllSuggestions();
      }, 50, this), this), t.DomEvent.disableClickPropagation(this._wrapper), t.DomEvent.addListener(this._suggestions, "mouseover", function (t) {
        e.scrollWheelZoom.enabled() && e.options.scrollWheelZoom && e.scrollWheelZoom.disable();
      }), t.DomEvent.addListener(this._suggestions, "mouseout", function (t) {
        !e.scrollWheelZoom.enabled() && e.options.scrollWheelZoom && e.scrollWheelZoom.enable();
      }), this._geosearchCore.on("load", function (e) {
        t.DomUtil.removeClass(this._input, "geocoder-control-loading"), this.clear(), this._input.blur();
      }, this), this._wrapper;
    }
  });
  var v = s.FeatureLayerService.extend({
    options: {
      label: "Feature Layer",
      maxResults: 5,
      bufferRadius: 1e3,
      searchMode: "contain",
      formatSuggestion: function (e) {
        return e.properties[this.options.searchFields[0]];
      }
    },
    initialize: function (e) {
      e.apikey && (e.token = e.apikey), s.FeatureLayerService.prototype.initialize.call(this, e), "string" == typeof this.options.searchFields && (this.options.searchFields = [this.options.searchFields]), this._suggestionsQuery = this.query(), this._resultsQuery = this.query();
    },
    suggestions: function (e, t, s) {
      var i = this._suggestionsQuery.where(this._buildQuery(e)).returnGeometry(!1);

      return t && i.intersects(t), this.options.idField && i.fields([this.options.idField].concat(this.options.searchFields)), i.run(function (e, t, i) {
        if (e) s(e, []);else {
          this.options.idField = i.objectIdFieldName;

          for (var o = [], r = t.features.length - 1; r >= 0; r--) {
            var n = t.features[r];
            o.push({
              text: this.options.formatSuggestion.call(this, n),
              unformattedText: n.properties[this.options.searchFields[0]],
              magicKey: n.id
            });
          }

          s(e, o.slice(0, this.options.maxResults));
        }
      }, this);
    },
    results: function (e, s, i, o) {
      var r = this._resultsQuery;
      return s ? (delete r.params.where, r.featureIds([s])) : r.where(this._buildQuery(e)), i && r.within(i), r.run(t.Util.bind(function (e, t) {
        for (var s = [], i = 0; i < t.features.length; i++) {
          var r = t.features[i];

          if (r) {
            var n = this._featureBounds(r),
                a = {
              latlng: n.getCenter(),
              bounds: n,
              text: this.options.formatSuggestion.call(this, r),
              properties: r.properties,
              geojson: r
            };

            s.push(a), delete this._resultsQuery.params.objectIds;
          }
        }

        o(e, s);
      }, this));
    },
    orderBy: function (e, t) {
      this._suggestionsQuery.orderBy(e, t);
    },
    _buildQuery: function (e) {
      for (var t = [], s = this.options.searchFields.length - 1; s >= 0; s--) {
        var i = 'upper("' + this.options.searchFields[s] + '")';
        if ("contain" === this.options.searchMode) t.push(i + " LIKE upper('%" + e + "%')");else if ("startWith" === this.options.searchMode) t.push(i + " LIKE upper('" + e + "%')");else if ("endWith" === this.options.searchMode) t.push(i + " LIKE upper('%" + e + "')");else {
          if ("strict" !== this.options.searchMode) throw new Error('L.esri.Geocoding.featureLayerProvider: Invalid parameter for "searchMode". Use one of "contain", "startWith", "endWith", or "strict"');
          t.push(i + " LIKE upper('" + e + "')");
        }
      }

      return this.options.where ? this.options.where + " AND (" + t.join(" OR ") + ")" : t.join(" OR ");
    },
    _featureBounds: function (e) {
      var s = t.geoJson(e);

      if ("Point" === e.geometry.type) {
        var i = s.getBounds().getCenter(),
            o = this.options.bufferRadius / 40075017 * 360 / Math.cos(180 / Math.PI * i.lat),
            r = this.options.bufferRadius / 40075017 * 360;
        return t.latLngBounds([i.lat - r, i.lng - o], [i.lat + r, i.lng + o]);
      }

      return s.getBounds();
    }
  });
  var m = s.MapService.extend({
    options: {
      layers: [0],
      label: "Map Service",
      bufferRadius: 1e3,
      maxResults: 5,
      formatSuggestion: function (e) {
        return e.properties[e.displayFieldName] + " <small>" + e.layerName + "</small>";
      }
    },
    initialize: function (e) {
      e.apikey && (e.token = e.apikey), s.MapService.prototype.initialize.call(this, e), this._getIdFields();
    },
    suggestions: function (e, t, s) {
      return this.find().text(e).fields(this.options.searchFields).returnGeometry(!1).layers(this.options.layers).run(function (e, t, i) {
        var o = [];

        if (!e) {
          var r = Math.min(this.options.maxResults, t.features.length);
          i.results = i.results.reverse();

          for (var n = 0; n < r; n++) {
            var a = t.features[n],
                l = i.results[n],
                u = l.layerId,
                h = this._idFields[u];
            a.layerId = u, a.layerName = this._layerNames[u], a.displayFieldName = this._displayFields[u], h && o.push({
              text: this.options.formatSuggestion.call(this, a),
              unformattedText: a.properties[a.displayFieldName],
              magicKey: l.attributes[h] + ":" + u
            });
          }
        }

        s(e, o.reverse());
      }, this);
    },
    results: function (e, t, s, i) {
      var o,
          r = [];

      if (t && !t.includes(",")) {
        var n = t.split(":")[0],
            a = t.split(":")[1];
        o = this.query().layer(a).featureIds(n);
      } else o = this.find().text(e).fields(this.options.searchFields).layers(this.options.layers);

      return o.run(function (e, t, s) {
        if (!e) {
          s.results && (s.results = s.results.reverse());

          for (var o = 0; o < t.features.length; o++) {
            var n = t.features[o];

            if (a = a || s.results[o].layerId, n && void 0 !== a) {
              var l = this._featureBounds(n);

              n.layerId = a, n.layerName = this._layerNames[a], n.displayFieldName = this._displayFields[a];
              var u = {
                latlng: l.getCenter(),
                bounds: l,
                text: this.options.formatSuggestion.call(this, n),
                properties: n.properties,
                geojson: n
              };
              r.push(u);
            }
          }
        }

        i(e, r.reverse());
      }, this);
    },
    _featureBounds: function (e) {
      var s = t.geoJson(e);

      if ("Point" === e.geometry.type) {
        var i = s.getBounds().getCenter(),
            o = this.options.bufferRadius / 40075017 * 360 / Math.cos(180 / Math.PI * i.lat),
            r = this.options.bufferRadius / 40075017 * 360;
        return t.latLngBounds([i.lat - r, i.lng - o], [i.lat + r, i.lng + o]);
      }

      return s.getBounds();
    },
    _layerMetadataCallback: function (e) {
      return t.Util.bind(function (t, s) {
        if (!t) {
          this._displayFields[e] = s.displayField, this._layerNames[e] = s.name;

          for (var i = 0; i < s.fields.length; i++) {
            var o = s.fields[i];

            if ("esriFieldTypeOID" === o.type) {
              this._idFields[e] = o.name;
              break;
            }
          }
        }
      }, this);
    },
    _getIdFields: function () {
      this._idFields = {}, this._displayFields = {}, this._layerNames = {};

      for (var e = 0; e < this.options.layers.length; e++) {
        var t = this.options.layers[e];
        this.get(t, {}, this._layerMetadataCallback(t));
      }
    }
  });

  var _ = h.extend({
    options: {
      label: "Geocode Server",
      maxResults: 5
    },
    suggestions: function (e, t, s) {
      if (this.options.supportsSuggest) {
        var i = this.suggest().text(e);
        return t && i.within(t), i.run(function (e, t, i) {
          var o = [];
          if (!e) for (; i.suggestions.length && o.length <= this.options.maxResults - 1;) {
            var r = i.suggestions.shift();
            r.isCollection || o.push({
              text: r.text,
              unformattedText: r.text,
              magicKey: r.magicKey
            });
          }
          s(e, o);
        }, this);
      }

      return s(null, []), !1;
    },
    results: function (e, t, s, i) {
      var o = this.geocode().text(e);
      return t && o.key(t), o.maxLocations(this.options.maxResults), s && o.within(s), o.run(function (e, t) {
        i(e, t.results);
      }, this);
    }
  });

  e.ArcgisOnlineProvider = p, e.FeatureLayerProvider = v, e.Geocode = o, e.GeocodeService = h, e.GeocodeServiceProvider = _, e.Geosearch = f, e.GeosearchCore = d, e.MapServiceProvider = m, e.ReverseGeocode = n, e.Suggest = l, e.VERSION = "3.1.3", e.WorldGeocodingServiceUrl = i, e.arcgisOnlineProvider = g, e.featureLayerProvider = function (e) {
    return new v(e);
  }, e.geocode = r, e.geocodeService = function (e) {
    return new h(e);
  }, e.geocodeServiceProvider = function (e) {
    return new _(e);
  }, e.geosearch = function (e) {
    return new f(e);
  }, e.geosearchCore = c, e.mapServiceProvider = function (e) {
    return new m(e);
  }, e.reverseGeocode = a, e.suggest = u, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ 5621:
/*!**********************************************!*\
  !*** ./src/app/map/map.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background:#f4f4f4;\n}\n\n.titulo {\n  text-align: center;\n  padding: 34px 39px 9px 39px;\n  width: 100%;\n}\n\n.titulo-label {\n  font-weight: 700;\n  font-size: 18px;\n  color: #000000;\n}\n\n.Grid {\n  padding: 0 20px;\n}\n\n.Grid ion-icon {\n  width: 46px;\n  height: 46px;\n}\n\n.Grid-row-col {\n  padding-left: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.Grid-row-col-label {\n  background: #5A4BB2;\n  border-radius: 40px;\n  padding: 6px 10px;\n}\n\n.Grid-row-col-label-badge {\n  font-weight: 200;\n  font-size: 14px;\n  color: #FFFFFF;\n}\n\n#map {\n  margin: 20px;\n  border: 5px solid #5A4BB2;\n  border-radius: 15px;\n  height: -moz-fit-content;\n  height: fit-content;\n  z-index: 99999;\n  width: auto;\n  height: 73%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFUjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRVI7O0FBQUk7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFUjs7QUFEUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUdaOztBQUZZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUloQjs7QUFDRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUVKIiwiZmlsZSI6Im1hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDojZjRmNGY0O1xyXG59XHJcblxyXG4udGl0dWxve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzRweCAzOXB4IDlweCAzOXB4IDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgJi1sYWJlbHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbi5Hcmlke1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgd2lkdGg6IDQ2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgfVxyXG4gICAgJi1yb3ctY29se1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICYtbGFiZWx7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1QTRCQjI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICAgICAgICAmLWJhZGdle1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiAgI21hcHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICM1QTRCQjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHotaW5kZXg6OTk5OTk7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDo3MyU7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 7122:
/*!**********************************************!*\
  !*** ./src/app/map/map.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n    <div class=\"titulo\">\n    <ion-label class=\"titulo-label\">\n        Contactate con quien necesites\n    </ion-label></div>\n    <ion-grid class=\"Grid\">\n            <ion-row class=\"Grid-row\">\n                <ion-col size=\"2\">\n                    <ion-icon src=\"../../assets/icon/hospital.svg\"></ion-icon>     \n                </ion-col>\n                <ion-col size=\"4\" class=\"Grid-row-col\">\n                    <div class=\"Grid-row-col-label\">\n                    <ion-label class=\"Grid-row-col-label-badge\">\n                        Hospitales\n                    </ion-label></div>   \n                </ion-col>\n                <ion-col size=\"2\">\n                    <ion-icon src=\"../../assets/icon/policia.svg\"></ion-icon>        \n                </ion-col>\n                <ion-col size=\"4\" class=\"Grid-row-col\">\n                    <div class=\"Grid-row-col-label\">\n                    <ion-label class=\"Grid-row-col-label-badge\">\n                        Comisarías\n                    </ion-label></div>   \n                </ion-col>\n            </ion-row>\n    </ion-grid>\n    <div id=\"map\">\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_map_map_module_ts.js.map