/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "(pages-dir-browser)/./src/blocks/MediaText.jsx":
/*!**********************************!*\
  !*** ./src/blocks/MediaText.jsx ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(pages-dir-browser)/./src/sections/Blocks.jsx":
/*!*********************************!*\
  !*** ./src/sections/Blocks.jsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Blocks)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(pages-dir-browser)/./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_MediaText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/blocks/MediaText */ \"(pages-dir-browser)/./src/blocks/MediaText.jsx\");\n/* harmony import */ var _blocks_MediaText__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_MediaText__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _blocks_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/blocks/Text */ \"(pages-dir-browser)/./src/blocks/Text.jsx\");\n\n\n\n// 1️⃣ mapping: Strapi block‑ID → React‑component\nconst COMPONENTS = {\n    \"blocks.text\": _blocks_Text__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    \"blocks.media-text\": (_blocks_MediaText__WEBPACK_IMPORTED_MODULE_1___default())\n};\nfunction Blocks(param) {\n    let { blocks = [] } = param;\n    if (!blocks.length) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: blocks.map((block)=>{\n            const BlockComponent = COMPONENTS[block.__component];\n            // 2️⃣ bestaat type niet?\n            if (!BlockComponent) {\n                console.warn(\"Onbekend blocktype: \".concat(block.__component));\n                return null; // of een <Fallback> component renderen\n            }\n            // 3️⃣ render correct component\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlockComponent, {\n                block: block\n            }, block.id, false, {\n                fileName: \"/Users/glsvbv/Documents/My HDD/C-Applications/MAMP/www/prive/Testen/Strapi-React/frontend/src/sections/Blocks.jsx\",\n                lineNumber: 25,\n                columnNumber: 16\n            }, this);\n        })\n    }, void 0, false);\n}\n_c = Blocks;\nvar _c;\n$RefreshReg$(_c, \"Blocks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL3NyYy9zZWN0aW9ucy9CbG9ja3MuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFDVjtBQUVqQyxpREFBaUQ7QUFDakQsTUFBTUUsYUFBYTtJQUNqQixlQUFlRCxvREFBSUE7SUFDbkIscUJBQXFCRCwwREFBU0E7QUFDaEM7QUFFZSxTQUFTRyxPQUFRLEtBQWU7UUFBZixFQUFFQyxTQUFTLEVBQUUsRUFBRSxHQUFmO0lBQzlCLElBQUksQ0FBQ0EsT0FBT0MsTUFBTSxFQUFFLE9BQU87SUFFM0IscUJBQ0U7a0JBQ0dELE9BQU9FLEdBQUcsQ0FBQyxDQUFDQztZQUNYLE1BQU1DLGlCQUFpQk4sVUFBVSxDQUFDSyxNQUFNRSxXQUFXLENBQUM7WUFFcEQseUJBQXlCO1lBQ3pCLElBQUksQ0FBQ0QsZ0JBQWdCO2dCQUNuQkUsUUFBUUMsSUFBSSxDQUFDLHVCQUF5QyxPQUFsQkosTUFBTUUsV0FBVztnQkFDckQsT0FBTyxNQUFNLHVDQUF1QztZQUN0RDtZQUVBLCtCQUErQjtZQUMvQixxQkFBTyw4REFBQ0Q7Z0JBQThCRCxPQUFPQTtlQUFqQkEsTUFBTUssRUFBRTs7Ozs7UUFDdEM7O0FBR047S0FuQndCVCIsInNvdXJjZXMiOlsiL1VzZXJzL2dsc3Zidi9Eb2N1bWVudHMvTXkgSEREL0MtQXBwbGljYXRpb25zL01BTVAvd3d3L3ByaXZlL1Rlc3Rlbi9TdHJhcGktUmVhY3QvZnJvbnRlbmQvc3JjL3NlY3Rpb25zL0Jsb2Nrcy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZGlhVGV4dCBmcm9tIFwiQC9ibG9ja3MvTWVkaWFUZXh0XCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiQC9ibG9ja3MvVGV4dFwiO1xuXG4vLyAx77iP4oOjIG1hcHBpbmc6IFN0cmFwaSBibG9ja+KAkUlEIOKGkiBSZWFjdOKAkWNvbXBvbmVudFxuY29uc3QgQ09NUE9ORU5UUyA9IHtcbiAgXCJibG9ja3MudGV4dFwiOiBUZXh0LFxuICBcImJsb2Nrcy5tZWRpYS10ZXh0XCI6IE1lZGlhVGV4dCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2NrcyAoeyBibG9ja3MgPSBbXSB9KSB7XG4gIGlmICghYmxvY2tzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2Jsb2Nrcy5tYXAoKGJsb2NrKSA9PiB7XG4gICAgICAgIGNvbnN0IEJsb2NrQ29tcG9uZW50ID0gQ09NUE9ORU5UU1tibG9jay5fX2NvbXBvbmVudF07XG5cbiAgICAgICAgLy8gMu+4j+KDoyBiZXN0YWF0IHR5cGUgbmlldD9cbiAgICAgICAgaWYgKCFCbG9ja0NvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgT25iZWtlbmQgYmxvY2t0eXBlOiAke2Jsb2NrLl9fY29tcG9uZW50fWApO1xuICAgICAgICAgIHJldHVybiBudWxsOyAvLyBvZiBlZW4gPEZhbGxiYWNrPiBjb21wb25lbnQgcmVuZGVyZW5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDPvuI/ig6MgcmVuZGVyIGNvcnJlY3QgY29tcG9uZW50XG4gICAgICAgIHJldHVybiA8QmxvY2tDb21wb25lbnQga2V5PXtibG9jay5pZH0gYmxvY2s9e2Jsb2NrfSAvPjtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk1lZGlhVGV4dCIsIlRleHQiLCJDT01QT05FTlRTIiwiQmxvY2tzIiwiYmxvY2tzIiwibGVuZ3RoIiwibWFwIiwiYmxvY2siLCJCbG9ja0NvbXBvbmVudCIsIl9fY29tcG9uZW50IiwiY29uc29sZSIsIndhcm4iLCJpZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./src/sections/Blocks.jsx\n"));

/***/ })

});