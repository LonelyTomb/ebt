webpackJsonp([4],{

/***/ 2:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(72)
/* template */
var __vue_template__ = __webpack_require__(73)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/epanel/auth/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ac3ed8b", Component.options)
  } else {
    hotAPI.reload("data-v-5ac3ed8b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Admin-Login",
  data: function data() {
    return {
      loading: false,
      errors: {},
      details: {
        email: "",
        password: ""
      }
    };
  },
  mounted: function mounted() {
    console.log("Component mounted.");
  },

  methods: {
    submit: function submit(form) {
      var _this = this;

      this.loading = true;
      window.axios.post("/epanel/login", form).then(function () {
        _this.loading = false;
        window.location.reload();
      }).catch(function (val) {
        _this.loading = false;
        _this.errors = val.response.data.errors;
        window.UIkit.notification("Unable to login!", "danger");
      });
    }
  }
});

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "admin-login-container" }, [
    _c("article", { staticClass: "uk-article" }, [
      _c("section", { staticClass: "uk-section" }, [
        _c(
          "div",
          {
            staticClass: "uk-card uk-card-default uk-width-1-2@m uk-margin-auto"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-body" }, [
              _c(
                "form",
                {
                  ref: "details",
                  staticClass: "uk-form uk-form-horizontal",
                  attrs: { action: "", id: "admin-login-form" }
                },
                [
                  _c("div", [
                    _c(
                      "label",
                      { staticClass: "uk-form-label", attrs: { for: "email" } },
                      [_vm._v("Email")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.email,
                            expression: "details.email"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: { type: "email", name: "email", id: "email" },
                        domProps: { value: _vm.details.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.details, "email", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.email
                        ? _c("small", { staticClass: "uk-text-warning" }, [
                            _vm._v(_vm._s(_vm.errors.email[0]))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-icon" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "password" }
                      },
                      [_vm._v("Password")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.password,
                            expression: "details.password"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "password",
                          name: "password",
                          id: "password"
                        },
                        domProps: { value: _vm.details.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "password",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.password
                        ? _c("small", { staticClass: "uk-text-warning" }, [
                            _vm._v(_vm._s(_vm.errors.password[0]))
                          ])
                        : _vm._e()
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "uk-card-footer" },
              [
                _c(
                  "button",
                  {
                    staticClass: "uk-button uk-button-primary",
                    attrs: { form: "admin-login-form" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.submit(_vm.details)
                      }
                    }
                  },
                  [_vm._v("Login")]
                ),
                _vm._v(" "),
                _c("transition", { attrs: { name: "loading" } }, [
                  _vm.loading === true
                    ? _c(
                        "p",
                        {
                          staticClass:
                            "uk-alert uk-alert-success uk-display-inline uk-animation-slide-bottom uk-animation-toggle"
                        },
                        [
                          _vm._v(
                            "\n                                Loading\n                            "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ],
              1
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uk-card-header" }, [
      _c("h3", { staticClass: "uk-heading" }, [_vm._v("Admin Epanel Login")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ac3ed8b", module.exports)
  }
}

/***/ })

});