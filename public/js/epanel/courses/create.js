webpackJsonp([9],{

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(60)
/* script */
var __vue_script__ = __webpack_require__(92)
/* template */
var __vue_template__ = __webpack_require__(93)
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

/***/ 92:
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

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "courses-container" }, [
    _c("article", { staticClass: "uk-article" }, [
      _c("section", { staticClass: "uk-section" }, [
        _c(
          "div",
          {
            staticClass:
              "uk-card uk-card-default uk-width-1-2@m uk-margin-auto uk-box-shadow-large"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-body" }, [
              _c(
                "form",
                {
                  ref: "course",
                  staticClass: "uk-form uk-form-horizontal",
                  attrs: { id: "course-creation-form" }
                },
                [
                  _c("div", [
                    _c(
                      "label",
                      { staticClass: "uk-form-label", attrs: { for: "title" } },
                      [_vm._v("Title")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.course.title,
                            expression: "course.title"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: { type: "text", name: "title", id: "title" },
                        domProps: { value: _vm.course.title },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.course, "title", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      { staticClass: "uk-form-label", attrs: { for: "code" } },
                      [_vm._v("Code")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.course.code,
                            expression: "course.code"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: { type: "text", name: "code", id: "code" },
                        domProps: { value: _vm.course.code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.course, "code", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "questions" }
                      },
                      [_vm._v("No of Questions")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.course.questions,
                            expression: "course.questions"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "number",
                          name: "questions",
                          id: "questions",
                          min: "0"
                        },
                        domProps: { value: _vm.course.questions },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.course,
                              "questions",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "points" }
                      },
                      [_vm._v("Points Per Question")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.course.points,
                            expression: "course.points"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "number",
                          name: "points",
                          id: "points",
                          min: "0"
                        },
                        domProps: { value: _vm.course.points },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.course, "points", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "duration" }
                      },
                      [_vm._v("Duration")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.course.duration,
                            expression: "course.duration"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "number",
                          name: "duration",
                          id: "duration",
                          min: "0"
                        },
                        domProps: { value: _vm.course.duration },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.course,
                              "duration",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "always-available" }
                      },
                      [_vm._v("Always Available")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.course.alwaysAvailable,
                            expression: "course.alwaysAvailable"
                          }
                        ],
                        staticClass: "uk-checkbox",
                        attrs: {
                          type: "checkbox",
                          name: "always-available",
                          id: "always-available",
                          value: "1"
                        },
                        domProps: {
                          checked: Array.isArray(_vm.course.alwaysAvailable)
                            ? _vm._i(_vm.course.alwaysAvailable, "1") > -1
                            : _vm.course.alwaysAvailable
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.course.alwaysAvailable,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = "1",
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.course,
                                    "alwaysAvailable",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.course,
                                    "alwaysAvailable",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.course, "alwaysAvailable", $$c)
                            }
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _vm.course.alwaysAvailable == 0
                    ? _c("div", [
                        _c(
                          "label",
                          {
                            staticClass: "uk-form-label",
                            attrs: { for: "start-time" }
                          },
                          [_vm._v("Start Time")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-form-controls" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.course.startTime,
                                expression: "course.startTime"
                              }
                            ],
                            staticClass: "uk-input",
                            attrs: {
                              type: "datetime-local",
                              name: "start-time",
                              id: "start-time",
                              value: "1"
                            },
                            domProps: { value: _vm.course.startTime },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.course,
                                  "startTime",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _vm.course.alwaysAvailable == 0
                    ? _c("div", [
                        _c(
                          "label",
                          {
                            staticClass: "uk-form-label",
                            attrs: { for: "stop-time" }
                          },
                          [_vm._v("Stop Time")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-form-controls" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.course.stopTime,
                                expression: "course.stopTime"
                              }
                            ],
                            staticClass: "uk-input",
                            attrs: {
                              type: "datetime-local",
                              name: "stop-time",
                              id: "stop-time",
                              value: "1"
                            },
                            domProps: { value: _vm.course.stopTime },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.course,
                                  "stopTime",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    : _vm._e()
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-footer uk-card-secondary" }, [
              _c(
                "button",
                {
                  staticClass:
                    "uk-button uk-button-primary uk-box-shadow-hover-medium",
                  attrs: { form: "course-creation-form" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.submit(_vm.course)
                    }
                  }
                },
                [_vm._v("Create")]
              )
            ])
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
    return _c("div", { staticClass: "uk-card-header uk-card-primary" }, [
      _c("h3", { staticClass: "uk-heading" }, [_vm._v("Add New Course")])
    ])
  }
]
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