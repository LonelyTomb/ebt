webpackJsonp([8],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UploadQuestion",
  props: {
    courses: Array
  },
  data: function data() {
    return {
      uploadPicture: false,
      question: {
        course: 1,
        text: "",
        a: "",
        b: "",
        c: "",
        d: "",
        answer: "",
        picture: []
      }
    };
  },
  mounted: function mounted() {},

  methods: {
    resetPicture: function resetPicture() {
      this.question.picture = [];
    },
    toggleUpload: function toggleUpload() {
      this.uploadPicture = !this.uploadPicture;
      if (this.uploadPicture == false) {
        this.question.picture = [];
      }
    },
    pictureChange: function pictureChange() {
      this.question.picture = this.$refs.picture.files[0];
    },
    upload: function upload(form) {
      var formData = new FormData();
      /*
                 *Add the form data we need to submit
                 */
      Object.entries(form).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        formData.append(key, value);
      });

      window.axios.post("/epanel/questions", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        console.log(res);
        if (res.data.status == "success") {
          UIkit.notification("" + res.data.message, "success");
        }
      }).catch(function (error) {
        console.log(error);
        UIkit.notification("Unable to complete! Please try again", "warning");
      });
    }
  }
});

/***/ }),

/***/ 102:
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
              "uk-card uk-card-default uk-width-1-2@m uk-margin-auto uk-card-hover"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-body" }, [
              _c(
                "form",
                {
                  ref: "uploadQuestions",
                  staticClass: "uk-form uk-form-horizontal",
                  attrs: { id: "upload-question-form" }
                },
                [
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "course" }
                      },
                      [_vm._v("Course")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.question.course,
                              expression: "question.course"
                            }
                          ],
                          staticClass: "uk-select",
                          attrs: { name: "course", id: "course" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.question,
                                "course",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.courses, function(course) {
                          return _c(
                            "option",
                            {
                              key: course.index,
                              attrs: { name: course },
                              domProps: { value: course.id }
                            },
                            [_vm._v(_vm._s(course.title))]
                          )
                        })
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "question" }
                      },
                      [_vm._v("Question")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls-text" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.question.text,
                            expression: "question.text"
                          }
                        ],
                        staticClass: "uk-textarea",
                        attrs: {
                          name: "question",
                          id: "question",
                          cols: "10",
                          rows: "5",
                          required: ""
                        },
                        domProps: { value: _vm.question.text },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.question, "text", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "option-a" }
                      },
                      [_vm._v("Option A")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls-text" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.question.a,
                            expression: "question.a"
                          }
                        ],
                        staticClass: "uk-textarea",
                        attrs: {
                          name: "optionA",
                          id: "option-a",
                          cols: "10",
                          rows: "2"
                        },
                        domProps: { value: _vm.question.a },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.question, "a", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "option-b" }
                      },
                      [_vm._v("Option B")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls-text" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.question.b,
                            expression: "question.b"
                          }
                        ],
                        staticClass: "uk-textarea",
                        attrs: {
                          name: "optionB",
                          id: "option-b",
                          cols: "10",
                          rows: "2"
                        },
                        domProps: { value: _vm.question.b },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.question, "b", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "option-c" }
                      },
                      [_vm._v("Option C")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls-text" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.question.c,
                            expression: "question.c"
                          }
                        ],
                        staticClass: "uk-textarea",
                        attrs: {
                          name: "optionC",
                          id: "option-c",
                          cols: "10",
                          rows: "2"
                        },
                        domProps: { value: _vm.question.c },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.question, "c", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "option-d" }
                      },
                      [_vm._v("Option D")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls-text" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.question.d,
                            expression: "question.d"
                          }
                        ],
                        staticClass: "uk-textarea",
                        attrs: {
                          name: "optionD",
                          id: "option-d",
                          cols: "10",
                          rows: "2"
                        },
                        domProps: { value: _vm.question.d },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.question, "d", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider" }),
                  _vm._v(" "),
                  _c("div", [
                    _c("fieldset", { staticClass: "uk-fieldset" }, [
                      _c("legend", { staticClass: "uk-legend" }, [
                        _vm._v(
                          "\n                                    Correct Option\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "uk-flex uk-flex-row uk-flex-wrap" },
                        [
                          _c(
                            "div",
                            { staticClass: "uk-flex uk-flex-row uk-flex-wrap" },
                            [
                              _c(
                                "label",
                                { attrs: { for: "correct-option-a" } },
                                [_vm._v("Option A")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "uk-form-controls" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.question.correct,
                                      expression: "question.correct"
                                    }
                                  ],
                                  staticClass: "uk-radio",
                                  attrs: {
                                    type: "radio",
                                    id: "correct-option-a",
                                    name: "correct",
                                    value: "a"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.question.correct, "a")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.$set(_vm.question, "correct", "a")
                                    }
                                  }
                                })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "uk-flex uk-flex-row uk-flex-wrap" },
                            [
                              _c(
                                "label",
                                { attrs: { for: "correct-option-b" } },
                                [_vm._v("Option B")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "uk-form-controls" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.question.correct,
                                      expression: "question.correct"
                                    }
                                  ],
                                  staticClass: "uk-radio",
                                  attrs: {
                                    type: "radio",
                                    id: "correct-option-b",
                                    name: "correct",
                                    value: "b"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.question.correct, "b")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.$set(_vm.question, "correct", "b")
                                    }
                                  }
                                })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "uk-flex uk-flex-row uk-flex-wrap" },
                            [
                              _c(
                                "label",
                                { attrs: { for: "correct-option-c" } },
                                [_vm._v("Option C")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "uk-form-controls" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.question.correct,
                                      expression: "question.correct"
                                    }
                                  ],
                                  staticClass: "uk-radio",
                                  attrs: {
                                    type: "radio",
                                    id: "correct-option-c",
                                    name: "correct",
                                    value: "c"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.question.correct, "c")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.$set(_vm.question, "correct", "c")
                                    }
                                  }
                                })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "uk-flex uk-flex-row uk-flex-wrap" },
                            [
                              _c(
                                "label",
                                { attrs: { for: "correct-option-d" } },
                                [_vm._v("Option D")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "uk-form-controls" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.question.correct,
                                      expression: "question.correct"
                                    }
                                  ],
                                  staticClass: "uk-radio",
                                  attrs: {
                                    type: "radio",
                                    id: "correct-option-d",
                                    name: "correct",
                                    value: "d"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.question.correct, "d")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.$set(_vm.question, "correct", "d")
                                    }
                                  }
                                })
                              ])
                            ]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "upload" }
                      },
                      [_vm._v("Upload Picture")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        staticClass: "uk-checkbox",
                        attrs: { type: "checkbox", id: "upload" },
                        domProps: { value: _vm.uploadPicture },
                        on: {
                          click: function($event) {
                            _vm.toggleUpload()
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm.uploadPicture === true
                      ? _c("div", [
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "js-upload uk-placeholder uk-text-center"
                              },
                              [
                                this.question.picture.length == 0
                                  ? _c("div", [
                                      _c("span", {
                                        attrs: {
                                          "uk-icon": "icon: cloud-upload"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "uk-text-middle" },
                                        [_vm._v("Drop File or")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { attrs: { "uk-form-custom": "" } },
                                        [
                                          _c("input", {
                                            ref: "picture",
                                            staticClass: "uk-input",
                                            attrs: {
                                              type: "file",
                                              name: "picture",
                                              id: "picture"
                                            },
                                            on: {
                                              change: function($event) {
                                                _vm.pictureChange()
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "uk-link" },
                                            [_vm._v("click here to upload")]
                                          )
                                        ]
                                      )
                                    ])
                                  : _c(
                                      "div",
                                      {
                                        staticClass:
                                          "file-selected uk-tile uk-tile-primary uk-padding-small"
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(this.question.picture.name)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("button", {
                                          staticClass: "uk-close-large",
                                          attrs: {
                                            type: "button",
                                            "uk-close": ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.resetPicture()
                                            }
                                          }
                                        })
                                      ]
                                    )
                              ]
                            ),
                            _vm._v(" "),
                            _c("progress", {
                              staticClass: "uk-progress",
                              attrs: {
                                id: "js-progressbar",
                                value: "0",
                                max: "100",
                                hidden: ""
                              }
                            })
                          ])
                        ])
                      : _vm._e()
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-footer" }, [
              _c(
                "button",
                {
                  staticClass: "uk-button uk-button-primary",
                  attrs: { form: "upload-question-form" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.upload(_vm.question)
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
      _c("h3", { staticClass: "uk-heading" }, [_vm._v("Upload Question")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d7d363e2", module.exports)
  }
}

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(60)
/* script */
var __vue_script__ = __webpack_require__(101)
/* template */
var __vue_template__ = __webpack_require__(102)
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
Component.options.__file = "resources/assets/js/components/epanel/questions/input.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d7d363e2", Component.options)
  } else {
    hotAPI.reload("data-v-d7d363e2", Component.options)
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


/***/ })

});