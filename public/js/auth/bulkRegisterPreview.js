webpackJsonp([12],{

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(60)
/* script */
var __vue_script__ = __webpack_require__(67)
/* template */
var __vue_template__ = __webpack_require__(68)
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
Component.options.__file = "resources/assets/js/components/auth/bulkRegisterPreview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9b3ad33a", Component.options)
  } else {
    hotAPI.reload("data-v-9b3ad33a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 60:
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

/***/ 67:
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Upload-Register-Preview",
  props: {
    users: Array
  },
  data: function data() {
    return {
      offset: 0,
      limit: 6
    };
  },

  methods: {
    chunkedResult: function chunkedResult() {
      if (this.offset == 0) {
        return this.users.slice(this.offset, this.limit);
      } else {
        return this.users.slice(this.limit * this.offset, this.limit * (this.offset + 1));
      }
    },
    closeModal: function closeModal() {
      window.UIkit.modal(document.querySelector(".uk-modal")).hide();
    },
    save: function save() {
      var _this = this;

      window.UIkit.modal.alert("Saving to Database. Please Wait");
      window.axios.post("/epanel/register/users", {
        users: this.users
      }).then(function (res) {
        _this.closeModal();
        window.UIkit.notification(res.data.status + ", " + res.data.count + " users saved", "success");
        window.location.replace('/epanel/');
      }).catch(function (err) {
        _this.closeModal();
        window.UIkit.notification("Unable to complete! Please try again", "danger");
      });
    }
  }
});

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "uk-card uk-card-default uk-container uk-margin-auto" },
    [
      _c("div", { staticClass: "uk-card-header" }),
      _vm._v(" "),
      _c("div", { staticClass: "uk-card-body" }, [
        _c("div", { staticClass: "uk-overflow-auto" }, [
          _c(
            "table",
            {
              staticClass:
                "uk-table uk-table-responsive uk-table-striped uk-table-hover"
            },
            [
              _c("thead", [
                _c(
                  "tr",
                  [
                    _c("th"),
                    _vm._v(" "),
                    _vm._l(_vm.users[0], function(param, key) {
                      return _c("th", [
                        _vm._v(" " + _vm._s(key.replace(/_/, " ")))
                      ])
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.chunkedResult(), function(user, index) {
                  return _c("tr", [
                    _c("td", [
                      _vm._v(_vm._s(Number(index) + _vm.offset * _vm.limit + 1))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.surname))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.firstname))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.othernames))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.username))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.email))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.gender))])
                  ])
                })
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "uk-tile uk-tile-xsmall" }, [
          _c("ul", { staticClass: "uk-pagination" }, [
            _vm.offset !== 0
              ? _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "uk-button uk-button-link",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.offset -= 1
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "uk-margin-small-right",
                        attrs: { "uk-pagination-previous": "" }
                      }),
                      _vm._v(" Previous")
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            !(_vm.chunkedResult().length < _vm.limit)
              ? _c("li", { staticClass: "uk-margin-auto-left" }, [
                  _c(
                    "a",
                    {
                      staticClass: "uk-button uk-button-link",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          ++_vm.offset
                        }
                      }
                    },
                    [
                      _vm._v("Next "),
                      _c("span", {
                        staticClass: "uk-margin-small-left",
                        attrs: { "uk-pagination-next": "" }
                      })
                    ]
                  )
                ])
              : _vm._e()
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "uk-card-footer uk-card-secondary" },
        [
          _c(
            "button",
            {
              staticClass: "uk-button uk-button-primary",
              on: {
                click: function($event) {
                  _vm.save()
                }
              }
            },
            [_vm._v("Save")]
          ),
          _vm._v(" "),
          _vm._t("default")
        ],
        2
      ),
      _vm._v(" "),
      _c("div")
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9b3ad33a", module.exports)
  }
}

/***/ })

});