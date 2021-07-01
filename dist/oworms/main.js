(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/wPI":
/*!********************************************************!*\
  !*** ./src/app/component/common/dropdown.component.ts ***!
  \********************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.component */ "fej4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function DropdownComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectItem(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r0.isSelected(item_r1.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.value);
} }
class DropdownComponent {
    constructor() {
        this.items = [];
        this.title = 'Select';
        this.multiSelections = false;
        this.selectedValues = [];
        this.closeAfterEachSelection = true;
        this.closed = true;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    selectItem(item) {
        this.closed = this.closeAfterEachSelection;
        const existingVal = this.selectedValues.find((sVal) => sVal === item.value);
        if (existingVal) {
            this.selectedValues.splice(this.selectedValues.indexOf(existingVal), 1);
        }
        else {
            this.selectedValues.push(item.value);
        }
        this.valueChange.emit(this.selectedValues);
    }
    clearSelection($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.closed = true;
        this.selectedValues = [];
        this.valueChange.emit([]);
    }
    isSelected(value) {
        return this.selectedValues.some((sVal) => sVal === value);
    }
    getTitle() {
        return this.selectedValues.length === 0 ? 'Select' : this.selectedValues.join(', ');
    }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(); };
DropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownComponent, selectors: [["ow-dropdown"]], inputs: { items: "items", title: "title", multiSelections: "multiSelections", selectedValues: "selectedValues", closeAfterEachSelection: "closeAfterEachSelection" }, outputs: { valueChange: "valueChange" }, decls: 8, vars: 4, consts: [[1, "dropdown"], [1, "dropdown-title", 3, "click"], [3, "onButtonClick"], [1, "dropdown-list"], ["class", "dropdown-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "click"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_Template_div_click_1_listener() { return ctx.closed = !ctx.closed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ow-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onButtonClick", function DropdownComponent_Template_ow_button_onButtonClick_4_listener($event) { return ctx.clearSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DropdownComponent_div_7_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("closed", ctx.closed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  border: 1px solid #dedddd;\n  background-color: #fff;\n}\n.dropdown[_ngcontent-%COMP%]   .closed[_ngcontent-%COMP%] {\n  display: none;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-title[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.3rem;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-title[_ngcontent-%COMP%]:hover {\n  background-color: #f3f1f1;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #ffffff;\n  z-index: 5000;\n  width: 100%;\n  max-height: 300px;\n  overflow-y: scroll;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out;\n  border-top: 1px solid #dedddd;\n  border-bottom: 1px solid #dedddd;\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f3f1f1;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%] {\n  background-color: #f3f1f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkcm9wZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtBQUNSO0FBRUk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBQVI7QUFFUTtFQUNJLHlCQUFBO0FBQVo7QUFJSTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBRlI7QUFJUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBRUEsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFIWjtBQUtZO0VBQ0kseUJBQUE7QUFIaEI7QUFNWTtFQUNJLHlCQUFBO0FBSmhCIiwiZmlsZSI6ImRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGRkZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgLmNsb3NlZCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZHJvcGRvd24tdGl0bGUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IC4zcmVtO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjFmMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHotaW5kZXg6IDUwMDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG5cclxuICAgICAgICAuZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkZGRkO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGRkZDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IC4zcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjNyZW07XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YxZjE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjFmMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\bp\dev\repositories\oworms\oworms-ui\src\main.ts */"zUnb");


/***/ }),

/***/ "6Xud":
/*!******************************************************!*\
  !*** ./src/app/component/filter/filter.component.ts ***!
  \******************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _util_filter_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/filter.util */ "AOxY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dropdown.component */ "/wPI");
/* harmony import */ var _common_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/button.component */ "fej4");
/* harmony import */ var _common_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/input.component */ "faew");







function FilterComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ow-input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onValueChange", function FilterComponent_div_4_Template_ow_input_onValueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const filterProp_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.updateValue($event, filterProp_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ow-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onButtonClick", function FilterComponent_div_4_Template_ow_button_onButtonClick_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const filterProp_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addFilter(filterProp_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ow-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onButtonClick", function FilterComponent_div_4_Template_ow_button_onButtonClick_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const filterProp_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeFilter(filterProp_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filterProp_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", filterProp_r1.key + "-input")("type", "input")("value", filterProp_r1.value)("placeholder", filterProp_r1.pHolder);
} }
class FilterComponent {
    constructor() {
        this.queryParams = {};
        this.properties = _util_filter_util__WEBPACK_IMPORTED_MODULE_1__["FilterUtil"].getFreshProps();
        this.partsOfSpeechDropdownItems = _util_filter_util__WEBPACK_IMPORTED_MODULE_1__["FilterUtil"].getPartOfSpeechDropdownItems();
        this.partsOfSpeechToFilterBy = [];
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges() {
        if (!this.existingFilter) {
            return;
        }
        const { theWord, definition, partsOfSpeech, createdBy, haveLearnt } = this.existingFilter;
        const hasAFilter = !!theWord || !!definition || !!partsOfSpeech || !!createdBy || !!haveLearnt;
        if (hasAFilter) {
            this.setExistingFilters();
        }
    }
    setExistingFilters() {
        var _a;
        const updatedProps = this.properties.map((property) => {
            var _a, _b, _c, _d;
            // why is optional chaining needed here? existingFilter cannot be undefined (see if check in on changes)
            switch (property.key) {
                case 'w':
                    property.value = (_a = this.existingFilter) === null || _a === void 0 ? void 0 : _a.theWord;
                    break;
                case 'def':
                    property.value = (_b = this.existingFilter) === null || _b === void 0 ? void 0 : _b.definition;
                    break;
                case 'creator':
                    property.value = (_c = this.existingFilter) === null || _c === void 0 ? void 0 : _c.createdBy;
                    break;
                case 'learnt':
                    property.value = (_d = this.existingFilter) === null || _d === void 0 ? void 0 : _d.haveLearnt;
                    break;
            }
            return property;
        });
        const partsOfSpeech = (_a = this.existingFilter) === null || _a === void 0 ? void 0 : _a.partsOfSpeech;
        if (!!partsOfSpeech) {
            this.partsOfSpeechToFilterBy = partsOfSpeech.map((pos) => pos);
        }
        this.properties = [...updatedProps];
    }
    addFilter(prop) {
        prop.filterBy = true;
        this.queryParams = Object.assign(Object.assign({}, this.queryParams), { [prop.key]: prop.value });
        this.filterChange.emit(this.queryParams);
    }
    removeFilter(prop) {
        prop.filterBy = false;
        prop.value = '';
        delete this.queryParams[prop.key];
        this.filterChange.emit(this.queryParams);
    }
    selectPartOfSpeech($event) {
        this.partsOfSpeechToFilterBy = $event;
        const partOfSpeechFilterProp = {
            key: 'pos',
            pHolder: 'part of speech',
            value: this.partsOfSpeechToFilterBy,
            filterBy: false
        };
        this.addFilter(partOfSpeechFilterProp);
    }
    updateValue($event, prop) {
        prop.value = $event;
    }
    clearFilters() {
        this.properties.forEach((prop) => {
            this.removeFilter(prop);
        });
        this.partsOfSpeechToFilterBy = [];
        this.removeFilter({
            key: 'pos',
            value: undefined,
            filterBy: false,
            pHolder: ''
        });
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(); };
FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["ow-filter"]], inputs: { existingFilter: "existingFilter" }, outputs: { filterChange: "filterChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 4, consts: [[1, "filter"], [1, "props"], ["class", "prop", 4, "ngFor", "ngForOf"], [3, "items", "selectedValues", "closeAfterEachSelection", "valueChange"], [3, "onButtonClick"], [1, "prop"], [1, "prop-input"], [3, "name", "type", "value", "placeholder", "onValueChange"], ["type", "button", 3, "onButtonClick"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filtering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilterComponent_div_4_Template, 7, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ow-dropdown", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FilterComponent_Template_ow_dropdown_valueChange_5_listener($event) { return ctx.selectPartOfSpeech($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ow-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onButtonClick", function FilterComponent_Template_ow_button_onButtonClick_6_listener() { return ctx.clearFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Clear Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.properties);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.partsOfSpeechDropdownItems)("selectedValues", ctx.partsOfSpeechToFilterBy)("closeAfterEachSelection", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _common_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["DropdownComponent"], _common_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _common_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"]], styles: [".filter[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background-color: #ffffff;\n  height: 30px;\n}\n.filter[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 1rem;\n}\n.filter[_ngcontent-%COMP%]   .props[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n.filter[_ngcontent-%COMP%]   .props[_ngcontent-%COMP%]   .prop[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n  padding: 1rem;\n  border: 1px solid #dedddd;\n  box-shadow: 0 2px 4px -5px #101010;\n  transition: all 0.1s ease-in-out;\n}\n.filter[_ngcontent-%COMP%]   .props[_ngcontent-%COMP%]   .prop-input[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmaWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QUFDUjtBQUVJO0VBQ0ksaUJBQUE7QUFBUjtBQUVRO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0FBQVo7QUFFYTtFQUNHLGFBQUE7QUFBaEIiLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogMzBweDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9wcyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcblxyXG4gICAgICAgIC5wcm9wIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGRkZDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IC01cHggIzEwMTAxMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgICAgICAmLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AOxY":
/*!*************************************!*\
  !*** ./src/app/util/filter.util.ts ***!
  \*************************************/
/*! exports provided: FilterUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterUtil", function() { return FilterUtil; });
/* harmony import */ var _model_part_of_speech_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/part-of-speech.enum */ "c9Kw");

class FilterUtil {
    static getPartOfSpeechDropdownItems() {
        const partsOfSpeech = Object.values(_model_part_of_speech_enum__WEBPACK_IMPORTED_MODULE_0__["PartOfSpeech"]);
        return partsOfSpeech.map((partOfSpeech) => ({
            value: partOfSpeech,
            selected: false
        }));
    }
    static getFreshProps() {
        return [
            { key: 'w', pHolder: 'word', value: undefined, filterBy: false },
            { key: 'def', pHolder: 'definition', value: undefined, filterBy: false },
            { key: 'creator', pHolder: 'created by', value: undefined, filterBy: false }
            // make learnt a checkbox.
            // { key: 'learnt', pHolder: 'learnt', value: undefined, filterBy: false }
        ];
    }
}


/***/ }),

