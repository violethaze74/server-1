/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/twofactor_backupcodes/src/service/BackupCodesService.js":
/*!**********************************************************************!*\
  !*** ./apps/twofactor_backupcodes/src/service/BackupCodesService.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateCodes": () => (/* binding */ generateCodes)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
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


/**
 *
 */

function generateCodes() {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/twofactor_backupcodes/settings/create');
  return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {}).then(resp => resp.data);
}

/***/ }),

/***/ "./apps/twofactor_backupcodes/src/service/PrintService.js":
/*!****************************************************************!*\
  !*** ./apps/twofactor_backupcodes/src/service/PrintService.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "print": () => (/* binding */ print)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2016 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
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

/**
 * @param data
 */
function print(data) {
  const name = OC.theme.name || 'Nextcloud';
  const newTab = window.open('', t('twofactor_backupcodes', '{name} backup codes', {
    name
  }));
  newTab.document.write('<h1>' + t('twofactor_backupcodes', '{name} backup codes', {
    name
  }) + '</h1>');
  newTab.document.write('<pre>' + data + '</pre>');
  newTab.print();
  newTab.close();
}

/***/ }),

/***/ "./apps/twofactor_backupcodes/src/settings.js":
/*!****************************************************!*\
  !*** ./apps/twofactor_backupcodes/src/settings.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _views_PersonalSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/PersonalSettings */ "./apps/twofactor_backupcodes/src/views/PersonalSettings.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./apps/twofactor_backupcodes/src/store.js");
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




vue__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.t = t;
const initialState = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('twofactor_backupcodes', 'state');
_store__WEBPACK_IMPORTED_MODULE_2__["default"].replaceState(initialState);
const View = vue__WEBPACK_IMPORTED_MODULE_3__["default"].extend(_views_PersonalSettings__WEBPACK_IMPORTED_MODULE_1__["default"]);
new View({
  store: _store__WEBPACK_IMPORTED_MODULE_2__["default"]
}).$mount('#twofactor-backupcodes-settings');

/***/ }),

/***/ "./apps/twofactor_backupcodes/src/store.js":
/*!*************************************************!*\
  !*** ./apps/twofactor_backupcodes/src/store.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _service_BackupCodesService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/BackupCodesService */ "./apps/twofactor_backupcodes/src/service/BackupCodesService.js");
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



vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_2__["default"]);
const state = {
  enabled: false,
  total: 0,
  used: 0,
  codes: []
};
const mutations = {
  setEnabled(state, enabled) {
    vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(state, 'enabled', enabled);
  },

  setTotal(state, total) {
    vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(state, 'total', total);
  },

  setUsed(state, used) {
    vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(state, 'used', used);
  },

  setCodes(state, codes) {
    vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(state, 'codes', codes);
  }

};
const actions = {
  generate(_ref) {
    let {
      commit
    } = _ref;
    commit('setEnabled', false);
    return (0,_service_BackupCodesService__WEBPACK_IMPORTED_MODULE_0__.generateCodes)().then(_ref2 => {
      let {
        codes,
        state
      } = _ref2;
      commit('setEnabled', state.enabled);
      commit('setTotal', state.total);
      commit('setUsed', state.used);
      commit('setCodes', codes);
      return true;
    });
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vuex__WEBPACK_IMPORTED_MODULE_2__["default"].Store({
  strict: "development" !== 'production',
  state,
  mutations,
  actions
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_PrintService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/PrintService */ "./apps/twofactor_backupcodes/src/service/PrintService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PersonalSettings',

  data() {
    return {
      generatingCodes: false
    };
  },

  computed: {
    downloadUrl() {
      if (!this.codes) {
        return '';
      }

      return 'data:text/plain,' + encodeURIComponent(this.codes.reduce((prev, code) => {
        return prev + code + '\r\n';
      }, ''));
    },

    downloadFilename() {
      const name = OC.theme.name || 'Nextcloud';
      return name + '-backup-codes.txt';
    },

    enabled() {
      return this.$store.state.enabled;
    },

    total() {
      return this.$store.state.total;
    },

    used() {
      return this.$store.state.used;
    },

    codes() {
      return this.$store.state.codes;
    },

    name() {
      return OC.theme.name || 'Nextcloud';
    },

    haveCodes() {
      return this.codes && this.codes.length > 0;
    }

  },
  methods: {
    generateBackupCodes() {
      _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0___default()().then(() => {
        // Hide old codes
        this.generatingCodes = true;
        this.$store.dispatch('generate').then(data => {
          this.generatingCodes = false;
        }).catch(err => {
          OC.Notification.showTemporary(t('twofactor_backupcodes', 'An error occurred while generating your backup codes'));
          this.generatingCodes = false;
          throw err;
        });
      }).catch(console.error.bind(this));
    },

    getPrintData(codes) {
      if (!codes) {
        return '';
      }

      return codes.reduce((prev, code) => {
        return prev + code + '<br>';
      }, '');
    },

    printCodes() {
      (0,_service_PrintService__WEBPACK_IMPORTED_MODULE_1__.print)(this.getPrintData(this.codes));
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=style&index=0&id=fdbc4006&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=style&index=0&id=fdbc4006&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.backup-code[data-v-fdbc4006] {\n\tfont-family: monospace;\n\tletter-spacing: 0.02em;\n\tfont-size: 1.2em;\n}\n.button[data-v-fdbc4006] {\n\tdisplay: inline-block;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=style&index=0&id=fdbc4006&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=style&index=0&id=fdbc4006&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalSettings_vue_vue_type_style_index_0_id_fdbc4006_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonalSettings.vue?vue&type=style&index=0&id=fdbc4006&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=style&index=0&id=fdbc4006&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalSettings_vue_vue_type_style_index_0_id_fdbc4006_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalSettings_vue_vue_type_style_index_0_id_fdbc4006_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./apps/twofactor_backupcodes/src/views/PersonalSettings.vue":
/*!*******************************************************************!*\
  !*** ./apps/twofactor_backupcodes/src/views/PersonalSettings.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PersonalSettings_vue_vue_type_template_id_fdbc4006_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonalSettings.vue?vue&type=template&id=fdbc4006&scoped=true& */ "./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=template&id=fdbc4006&scoped=true&");
/* harmony import */ var _PersonalSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonalSettings.vue?vue&type=script&lang=js& */ "./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _PersonalSettings_vue_vue_type_style_index_0_id_fdbc4006_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersonalSettings.vue?vue&type=style&index=0&id=fdbc4006&scoped=true&lang=css& */ "./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=style&index=0&id=fdbc4006&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PersonalSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PersonalSettings_vue_vue_type_template_id_fdbc4006_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PersonalSettings_vue_vue_type_template_id_fdbc4006_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fdbc4006",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/twofactor_backupcodes/src/views/PersonalSettings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonalSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=style&index=0&id=fdbc4006&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=style&index=0&id=fdbc4006&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalSettings_vue_vue_type_style_index_0_id_fdbc4006_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonalSettings.vue?vue&type=style&index=0&id=fdbc4006&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=style&index=0&id=fdbc4006&scoped=true&lang=css&");


/***/ }),

/***/ "./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=template&id=fdbc4006&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=template&id=fdbc4006&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalSettings_vue_vue_type_template_id_fdbc4006_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalSettings_vue_vue_type_template_id_fdbc4006_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalSettings_vue_vue_type_template_id_fdbc4006_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonalSettings.vue?vue&type=template&id=fdbc4006&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=template&id=fdbc4006&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=template&id=fdbc4006&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/twofactor_backupcodes/src/views/PersonalSettings.vue?vue&type=template&id=fdbc4006&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
      !_vm.enabled
        ? _c(
            "button",
            {
              attrs: {
                id: "generate-backup-codes",
                disabled: _vm.generatingCodes
              },
              on: { click: _vm.generateBackupCodes }
            },
            [
              _vm._v(
                "\n\t\t" +
                  _vm._s(
                    _vm.t("twofactor_backupcodes", "Generate backup codes")
                  ) +
                  "\n\t\t"
              ),
              _c("span", {
                class: { "icon-loading-small": _vm.generatingCodes }
              })
            ]
          )
        : [
            _c(
              "p",
              [
                !_vm.haveCodes
                  ? [
                      _vm._v(
                        "\n\t\t\t\t" +
                          _vm._s(
                            _vm.t(
                              "twofactor_backupcodes",
                              "Backup codes have been generated. {used} of {total} codes have been used.",
                              { used: _vm.used, total: _vm.total }
                            )
                          ) +
                          "\n\t\t\t"
                      )
                    ]
                  : [
                      _vm._v(
                        "\n\t\t\t\t" +
                          _vm._s(
                            _vm.t(
                              "twofactor_backupcodes",
                              "These are your backup codes. Please save and/or print them as you will not be able to read the codes again later"
                            )
                          ) +
                          "\n\t\t\t\t"
                      ),
                      _c(
                        "ul",
                        _vm._l(_vm.codes, function(code) {
                          return _c(
                            "li",
                            { key: code, staticClass: "backup-code" },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t" + _vm._s(code) + "\n\t\t\t\t\t"
                              )
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "button primary",
                          attrs: {
                            href: _vm.downloadUrl,
                            download: _vm.downloadFilename
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.t(
                                "twofactor_backupcodes",
                                "Save backup codes"
                              )
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "button",
                          on: { click: _vm.printCodes }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t" +
                              _vm._s(
                                _vm.t(
                                  "twofactor_backupcodes",
                                  "Print backup codes"
                                )
                              ) +
                              "\n\t\t\t\t"
                          )
                        ]
                      )
                    ]
              ],
              2
            ),
            _vm._v(" "),
            _c("p", [
              _c(
                "button",
                {
                  attrs: { id: "generate-backup-codes" },
                  on: { click: _vm.generateBackupCodes }
                },
                [
                  _vm._v(
                    "\n\t\t\t\t" +
                      _vm._s(
                        _vm.t(
                          "twofactor_backupcodes",
                          "Regenerate backup codes"
                        )
                      ) +
                      "\n\t\t\t"
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _c("em", [
                _vm._v(
                  "\n\t\t\t\t" +
                    _vm._s(
                      _vm.t(
                        "twofactor_backupcodes",
                        "If you regenerate backup codes, you automatically invalidate old codes."
                      )
                    ) +
                    "\n\t\t\t"
                )
              ])
            ])
          ]
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
/******/ 			"twofactor_backupscodes-settings": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/twofactor_backupcodes/src/settings.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=twofactor_backupscodes-settings.js.map?v=753207b0b04a6f842415