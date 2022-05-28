(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3317:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "Layout_layout__heU11",
	"background": "Layout_background__Hmt1c",
	"bg-animation": "Layout_bg-animation__XcuVu"
};


/***/ }),

/***/ 8285:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "MainCard_main__mtytD"
};


/***/ }),

/***/ 3047:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Navigation_wrapper__DaHUJ",
	"list": "Navigation_list__lMoii",
	"item": "Navigation_item__j_Te9",
	"active": "Navigation_active__NVfwa",
	"menuButton": "Navigation_menuButton__8Mq0S",
	"listActive": "Navigation_listActive__Sw8O7"
};


/***/ }),

/***/ 8680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Layout/Layout.module.scss
var Layout_module = __webpack_require__(3317);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: ./components/MainCard/MainCard.module.scss
var MainCard_module = __webpack_require__(8285);
var MainCard_module_default = /*#__PURE__*/__webpack_require__.n(MainCard_module);
;// CONCATENATED MODULE: ./components/MainCard/MainCard.tsx



const MainCard = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: (MainCard_module_default()).main,
        children: children
    });
};
/* harmony default export */ const MainCard_MainCard = (MainCard);

// EXTERNAL MODULE: ./components/Navigation/Navigation.module.scss
var Navigation_module = __webpack_require__(3047);
var Navigation_module_default = /*#__PURE__*/__webpack_require__.n(Navigation_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Navigation/Navigation.tsx





const Navigation = ()=>{
    const { 0: menuOpened , 1: setMenuOpened  } = (0,external_react_.useState)(false);
    const { page  } = (0,router_.useRouter)().query;
    const menuClickHandler = ()=>{
        setMenuOpened((prev)=>!prev
        );
    };
    (0,external_react_.useEffect)(()=>{
        setMenuOpened(false);
    }, [
        page
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Navigation_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (Navigation_module_default()).menuButton,
                onClick: menuClickHandler,
                children: menuOpened ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/x-lg.svg",
                    alt: "list"
                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/list.svg",
                    alt: "list"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: `${(Navigation_module_default()).list} ${menuOpened ? (Navigation_module_default()).listActive : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(Navigation_module_default()).item} ${page === "about" ? (Navigation_module_default()).active : ""}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "about",
                            children: "About me"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(Navigation_module_default()).item} ${page === "skills" ? (Navigation_module_default()).active : ""}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "skills",
                            children: "Skills"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(Navigation_module_default()).item} ${page === "projects" ? (Navigation_module_default()).active : ""}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "projects",
                            children: "Projects"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(Navigation_module_default()).item} ${page === "contacts" ? (Navigation_module_default()).active : ""}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "contacts",
                            children: "Contacts"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Navigation_Navigation = (Navigation);

;// CONCATENATED MODULE: ./components/Layout/Layout.tsx





const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Layout_module_default()).layout,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Layout_module_default()).background
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainCard_MainCard, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navigation_Navigation, {}),
                    children
                ]
            })
        ]
    });
};
/* harmony default export */ const Layout_Layout = (Layout);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./redux/app/appSlice.ts
var appSlice = __webpack_require__(841);
;// CONCATENATED MODULE: ./redux/store.ts


const store = (0,toolkit_.configureStore)({
    reducer: {
        app: appSlice/* default */.ZP
    }
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx







function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
        store: store,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Max Georgievsky - Frontend developer"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                style: {
                    position: "absolute",
                    width: 0,
                    height: 0
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "linear",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "66%",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0%",
                                stopColor: "#e0c3fc"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "100%",
                                stopColor: "#8ec5fc"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,841], () => (__webpack_exec__(8680)));
module.exports = __webpack_exports__;

})();