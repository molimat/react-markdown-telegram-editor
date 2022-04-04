"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var showdown_1 = __importDefault(require("showdown"));
var Yamde_styles_1 = require("./Yamde.styles");
var toolbarActions_1 = require("./utils/toolbarActions");
var converter = new showdown_1.default.Converter({
    tables: true,
    simplifiedAutoLink: false,
    strikethrough: true,
    tasklists: true,
    noHeaderId: true,
});
var Yamde = function (_a) {
    var value = _a.value, handler = _a.handler, toolbar = _a.toolbar;
    var _b = react_1.useState(false), isPreviewMode = _b[0], setisPreviewMode = _b[1];
    var textEditor = react_1.useRef(null);
    var classes = Yamde_styles_1.useStyles();
    var htmlPreview = converter.makeHtml(value);
    var handleChange = function (e) {
        let value = e.target.value
        if(e.target.value === "*") {
            value = "\\*"
        }
        if(e.target.value === "_") {
            value = "\\_"
        }
        handler(value);
    };
    var handleClick = function (_a) {
        var name = _a.name, schema = _a.schema;
        var openingTag = schema.openingTag, closingTag = schema.closingTag;
        if (textEditor && textEditor.current) {
            var _b = textEditor.current, editorValue = _b.value, selectionStart = _b.selectionStart, selectionEnd = _b.selectionEnd;
            var len = editorValue.length;
            var selectedText = textEditor.current.value.substring(selectionStart, selectionEnd);
            var regex = /[^\n]+/g;
            var list = selectedText.match(regex);
            var fullReplacement = '';
            var formatText = function (selectionList, actionName, actionOpeningTag, actionClosingTag) {
                var newString = '';
                selectionList.forEach(function (item, i) {
                    if (actionName === 'olist') {
                        newString += i + 1 + ". " + item + closingTag + "\n";
                    }
                    else {
                        newString += "" + actionOpeningTag + item + actionClosingTag + "\n";
                    }
                });
                return newString;
            };
            if (list && list.length > 0 && (name === 'olist' || name === 'ulist')) {
                fullReplacement =
                    editorValue.substring(0, selectionStart) +
                        formatText(list, name, openingTag, closingTag) +
                        editorValue.substring(selectionEnd, len);
            }
            else {
                var replacement = "" + openingTag + selectedText + closingTag;
                fullReplacement =
                    editorValue.substring(0, selectionStart) +
                        replacement +
                        editorValue.substring(selectionEnd, len);
            }
            handler(fullReplacement);
        }
    };
    return (react_1.default.createElement("div", { className: classes.yamde },
        react_1.default.createElement("div", { className: classes.toolbar },
            react_1.default.createElement("div", { className: classes.buttons }, toolbarActions_1.toolbarActions
                .filter(function (action) { return toolbar === null || toolbar === void 0 ? void 0 : toolbar.includes(action.name); })
                .map(function (_a) {
                var name = _a.name, icon = _a.icon, schema = _a.schema;
                return (react_1.default.createElement("div", { key: name, className: classes.button, onClick: function () { return handleClick({ name: name, schema: schema }); } }, icon));
            })),
            react_1.default.createElement("div", { className: classes.viewSwitch },
                react_1.default.createElement("div", { className: classes.viewButton + " " + (!isPreviewMode ? classes.activeView : ''), onClick: function () { return setisPreviewMode(false); } }, "Editor"),
                react_1.default.createElement("div", { className: classes.viewButton + " " + (isPreviewMode ? classes.activeView : ''), onClick: function () { return setisPreviewMode(true); } }, "Preview"))),
        react_1.default.createElement("div", { className: classes.contentArea }, !isPreviewMode ? (react_1.default.createElement("textarea", { rows: 12, name: "yamdeContent", value: value, onChange: function (e) { return handleChange(e); }, required: true, ref: textEditor })) : (react_1.default.createElement("div", { className: classes.preview, dangerouslySetInnerHTML: { __html: htmlPreview } }))),
        react_1.default.createElement("div", { className: classes.mobileButton }, toolbarActions_1.toolbarActions
            .filter(function (action) { return toolbar === null || toolbar === void 0 ? void 0 : toolbar.includes(action.name); })
            .map(function (_a) {
            var name = _a.name, icon = _a.icon, schema = _a.schema;
            return (react_1.default.createElement("div", { key: name, className: classes.button, onClick: function () { return handleClick({ name: name, schema: schema }); } }, icon));
        }))));
};
exports.default = Yamde;
