"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/publish/[id]";
exports.ids = ["pages/api/publish/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./lib/prisma.ts?90d7":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nlet prisma;\nif (false) {} else {\n    if (!prisma) {\n        prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzPzkwZDcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsRUFBZ0I7QUFDNkI7QUFFN0MsR0FBRyxDQUFDQyxNQUFNO0FBRVYsRUFBRSxFQUxGLEtBS3lDLEVBQUUsRUFFMUMsTUFBTSxDQUFDO0lBQ04sRUFBRSxHQUFHQSxNQUFNLEVBQUUsQ0FBQztRQUNaQSxNQUFNLEdBQUcsR0FBRyxDQUFDRCx3REFBWTtJQUMzQixDQUFDO0lBQ0RDLE1BQU0sR0FBR0EsTUFBTTtBQUNqQixDQUFDO0FBRUQsaUVBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3ByaXNtYS50c1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghcHJpc21hKSB7XG4gICAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIHByaXNtYSA9IHByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/prisma.ts?90d7\n");

/***/ }),

/***/ "./pages/api/publish/[id].ts":
/*!***********************************!*\
  !*** ./pages/api/publish/[id].ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.ts?90d7\");\n// pages/api/publish/[id].ts\n\n// PUT /api/publish/:id\nasync function handle(req, res) {\n    const postId = req.query.id;\n    const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.update({\n        where: {\n            id: Number(postId)\n        },\n        data: {\n            published: true\n        }\n    });\n    res.json(post);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHVibGlzaC9baWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsRUFBNEI7QUFFWTtBQUV4QyxFQUF1QjtBQUNSLGVBQWVDLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUM5QyxLQUFLLENBQUNDLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxLQUFLLENBQUNDLEVBQUU7SUFDM0IsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDUCwrREFBa0IsQ0FBQyxDQUFDO1FBQ3JDUyxLQUFLLEVBQUUsQ0FBQztZQUFDSCxFQUFFLEVBQUVJLE1BQU0sQ0FBQ04sTUFBTTtRQUFFLENBQUM7UUFDN0JPLElBQUksRUFBRSxDQUFDO1lBQUNDLFNBQVMsRUFBRSxJQUFJO1FBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0RULEdBQUcsQ0FBQ1UsSUFBSSxDQUFDTixJQUFJO0FBQ2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9hcGkvcHVibGlzaC9baWRdLnRzP2VkYTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3B1Ymxpc2gvW2lkXS50c1xuXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnO1xuXG4vLyBQVVQgL2FwaS9wdWJsaXNoLzppZFxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHBvc3RJZCA9IHJlcS5xdWVyeS5pZDtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IHByaXNtYS5wb3N0LnVwZGF0ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IE51bWJlcihwb3N0SWQpIH0sXG4gICAgZGF0YTogeyBwdWJsaXNoZWQ6IHRydWUgfSxcbiAgfSk7XG4gIHJlcy5qc29uKHBvc3QpO1xufSJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJwb3N0SWQiLCJxdWVyeSIsImlkIiwicG9zdCIsInVwZGF0ZSIsIndoZXJlIiwiTnVtYmVyIiwiZGF0YSIsInB1Ymxpc2hlZCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/publish/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/publish/[id].ts"));
module.exports = __webpack_exports__;

})();