/***/ "AytR":
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GSvk":
/*!********************************!*\
  !*** ./src/app/util/config.ts ***!
  \********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
class Config {
}
Config.MENU_ITEMS = [
    { name: 'All Words', path: '/worms' },
    { name: 'Add Word', path: '/worm/new' },
    { name: 'Random Word', path: '/worm/random' },
    { name: 'Search for Word', path: '/worm/search' },
    { name: 'Statistics', path: '/stats' },
    { name: 'Oxford Dict. API', path: '/worm/search/oxford' },
];


/***/ }),

/***/ "K3Le":
/*!***************************************************!*\
  !*** ./src/app/component/list/words.component.ts ***!
  \***************************************************/
/*! exports provided: WordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsComponent", function() { return WordsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _util_subscription_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/subscription.util */ "nqQq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_word_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/word.service */ "YOt/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../top/top.component */ "P9bA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filter/filter.component */ "6Xud");
/* harmony import */ var _pipe_chunk_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipe/chunk.pipe */ "ZZHY");









function WordsComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](word_r5.theWord);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](word_r5.definition);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](word_r5.partOfSpeech);
} }
function WordsComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WordsComponent_div_2_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.showMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Click to show more");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.words.length - ctx_r4.numberOfElements, " more words to show");
} }
function WordsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WordsComponent_div_2_div_2_Template, 7, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "chunkPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, WordsComponent_div_2_div_4_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ow-filter", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("filterChange", function WordsComponent_div_2_Template_ow_filter_filterChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.updateQueryParams($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 3, ctx_r0.words, ctx_r0.numberOfElements));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.words.length - ctx_r0.numberOfElements > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("existingFilter", ctx_r0.existingFilter);
} }
function WordsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "We couldn't find any words. Maybe try again?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class WordsComponent {
    constructor(wordService, route, router) {
        this.wordService = wordService;
        this.route = route;
        this.router = router;
        this.words = [];
        this.selectedWord = {};
        this.numberOfElements = 50;
        this.subs = [];
    }
    ngOnInit() {
        this.subs.push(this.loadWords());
    }
    ngOnDestroy() {
        _util_subscription_util__WEBPACK_IMPORTED_MODULE_1__["SubscriptionUtil"].unsubscribe(this.subs);
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {
                u: this.wordService.getUsername()
            }
        });
    }
    showMore() {
        this.numberOfElements += 25;
    }
    selectWord(word) {
        this.selectedWord = word;
    }
    updateQueryParams($event) {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: Object.assign(Object.assign({}, $event), { u: this.wordService.getUsername() }),
        });
    }
    loadWords() {
        return this.route.queryParamMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((qParamsMap) => {
            return {
                theWord: qParamsMap.get('w'),
                definition: qParamsMap.get('def'),
                partsOfSpeech: qParamsMap.getAll('pos'),
                createdBy: qParamsMap.get('creator'),
                haveLearnt: qParamsMap.get('learnt')
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((wordFilter) => {
            this.existingFilter = wordFilter;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((wordFilter) => this.wordService.retrieveAll(wordFilter))).subscribe((words) => {
            this.words = words;
            this.numberOfElements = this.words.length < 25 ? this.words.length : 25;
        });
    }
}
WordsComponent.ɵfac = function WordsComponent_Factory(t) { return new (t || WordsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_word_service__WEBPACK_IMPORTED_MODULE_3__["WordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
WordsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WordsComponent, selectors: [["ow-words"]], decls: 5, vars: 2, consts: [[1, "sticky"], ["class", "worms", 4, "ngIf", "ngIfElse"], ["empty", ""], [1, "worms"], [1, "words"], ["class", "card", 4, "ngFor", "ngForOf"], ["class", "card more", 3, "click", 4, "ngIf"], [3, "existingFilter", "filterChange"], [1, "card"], [1, "word"], [1, "definition"], [1, "pos"], [1, "card", "more", 3, "click"], [1, "no-worms"]], template: function WordsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ow-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WordsComponent_div_2_Template, 6, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WordsComponent_ng_template_3_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.words && ctx.words.length !== 0)("ngIfElse", _r1);
    } }, directives: [_top_top_component__WEBPACK_IMPORTED_MODULE_5__["TopComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"]], pipes: [_pipe_chunk_pipe__WEBPACK_IMPORTED_MODULE_8__["ChunkPipe"]], styles: ["@font-face {\n  font-family: \"ssp-regular\";\n  src: url('source-sans-pro-regular.ttf');\n}\n@font-face {\n  font-family: \"ssp-light\";\n  src: url('source-sans-pro-light.ttf');\n}\n@font-face {\n  font-family: \"ssp-italic\";\n  src: url('source-sans-pro-italic.ttf');\n}\n.worms[_ngcontent-%COMP%] {\n  display: flex;\n}\n.worms[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  color: #dedddd;\n}\n.worms[_ngcontent-%COMP%]   .words[_ngcontent-%COMP%] {\n  display: flex;\n  max-height: 500px;\n  overflow-y: scroll;\n  flex-wrap: wrap;\n  width: 70%;\n}\n.worms[_ngcontent-%COMP%]   .words[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 20%;\n  padding: 1rem;\n  border: 1px solid #dedddd;\n  cursor: pointer;\n  box-shadow: 0 2px 4px -5px #101010;\n  transition: all 0.1s ease-in-out;\n  margin: 0.5rem;\n}\n.worms[_ngcontent-%COMP%]   .words[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .word[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.worms[_ngcontent-%COMP%]   .words[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%] {\n  font-family: \"ssp-italic\" sans-serif;\n}\n.worms[_ngcontent-%COMP%]   .words[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  background-color: #f6f6f6;\n}\n.no-worms[_ngcontent-%COMP%] {\n  padding: 3rem;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlXFxfZm9udC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHdvcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksMEJBQUE7RUFDQSx1Q0FBQTtBQ0RKO0FESUE7RUFDSSx3QkFBQTtFQUNBLHFDQUFBO0FDRko7QURLQTtFQUNJLHlCQUFBO0VBQ0Esc0NBQUE7QUNISjtBQVRBO0VBQ0ksYUFBQTtBQVdKO0FBVEk7RUFDSSxjQUFBO0FBV1I7QUFSSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFVUjtBQVJRO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQVVaO0FBUlk7RUFDSSxpQkFBQTtBQVVoQjtBQVBZO0VBQ0ksb0NBQUE7QUFTaEI7QUFOWTtFQUNJLHlCQUFBO0FBUWhCO0FBRkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUtKIiwiZmlsZSI6IndvcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRlZmF1bHQtZm9udDogc2Fucy1zZXJpZjtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdzc3AtcmVndWxhcic7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXQvZm9udC9zb3VyY2Utc2Fucy1wcm8tcmVndWxhci50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ3NzcC1saWdodCc7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXQvZm9udC9zb3VyY2Utc2Fucy1wcm8tbGlnaHQudHRmJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdzc3AtaXRhbGljJztcclxuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldC9mb250L3NvdXJjZS1zYW5zLXByby1pdGFsaWMudHRmJyk7XHJcbn1cclxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInNzcC1yZWd1bGFyXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXQvZm9udC9zb3VyY2Utc2Fucy1wcm8tcmVndWxhci50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwic3NwLWxpZ2h0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXQvZm9udC9zb3VyY2Utc2Fucy1wcm8tbGlnaHQudHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInNzcC1pdGFsaWNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldC9mb250L3NvdXJjZS1zYW5zLXByby1pdGFsaWMudHRmXCIpO1xufVxuLndvcm1zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53b3JtcyBociB7XG4gIGNvbG9yOiAjZGVkZGRkO1xufVxuLndvcm1zIC53b3JkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDcwJTtcbn1cbi53b3JtcyAud29yZHMgLmNhcmQge1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZGRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtNXB4ICMxMDEwMTA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW46IDAuNXJlbTtcbn1cbi53b3JtcyAud29yZHMgLmNhcmQgLndvcmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi53b3JtcyAud29yZHMgLmNhcmQgLmRlZmluaXRpb24ge1xuICBmb250LWZhbWlseTogXCJzc3AtaXRhbGljXCIgc2Fucy1zZXJpZjtcbn1cbi53b3JtcyAud29yZHMgLmNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xufVxuXG4ubm8td29ybXMge1xuICBwYWRkaW5nOiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ "M5Tu":
/*!**********************************************!*\
  !*** ./src/app/service/word.http.service.ts ***!
  \**********************************************/
/*! exports provided: WordHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordHttpService", function() { return WordHttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class WordHttpService {
    constructor(http) {
        this.http = http;
    }
    retrieveAll(wordFilter) {
        return this.http.get(WordHttpService.BASE_URL, {
            params: this.getHttpParams(wordFilter)
        });
    }
    create(word) {
        return this.http.post(WordHttpService.BASE_URL, word);
    }
    getStatistics(u) {
        return this.http.get(`${WordHttpService.BASE_URL}/stats?u=${u}`);
    }
    getHttpParams(wordFilter) {
        if (!wordFilter) {
            return undefined;
        }
        const { theWord, definition, partsOfSpeech, createdBy, haveLearnt } = wordFilter;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = this.setParam(params, 'w', theWord);
        params = this.setParam(params, 'def', definition);
        params = this.setParam(params, 'creator', createdBy);
        params = this.setParam(params, 'learnt', haveLearnt);
        partsOfSpeech === null || partsOfSpeech === void 0 ? void 0 : partsOfSpeech.forEach((pos) => {
            params = params.append('pos', pos);
        });
        return params;
    }
    setParam(httpParams, paramKey, paramVal) {
        if (!paramVal) {
            return httpParams;
        }
        return httpParams.set(paramKey, paramVal);
    }
}
WordHttpService.BASE_URL = '/o/worms';
WordHttpService.ɵfac = function WordHttpService_Factory(t) { return new (t || WordHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
WordHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WordHttpService, factory: WordHttpService.ɵfac });


/***/ }),

/***/ "P9bA":
/*!************************************************!*\
  !*** ./src/app/component/top/top.component.ts ***!
  \************************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/config */ "GSvk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TopComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.navigate(item_r1.path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.isActive(item_r1.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
} }
class TopComponent {
    constructor(router) {
        this.router = router;
        this.menuItems = _util_config__WEBPACK_IMPORTED_MODULE_0__["Config"].MENU_ITEMS;
    }
    navigate(path) {
        this.router.navigate([path], {
            queryParamsHandling: 'preserve'
        });
    }
    isActive(path) {
        return this.router.isActive(path, false);
    }
}
TopComponent.ɵfac = function TopComponent_Factory(t) { return new (t || TopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopComponent, selectors: [["ow-top"]], decls: 8, vars: 1, consts: [[1, "top"], [1, "subtitle"], [1, "menu"], [1, "items"], ["class", "item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "item", 3, "click"]], template: function TopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Oh Worms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "a collection of words");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TopComponent_div_7_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".top[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #dedddd;\n}\n.top[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n.menu[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dedddd;\n  padding-bottom: 1rem;\n  padding-top: 1rem;\n}\n.menu[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  display: flex;\n}\n.menu[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid #dedddd;\n  transition: background-color 0.1s ease-in-out;\n  cursor: pointer;\n}\n.menu[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(last-of-type) {\n  margin-right: 0.5rem;\n}\n.menu[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background-color: #f6f6f6;\n}\n.menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGdDQUFBO0FBQ0o7QUFDSTtFQUNJLG9CQUFBO0FBQ1I7QUFHQTtFQUNJLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUk7RUFDSSxhQUFBO0FBQVI7QUFFUTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtBQUFaO0FBRVk7RUFDSSxvQkFBQTtBQUFoQjtBQUdZO0VBQ0kseUJBQUE7QUFEaEI7QUFNSTtFQUNJLHlCQUFBO0FBSlIiLCJmaWxlIjoidG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGRkZDtcclxuXHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZGRkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuXHJcbiAgICAuaXRlbXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGRkZDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICY6bm90KGxhc3Qtb2YtdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ow-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "U114":
/*!*********************************************************!*\
  !*** ./src/app/component/stats/statistics.component.ts ***!
  \*********************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_word_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/word.service */ "YOt/");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../top/top.component */ "P9bA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





class StatisticsComponent {
    constructor(service) {
        this.service = service;
        this.statistics$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({});
    }
    ngOnInit() {
        this.statistics$ = this.service.getStatistics();
    }
}
StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) { return new (t || StatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_word_service__WEBPACK_IMPORTED_MODULE_2__["WordService"])); };
StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StatisticsComponent, selectors: [["ow-stats"]], decls: 7, vars: 5, consts: [[1, "sticky"], [1, "stats"]], template: function StatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ow-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 3, ctx.statistics$)));
    } }, directives: [_top_top_component__WEBPACK_IMPORTED_MODULE_3__["TopComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], encapsulation: 2 });


/***/ }),

