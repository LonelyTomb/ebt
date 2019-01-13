webpackJsonp([10],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(118)
}
var normalizeComponent = __webpack_require__(60)
/* script */
var __vue_script__ = __webpack_require__(120)
/* template */
var __vue_template__ = __webpack_require__(121)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/assets/js/components/uploadWidget.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6740fa88", Component.options)
  } else {
    hotAPI.reload("data-v-6740fa88", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(61)("64c2cb0f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6740fa88\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./uploadWidget.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6740fa88\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./uploadWidget.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n.js-upload {\n  margin-bottom: 20px;\n  padding: 30px 30px;\n  background: transparent;\n  border: 1px dashed #e5e5e5;\n  text-align: center;\n}\n.custom-input {\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n  vertical-align: middle;\n}\n.custom-file-input {\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  -webkit-appearance: none;\n  opacity: 0;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 120:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "uploadWidget",
  props: {
    formid: String
  },
  data: function data() {
    return {
      uploads: []
    };
  },
  mounted: function mounted() {
    this.$emit("uploads", []);
    [("drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop")].forEach(function (evt) {
      /*
      For each event add an event listener that prevents the default action
      (opening the file in the browser) and stop the propagation of the event (so
      no other elements open the file in the browser)
      */
      this.$refs.dropZone.addEventListener(evt, function (e) {
        e.preventDefault();
        e.stopPropagation();
      }.bind(this), false);
    }.bind(this));
    this.$refs.dropZone.addEventListener("drop", function (e) {
      /*
      Capture the files from the drop event and add them to our local files
      array.
      */
      this.uploads = e.dataTransfer.files[0];
      this.$emit("uploads", e.dataTransfer.files[0]);
    }.bind(this));
  },

  methods: {
    resetInput: function resetInput() {
      this.uploads = [];
      this.$emit("uploads", []);
    },
    fileChange: function fileChange() {
      this.uploads = this.$refs.uploads.files[0];
      this.$emit("uploads", this.$refs.uploads.files[0]);
    }
  }
});

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { ref: "dropZone", staticClass: "js-upload" }, [
      this.uploads.length == 0
        ? _c(
            "div",
            [
              _c("v-icon", [_vm._v("cloud_upload")]),
              _vm._v(" "),
              _c("span", { staticClass: "uk-text-middle" }, [
                _vm._v("Drop File or")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "custom-input" },
                [
                  _c("input", {
                    ref: "uploads",
                    staticClass: "custom-file-input",
                    attrs: {
                      type: "file",
                      name: "uploads",
                      id: "uploads",
                      form: _vm.formid
                    },
                    on: {
                      change: function($event) {
                        _vm.fileChange()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("v-btn", { attrs: { flat: "", color: "info" } }, [
                    _vm._v("click here to upload")
                  ])
                ],
                1
              )
            ],
            1
          )
        : _c(
            "div",
            { staticClass: "file-selected" },
            [
              _c("span", [_vm._v(_vm._s(this.uploads.name))]),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "warning", round: "" },
                  on: {
                    click: function($event) {
                      _vm.resetInput()
                    }
                  }
                },
                [_vm._v("Cancel")]
              )
            ],
            1
          )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6740fa88", module.exports)
  }
}

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(60)
/* script */
var __vue_script__ = __webpack_require__(82)
/* template */
var __vue_template__ = __webpack_require__(83)
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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(62)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uploadWidget__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uploadWidget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__uploadWidget__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    uploadWidget: __WEBPACK_IMPORTED_MODULE_0__uploadWidget___default.a
  },
  props: {
    courses: Array
  },
  data: function data() {
    var _user;

    return {
      genders: genders,
      valid: true,
      show: false,
      show_pwd: false,
      uploadPicture: false,
      loading: false,
      snackbar: false,
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

  computed: {
    allCourses: function allCourses() {
      return this.user.courses.length === this.courses.length;
    },
    someCourses: function someCourses() {
      return this.user.courses.length > 0 && !this.allCourses;
    },
    icon: function icon() {
      if (this.allCourses) return "remove";
      if (this.someCourses) return "add";
      return "select_all";
    }
  },
  methods: {
    toggle: function toggle() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.allCourses) {
          _this.user.courses = [];
        } else {
          _this.user.courses = _this.courses.slice();
        }
      });
    },
    toggleUpload: function toggleUpload() {
      if (this.uploadPicture == false) {
        this.user.picture = [];
      }
    },
    handleUpload: function handleUpload(files) {
      this.user.picture = files;
    },
    submit: function submit(form) {
      var _this2 = this;

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
      }).then(function (response) {
        if (response.data.status === "success") {
          _this2.loading = false;
          _this2.errors = {};
          _this2.snackbar = true;
          // window.location.reload;
        }
      }).catch(function (val) {
        _this2.loading = false;
        _this2.errors = val.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ 83:
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
                    [_c("v-toolbar-title", [_vm._v("Add New User")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-form",
                        {
                          ref: "user",
                          attrs: {
                            id: "register-form",
                            enctype: "multipart/form-data",
                            name: "myForm"
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
                                    [
                                      _c("v-subheader", [
                                        _vm._v("Enter Username")
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
                                          label: "Username",
                                          placeholder: "Username",
                                          solo: ""
                                        },
                                        model: {
                                          value: _vm.user.username,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "username", $$v)
                                          },
                                          expression: "user.username"
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
                                        _vm._v("Enter Surname")
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
                                          label: "Surname",
                                          placeholder: "Surname",
                                          solo: ""
                                        },
                                        model: {
                                          value: _vm.user.surname,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "surname", $$v)
                                          },
                                          expression: "user.surname"
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
                                        _vm._v("Enter Firstname")
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
                                          label: "Firstname",
                                          placeholder: "Firstname",
                                          solo: ""
                                        },
                                        model: {
                                          value: _vm.user.firstname,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "firstname", $$v)
                                          },
                                          expression: "user.firstname"
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
                                        _vm._v("Enter Othernames")
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
                                          label: "Othernames",
                                          placeholder: "Othernames",
                                          solo: ""
                                        },
                                        model: {
                                          value: _vm.user.othernames,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.user,
                                              "othernames",
                                              $$v
                                            )
                                          },
                                          expression: "user.othernames"
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
                                      _c("v-subheader", [_vm._v("Enter Email")])
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
                                          label: "Email",
                                          placeholder: "Email",
                                          solo: ""
                                        },
                                        model: {
                                          value: _vm.user.email,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "email", $$v)
                                          },
                                          expression: "user.email"
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
                                        _vm._v("Select Gender")
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
                                        "v-radio-group",
                                        {
                                          attrs: { row: "" },
                                          model: {
                                            value: _vm.user.gender,
                                            callback: function($$v) {
                                              _vm.$set(_vm.user, "gender", $$v)
                                            },
                                            expression: "user.gender"
                                          }
                                        },
                                        _vm._l(_vm.genders, function(gender) {
                                          return _c("v-radio", {
                                            key: gender,
                                            attrs: {
                                              label: gender,
                                              value: gender
                                            }
                                          })
                                        })
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
                                        _vm._v("Register Courses")
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
                                        "v-select",
                                        {
                                          attrs: {
                                            solo: "",
                                            items: _vm.courses,
                                            label: "Register Courses",
                                            "item-text": "title",
                                            "item-value": "id",
                                            multiple: ""
                                          },
                                          model: {
                                            value: _vm.user.courses,
                                            callback: function($$v) {
                                              _vm.$set(_vm.user, "courses", $$v)
                                            },
                                            expression: "user.courses"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-list-tile",
                                            {
                                              attrs: {
                                                slot: "prepend-item",
                                                ripple: ""
                                              },
                                              on: { click: _vm.toggle },
                                              slot: "prepend-item"
                                            },
                                            [
                                              _c(
                                                "v-list-tile-action",
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: {
                                                        color:
                                                          _vm.user.courses
                                                            .length > 0
                                                            ? "indigo darken-4"
                                                            : ""
                                                      }
                                                    },
                                                    [_vm._v(_vm._s(_vm.icon))]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-list-tile-title", [
                                                _vm._v("Select All")
                                              ])
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
                                "v-layout",
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { sm4: "" } },
                                    [_c("v-subheader", [_vm._v("Password")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { sm8: "" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          solo: "",
                                          label: "Password",
                                          hint: "At least six characters",
                                          "append-icon": _vm.show
                                            ? "visibility_off"
                                            : "visibility",
                                          type: _vm.show ? "text" : "password",
                                          counter: ""
                                        },
                                        on: {
                                          "click:append": function($event) {
                                            _vm.show = !_vm.show
                                          }
                                        },
                                        model: {
                                          value: _vm.user.password,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "password", $$v)
                                          },
                                          expression: "user.password"
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
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { sm4: "" } },
                                    [
                                      _c("v-subheader", [
                                        _vm._v("Confirm Password")
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
                                          solo: "",
                                          label: "Confirm Password",
                                          hint: "At least six characters",
                                          "append-icon": _vm.show_pwd
                                            ? "visibility_off"
                                            : "visibility",
                                          type: _vm.show_pwd
                                            ? "text"
                                            : "password",
                                          counter: ""
                                        },
                                        on: {
                                          "click:append": function($event) {
                                            _vm.show_pwd = !_vm.show_pwd
                                          }
                                        },
                                        model: {
                                          value: _vm.user.password_confirmation,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.user,
                                              "password_confirmation",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "user.password_confirmation"
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
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { sm4: "" } },
                                    [
                                      _c("v-subheader", [
                                        _vm._v("Upload Picture")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { sm8: "" } },
                                    [
                                      _c("v-switch", {
                                        attrs: { label: "Upload Picture" },
                                        on: {
                                          change: function($event) {
                                            _vm.toggleUpload()
                                          }
                                        },
                                        model: {
                                          value: _vm.uploadPicture,
                                          callback: function($$v) {
                                            _vm.uploadPicture = $$v
                                          },
                                          expression: "uploadPicture"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.uploadPicture == true
                                ? _c(
                                    "v-layout",
                                    [
                                      _c(
                                        "v-flex",
                                        [
                                          _c("uploadWidget", {
                                            attrs: { formid: "user" },
                                            on: { uploads: _vm.handleUpload }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
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
                                          _vm.submit(_vm.user)
                                        }
                                      }
                                    },
                                    [_vm._v("Submit")]
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
    require("vue-hot-reload-api")      .rerender("data-v-5564e1a3", module.exports)
  }
}

/***/ })

});