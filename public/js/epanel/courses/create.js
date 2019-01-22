webpackJsonp([10],{

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(60)
/* script */
var __vue_script__ = __webpack_require__(97)
/* template */
var __vue_template__ = __webpack_require__(98)
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
Component.options.__file = "resources/assets/js/components/epanel/courses/create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17755108", Component.options)
  } else {
    hotAPI.reload("data-v-17755108", Component.options)
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

/***/ 97:
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
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Create-Course-Form",
  data: function data() {
    return {
      course: {
        title: "",
        code: "",
        questions: 0,
        points: 1,
        duration: 0,
        alwaysAvailable: 1,
        startTime: null,
        stopTime: null
      }
    };
  },
  mounted: function mounted() {
    console.log("Component mounted.");
  },

  methods: {
    submit: function submit(form) {
      window.axios.post("/epanel/courses", form).then(function (res) {
        if (res.data.status == "success") {
          window.UIkit.notification("" + res.data.status, "success");
        }
      }).catch(function (error) {
        window.UIkit.notification("Unable to complete! Please try again", "danger");
      });
    }
  }
});

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { "align-center": "" } },
    [
      _c(
        "v-layout",
        [
          _c(
            "v-flex",
            { attrs: { xs11: "", md8: "" } },
            [
              _c(
                "v-card",
                { staticClass: "mx-auto" },
                [
                  _c(
                    "v-toolbar",
                    { attrs: { card: true } },
                    [_c("v-toolbar-title", [_vm._v("Add New Course")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-form",
                        {
                          ref: "course",
                          attrs: {
                            id: "course-creation-form",
                            enctype: "multipart/form-data",
                            name: "course-creation-form"
                          }
                        },
                        [
                          _c(
                            "v-container",
                            [
                              _c(
                                "v-layout",
                                { attrs: { row: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { sm4: "" } },
                                    [_c("v-subheader", [_vm._v("Title")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { sm8: "" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Title",
                                          placeholder: "Title",
                                          solo: "",
                                          name: "title",
                                          id: "title"
                                        },
                                        model: {
                                          value: _vm.course.title,
                                          callback: function($$v) {
                                            _vm.$set(_vm.course, "title", $$v)
                                          },
                                          expression: "course.title"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                { attrs: { row: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { sm4: "" } },
                                    [_c("v-subheader", [_vm._v("Code")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { sm8: "" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Code",
                                          placeholder: "Code",
                                          solo: "",
                                          name: "code",
                                          id: "code"
                                        },
                                        model: {
                                          value: _vm.course.code,
                                          callback: function($$v) {
                                            _vm.$set(_vm.course, "code", $$v)
                                          },
                                          expression: "course.code"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                { attrs: { row: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { sm4: "" } },
                                    [
                                      _c("v-subheader", [
                                        _vm._v("No of Questions")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { sm8: "" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "No of Questions",
                                          placeholder: "No of Questions",
                                          solo: "",
                                          type: "number",
                                          name: "questions",
                                          id: "questions",
                                          min: "0"
                                        },
                                        model: {
                                          value: _vm.course.questions,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.course,
                                              "questions",
                                              $$v
                                            )
                                          },
                                          expression: "course.questions"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                { attrs: { row: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { sm4: "" } },
                                    [
                                      _c("v-subheader", [
                                        _vm._v("Points Per Question")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { sm8: "" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Points Per Question",
                                          placeholder: "Points Per Question",
                                          solo: "",
                                          type: "number",
                                          name: "points",
                                          id: "points",
                                          min: "0"
                                        },
                                        model: {
                                          value: _vm.course.points,
                                          callback: function($$v) {
                                            _vm.$set(_vm.course, "points", $$v)
                                          },
                                          expression: "course.points"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                { attrs: { row: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { sm4: "" } },
                                    [_c("v-subheader", [_vm._v("Duration")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { sm8: "" } },
                                    [
                                      _c(
                                        "v-text-field",
                                        {
                                          attrs: {
                                            label: "Duration",
                                            placeholder: "Duration",
                                            solo: "",
                                            type: "number",
                                            name: "duration",
                                            id: "duration",
                                            min: "0"
                                          },
                                          model: {
                                            value: _vm.course.duration,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.course,
                                                "duration",
                                                $$v
                                              )
                                            },
                                            expression: "course.duration"
                                          }
                                        },
                                        [_vm._v("\n                  >")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                { attrs: { row: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { sm4: "" } },
                                    [
                                      _c("v-subheader", [
                                        _vm._v("Always Available")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { sm8: "" } },
                                    [
                                      _c(
                                        "v-checkbox",
                                        {
                                          attrs: {
                                            label: "Always Available",
                                            placeholder: "Always Available",
                                            solo: "",
                                            t: "",
                                            name: "always-available",
                                            id: "always-available",
                                            value: "1"
                                          },
                                          model: {
                                            value: _vm.course.alwaysAvailable,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.course,
                                                "alwaysAvailable",
                                                $$v
                                              )
                                            },
                                            expression: "course.alwaysAvailable"
                                          }
                                        },
                                        [_vm._v("\n                  >")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                { attrs: { row: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { sm4: "" } },
                                    [_c("v-subheader", [_vm._v("Start Time")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { sm8: "" } },
                                    [
                                      _c(
                                        "v-text-field",
                                        {
                                          attrs: {
                                            label: "Start Time",
                                            placeholder: "Start Time",
                                            solo: "",
                                            type: "datetime-local",
                                            name: "start-time",
                                            id: "start-time",
                                            value: "1"
                                          },
                                          model: {
                                            value: _vm.course.startTime,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.course,
                                                "startTime",
                                                $$v
                                              )
                                            },
                                            expression: "course.startTime"
                                          }
                                        },
                                        [_vm._v("\n                  >")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                { attrs: { row: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { sm4: "" } },
                                    [_c("v-subheader", [_vm._v("Stop Time")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { sm8: "" } },
                                    [
                                      _c(
                                        "v-text-field",
                                        {
                                          attrs: {
                                            label: "Stop Time",
                                            placeholder: "Stop Time",
                                            solo: "",
                                            type: "datetime-local",
                                            name: "stop-time",
                                            id: "stop-time",
                                            value: "1"
                                          },
                                          model: {
                                            value: _vm.course.stopTime,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.course,
                                                "stopTime",
                                                $$v
                                              )
                                            },
                                            expression: "course.stopTime"
                                          }
                                        },
                                        [_vm._v("\n                  >")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-layout",
                            { staticClass: "text-xs-center" },
                            [
                              _c(
                                "v-flex",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "info", block: "" },
                                      on: {
                                        click: function($event) {
                                          _vm.submit(_vm.course)
                                        }
                                      }
                                    },
                                    [_vm._v("Create")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    { attrs: { name: "loading" } },
                    [
                      _vm.loading === true
                        ? _c("v-progress-linear", {
                            attrs: { indeterminate: true }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { top: true, color: "success" },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [_vm._v("Success")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-17755108", module.exports)
  }
}

/***/ })

});