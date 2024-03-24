"use strict";
// TypeScript Classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// -- Members: Types
var Person01 = /** @class */ (function () {
    function Person01() {
    }
    return Person01;
}());
var person01 = new Person01();
person01.name = "Ramu";
// -- Members: Visibility
var Person02 = /** @class */ (function () {
    function Person02(name) {
        this.name = name;
    }
    Person02.prototype.getName = function () {
        return this.name;
    };
    return Person02;
}());
var person02 = new Person02("Jane");
console.log(person02.getName()); // person02.name isn't accessible from outside the class since it's private
var RectangleInheritance = /** @class */ (function () {
    function RectangleInheritance(width, height) {
        this.width = width;
        this.height = height;
    }
    RectangleInheritance.prototype.getArea = function () {
        return this.width * this.height;
    };
    return RectangleInheritance;
}());
// -- Abstract Classes
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    Polygon.prototype.toString = function () {
        return "Polygon[area=".concat(this.getArea(), "]");
    };
    return Polygon;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Polygon));
