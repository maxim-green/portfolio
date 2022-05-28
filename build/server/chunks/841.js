"use strict";
exports.id = 841;
exports.ids = [841];
exports.modules = {

/***/ 841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$Y": () => (/* binding */ setPhase),
/* harmony export */   "YA": () => (/* binding */ setPage),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "l0": () => (/* binding */ isPage)
/* harmony export */ });
/* unused harmony export appSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const isPage = (str)=>[
        "about",
        "skills",
        "projects",
        "contacts"
    ].includes(str)
;
const initialState = {
    page: "about",
    phase: "unmounted"
};
const appSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "app",
    initialState,
    reducers: {
        setPage: (state, action)=>{
            state.page = action.payload;
        },
        setPhase: (state, action)=>{
            state.phase = action.payload;
        }
    }
});
// openPage: (state, action: PayloadAction<Pages>) => {
//
//     const PAGE_TRANSITION_SPEED = 300
//
//     // immediately start unmounting current page
//     state.pages = state.pages.map(page => {
//         if (page.name !== action.payload && page.phase === 'mounted') return {...page, phase: 'unmounting'}
//         return page
//     })
//
//     // end unmounting current page
//     // start mounting target page
//     setTimeout(() => {
//         state.pages = state.pages.map(page => {
//             if (page.name === action.payload && page.phase === 'unmounted') return {...page, phase: 'mounting'}
//             if (page.name !== action.payload && page.phase === 'unmounting') return {...page, phase: 'unmounted'}
//             return page
//         })
//     }, PAGE_TRANSITION_SPEED)
//
//     // end mounting target page
//     setTimeout(() => {
//         state.pages = state.pages.map(page => {
//             if (page.name === action.payload) return {...page, phase: 'mounted'}
//             return page
//         })
//     }, PAGE_TRANSITION_SPEED * 2)
//
// }
const { setPage , setPhase  } = appSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appSlice.reducer);


/***/ })

};
;