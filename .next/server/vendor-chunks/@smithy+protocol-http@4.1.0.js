"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+protocol-http@4.1.0";
exports.ids = ["vendor-chunks/@smithy+protocol-http@4.1.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/Field.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/Field.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Field: () => (/* binding */ Field)\n/* harmony export */ });\n/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ \"(rsc)/./node_modules/.pnpm/@smithy+types@3.3.0/node_modules/@smithy/types/dist-es/index.js\");\n\nclass Field {\n    constructor({ name, kind = _smithy_types__WEBPACK_IMPORTED_MODULE_0__.FieldPosition.HEADER, values = [] }) {\n        this.name = name;\n        this.kind = kind;\n        this.values = values;\n    }\n    add(value) {\n        this.values.push(value);\n    }\n    set(values) {\n        this.values = values;\n    }\n    remove(value) {\n        this.values = this.values.filter((v) => v !== value);\n    }\n    toString() {\n        return this.values.map((v) => (v.includes(\",\") || v.includes(\" \") ? `\"${v}\"` : v)).join(\", \");\n    }\n    get() {\n        return this.values;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStwcm90b2NvbC1odHRwQDQuMS4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3RvY29sLWh0dHAvZGlzdC1lcy9GaWVsZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUN2QztBQUNQLGtCQUFrQixhQUFhLHdEQUFhLHNCQUFzQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RhLTAuMC4xLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrcHJvdG9jb2wtaHR0cEA0LjEuMC9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvRmllbGQuanM/OTJkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZFBvc2l0aW9uIH0gZnJvbSBcIkBzbWl0aHkvdHlwZXNcIjtcbmV4cG9ydCBjbGFzcyBGaWVsZCB7XG4gICAgY29uc3RydWN0b3IoeyBuYW1lLCBraW5kID0gRmllbGRQb3NpdGlvbi5IRUFERVIsIHZhbHVlcyA9IFtdIH0pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5raW5kID0ga2luZDtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgfVxuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgc2V0KHZhbHVlcykge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB9XG4gICAgcmVtb3ZlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMuZmlsdGVyKCh2KSA9PiB2ICE9PSB2YWx1ZSk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubWFwKCh2KSA9PiAodi5pbmNsdWRlcyhcIixcIikgfHwgdi5pbmNsdWRlcyhcIiBcIikgPyBgXCIke3Z9XCJgIDogdikpLmpvaW4oXCIsIFwiKTtcbiAgICB9XG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/Field.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/Fields.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/Fields.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Fields: () => (/* binding */ Fields)\n/* harmony export */ });\nclass Fields {\n    constructor({ fields = [], encoding = \"utf-8\" }) {\n        this.entries = {};\n        fields.forEach(this.setField.bind(this));\n        this.encoding = encoding;\n    }\n    setField(field) {\n        this.entries[field.name.toLowerCase()] = field;\n    }\n    getField(name) {\n        return this.entries[name.toLowerCase()];\n    }\n    removeField(name) {\n        delete this.entries[name.toLowerCase()];\n    }\n    getByType(kind) {\n        return Object.values(this.entries).filter((field) => field.kind === kind);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStwcm90b2NvbC1odHRwQDQuMS4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3RvY29sLWh0dHAvZGlzdC1lcy9GaWVsZHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1Asa0JBQWtCLGlDQUFpQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGEtMC4wLjEvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStwcm90b2NvbC1odHRwQDQuMS4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3RvY29sLWh0dHAvZGlzdC1lcy9GaWVsZHMuanM/Yzc4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRmllbGRzIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGZpZWxkcyA9IFtdLCBlbmNvZGluZyA9IFwidXRmLThcIiB9KSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IHt9O1xuICAgICAgICBmaWVsZHMuZm9yRWFjaCh0aGlzLnNldEZpZWxkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmVuY29kaW5nID0gZW5jb2Rpbmc7XG4gICAgfVxuICAgIHNldEZpZWxkKGZpZWxkKSB7XG4gICAgICAgIHRoaXMuZW50cmllc1tmaWVsZC5uYW1lLnRvTG93ZXJDYXNlKCldID0gZmllbGQ7XG4gICAgfVxuICAgIGdldEZpZWxkKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIH1cbiAgICByZW1vdmVGaWVsZChuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVudHJpZXNbbmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICB9XG4gICAgZ2V0QnlUeXBlKGtpbmQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5lbnRyaWVzKS5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZC5raW5kID09PSBraW5kKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/Fields.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* binding */ getHttpHandlerExtensionConfiguration),\n/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* binding */ resolveHttpHandlerRuntimeConfig)\n/* harmony export */ });\nconst getHttpHandlerExtensionConfiguration = (runtimeConfig) => {\n    let httpHandler = runtimeConfig.httpHandler;\n    return {\n        setHttpHandler(handler) {\n            httpHandler = handler;\n        },\n        httpHandler() {\n            return httpHandler;\n        },\n        updateHttpClientConfig(key, value) {\n            httpHandler.updateHttpClientConfig(key, value);\n        },\n        httpHandlerConfigs() {\n            return httpHandler.httpHandlerConfigs();\n        },\n    };\n};\nconst resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {\n    return {\n        httpHandler: httpHandlerExtensionConfiguration.httpHandler(),\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStwcm90b2NvbC1odHRwQDQuMS4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3RvY29sLWh0dHAvZGlzdC1lcy9leHRlbnNpb25zL2h0dHBFeHRlbnNpb25Db25maWd1cmF0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RhLTAuMC4xLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrcHJvdG9jb2wtaHR0cEA0LjEuMC9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvZXh0ZW5zaW9ucy9odHRwRXh0ZW5zaW9uQ29uZmlndXJhdGlvbi5qcz84MDFkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRIdHRwSGFuZGxlckV4dGVuc2lvbkNvbmZpZ3VyYXRpb24gPSAocnVudGltZUNvbmZpZykgPT4ge1xuICAgIGxldCBodHRwSGFuZGxlciA9IHJ1bnRpbWVDb25maWcuaHR0cEhhbmRsZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0SHR0cEhhbmRsZXIoaGFuZGxlcikge1xuICAgICAgICAgICAgaHR0cEhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB9LFxuICAgICAgICBodHRwSGFuZGxlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBodHRwSGFuZGxlcjtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlSHR0cENsaWVudENvbmZpZyhrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBodHRwSGFuZGxlci51cGRhdGVIdHRwQ2xpZW50Q29uZmlnKGtleSwgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBodHRwSGFuZGxlckNvbmZpZ3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gaHR0cEhhbmRsZXIuaHR0cEhhbmRsZXJDb25maWdzKCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnQgY29uc3QgcmVzb2x2ZUh0dHBIYW5kbGVyUnVudGltZUNvbmZpZyA9IChodHRwSGFuZGxlckV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBodHRwSGFuZGxlcjogaHR0cEhhbmRsZXJFeHRlbnNpb25Db25maWd1cmF0aW9uLmh0dHBIYW5kbGVyKCksXG4gICAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/extensions/index.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/extensions/index.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* reexport safe */ _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.getHttpHandlerExtensionConfiguration),\n/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* reexport safe */ _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveHttpHandlerRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpExtensionConfiguration */ \"(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStwcm90b2NvbC1odHRwQDQuMS4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3RvY29sLWh0dHAvZGlzdC1lcy9leHRlbnNpb25zL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhLTAuMC4xLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrcHJvdG9jb2wtaHR0cEA0LjEuMC9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvZXh0ZW5zaW9ucy9pbmRleC5qcz8xNWE2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2h0dHBFeHRlbnNpb25Db25maWd1cmF0aW9uXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/extensions/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/httpHandler.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/httpHandler.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStwcm90b2NvbC1odHRwQDQuMS4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3RvY29sLWh0dHAvZGlzdC1lcy9odHRwSGFuZGxlci5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYS0wLjAuMS8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3Byb3RvY29sLWh0dHBANC4xLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvcHJvdG9jb2wtaHR0cC9kaXN0LWVzL2h0dHBIYW5kbGVyLmpzP2NkNzciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/httpHandler.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/httpRequest.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/httpRequest.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpRequest: () => (/* binding */ HttpRequest)\n/* harmony export */ });\nclass HttpRequest {\n    constructor(options) {\n        this.method = options.method || \"GET\";\n        this.hostname = options.hostname || \"localhost\";\n        this.port = options.port;\n        this.query = options.query || {};\n        this.headers = options.headers || {};\n        this.body = options.body;\n        this.protocol = options.protocol\n            ? options.protocol.slice(-1) !== \":\"\n                ? `${options.protocol}:`\n                : options.protocol\n            : \"https:\";\n        this.path = options.path ? (options.path.charAt(0) !== \"/\" ? `/${options.path}` : options.path) : \"/\";\n        this.username = options.username;\n        this.password = options.password;\n        this.fragment = options.fragment;\n    }\n    static clone(request) {\n        const cloned = new HttpRequest({\n            ...request,\n            headers: { ...request.headers },\n        });\n        if (cloned.query) {\n            cloned.query = cloneQuery(cloned.query);\n        }\n        return cloned;\n    }\n    static isInstance(request) {\n        if (!request) {\n            return false;\n        }\n        const req = request;\n        return (\"method\" in req &&\n            \"protocol\" in req &&\n            \"hostname\" in req &&\n            \"path\" in req &&\n            typeof req[\"query\"] === \"object\" &&\n            typeof req[\"headers\"] === \"object\");\n    }\n    clone() {\n        return HttpRequest.clone(this);\n    }\n}\nfunction cloneQuery(query) {\n    return Object.keys(query).reduce((carry, paramName) => {\n        const param = query[paramName];\n        return {\n            ...carry,\n            [paramName]: Array.isArray(param) ? [...param] : param,\n        };\n    }, {});\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStwcm90b2NvbC1odHRwQDQuMS4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3RvY29sLWh0dHAvZGlzdC1lcy9odHRwUmVxdWVzdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQSx5RUFBeUUsYUFBYTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0MsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYS0wLjAuMS8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3Byb3RvY29sLWh0dHBANC4xLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvcHJvdG9jb2wtaHR0cC9kaXN0LWVzL2h0dHBSZXF1ZXN0LmpzPzRiZjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEh0dHBSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgXCJHRVRcIjtcbiAgICAgICAgdGhpcy5ob3N0bmFtZSA9IG9wdGlvbnMuaG9zdG5hbWUgfHwgXCJsb2NhbGhvc3RcIjtcbiAgICAgICAgdGhpcy5wb3J0ID0gb3B0aW9ucy5wb3J0O1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gb3B0aW9ucy5xdWVyeSB8fCB7fTtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgICAgICB0aGlzLmJvZHkgPSBvcHRpb25zLmJvZHk7XG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBvcHRpb25zLnByb3RvY29sXG4gICAgICAgICAgICA/IG9wdGlvbnMucHJvdG9jb2wuc2xpY2UoLTEpICE9PSBcIjpcIlxuICAgICAgICAgICAgICAgID8gYCR7b3B0aW9ucy5wcm90b2NvbH06YFxuICAgICAgICAgICAgICAgIDogb3B0aW9ucy5wcm90b2NvbFxuICAgICAgICAgICAgOiBcImh0dHBzOlwiO1xuICAgICAgICB0aGlzLnBhdGggPSBvcHRpb25zLnBhdGggPyAob3B0aW9ucy5wYXRoLmNoYXJBdCgwKSAhPT0gXCIvXCIgPyBgLyR7b3B0aW9ucy5wYXRofWAgOiBvcHRpb25zLnBhdGgpIDogXCIvXCI7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBvcHRpb25zLnVzZXJuYW1lO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gb3B0aW9ucy5wYXNzd29yZDtcbiAgICAgICAgdGhpcy5mcmFnbWVudCA9IG9wdGlvbnMuZnJhZ21lbnQ7XG4gICAgfVxuICAgIHN0YXRpYyBjbG9uZShyZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IGNsb25lZCA9IG5ldyBIdHRwUmVxdWVzdCh7XG4gICAgICAgICAgICAuLi5yZXF1ZXN0LFxuICAgICAgICAgICAgaGVhZGVyczogeyAuLi5yZXF1ZXN0LmhlYWRlcnMgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjbG9uZWQucXVlcnkpIHtcbiAgICAgICAgICAgIGNsb25lZC5xdWVyeSA9IGNsb25lUXVlcnkoY2xvbmVkLnF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xvbmVkO1xuICAgIH1cbiAgICBzdGF0aWMgaXNJbnN0YW5jZShyZXF1ZXN0KSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcSA9IHJlcXVlc3Q7XG4gICAgICAgIHJldHVybiAoXCJtZXRob2RcIiBpbiByZXEgJiZcbiAgICAgICAgICAgIFwicHJvdG9jb2xcIiBpbiByZXEgJiZcbiAgICAgICAgICAgIFwiaG9zdG5hbWVcIiBpbiByZXEgJiZcbiAgICAgICAgICAgIFwicGF0aFwiIGluIHJlcSAmJlxuICAgICAgICAgICAgdHlwZW9mIHJlcVtcInF1ZXJ5XCJdID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICB0eXBlb2YgcmVxW1wiaGVhZGVyc1wiXSA9PT0gXCJvYmplY3RcIik7XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gSHR0cFJlcXVlc3QuY2xvbmUodGhpcyk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2xvbmVRdWVyeShxdWVyeSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhxdWVyeSkucmVkdWNlKChjYXJyeSwgcGFyYW1OYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtID0gcXVlcnlbcGFyYW1OYW1lXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNhcnJ5LFxuICAgICAgICAgICAgW3BhcmFtTmFtZV06IEFycmF5LmlzQXJyYXkocGFyYW0pID8gWy4uLnBhcmFtXSA6IHBhcmFtLFxuICAgICAgICB9O1xuICAgIH0sIHt9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/httpRequest.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/httpResponse.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/httpResponse.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpResponse: () => (/* binding */ HttpResponse)\n/* harmony export */ });\nclass HttpResponse {\n    constructor(options) {\n        this.statusCode = options.statusCode;\n        this.reason = options.reason;\n        this.headers = options.headers || {};\n        this.body = options.body;\n    }\n    static isInstance(response) {\n        if (!response)\n            return false;\n        const resp = response;\n        return typeof resp.statusCode === \"number\" && typeof resp.headers === \"object\";\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStwcm90b2NvbC1odHRwQDQuMS4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3RvY29sLWh0dHAvZGlzdC1lcy9odHRwUmVzcG9uc2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYS0wLjAuMS8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3Byb3RvY29sLWh0dHBANC4xLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvcHJvdG9jb2wtaHR0cC9kaXN0LWVzL2h0dHBSZXNwb25zZS5qcz83ZmY1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIdHRwUmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNDb2RlID0gb3B0aW9ucy5zdGF0dXNDb2RlO1xuICAgICAgICB0aGlzLnJlYXNvbiA9IG9wdGlvbnMucmVhc29uO1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICAgIHRoaXMuYm9keSA9IG9wdGlvbnMuYm9keTtcbiAgICB9XG4gICAgc3RhdGljIGlzSW5zdGFuY2UocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgcmVzcCA9IHJlc3BvbnNlO1xuICAgICAgICByZXR1cm4gdHlwZW9mIHJlc3Auc3RhdHVzQ29kZSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgcmVzcC5oZWFkZXJzID09PSBcIm9iamVjdFwiO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/httpResponse.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/index.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Field: () => (/* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_1__.Field),\n/* harmony export */   Fields: () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_2__.Fields),\n/* harmony export */   HttpRequest: () => (/* reexport safe */ _httpRequest__WEBPACK_IMPORTED_MODULE_4__.HttpRequest),\n/* harmony export */   HttpResponse: () => (/* reexport safe */ _httpResponse__WEBPACK_IMPORTED_MODULE_5__.HttpResponse),\n/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.getHttpHandlerExtensionConfiguration),\n/* harmony export */   isValidHostname: () => (/* reexport safe */ _isValidHostname__WEBPACK_IMPORTED_MODULE_6__.isValidHostname),\n/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.resolveHttpHandlerRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extensions */ \"(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/extensions/index.js\");\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ \"(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/Field.js\");\n/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fields */ \"(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/Fields.js\");\n/* harmony import */ var _httpHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./httpHandler */ \"(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/httpHandler.js\");\n/* harmony import */ var _httpRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./httpRequest */ \"(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/httpRequest.js\");\n/* harmony import */ var _httpResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./httpResponse */ \"(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/httpResponse.js\");\n/* harmony import */ var _isValidHostname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isValidHostname */ \"(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/isValidHostname.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ \"(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/types.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStwcm90b2NvbC1odHRwQDQuMS4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3RvY29sLWh0dHAvZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDTDtBQUNDO0FBQ0s7QUFDQTtBQUNDO0FBQ0c7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL2RhLTAuMC4xLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrcHJvdG9jb2wtaHR0cEA0LjEuMC9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvaW5kZXguanM/YmY1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9leHRlbnNpb25zXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vRmllbGRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9odHRwSGFuZGxlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaHR0cFJlcXVlc3RcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2h0dHBSZXNwb25zZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaXNWYWxpZEhvc3RuYW1lXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90eXBlc1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/isValidHostname.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/isValidHostname.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isValidHostname: () => (/* binding */ isValidHostname)\n/* harmony export */ });\nfunction isValidHostname(hostname) {\n    const hostPattern = /^[a-z0-9][a-z0-9\\.\\-]*[a-z0-9]$/;\n    return hostPattern.test(hostname);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStwcm90b2NvbC1odHRwQDQuMS4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3RvY29sLWh0dHAvZGlzdC1lcy9pc1ZhbGlkSG9zdG5hbWUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGEtMC4wLjEvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStwcm90b2NvbC1odHRwQDQuMS4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3RvY29sLWh0dHAvZGlzdC1lcy9pc1ZhbGlkSG9zdG5hbWUuanM/OWQyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNWYWxpZEhvc3RuYW1lKGhvc3RuYW1lKSB7XG4gICAgY29uc3QgaG9zdFBhdHRlcm4gPSAvXlthLXowLTldW2EtejAtOVxcLlxcLV0qW2EtejAtOV0kLztcbiAgICByZXR1cm4gaG9zdFBhdHRlcm4udGVzdChob3N0bmFtZSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/isValidHostname.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/types.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/types.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStwcm90b2NvbC1odHRwQDQuMS4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3RvY29sLWh0dHAvZGlzdC1lcy90eXBlcy5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYS0wLjAuMS8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3Byb3RvY29sLWh0dHBANC4xLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvcHJvdG9jb2wtaHR0cC9kaXN0LWVzL3R5cGVzLmpzPzllYmUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/types.js\n");

/***/ })

};
;