/***/ "YOt/":
/*!*****************************************!*\
  !*** ./src/app/service/word.service.ts ***!
  \*****************************************/
/*! exports provided: WordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordService", function() { return WordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _word_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./word.http.service */ "M5Tu");


class WordService {
    constructor(wordHttpService) {
        this.wordHttpService = wordHttpService;
        this.username = '';
    }
    retrieveAll(wordFilter) {
        return this.wordHttpService.retrieveAll(wordFilter);
    }
    create(word) {
        return this.wordHttpService.create(word);
    }
    getStatistics() {
        return this.wordHttpService.getStatistics(this.username);
    }
    setUsername(username) {
        this.username = username;
    }
    getUsername() {
        return this.username;
    }
}
WordService.ɵfac = function WordService_Factory(t) { return new (t || WordService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_word_http_service__WEBPACK_IMPORTED_MODULE_1__["WordHttpService"])); };
WordService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WordService, factory: WordService.ɵfac });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pipe_chunk_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/chunk.pipe */ "ZZHY");
/* harmony import */ var _service_word_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/word.http.service */ "M5Tu");
/* harmony import */ var _service_word_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/word.service */ "YOt/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _component_add_word_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/add/word-add.component */ "jnGm");
/* harmony import */ var _component_common_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/common/button.component */ "fej4");
/* harmony import */ var _component_common_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/common/dropdown.component */ "/wPI");
/* harmony import */ var _component_common_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/common/input.component */ "faew");
/* harmony import */ var _component_filter_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/filter/filter.component */ "6Xud");
/* harmony import */ var _component_stats_statistics_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/stats/statistics.component */ "U114");
/* harmony import */ var _component_top_top_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/top/top.component */ "P9bA");
/* harmony import */ var _component_list_words_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/list/words.component */ "K3Le");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        _service_word_http_service__WEBPACK_IMPORTED_MODULE_5__["WordHttpService"],
        _service_word_service__WEBPACK_IMPORTED_MODULE_6__["WordService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _component_common_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"],
        _component_common_dropdown_component__WEBPACK_IMPORTED_MODULE_10__["DropdownComponent"],
        _component_filter_filter_component__WEBPACK_IMPORTED_MODULE_12__["FilterComponent"],
        _component_common_input_component__WEBPACK_IMPORTED_MODULE_11__["InputComponent"],
        _component_add_word_add_component__WEBPACK_IMPORTED_MODULE_8__["WordAddComponent"],
        _component_list_words_component__WEBPACK_IMPORTED_MODULE_15__["WordsComponent"],
        _component_stats_statistics_component__WEBPACK_IMPORTED_MODULE_13__["StatisticsComponent"],
        _component_top_top_component__WEBPACK_IMPORTED_MODULE_14__["TopComponent"],
        _pipe_chunk_pipe__WEBPACK_IMPORTED_MODULE_4__["ChunkPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();


/***/ }),

