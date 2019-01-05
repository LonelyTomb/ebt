webpackJsonp([7],{

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(54)
/* script */
var __vue_script__ = __webpack_require__(63)
/* template */
var __vue_template__ = __webpack_require__(64)
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
Component.options.__file = "resources/assets/js/components/auth/register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5564e1a3", Component.options)
  } else {
    hotAPI.reload("data-v-5564e1a3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 54:
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var genders = ["male", "female", "others"];

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Register",
  props: {
    courses: Array
  },
  data: function data() {
    var _user;

    return {
      genders: genders,
      uploadPicture: false,
      loading: false,
      errors: {},
      user: (_user = {
        username: "",
        surname: "",
        firstname: "",
        othernames: "",
        email: "",
        password: "",
        password_confirmation: "",
        gender: "",
        courses: []
      }, _defineProperty(_user, "password", ""), _defineProperty(_user, "picture", []), _user)
    };
  },
  mounted: function mounted() {
    console.log("Component mounted.");
  },

  computed: {},
  methods: {
    toggleUpload: function toggleUpload() {
      this.uploadPicture = !this.uploadPicture;
      if (this.uploadPicture == false) {
        this.question.picture = [];
      }
    },
    fileChange: function fileChange() {
      this.user.picture = this.$refs.picture.files[0];
    },
    submit: function submit(form) {
      var _this = this;

      this.loading = true;
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

      window.axios.post("/epanel/register/user", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        return res.json;
      }).then(function (response) {
        if (response.status === "success") {
          _this.loading = true;
          _this.errors = {};
          window.UIkit.notification(response.message);
          window.location.reload;
        }
      }).catch(function (val) {
        _this.loading = false;
        _this.errors = val.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "register-container" }, [
    _c("article", { staticClass: "uk-article uk-background-muted" }, [
      _c(
        "section",
        { staticClass: "uk-section uk-container-small uk-container" },
        [
          _c("div", { staticClass: "uk-card uk-card-default uk-margin-auto" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-body" }, [
              _c(
                "form",
                {
                  ref: "user",
                  staticClass: "uk-form uk-form-horizontal",
                  attrs: {
                    action: "",
                    id: "register-form",
                    enctype: "multipart/form-data",
                    name: "myForm"
                  }
                },
                [
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "username" }
                      },
                      [_vm._v("Username: ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.username,
                            expression: "user.username"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "text",
                          name: "username",
                          id: "username"
                        },
                        domProps: { value: _vm.user.username },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "username", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.username
                        ? _c("small", { staticClass: "uk-text-warning" }, [
                            _vm._v(_vm._s(_vm.errors.username[0]))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "surname" }
                      },
                      [_vm._v("Surname: ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.surname,
                            expression: "user.surname"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "text",
                          name: "surname",
                          id: "surname",
                          required: ""
                        },
                        domProps: { value: _vm.user.surname },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "surname", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.surname
                        ? _c("small", { staticClass: "uk-text-warning" }, [
                            _vm._v(_vm._s(_vm.errors.surname[0]))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "firstname" }
                      },
                      [_vm._v("First Name: ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.firstname,
                            expression: "user.firstname"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "text",
                          name: "firstname",
                          id: "firstname",
                          required: ""
                        },
                        domProps: { value: _vm.user.firstname },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "firstname", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.firstname
                        ? _c("small", { staticClass: "uk-text-warning" }, [
                            _vm._v(_vm._s(_vm.errors.firstname[0]))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "othernames" }
                      },
                      [_vm._v("Other Names: ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.othernames,
                            expression: "user.othernames"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "text",
                          name: "othernames",
                          id: "othernames"
                        },
                        domProps: { value: _vm.user.othernames },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "othernames",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.othernames
                        ? _c("small", { staticClass: "uk-text-warning" }, [
                            _vm._v(_vm._s(_vm.errors.othernames[0]))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      { staticClass: "uk-form-label", attrs: { for: "email" } },
                      [_vm._v("Email: ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.email,
                            expression: "user.email"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "email",
                          name: "email",
                          id: "email",
                          required: ""
                        },
                        domProps: { value: _vm.user.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "email", $event.target.value)
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
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c("fieldset", { staticClass: "uk-fieldset" }, [
                      _c("legend", { staticClass: "uk-legend" }, [
                        _vm._v("Gender")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "uk-flex uk-flex-column" },
                        [
                          _vm._l(_vm.genders, function(gender) {
                            return _c("div", { key: gender.index }, [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "uk-form-label uk-text-capitalize",
                                  attrs: { for: gender }
                                },
                                [_vm._v(_vm._s(gender) + " ")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "uk-form-controls" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.user.gender,
                                      expression: "user.gender"
                                    }
                                  ],
                                  staticClass: "uk-radio",
                                  attrs: {
                                    type: "radio",
                                    name: "gender",
                                    id: gender,
                                    required: ""
                                  },
                                  domProps: {
                                    value: gender,
                                    checked: _vm._q(_vm.user.gender, gender)
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.$set(_vm.user, "gender", gender)
                                    }
                                  }
                                })
                              ])
                            ])
                          }),
                          _vm._v(" "),
                          _vm.errors.gender
                            ? _c("small", { staticClass: "uk-text-warning" }, [
                                _vm._v(_vm._s(_vm.errors.gender[0]))
                              ])
                            : _vm._e()
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c("fieldset", [
                      _c("legend", [_vm._v("Courses")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "uk-flex uk-flex-column" },
                        _vm._l(_vm.courses, function(course) {
                          return _c("div", { key: course.index }, [
                            _c(
                              "label",
                              {
                                staticClass: "uk-form-label uk-text-capitalize",
                                attrs: { for: course.title }
                              },
                              [
                                _vm._v(
                                  _vm._s(course.title) +
                                    "\n                                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "uk-form-controls" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.courses,
                                    expression: "user.courses"
                                  }
                                ],
                                staticClass: "uk-checkbox",
                                attrs: {
                                  type: "checkbox",
                                  name: "courses",
                                  id: course.title
                                },
                                domProps: {
                                  value: course.id,
                                  checked: Array.isArray(_vm.user.courses)
                                    ? _vm._i(_vm.user.courses, course.id) > -1
                                    : _vm.user.courses
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.user.courses,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = course.id,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.user,
                                            "courses",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.user,
                                            "courses",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.user, "courses", $$c)
                                    }
                                  }
                                }
                              })
                            ])
                          ])
                        })
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "password" }
                      },
                      [_vm._v("Password: ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.password,
                            expression: "user.password"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "password",
                          name: "password",
                          id: "password",
                          required: ""
                        },
                        domProps: { value: _vm.user.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "password", $event.target.value)
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
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "password_confirmation" }
                      },
                      [_vm._v("Confirm Password: ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.password_confirmation,
                            expression: "user.password_confirmation"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "password",
                          name: "password_confirmation",
                          id: "password_confirmation",
                          required: ""
                        },
                        domProps: { value: _vm.user.password_confirmation },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "password_confirmation",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
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
                          _c(
                            "label",
                            {
                              staticClass: "uk-form-label",
                              attrs: { for: "Picture" }
                            },
                            [_vm._v("Picture: ")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "uk-form-controls" }, [
                            _c("input", {
                              ref: "picture",
                              attrs: {
                                type: "file",
                                name: "picture",
                                id: "picture",
                                accept: "image/*"
                              },
                              on: {
                                change: function($event) {
                                  _vm.fileChange()
                                }
                              }
                            })
                          ])
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" })
                ]
              )
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
                    attrs: { form: "login-form", type: "submit" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.submit(_vm.user)
                      }
                    }
                  },
                  [_vm._v("Register")]
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
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uk-card-header uk-card-primary" }, [
      _c("h3", { staticClass: "uk-heading" }, [_vm._v("Add New User")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5564e1a3", module.exports)
  }
}

/***/ })

});