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
exports.id = "pages/api/post";
exports.ids = ["pages/api/post"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ "./lib/prisma.ts?90d7":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nlet prisma;\nif (false) {} else {\n    if (!prisma) {\n        prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzPzkwZDcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsRUFBZ0I7QUFDNkI7QUFFN0MsR0FBRyxDQUFDQyxNQUFNO0FBRVYsRUFBRSxFQUxGLEtBS3lDLEVBQUUsRUFFMUMsTUFBTSxDQUFDO0lBQ04sRUFBRSxHQUFHQSxNQUFNLEVBQUUsQ0FBQztRQUNaQSxNQUFNLEdBQUcsR0FBRyxDQUFDRCx3REFBWTtJQUMzQixDQUFDO0lBQ0RDLE1BQU0sR0FBR0EsTUFBTTtBQUNqQixDQUFDO0FBRUQsaUVBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3ByaXNtYS50c1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghcHJpc21hKSB7XG4gICAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIHByaXNtYSA9IHByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/prisma.ts?90d7\n");

/***/ }),

/***/ "./pages/api/post/index.ts":
/*!*********************************!*\
  !*** ./pages/api/post/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.ts?90d7\");\n// pages/api/post/index.ts\n\n\n// POST /api/post\n// Required fields in body: title\n// Optional fields in body: content\nasync function handle(req, res) {\n    var ref;\n    const { title , content  } = req.body;\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post.create({\n        data: {\n            title: title,\n            content: content,\n            author: {\n                connect: {\n                    email: session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.email\n                }\n            }\n        }\n    });\n    res.json(result);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdC9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsRUFBMEI7QUFFbUI7QUFDTDtBQUV4QyxFQUFpQjtBQUNqQixFQUFpQztBQUNqQyxFQUFtQztBQUNwQixlQUFlRSxNQUFNLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7UUFRZEMsR0FBYTtJQVA3QyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUVDLE9BQU8sRUFBQyxDQUFDLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSTtJQUVuQyxLQUFLLENBQUNILE9BQU8sR0FBRyxLQUFLLENBQUNMLDREQUFVLENBQUMsQ0FBQztRQUFDRyxHQUFHO0lBQUMsQ0FBQztJQUN4QyxLQUFLLENBQUNNLE1BQU0sR0FBRyxLQUFLLENBQUNSLCtEQUFrQixDQUFDLENBQUM7UUFDdkNXLElBQUksRUFBRSxDQUFDO1lBQ0xOLEtBQUssRUFBRUEsS0FBSztZQUNaQyxPQUFPLEVBQUVBLE9BQU87WUFDaEJNLE1BQU0sRUFBRSxDQUFDO2dCQUFDQyxPQUFPLEVBQUUsQ0FBQztvQkFBQ0MsS0FBSyxFQUFFVixPQUFPLGFBQVBBLE9BQU8sS0FBUEEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLElBQUksQ0FBSkEsQ0FBYSxJQUFiQSxHQUFhLEdBQWJBLE9BQU8sQ0FBRVcsSUFBSSxjQUFiWCxHQUFhLEtBQWJBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsR0FBYSxDQUFFVSxLQUFLO2dCQUFDLENBQUM7WUFBQyxDQUFDO1FBQ3RELENBQUM7SUFDSCxDQUFDO0lBQ0RYLEdBQUcsQ0FBQ2EsSUFBSSxDQUFDUixNQUFNO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL3Bvc3QvaW5kZXgudHM/ODNmNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvcG9zdC9pbmRleC50c1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnO1xuXG4vLyBQT1NUIC9hcGkvcG9zdFxuLy8gUmVxdWlyZWQgZmllbGRzIGluIGJvZHk6IHRpdGxlXG4vLyBPcHRpb25hbCBmaWVsZHMgaW4gYm9keTogY29udGVudFxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIGNvbnRlbnQgfSA9IHJlcS5ib2R5O1xuXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEucG9zdC5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICBhdXRob3I6IHsgY29ubmVjdDogeyBlbWFpbDogc2Vzc2lvbj8udXNlcj8uZW1haWwgfSB9LFxuICAgIH0sXG4gIH0pO1xuICByZXMuanNvbihyZXN1bHQpO1xufSJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwicHJpc21hIiwiaGFuZGxlIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInRpdGxlIiwiY29udGVudCIsImJvZHkiLCJyZXN1bHQiLCJwb3N0IiwiY3JlYXRlIiwiZGF0YSIsImF1dGhvciIsImNvbm5lY3QiLCJlbWFpbCIsInVzZXIiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/post/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/post/index.ts"));
module.exports = __webpack_exports__;

})();