/***/ "ZZHY":
/*!************************************!*\
  !*** ./src/app/pipe/chunk.pipe.ts ***!
  \************************************/
/*! exports provided: ChunkPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChunkPipe", function() { return ChunkPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ChunkPipe {
    transform(value, numberOfElements) {
        if (!value || !Array.isArray(value)) {
            return [];
        }
        return value.slice(0, numberOfElements - 1);
    }
}
ChunkPipe.ɵfac = function ChunkPipe_Factory(t) { return new (t || ChunkPipe)(); };
ChunkPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "chunkPipe", type: ChunkPipe, pure: true });


/***/ }),

/***/ "c9Kw":
/*!**********************************************!*\
  !*** ./src/app/model/part-of-speech.enum.ts ***!
  \**********************************************/
/*! exports provided: PartOfSpeech */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartOfSpeech", function() { return PartOfSpeech; });
var PartOfSpeech;
(function (PartOfSpeech) {
    PartOfSpeech["ADJECTIVE"] = "Adjective";
    PartOfSpeech["ADVERB"] = "Adverb";
    PartOfSpeech["NOUN"] = "Noun";
    PartOfSpeech["PRONOUN"] = "Pronoun";
    PartOfSpeech["OTHER"] = "Other";
    PartOfSpeech["VERB"] = "Verb";
})(PartOfSpeech || (PartOfSpeech = {}));


