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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Partials_FirstForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Partials/FirstForm */ \"./components/common/QuikBuy/Partials/FirstForm.tsx\");\n/* harmony import */ var _Partials_SecondaryForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Partials/SecondaryForm */ \"./components/common/QuikBuy/Partials/SecondaryForm.tsx\");\n/* harmony import */ var _Partials_ThirdForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Partials/ThirdForm */ \"./components/common/QuikBuy/Partials/ThirdForm.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst QuickBuy = ()=>{\n    _s();\n    const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        value: 0,\n        region: \"\",\n        blueEssence: \"\",\n        price: \"\"\n    });\n    const handleRegion = (region, value)=>{\n        setFormState({\n            ...formState,\n            region: region,\n            value: value\n        });\n    };\n    const handleBlueEssence = (blueEssence, value, price)=>{\n        setFormState({\n            ...formState,\n            blueEssence: blueEssence,\n            value: value,\n            price: string\n        });\n    };\n    const handleGoBack = ()=>{\n        if (formState.value === 1) setFormState({\n            ...formState,\n            value: formState.value - 1,\n            region: \"\"\n        });\n        else if (formState.value === 2) setFormState({\n            ...formState,\n            value: formState.value - 1,\n            blueEssence: \"\",\n            price: \"\"\n        });\n    };\n    console.log(formState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1c1f2c] rounded-xl overflow-hidden h-fit\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"bg-[#141721] text-[#6f7d95] text-xs text-center py-1\",\n                children: \"Hızlı Satın Al\"\n            }, void 0, false, {\n                fileName: \"/Users/hsynerkl/Desktop/lolpazar/components/common/QuikBuy/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            formState.value === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Partials_FirstForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleRegion: handleRegion\n            }, void 0, false, {\n                fileName: \"/Users/hsynerkl/Desktop/lolpazar/components/common/QuikBuy/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 33\n            }, undefined),\n            formState.value === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Partials_SecondaryForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleGoBack: handleGoBack,\n                handleBlueEssence: handleBlueEssence\n            }, void 0, false, {\n                fileName: \"/Users/hsynerkl/Desktop/lolpazar/components/common/QuikBuy/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            formState.value === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Partials_ThirdForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                handleGoBack: handleGoBack,\n                formState: formState\n            }, void 0, false, {\n                fileName: \"/Users/hsynerkl/Desktop/lolpazar/components/common/QuikBuy/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hsynerkl/Desktop/lolpazar/components/common/QuikBuy/index.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(QuickBuy, \"w1/rfj0G6PkrxXBxlGxtDwMveGE=\");\n_c = QuickBuy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuickBuy);\nvar _c;\n$RefreshReg$(_c, \"QuickBuy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9RdWlrQnV5L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ1k7QUFDUTtBQUNSO0FBRTdDLE1BQU1JLFdBQVcsSUFBTTs7SUFDckIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDO1FBQ3pDTyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsYUFBYTtRQUNiQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxlQUFlLENBQUNILFFBQWdCRCxRQUFrQjtRQUN0REQsYUFBYTtZQUFFLEdBQUdELFNBQVM7WUFBRUcsUUFBUUE7WUFBUUQsT0FBT0E7UUFBTTtJQUM1RDtJQUVBLE1BQU1LLG9CQUFvQixDQUN4QkgsYUFDQUYsT0FDQUcsUUFDRztRQUNISixhQUFhO1lBQ1gsR0FBR0QsU0FBUztZQUNaSSxhQUFhQTtZQUNiRixPQUFPQTtZQUNQRyxPQUFPRztRQUNUO0lBQ0Y7SUFFQSxNQUFNQyxlQUFlLElBQU07UUFDekIsSUFBSVQsVUFBVUUsS0FBSyxLQUFLLEdBQ3RCRCxhQUFhO1lBQ1gsR0FBR0QsU0FBUztZQUNaRSxPQUFPRixVQUFVRSxLQUFLLEdBQUc7WUFDekJDLFFBQVE7UUFDVjthQUNHLElBQUlILFVBQVVFLEtBQUssS0FBSyxHQUMzQkQsYUFBYTtZQUNYLEdBQUdELFNBQVM7WUFDWkUsT0FBT0YsVUFBVUUsS0FBSyxHQUFHO1lBQ3pCRSxhQUFhO1lBQ2JDLE9BQU87UUFDVDtJQUNKO0lBRUFLLFFBQVFDLEdBQUcsQ0FBQ1g7SUFFWixxQkFDRSw4REFBQ1k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFFRCxXQUFVOzBCQUF1RDs7Ozs7O1lBR25FYixVQUFVRSxLQUFLLEtBQUssbUJBQUssOERBQUNOLDJEQUFTQTtnQkFBQ1UsY0FBY0E7Ozs7OztZQUVsRE4sVUFBVUUsS0FBSyxLQUFLLG1CQUNuQiw4REFBQ0wsK0RBQWFBO2dCQUNaWSxjQUFjQTtnQkFDZEYsbUJBQW1CQTs7Ozs7O1lBSXRCUCxVQUFVRSxLQUFLLEtBQUssbUJBQ25CLDhEQUFDSiwyREFBU0E7Z0JBQUNXLGNBQWNBO2dCQUFjVCxXQUFXQTs7Ozs7Ozs7Ozs7O0FBSTFEO0dBOURNRDtLQUFBQTtBQWdFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1vbi9RdWlrQnV5L2luZGV4LnRzeD80YmM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlyc3RGb3JtIGZyb20gXCIuL1BhcnRpYWxzL0ZpcnN0Rm9ybVwiO1xuaW1wb3J0IFNlY29uZGFyeUZvcm0gZnJvbSBcIi4vUGFydGlhbHMvU2Vjb25kYXJ5Rm9ybVwiO1xuaW1wb3J0IFRoaXJkRm9ybSBmcm9tIFwiLi9QYXJ0aWFscy9UaGlyZEZvcm1cIjtcblxuY29uc3QgUXVpY2tCdXkgPSAoKSA9PiB7XG4gIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgdmFsdWU6IDAsXG4gICAgcmVnaW9uOiBcIlwiLFxuICAgIGJsdWVFc3NlbmNlOiBcIlwiLFxuICAgIHByaWNlOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVSZWdpb24gPSAocmVnaW9uOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBzZXRGb3JtU3RhdGUoeyAuLi5mb3JtU3RhdGUsIHJlZ2lvbjogcmVnaW9uLCB2YWx1ZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmx1ZUVzc2VuY2UgPSAoXG4gICAgYmx1ZUVzc2VuY2U6IHN0cmluZyxcbiAgICB2YWx1ZTogbnVtYmVyLFxuICAgIHByaWNlOiBzdHJpbmdcbiAgKSA9PiB7XG4gICAgc2V0Rm9ybVN0YXRlKHtcbiAgICAgIC4uLmZvcm1TdGF0ZSxcbiAgICAgIGJsdWVFc3NlbmNlOiBibHVlRXNzZW5jZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHByaWNlOiBzdHJpbmcsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlR29CYWNrID0gKCkgPT4ge1xuICAgIGlmIChmb3JtU3RhdGUudmFsdWUgPT09IDEpXG4gICAgICBzZXRGb3JtU3RhdGUoe1xuICAgICAgICAuLi5mb3JtU3RhdGUsXG4gICAgICAgIHZhbHVlOiBmb3JtU3RhdGUudmFsdWUgLSAxLFxuICAgICAgICByZWdpb246IFwiXCIsXG4gICAgICB9KTtcbiAgICBlbHNlIGlmIChmb3JtU3RhdGUudmFsdWUgPT09IDIpXG4gICAgICBzZXRGb3JtU3RhdGUoe1xuICAgICAgICAuLi5mb3JtU3RhdGUsXG4gICAgICAgIHZhbHVlOiBmb3JtU3RhdGUudmFsdWUgLSAxLFxuICAgICAgICBibHVlRXNzZW5jZTogXCJcIixcbiAgICAgICAgcHJpY2U6IFwiXCIsXG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zb2xlLmxvZyhmb3JtU3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzFjMWYyY10gcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gaC1maXRcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImJnLVsjMTQxNzIxXSB0ZXh0LVsjNmY3ZDk1XSB0ZXh0LXhzIHRleHQtY2VudGVyIHB5LTFcIj5cbiAgICAgICAgSMSxemzEsSBTYXTEsW4gQWxcbiAgICAgIDwvcD5cbiAgICAgIHtmb3JtU3RhdGUudmFsdWUgPT09IDAgJiYgPEZpcnN0Rm9ybSBoYW5kbGVSZWdpb249e2hhbmRsZVJlZ2lvbn0gLz59XG5cbiAgICAgIHtmb3JtU3RhdGUudmFsdWUgPT09IDEgJiYgKFxuICAgICAgICA8U2Vjb25kYXJ5Rm9ybVxuICAgICAgICAgIGhhbmRsZUdvQmFjaz17aGFuZGxlR29CYWNrfVxuICAgICAgICAgIGhhbmRsZUJsdWVFc3NlbmNlPXtoYW5kbGVCbHVlRXNzZW5jZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHtmb3JtU3RhdGUudmFsdWUgPT09IDIgJiYgKFxuICAgICAgICA8VGhpcmRGb3JtIGhhbmRsZUdvQmFjaz17aGFuZGxlR29CYWNrfSBmb3JtU3RhdGU9e2Zvcm1TdGF0ZX0gLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWlja0J1eTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZpcnN0Rm9ybSIsIlNlY29uZGFyeUZvcm0iLCJUaGlyZEZvcm0iLCJRdWlja0J1eSIsImZvcm1TdGF0ZSIsInNldEZvcm1TdGF0ZSIsInZhbHVlIiwicmVnaW9uIiwiYmx1ZUVzc2VuY2UiLCJwcmljZSIsImhhbmRsZVJlZ2lvbiIsImhhbmRsZUJsdWVFc3NlbmNlIiwic3RyaW5nIiwiaGFuZGxlR29CYWNrIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/QuikBuy/index.tsx\n"));

/***/ })

});