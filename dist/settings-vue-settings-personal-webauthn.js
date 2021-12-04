/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/settings/src/logger.js":
/*!*************************************!*\
  !*** ./apps/settings/src/logger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/**
 * @copyright 2020 Christoph Wurst <christoph@winzerhof-wurst.at>
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('settings').detectUser().build());

/***/ }),

/***/ "./apps/settings/src/main-personal-webauth.js":
/*!****************************************************!*\
  !*** ./apps/settings/src/main-personal-webauth.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _components_WebAuthn_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/WebAuthn/Section */ "./apps/settings/src/components/WebAuthn/Section.vue");
/**
 * @copyright 2020, Roeland Jago Douma <roeland@famdouma.nl>
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

__webpack_require__.nc = btoa(OC.requestToken);
vue__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.t = t;
const View = vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend(_components_WebAuthn_Section__WEBPACK_IMPORTED_MODULE_1__["default"]);
const devices = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'webauthn-devices');
new View({
  propsData: {
    initialDevices: devices,
    isHttps: window.location.protocol === 'https:',
    isLocalhost: window.location.hostname === 'localhost',
    hasPublicKeyCredential: typeof window.PublicKeyCredential !== 'undefined'
  }
}).$mount('#security-webauthn');

/***/ }),

/***/ "./apps/settings/src/service/WebAuthnRegistrationSerice.js":
/*!*****************************************************************!*\
  !*** ./apps/settings/src/service/WebAuthnRegistrationSerice.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startRegistration": () => (/* binding */ startRegistration),
/* harmony export */   "finishRegistration": () => (/* binding */ finishRegistration),
/* harmony export */   "removeRegistration": () => (/* binding */ removeRegistration)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/**
 * @copyright 2020, Roeland Jago Douma <roeland@famdouma.nl>
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


/**
 *
 */

async function startRegistration() {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/settings/api/personal/webauthn/registration');
  const resp = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
  return resp.data;
}
/**
 * @param name
 * @param data
 */

async function finishRegistration(name, data) {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/settings/api/personal/webauthn/registration');
  const resp = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
    name,
    data
  });
  return resp.data;
}
/**
 * @param id
 */

async function removeRegistration(id) {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)("/settings/api/personal/webauthn/registration/".concat(id));
  await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](url);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logger */ "./apps/settings/src/logger.js");
/* harmony import */ var _service_WebAuthnRegistrationSerice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/WebAuthnRegistrationSerice */ "./apps/settings/src/service/WebAuthnRegistrationSerice.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const logAndPass = text => data => {
  _logger__WEBPACK_IMPORTED_MODULE_1__["default"].debug(text);
  return data;
};

