/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/files/src/logger.js":
/*!**********************************!*\
  !*** ./apps/files/src/logger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
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



const getLogger = user => {
  if (user === null) {
    return (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerBuilder)().setApp('files').build();
  }

  return (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerBuilder)().setApp('files').setUid(user.uid).build();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLogger((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()));

/***/ }),

/***/ "./apps/files/src/main-personal-settings.js":
/*!**************************************************!*\
  !*** ./apps/files/src/main-personal-settings.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _components_PersonalSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PersonalSettings */ "./apps/files/src/components/PersonalSettings.vue");
/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
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

__webpack_require__.nc = btoa((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getRequestToken)());
vue__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.t = t;
const View = vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend(_components_PersonalSettings__WEBPACK_IMPORTED_MODULE_1__["default"]);
new View().$mount('#files-personal-settings');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/PersonalSettings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/PersonalSettings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TransferOwnershipDialogue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransferOwnershipDialogue */ "./apps/files/src/components/TransferOwnershipDialogue.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    TransferOwnershipDialogue: _TransferOwnershipDialogue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Multiselect */ "./node_modules/@nextcloud/vue/dist/Components/Multiselect.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger */ "./apps/files/src/logger.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const picker = (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_3__.getFilePickerBuilder)(t('files', 'Choose a file or folder to transfer')).setMultiSelect(false).setModal(true).setType(1).allowDirectories().build();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TransferOwnershipDialogue',
  components: {
    Multiselect: (_nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_4___default())
  },

  data() {
    return {
      directory: undefined,
      directoryPickerError: undefined,
      submitError: undefined,
      loadingUsers: false,
      selectedUser: null,
      userSuggestions: {},
      config: {
        minSearchStringLength: parseInt(OC.config['sharing.minSearchStringLength'], 10) || 0
      }
    };
  },

  computed: {
    canSubmit() {
      return !!this.directory && !!this.selectedUser;
    },

    formatedUserSuggestions() {
      return Object.keys(this.userSuggestions).map(uid => {
        const user = this.userSuggestions[uid];
        return {
          user: user.uid,
          displayName: user.displayName,
          icon: 'icon-user'
        };
      });
    },

    submitButtonText() {
      if (!this.canSubmit) {
        return t('files', 'Transfer');
      }

      const components = this.readableDirectory.split('/');
      return t('files', 'Transfer {path} to {userid}', {
        path: components[components.length - 1],
        userid: this.selectedUser.displayName
      });
    },

    readableDirectory() {
      if (!this.directory) {
        return '';
      }

      return this.directory.substring(1);
    }

  },

  created() {
    this.findUserDebounced = debounce__WEBPACK_IMPORTED_MODULE_1___default()(this.findUser, 300);
    this.findUser('');
  },

  methods: {
    start() {
      this.directoryPickerError = undefined;
      picker.pick().then(dir => dir === '' ? '/' : dir).then(dir => {
        _logger__WEBPACK_IMPORTED_MODULE_5__["default"].debug("path ".concat(dir, " selected for transferring ownership"));

        if (!dir.startsWith('/')) {
          throw new Error(t('files', 'Invalid path selected'));
        } // /ocs/v2.php/apps/files/api/v1/transferownership
        // /ocs/v2.php/apps/files/api/v1/transferownership


        this.directory = dir;
      }).catch(error => {
        _logger__WEBPACK_IMPORTED_MODULE_5__["default"].error("Selecting object for transfer aborted: ".concat(error.message || 'Unknown error'), {
          error
        });
        this.directoryPickerError = error.message || t('files', 'Unknown error');
      });
    },

    async findUser(query) {
      this.query = query.trim();

      if (query.length < this.config.minSearchStringLength) {
        return;
      }

      this.loadingUsers = true;

      try {
        const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('apps/files_sharing/api/v1/sharees'), {
          params: {
            format: 'json',
            itemType: 'file',
            search: query,
            perPage: 20,
            lookup: false
          }
        });
        this.userSuggestions = {};
        response.data.ocs.data.exact.users.concat(response.data.ocs.data.users).forEach(user => {
          vue__WEBPACK_IMPORTED_MODULE_6__["default"].set(this.userSuggestions, user.value.shareWith, {
            uid: user.value.shareWith,
            displayName: user.label
          });
        });
      } catch (error) {
        _logger__WEBPACK_IMPORTED_MODULE_5__["default"].error('could not fetch users', {
          error
        });
      } finally {
        this.loadingUsers = false;
      }
    },

    submit() {
      if (!this.canSubmit) {
        _logger__WEBPACK_IMPORTED_MODULE_5__["default"].warn('ignoring form submit');
      }

      this.submitError = undefined;
      const data = {
        path: this.directory,
        recipient: this.selectedUser.user
      };
      _logger__WEBPACK_IMPORTED_MODULE_5__["default"].debug('submit transfer ownership form', data);
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('apps/files/api/v1/transferownership');
      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, data).then(resp => resp.data).then(data => {
        _logger__WEBPACK_IMPORTED_MODULE_5__["default"].info('Transfer ownership request sent', {
          data
        });
        this.directory = undefined;
        this.selectedUser = null;
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_3__.showSuccess)(t('files', 'Ownership transfer request sent'));
      }).catch(error => {
        var _error$response;

        _logger__WEBPACK_IMPORTED_MODULE_5__["default"].error('Could not send ownership transfer request', {
          error
        });

        if ((error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 403) {
          this.submitError = t('files', 'Cannot transfer ownership of a file or folder you don\'t own');
        } else {
          this.submitError = error.message || t('files', 'Unknown error');
        }
      });
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=style&index=0&id=76fb0136&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=style&index=0&id=76fb0136&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".middle-align[data-v-76fb0136] {\n  vertical-align: middle;\n}\np[data-v-76fb0136] {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.new-owner-row[data-v-76fb0136] {\n  display: flex;\n}\n.new-owner-row label[data-v-76fb0136] {\n  display: flex;\n  align-items: center;\n}\n.new-owner-row label span[data-v-76fb0136] {\n  margin-right: 8px;\n}\n.new-owner-row .multiselect[data-v-76fb0136] {\n  flex-grow: 1;\n  max-width: 280px;\n}\n.transfer-select-row span[data-v-76fb0136] {\n  margin-right: 8px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=style&index=0&id=76fb0136&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=style&index=0&id=76fb0136&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferOwnershipDialogue_vue_vue_type_style_index_0_id_76fb0136_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransferOwnershipDialogue.vue?vue&type=style&index=0&id=76fb0136&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=style&index=0&id=76fb0136&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferOwnershipDialogue_vue_vue_type_style_index_0_id_76fb0136_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferOwnershipDialogue_vue_vue_type_style_index_0_id_76fb0136_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./apps/files/src/components/PersonalSettings.vue":
/*!********************************************************!*\
  !*** ./apps/files/src/components/PersonalSettings.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PersonalSettings_vue_vue_type_template_id_1cf5236a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonalSettings.vue?vue&type=template&id=1cf5236a& */ "./apps/files/src/components/PersonalSettings.vue?vue&type=template&id=1cf5236a&");
