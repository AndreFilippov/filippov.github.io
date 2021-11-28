"use strict";
(self["webpackChunkomure"] = self["webpackChunkomure"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 6641);
/* harmony import */ var _main_slider_main_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-slider/main-slider.component */ 4860);



class AppComponent {
    constructor() {
        this.title = 'omure';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 36, vars: 0, consts: [[1, "wrapper"], [1, "content"], [1, "who-are-we"], [1, "title"], [1, "content-block"], [1, "left"], [1, "right"], [1, "ready-solutions"], [1, "plug-image"], [1, "block"], ["href", "#", 1, "button-main", "to-catalog"], [1, "individual-design"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-main-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u041A\u0442\u043E \u043C\u044B?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u041D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u044B \u043D\u0430\u0432\u0435\u0440\u043D\u044F\u043A\u0430 \u0432\u0438\u0434\u0435\u043B\u0438 \u0437\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u043A\u0430\u0434\u0440\u044B \u0441 \u0434\u0432\u0438\u0436\u0443\u0449\u0438\u043C\u0438\u0441\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C\u0438 \u0438 \u0445\u043E\u0442\u0435\u043B\u0438 \u0438\u0445 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C. \u0414\u043B\u0438\u043D\u043D\u043E\u0444\u043E\u043A\u0443\u0441\u043D\u044B\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u044B \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0442 \u0441\u044A\u0435\u043C\u043A\u0443 \u0441 \u0431\u043E\u043B\u0435\u0435 \u0443\u0437\u043A\u0438\u043C \u0443\u0433\u043B\u043E\u043C \u043E\u0431\u0437\u043E\u0440\u0430, \u0447\u0435\u043C \u0443\u0433\u043E\u043B \u0437\u0440\u0435\u043D\u0438\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0433\u043B\u0430\u0437\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \u0424\u043E\u043A\u0443\u0441\u043D\u043E\u0435 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u0430 \u0438\u0437\u043C\u0435\u0440\u044F\u0435\u0442\u0441\u044F \u0432 \u043C\u0438\u043B\u043B\u0438\u043C\u0435\u0442\u0440\u0430\u0445 \u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043E\u0442 \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u0430 \u0434\u043E \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u043C\u0435\u0440\u044B, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0438 \u0444\u043E\u043A\u0443\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " \u0421\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0438 \u0445\u043E\u0440\u043E\u0448\u0435\u043C \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0438, \u0432 \u0438\u0434\u0435\u0430\u043B\u0435 \u043E\u043D\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C. \u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u0430\u043A \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u043F\u044B\u0448\u043A\u0443 \u0434\u043E\u043B\u0436\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0442\u043E \u0432\u043E\u043E\u0431\u0449\u0435 \u0435\u0435 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0439\u0442\u0435. \u041E\u0447\u0435\u043D\u044C \u043E\u0431\u0438\u0434\u043D\u043E, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0435\u0441\u044C \u0441\u0435\u0431\u0435 \u043D\u0438 \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438. \u0412 \u043D\u0430\u0448\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u0435\u043B\u0430\u0435\u0442 \u0444\u043E\u0442\u043E\u0441\u043D\u0438\u043C\u043A\u0438 \u2013 \u043D\u0435\u0432\u0430\u0436\u043D\u043E, \u043A\u0430\u043C\u0435\u0440\u043E\u0439 \u0441\u0442\u0430\u0440\u0435\u043D\u044C\u043A\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438\u043B\u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u0430\u043C\u0435\u0440\u043E\u0439. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " \u0416\u0430\u043D\u0440 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438, \u043E\u0447\u0435\u043D\u044C \u0441\u0438\u043B\u044C\u043D\u043E \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u043E\u0431\u044B\u0447\u043D\u043E\u0439 \u0444\u043E\u0442\u043E\u0436\u0443\u0440\u043D\u0430\u043B\u0438\u0441\u0442\u0438\u043A\u0438. \u0414\u043B\u044F \u043C\u043D\u043E\u0433\u0438\u0445 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u2013 \u0441\u043F\u043E\u0441\u043E\u0431 \u0441\u0430\u043C\u043E\u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438 \u043E\u0431\u0449\u0435\u043D\u0438\u044F, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0441\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u0438 \u0437\u0430\u044F\u0432\u0438\u0442\u044C \u043E \u0441\u0435\u0431\u0435. \u041E\u0441\u0435\u043D\u044C \u043E\u0442\u043B\u0438\u0447\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438, \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0435\u0441\u043B\u0438 \u0432\u044B \u043B\u044E\u0431\u0438\u0442\u0435 \u044F\u0440\u043A\u0438\u0435 \u0446\u0432\u0435\u0442\u0430. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0442\u043E, \u043A\u0430\u043A \u043D\u0435\u043E\u0431\u044B\u0447\u043D\u043E \u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E \u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u043F\u043E\u0440\u0442\u0440\u0435\u0442, \u0435\u0441\u043B\u0438 \u0432\u044B \u0431\u0443\u0434\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u0440\u0430\u043A\u0443\u0440\u0441. \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0434\u0430\u0435\u0442 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0443 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 \u0441\u0435\u0431\u044F, \u0441\u0432\u043E\u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0430, \u044D\u043C\u043E\u0446\u0438\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _main_slider_main_slider_component__WEBPACK_IMPORTED_MODULE_1__.MainSliderComponent], styles: [".wrapper[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  background-color: #fff;\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 1050px;\n  margin: 0 auto;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: Cormorant, serif;\n  font-weight: 600;\n  margin-bottom: 50px;\n  text-transform: uppercase;\n}\n.content-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.content-block[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .content-block[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.content-block[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  padding-right: 50px;\n}\n.content-block[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  padding-left: 50px;\n}\n.who-are-we[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n.who-are-we[_ngcontent-%COMP%]   .content-block[_ngcontent-%COMP%] {\n  align-items: normal;\n}\n.who-are-we[_ngcontent-%COMP%]   .content-block[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  border-right: 1px solid #000;\n}\n.plug-image[_ngcontent-%COMP%] {\n  width: 475px;\n  height: 475px;\n  background: #c4c4c4;\n}\n.ready-solutions[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: #f7f7f7;\n}\n.to-catalog[_ngcontent-%COMP%] {\n  display: block;\n  width: 140px;\n  margin: 50px auto 0;\n}\n.individual-design[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFGRjtBQURBOztFQUtJLFVBQUE7QUFBSjtBQUxBO0VBUUksbUJBQUE7QUFBSjtBQVJBO0VBV0ksa0JBQUE7QUFBSjtBQUlBO0VBQ0Usb0JBQUE7QUFGRjtBQUNBO0VBR0ksbUJBQUE7QUFESjtBQUZBO0VBS00sNEJBQUE7QUFBTjtBQUtBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhGO0FBTUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBSkY7QUFPQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFMRjtBQVFBO0VBQ0UsZ0JBQUE7QUFORiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY29udGVudHtcbiAgbWF4LXdpZHRoOiAxMDUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udGl0bGV7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IENvcm1vcmFudCwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250ZW50LWJsb2Nre1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC5sZWZ0LCAucmlnaHQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmxlZnR7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgfVxuICAucmlnaHR7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB9XG59XG5cbi53aG8tYXJlLXdle1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgLmNvbnRlbnQtYmxvY2t7XG4gICAgYWxpZ24taXRlbXM6IG5vcm1hbDtcbiAgICAubGVmdHtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XG4gICAgfVxuICB9XG59XG5cbi5wbHVnLWltYWdle1xuICB3aWR0aDogNDc1cHg7XG4gIGhlaWdodDogNDc1cHg7XG4gIGJhY2tncm91bmQ6ICNjNGM0YzQ7XG59XG5cbi5yZWFkeS1zb2x1dGlvbnN7XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG59XG5cbi50by1jYXRhbG9ne1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW46IDUwcHggYXV0byAwO1xufVxuXG4uaW5kaXZpZHVhbC1kZXNpZ257XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 6641);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ 5545);
/* harmony import */ var _main_slider_main_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-slider/main-slider.component */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__.SlickCarouselModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _main_slider_main_slider_component__WEBPACK_IMPORTED_MODULE_3__.MainSliderComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__.SlickCarouselModule] }); })();


