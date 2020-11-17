"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var MyAppHeaderText = /** @class */ (function (_super) {
    __extends(MyAppHeaderText, _super);
    function MyAppHeaderText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyAppHeaderText.prototype.render = function () {
        return (react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Montserrat' } }));
    };
    return MyAppHeaderText;
}(react_1.Component));
