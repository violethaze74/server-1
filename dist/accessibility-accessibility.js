/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/accessibility/src/main.js":
/*!****************************************!*\
  !*** ./apps/accessibility/src/main.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _Accessibility_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accessibility.vue */ "./apps/accessibility/src/Accessibility.vue");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

 // bind to window

vue__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.OC = OC;
vue__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.t = t;
const View = vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend(_Accessibility_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
const accessibility = new View();
accessibility.$mount('#accessibility');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/accessibility/src/Accessibility.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/accessibility/src/Accessibility.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _components_ItemPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ItemPreview */ "./apps/accessibility/src/components/ItemPreview.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const availableConfig = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('accessibility', 'available-config');
const userConfig = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('accessibility', 'user-config');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Accessibility',
  components: {
    ItemPreview: _components_ItemPreview__WEBPACK_IMPORTED_MODULE_3__["default"]
  },

  data() {
    return {
      availableConfig,
      userConfig
    };
  },

  computed: {
    themes() {
      return this.availableConfig.themes;
    },

    highcontrast() {
      return this.availableConfig.highcontrast;
    },

    fonts() {
      return this.availableConfig.fonts;
    },

    selected() {
      return {
        theme: this.userConfig.theme,
        highcontrast: this.userConfig.highcontrast,
        font: this.userConfig.font
      };
    },

    description() {
      // using the `t` replace method escape html, we have to do it manually :/
      return t('accessibility', 'Universal access is very important to us. We follow web standards and check to make everything usable also without mouse, and assistive software such as screenreaders. We aim to be compliant with the {guidelines}Web Content Accessibility Guidelines{linkend} 2.1 on AA level, with the high contrast theme even on AAA level.').replace('{guidelines}', this.guidelinesLink).replace('{linkend}', '</a>');
    },

    guidelinesLink() {
      return '<a target="_blank" href="https://www.w3.org/WAI/standards-guidelines/wcag/" rel="noreferrer nofollow">';
    },

    descriptionDetail() {
      return t('accessibility', 'If you find any issues, don’t hesitate to report them on {issuetracker}our issue tracker{linkend}. And if you want to get involved, come join {designteam}our design team{linkend}!').replace('{issuetracker}', this.issuetrackerLink).replace('{designteam}', this.designteamLink).replace(/\{linkend\}/g, '</a>');
    },

    issuetrackerLink() {
      return '<a target="_blank" href="https://github.com/nextcloud/server/issues/" rel="noreferrer nofollow">';
    },

    designteamLink() {
      return '<a target="_blank" href="https://nextcloud.com/design" rel="noreferrer nofollow">';
    }

  },
  methods: {
    // SELECT handlers
    selectHighContrast(id) {
      this.selectItem('highcontrast', id);
      document.body.classList.toggle('theme--highcontrast');
    },

    selectTheme(id) {
      const previous = this.selected.theme;

      if (previous) {
        document.body.classList.remove("theme--".concat(previous));
      }

      if (id) {
        document.body.classList.remove('theme--light');
        document.body.classList.add("theme--".concat(id));
      } else {
        document.body.classList.add('theme--light');
      }

      this.selectItem('theme', id);
    },

    selectFont(id) {
      this.selectItem('font', id);
    },

    /**
     * Commit a change and force reload css
     * Fetching the file again will trigger the server update
     *
     * @param {string} type type of the change (font, highcontrast or theme)
     * @param {string} id the data of the change
     */
    async selectItem(type, id) {
      try {
        const isDelete = id === '';
        await (0,_nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
          url: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('apps/accessibility/api/v1/config/{type}', {
            type
          }),
          method: isDelete ? 'DELETE' : 'PUT',
          data: {
            value: id
          }
        });
        this.userConfig[type] = id; // Remove old link

        const link = document.querySelector('link[rel=stylesheet][href*=accessibility][href*=user-]');

        if (!link) {
          // insert new css
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/accessibility/css/user-style.css') + '?v=' + new Date().getTime();
          document.head.appendChild(link);
        } else {
          // compare arrays
          if (JSON.stringify(Object.values(this.selected)) === JSON.stringify([false, false])) {
            // if nothing is selected, blindly remove the css
            link.remove();
          } else {
            // force update
            link.href = link.href.split('?')[0] + '?v=' + new Date().getTime();
          }
        }
      } catch (err) {
        console.error(err, err.response);
        OC.Notification.showTemporary(t('accessibility', err.response.data.ocs.meta.message + '. Unable to apply the setting.'));
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/accessibility/src/components/ItemPreview.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/accessibility/src/components/ItemPreview.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ItemPreview',
  props: {
    preview: {
      type: Object,
      required: true
    },
    selected: {
      type: String,
      default: null
    }
  },
  computed: {
    checked: {
      get() {
        return this.selected === this.preview.id;
      },

      set(checked) {
        this.$emit('select', checked ? this.preview.id : '');
      }

    }
  }
});

/***/ }),

/***/ "./apps/accessibility/src/Accessibility.vue":
/*!**************************************************!*\
  !*** ./apps/accessibility/src/Accessibility.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Accessibility_vue_vue_type_template_id_082d9433___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accessibility.vue?vue&type=template&id=082d9433& */ "./apps/accessibility/src/Accessibility.vue?vue&type=template&id=082d9433&");
