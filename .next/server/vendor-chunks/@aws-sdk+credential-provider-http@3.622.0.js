"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@aws-sdk+credential-provider-http@3.622.0";
exports.ids = ["vendor-chunks/@aws-sdk+credential-provider-http@3.622.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkUrl: () => (/* binding */ checkUrl)\n/* harmony export */ });\n/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ \"(rsc)/./node_modules/.pnpm/@smithy+property-provider@3.1.3/node_modules/@smithy/property-provider/dist-es/index.js\");\n\nconst LOOPBACK_CIDR_IPv4 = \"127.0.0.0/8\";\nconst LOOPBACK_CIDR_IPv6 = \"::1/128\";\nconst ECS_CONTAINER_HOST = \"169.254.170.2\";\nconst EKS_CONTAINER_HOST_IPv4 = \"169.254.170.23\";\nconst EKS_CONTAINER_HOST_IPv6 = \"[fd00:ec2::23]\";\nconst checkUrl = (url, logger) => {\n    if (url.protocol === \"https:\") {\n        return;\n    }\n    if (url.hostname === ECS_CONTAINER_HOST ||\n        url.hostname === EKS_CONTAINER_HOST_IPv4 ||\n        url.hostname === EKS_CONTAINER_HOST_IPv6) {\n        return;\n    }\n    if (url.hostname.includes(\"[\")) {\n        if (url.hostname === \"[::1]\" || url.hostname === \"[0000:0000:0000:0000:0000:0000:0000:0001]\") {\n            return;\n        }\n    }\n    else {\n        if (url.hostname === \"localhost\") {\n            return;\n        }\n        const ipComponents = url.hostname.split(\".\");\n        const inRange = (component) => {\n            const num = parseInt(component, 10);\n            return 0 <= num && num <= 255;\n        };\n        if (ipComponents[0] === \"127\" &&\n            inRange(ipComponents[1]) &&\n            inRange(ipComponents[2]) &&\n            inRange(ipComponents[3]) &&\n            ipComponents.length === 4) {\n            return;\n        }\n    }\n    throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:\n  - loopback CIDR 127.0.0.0/8 or [::1/128]\n  - ECS container host 169.254.170.2\n  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, { logger });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlci1odHRwQDMuNjIyLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cC9kaXN0LWVzL2Zyb21IdHRwL2NoZWNrVXJsLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsK0VBQXdCO0FBQ3RDO0FBQ0E7QUFDQSw0REFBNEQsUUFBUTtBQUNwRSIsInNvdXJjZXMiOlsid2VicGFjazovL2RhLTAuMC4xLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cEAzLjYyMi4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWh0dHAvZGlzdC1lcy9mcm9tSHR0cC9jaGVja1VybC5qcz9jMjI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENyZWRlbnRpYWxzUHJvdmlkZXJFcnJvciB9IGZyb20gXCJAc21pdGh5L3Byb3BlcnR5LXByb3ZpZGVyXCI7XG5jb25zdCBMT09QQkFDS19DSURSX0lQdjQgPSBcIjEyNy4wLjAuMC84XCI7XG5jb25zdCBMT09QQkFDS19DSURSX0lQdjYgPSBcIjo6MS8xMjhcIjtcbmNvbnN0IEVDU19DT05UQUlORVJfSE9TVCA9IFwiMTY5LjI1NC4xNzAuMlwiO1xuY29uc3QgRUtTX0NPTlRBSU5FUl9IT1NUX0lQdjQgPSBcIjE2OS4yNTQuMTcwLjIzXCI7XG5jb25zdCBFS1NfQ09OVEFJTkVSX0hPU1RfSVB2NiA9IFwiW2ZkMDA6ZWMyOjoyM11cIjtcbmV4cG9ydCBjb25zdCBjaGVja1VybCA9ICh1cmwsIGxvZ2dlcikgPT4ge1xuICAgIGlmICh1cmwucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodXJsLmhvc3RuYW1lID09PSBFQ1NfQ09OVEFJTkVSX0hPU1QgfHxcbiAgICAgICAgdXJsLmhvc3RuYW1lID09PSBFS1NfQ09OVEFJTkVSX0hPU1RfSVB2NCB8fFxuICAgICAgICB1cmwuaG9zdG5hbWUgPT09IEVLU19DT05UQUlORVJfSE9TVF9JUHY2KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHVybC5ob3N0bmFtZS5pbmNsdWRlcyhcIltcIikpIHtcbiAgICAgICAgaWYgKHVybC5ob3N0bmFtZSA9PT0gXCJbOjoxXVwiIHx8IHVybC5ob3N0bmFtZSA9PT0gXCJbMDAwMDowMDAwOjAwMDA6MDAwMDowMDAwOjAwMDA6MDAwMDowMDAxXVwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICh1cmwuaG9zdG5hbWUgPT09IFwibG9jYWxob3N0XCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpcENvbXBvbmVudHMgPSB1cmwuaG9zdG5hbWUuc3BsaXQoXCIuXCIpO1xuICAgICAgICBjb25zdCBpblJhbmdlID0gKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQoY29tcG9uZW50LCAxMCk7XG4gICAgICAgICAgICByZXR1cm4gMCA8PSBudW0gJiYgbnVtIDw9IDI1NTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlwQ29tcG9uZW50c1swXSA9PT0gXCIxMjdcIiAmJlxuICAgICAgICAgICAgaW5SYW5nZShpcENvbXBvbmVudHNbMV0pICYmXG4gICAgICAgICAgICBpblJhbmdlKGlwQ29tcG9uZW50c1syXSkgJiZcbiAgICAgICAgICAgIGluUmFuZ2UoaXBDb21wb25lbnRzWzNdKSAmJlxuICAgICAgICAgICAgaXBDb21wb25lbnRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBDcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoYFVSTCBub3QgYWNjZXB0ZWQuIEl0IG11c3QgZWl0aGVyIGJlIEhUVFBTIG9yIG1hdGNoIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxuICAtIGxvb3BiYWNrIENJRFIgMTI3LjAuMC4wLzggb3IgWzo6MS8xMjhdXG4gIC0gRUNTIGNvbnRhaW5lciBob3N0IDE2OS4yNTQuMTcwLjJcbiAgLSBFS1MgY29udGFpbmVyIGhvc3QgMTY5LjI1NC4xNzAuMjMgb3IgW2ZkMDA6ZWMyOjoyM11gLCB7IGxvZ2dlciB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromHttp: () => (/* binding */ fromHttp)\n/* harmony export */ });\n/* harmony import */ var _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/node-http-handler */ \"(rsc)/./node_modules/.pnpm/@smithy+node-http-handler@3.1.4/node_modules/@smithy/node-http-handler/dist-es/index.js\");\n/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/property-provider */ \"(rsc)/./node_modules/.pnpm/@smithy+property-provider@3.1.3/node_modules/@smithy/property-provider/dist-es/index.js\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _checkUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkUrl */ \"(rsc)/./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js\");\n/* harmony import */ var _requestHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requestHelpers */ \"(rsc)/./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js\");\n/* harmony import */ var _retry_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retry-wrapper */ \"(rsc)/./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js\");\n\n\n\n\n\n\nconst AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = \"AWS_CONTAINER_CREDENTIALS_RELATIVE_URI\";\nconst DEFAULT_LINK_LOCAL_HOST = \"http://169.254.170.2\";\nconst AWS_CONTAINER_CREDENTIALS_FULL_URI = \"AWS_CONTAINER_CREDENTIALS_FULL_URI\";\nconst AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = \"AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE\";\nconst AWS_CONTAINER_AUTHORIZATION_TOKEN = \"AWS_CONTAINER_AUTHORIZATION_TOKEN\";\nconst fromHttp = (options = {}) => {\n    options.logger?.debug(\"@aws-sdk/credential-provider-http - fromHttp\");\n    let host;\n    const relative = options.awsContainerCredentialsRelativeUri ?? process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];\n    const full = options.awsContainerCredentialsFullUri ?? process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];\n    const token = options.awsContainerAuthorizationToken ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];\n    const tokenFile = options.awsContainerAuthorizationTokenFile ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];\n    const warn = options.logger?.constructor?.name === \"NoOpLogger\" || !options.logger ? console.warn : options.logger.warn;\n    if (relative && full) {\n        warn(\"@aws-sdk/credential-provider-http: \" +\n            \"you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.\");\n        warn(\"awsContainerCredentialsFullUri will take precedence.\");\n    }\n    if (token && tokenFile) {\n        warn(\"@aws-sdk/credential-provider-http: \" +\n            \"you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.\");\n        warn(\"awsContainerAuthorizationToken will take precedence.\");\n    }\n    if (full) {\n        host = full;\n    }\n    else if (relative) {\n        host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;\n    }\n    else {\n        throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_1__.CredentialsProviderError(`No HTTP credential provider host provided.\nSet AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, { logger: options.logger });\n    }\n    const url = new URL(host);\n    (0,_checkUrl__WEBPACK_IMPORTED_MODULE_3__.checkUrl)(url, options.logger);\n    const requestHandler = new _smithy_node_http_handler__WEBPACK_IMPORTED_MODULE_0__.NodeHttpHandler({\n        requestTimeout: options.timeout ?? 1000,\n        connectionTimeout: options.timeout ?? 1000,\n    });\n    return (0,_retry_wrapper__WEBPACK_IMPORTED_MODULE_5__.retryWrapper)(async () => {\n        const request = (0,_requestHelpers__WEBPACK_IMPORTED_MODULE_4__.createGetRequest)(url);\n        if (token) {\n            request.headers.Authorization = token;\n        }\n        else if (tokenFile) {\n            request.headers.Authorization = (await fs_promises__WEBPACK_IMPORTED_MODULE_2___default().readFile(tokenFile)).toString();\n        }\n        try {\n            const result = await requestHandler.handle(request);\n            return (0,_requestHelpers__WEBPACK_IMPORTED_MODULE_4__.getCredentials)(result.response);\n        }\n        catch (e) {\n            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_1__.CredentialsProviderError(String(e), { logger: options.logger });\n        }\n    }, options.maxRetries ?? 3, options.timeout ?? 1000);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlci1odHRwQDMuNjIyLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cC9kaXN0LWVzL2Zyb21IdHRwL2Zyb21IdHRwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTREO0FBQ1M7QUFDeEM7QUFDUztBQUM4QjtBQUNyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sOEJBQThCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0IsRUFBRSxTQUFTO0FBQ3JEO0FBQ0E7QUFDQSxrQkFBa0IsK0VBQXdCO0FBQzFDLHNGQUFzRix3QkFBd0I7QUFDOUc7QUFDQTtBQUNBLElBQUksbURBQVE7QUFDWiwrQkFBK0Isc0VBQWU7QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTCxXQUFXLDREQUFZO0FBQ3ZCLHdCQUF3QixpRUFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsMkRBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtEQUFjO0FBQ2pDO0FBQ0E7QUFDQSxzQkFBc0IsK0VBQXdCLGNBQWMsd0JBQXdCO0FBQ3BGO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGEtMC4wLjEvLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlci1odHRwQDMuNjIyLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cC9kaXN0LWVzL2Zyb21IdHRwL2Zyb21IdHRwLmpzPzkxYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZUh0dHBIYW5kbGVyIH0gZnJvbSBcIkBzbWl0aHkvbm9kZS1odHRwLWhhbmRsZXJcIjtcbmltcG9ydCB7IENyZWRlbnRpYWxzUHJvdmlkZXJFcnJvciB9IGZyb20gXCJAc21pdGh5L3Byb3BlcnR5LXByb3ZpZGVyXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzL3Byb21pc2VzXCI7XG5pbXBvcnQgeyBjaGVja1VybCB9IGZyb20gXCIuL2NoZWNrVXJsXCI7XG5pbXBvcnQgeyBjcmVhdGVHZXRSZXF1ZXN0LCBnZXRDcmVkZW50aWFscyB9IGZyb20gXCIuL3JlcXVlc3RIZWxwZXJzXCI7XG5pbXBvcnQgeyByZXRyeVdyYXBwZXIgfSBmcm9tIFwiLi9yZXRyeS13cmFwcGVyXCI7XG5jb25zdCBBV1NfQ09OVEFJTkVSX0NSRURFTlRJQUxTX1JFTEFUSVZFX1VSSSA9IFwiQVdTX0NPTlRBSU5FUl9DUkVERU5USUFMU19SRUxBVElWRV9VUklcIjtcbmNvbnN0IERFRkFVTFRfTElOS19MT0NBTF9IT1NUID0gXCJodHRwOi8vMTY5LjI1NC4xNzAuMlwiO1xuY29uc3QgQVdTX0NPTlRBSU5FUl9DUkVERU5USUFMU19GVUxMX1VSSSA9IFwiQVdTX0NPTlRBSU5FUl9DUkVERU5USUFMU19GVUxMX1VSSVwiO1xuY29uc3QgQVdTX0NPTlRBSU5FUl9BVVRIT1JJWkFUSU9OX1RPS0VOX0ZJTEUgPSBcIkFXU19DT05UQUlORVJfQVVUSE9SSVpBVElPTl9UT0tFTl9GSUxFXCI7XG5jb25zdCBBV1NfQ09OVEFJTkVSX0FVVEhPUklaQVRJT05fVE9LRU4gPSBcIkFXU19DT05UQUlORVJfQVVUSE9SSVpBVElPTl9UT0tFTlwiO1xuZXhwb3J0IGNvbnN0IGZyb21IdHRwID0gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIG9wdGlvbnMubG9nZ2VyPy5kZWJ1ZyhcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cCAtIGZyb21IdHRwXCIpO1xuICAgIGxldCBob3N0O1xuICAgIGNvbnN0IHJlbGF0aXZlID0gb3B0aW9ucy5hd3NDb250YWluZXJDcmVkZW50aWFsc1JlbGF0aXZlVXJpID8/IHByb2Nlc3MuZW52W0FXU19DT05UQUlORVJfQ1JFREVOVElBTFNfUkVMQVRJVkVfVVJJXTtcbiAgICBjb25zdCBmdWxsID0gb3B0aW9ucy5hd3NDb250YWluZXJDcmVkZW50aWFsc0Z1bGxVcmkgPz8gcHJvY2Vzcy5lbnZbQVdTX0NPTlRBSU5FUl9DUkVERU5USUFMU19GVUxMX1VSSV07XG4gICAgY29uc3QgdG9rZW4gPSBvcHRpb25zLmF3c0NvbnRhaW5lckF1dGhvcml6YXRpb25Ub2tlbiA/PyBwcm9jZXNzLmVudltBV1NfQ09OVEFJTkVSX0FVVEhPUklaQVRJT05fVE9LRU5dO1xuICAgIGNvbnN0IHRva2VuRmlsZSA9IG9wdGlvbnMuYXdzQ29udGFpbmVyQXV0aG9yaXphdGlvblRva2VuRmlsZSA/PyBwcm9jZXNzLmVudltBV1NfQ09OVEFJTkVSX0FVVEhPUklaQVRJT05fVE9LRU5fRklMRV07XG4gICAgY29uc3Qgd2FybiA9IG9wdGlvbnMubG9nZ2VyPy5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gXCJOb09wTG9nZ2VyXCIgfHwgIW9wdGlvbnMubG9nZ2VyID8gY29uc29sZS53YXJuIDogb3B0aW9ucy5sb2dnZXIud2FybjtcbiAgICBpZiAocmVsYXRpdmUgJiYgZnVsbCkge1xuICAgICAgICB3YXJuKFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1odHRwOiBcIiArXG4gICAgICAgICAgICBcInlvdSBoYXZlIHNldCBib3RoIGF3c0NvbnRhaW5lckNyZWRlbnRpYWxzUmVsYXRpdmVVcmkgYW5kIGF3c0NvbnRhaW5lckNyZWRlbnRpYWxzRnVsbFVyaS5cIik7XG4gICAgICAgIHdhcm4oXCJhd3NDb250YWluZXJDcmVkZW50aWFsc0Z1bGxVcmkgd2lsbCB0YWtlIHByZWNlZGVuY2UuXCIpO1xuICAgIH1cbiAgICBpZiAodG9rZW4gJiYgdG9rZW5GaWxlKSB7XG4gICAgICAgIHdhcm4oXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWh0dHA6IFwiICtcbiAgICAgICAgICAgIFwieW91IGhhdmUgc2V0IGJvdGggYXdzQ29udGFpbmVyQXV0aG9yaXphdGlvblRva2VuIGFuZCBhd3NDb250YWluZXJBdXRob3JpemF0aW9uVG9rZW5GaWxlLlwiKTtcbiAgICAgICAgd2FybihcImF3c0NvbnRhaW5lckF1dGhvcml6YXRpb25Ub2tlbiB3aWxsIHRha2UgcHJlY2VkZW5jZS5cIik7XG4gICAgfVxuICAgIGlmIChmdWxsKSB7XG4gICAgICAgIGhvc3QgPSBmdWxsO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWxhdGl2ZSkge1xuICAgICAgICBob3N0ID0gYCR7REVGQVVMVF9MSU5LX0xPQ0FMX0hPU1R9JHtyZWxhdGl2ZX1gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IENyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihgTm8gSFRUUCBjcmVkZW50aWFsIHByb3ZpZGVyIGhvc3QgcHJvdmlkZWQuXG5TZXQgQVdTX0NPTlRBSU5FUl9DUkVERU5USUFMU19GVUxMX1VSSSBvciBBV1NfQ09OVEFJTkVSX0NSRURFTlRJQUxTX1JFTEFUSVZFX1VSSS5gLCB7IGxvZ2dlcjogb3B0aW9ucy5sb2dnZXIgfSk7XG4gICAgfVxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoaG9zdCk7XG4gICAgY2hlY2tVcmwodXJsLCBvcHRpb25zLmxvZ2dlcik7XG4gICAgY29uc3QgcmVxdWVzdEhhbmRsZXIgPSBuZXcgTm9kZUh0dHBIYW5kbGVyKHtcbiAgICAgICAgcmVxdWVzdFRpbWVvdXQ6IG9wdGlvbnMudGltZW91dCA/PyAxMDAwLFxuICAgICAgICBjb25uZWN0aW9uVGltZW91dDogb3B0aW9ucy50aW1lb3V0ID8/IDEwMDAsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHJ5V3JhcHBlcihhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBjcmVhdGVHZXRSZXF1ZXN0KHVybCk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbkZpbGUpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVycy5BdXRob3JpemF0aW9uID0gKGF3YWl0IGZzLnJlYWRGaWxlKHRva2VuRmlsZSkpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3RIYW5kbGVyLmhhbmRsZShyZXF1ZXN0KTtcbiAgICAgICAgICAgIHJldHVybiBnZXRDcmVkZW50aWFscyhyZXN1bHQucmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ3JlZGVudGlhbHNQcm92aWRlckVycm9yKFN0cmluZyhlKSwgeyBsb2dnZXI6IG9wdGlvbnMubG9nZ2VyIH0pO1xuICAgICAgICB9XG4gICAgfSwgb3B0aW9ucy5tYXhSZXRyaWVzID8/IDMsIG9wdGlvbnMudGltZW91dCA/PyAxMDAwKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGetRequest: () => (/* binding */ createGetRequest),\n/* harmony export */   getCredentials: () => (/* binding */ getCredentials)\n/* harmony export */ });\n/* harmony import */ var _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/property-provider */ \"(rsc)/./node_modules/.pnpm/@smithy+property-provider@3.1.3/node_modules/@smithy/property-provider/dist-es/index.js\");\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/protocol-http */ \"(rsc)/./node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/index.js\");\n/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smithy/smithy-client */ \"(rsc)/./node_modules/.pnpm/@smithy+smithy-client@3.2.0/node_modules/@smithy/smithy-client/dist-es/index.js\");\n/* harmony import */ var _smithy_util_stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smithy/util-stream */ \"(rsc)/./node_modules/.pnpm/@smithy+util-stream@3.1.3/node_modules/@smithy/util-stream/dist-es/index.js\");\n\n\n\n\nfunction createGetRequest(url) {\n    return new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest({\n        protocol: url.protocol,\n        hostname: url.hostname,\n        port: Number(url.port),\n        path: url.pathname,\n        query: Array.from(url.searchParams.entries()).reduce((acc, [k, v]) => {\n            acc[k] = v;\n            return acc;\n        }, {}),\n        fragment: url.hash,\n    });\n}\nasync function getCredentials(response, logger) {\n    const stream = (0,_smithy_util_stream__WEBPACK_IMPORTED_MODULE_3__.sdkStreamMixin)(response.body);\n    const str = await stream.transformToString();\n    if (response.statusCode === 200) {\n        const parsed = JSON.parse(str);\n        if (typeof parsed.AccessKeyId !== \"string\" ||\n            typeof parsed.SecretAccessKey !== \"string\" ||\n            typeof parsed.Token !== \"string\" ||\n            typeof parsed.Expiration !== \"string\") {\n            throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(\"HTTP credential provider response not of the required format, an object matching: \" +\n                \"{ AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }\", { logger });\n        }\n        return {\n            accessKeyId: parsed.AccessKeyId,\n            secretAccessKey: parsed.SecretAccessKey,\n            sessionToken: parsed.Token,\n            expiration: (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_2__.parseRfc3339DateTime)(parsed.Expiration),\n        };\n    }\n    if (response.statusCode >= 400 && response.statusCode < 500) {\n        let parsedBody = {};\n        try {\n            parsedBody = JSON.parse(str);\n        }\n        catch (e) { }\n        throw Object.assign(new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger }), {\n            Code: parsedBody.Code,\n            Message: parsedBody.Message,\n        });\n    }\n    throw new _smithy_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlci1odHRwQDMuNjIyLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cC9kaXN0LWVzL2Zyb21IdHRwL3JlcXVlc3RIZWxwZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxRTtBQUNqQjtBQUNTO0FBQ1I7QUFDOUM7QUFDUCxlQUFlLDhEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQLG1CQUFtQixtRUFBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrRUFBd0I7QUFDOUMsbUJBQW1CLDBGQUEwRixLQUFLLFFBQVE7QUFDMUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyRUFBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywrRUFBd0Isa0NBQWtDLG9CQUFvQixLQUFLLFFBQVE7QUFDM0g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGNBQWMsK0VBQXdCLGtDQUFrQyxvQkFBb0IsS0FBSyxRQUFRO0FBQ3pHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGEtMC4wLjEvLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlci1odHRwQDMuNjIyLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cC9kaXN0LWVzL2Zyb21IdHRwL3JlcXVlc3RIZWxwZXJzLmpzPzlkM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JlZGVudGlhbHNQcm92aWRlckVycm9yIH0gZnJvbSBcIkBzbWl0aHkvcHJvcGVydHktcHJvdmlkZXJcIjtcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBzbWl0aHkvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHsgcGFyc2VSZmMzMzM5RGF0ZVRpbWUgfSBmcm9tIFwiQHNtaXRoeS9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBzZGtTdHJlYW1NaXhpbiB9IGZyb20gXCJAc21pdGh5L3V0aWwtc3RyZWFtXCI7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2V0UmVxdWVzdCh1cmwpIHtcbiAgICByZXR1cm4gbmV3IEh0dHBSZXF1ZXN0KHtcbiAgICAgICAgcHJvdG9jb2w6IHVybC5wcm90b2NvbCxcbiAgICAgICAgaG9zdG5hbWU6IHVybC5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogTnVtYmVyKHVybC5wb3J0KSxcbiAgICAgICAgcGF0aDogdXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeTogQXJyYXkuZnJvbSh1cmwuc2VhcmNoUGFyYW1zLmVudHJpZXMoKSkucmVkdWNlKChhY2MsIFtrLCB2XSkgPT4ge1xuICAgICAgICAgICAgYWNjW2tdID0gdjtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KSxcbiAgICAgICAgZnJhZ21lbnQ6IHVybC5oYXNoLFxuICAgIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENyZWRlbnRpYWxzKHJlc3BvbnNlLCBsb2dnZXIpIHtcbiAgICBjb25zdCBzdHJlYW0gPSBzZGtTdHJlYW1NaXhpbihyZXNwb25zZS5ib2R5KTtcbiAgICBjb25zdCBzdHIgPSBhd2FpdCBzdHJlYW0udHJhbnNmb3JtVG9TdHJpbmcoKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWQuQWNjZXNzS2V5SWQgIT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBwYXJzZWQuU2VjcmV0QWNjZXNzS2V5ICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2YgcGFyc2VkLlRva2VuICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2YgcGFyc2VkLkV4cGlyYXRpb24gIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBDcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoXCJIVFRQIGNyZWRlbnRpYWwgcHJvdmlkZXIgcmVzcG9uc2Ugbm90IG9mIHRoZSByZXF1aXJlZCBmb3JtYXQsIGFuIG9iamVjdCBtYXRjaGluZzogXCIgK1xuICAgICAgICAgICAgICAgIFwieyBBY2Nlc3NLZXlJZDogc3RyaW5nLCBTZWNyZXRBY2Nlc3NLZXk6IHN0cmluZywgVG9rZW46IHN0cmluZywgRXhwaXJhdGlvbjogc3RyaW5nKHJmYzMzMzkpIH1cIiwgeyBsb2dnZXIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBwYXJzZWQuQWNjZXNzS2V5SWQsXG4gICAgICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IHBhcnNlZC5TZWNyZXRBY2Nlc3NLZXksXG4gICAgICAgICAgICBzZXNzaW9uVG9rZW46IHBhcnNlZC5Ub2tlbixcbiAgICAgICAgICAgIGV4cGlyYXRpb246IHBhcnNlUmZjMzMzOURhdGVUaW1lKHBhcnNlZC5FeHBpcmF0aW9uKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPj0gNDAwICYmIHJlc3BvbnNlLnN0YXR1c0NvZGUgPCA1MDApIHtcbiAgICAgICAgbGV0IHBhcnNlZEJvZHkgPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhcnNlZEJvZHkgPSBKU09OLnBhcnNlKHN0cik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICB0aHJvdyBPYmplY3QuYXNzaWduKG5ldyBDcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IoYFNlcnZlciByZXNwb25kZWQgd2l0aCBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzQ29kZX1gLCB7IGxvZ2dlciB9KSwge1xuICAgICAgICAgICAgQ29kZTogcGFyc2VkQm9keS5Db2RlLFxuICAgICAgICAgICAgTWVzc2FnZTogcGFyc2VkQm9keS5NZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IENyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcihgU2VydmVyIHJlc3BvbmRlZCB3aXRoIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXNDb2RlfWAsIHsgbG9nZ2VyIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   retryWrapper: () => (/* binding */ retryWrapper)\n/* harmony export */ });\nconst retryWrapper = (toRetry, maxRetries, delayMs) => {\n    return async () => {\n        for (let i = 0; i < maxRetries; ++i) {\n            try {\n                return await toRetry();\n            }\n            catch (e) {\n                await new Promise((resolve) => setTimeout(resolve, delayMs));\n            }\n        }\n        return await toRetry();\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlci1odHRwQDMuNjIyLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cC9kaXN0LWVzL2Zyb21IdHRwL3JldHJ5LXdyYXBwZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGEtMC4wLjEvLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlci1odHRwQDMuNjIyLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cC9kaXN0LWVzL2Zyb21IdHRwL3JldHJ5LXdyYXBwZXIuanM/ZTJiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmV0cnlXcmFwcGVyID0gKHRvUmV0cnksIG1heFJldHJpZXMsIGRlbGF5TXMpID0+IHtcbiAgICByZXR1cm4gYXN5bmMgKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFJldHJpZXM7ICsraSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdG9SZXRyeSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheU1zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRvUmV0cnkoKTtcbiAgICB9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/index.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/index.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromHttp: () => (/* reexport safe */ _fromHttp_fromHttp__WEBPACK_IMPORTED_MODULE_0__.fromHttp)\n/* harmony export */ });\n/* harmony import */ var _fromHttp_fromHttp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromHttp/fromHttp */ \"(rsc)/./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlci1odHRwQDMuNjIyLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cC9kaXN0LWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGEtMC4wLjEvLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrY3JlZGVudGlhbC1wcm92aWRlci1odHRwQDMuNjIyLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaHR0cC9kaXN0LWVzL2luZGV4LmpzPzAzM2QiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZnJvbUh0dHAgfSBmcm9tIFwiLi9mcm9tSHR0cC9mcm9tSHR0cFwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@aws-sdk+credential-provider-http@3.622.0/node_modules/@aws-sdk/credential-provider-http/dist-es/index.js\n");

/***/ })

};
;