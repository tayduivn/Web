webpackJsonp([2],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoEventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevoEventoPage = (function () {
    function NuevoEventoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NuevoEventoPage.prototype.guardar = function () {
        this.navCtrl.pop();
    };
    NuevoEventoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventoPage');
    };
    return NuevoEventoPage;
}());
NuevoEventoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-nuevoevento',template:/*ion-inline-start:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/pages/nuevoevento/nuevoevento.html"*/'<!--\n  Generated template for the EventoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ nombreDelEvento | placeholder:\'Nuevo Evento\' }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-item>\n  <ion-label>Nombre del Evento</ion-label>\n  <ion-input type="text" [(ngModel)]="nombreDelEvento" name="nombreDelEvento"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label>Fecha del evento</ion-label>\n  <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n</ion-item>\n\n<ion-item>\n  <ion-label>Hora del evento</ion-label>\n  <ion-datetime displayFormat="HH:mm" [(ngModel)]="myDate"></ion-datetime>\n</ion-item>\n\n<ion-item>\n  <ion-label>Número de personas invitadas</ion-label>\n  <ion-select [(ngModel)]="numPersonas">\n    <ion-option value="1">1</ion-option>\n    <ion-option value="2">2</ion-option>\n    <ion-option value="3">3</ion-option>\n    <ion-option value="4">4</ion-option>\n    <ion-option value="5">5</ion-option>\n    <ion-option value="6">6</ion-option>\n    <ion-option value="7">7</ion-option>\n    <ion-option value="8">8</ion-option>\n    <ion-option value="9">9</ion-option>\n    <ion-option value="10">10</ion-option>\n    <ion-option value="11">11</ion-option>\n    <ion-option value="12">12</ion-option>\n    <ion-option value="13">13</ion-option>\n    <ion-option value="14">14</ion-option>\n    <ion-option value="15">15</ion-option>\n    <ion-option value="16">16</ion-option>\n    <ion-option value="17">17</ion-option>\n    <ion-option value="18">18</ion-option>\n    <ion-option value="19">19</ion-option>\n    <ion-option value="20">20</ion-option>\n  </ion-select>\n</ion-item>\n\n\n<button ion-button>\n	<ion-icon name="logo-facebook"></ion-icon>\n	Invitar amigos\n</button>\n\n<button ion-button full (click)="guardar();">Crear Evento</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/pages/nuevoevento/nuevoevento.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], NuevoEventoPage);

//# sourceMappingURL=nuevoevento.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevoevento_nuevoevento__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_mostrarEventos__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventoPage = (function () {
    function EventoPage(navCtrl, navParams, obtenerEventos) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.obtenerEventos = obtenerEventos;
        this.eventos = [];
        this.items = [
            'Fiesta de mi mamá',
            'Peda del Sábado',
            'Noche de Amigos'
        ];
        /*Utiliza un servicio definido en src/app/servicio para obtener info
        de los eventos*/
        this.obtenerEventos.getData()
            .subscribe(function (resData) { return _this.eventos = resData; });
    }
    /*Al hacer click en el botón nuevo evento, esta parte permite la
    transición de pantallas */
    EventoPage.prototype.nextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__nuevoevento_nuevoevento__["a" /* NuevoEventoPage */]);
    };
    EventoPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    EventoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventoPage');
    };
    return EventoPage;
}());
EventoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-evento',template:/*ion-inline-start:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/pages/evento/evento.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Eventos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h1 class="titulo">Eventos Creados</h1>\n\n  <!-- Iteramos a nuestra variable eventos para poner en una lista\n  el nombre de los eventos creados -->\n  <div id="listadeeventos">\n    <ol>\n      <div *ngFor="let item of eventos">\n        <li>\n          <a href="#">{{ item.nombre }}</a>\n        </li>\n      </div>\n    </ol>\n  </div>\n\n\n  <!--\n  <ion-list inset>\n  	<button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n  		{{ item }}\n  	</button>\n  </ion-list>\n-->\n\n  <button ion-button full (click)="nextPage();">Nuevo Evento</button>\n</ion-content>\n'/*ion-inline-end:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/pages/evento/evento.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_mostrarEventos__["a" /* MostrarEventosService */]])
], EventoPage);