const RegistrationSteps = Object.freeze({
  READY: 1,
  REGISTRATION: 2,
  NAMING: 3,
  PERSIST: 4
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AddDevice',
  props: {
    httpWarning: Boolean,
    isHttps: {
      type: Boolean,
      default: false
    },
    isLocalhost: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      name: '',
      credential: {},
      RegistrationSteps,
      step: RegistrationSteps.READY
    };
  },

  methods: {
    arrayToBase64String(a) {
      return btoa(String.fromCharCode(...a));
    },

    start() {
      this.step = RegistrationSteps.REGISTRATION;
      console.debug('Starting WebAuthn registration');
      return _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0___default()().then(this.getRegistrationData).then(this.register.bind(this)).then(() => {
        this.step = RegistrationSteps.NAMING;
      }).catch(err => {
        console.error(err.name, err.message);
        this.step = RegistrationSteps.READY;
      });
    },

    getRegistrationData() {
      console.debug('Fetching webauthn registration data');

      const base64urlDecode = function (input) {
        // Replace non-url compatible chars with base64 standard chars
        input = input.replace(/-/g, '+').replace(/_/g, '/'); // Pad out with standard base64 required padding characters

        const pad = input.length % 4;

        if (pad) {
          if (pad === 1) {
            throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
          }

          input += new Array(5 - pad).join('=');
        }

        return window.atob(input);
      };

      return (0,_service_WebAuthnRegistrationSerice__WEBPACK_IMPORTED_MODULE_2__.startRegistration)().then(publicKey => {
        console.debug(publicKey);
        publicKey.challenge = Uint8Array.from(base64urlDecode(publicKey.challenge), c => c.charCodeAt(0));
        publicKey.user.id = Uint8Array.from(publicKey.user.id, c => c.charCodeAt(0));
        return publicKey;
      }).catch(err => {
        console.error('Error getting webauthn registration data from server', err);
        throw new Error(t('settings', 'Server error while trying to add WebAuthn device'));
      });
    },

    register(publicKey) {
      console.debug('starting webauthn registration');
      return navigator.credentials.create({
        publicKey
      }).then(data => {
        this.credential = {
          id: data.id,
          type: data.type,
          rawId: this.arrayToBase64String(new Uint8Array(data.rawId)),
          response: {
            clientDataJSON: this.arrayToBase64String(new Uint8Array(data.response.clientDataJSON)),
            attestationObject: this.arrayToBase64String(new Uint8Array(data.response.attestationObject))
          }
        };
      });
    },

    submit() {
      this.step = RegistrationSteps.PERSIST;
      return _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0___default()().then(logAndPass('confirmed password')).then(this.saveRegistrationData).then(logAndPass('registration data saved')).then(() => this.reset()).then(logAndPass('app reset')).catch(console.error.bind(this));
    },

    async saveRegistrationData() {
      try {
        const device = await (0,_service_WebAuthnRegistrationSerice__WEBPACK_IMPORTED_MODULE_2__.finishRegistration)(this.name, JSON.stringify(this.credential));
        _logger__WEBPACK_IMPORTED_MODULE_1__["default"].info('new device added', {
          device
        });
        this.$emit('added', device);
      } catch (err) {
        _logger__WEBPACK_IMPORTED_MODULE_1__["default"].error('Error persisting webauthn registration', {
          error: err
        });
        throw new Error(t('settings', 'Server error while trying to complete WebAuthn device registration'));
      }
    },

    reset() {
      this.name = '';
      this.registrationData = {};
      this.step = RegistrationSteps.READY;
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Actions */ "./node_modules/@nextcloud/vue/dist/Components/Actions.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionButton */ "./node_modules/@nextcloud/vue/dist/Components/ActionButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Device',
  components: {
    ActionButton: (_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1___default()),
    Actions: (_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Section.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Section.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_fp_sortBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/fp/sortBy */ "./node_modules/lodash/fp/sortBy.js");
/* harmony import */ var lodash_fp_sortBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_sortBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AddDevice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddDevice */ "./apps/settings/src/components/WebAuthn/AddDevice.vue");
/* harmony import */ var _Device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Device */ "./apps/settings/src/components/WebAuthn/Device.vue");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logger */ "./apps/settings/src/logger.js");
/* harmony import */ var _service_WebAuthnRegistrationSerice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/WebAuthnRegistrationSerice */ "./apps/settings/src/service/WebAuthnRegistrationSerice.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const sortByName = lodash_fp_sortBy__WEBPACK_IMPORTED_MODULE_1___default()('name');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AddDevice: _AddDevice__WEBPACK_IMPORTED_MODULE_2__["default"],
    Device: _Device__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    initialDevices: {
      type: Array,
      required: true
    },
    isHttps: {
      type: Boolean,
      default: false
    },
    isLocalhost: {
      type: Boolean,
      default: false
    },
    hasPublicKeyCredential: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      devices: this.initialDevices
    };
  },

  computed: {
    sortedDevices() {
      return sortByName(this.devices);
    }

  },
  methods: {
    deviceAdded(device) {
      _logger__WEBPACK_IMPORTED_MODULE_4__["default"].debug("adding new device to the list ".concat(device.id));
      this.devices.push(device);
    },

    async deleteDevice(id) {
      _logger__WEBPACK_IMPORTED_MODULE_4__["default"].info("deleting webauthn device ".concat(id));
      await _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_0___default()();
      await (0,_service_WebAuthnRegistrationSerice__WEBPACK_IMPORTED_MODULE_5__.removeRegistration)(id);
      this.devices = this.devices.filter(d => d.id !== id);
      _logger__WEBPACK_IMPORTED_MODULE_4__["default"].info("webauthn device ".concat(id, " removed successfully"));
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.webauthn-loading[data-v-15f8a53b] {\n\tdisplay: inline-block;\n\tvertical-align: sub;\n\tmargin-left: 2px;\n\tmargin-right: 2px;\n}\n.new-webauthn-device[data-v-15f8a53b] {\n\tline-height: 300%;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.webauthn-device[data-v-1b250cbc] {\n\tline-height: 300%;\n\tdisplay: flex;\n}\n.icon-webauthn-device[data-v-1b250cbc] {\n\tdisplay: inline-block;\n\tbackground-size: 100%;\n\tpadding: 3px;\n\tmargin: 3px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_style_index_0_id_15f8a53b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_style_index_0_id_15f8a53b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_style_index_0_id_15f8a53b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_id_1b250cbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_id_1b250cbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_id_1b250cbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/AddDevice.vue":
/*!*************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/AddDevice.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddDevice_vue_vue_type_template_id_15f8a53b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true& */ "./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true&");
/* harmony import */ var _AddDevice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDevice.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddDevice_vue_vue_type_style_index_0_id_15f8a53b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css& */ "./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddDevice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddDevice_vue_vue_type_template_id_15f8a53b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddDevice_vue_vue_type_template_id_15f8a53b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "15f8a53b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/WebAuthn/AddDevice.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/Device.vue":
/*!**********************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/Device.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Device_vue_vue_type_template_id_1b250cbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Device.vue?vue&type=template&id=1b250cbc&scoped=true& */ "./apps/settings/src/components/WebAuthn/Device.vue?vue&type=template&id=1b250cbc&scoped=true&");
/* harmony import */ var _Device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Device.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/WebAuthn/Device.vue?vue&type=script&lang=js&");
/* harmony import */ var _Device_vue_vue_type_style_index_0_id_1b250cbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css& */ "./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Device_vue_vue_type_template_id_1b250cbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Device_vue_vue_type_template_id_1b250cbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1b250cbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/WebAuthn/Device.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/Section.vue":
/*!***********************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/Section.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Section_vue_vue_type_template_id_47c82c6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section.vue?vue&type=template&id=47c82c6e&scoped=true& */ "./apps/settings/src/components/WebAuthn/Section.vue?vue&type=template&id=47c82c6e&scoped=true&");
/* harmony import */ var _Section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/WebAuthn/Section.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Section_vue_vue_type_template_id_47c82c6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Section_vue_vue_type_template_id_47c82c6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "47c82c6e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/WebAuthn/Section.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddDevice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/Device.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/Device.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Device.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/Section.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/Section.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Section.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Section.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_style_index_0_id_15f8a53b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=style&index=0&id=15f8a53b&scoped=true&lang=css&");