/***/ }),

/***/ "faew":
/*!*****************************************************!*\
  !*** ./src/app/component/common/input.component.ts ***!
  \*****************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class InputComponent {
    constructor() {
        this.name = '';
        this.type = '';
        this.value = undefined;
        this.placeholder = '';
        this.onValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    updateValue($event) {
        // @ts-ignore
        const value = $event.target.value;
        this.onValueChange.emit(value);
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["ow-input"]], inputs: { name: "name", type: "type", value: "value", placeholder: "placeholder" }, outputs: { onValueChange: "onValueChange" }, decls: 1, vars: 4, consts: [[1, "input", 3, "name", "type", "ngModel", "placeholder", "ngModelChange", "change"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputComponent_Template_input_ngModelChange_0_listener($event) { return ctx.value = $event; })("change", function InputComponent_Template_input_change_0_listener($event) { return ctx.updateValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.name)("type", ctx.type)("ngModel", ctx.value)("placeholder", ctx.placeholder);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".input[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  border: 1px solid #dedddd;\n  transition: all 0.1s ease-out;\n  background-color: #f6f6f6;\n}\n.input[_ngcontent-%COMP%]:focus-visible {\n  border: 1px solid #dedddd;\n  box-shadow: none;\n  outline: none;\n}\n.input[_ngcontent-%COMP%]:hover {\n  background-color: #e7e6e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDUjtBQUVJO0VBQ0kseUJBQUE7QUFBUiIsImZpbGUiOiJpbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XHJcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZGRkO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLW91dDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcblxyXG4gICAgJjpmb2N1cy12aXNpYmxlIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZGRkO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlNmU2O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "fej4":
/*!******************************************************!*\
  !*** ./src/app/component/common/button.component.ts ***!
  \******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class ButtonComponent {
    constructor() {
        this.type = 'text';
        this.onButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onClick($event) {
        this.onButtonClick.emit($event);
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["ow-button"]], inputs: { type: "type" }, outputs: { onButtonClick: "onButtonClick" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "button", 3, "type", "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type);
    } }, styles: [".button[_ngcontent-%COMP%] {\n  border-radius: 0;\n  background-color: transparent;\n  border: 1px solid #dedddd;\n  padding: 0.5rem;\n  text-transform: uppercase;\n  transition: all 0.1s ease-in;\n  cursor: pointer;\n  width: 100%;\n}\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #dedddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxidXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLHlCQUFBO0FBQ1IiLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZGRkO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGRkZDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "hjoQ":
/*!****************************************************************!*\
  !*** ./src/app/guard/query-param-interceptor-guard.service.ts ***!
  \****************************************************************/
