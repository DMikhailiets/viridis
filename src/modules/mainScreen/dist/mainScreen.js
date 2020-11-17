"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Themed_1 = require("../../../../components/Themed");
var components_1 = require("../../../components");
var mainScreenStyle_1 = require("./mainScreenStyle");
var MainScreenComponent = function (_a) {
    var deviceData = _a.deviceData, appData = _a.appData, scannedDevicesList = _a.scannedDevicesList, measurements = _a.measurements;
    var measurementsArray = measurements === null || measurements === void 0 ? void 0 : measurements.map(function (measurement) { return react_1["default"].createElement(components_1.Cart, { glucose: measurement }); });
    return (react_1["default"].createElement(react_native_1.View, { style: mainScreenStyle_1["default"].container }, measurements && measurements.length === 0
        ? react_1["default"].createElement(Info, { appData: appData })
        : react_1["default"].createElement(react_native_1.View, { style: mainScreenStyle_1["default"].measurementsWrapper }, measurements != null
            ? measurementsArray
            : react_1["default"].createElement(Themed_1.Text, null, "Measurements list is empty"))));
};
var Info = function (props) {
    return (react_1["default"].createElement(react_native_1.View, { style: mainScreenStyle_1["default"].infoView },
        props.appData.isScanning === true
            ? react_1["default"].createElement(Searching, null)
            : react_1["default"].createElement(Themed_1.Text, null),
        props.appData.connectedToViridis === false
            ? react_1["default"].createElement(Themed_1.Text, null)
            : react_1["default"].createElement(Connected, null)));
};
var Searching = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: mainScreenStyle_1["default"].infoView },
        react_1["default"].createElement(react_native_1.Image, { source: require('../../../img/Searching.png') }),
        react_1["default"].createElement(Themed_1.Text, null, "Searching your's viridis...")));
};
var Connected = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: mainScreenStyle_1["default"].infoView },
        react_1["default"].createElement(react_native_1.Image, { source: require('../../../img/Success.png') }),
        react_1["default"].createElement(Themed_1.Text, null, "Connected!)")));
};
exports["default"] = MainScreenComponent;
