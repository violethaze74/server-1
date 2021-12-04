/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/settings/src/main-admin-security.js":
/*!**************************************************!*\
  !*** ./apps/settings/src/main-admin-security.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_AdminTwoFactor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AdminTwoFactor.vue */ "./apps/settings/src/components/AdminTwoFactor.vue");
/* harmony import */ var _store_admin_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/admin-security */ "./apps/settings/src/store/admin-security.js");
/**
 * @copyright Copyright (c) 2016 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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



 // eslint-disable-next-line camelcase

__webpack_require__.nc = btoa(OC.requestToken);
vue__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.t = t; // Not used here but required for legacy templates

window.OC = window.OC || {};
window.OC.Settings = window.OC.Settings || {};
_store_admin_security__WEBPACK_IMPORTED_MODULE_2__["default"].replaceState((0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'mandatory2FAState'));
const View = vue__WEBPACK_IMPORTED_MODULE_3__["default"].extend(_components_AdminTwoFactor_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
new View({
  store: _store_admin_security__WEBPACK_IMPORTED_MODULE_2__["default"]
}).$mount('#two-factor-auth-settings');

/***/ }),

/***/ "./apps/settings/src/store/admin-security.js":
/*!***************************************************!*\
  !*** ./apps/settings/src/store/admin-security.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/**
 * @copyright 2019 Roeland Jago Douma <roeland@famdouma.nl>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
const state = {
  enforced: false,
  enforcedGroups: [],
  excludedGroups: []
};
const mutations = {
  setEnforced(state, enabled) {
    vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(state, 'enforced', enabled);
  },

  setEnforcedGroups(state, total) {
    vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(state, 'enforcedGroups', total);
  },

  setExcludedGroups(state, used) {
    vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(state, 'excludedGroups', used);
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  strict: "development" !== 'production',
  state,
  mutations
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Multiselect */ "./node_modules/@nextcloud/vue/dist/Components/Multiselect.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AdminTwoFactor',
  components: {
    Multiselect: (_nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_1___default())
  },

  data() {
    return {
      loading: false,
      dirty: false,
      groups: [],
      loadingGroups: false
    };
  },

  computed: {
    enforced: {
      get() {
        return this.$store.state.enforced;
      },

      set(val) {
        this.dirty = true;
        this.$store.commit('setEnforced', val);
      }

    },
    enforcedGroups: {
      get() {
        return this.$store.state.enforcedGroups;
      },

      set(val) {
        this.dirty = true;
        this.$store.commit('setEnforcedGroups', val);
      }

    },
    excludedGroups: {
      get() {
        return this.$store.state.excludedGroups;
      },

      set(val) {
        this.dirty = true;
        this.$store.commit('setExcludedGroups', val);
      }

    }
  },

  mounted() {
    // Groups are loaded dynamically, but the assigned ones *should*
    // be valid groups, so let's add them as initial state
    this.groups = lodash__WEBPACK_IMPORTED_MODULE_2___default().sortedUniq(lodash__WEBPACK_IMPORTED_MODULE_2___default().uniq(this.enforcedGroups.concat(this.excludedGroups))); // Populate the groups with a first set so the dropdown is not empty
    // when opening the page the first time

    this.searchGroup('');
  },

  methods: {
    searchGroup: lodash__WEBPACK_IMPORTED_MODULE_2___default().debounce(function (query) {
      this.loadingGroups = true;
      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateOcsUrl)('cloud/groups?offset=0&search={query}&limit=20', {
        query
      })).then(res => res.data.ocs).then(ocs => ocs.data.groups).then(groups => {
        this.groups = lodash__WEBPACK_IMPORTED_MODULE_2___default().sortedUniq(lodash__WEBPACK_IMPORTED_MODULE_2___default().uniq(this.groups.concat(groups)));
      }).catch(err => console.error('could not search groups', err)).then(() => {
        this.loadingGroups = false;
      });
    }, 500),

    saveChanges() {
      this.loading = true;
      const data = {
        enforced: this.enforced,
        enforcedGroups: this.enforcedGroups,
        excludedGroups: this.excludedGroups
      };
      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateUrl)('/settings/api/admin/twofactorauth'), data).then(resp => resp.data).then(state => {
        this.state = state;
        this.dirty = false;
      }).catch(err => {
        console.error('could not save changes', err);
      }).then(() => {
        this.loading = false;
      });
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.two-factor-loading {\n\tdisplay: inline-block;\n\tvertical-align: sub;\n\tmargin-left: -2px;\n\tmargin-right: 1px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTwoFactor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./apps/settings/src/components/AdminTwoFactor.vue":
/*!*********************************************************!*\
  !*** ./apps/settings/src/components/AdminTwoFactor.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminTwoFactor_vue_vue_type_template_id_20893fad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminTwoFactor.vue?vue&type=template&id=20893fad& */ "./apps/settings/src/components/AdminTwoFactor.vue?vue&type=template&id=20893fad&");