//# sourceMappingURL=evento.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/evento/evento.module": [
		579,
		1
	],
	"../pages/nuevoevento/nuevoevento.module": [
		578,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostrarEventosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MostrarEventosService = (function () {
    function MostrarEventosService(http) {
        this.http = http;
    }
    /*Obtiene la información del json en los asests y lo regresa como
    respuesta*/
    MostrarEventosService.prototype.getData = function () {
        return this.http.get("http://localhost:3000/api/Eventos")
            .map(function (res) { return res.json(); });
    };
    return MostrarEventosService;
}());
MostrarEventosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MostrarEventosService);

//# sourceMappingURL=mostrarEventos.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orden_orden__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__karaoke_karaoke__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__orden_orden__["a" /* OrdenPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__karaoke_karaoke__["a" /* KaraokePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Eventos" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Bar" tabIcon="beer"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Karaoke" tabIcon="microphone"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bar_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_listaOrdenes__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdenPage = (function () {
    function OrdenPage(navCtrl, navParams, _listaOrdenes) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._listaOrdenes = _listaOrdenes;
        /*Damos de alta el servicio que permite recibir las órdenes*/
    }
    OrdenPage.prototype.nextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bar_bar__["a" /* BarPage */]);
    };
    OrdenPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    return OrdenPage;
}());
OrdenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-orden',template:/*ion-inline-start:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/pages/orden/orden.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Ordenes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- Iteramos a nuestra variable _listaOrdenes.ordenestotales para\nponer en una lista el nombre de las ordenes creadas -->\n<ion-content padding>\n  <h1 class="titulo">Comida pedida</h1>\n  <ion-list inset *ngFor="let orden of _listaOrdenes.ordenestotales">\n    <a href="#" class="botonPersonalizado">{{ orden.nombre }}</a>\n    </ion-list>\n<!--\n<button ion-item (click)="itemSelected(item)">\n</button>\n    <ul>\n    <li *ngFor="let orden of _listaOrdenes.ordenestotales">\n      {{orden.nombre}}\n    </li>\n  </ul>\n-->\n  <button ion-button full (click)="nextPage();">Nueva Orden</button>\n</ion-content>\n'/*ion-inline-end:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/pages/orden/orden.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_listaOrdenes__["a" /* ListaOrdenesService */]])
], OrdenPage);

//# sourceMappingURL=orden.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_preciosMenu__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarPage = (function () {
    function BarPage(navCtrl, navParams, obtenerAlimentos) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.obtenerAlimentos = obtenerAlimentos;
        this.alimentos = [];
        /*Utiliza un servicio definido en src/app/servicio para obtener info
        de los alimentos*/
        this.obtenerAlimentos.getData()
            .subscribe(function (resData) { return _this.alimentos = resData; });
    }
    /*El dar la instrucción enviar orden, este método cierra la vista
    actual*/
    BarPage.prototype.guardar = function () {
        this.navCtrl.pop();
    };
    return BarPage;
}());
BarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bar',template:/*ion-inline-start:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/pages/bar/bar.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Restaurante Bar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<h1 class="titulo">Alimentos</h1>\n\n  <!-- Iteramos a nuestra variable alimentos para poner en una lista\n  el nombre y el precio de los alimentos del menú -->\n  <ul *ngFor="let item of alimentos" class="listadealimentos">\n    <li class="listadealimentositem">\n      <p>{{item.nombre}}</p>\n      <p>{{item.precio}} pesos</p>\n      <select>\n        <option value="0">0</option>\n        <option value="1">1</option>\n        <option value="2">2</option>\n        <option value="3">3</option>\n        <option value="4">4</option>\n        <option value="5">5</option>\n        <option value="6">6</option>\n        <option value="7">7</option>\n        <option value="8">8</option>\n        <option value="9">9</option>\n        <option value="10">10</option>\n      </select>\n    </li>\n  </ul>\n  <!--\n	<ion-list>\n		<ion-item>\n	      <ion-label>Chilaquiles Verdes $70</ion-label>\n	      <ion-select [(ngModel)]="chil_ver">\n	        <ion-option value="1">1</ion-option>\n	        <ion-option value="2">2</ion-option>\n	        <ion-option value="3">3</ion-option>\n	        <ion-option value="4">4</ion-option>\n	        <ion-option value="5">5</ion-option>\n	        <ion-option value="6">6</ion-option>\n	        <ion-option value="7">7</ion-option>\n	        <ion-option value="8">8</ion-option>\n	        <ion-option value="9">9</ion-option>\n	        <ion-option value="10">10</ion-option>\n	      </ion-select>\n		</ion-item>\n	</ion-list>\n-->\n	<p>Total a pagar: $1000.00</p>\n	<button ion-button full (click)="guardar();">Enviar Orden</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/pages/bar/bar.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_services_preciosMenu__["a" /* PreciosMenuService */]])
], BarPage);