/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_style_index_0_id_1b250cbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=style&index=0&id=1b250cbc&scoped=true&lang=css&");


/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_template_id_15f8a53b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_template_id_15f8a53b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDevice_vue_vue_type_template_id_15f8a53b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/Device.vue?vue&type=template&id=1b250cbc&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/Device.vue?vue&type=template&id=1b250cbc&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_template_id_1b250cbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_template_id_1b250cbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Device_vue_vue_type_template_id_1b250cbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Device.vue?vue&type=template&id=1b250cbc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=template&id=1b250cbc&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/WebAuthn/Section.vue?vue&type=template&id=47c82c6e&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./apps/settings/src/components/WebAuthn/Section.vue?vue&type=template&id=47c82c6e&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_template_id_47c82c6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_template_id_47c82c6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_template_id_47c82c6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Section.vue?vue&type=template&id=47c82c6e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Section.vue?vue&type=template&id=47c82c6e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/AddDevice.vue?vue&type=template&id=15f8a53b&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return !_vm.isHttps && !_vm.isLocalhost
    ? _c("div", [
        _vm._v(
          "\n\t" +
            _vm._s(
              _vm.t(
                "settings",
                "Passwordless authentication requires a secure connection."
              )
            ) +
            "\n"
        )
      ])
    : _c("div", [
        _vm.step === _vm.RegistrationSteps.READY
          ? _c("div", [
              _c("button", { on: { click: _vm.start } }, [
                _vm._v(
                  "\n\t\t\t" +
                    _vm._s(_vm.t("settings", "Add WebAuthn device")) +
                    "\n\t\t"
                )
              ])
            ])
          : _vm.step === _vm.RegistrationSteps.REGISTRATION
          ? _c("div", { staticClass: "new-webauthn-device" }, [
              _c("span", {
                staticClass: "icon-loading-small webauthn-loading"
              }),
              _vm._v(
                "\n\t\t" +
                  _vm._s(
                    _vm.t("settings", "Please authorize your WebAuthn device.")
                  ) +
                  "\n\t"
              )
            ])
          : _vm.step === _vm.RegistrationSteps.NAMING
          ? _c("div", { staticClass: "new-webauthn-device" }, [
              _c("span", {
                staticClass: "icon-loading-small webauthn-loading"
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.name,
                    expression: "name"
                  }
                ],
                attrs: {
                  type: "text",
                  placeholder: _vm.t("settings", "Name your device")
                },
                domProps: { value: _vm.name },
                on: {
                  ":keyup": function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.submit.apply(null, arguments)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.name = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("button", { on: { click: _vm.submit } }, [
                _vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Add")) + "\n\t\t")
              ])
            ])
          : _vm.step === _vm.RegistrationSteps.PERSIST
          ? _c("div", { staticClass: "new-webauthn-device" }, [
              _c("span", {
                staticClass: "icon-loading-small webauthn-loading"
              }),
              _vm._v(
                "\n\t\t" +
                  _vm._s(_vm.t("settings", "Adding your device …")) +
                  "\n\t"
              )
            ])
          : _c("div", [
              _vm._v(
                "\n\t\tInvalid registration step. This should not have happened.\n\t"
              )
            ])
      ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=template&id=1b250cbc&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Device.vue?vue&type=template&id=1b250cbc&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "webauthn-device" },
    [
      _c("span", { staticClass: "icon-webauthn-device" }),
      _vm._v(
        "\n\t" +
          _vm._s(_vm.name || _vm.t("settings", "Unnamed device")) +
          "\n\t"
      ),
      _c(
        "Actions",
        { attrs: { "force-menu": true } },
        [
          _c(
            "ActionButton",
            {
              attrs: { icon: "icon-delete" },
              on: {
                click: function($event) {
                  return _vm.$emit("delete")
                }
              }
            },
            [
              _vm._v(
                "\n\t\t\t" + _vm._s(_vm.t("settings", "Delete")) + "\n\t\t"
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Section.vue?vue&type=template&id=47c82c6e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/WebAuthn/Section.vue?vue&type=template&id=47c82c6e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "section", attrs: { id: "security-webauthn" } },
    [
      _c("h2", [
        _vm._v(_vm._s(_vm.t("settings", "Passwordless Authentication")))
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "settings-hint hidden-when-empty" }, [
        _vm._v(
          "\n\t\t" +
            _vm._s(
              _vm.t(
                "settings",
                "Set up your account for passwordless authentication following the FIDO2 standard."
              )
            ) +
            "\n\t"
        )
      ]),
      _vm._v(" "),
      _vm.devices.length === 0
        ? _c("p", [
            _vm._v(
              "\n\t\t" +
                _vm._s(_vm.t("settings", "No devices configured.")) +
                "\n\t"
            )
          ])
        : _c("p", [
            _vm._v(
              "\n\t\t" +
                _vm._s(
                  _vm.t(
                    "settings",
                    "The following devices are configured for your account:"
                  )
                ) +
                "\n\t"
            )
          ]),
      _vm._v(" "),
      _vm._l(_vm.sortedDevices, function(device) {
        return _c("Device", {
          key: device.id,
          attrs: { name: device.name },
          on: {
            delete: function($event) {
              return _vm.deleteDevice(device.id)
            }
          }
        })
      }),
      _vm._v(" "),
      !_vm.hasPublicKeyCredential
        ? _c("p", { staticClass: "warning" }, [
            _vm._v(
              "\n\t\t" +
                _vm._s(
                  _vm.t("settings", "Your browser does not support WebAuthn.")
                ) +
                "\n\t"
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.hasPublicKeyCredential
        ? _c("AddDevice", {
            attrs: { "is-https": _vm.isHttps, "is-localhost": _vm.isLocalhost },
            on: { added: _vm.deviceAdded }
          })
        : _vm._e()
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
/******/ 			"settings-vue-settings-personal-webauthn": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/settings/src/main-personal-webauth.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=settings-vue-settings-personal-webauthn.js.map?v=243455599c95fb149857