/* harmony import */ var _PersonalSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonalSettings.vue?vue&type=script&lang=js& */ "./apps/files/src/components/PersonalSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PersonalSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PersonalSettings_vue_vue_type_template_id_1cf5236a___WEBPACK_IMPORTED_MODULE_0__.render,
  _PersonalSettings_vue_vue_type_template_id_1cf5236a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/PersonalSettings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/TransferOwnershipDialogue.vue":
/*!*****************************************************************!*\
  !*** ./apps/files/src/components/TransferOwnershipDialogue.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TransferOwnershipDialogue_vue_vue_type_template_id_76fb0136_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransferOwnershipDialogue.vue?vue&type=template&id=76fb0136&scoped=true& */ "./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=template&id=76fb0136&scoped=true&");
/* harmony import */ var _TransferOwnershipDialogue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransferOwnershipDialogue.vue?vue&type=script&lang=js& */ "./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=script&lang=js&");
/* harmony import */ var _TransferOwnershipDialogue_vue_vue_type_style_index_0_id_76fb0136_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransferOwnershipDialogue.vue?vue&type=style&index=0&id=76fb0136&scoped=true&lang=scss& */ "./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=style&index=0&id=76fb0136&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TransferOwnershipDialogue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransferOwnershipDialogue_vue_vue_type_template_id_76fb0136_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TransferOwnershipDialogue_vue_vue_type_template_id_76fb0136_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76fb0136",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files/src/components/TransferOwnershipDialogue.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/PersonalSettings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./apps/files/src/components/PersonalSettings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonalSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/PersonalSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferOwnershipDialogue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransferOwnershipDialogue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferOwnershipDialogue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=style&index=0&id=76fb0136&scoped=true&lang=scss&":
/*!***************************************************************************************************************************!*\
  !*** ./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=style&index=0&id=76fb0136&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferOwnershipDialogue_vue_vue_type_style_index_0_id_76fb0136_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransferOwnershipDialogue.vue?vue&type=style&index=0&id=76fb0136&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=style&index=0&id=76fb0136&scoped=true&lang=scss&");


/***/ }),