//# sourceMappingURL=bar.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreciosMenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreciosMenuService = (function () {
    function PreciosMenuService(http) {
        this.http = http;
    }
    /*Obtiene la información del json en los asests y lo regresa como
    respuesta*/
    PreciosMenuService.prototype.getData = function () {
        return this.http.get("../../assets/jsons/precio-del-menu.json")
            .map(function (res) { return res.json(); });
    };
    return PreciosMenuService;
}());
PreciosMenuService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], PreciosMenuService);

//# sourceMappingURL=preciosMenu.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaOrdenesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_ordenes_clase__ = __webpack_require__(576);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaOrdenesService = (function () {
    function ListaOrdenesService() {
        this.ordenestotales = [];
        /*Crea varias órdenes utilizando las clases*/
        console.log("Servicio Inicializado");
        var orden1 = new __WEBPACK_IMPORTED_MODULE_1__clases_ordenes_clase__["a" /* OrdenesClase */]('Pedido 1');
        var orden2 = new __WEBPACK_IMPORTED_MODULE_1__clases_ordenes_clase__["a" /* OrdenesClase */]('Pedido 2');
        var orden3 = new __WEBPACK_IMPORTED_MODULE_1__clases_ordenes_clase__["a" /* OrdenesClase */]('Pedido 3');
        this.ordenestotales.push(orden1);
        this.ordenestotales.push(orden2);
        this.ordenestotales.push(orden3);
    }
    return ListaOrdenesService;
}());
ListaOrdenesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ListaOrdenesService);