/***/ }),

/***/ 6641:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 22, vars: 0, consts: [[1, "logo"], ["width", "129", "height", "42", "viewBox", "0 0 129 42", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1.95258 40V31.996H5.80458V32.476H2.48058V35.44H3.87258C5.71258 35.44 6.63258 36.172 6.63258 37.636C6.63258 38.3 6.41658 38.86 5.98458 39.316C5.56058 39.772 4.91258 40 4.04058 40H1.95258ZM2.48058 35.92V39.52H3.82458C4.63258 39.52 5.21658 39.344 5.57658 38.992C5.91258 38.672 6.08058 38.22 6.08058 37.636C6.08058 36.94 5.80458 36.448 5.25258 36.16C4.93258 36 4.42458 35.92 3.72858 35.92H2.48058ZM9.01636 33.088C9.81636 32.288 10.8004 31.888 11.9684 31.888C13.1364 31.888 14.1204 32.288 14.9204 33.088C15.7204 33.888 16.1204 34.864 16.1204 36.016C16.1204 37.168 15.7204 38.144 14.9204 38.944C14.1204 39.736 13.1364 40.132 11.9684 40.132C10.8004 40.132 9.81636 39.736 9.01636 38.944C8.21636 38.144 7.81636 37.168 7.81636 36.016C7.81636 34.864 8.21636 33.888 9.01636 33.088ZM9.40036 38.608C10.0884 39.304 10.9444 39.652 11.9684 39.652C12.9924 39.652 13.8484 39.304 14.5364 38.608C15.2244 37.904 15.5684 37.04 15.5684 36.016C15.5684 34.984 15.2244 34.12 14.5364 33.424C13.8484 32.72 12.9924 32.368 11.9684 32.368C10.9444 32.368 10.0884 32.72 9.40036 33.424C8.71236 34.12 8.36836 34.984 8.36836 36.016C8.36836 37.04 8.71236 37.904 9.40036 38.608ZM18.734 31.996H23.246V40H22.718V32.476H19.262V37.132C19.262 37.532 19.254 37.844 19.238 38.068C19.23 38.284 19.182 38.544 19.094 38.848C19.006 39.152 18.874 39.4 18.698 39.592C18.41 39.912 18.022 40.072 17.534 40.072C17.406 40.072 17.246 40.048 17.054 40V39.52C17.214 39.568 17.362 39.592 17.498 39.592C17.81 39.592 18.07 39.488 18.278 39.28C18.422 39.136 18.526 38.932 18.59 38.668C18.662 38.404 18.702 38.176 18.71 37.984C18.726 37.784 18.734 37.5 18.734 37.132V31.996ZM25.5274 40V31.996H26.0554V35.44H27.4474C29.2874 35.44 30.2074 36.172 30.2074 37.636C30.2074 38.3 29.9914 38.86 29.5594 39.316C29.1354 39.772 28.4874 40 27.6154 40H25.5274ZM26.0554 35.92V39.52H27.3994C28.2074 39.52 28.7914 39.344 29.1514 38.992C29.4874 38.672 29.6554 38.22 29.6554 37.636C29.6554 36.94 29.3794 36.448 28.8274 36.16C28.5154 36 28.0074 35.92 27.3034 35.92H26.0554ZM31.9638 40V31.996H32.4918V39.52H36.1398V31.996H36.6678V39.52H40.3158V31.996H40.8438V40H31.9638ZM46.9629 31.996V32.476H43.6509V35.38H46.8909V35.86H43.6509V39.52H46.9629V40H43.1229V31.996H46.9629ZM48.1853 41.644L48.9053 39.22L49.3853 39.364L48.4973 41.764L48.1853 41.644ZM58.8525 40V36.4C57.9565 36.456 57.2765 36.484 56.8125 36.484C56.0845 36.484 55.5405 36.396 55.1805 36.22C54.8285 36.052 54.6005 35.832 54.4965 35.56C54.3925 35.28 54.3405 34.904 54.3405 34.432V31.996H54.8685V34.432C54.8685 34.592 54.8725 34.72 54.8805 34.816C54.8885 34.904 54.9085 35.02 54.9405 35.164C54.9805 35.308 55.0485 35.436 55.1445 35.548C55.2405 35.66 55.3645 35.752 55.5165 35.824C55.7645 35.944 56.2525 36.004 56.9805 36.004C57.5325 36.004 58.1565 35.976 58.8525 35.92V31.996H59.3805V40H58.8525ZM65.5015 31.996V32.476H62.1895V35.38H65.4295V35.86H62.1895V39.52H65.5015V40H61.6615V31.996H65.5015ZM67.7919 40H67.2639L68.1759 31.72L71.6439 39.124L75.1119 31.72L76.0239 40H75.4959L74.7879 33.568L71.6439 40.288L68.4999 33.568L67.7919 40ZM81.9145 31.996H86.4265V40H85.8985V32.476H82.4425V37.132C82.4425 37.532 82.4345 37.844 82.4185 38.068C82.4105 38.284 82.3625 38.544 82.2745 38.848C82.1865 39.152 82.0545 39.4 81.8785 39.592C81.5905 39.912 81.2025 40.072 80.7145 40.072C80.5865 40.072 80.4265 40.048 80.2345 40V39.52C80.3945 39.568 80.5425 39.592 80.6785 39.592C80.9905 39.592 81.2505 39.488 81.4585 39.28C81.6025 39.136 81.7065 38.932 81.7705 38.668C81.8425 38.404 81.8825 38.176 81.8905 37.984C81.9065 37.784 81.9145 37.5 81.9145 37.132V31.996ZM89.2359 35.536H90.4599C90.5799 34.48 91.0199 33.608 91.7799 32.92C92.5399 32.232 93.4359 31.888 94.4679 31.888C95.6039 31.888 96.5599 32.288 97.3359 33.088C98.1119 33.888 98.4999 34.864 98.4999 36.016C98.4999 37.168 98.1119 38.144 97.3359 38.944C96.5599 39.736 95.6039 40.132 94.4679 40.132C93.3319 40.132 92.3799 39.732 91.6119 38.932C90.8439 38.132 90.4519 37.16 90.4359 36.016H89.2359V40H88.7079V31.996H89.2359V35.536ZM91.9719 38.608C92.6359 39.304 93.4679 39.652 94.4679 39.652C95.4679 39.652 96.2959 39.304 96.9519 38.608C97.6159 37.904 97.9479 37.04 97.9479 36.016C97.9479 34.992 97.6159 34.128 96.9519 33.424C96.2879 32.72 95.4599 32.368 94.4679 32.368C93.4759 32.368 92.6479 32.72 91.9839 33.424C91.3199 34.128 90.9879 34.992 90.9879 36.016C90.9879 37.04 91.3159 37.904 91.9719 38.608ZM100.347 40V31.996H104.199V32.476H100.875V35.44H102.267C104.107 35.44 105.027 36.172 105.027 37.636C105.027 38.3 104.811 38.86 104.379 39.316C103.955 39.772 103.307 40 102.435 40H100.347ZM100.875 35.92V39.52H102.219C103.027 39.52 103.611 39.344 103.971 38.992C104.307 38.672 104.475 38.22 104.475 37.636C104.475 36.94 104.199 36.448 103.647 36.16C103.327 36 102.819 35.92 102.123 35.92H100.875ZM107.411 33.088C108.211 32.288 109.195 31.888 110.363 31.888C111.531 31.888 112.515 32.288 113.315 33.088C114.115 33.888 114.515 34.864 114.515 36.016C114.515 37.168 114.115 38.144 113.315 38.944C112.515 39.736 111.531 40.132 110.363 40.132C109.195 40.132 108.211 39.736 107.411 38.944C106.611 38.144 106.211 37.168 106.211 36.016C106.211 34.864 106.611 33.888 107.411 33.088ZM107.795 38.608C108.483 39.304 109.339 39.652 110.363 39.652C111.387 39.652 112.243 39.304 112.931 38.608C113.619 37.904 113.963 37.04 113.963 36.016C113.963 34.984 113.619 34.12 112.931 33.424C112.243 32.72 111.387 32.368 110.363 32.368C109.339 32.368 108.483 32.72 107.795 33.424C107.107 34.12 106.763 34.984 106.763 36.016C106.763 37.04 107.107 37.904 107.795 38.608ZM116.361 40V31.996H118.113C118.801 31.996 119.341 32.18 119.733 32.548C120.125 32.908 120.321 33.392 120.321 34C120.321 34.784 120.009 35.368 119.385 35.752C119.897 35.832 120.301 36.056 120.597 36.424C120.893 36.792 121.041 37.236 121.041 37.756C121.041 38.444 120.809 38.992 120.345 39.4C119.889 39.8 119.293 40 118.557 40H116.361ZM116.889 32.476V35.62H118.161C118.617 35.62 118.981 35.508 119.253 35.284C119.605 34.996 119.781 34.588 119.781 34.06C119.781 33.524 119.601 33.108 119.241 32.812C118.953 32.588 118.509 32.476 117.909 32.476H116.889ZM116.889 36.1V39.52H118.233C118.481 39.52 118.677 39.516 118.821 39.508C118.965 39.492 119.149 39.448 119.373 39.376C119.605 39.304 119.805 39.192 119.973 39.04C120.317 38.736 120.489 38.328 120.489 37.816C120.489 37.088 120.205 36.592 119.637 36.328C119.293 36.176 118.793 36.1 118.137 36.1H116.889ZM122.891 40V31.996H123.419V35.44H124.811C126.651 35.44 127.571 36.172 127.571 37.636C127.571 38.3 127.355 38.86 126.923 39.316C126.499 39.772 125.851 40 124.979 40H122.891ZM123.419 35.92V39.52H124.763C125.571 39.52 126.155 39.344 126.515 38.992C126.851 38.672 127.019 38.22 127.019 37.636C127.019 36.94 126.743 36.448 126.191 36.16C125.879 36 125.371 35.92 124.667 35.92H123.419Z", "fill", "black"], ["d", "M10.98 20.36C9.12 20.36 7.46 19.93 6 19.07C4.56 18.19 3.44 17.01 2.64 15.53C1.86 14.03 1.47 12.4 1.47 10.64C1.47 8.58 1.99 6.82 3.03 5.36C4.07 3.88 5.4 2.77 7.02 2.03C8.66 1.29 10.33 0.919999 12.03 0.919999C13.93 0.919999 15.6 1.37 17.04 2.27C18.48 3.15 19.58 4.32 20.34 5.78C21.12 7.24 21.51 8.79 21.51 10.43C21.51 12.25 21.03 13.92 20.07 15.44C19.11 16.96 17.82 18.16 16.2 19.04C14.6 19.92 12.86 20.36 10.98 20.36ZM12.03 19.7C13.31 19.7 14.46 19.37 15.48 18.71C16.5 18.05 17.3 17.09 17.88 15.83C18.48 14.55 18.78 13.03 18.78 11.27C18.78 9.41 18.45 7.75 17.79 6.29C17.15 4.83 16.22 3.69 15 2.87C13.8 2.05 12.4 1.64 10.8 1.64C8.72 1.64 7.1 2.35 5.94 3.77C4.78 5.17 4.2 7.11 4.2 9.59C4.2 11.49 4.53 13.21 5.19 14.75C5.85 16.29 6.77 17.5 7.95 18.38C9.15 19.26 10.51 19.7 12.03 19.7ZM51.1388 19.64C51.1788 19.64 51.1988 19.7 51.1988 19.82C51.1988 19.94 51.1788 20 51.1388 20C50.4988 20 49.9888 19.99 49.6088 19.97L47.4788 19.94L45.4688 19.97C45.1288 19.99 44.6588 20 44.0588 20C43.9988 20 43.9688 19.94 43.9688 19.82C43.9688 19.7 43.9988 19.64 44.0588 19.64C44.9388 19.64 45.5288 19.54 45.8288 19.34C46.1488 19.14 46.3088 18.72 46.3088 18.08L46.2788 17.57L45.7088 4.37L39.0788 19.79C39.0388 19.87 38.9588 19.91 38.8388 19.91C38.7188 19.91 38.6388 19.87 38.5988 19.79L31.1288 4.49L30.8888 16.55C30.8688 17.61 31.0588 18.39 31.4588 18.89C31.8588 19.39 32.5088 19.64 33.4088 19.64C33.4688 19.64 33.4988 19.7 33.4988 19.82C33.4988 19.94 33.4688 20 33.4088 20C32.8688 20 32.4488 19.99 32.1488 19.97L30.4988 19.94L28.8488 19.97C28.5688 19.99 28.1588 20 27.6188 20C27.5788 20 27.5588 19.94 27.5588 19.82C27.5588 19.7 27.5788 19.64 27.6188 19.64C29.2788 19.64 30.1188 18.61 30.1388 16.55L30.4088 3.11C29.7688 2.11 28.9088 1.61 27.8288 1.61C27.7888 1.61 27.7688 1.55 27.7688 1.43C27.7688 1.31 27.7888 1.25 27.8288 1.25L29.0288 1.28C29.2688 1.3 29.5788 1.31 29.9588 1.31C30.3988 1.31 30.7588 1.3 31.0388 1.28C31.3188 1.26 31.5388 1.25 31.6988 1.25C31.9588 1.25 32.1688 1.34 32.3288 1.52C32.4888 1.7 32.7388 2.13 33.0788 2.81L39.7388 16.34L46.0088 2C46.2088 1.5 46.5088 1.25 46.9088 1.25C47.0288 1.25 47.1888 1.26 47.3888 1.28C47.5888 1.3 47.8488 1.31 48.1688 1.31L49.6988 1.28C49.9388 1.26 50.2888 1.25 50.7488 1.25C50.8088 1.25 50.8388 1.31 50.8388 1.43C50.8388 1.55 50.8088 1.61 50.7488 1.61C49.7688 1.61 49.0588 1.77 48.6188 2.09C48.1988 2.41 47.9988 2.97 48.0188 3.77L48.6788 17.57C48.7188 18.19 48.7988 18.64 48.9188 18.92C49.0388 19.2 49.2588 19.39 49.5788 19.49C49.8988 19.59 50.4188 19.64 51.1388 19.64ZM66.4027 20.36C64.5427 20.36 62.8827 19.93 61.4227 19.07C59.9827 18.19 58.8627 17.01 58.0627 15.53C57.2827 14.03 56.8927 12.4 56.8927 10.64C56.8927 8.58 57.4127 6.82 58.4527 5.36C59.4927 3.88 60.8227 2.77 62.4427 2.03C64.0827 1.29 65.7527 0.919999 67.4527 0.919999C69.3527 0.919999 71.0227 1.37 72.4627 2.27C73.9027 3.15 75.0027 4.32 75.7627 5.78C76.5427 7.24 76.9327 8.79 76.9327 10.43C76.9327 12.25 76.4527 13.92 75.4927 15.44C74.5327 16.96 73.2427 18.16 71.6227 19.04C70.0227 19.92 68.2827 20.36 66.4027 20.36ZM67.4527 19.7C68.7327 19.7 69.8827 19.37 70.9027 18.71C71.9227 18.05 72.7227 17.09 73.3027 15.83C73.9027 14.55 74.2027 13.03 74.2027 11.27C74.2027 9.41 73.8727 7.75 73.2127 6.29C72.5727 4.83 71.6427 3.69 70.4227 2.87C69.2227 2.05 67.8227 1.64 66.2227 1.64C64.1427 1.64 62.5227 2.35 61.3627 3.77C60.2027 5.17 59.6227 7.11 59.6227 9.59C59.6227 11.49 59.9527 13.21 60.6127 14.75C61.2727 16.29 62.1927 17.5 63.3727 18.38C64.5727 19.26 65.9327 19.7 67.4527 19.7ZM99.1514 4.73C99.1514 3.71 98.9214 2.94 98.4614 2.42C98.0214 1.88 97.3614 1.61 96.4814 1.61C96.4214 1.61 96.3914 1.55 96.3914 1.43C96.3914 1.31 96.4214 1.25 96.4814 1.25L97.8314 1.28C98.5514 1.32 99.1214 1.34 99.5414 1.34C99.9014 1.34 100.421 1.32 101.101 1.28L102.391 1.25C102.431 1.25 102.451 1.31 102.451 1.43C102.451 1.55 102.431 1.61 102.391 1.61C100.771 1.61 99.9614 2.65 99.9614 4.73V13.19C99.9614 15.43 99.3014 17.19 97.9814 18.47C96.6814 19.75 94.9414 20.39 92.7614 20.39C91.2814 20.39 89.9814 20.11 88.8614 19.55C87.7414 18.97 86.8714 18.15 86.2514 17.09C85.6314 16.01 85.3214 14.75 85.3214 13.31V3.68C85.3214 3.08 85.2614 2.64 85.1414 2.36C85.0214 2.08 84.7914 1.89 84.4514 1.79C84.1314 1.67 83.6114 1.61 82.8914 1.61C82.8314 1.61 82.8014 1.55 82.8014 1.43C82.8014 1.31 82.8314 1.25 82.8914 1.25L84.3914 1.28C85.2714 1.32 85.9714 1.34 86.4914 1.34C87.0514 1.34 87.7714 1.32 88.6514 1.28L90.0914 1.25C90.1514 1.25 90.1814 1.31 90.1814 1.43C90.1814 1.55 90.1514 1.61 90.0914 1.61C89.3914 1.61 88.8714 1.67 88.5314 1.79C88.2114 1.91 87.9914 2.12 87.8714 2.42C87.7514 2.7 87.6914 3.14 87.6914 3.74V12.26C87.6914 14.62 88.2014 16.41 89.2214 17.63C90.2614 18.83 91.7114 19.43 93.5714 19.43C95.3114 19.43 96.6714 18.89 97.6514 17.81C98.6514 16.71 99.1514 15.18 99.1514 13.22V4.73ZM127.327 19.64C127.367 19.64 127.387 19.7 127.387 19.82C127.387 19.94 127.367 20 127.327 20H122.977C122.497 20 121.587 19.15 120.247 17.45C118.927 15.73 117.347 13.38 115.507 10.4C115.047 10.5 114.607 10.55 114.187 10.55C113.807 10.55 113.317 10.53 112.717 10.49V17.57C112.717 18.17 112.777 18.62 112.897 18.92C113.017 19.2 113.237 19.39 113.557 19.49C113.897 19.59 114.427 19.64 115.147 19.64C115.207 19.64 115.237 19.7 115.237 19.82C115.237 19.94 115.207 20 115.147 20C114.527 20 114.037 19.99 113.677 19.97L111.517 19.94L109.417 19.97C109.037 19.99 108.527 20 107.887 20C107.827 20 107.797 19.94 107.797 19.82C107.797 19.7 107.827 19.64 107.887 19.64C108.607 19.64 109.137 19.59 109.477 19.49C109.817 19.39 110.047 19.2 110.167 18.92C110.287 18.62 110.347 18.17 110.347 17.57V3.68C110.347 3.08 110.287 2.64 110.167 2.36C110.047 2.08 109.817 1.89 109.477 1.79C109.157 1.67 108.637 1.61 107.917 1.61C107.877 1.61 107.857 1.55 107.857 1.43C107.857 1.31 107.877 1.25 107.917 1.25L109.417 1.28C110.297 1.32 110.997 1.34 111.517 1.34C111.877 1.34 112.217 1.33 112.537 1.31C112.857 1.29 113.137 1.27 113.377 1.25C114.037 1.19 114.657 1.16 115.237 1.16C116.937 1.16 118.247 1.5 119.167 2.18C120.087 2.84 120.547 3.76 120.547 4.94C120.547 5.88 120.267 6.77 119.707 7.61C119.147 8.45 118.417 9.13 117.517 9.65C119.197 12.19 120.597 14.18 121.717 15.62C122.857 17.04 123.867 18.07 124.747 18.71C125.627 19.33 126.487 19.64 127.327 19.64ZM112.717 9.71C113.477 9.79 114.067 9.83 114.487 9.83C115.767 9.83 116.677 9.55 117.217 8.99C117.777 8.41 118.057 7.42 118.057 6.02C118.057 4.44 117.757 3.32 117.157 2.66C116.557 2 115.727 1.67 114.667 1.67C114.147 1.67 113.747 1.72 113.467 1.82C113.207 1.92 113.017 2.12 112.897 2.42C112.777 2.7 112.717 3.14 112.717 3.74V9.71Z", "fill", "black"], [1, "header-menu"], ["href", "#", 1, "menu-item", "active"], ["href", "#", 1, "menu-item"], [1, "additional-menu"], [1, "cart-icon"], [1, "wishlist-icon"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 auto;\n  padding: 0 100px;\n  background-color: #fff;\n  height: 100px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 0;\n  padding-left: 0;\n  align-items: stretch;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #000;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-item.active[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  color: #848484;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFSQTtFQVNJLGFBQUE7RUFDQSxtQkFBQTtBQUVKO0FBWkE7RUFZTSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUdOO0FBbEJBO0VBaUJRLHFCQUFBO0FBSVI7QUFyQkE7RUFtQlUsYUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBS1Y7QUFKVTs7RUFDRSxjQUFBO0FBT1oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBuYXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5oZWFkZXItbWVudXtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgbGl7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgLm1lbnUtaXRlbXtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICYuYWN0aXZlLCAmOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6ICM4NDg0ODQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 4860:
/*!******************************************************!*\
  !*** ./src/app/main-slider/main-slider.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainSliderComponent": () => (/* binding */ MainSliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slick-carousel */ 5545);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);



function MainSliderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class MainSliderComponent {
    constructor() {
        this.slides = [
            { img: "/assets/img/sliders/slider_1.jpg" },
            { img: "/assets/img/sliders/slider_1.jpg" },
            { img: "/assets/img/sliders/slider_1.jpg" }
        ];
        this.slideConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: "<div class='btn-prev main-arrow'>" +
                '<svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '  <path d="M10.375 1L1 11L10.375 21" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg>' +
                "</div>",
            nextArrow: "<div class='btn-next main-arrow'>" +
                '<svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M1 21L10.375 11L1 0.999999" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg>' +
                "</div>",
            dots: true,
            dotsClass: 'main-dots',
            customPaging: () => {
                return '<div class="dot">' +
                    '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<circle cx="5" cy="5" r="4.5" stroke="black"/>' +
                    '</svg>' +
                    '</div>';
            },
        };
    }
    ngOnInit() {
    }
    removeSlide() {
        this.slides.length = this.slides.length - 1;
    }
    slickInit(e) {
        console.log('slick initialized');
    }
    breakpoint(e) {
        console.log('breakpoint');
    }
    afterChange(e) {
        console.log('afterChange');
    }
    beforeChange(e) {
        console.log('beforeChange');
    }
}
MainSliderComponent.ɵfac = function MainSliderComponent_Factory(t) { return new (t || MainSliderComponent)(); };
MainSliderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainSliderComponent, selectors: [["app-main-slider"]], decls: 3, vars: 2, consts: [[1, "carousel", "main-slider", 3, "config", "init", "breakpoint", "afterChange", "beforeChange"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "slide"], ["alt", "", "width", "100%", 3, "src"]], template: function MainSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-slick-carousel", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("init", function MainSliderComponent_Template_ngx_slick_carousel_init_0_listener($event) { return ctx.slickInit($event); })("breakpoint", function MainSliderComponent_Template_ngx_slick_carousel_breakpoint_0_listener($event) { return ctx.breakpoint($event); })("afterChange", function MainSliderComponent_Template_ngx_slick_carousel_afterChange_0_listener($event) { return ctx.afterChange($event); })("beforeChange", function MainSliderComponent_Template_ngx_slick_carousel_beforeChange_0_listener($event) { return ctx.beforeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainSliderComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__.SlickCarouselComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_1__.SlickItemDirective], styles: [".main-slider[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tc2xpZGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRiIsImZpbGUiOiJtYWluLXNsaWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXNsaWRlcntcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map