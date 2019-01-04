(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  padding: 10px;\r\n  text-align: Left;\r\n  background-color: #232f37;\r\n  color: white;\r\n  font-size: 20px;\r\n  font-family:\"klavika-web\", Helvetica, sans-serif;-webkit-font-smoothing:antialiased\r\n}\r\n\r\n.arrow-head {\r\n  fill: #666;\r\n}\r\n\r\ntext {\r\n  fill: #fff;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  font-family:\"klavika-web\", Helvetica, sans-serif;-webkit-font-smoothing:antialiased\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlEQUFpRCxrQ0FBa0M7Q0FDcEY7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpREFBaUQsa0NBQWtDO0NBQ3BGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IExlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmYzNztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5Olwia2xhdmlrYS13ZWJcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWRcclxufVxyXG5cclxuLmFycm93LWhlYWQge1xyXG4gIGZpbGw6ICM2NjY7XHJcbn1cclxuXHJcbnRleHQge1xyXG4gIGZpbGw6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5Olwia2xhdmlrYS13ZWJcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWRcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header\">\n  <h1>Packer</h1>\n</div>\n\n<ngx-graph\n  #graphEl  \n  class=\"chart-container\"\n  [links]=\"hierarchialGraph.links\"\n  [nodes]=\"hierarchialGraph.nodes\"\n  [legend]=\"false\"\n  [curve]=\"curve\"\n  [draggingEnabled]=\"true\"\n  [scheme]=\"colourScheme\"\n  [orientation]=\"orientation\"\n  [view]=\"view\"\n  [panOffsetX]=\"panOffsetX\">\n\n  <ng-template #defsTemplate>\n    <svg:marker id=\"arrow\" viewBox=\"0 -5 10 10\" refX=\"8\" refY=\"0\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\">\n      <svg:path d=\"M0,-5L10,0L0,5\" class=\"arrow-head\" />\n    </svg:marker>\n  </ng-template>\n\n  <ng-template #nodeTemplate let-node>\n    <svg:g class=\"node\"\n      ngx-tooltip\n      [tooltipPlacement]=\"'top'\"\n      [tooltipType]=\"'tooltip'\"\n      [tooltipTitle]=\"node.label\">\n      <svg:rect [attr.width]=\"node.width\" [attr.height]=\"node.height\" [attr.fill]=\"node.options.color\" />\n      <svg:text alignment-baseline=\"central\" [attr.x]=\"10\" [attr.y]=\"node.height / 2\">{{node.label}}</svg:text>\n    </svg:g>\n  </ng-template>\n\n  <ng-template #linkTemplate let-link>\n    <svg:g class=\"edge\">\n      <svg:path\n        class=\"line\"\n        stroke-width=\"2\"\n        marker-end=\"url(#arrow)\" >\n      </svg:path>\n    </svg:g>\n  </ng-template>\n\n</ngx-graph>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'packer';
        this.hierarchialGraph = { nodes: [], links: [] };
        this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_1__["curveBundle"].beta(1);
        this.colourScheme = "nightLights";
        this.orientation = "TB";
        this.width = 1400;
        this.height = 700;
        this.view = [this.width, this.height];
        this.panOffsetX = 100;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.showGraph();
    };
    AppComponent.prototype.showGraph = function () {
        this.hierarchialGraph.nodes = [
            { id: 'start', label: 'Template.json' },
            { id: '1', label: 'Azure' },
            { id: '2', label: 'AWS EC2' },
            { id: '3', label: 'Google Cloud' },
            { id: '10', label: 'File' },
            { id: '11', label: 'PowerShell' },
            { id: '12', label: 'Windows Shell' },
            { id: '13', label: 'Windows Restart' },
            { id: '20', label: 'OS Image' },
            { id: '30', label: 'Post-Processors' },
        ];
        this.hierarchialGraph.links = [
            { source: 'start', target: '1', label: 'builder' },
            { source: 'start', target: '2', label: 'builder' },
            { source: 'start', target: '3', label: 'builder' },
            { source: '1', target: '10' },
            { source: '1', target: '11' },
            { source: '1', target: '12' },
            { source: '1', target: '13' },
            { source: '2', target: '10' },
            { source: '2', target: '11' },
            { source: '2', target: '12' },
            { source: '2', target: '13' },
            { source: '3', target: '10' },
            { source: '3', target: '11' },
            { source: '3', target: '12' },
            { source: '3', target: '13' },
            { source: '10', target: '20' },
            { source: '11', target: '20' },
            { source: '12', target: '20' },
            { source: '13', target: '20' },
            { source: '20', target: '30' },
        ];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-graph */ "./node_modules/@swimlane/ngx-graph/release/index.js");
/* harmony import */ var _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_2__["NgxGraphModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["NgxChartsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\udemyLearnPacker\webSite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map