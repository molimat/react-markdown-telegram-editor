"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var react_jss_1 = require("react-jss");
exports.useStyles = react_jss_1.createUseStyles(function (theme) { return ({
    yamde: {
        margin: '16px 0',
        width: '100%',
        boxSizing: 'initial',
        '@media screen and (max-width: 767px)': {
            overflow: 'hidden',
        },
    },
    toolbar: {
        display: 'flex',
        marginBottom: '-1px',
        maxHeight: '36px',
        width: '100%',
    },
    buttons: {
        display: 'flex',
        '@media screen and (max-width: 767px)': {
            display: 'none',
        },
    },
    mobileButton: {
        display: 'none',
        '@media screen and (max-width: 767px)': {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(34px, 1fr))',
            marginTop: '-1px',
        },
    },
    viewSwitch: {
        marginLeft: 'auto',
        display: 'flex',
        marginTop: '-1px',
    },
    viewButton: {
        cursor: 'pointer',
        fontSize: '14px',
        backgroundColor: theme.switchButtonBackgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: "1px solid " + theme.switchButtonBorderColor,
        transition: 'background-color 0.2s ease',
        fontWeight: 400,
        padding: '0 10px',
        width: '65px',
        height: '35px',
        color: theme.switchButtonColorView,
        zIndex: 1,
        fontFamily: 'Helvetica, Arial, sans-serif',
        '&:first-child': {
            borderRight: 0,
        },
        '&:hover': {
            color: theme.switchButtonColorHover,
            backgroundColor: theme.switchButtonBackgroundColorHover,
            transition: 'background-color 0.2s ease',
        },
    },
    activeView: {
        borderBottom: "1px solid " + theme.switchButtonBorderColorActiveView,
        color: theme.switchButtonColorActiveView,
        backgroundColor: theme.switchButtonBackgroundColorActiveView,
        '&:hover': {
            backgroundColor: theme.switchButtonBackgroundColorActiveView,
        },
    },
    contentArea: {
        marginTop: '-1px',
        display: 'flex',
        '& > textarea': {
            borderRadius: 0,
            border: "1px solid " + theme.textAreaBorderColor,
            width: 'calc(100% - 34px)',
            padding: '16px',
            resize: 'none',
            background: theme.contentAreaBackgroundColor,
            color: theme.textColor,
            '&::selection': {
                backgroundColor: theme.textAreaSelectionBackgroundColor,
                color: theme.textAreaSelectionColor,
            },
            '&:active, &:focus': {
                border: "1px solid " + theme.textAreaBorderColor,
                outline: 'none',
            },
        },
    },
    preview: {
        background: theme.contentAreaBackgroundColor,
        border: "1px solid " + theme.previewAreaBorderColor,
        width: 'calc(100% - 34px)',
        padding: '16px',
        minHeight: '50px',
        fontSize: '1rem',
        fontWeight: 400,
        fontFamily: 'Helvetica, Arial, sans-serif',
        '& > p': {
            color: theme.textColor + " !important",
            fontFamily: 'inherit',
            textAlign: 'left',
            fontSize: '16px',
            fontWeight: 400,
            marginBottom: '1rem',
            marginTop: 0,
            '& > img': {
                maxWidth: '100%',
            },
        },
        '& code': {
            fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
            fontSize: '12px',
            background: theme.codeBlockBackgroundColor,
            padding: '4px 8px',
        },
        '& pre': {
            width: 'auto',
            background: theme.codeBlockBackgroundColor,
            padding: '4px 8px',
        },
        '& > h1, & > h2, & > h3, & > h4, & > h5, & > h6': {
            color: theme.textColor + " !important",
            fontFamily: 'inherit',
            textAlign: 'left',
        },
        '& a': {
            textDecoration: 'underline !important',
            fontFamily: 'inherit',
            color: theme.linkColor + " !important",
        },
        '& > blockquote': {
            padding: '8px 24px',
            lineHeight: '1em',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            marginInlineStart: 0,
            marginInlineEnd: 0,
            fontStyle: 'italic',
            borderLeft: "5px solid " + theme.quoteAdornmentColor,
            fontSize: '1.15em',
            '& > p': {
                color: theme.textColor + " !important",
            },
        },
        '& > table': {
            borderCollapse: 'collapse',
            '& th, & td': {
                border: "1px solid " + theme.tableBorderColor,
                padding: '4px',
                color: theme.textColor,
            },
        },
        '& ul, & ol, & li': {
            color: theme.textColor,
        },
    },
    button: {
        cursor: 'pointer',
        backgroundColor: theme.buttonBackgroundColor,
        fontSize: '13px',
        fontFamily: 'Courier, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        width: '34px',
        height: '34px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: "1px solid " + theme.buttonBorderColor,
        transition: 'background-color 0.2s ease',
        marginRight: '-1px',
        color: theme.buttonColor,
        '&:hover': {
            backgroundColor: theme.buttonBackgroundColorHover,
            transition: 'background-color 0.2s ease',
        },
        '& > svg': {
            width: '16px',
            height: '16px',
        },
    },
}); });
