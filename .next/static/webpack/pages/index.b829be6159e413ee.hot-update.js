"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/common/QuikBuy/index.tsx":
/*!*********************************************!*\
  !*** ./components/common/QuikBuy/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Partials_FirstForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Partials/FirstForm */ \"./components/common/QuikBuy/Partials/FirstForm.tsx\");\n/* harmony import */ var _Partials_SecondaryForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Partials/SecondaryForm */ \"./components/common/QuikBuy/Partials/SecondaryForm.tsx\");\n/* harmony import */ var _Partials_ThirdForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Partials/ThirdForm */ \"./components/common/QuikBuy/Partials/ThirdForm.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst QuickBuy = ()=>{\n    _s();\n    const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        value: 0,\n        region: \"\",\n        blueEssence: \"\"\n    });\n    const handleRegion = (region, value)=>{\n        setFormState({\n            ...formState,\n            region: region,\n            value: value\n        });\n    };\n    const handleBlueEssence = (blueEssence, value)=>{\n        setFormState({\n            ...formState,\n            blueEssence: blueEssence,\n            value: value\n        });\n    };\n    const handleGoBack = ()=>{\n        if (formState.value === 2) setFormState({\n            ...formState,\n            value: formState.value - 1\n        });\n    };\n    console.log(formState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1c1f2c] rounded-xl overflow-hidden h-fit\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"bg-[#141721] text-white text-opacity-30 text-xs text-center py-1\",\n                children: \"Hızlı Satın Al\"\n            }, void 0, false, {\n                fileName: \"/Users/hsynerkl/Desktop/lolpazar/components/common/QuikBuy/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            formState.value === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Partials_FirstForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleRegion: handleRegion\n            }, void 0, false, {\n                fileName: \"/Users/hsynerkl/Desktop/lolpazar/components/common/QuikBuy/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 33\n            }, undefined),\n            formState.value === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Partials_SecondaryForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleGoBack: handleGoBack,\n                handleBlueEssence: handleBlueEssence\n            }, void 0, false, {\n                fileName: \"/Users/hsynerkl/Desktop/lolpazar/components/common/QuikBuy/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined),\n            formState.value === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Partials_ThirdForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                handleGoBack: handleGoBack,\n                formState: formState\n            }, void 0, false, {\n                fileName: \"/Users/hsynerkl/Desktop/lolpazar/components/common/QuikBuy/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hsynerkl/Desktop/lolpazar/components/common/QuikBuy/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(QuickBuy, \"mzRrmsBwBBEO1Z6NEE+snKnCJx8=\");\n_c = QuickBuy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuickBuy);\nvar _c;\n$RefreshReg$(_c, \"QuickBuy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9RdWlrQnV5L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ1k7QUFDUTtBQUNSO0FBRTdDLE1BQU1JLFdBQVcsSUFBTTs7SUFDckIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDO1FBQ3pDTyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsYUFBYTtJQUNmO0lBRUEsTUFBTUMsZUFBZSxDQUFDRixRQUFnQkQsUUFBa0I7UUFDdERELGFBQWE7WUFBRSxHQUFHRCxTQUFTO1lBQUVHLFFBQVFBO1lBQVFELE9BQU9BO1FBQU07SUFDNUQ7SUFFQSxNQUFNSSxvQkFBb0IsQ0FBQ0YsYUFBcUJGLFFBQWtCO1FBQ2hFRCxhQUFhO1lBQUUsR0FBR0QsU0FBUztZQUFFSSxhQUFhQTtZQUFhRixPQUFPQTtRQUFNO0lBQ3RFO0lBRUEsTUFBTUssZUFBZSxJQUFNO1FBQ3pCLElBQUlQLFVBQVVFLEtBQUssS0FBSyxHQUN0QkQsYUFBYTtZQUFFLEdBQUdELFNBQVM7WUFBRUUsT0FBT0YsVUFBVUUsS0FBSyxHQUFHO1FBQUU7SUFDNUQ7SUFFQU0sUUFBUUMsR0FBRyxDQUFDVDtJQUVaLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUVELFdBQVU7MEJBQW1FOzs7Ozs7WUFHL0VYLFVBQVVFLEtBQUssS0FBSyxtQkFBSyw4REFBQ04sMkRBQVNBO2dCQUFDUyxjQUFjQTs7Ozs7O1lBRWxETCxVQUFVRSxLQUFLLEtBQUssbUJBQ25CLDhEQUFDTCwrREFBYUE7Z0JBQ1pVLGNBQWNBO2dCQUNkRCxtQkFBbUJBOzs7Ozs7WUFJdEJOLFVBQVVFLEtBQUssS0FBSyxtQkFDbkIsOERBQUNKLDJEQUFTQTtnQkFBQ1MsY0FBY0E7Z0JBQWNQLFdBQVdBOzs7Ozs7Ozs7Ozs7QUFJMUQ7R0F6Q01EO0tBQUFBO0FBMkNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbW9uL1F1aWtCdXkvaW5kZXgudHN4PzRiYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaXJzdEZvcm0gZnJvbSBcIi4vUGFydGlhbHMvRmlyc3RGb3JtXCI7XG5pbXBvcnQgU2Vjb25kYXJ5Rm9ybSBmcm9tIFwiLi9QYXJ0aWFscy9TZWNvbmRhcnlGb3JtXCI7XG5pbXBvcnQgVGhpcmRGb3JtIGZyb20gXCIuL1BhcnRpYWxzL1RoaXJkRm9ybVwiO1xuXG5jb25zdCBRdWlja0J1eSA9ICgpID0+IHtcbiAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICB2YWx1ZTogMCxcbiAgICByZWdpb246IFwiXCIsXG4gICAgYmx1ZUVzc2VuY2U6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVJlZ2lvbiA9IChyZWdpb246IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xuICAgIHNldEZvcm1TdGF0ZSh7IC4uLmZvcm1TdGF0ZSwgcmVnaW9uOiByZWdpb24sIHZhbHVlOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCbHVlRXNzZW5jZSA9IChibHVlRXNzZW5jZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgc2V0Rm9ybVN0YXRlKHsgLi4uZm9ybVN0YXRlLCBibHVlRXNzZW5jZTogYmx1ZUVzc2VuY2UsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVHb0JhY2sgPSAoKSA9PiB7XG4gICAgaWYgKGZvcm1TdGF0ZS52YWx1ZSA9PT0gMilcbiAgICAgIHNldEZvcm1TdGF0ZSh7IC4uLmZvcm1TdGF0ZSwgdmFsdWU6IGZvcm1TdGF0ZS52YWx1ZSAtIDEgfSk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coZm9ybVN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMxYzFmMmNdIHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGgtZml0XCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJiZy1bIzE0MTcyMV0gdGV4dC13aGl0ZSB0ZXh0LW9wYWNpdHktMzAgdGV4dC14cyB0ZXh0LWNlbnRlciBweS0xXCI+XG4gICAgICAgIEjEsXpsxLEgU2F0xLFuIEFsXG4gICAgICA8L3A+XG4gICAgICB7Zm9ybVN0YXRlLnZhbHVlID09PSAwICYmIDxGaXJzdEZvcm0gaGFuZGxlUmVnaW9uPXtoYW5kbGVSZWdpb259IC8+fVxuXG4gICAgICB7Zm9ybVN0YXRlLnZhbHVlID09PSAxICYmIChcbiAgICAgICAgPFNlY29uZGFyeUZvcm1cbiAgICAgICAgICBoYW5kbGVHb0JhY2s9e2hhbmRsZUdvQmFja31cbiAgICAgICAgICBoYW5kbGVCbHVlRXNzZW5jZT17aGFuZGxlQmx1ZUVzc2VuY2V9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7Zm9ybVN0YXRlLnZhbHVlID09PSAyICYmIChcbiAgICAgICAgPFRoaXJkRm9ybSBoYW5kbGVHb0JhY2s9e2hhbmRsZUdvQmFja30gZm9ybVN0YXRlPXtmb3JtU3RhdGV9IC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVpY2tCdXk7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGaXJzdEZvcm0iLCJTZWNvbmRhcnlGb3JtIiwiVGhpcmRGb3JtIiwiUXVpY2tCdXkiLCJmb3JtU3RhdGUiLCJzZXRGb3JtU3RhdGUiLCJ2YWx1ZSIsInJlZ2lvbiIsImJsdWVFc3NlbmNlIiwiaGFuZGxlUmVnaW9uIiwiaGFuZGxlQmx1ZUVzc2VuY2UiLCJoYW5kbGVHb0JhY2siLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/QuikBuy/index.tsx\n"));

/***/ })

});