/* harmony import */ var _Accessibility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accessibility.vue?vue&type=script&lang=js& */ "./apps/accessibility/src/Accessibility.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Accessibility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Accessibility_vue_vue_type_template_id_082d9433___WEBPACK_IMPORTED_MODULE_0__.render,
  _Accessibility_vue_vue_type_template_id_082d9433___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/accessibility/src/Accessibility.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/accessibility/src/components/ItemPreview.vue":
/*!***********************************************************!*\
  !*** ./apps/accessibility/src/components/ItemPreview.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ItemPreview_vue_vue_type_template_id_66b43932___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemPreview.vue?vue&type=template&id=66b43932& */ "./apps/accessibility/src/components/ItemPreview.vue?vue&type=template&id=66b43932&");
/* harmony import */ var _ItemPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemPreview.vue?vue&type=script&lang=js& */ "./apps/accessibility/src/components/ItemPreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemPreview_vue_vue_type_template_id_66b43932___WEBPACK_IMPORTED_MODULE_0__.render,
  _ItemPreview_vue_vue_type_template_id_66b43932___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/accessibility/src/components/ItemPreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/accessibility/src/Accessibility.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./apps/accessibility/src/Accessibility.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Accessibility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Accessibility.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/accessibility/src/Accessibility.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Accessibility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/accessibility/src/components/ItemPreview.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./apps/accessibility/src/components/ItemPreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/accessibility/src/components/ItemPreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/accessibility/src/Accessibility.vue?vue&type=template&id=082d9433&":
/*!*********************************************************************************!*\
  !*** ./apps/accessibility/src/Accessibility.vue?vue&type=template&id=082d9433& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Accessibility_vue_vue_type_template_id_082d9433___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Accessibility_vue_vue_type_template_id_082d9433___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Accessibility_vue_vue_type_template_id_082d9433___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Accessibility.vue?vue&type=template&id=082d9433& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/accessibility/src/Accessibility.vue?vue&type=template&id=082d9433&");


/***/ }),

/***/ "./apps/accessibility/src/components/ItemPreview.vue?vue&type=template&id=66b43932&":
/*!******************************************************************************************!*\
  !*** ./apps/accessibility/src/components/ItemPreview.vue?vue&type=template&id=66b43932& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_template_id_66b43932___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_template_id_66b43932___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_template_id_66b43932___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemPreview.vue?vue&type=template&id=66b43932& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/accessibility/src/components/ItemPreview.vue?vue&type=template&id=66b43932&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/accessibility/src/Accessibility.vue?vue&type=template&id=082d9433&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/accessibility/src/Accessibility.vue?vue&type=template&id=082d9433& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "section", attrs: { id: "accessibility" } }, [
    _c("h2", [_vm._v(_vm._s(_vm.t("accessibility", "Accessibility")))]),
    _vm._v(" "),
    _c("p", { domProps: { innerHTML: _vm._s(_vm.description) } }),
    _vm._v(" "),
    _c("p", { domProps: { innerHTML: _vm._s(_vm.descriptionDetail) } }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "preview-list" },
      [
        _c("ItemPreview", {
          key: _vm.highcontrast.id,
          attrs: {
            preview: _vm.highcontrast,
            selected: _vm.selected.highcontrast
          },
          on: { select: _vm.selectHighContrast }
        }),
        _vm._v(" "),
        _vm._l(_vm.themes, function(preview) {
          return _c("ItemPreview", {
            key: preview.id,
            attrs: { preview: preview, selected: _vm.selected.theme },
            on: { select: _vm.selectTheme }
          })
        }),
        _vm._v(" "),
        _vm._l(_vm.fonts, function(preview) {
          return _c("ItemPreview", {
            key: preview.id,
            attrs: { preview: preview, selected: _vm.selected.font },
            on: { select: _vm.selectFont }
          })
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/accessibility/src/components/ItemPreview.vue?vue&type=template&id=66b43932&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/accessibility/src/components/ItemPreview.vue?vue&type=template&id=66b43932& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: { preview: true } }, [
    _c("div", {
      staticClass: "preview-image",
      style: { backgroundImage: "url(" + _vm.preview.img + ")" }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "preview-description" }, [
      _c("h3", [_vm._v(_vm._s(_vm.preview.title))]),
      _vm._v(" "),
      _c("p", [_vm._v(_vm._s(_vm.preview.text))]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.checked,
            expression: "checked"
          }
        ],
        staticClass: "checkbox",
        attrs: { id: "accessibility-" + _vm.preview.id, type: "checkbox" },
        domProps: {
          checked: Array.isArray(_vm.checked)
            ? _vm._i(_vm.checked, null) > -1
            : _vm.checked
        },
        on: {
          change: function($event) {
            var $$a = _vm.checked,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.checked = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.checked = $$c
            }
          }
        }
      }),
      _vm._v(" "),
      _c("label", { attrs: { for: "accessibility-" + _vm.preview.id } }, [
        _vm._v(_vm._s(_vm.preview.enableLabel))
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"accessibility-accessibility": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/accessibility/src/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=accessibility-accessibility.js.map?v=4f567edd4c49b23a9801