webpackJsonp([0],{

/***/ 106:
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
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(194);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/alfredo/Documentos/AplicacionesWeb/Proyecto/Web/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Eventos" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Bar" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Karaoke" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/alfredo/Documentos/AplicacionesWeb/Proyecto/Web/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/alfredo/Documentos/AplicacionesWeb/Proyecto/Web/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Restaurante Bar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<h1>Alimentos</h1>\n	<ion-list>\n		<ion-item>\n	      <ion-label>Chilaquiles Verdes</ion-label>\n	      <ion-select [(ngModel)]="chil_ver">\n	        <ion-option value="1">1</ion-option>\n	        <ion-option value="2">2</ion-option>\n	        <ion-option value="3">3</ion-option>\n	        <ion-option value="4">4</ion-option>\n	        <ion-option value="5">5</ion-option>\n	        <ion-option value="6">6</ion-option>\n	        <ion-option value="7">7</ion-option>\n	        <ion-option value="8">8</ion-option>\n	        <ion-option value="9">9</ion-option>\n	        <ion-option value="10">10</ion-option>\n	      </ion-select>\n		</ion-item>\n		\n		<ion-item>\n	      <ion-label>Tacos Dorados</ion-label>\n	      <ion-select [(ngModel)]="tac_dor">\n	        <ion-option value="1">1</ion-option>\n	        <ion-option value="2">2</ion-option>\n	        <ion-option value="3">3</ion-option>\n	        <ion-option value="4">4</ion-option>\n	        <ion-option value="5">5</ion-option>\n	        <ion-option value="6">6</ion-option>\n	        <ion-option value="7">7</ion-option>\n	        <ion-option value="8">8</ion-option>\n	        <ion-option value="9">9</ion-option>\n	        <ion-option value="10">10</ion-option>\n	      </ion-select>\n		</ion-item>\n		\n		<ion-item>\n	      <ion-label>Molletes</ion-label>\n	      <ion-select [(ngModel)]="moll">\n	        <ion-option value="1">1</ion-option>\n	        <ion-option value="2">2</ion-option>\n	        <ion-option value="3">3</ion-option>\n	        <ion-option value="4">4</ion-option>\n	        <ion-option value="5">5</ion-option>\n	        <ion-option value="6">6</ion-option>\n	        <ion-option value="7">7</ion-option>\n	        <ion-option value="8">8</ion-option>\n	        <ion-option value="9">9</ion-option>\n	        <ion-option value="10">10</ion-option>\n	      </ion-select>\n		</ion-item>\n		\n		<ion-item>\n	      <ion-label>Hamburguesa con Queso</ion-label>\n	      <ion-select [(ngModel)]="ham">\n	        <ion-option value="1">1</ion-option>\n	        <ion-option value="2">2</ion-option>\n	        <ion-option value="3">3</ion-option>\n	        <ion-option value="4">4</ion-option>\n	        <ion-option value="5">5</ion-option>\n	        <ion-option value="6">6</ion-option>\n	        <ion-option value="7">7</ion-option>\n	        <ion-option value="8">8</ion-option>\n	        <ion-option value="9">9</ion-option>\n	        <ion-option value="10">10</ion-option>\n	      </ion-select>\n		</ion-item>\n	</ion-list>\n	<h1>Bebidas</h1>\n	<ion-list>\n		<ion-item>\n	      <ion-label>Coca - Cola</ion-label>\n	      <ion-select [(ngModel)]="coca">\n	        <ion-option value="1">1</ion-option>\n	        <ion-option value="2">2</ion-option>\n	        <ion-option value="3">3</ion-option>\n	        <ion-option value="4">4</ion-option>\n	        <ion-option value="5">5</ion-option>\n	        <ion-option value="6">6</ion-option>\n	        <ion-option value="7">7</ion-option>\n	        <ion-option value="8">8</ion-option>\n	        <ion-option value="9">9</ion-option>\n	        <ion-option value="10">10</ion-option>\n	      </ion-select>\n		</ion-item>\n		\n		<ion-item>\n	      <ion-label>Naranjada Mineral</ion-label>\n	      <ion-select [(ngModel)]="nar">\n	        <ion-option value="1">1</ion-option>\n	        <ion-option value="2">2</ion-option>\n	        <ion-option value="3">3</ion-option>\n	        <ion-option value="4">4</ion-option>\n	        <ion-option value="5">5</ion-option>\n	        <ion-option value="6">6</ion-option>\n	        <ion-option value="7">7</ion-option>\n	        <ion-option value="8">8</ion-option>\n	        <ion-option value="9">9</ion-option>\n	        <ion-option value="10">10</ion-option>\n	      </ion-select>\n		</ion-item>\n		\n		<ion-item>\n	      <ion-label>Botella de agua</ion-label>\n	      <ion-select [(ngModel)]="bot">\n	        <ion-option value="1">1</ion-option>\n	        <ion-option value="2">2</ion-option>\n	        <ion-option value="3">3</ion-option>\n	        <ion-option value="4">4</ion-option>\n	        <ion-option value="5">5</ion-option>\n	        <ion-option value="6">6</ion-option>\n	        <ion-option value="7">7</ion-option>\n	        <ion-option value="8">8</ion-option>\n	        <ion-option value="9">9</ion-option>\n	        <ion-option value="10">10</ion-option>\n	      </ion-select>\n		</ion-item>\n		\n		<ion-item>\n	      <ion-label>Cerveza Indio</ion-label>\n	      <ion-select [(ngModel)]="cer">\n	        <ion-option value="1">1</ion-option>\n	        <ion-option value="2">2</ion-option>\n	        <ion-option value="3">3</ion-option>\n	        <ion-option value="4">4</ion-option>\n	        <ion-option value="5">5</ion-option>\n	        <ion-option value="6">6</ion-option>\n	        <ion-option value="7">7</ion-option>\n	        <ion-option value="8">8</ion-option>\n	        <ion-option value="9">9</ion-option>\n	        <ion-option value="10">10</ion-option>\n	      </ion-select>\n		</ion-item>\n	</ion-list>\n	<p>Total a pagar: $1000.00</p>\n	<button ion-button full>Enviar Orden</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/alfredo/Documentos/AplicacionesWeb/Proyecto/Web/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/alfredo/Documentos/AplicacionesWeb/Proyecto/Web/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Karaoke!!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <button ion-button full color="verde_spotify">\n  	<ion-icon name="ionic"></ion-icon>\n  	Conectarse a Spotify  	\n  </button>\n  <h1>Selecciona una lista</h1>\n  <ion-list>\n  	<ion-item>\n  		<ion-label>Selecciona PlayList</ion-label>\n  		<ion-select [(ngModel)]="plist">\n  			<ion-option value="p1">Baladas Románticas</ion-option>\n  			<ion-option value="p2">Today\'s Top Hits</ion-option>\n  			<ion-option value="p3">Éxitos MX</ion-option>\n  			<ion-option value="p4">Boleros Pop</ion-option>\n  			<ion-option value="p5">Rock en Español</ion-option>\n  		</ion-select>\n  	</ion-item>\n  </ion-list>\n  <h1>Selecciona tus canciones</h1>\n  <ion-list>\n	<ion-item>\n      <ion-label>Photograph - Ed Sheeran</ion-label>\n      <ion-checkbox color="primary"></ion-checkbox>\n	</ion-item>\n	\n	<ion-item>\n      <ion-label>You\'re Beautiful - James Blunt</ion-label>\n      <ion-checkbox color="dark"></ion-checkbox>\n	</ion-item>\n	\n	<ion-item>\n      <ion-label>Llegaste tú - Jesse y Joy</ion-label>\n      <ion-checkbox color="danger"></ion-checkbox>\n	</ion-item>\n	\n	<ion-item>\n      <ion-label>Te Regalo - Carla Morrison</ion-label>\n      <ion-checkbox color="royal"></ion-checkbox>\n	</ion-item>\n	\n	<ion-item>\n      <ion-label>Moonlight - Ariana Grande</ion-label>\n      <ion-checkbox color="energized"></ion-checkbox>\n	</ion-item>\n  </ion-list>\n  \n  <button ion-button round>Enviar Selección</button>\n</ion-content>\n'/*ion-inline-end:"/home/alfredo/Documentos/AplicacionesWeb/Proyecto/Web/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [
            'Fiesta de mi mamá',
            'Peda del Sábado',
            'Noche de Amigos'
        ];
    }
    HomePage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/alfredo/Documentos/AplicacionesWeb/Proyecto/Web/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Eventos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Eventos Creados (max 3)</h1>\n  <ion-list inset>\n  	<button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n  		{{ item }}\n  	</button>\n  </ion-list>\n  \n  <button ion-button full>Nuevo Evento</button>\n</ion-content>\n'/*ion-inline-end:"/home/alfredo/Documentos/AplicacionesWeb/Proyecto/Web/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(214);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(191);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/alfredo/Documentos/AplicacionesWeb/Proyecto/Web/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/alfredo/Documentos/AplicacionesWeb/Proyecto/Web/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map