webpackJsonp([5,12],{

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

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(84)
}
var normalizeComponent = __webpack_require__(60)
/* script */
var __vue_script__ = __webpack_require__(86)
/* template */
var __vue_template__ = __webpack_require__(87)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9f877056"
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
Component.options.__file = "resources/assets/js/components/auth/bulkRegister.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9f877056", Component.options)
  } else {
    hotAPI.reload("data-v-9f877056", Component.options)
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

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(61)("1a3b7844", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9f877056\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./bulkRegister.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9f877056\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./bulkRegister.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n.uk-form-custom[data-v-9f877056]:hover {\n  cursor: pointer !important;\n}\n.uk-close-large[data-v-9f877056] {\n  position: absolute;\n  right: 4%;\n}\n", ""]);

// exports


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bulkRegisterPreview_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bulkRegisterPreview_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__bulkRegisterPreview_vue__);
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


var format = ["surname", "firstname", "othernames", "username", "email", "gender"];
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "bulkRegisterUsers",
    components: {
        "bulk-upload-preview": __WEBPACK_IMPORTED_MODULE_0__bulkRegisterPreview_vue___default.a
    },
    props: {},
    data: function data() {
        return {
            users: {
                list: []
            },
            format: format,
            processedList: [],
            disabled: true
        };
    },
    mounted: function mounted() {
        console.log("Component mounted.");
        ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach(function (evt) {
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
            this.users.list = e.dataTransfer.files[0];
            this.toggleSave();
        }.bind(this));
    },

    methods: {
        toggleSave: function toggleSave() {
            this.disabled = !this.disabled;
        },
        resetInput: function resetInput() {
            this.users.list = [];
            this.toggleSave();
        },
        fileChange: function fileChange() {
            this.users.list = this.$refs.list.files[0];
            this.toggleSave();
        },
        cancel: function cancel() {
            this.processedList = [];
        },
        upload: function upload(form) {
            var _this = this;

            var bar = document.getElementById("js-progressbar");

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
            window.axios.post("/epanel/files/parse", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(function (res) {
                _this.processedList = res.data.collection;
            }).catch(function (error) {
                window.UIkit.notification("Unable to complete! Please try again", "danger");
            });
        }
    }
});

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "courses-container" }, [
    _c("article", { staticClass: "uk-article" }, [
      _c(
        "section",
        { staticClass: "uk-section" },
        [
          _vm.processedList.length == 0
            ? _c(
                "div",
                {
                  staticClass:
                    "uk-card uk-card-default uk-width-1-2@m uk-margin-auto"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "uk-card-body" }, [
                    _c(
                      "section",
                      {
                        staticClass:
                          "uk-tile-muted uk-tile uk-tile-xsmall uk-padding-small"
                      },
                      [
                        _c(
                          "small",
                          { staticClass: "uk-padding-remove uk-margin-small" },
                          [
                            _vm._v(
                              "\n                            Document must be in excel format and must have the below format as the first row in the\n                            excel sheet\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "table",
                          { staticClass: "uk-table uk-table-responsive" },
                          [
                            _c("thead", [
                              _c(
                                "tr",
                                _vm._l(_vm.format, function(heading) {
                                  return _c("th", [_vm._v(_vm._s(heading))])
                                })
                              )
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        ref: "bulkRegisterForm",
                        staticClass: "uk-form uk-form-horizontal",
                        attrs: { id: "bulk-register-form" }
                      },
                      [
                        _c("div", [
                          _c(
                            "div",
                            {
                              ref: "dropZone",
                              staticClass:
                                "js-upload uk-placeholder uk-text-center"
                            },
                            [
                              this.users.list.length == 0
                                ? _c("div", [
                                    _c("span", {
                                      attrs: { "uk-icon": "icon: cloud-upload" }
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
                                          ref: "list",
                                          staticClass: "uk-input",
                                          attrs: {
                                            type: "file",
                                            name: "list",
                                            id: "list"
                                          },
                                          on: {
                                            change: function($event) {
                                              _vm.fileChange()
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("span", { staticClass: "uk-link" }, [
                                          _vm._v("click here to upload")
                                        ])
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
                                        _vm._v(_vm._s(this.users.list.name))
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
                                            _vm.resetInput()
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
                          attrs: {
                            form: "upload-users-form",
                            disabled: _vm.disabled
                          },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.upload(_vm.users)
                            }
                          }
                        },
                        [_vm._v("Preview")]
                      )
                    ]
                  )
                ]
              )
            : _c(
                "bulk-upload-preview",
                { attrs: { users: _vm.processedList } },
                [
                  _c(
                    "button",
                    {
                      staticClass: "uk-button uk-button-danger",
                      on: {
                        click: function($event) {
                          _vm.cancel()
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  )
                ]
              )
        ],
        1
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
      _c("h3", { staticClass: "uk-heading" }, [_vm._v("Upload Users List")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9f877056", module.exports)
  }
}

/***/ })

});