"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var shared_1 = require('../common/shared');
var domhandler_1 = require('../dom/domhandler');
var forms_1 = require('@angular/forms');
exports.LISTBOX_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return Listbox; }),
    multi: true
};
var Listbox = (function () {
    function Listbox(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onChange = new core_1.EventEmitter();
        this.onDblClick = new core_1.EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Listbox.prototype.writeValue = function (value) {
        this.value = value;
    };
    Listbox.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Listbox.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Listbox.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Listbox.prototype.onOptionClick = function (event, option) {
        var metaKey = (event.metaKey || event.ctrlKey);
        var selected = this.isSelected(option);
        if (this.multiple)
            this.onOptionClickMultiple(event, option);
        else
            this.onOptionClickSingle(event, option);
    };
    Listbox.prototype.onOptionClickSingle = function (event, option) {
        var metaKey = (event.metaKey || event.ctrlKey);
        var selected = this.isSelected(option);
        var valueChanged = false;
        if (selected) {
            if (metaKey) {
                this.value = null;
                valueChanged = true;
            }
        }
        else {
            this.value = option.value;
            valueChanged = true;
        }
        if (valueChanged) {
            this.onModelChange(this.value);
            this.onChange.emit(event);
        }
    };
    Listbox.prototype.onOptionClickMultiple = function (event, option) {
        var metaKey = (event.metaKey || event.ctrlKey);
        var selected = this.isSelected(option);
        var valueChanged = false;
        if (selected) {
            if (metaKey) {
                this.value.splice(this.findIndex(option), 1);
            }
            else {
                this.value = [];
                this.value.push(option.value);
            }
            valueChanged = true;
        }
        else {
            this.value = (metaKey) ? this.value || [] : [];
            this.value.push(option.value);
            valueChanged = true;
        }
        if (valueChanged) {
            this.onModelChange(this.value);
            this.onChange.emit(event);
        }
    };
    Listbox.prototype.isSelected = function (option) {
        var selected = false;
        if (this.multiple) {
            if (this.value) {
                for (var i = 0; i < this.value.length; i++) {
                    if (this.value[i] === option.value) {
                        selected = true;
                        break;
                    }
                }
            }
        }
        else {
            selected = this.value == option.value;
        }
        return selected;
    };
    Listbox.prototype.findIndex = function (option) {
        var index = -1;
        if (this.value) {
            for (var i = 0; i < this.value.length; i++) {
                if (this.domHandler.equals(option.value, this.value[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    Listbox.prototype.onDoubleClick = function (event, option) {
        this.onDblClick.emit({
            originalEvent: event,
            value: option
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Listbox.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Listbox.prototype, "multiple", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Listbox.prototype, "style", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Listbox.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Listbox.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Listbox.prototype, "onChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Listbox.prototype, "onDblClick", void 0);
    __decorate([
        core_1.ContentChild(core_1.TemplateRef), 
        __metadata('design:type', core_1.TemplateRef)
    ], Listbox.prototype, "itemTemplate", void 0);
    Listbox = __decorate([
        core_1.Component({
            selector: 'p-listbox',
            template: "\n        <div [ngClass]=\"{'ui-listbox ui-inputtext ui-widget ui-widget-content ui-corner-all':true,'ui-state-disabled':disabled}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul class=\"ui-listbox-list\">\n                <li #item *ngFor=\"let option of options\"\n                    [ngClass]=\"{'ui-listbox-item ui-corner-all':true,'ui-state-hover':(hoveredItem==item),'ui-state-highlight':isSelected(option)}\"\n                    (mouseenter)=\"hoveredItem=item\" (mouseleave)=\"hoveredItem=null\" (click)=\"onOptionClick($event,option)\" (dblclick)=\"onDoubleClick($event,option)\">\n                    <span *ngIf=\"!itemTemplate\">{{option.label}}</span>\n                    <template *ngIf=\"itemTemplate\" [pTemplateWrapper]=\"itemTemplate\" [item]=\"option\"></template>\n                </li>\n            </ul>\n        </div>\n    ",
            providers: [domhandler_1.DomHandler, exports.LISTBOX_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, domhandler_1.DomHandler])
    ], Listbox);
    return Listbox;
}());
exports.Listbox = Listbox;
var ListboxModule = (function () {
    function ListboxModule() {
    }
    ListboxModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_1.SharedModule],
            exports: [Listbox, shared_1.SharedModule],
            declarations: [Listbox]
        }), 
        __metadata('design:paramtypes', [])
    ], ListboxModule);
    return ListboxModule;
}());
exports.ListboxModule = ListboxModule;
//# sourceMappingURL=listbox.js.map