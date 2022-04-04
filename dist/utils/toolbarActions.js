"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toolbarActions = void 0;
var react_1 = __importDefault(require("react"));
var BoldOutlined_1 = __importDefault(require("@ant-design/icons/BoldOutlined"));
var ItalicOutlined_1 = __importDefault(require("@ant-design/icons/ItalicOutlined"));
var StrikethroughOutlined_1 = __importDefault(require("@ant-design/icons/StrikethroughOutlined"));
var UnorderedListOutlined_1 = __importDefault(require("@ant-design/icons/UnorderedListOutlined"));
var OrderedListOutlined_1 = __importDefault(require("@ant-design/icons/OrderedListOutlined"));
var TableOutlined_1 = __importDefault(require("@ant-design/icons/TableOutlined"));
var FileImageOutlined_1 = __importDefault(require("@ant-design/icons/FileImageOutlined"));
var LinkOutlined_1 = __importDefault(require("@ant-design/icons/LinkOutlined"));
var RightOutlined_1 = __importDefault(require("@ant-design/icons/RightOutlined"));
var CodeOutlined_1 = __importDefault(require("@ant-design/icons/CodeOutlined"));
exports.toolbarActions = [
    {
        name: 'bold',
        icon: react_1.default.createElement(BoldOutlined_1.default, null),
        schema: {
            openingTag: '**',
            closingTag: '**',
        },
    },
    {
        name: 'italic',
        icon: react_1.default.createElement(ItalicOutlined_1.default, null),
        schema: {
            openingTag: '__',
            closingTag: '__',
        },
    },
    {
        name: 'strikethrough',
        icon: react_1.default.createElement(StrikethroughOutlined_1.default, null),
        schema: {
            openingTag: '~~',
            closingTag: '~~',
        },
    },
    {
        name: 'heading1',
        icon: 'H1',
        schema: {
            openingTag: '# ',
            closingTag: '',
        },
    },
    {
        name: 'heading2',
        icon: 'H2',
        schema: {
            openingTag: '## ',
            closingTag: '',
        },
    },
    {
        name: 'heading3',
        icon: 'H3',
        schema: {
            openingTag: '### ',
            closingTag: '',
        },
    },
    {
        name: 'ulist',
        icon: react_1.default.createElement(UnorderedListOutlined_1.default, null),
        schema: {
            openingTag: '- ',
            closingTag: '',
        },
    },
    {
        name: 'olist',
        icon: react_1.default.createElement(OrderedListOutlined_1.default, null),
        schema: {
            openingTag: '1. ',
            closingTag: '',
        },
    },
    {
        name: 'table',
        icon: react_1.default.createElement(TableOutlined_1.default, null),
        schema: {
            openingTag: 'Column 1 | Column 2 | Column 3\n---|:---:|---:\nLeft | Center | Right\n1 | 2 | 3\n4 | 5 | 6',
            closingTag: '',
        },
    },
    {
        name: 'image',
        icon: react_1.default.createElement(FileImageOutlined_1.default, null),
        schema: {
            openingTag: '![',
            closingTag: '](https://example.com/image.png)',
        },
    },
    {
        name: 'link',
        icon: react_1.default.createElement(LinkOutlined_1.default, null),
        schema: {
            openingTag: '[',
            closingTag: '](https://www.example.com)',
        },
    },
    {
        name: 'quote',
        icon: react_1.default.createElement(RightOutlined_1.default, null),
        schema: {
            openingTag: '> ',
            closingTag: '',
        },
    },
    {
        name: 'code',
        icon: react_1.default.createElement(CodeOutlined_1.default, null),
        schema: {
            openingTag: '`',
            closingTag: '`',
        },
    },
    {
        name: 'hr',
        icon: 'HR',
        schema: {
            openingTag: '',
            closingTag: '\n\n---\n',
        },
    },
];