/***/ "./apps/files/src/components/PersonalSettings.vue?vue&type=template&id=1cf5236a&":
/*!***************************************************************************************!*\
  !*** ./apps/files/src/components/PersonalSettings.vue?vue&type=template&id=1cf5236a& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalSettings_vue_vue_type_template_id_1cf5236a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalSettings_vue_vue_type_template_id_1cf5236a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalSettings_vue_vue_type_template_id_1cf5236a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonalSettings.vue?vue&type=template&id=1cf5236a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/PersonalSettings.vue?vue&type=template&id=1cf5236a&");


/***/ }),

/***/ "./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=template&id=76fb0136&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=template&id=76fb0136&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferOwnershipDialogue_vue_vue_type_template_id_76fb0136_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferOwnershipDialogue_vue_vue_type_template_id_76fb0136_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferOwnershipDialogue_vue_vue_type_template_id_76fb0136_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransferOwnershipDialogue.vue?vue&type=template&id=76fb0136&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=template&id=76fb0136&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/PersonalSettings.vue?vue&type=template&id=1cf5236a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/PersonalSettings.vue?vue&type=template&id=1cf5236a& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "section", attrs: { id: "files-personal-settings" } },
    [
      _c("h2", [_vm._v(_vm._s(_vm.t("files", "Files")))]),
      _vm._v(" "),
      _c("TransferOwnershipDialogue")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=template&id=76fb0136&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/TransferOwnershipDialogue.vue?vue&type=template&id=76fb0136&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("h3", [
      _vm._v(
        _vm._s(_vm.t("files", "Transfer ownership of a file or folder")) + " "
      )
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit.apply(null, arguments)
          }
        }
      },
      [
        _c("p", { staticClass: "transfer-select-row" }, [
          _c("span", [_vm._v(_vm._s(_vm.readableDirectory))]),
          _vm._v(" "),
          _vm.directory === undefined
            ? _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.start.apply(null, arguments)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n\t\t\t\t" +
                      _vm._s(
                        _vm.t("files", "Choose file or folder to transfer")
                      ) +
                      "\n\t\t\t"
                  )
                ]
              )
            : _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.start.apply(null, arguments)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n\t\t\t\t" + _vm._s(_vm.t("files", "Change")) + "\n\t\t\t"
                  )
                ]
              ),
          _vm._v(" "),
          _c("span", { staticClass: "error" }, [
            _vm._v(_vm._s(_vm.directoryPickerError))
          ])
        ]),
        _vm._v(" "),
        _c(
          "p",
          { staticClass: "new-owner-row" },
          [
            _c("label", { attrs: { for: "targetUser" } }, [
              _c("span", [_vm._v(_vm._s(_vm.t("files", "New owner")))])
            ]),
            _vm._v(" "),
            _c("Multiselect", {
              staticClass: "middle-align",
              attrs: {
                id: "targetUser",
                options: _vm.formatedUserSuggestions,
                multiple: false,
                searchable: true,
                placeholder: _vm.t("files", "Search users"),
                "preselect-first": true,
                "preserve-search": true,
                loading: _vm.loadingUsers,
                "track-by": "user",
                label: "displayName",
                "internal-search": false,
                "clear-on-select": false,
                "user-select": true
              },
              on: { "search-change": _vm.findUserDebounced },
              model: {
                value: _vm.selectedUser,
                callback: function($$v) {
                  _vm.selectedUser = $$v
                },
                expression: "selectedUser"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("p", [
          _c("input", {
            staticClass: "primary",
            attrs: { type: "submit", disabled: !_vm.canSubmit },
            domProps: { value: _vm.submitButtonText }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "error" }, [
            _vm._v(_vm._s(_vm.submitError))
          ])
        ])
      ]
    )
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
/******/ 			"files-personal-settings": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/files/src/main-personal-settings.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=files-personal-settings.js.map?v=f9940371bdcde702351f