/* harmony import */ var _AdminTwoFactor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminTwoFactor.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/AdminTwoFactor.vue?vue&type=script&lang=js&");
/* harmony import */ var _AdminTwoFactor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminTwoFactor.vue?vue&type=style&index=0&lang=css& */ "./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdminTwoFactor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminTwoFactor_vue_vue_type_template_id_20893fad___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminTwoFactor_vue_vue_type_template_id_20893fad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/AdminTwoFactor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/AdminTwoFactor.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./apps/settings/src/components/AdminTwoFactor.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTwoFactor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTwoFactor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./apps/settings/src/components/AdminTwoFactor.vue?vue&type=template&id=20893fad&":
/*!****************************************************************************************!*\
  !*** ./apps/settings/src/components/AdminTwoFactor.vue?vue&type=template&id=20893fad& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_template_id_20893fad___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_template_id_20893fad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminTwoFactor_vue_vue_type_template_id_20893fad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminTwoFactor.vue?vue&type=template&id=20893fad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=template&id=20893fad&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=template&id=20893fad&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AdminTwoFactor.vue?vue&type=template&id=20893fad& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("p", { staticClass: "settings-hint" }, [
        _vm._v(
          "\n\t\t" +
            _vm._s(
              _vm.t(
                "settings",
                "Two-factor authentication can be enforced for all users and specific groups. If they do not have a two-factor provider configured, they will be unable to log into the system."
              )
            ) +
            "\n\t"
        )
      ]),
      _vm._v(" "),
      _vm.loading
        ? _c("p", [
            _c("span", {
              staticClass: "icon-loading-small two-factor-loading"
            }),
            _vm._v(" "),
            _c("span", [
              _vm._v(
                _vm._s(_vm.t("settings", "Enforce two-factor authentication"))
              )
            ])
          ])
        : _c("p", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.enforced,
                  expression: "enforced"
                }
              ],
              staticClass: "checkbox",
              attrs: { id: "two-factor-enforced", type: "checkbox" },
              domProps: {
                checked: Array.isArray(_vm.enforced)
                  ? _vm._i(_vm.enforced, null) > -1
                  : _vm.enforced
              },
              on: {
                change: function($event) {
                  var $$a = _vm.enforced,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.enforced = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.enforced = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.enforced = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "two-factor-enforced" } }, [
              _vm._v(
                _vm._s(_vm.t("settings", "Enforce two-factor authentication"))
              )
            ])
          ]),
      _vm._v(" "),
      _vm.enforced
        ? [
            _c("h3", [_vm._v(_vm._s(_vm.t("settings", "Limit to groups")))]),
            _vm._v(
              "\n\t\t" +
                _vm._s(
                  _vm.t(
                    "settings",
                    "Enforcement of two-factor authentication can be set for certain groups only."
                  )
                ) +
                "\n\t\t"
            ),
            _c("p", [
              _vm._v(
                "\n\t\t\t" +
                  _vm._s(
                    _vm.t(
                      "settings",
                      "Two-factor authentication is enforced for all members of the following groups."
                    )
                  ) +
                  "\n\t\t"
              )
            ]),
            _vm._v(" "),
            _c(
              "p",
              [
                _c("Multiselect", {
                  attrs: {
                    options: _vm.groups,
                    placeholder: _vm.t("settings", "Enforced groups"),
                    disabled: _vm.loading,
                    multiple: true,
                    searchable: true,
                    loading: _vm.loadingGroups,
                    "show-no-options": false,
                    "close-on-select": false
                  },
                  on: { "search-change": _vm.searchGroup },
                  model: {
                    value: _vm.enforcedGroups,
                    callback: function($$v) {
                      _vm.enforcedGroups = $$v
                    },
                    expression: "enforcedGroups"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n\t\t\t" +
                  _vm._s(
                    _vm.t(
                      "settings",
                      "Two-factor authentication is not enforced for members of the following groups."
                    )
                  ) +
                  "\n\t\t"
              )
            ]),
            _vm._v(" "),
            _c(
              "p",
              [
                _c("Multiselect", {
                  attrs: {
                    options: _vm.groups,
                    placeholder: _vm.t("settings", "Excluded groups"),
                    disabled: _vm.loading,
                    multiple: true,
                    searchable: true,
                    loading: _vm.loadingGroups,
                    "show-no-options": false,
                    "close-on-select": false
                  },
                  on: { "search-change": _vm.searchGroup },
                  model: {
                    value: _vm.excludedGroups,
                    callback: function($$v) {
                      _vm.excludedGroups = $$v
                    },
                    expression: "excludedGroups"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("p", [
              _c("em", [
                _vm._v(
                  "\n\t\t\t\t" +
                    _vm._s(
                      _vm.t(
                        "settings",
                        "When groups are selected/excluded, they use the following logic to determine if a user has 2FA enforced: If no groups are selected, 2FA is enabled for everyone except members of the excluded groups. If groups are selected, 2FA is enabled for all members of these. If a user is both in a selected and excluded group, the selected takes precedence and 2FA is enforced."
                      )
                    ) +
                    "\n\t\t\t"
                )
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _c("p", [
        _vm.dirty
          ? _c(
              "button",
              {
                staticClass: "button primary",
                attrs: { disabled: _vm.loading },
                on: { click: _vm.saveChanges }
              },
              [
                _vm._v(
                  "\n\t\t\t" +
                    _vm._s(_vm.t("settings", "Save changes")) +
                    "\n\t\t"
                )
              ]
            )
          : _vm._e()
      ])
    ],
    2
  )
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
/******/ 			"settings-vue-settings-admin-security": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/settings/src/main-admin-security.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=settings-vue-settings-admin-security.js.map?v=fc1cc1a0f3b214b92937