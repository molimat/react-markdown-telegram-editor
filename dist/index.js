"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_jss_1 = require("react-jss");
var Yamde_1 = __importDefault(require("./Yamde"));
var light_1 = require("./themes/light");
var dark_1 = require("./themes/dark");
var defaultToolbarActions_1 = require("./utils/defaultToolbarActions");
var YamdeComp = function (_a) {
    var value = _a.value, handler = _a.handler, _b = _a.theme, theme = _b === void 0 ? 'light' : _b, _c = _a.toolbar, toolbar = _c === void 0 ? defaultToolbarActions_1.defaultToolbarAction : _c;
    return (react_1.default.createElement(react_jss_1.ThemeProvider, { theme: theme === 'light' ? light_1.lightTheme : dark_1.darkTheme },
        react_1.default.createElement(Yamde_1.default, { value: value, handler: handler, toolbar: toolbar })));
};
exports.default = YamdeComp;