//# sourceMappingURL=listaOrdenes.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KaraokePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_buscadorSpotify__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KaraokePage = (function () {
    function KaraokePage(navCtrl, searchService) {
        this.navCtrl = navCtrl;
        this.searchService = searchService;
        this.inputField = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]();
        this.searchResults = [];
    }
    /*Llama al servicio definido en src/app/services y le pide que haga una
    busqueda utilizando la palabra de nuestro inputField, si el resultado no
    arroja un error, entonces obtenemos los artistas
    */
    KaraokePage.prototype.ngOnInit = function () {
        var _this = this;
        this.inputField.valueChanges
            .subscribe(function (inputField) { return _this.searchService.searchArtists(inputField)
            .subscribe(function (result) {
            if (result.status === 400) {
                return;
            }
            else {
                _this.searchResults = result.artists.items;
            }
        }); });
    };
    return KaraokePage;
}());
KaraokePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-karaoke',template:/*ion-inline-start:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/pages/karaoke/karaoke.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Karaoke!!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <section>\n    <h1>Busca tu artista favorito</h1>\n    <div>\n      <ion-icon name="search"></ion-icon>\n\n      <!--\n      BUscador de Spotify\n      -->\n      <input [formControl] = "inputField" type="text" id="buscarcancion"\n        placeholder="Busca un artista..." autofocus>\n    </div>\n\n    <div id="listadeartistas">\n      <ul>\n        <!--\n        Cada que encuentra resultados, muestra en una lista un checkbox,\n        la imagen y el nombre del artista\n        -->\n        <div *ngFor="let item of searchResults">\n          <li>\n            <input type="checkbox" value="None">\n            <img src="{{ item.images[\'2\']?.url }}" alt="{{ item.name }}"\n              width="150" height="150">\n            <p id="nombredelartista">{{ item.name }}</p>\n          </li>\n        </div>\n      </ul>\n    </div>\n\n\n    <a href="#" class="button" *ngIf="searchResults">Enviar Selección</a>\n  </section>\n</ion-content>\n<!--\n<ion-content>\n  <button ion-button full color="verde_spotify">\n  	<ion-icon name="ionic"></ion-icon>\n  	Conectarse a Spotify\n  </button>\n  <h1 class="titulo">Selecciona una lista</h1>\n  <ion-list>\n  	<ion-item>\n  		<ion-label>Selecciona PlayList</ion-label>\n  		<ion-select [(ngModel)]="plist">\n  			<ion-option value="p1">Baladas Románticas</ion-option>\n  			<ion-option value="p2">Today\'s Top Hits</ion-option>\n  			<ion-option value="p3">Éxitos MX</ion-option>\n  			<ion-option value="p4">Boleros Pop</ion-option>\n  			<ion-option value="p5">Rock en Español</ion-option>\n  		</ion-select>\n  	</ion-item>\n  </ion-list>\n  <h1 class="titulo">Selecciona tus canciones</h1>\n  <ion-list>\n	<ion-item>\n      <ion-label>Photograph - Ed Sheeran</ion-label>\n      <ion-checkbox color="primary"></ion-checkbox>\n	</ion-item>\n  	<ion-item>\n      <ion-label>You\'re Beautiful - James Blunt</ion-label>\n      <ion-checkbox color="dark"></ion-checkbox>\n	</ion-item>\n  	<ion-item>\n      <ion-label>Llegaste tú - Jesse y Joy</ion-label>\n      <ion-checkbox color="danger"></ion-checkbox>\n	</ion-item>\n  	<ion-item>\n      <ion-label>Te Regalo - Carla Morrison</ion-label>\n      <ion-checkbox color="royal"></ion-checkbox>\n	</ion-item>\n\n	<ion-item>\n      <ion-label>Moonlight - Ariana Grande</ion-label>\n      <ion-checkbox color="energized"></ion-checkbox>\n	</ion-item>\n  </ion-list>\n  <button ion-button round>Enviar Selección</button>\n</ion-content>\n-->\n'/*ion-inline-end:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/pages/karaoke/karaoke.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_buscadorSpotify__["a" /* BuscadorSpotifyService */]])
], KaraokePage);

//# sourceMappingURL=karaoke.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscadorSpotifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuscadorSpotifyService = (function () {
    function BuscadorSpotifyService(http) {
        this.http = http;
        /*Definimos nuestro id a la url que utilizamos para la petición*/
        this.clientId = '909b31c0f394487eacc7468c2ac01e93';
        this.artistUrl = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id='
            + this.clientId + '&q=';
    }
    BuscadorSpotifyService.prototype.searchArtists = function (searchTerm) {
        /* Creamos los headers que se requieren para poder hacer la autenticación
        */
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', 'Bearer BQC-Cp09LIzZEPQdBJpcorg9FwBLRmQ1SwLLeL5363Dc5XMWGy1r7URKJ9PI7jGnldwUXVdfwNqMRX5yvqMLZg');
        /*COnstruimos la url completa con base en la búsqueda del usuario*/
        var url = this.artistUrl + searchTerm;
        /*Solicitamos con get un json con la url que construimos y
        enviándole los headers para que no haya errores de tokken. El resultado
        lo regresamos*/
        return this.http.get(url, { headers: headers }).map(function (res) { return res.json(); });
    };
    return BuscadorSpotifyService;
}());
BuscadorSpotifyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], BuscadorSpotifyService);

