"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@aws-sdk+middleware-recursion-detection@3.620.0";
exports.ids = ["vendor-chunks/@aws-sdk+middleware-recursion-detection@3.620.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@aws-sdk+middleware-recursion-detection@3.620.0/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@aws-sdk+middleware-recursion-detection@3.620.0/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addRecursionDetectionMiddlewareOptions: () => (/* binding */ addRecursionDetectionMiddlewareOptions),\n/* harmony export */   getRecursionDetectionPlugin: () => (/* binding */ getRecursionDetectionPlugin),\n/* harmony export */   recursionDetectionMiddleware: () => (/* binding */ recursionDetectionMiddleware)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/index.js\");\n\nconst TRACE_ID_HEADER_NAME = \"X-Amzn-Trace-Id\";\nconst ENV_LAMBDA_FUNCTION_NAME = \"AWS_LAMBDA_FUNCTION_NAME\";\nconst ENV_TRACE_ID = \"_X_AMZN_TRACE_ID\";\nconst recursionDetectionMiddleware = (options) => (next) => async (args) => {\n    const { request } = args;\n    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request) ||\n        options.runtime !== \"node\" ||\n        request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {\n        return next(args);\n    }\n    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];\n    const traceId = process.env[ENV_TRACE_ID];\n    const nonEmptyString = (str) => typeof str === \"string\" && str.length > 0;\n    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {\n        request.headers[TRACE_ID_HEADER_NAME] = traceId;\n    }\n    return next({\n        ...args,\n        request,\n    });\n};\nconst addRecursionDetectionMiddlewareOptions = {\n    step: \"build\",\n    tags: [\"RECURSION_DETECTION\"],\n    name: \"recursionDetectionMiddleware\",\n    override: true,\n    priority: \"low\",\n};\nconst getRecursionDetectionPlugin = (options) => ({\n    applyToStack: (clientStack) => {\n        clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);\n    },\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrbWlkZGxld2FyZS1yZWN1cnNpb24tZGV0ZWN0aW9uQDMuNjIwLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL21pZGRsZXdhcmUtcmVjdXJzaW9uLWRldGVjdGlvbi9kaXN0LWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ087QUFDUCxZQUFZLFVBQVU7QUFDdEIsU0FBUyw4REFBVztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYS0wLjAuMS8uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkayttaWRkbGV3YXJlLXJlY3Vyc2lvbi1kZXRlY3Rpb25AMy42MjAuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvbWlkZGxld2FyZS1yZWN1cnNpb24tZGV0ZWN0aW9uL2Rpc3QtZXMvaW5kZXguanM/NjIzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAc21pdGh5L3Byb3RvY29sLWh0dHBcIjtcbmNvbnN0IFRSQUNFX0lEX0hFQURFUl9OQU1FID0gXCJYLUFtem4tVHJhY2UtSWRcIjtcbmNvbnN0IEVOVl9MQU1CREFfRlVOQ1RJT05fTkFNRSA9IFwiQVdTX0xBTUJEQV9GVU5DVElPTl9OQU1FXCI7XG5jb25zdCBFTlZfVFJBQ0VfSUQgPSBcIl9YX0FNWk5fVFJBQ0VfSURcIjtcbmV4cG9ydCBjb25zdCByZWN1cnNpb25EZXRlY3Rpb25NaWRkbGV3YXJlID0gKG9wdGlvbnMpID0+IChuZXh0KSA9PiBhc3luYyAoYXJncykgPT4ge1xuICAgIGNvbnN0IHsgcmVxdWVzdCB9ID0gYXJncztcbiAgICBpZiAoIUh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UocmVxdWVzdCkgfHxcbiAgICAgICAgb3B0aW9ucy5ydW50aW1lICE9PSBcIm5vZGVcIiB8fFxuICAgICAgICByZXF1ZXN0LmhlYWRlcnMuaGFzT3duUHJvcGVydHkoVFJBQ0VfSURfSEVBREVSX05BTUUpKSB7XG4gICAgICAgIHJldHVybiBuZXh0KGFyZ3MpO1xuICAgIH1cbiAgICBjb25zdCBmdW5jdGlvbk5hbWUgPSBwcm9jZXNzLmVudltFTlZfTEFNQkRBX0ZVTkNUSU9OX05BTUVdO1xuICAgIGNvbnN0IHRyYWNlSWQgPSBwcm9jZXNzLmVudltFTlZfVFJBQ0VfSURdO1xuICAgIGNvbnN0IG5vbkVtcHR5U3RyaW5nID0gKHN0cikgPT4gdHlwZW9mIHN0ciA9PT0gXCJzdHJpbmdcIiAmJiBzdHIubGVuZ3RoID4gMDtcbiAgICBpZiAobm9uRW1wdHlTdHJpbmcoZnVuY3Rpb25OYW1lKSAmJiBub25FbXB0eVN0cmluZyh0cmFjZUlkKSkge1xuICAgICAgICByZXF1ZXN0LmhlYWRlcnNbVFJBQ0VfSURfSEVBREVSX05BTUVdID0gdHJhY2VJZDtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQoe1xuICAgICAgICAuLi5hcmdzLFxuICAgICAgICByZXF1ZXN0LFxuICAgIH0pO1xufTtcbmV4cG9ydCBjb25zdCBhZGRSZWN1cnNpb25EZXRlY3Rpb25NaWRkbGV3YXJlT3B0aW9ucyA9IHtcbiAgICBzdGVwOiBcImJ1aWxkXCIsXG4gICAgdGFnczogW1wiUkVDVVJTSU9OX0RFVEVDVElPTlwiXSxcbiAgICBuYW1lOiBcInJlY3Vyc2lvbkRldGVjdGlvbk1pZGRsZXdhcmVcIixcbiAgICBvdmVycmlkZTogdHJ1ZSxcbiAgICBwcmlvcml0eTogXCJsb3dcIixcbn07XG5leHBvcnQgY29uc3QgZ2V0UmVjdXJzaW9uRGV0ZWN0aW9uUGx1Z2luID0gKG9wdGlvbnMpID0+ICh7XG4gICAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICAgICAgY2xpZW50U3RhY2suYWRkKHJlY3Vyc2lvbkRldGVjdGlvbk1pZGRsZXdhcmUob3B0aW9ucyksIGFkZFJlY3Vyc2lvbkRldGVjdGlvbk1pZGRsZXdhcmVPcHRpb25zKTtcbiAgICB9LFxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@aws-sdk+middleware-recursion-detection@3.620.0/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js\n");

/***/ })

};
;