/*! exports provided: QueryParamInterceptorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryParamInterceptorGuard", function() { return QueryParamInterceptorGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_word_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/word.service */ "YOt/");



class QueryParamInterceptorGuard {
    constructor(router, wordService) {
        this.router = router;
        this.wordService = wordService;
    }
    canActivate(next, state) {
        const u = state.root.queryParams.u;
        this.wordService.setUsername(u);
        return true;
    }
}
QueryParamInterceptorGuard.ɵfac = function QueryParamInterceptorGuard_Factory(t) { return new (t || QueryParamInterceptorGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_word_service__WEBPACK_IMPORTED_MODULE_2__["WordService"])); };
QueryParamInterceptorGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QueryParamInterceptorGuard, factory: QueryParamInterceptorGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jnGm":
/*!*****************************************************!*\
  !*** ./src/app/component/add/word-add.component.ts ***!
  \*****************************************************/
/*! exports provided: WordAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordAddComponent", function() { return WordAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../top/top.component */ "P9bA");


class WordAddComponent {
    constructor() {
    }
}
WordAddComponent.ɵfac = function WordAddComponent_Factory(t) { return new (t || WordAddComponent)(); };
WordAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WordAddComponent, selectors: [["ow-view"]], decls: 4, vars: 0, consts: [[1, "sticky"]], template: function WordAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ow-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_top_top_component__WEBPACK_IMPORTED_MODULE_1__["TopComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JkLWFkZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "nqQq":
/*!*******************************************!*\
  !*** ./src/app/util/subscription.util.ts ***!
  \*******************************************/
/*! exports provided: SubscriptionUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionUtil", function() { return SubscriptionUtil; });
class SubscriptionUtil {
    static unsubscribe(subscription) {
        const tempSubscription = Array.isArray(subscription)
            ? subscription
            : [subscription];
        tempSubscription
            .filter((sub) => !!sub)
            .forEach((sub) => {
            sub.unsubscribe();
        });
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guard_query_param_interceptor_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/query-param-interceptor-guard.service */ "hjoQ");
/* harmony import */ var _component_add_word_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/add/word-add.component */ "jnGm");
/* harmony import */ var _component_list_words_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/list/words.component */ "K3Le");
/* harmony import */ var _component_stats_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/stats/statistics.component */ "U114");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: 'worms',
        component: _component_list_words_component__WEBPACK_IMPORTED_MODULE_3__["WordsComponent"],
        canActivate: [_guard_query_param_interceptor_guard_service__WEBPACK_IMPORTED_MODULE_1__["QueryParamInterceptorGuard"]]
    },
    {
        path: 'worm/new',
        component: _component_add_word_add_component__WEBPACK_IMPORTED_MODULE_2__["WordAddComponent"]
    },
    {
        path: 'stats',
        component: _component_stats_statistics_component__WEBPACK_IMPORTED_MODULE_4__["StatisticsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map