//# sourceMappingURL=buscadorSpotify.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evento_evento__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, facebook) {
        this.navCtrl = navCtrl;
        this.facebook = facebook;
        this.userData = null;
    }
    LoginPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__evento_evento__["a" /* EventoPage */]);
    };
    /*
    Al importar funciones de facebook e inicializarlas en el constructor nos
    permite solicitar datos como en este caso el name, first_name, email, y
    todas esas variables las guardamos en la variable vacía userData definida
    arriba
    */
    LoginPage.prototype.loginWithFacebook = function () {
        var _this = this;
        this.facebook.login(['email', 'public_profile']).then(function (response) {
            _this.facebook.api('me?fields=id,name,email,first_name)', []).then(function (profile) {
                _this.userData = { email: profile['email'], first_name: profile['first_name'], username: profile['name'] };
            });
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/pages/login/login.html"*/'<div class="container">\n	<h1>Retromanía</h1>\n	<img src="https://vignette2.wikia.nocookie.net/clubpenguin/images/1/1c/Micr%C3%B3fono_icono.png/revision/latest?cb=20140705014018&path-prefix=es" alt="" width="250" height="250"><br><br><br><br>\n\n	<!-- Para lograr la conexión con facebook, al momento de darle al boton\n	entrar con facebook manda llamar al metodolo loginWithFacebook definido\n	en el login.ts -->\n	<div class="form-style-5">\n		<form>\n			<fieldset>\n				<input type="text" name="field1" placeholder="Usuario *">\n				<input type="password" name="field2" placeholder="Contraseña *">\n			</fieldset>\n		</form>\n	</div>\n\n\n	<button ion-button (click)="loginWithFacebook();">\n		<ion-icon name="logo-facebook"></ion-icon>\n		Entrar con Facebook\n	</button>\n<br><br>\n	<!-- Una vez que la conexión es creada, mostramos el nombre del\n	usuario -->\n	<ion-card *ngIf="userData">\n		<ion-card-header>Hola {{ userData.username }}</ion-card-header>\n	</ion-card>\n\n	<button ion-button (click)="login();">\n		Entrar\n	</button>\n</div>\n'/*ion-inline-end:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(268);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bar_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_karaoke_karaoke__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_nuevoevento_nuevoevento__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_evento_evento__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_orden_orden__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_listaOrdenes__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_preciosMenu__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_mostrarEventos__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_buscadorSpotify__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_placeholder_pipe__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//Components







//Servicios




//Pipes

//Facebook



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_placeholder_pipe__["a" /* PlaceholderPipe */],
            __WEBPACK_IMPORTED_MODULE_6__pages_bar_bar__["a" /* BarPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_karaoke_karaoke__["a" /* KaraokePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_nuevoevento_nuevoevento__["a" /* NuevoEventoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_evento_evento__["a" /* EventoPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_orden_orden__["a" /* OrdenPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/nuevoevento/nuevoevento.module#EventoPageModule', name: 'NuevoEventoPage', segment: 'nuevoevento', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/evento/evento.module#InicioPageModule', name: 'EventoPage', segment: 'evento', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_bar_bar__["a" /* BarPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_karaoke_karaoke__["a" /* KaraokePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_nuevoevento_nuevoevento__["a" /* NuevoEventoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_evento_evento__["a" /* EventoPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_orden_orden__["a" /* OrdenPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__services_listaOrdenes__["a" /* ListaOrdenesService */],
            __WEBPACK_IMPORTED_MODULE_14__services_preciosMenu__["a" /* PreciosMenuService */],
            __WEBPACK_IMPORTED_MODULE_15__services_mostrarEventos__["a" /* MostrarEventosService */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_16__services_buscadorSpotify__["a" /* BuscadorSpotifyService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/alfredo/Documentos/AplicacionesWeb/ProjectUser/Web/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenesClase; });
var OrdenesClase = (function () {
    function OrdenesClase(nombre) {
        this.nombre = nombre;
    }
    return OrdenesClase;
}());

//# sourceMappingURL=ordenes-clase.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceholderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlaceholderPipe = (function () {
    function PlaceholderPipe() {
    }
    PlaceholderPipe.prototype.transform = function (value, defecto) {
        return (value) ? value : defecto;
    };
    return PlaceholderPipe;
}());
PlaceholderPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'placeholder'
    })
], PlaceholderPipe);

//# sourceMappingURL=placeholder.pipe.js.map

/***/ })

},[263]);
//# sourceMappingURL=main.js.map