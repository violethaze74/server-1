/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/settings/src/main-personal-security.js":
/*!*****************************************************!*\
  !*** ./apps/settings/src/main-personal-security.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-clipboard2 */ "./node_modules/vue-clipboard2/vue-clipboard.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_clipboard2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var v_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-tooltip */ "./node_modules/v-tooltip/dist/v-tooltip.esm.js");
/* harmony import */ var _components_AuthTokenSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AuthTokenSection */ "./apps/settings/src/components/AuthTokenSection.vue");
/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
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




 // eslint-disable-next-line camelcase

__webpack_require__.nc = btoa(OC.requestToken);
vue__WEBPACK_IMPORTED_MODULE_4__["default"].use((vue_clipboard2__WEBPACK_IMPORTED_MODULE_1___default()));
vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(v_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
  defaultHtml: false
});
vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.t = t;
const View = vue__WEBPACK_IMPORTED_MODULE_4__["default"].extend(_components_AuthTokenSection__WEBPACK_IMPORTED_MODULE_3__["default"]);
new View({
  propsData: {
    tokens: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'app_tokens'),
    canCreateToken: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'can_create_app_token')
  }
}).$mount('#security-authtokens');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthToken.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthToken.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/ncvuecomponents.js");
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // When using capture groups the following parts are extracted the first is used as the version number, the second as the OS

const userAgentMap = {
  ie: /(?:MSIE|Trident|Trident\/7.0; rv)[ :](\d+)/,
  // Microsoft Edge User Agent from https://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx
  edge: /^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[0-9.]+ \(KHTML, like Gecko\) Chrome\/[0-9.]+ (?:Mobile Safari|Safari)\/[0-9.]+ Edge\/[0-9.]+$/,
  // Firefox User Agent from https://developer.mozilla.org/en-US/docs/Web/HTTP/Gecko_user_agent_string_reference
  firefox: /^Mozilla\/5\.0 \([^)]*(Windows|OS X|Linux)[^)]+\) Gecko\/[0-9.]+ Firefox\/(\d+)(?:\.\d)?$/,
  // Chrome User Agent from https://developer.chrome.com/multidevice/user-agent
  chrome: /^Mozilla\/5\.0 \([^)]*(Windows|OS X|Linux)[^)]+\) AppleWebKit\/[0-9.]+ \(KHTML, like Gecko\) Chrome\/(\d+)[0-9.]+ (?:Mobile Safari|Safari)\/[0-9.]+$/,
  // Safari User Agent from http://www.useragentstring.com/pages/Safari/
  safari: /^Mozilla\/5\.0 \([^)]*(Windows|OS X)[^)]+\) AppleWebKit\/[0-9.]+ \(KHTML, like Gecko\)(?: Version\/([0-9]+)[0-9.]+)? Safari\/[0-9.A-Z]+$/,
  // Android Chrome user agent: https://developers.google.com/chrome/mobile/docs/user-agent
  androidChrome: /Android.*(?:; (.*) Build\/).*Chrome\/(\d+)[0-9.]+/,
  iphone: / *CPU +iPhone +OS +([0-9]+)_(?:[0-9_])+ +like +Mac +OS +X */,
  ipad: /\(iPad; *CPU +OS +([0-9]+)_(?:[0-9_])+ +like +Mac +OS +X */,
  iosClient: /^Mozilla\/5\.0 \(iOS\) (?:ownCloud|Nextcloud)-iOS.*$/,
  androidClient: /^Mozilla\/5\.0 \(Android\) ownCloud-android.*$/,
  iosTalkClient: /^Mozilla\/5\.0 \(iOS\) Nextcloud-Talk.*$/,
  androidTalkClient: /^Mozilla\/5\.0 \(Android\) Nextcloud-Talk.*$/,
  // DAVx5/3.3.8-beta2-gplay (2021/01/02; dav4jvm; okhttp/4.9.0) Android/10
  davx5: /DAV(?:droid|x5)\/([^ ]+)/,
  // Mozilla/5.0 (U; Linux; Maemo; Jolla; Sailfish; like Android 4.3) AppleWebKit/538.1 (KHTML, like Gecko) WebPirate/2.0 like Mobile Safari/538.1 (compatible)
  webPirate: /(Sailfish).*WebPirate\/(\d+)/,
  // Mozilla/5.0 (Maemo; Linux; U; Jolla; Sailfish; Mobile; rv:31.0) Gecko/31.0 Firefox/31.0 SailfishBrowser/1.0
  sailfishBrowser: /(Sailfish).*SailfishBrowser\/(\d+)/
};
const nameMap = {
  ie: t('setting', 'Internet Explorer'),
  edge: t('setting', 'Edge'),
  firefox: t('setting', 'Firefox'),
  chrome: t('setting', 'Google Chrome'),
  safari: t('setting', 'Safari'),
  androidChrome: t('setting', 'Google Chrome for Android'),
  iphone: t('setting', 'iPhone'),
  ipad: t('setting', 'iPad'),
  iosClient: t('setting', '{productName} iOS app', {
    productName: window.oc_defaults.productName
  }),
  androidClient: t('setting', '{productName} Android app', {
    productName: window.oc_defaults.productName
  }),
  iosTalkClient: t('setting', '{productName} Talk for iOS', {
    productName: window.oc_defaults.productName
  }),
  androidTalkClient: t('setting', '{productName} Talk for Android', {
    productName: window.oc_defaults.productName
  }),
  davx5: 'DAVx5',
  webPirate: 'WebPirate',
  sailfishBrowser: 'SailfishBrowser'
};
const iconMap = {
  ie: 'icon-desktop',
  edge: 'icon-desktop',
  firefox: 'icon-desktop',
  chrome: 'icon-desktop',
  safari: 'icon-desktop',
  androidChrome: 'icon-phone',
  iphone: 'icon-phone',
  ipad: 'icon-tablet',
  iosClient: 'icon-phone',
  androidClient: 'icon-phone',
  iosTalkClient: 'icon-phone',
  androidTalkClient: 'icon-phone',
  davx5: 'icon-phone',
  webPirate: 'icon-link',
  sailfishBrowser: 'icon-link'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AuthToken',
  components: {
    Actions: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.Actions,
    ActionButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.ActionButton,
    ActionCheckbox: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.ActionCheckbox
  },
  props: {
    token: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      showMore: this.token.canScope || this.token.canDelete,
      renaming: false,
      newName: '',
      actionOpen: false
    };
  },

  computed: {
    lastActivityRelative() {
      return OC.Util.relativeModifiedDate(this.token.lastActivity * 1000);
    },

    lastActivity() {
      return OC.Util.formatDate(this.token.lastActivity * 1000, 'LLL');
    },

    iconName() {
      // pretty format sync client user agent
      const matches = this.token.name.match(/Mozilla\/5\.0 \((\w+)\) (?:mirall|csyncoC)\/(\d+\.\d+\.\d+)/);
      let icon = '';

      if (matches) {
        /* eslint-disable-next-line */
        this.token.name = t('settings', 'Sync client - {os}', {
          os: matches[1],
          version: matches[2]
        });
        icon = 'icon-desktop';
      } // preserve title for cases where we format it further


      const title = this.token.name;
      let name = this.token.name;

      for (const client in userAgentMap) {
        const matches = title.match(userAgentMap[client]);

        if (matches) {
          if (matches[2] && matches[1]) {
            // version number and os
            name = nameMap[client] + ' ' + matches[2] + ' - ' + matches[1];
          } else if (matches[1]) {
            // only version number
            name = nameMap[client] + ' ' + matches[1];
          } else {
            name = nameMap[client];
          }

          icon = iconMap[client];
        }
      }

      if (this.token.current) {
        name = t('settings', 'This session');
      }

      return {
        icon,
        name
      };
    },

    wiping() {
      return this.token.type === 2;
    }

  },
  methods: {
    startRename() {
      // Close action (popover menu)
      this.actionOpen = false;
      this.newName = this.token.name;
      this.renaming = true;
      this.$nextTick(() => {
        this.$refs.input.select();
      });
    },

    cancelRename() {
      this.renaming = false;
    },

    revoke() {
      this.actionOpen = false;
      this.$emit('delete', this.token);
    },

    rename() {
      this.renaming = false;
      this.$emit('rename', this.token, this.newName);
    },

    wipe() {
      this.actionOpen = false;
      this.$emit('wipe', this.token);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthToken */ "./apps/settings/src/components/AuthToken.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AuthTokenList',
  components: {
    AuthToken: _AuthToken__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    tokens: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedTokens() {
      return this.tokens.slice().sort((t1, t2) => {
        const ts1 = parseInt(t1.lastActivity, 10);
        const ts2 = parseInt(t2.lastActivity, 10);
        return ts2 - ts1;
      });
    }

  },
  methods: {
    toggleScope(token, scope, value) {
      // Just pass it on
      this.$emit('toggle-scope', token, scope, value);
    },

    rename(token, newName) {
      // Just pass it on
      this.$emit('rename', token, newName);
    },

    onDelete(token) {
      // Just pass it on
      this.$emit('delete', token);
    },

    onWipe(token) {
      // Just pass it on
      this.$emit('wipe', token);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSection.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSection.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _AuthTokenList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthTokenList */ "./apps/settings/src/components/AuthTokenList.vue");
/* harmony import */ var _AuthTokenSetupDialogue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthTokenSetupDialogue */ "./apps/settings/src/components/AuthTokenSetupDialogue.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const confirm = () => {
  return new Promise(resolve => {
    OC.dialogs.confirm(t('settings', 'Do you really want to wipe your data from this device?'), t('settings', 'Confirm wipe'), resolve, true);
  });
};
/**
 * Tap into a promise without losing the value
 *
 * @param {Function} cb the callback
 * @return {any} val the value
 */


const tap = cb => val => {
  cb(val);
  return val;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AuthTokenSection',
  components: {
    AuthTokenSetupDialogue: _AuthTokenSetupDialogue__WEBPACK_IMPORTED_MODULE_4__["default"],
    AuthTokenList: _AuthTokenList__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    tokens: {
      type: Array,
      required: true
    },
    canCreateToken: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      baseUrl: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateUrl)('/settings/personal/authtokens')
    };
  },

  methods: {
    addNewToken(name) {
      console.debug('creating a new app token', name);
      const data = {
        name
      };
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(this.baseUrl, data).then(resp => resp.data).then(tap(() => console.debug('app token created'))) // eslint-disable-next-line vue/no-mutating-props
      .then(tap(data => this.tokens.push(data.deviceToken))).catch(err => {
        console.error.bind('could not create app password', err);
        OC.Notification.showTemporary(t('core', 'Error while creating device token'));
        throw err;
      });
    },

    toggleTokenScope(token, scope, value) {
      console.debug('updating app token scope', token.id, scope, value);
      const oldVal = token.scope[scope];
      token.scope[scope] = value;
      return this.updateToken(token).then(tap(() => console.debug('app token scope updated'))).catch(err => {
        console.error.bind('could not update app token scope', err);
        OC.Notification.showTemporary(t('core', 'Error while updating device token scope')); // Restore

        token.scope[scope] = oldVal;
        throw err;
      });
    },

    rename(token, newName) {
      console.debug('renaming app token', token.id, token.name, newName);
      const oldName = token.name;
      token.name = newName;
      return this.updateToken(token).then(tap(() => console.debug('app token name updated'))).catch(err => {
        console.error.bind('could not update app token name', err);
        OC.Notification.showTemporary(t('core', 'Error while updating device token name')); // Restore

        token.name = oldName;
      });
    },

    updateToken(token) {
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(this.baseUrl + '/' + token.id, token).then(resp => resp.data);
    },

    deleteToken(token) {
      console.debug('deleting app token', token); // eslint-disable-next-line vue/no-mutating-props

      this.tokens = this.tokens.filter(t => t !== token);
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](this.baseUrl + '/' + token.id).then(resp => resp.data).then(tap(() => console.debug('app token deleted'))).catch(err => {
        console.error.bind('could not delete app token', err);
        OC.Notification.showTemporary(t('core', 'Error while deleting the token')); // Restore
        // eslint-disable-next-line vue/no-mutating-props

        this.tokens.push(token);
      });
    },

    async wipeToken(token) {
      console.debug('wiping app token', token);

      try {
        await _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1___default()();

        if (!(await confirm())) {
          console.debug('wipe aborted by user');
          return;
        }

        await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(this.baseUrl + '/wipe/' + token.id);
        console.debug('app token marked for wipe');
        token.type = 2;
      } catch (err) {
        console.error('could not wipe app token', err);
        OC.Notification.showTemporary(t('core', 'Error while wiping the device with the token'));
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chenfengyuan_vue_qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chenfengyuan/vue-qrcode */ "./node_modules/@chenfengyuan/vue-qrcode/dist/vue-qrcode.js");
/* harmony import */ var _chenfengyuan_vue_qrcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chenfengyuan_vue_qrcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AuthTokenSetupDialogue',
  components: {
    QR: (_chenfengyuan_vue_qrcode__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    add: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      adding: false,
      loading: false,
      deviceName: '',
      appPassword: '',
      loginName: '',
      passwordCopied: false,
      showQR: false,
      qrUrl: '',
      hoveringCopyButton: false
    };
  },

  computed: {
    copyTooltipOptions() {
      const base = {
        hideOnTargetClick: false,
        trigger: 'manual'
      };

      if (this.passwordCopied) {
        return { ...base,
          content: t('core', 'Copied!'),
          show: true
        };
      } else {
        return { ...base,
          content: t('core', 'Copy'),
          show: this.hoveringCopyButton
        };
      }
    }

  },
  methods: {
    selectInput(e) {
      e.currentTarget.select();
    },

    submit() {
      _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1___default()().then(() => {
        this.loading = true;
        return this.add(this.deviceName);
      }).then(token => {
        this.adding = true;
        this.loginName = token.loginName;
        this.appPassword = token.token;
        const server = window.location.protocol + '//' + window.location.host + (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.getRootUrl)();
        this.qrUrl = "nc://login/user:".concat(token.loginName, "&password:").concat(token.token, "&server:").concat(server);
        this.$nextTick(() => {
          this.$refs.appPassword.select();
        });
      }).catch(err => {
        console.error('could not create a new app password', err);
        OC.Notification.showTemporary(t('core', 'Error while creating device token'));
        this.reset();
      });
    },

    onCopyPassword() {
      this.passwordCopied = true;
      this.$refs.clipboardButton.blur();
      setTimeout(() => {
        this.passwordCopied = false;
      }, 3000);
    },

    onCopyPasswordFailed() {
      OC.Notification.showTemporary(t('core', 'Could not copy app password. Please copy it manually.'));
    },

    reset() {
      this.adding = false;
      this.loading = false;
      this.showQR = false;
      this.qrUrl = '';
      this.deviceName = '';
      this.appPassword = '';
      this.loginName = '';
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthToken.vue?vue&type=style&index=0&id=1a411ac0&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthToken.vue?vue&type=style&index=0&id=1a411ac0&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".wiping[data-v-1a411ac0] {\n  background-color: var(--color-background-darker);\n}\ntd[data-v-1a411ac0] {\n  border-top: 1px solid var(--color-border);\n  max-width: 200px;\n  white-space: normal;\n  vertical-align: middle;\n  position: relative;\n}\ntd.client[data-v-1a411ac0], td.more[data-v-1a411ac0] {\n  overflow: visible;\n  position: relative;\n  width: 44px;\n  height: 44px;\n}\ntd.token-name[data-v-1a411ac0] {\n  padding: 10px 6px;\n}\ntd.token-name.token-rename[data-v-1a411ac0] {\n  padding: 0;\n}\ntd.token-name input[data-v-1a411ac0] {\n  width: 100%;\n  margin: 0;\n}\ntd.token-name .wiping-warning[data-v-1a411ac0] {\n  color: var(--color-text-lighter);\n}\ntd.more[data-v-1a411ac0] {\n  padding: 0 10px;\n}\ntd.client div[data-v-1a411ac0] {\n  opacity: 0.57;\n  width: 44px;\n  height: 44px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=0&id=04e85c7e&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=0&id=04e85c7e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "table[data-v-04e85c7e] {\n  width: 100%;\n  min-height: 50px;\n  padding-top: 5px;\n  max-width: 580px;\n}\ntable th[data-v-04e85c7e] {\n  opacity: 0.5;\n  padding: 10px 10px 10px 0;\n}\n.token-list td > a.icon-more[data-v-04e85c7e] {\n  transition: opacity var(--animation-quick);\n}\n.token-list a.icon-more[data-v-04e85c7e] {\n  padding: 14px;\n  display: block;\n  width: 44px;\n  height: 44px;\n  opacity: 0.5;\n}\n.token-list tr:hover td > a.icon[data-v-04e85c7e],\n.token-list tr td > a.icon[data-v-04e85c7e]:focus, .token-list tr.active td > a.icon[data-v-04e85c7e] {\n  opacity: 1;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=1&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=1&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#app-tokens-table tr > *:nth-child(2) {\n  padding-left: 6px;\n}\n#app-tokens-table tr > *:nth-child(3) {\n  text-align: right;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=style&index=0&id=69a2f445&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=style&index=0&id=69a2f445&lang=scss&scoped=true& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".app-password-row[data-v-69a2f445] {\n  display: table-row;\n}\n.app-password-row .icon[data-v-69a2f445] {\n  background-size: 16px 16px;\n  display: inline-block;\n  position: relative;\n  top: 3px;\n  margin-left: 5px;\n  margin-right: 8px;\n}\n.app-password-label[data-v-69a2f445] {\n  display: table-cell;\n  padding-right: 1em;\n  text-align: right;\n  vertical-align: middle;\n}\n.monospaced[data-v-69a2f445] {\n  width: 245px;\n  font-family: monospace;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthToken.vue?vue&type=style&index=0&id=1a411ac0&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthToken.vue?vue&type=style&index=0&id=1a411ac0&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthToken_vue_vue_type_style_index_0_id_1a411ac0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthToken.vue?vue&type=style&index=0&id=1a411ac0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthToken.vue?vue&type=style&index=0&id=1a411ac0&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthToken_vue_vue_type_style_index_0_id_1a411ac0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthToken_vue_vue_type_style_index_0_id_1a411ac0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=0&id=04e85c7e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=0&id=04e85c7e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenList_vue_vue_type_style_index_0_id_04e85c7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthTokenList.vue?vue&type=style&index=0&id=04e85c7e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=0&id=04e85c7e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenList_vue_vue_type_style_index_0_id_04e85c7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenList_vue_vue_type_style_index_0_id_04e85c7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=1&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=1&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenList_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthTokenList.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=1&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenList_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenList_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=style&index=0&id=69a2f445&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=style&index=0&id=69a2f445&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenSetupDialogue_vue_vue_type_style_index_0_id_69a2f445_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthTokenSetupDialogue.vue?vue&type=style&index=0&id=69a2f445&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=style&index=0&id=69a2f445&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenSetupDialogue_vue_vue_type_style_index_0_id_69a2f445_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenSetupDialogue_vue_vue_type_style_index_0_id_69a2f445_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./apps/settings/src/components/AuthToken.vue":
/*!****************************************************!*\
  !*** ./apps/settings/src/components/AuthToken.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthToken_vue_vue_type_template_id_1a411ac0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthToken.vue?vue&type=template&id=1a411ac0&scoped=true& */ "./apps/settings/src/components/AuthToken.vue?vue&type=template&id=1a411ac0&scoped=true&");
/* harmony import */ var _AuthToken_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthToken.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/AuthToken.vue?vue&type=script&lang=js&");
/* harmony import */ var _AuthToken_vue_vue_type_style_index_0_id_1a411ac0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthToken.vue?vue&type=style&index=0&id=1a411ac0&lang=scss&scoped=true& */ "./apps/settings/src/components/AuthToken.vue?vue&type=style&index=0&id=1a411ac0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuthToken_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthToken_vue_vue_type_template_id_1a411ac0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AuthToken_vue_vue_type_template_id_1a411ac0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1a411ac0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/AuthToken.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/AuthTokenList.vue":
/*!********************************************************!*\
  !*** ./apps/settings/src/components/AuthTokenList.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthTokenList_vue_vue_type_template_id_04e85c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthTokenList.vue?vue&type=template&id=04e85c7e&scoped=true& */ "./apps/settings/src/components/AuthTokenList.vue?vue&type=template&id=04e85c7e&scoped=true&");
/* harmony import */ var _AuthTokenList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthTokenList.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/AuthTokenList.vue?vue&type=script&lang=js&");
/* harmony import */ var _AuthTokenList_vue_vue_type_style_index_0_id_04e85c7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthTokenList.vue?vue&type=style&index=0&id=04e85c7e&lang=scss&scoped=true& */ "./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=0&id=04e85c7e&lang=scss&scoped=true&");
/* harmony import */ var _AuthTokenList_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthTokenList.vue?vue&type=style&index=1&lang=scss& */ "./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _AuthTokenList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthTokenList_vue_vue_type_template_id_04e85c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AuthTokenList_vue_vue_type_template_id_04e85c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "04e85c7e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/AuthTokenList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/AuthTokenSection.vue":
/*!***********************************************************!*\
  !*** ./apps/settings/src/components/AuthTokenSection.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthTokenSection_vue_vue_type_template_id_3d9b79b5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthTokenSection.vue?vue&type=template&id=3d9b79b5&scoped=true& */ "./apps/settings/src/components/AuthTokenSection.vue?vue&type=template&id=3d9b79b5&scoped=true&");
/* harmony import */ var _AuthTokenSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthTokenSection.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/AuthTokenSection.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthTokenSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthTokenSection_vue_vue_type_template_id_3d9b79b5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AuthTokenSection_vue_vue_type_template_id_3d9b79b5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3d9b79b5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/AuthTokenSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/AuthTokenSetupDialogue.vue":
/*!*****************************************************************!*\
  !*** ./apps/settings/src/components/AuthTokenSetupDialogue.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthTokenSetupDialogue_vue_vue_type_template_id_69a2f445_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthTokenSetupDialogue.vue?vue&type=template&id=69a2f445&scoped=true& */ "./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=template&id=69a2f445&scoped=true&");
/* harmony import */ var _AuthTokenSetupDialogue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthTokenSetupDialogue.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=script&lang=js&");
/* harmony import */ var _AuthTokenSetupDialogue_vue_vue_type_style_index_0_id_69a2f445_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthTokenSetupDialogue.vue?vue&type=style&index=0&id=69a2f445&lang=scss&scoped=true& */ "./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=style&index=0&id=69a2f445&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuthTokenSetupDialogue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthTokenSetupDialogue_vue_vue_type_template_id_69a2f445_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AuthTokenSetupDialogue_vue_vue_type_template_id_69a2f445_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "69a2f445",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/AuthTokenSetupDialogue.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/AuthToken.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./apps/settings/src/components/AuthToken.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthToken_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthToken.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthToken.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthToken_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/AuthTokenList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./apps/settings/src/components/AuthTokenList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthTokenList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/AuthTokenSection.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./apps/settings/src/components/AuthTokenSection.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthTokenSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenSetupDialogue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthTokenSetupDialogue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenSetupDialogue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/AuthToken.vue?vue&type=style&index=0&id=1a411ac0&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./apps/settings/src/components/AuthToken.vue?vue&type=style&index=0&id=1a411ac0&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthToken_vue_vue_type_style_index_0_id_1a411ac0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthToken.vue?vue&type=style&index=0&id=1a411ac0&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthToken.vue?vue&type=style&index=0&id=1a411ac0&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=0&id=04e85c7e&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=0&id=04e85c7e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenList_vue_vue_type_style_index_0_id_04e85c7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthTokenList.vue?vue&type=style&index=0&id=04e85c7e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=0&id=04e85c7e&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenList_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthTokenList.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=style&index=1&lang=scss&");


/***/ }),

/***/ "./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=style&index=0&id=69a2f445&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=style&index=0&id=69a2f445&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenSetupDialogue_vue_vue_type_style_index_0_id_69a2f445_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthTokenSetupDialogue.vue?vue&type=style&index=0&id=69a2f445&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=style&index=0&id=69a2f445&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/AuthToken.vue?vue&type=template&id=1a411ac0&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./apps/settings/src/components/AuthToken.vue?vue&type=template&id=1a411ac0&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthToken_vue_vue_type_template_id_1a411ac0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthToken_vue_vue_type_template_id_1a411ac0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthToken_vue_vue_type_template_id_1a411ac0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthToken.vue?vue&type=template&id=1a411ac0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthToken.vue?vue&type=template&id=1a411ac0&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/AuthTokenList.vue?vue&type=template&id=04e85c7e&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./apps/settings/src/components/AuthTokenList.vue?vue&type=template&id=04e85c7e&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenList_vue_vue_type_template_id_04e85c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenList_vue_vue_type_template_id_04e85c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenList_vue_vue_type_template_id_04e85c7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthTokenList.vue?vue&type=template&id=04e85c7e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=template&id=04e85c7e&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/AuthTokenSection.vue?vue&type=template&id=3d9b79b5&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./apps/settings/src/components/AuthTokenSection.vue?vue&type=template&id=3d9b79b5&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenSection_vue_vue_type_template_id_3d9b79b5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenSection_vue_vue_type_template_id_3d9b79b5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenSection_vue_vue_type_template_id_3d9b79b5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthTokenSection.vue?vue&type=template&id=3d9b79b5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSection.vue?vue&type=template&id=3d9b79b5&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=template&id=69a2f445&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=template&id=69a2f445&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenSetupDialogue_vue_vue_type_template_id_69a2f445_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenSetupDialogue_vue_vue_type_template_id_69a2f445_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthTokenSetupDialogue_vue_vue_type_template_id_69a2f445_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthTokenSetupDialogue.vue?vue&type=template&id=69a2f445&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=template&id=69a2f445&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthToken.vue?vue&type=template&id=1a411ac0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthToken.vue?vue&type=template&id=1a411ac0&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("tr", { class: _vm.wiping, attrs: { "data-id": _vm.token.id } }, [
    _c("td", { staticClass: "client" }, [
      _c("div", { class: _vm.iconName.icon })
    ]),
    _vm._v(" "),
    _c("td", { staticClass: "token-name" }, [
      _vm.token.canRename && _vm.renaming
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newName,
                expression: "newName"
              }
            ],
            ref: "input",
            attrs: { type: "text" },
            domProps: { value: _vm.newName },
            on: {
              keyup: [
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.rename.apply(null, arguments)
                },
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "esc", 27, $event.key, [
                      "Esc",
                      "Escape"
                    ])
                  ) {
                    return null
                  }
                  return _vm.cancelRename.apply(null, arguments)
                }
              ],
              blur: _vm.cancelRename,
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.newName = $event.target.value
              }
            }
          })
        : _c("span", [_vm._v(_vm._s(_vm.iconName.name))]),
      _vm._v(" "),
      _vm.wiping
        ? _c("span", { staticClass: "wiping-warning" }, [
            _vm._v(
              "(" + _vm._s(_vm.t("settings", "Marked for remote wipe")) + ")"
            )
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("td", [
      _c(
        "span",
        {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip",
              value: _vm.lastActivity,
              expression: "lastActivity"
            }
          ],
          staticClass: "last-activity"
        },
        [_vm._v(_vm._s(_vm.lastActivityRelative))]
      )
    ]),
    _vm._v(" "),
    _c(
      "td",
      { staticClass: "more" },
      [
        !_vm.token.current
          ? _c(
              "Actions",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip.auto",
                    value: {
                      content: _vm.t("settings", "Device settings"),
                      container: "body"
                    },
                    expression:
                      "{\n\t\t\t\tcontent: t('settings', 'Device settings'),\n\t\t\t\tcontainer: 'body'\n\t\t\t}",
                    modifiers: { auto: true }
                  }
                ],
                attrs: { open: _vm.actionOpen },
                on: {
                  "update:open": function($event) {
                    _vm.actionOpen = $event
                  }
                }
              },
              [
                _vm.token.type === 1
                  ? _c(
                      "ActionCheckbox",
                      {
                        attrs: { checked: _vm.token.scope.filesystem },
                        on: {
                          change: function($event) {
                            $event.stopPropagation()
                            $event.preventDefault()
                            return _vm.$emit(
                              "toggle-scope",
                              _vm.token,
                              "filesystem",
                              !_vm.token.scope.filesystem
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t" +
                            _vm._s(
                              _vm.t("settings", "Allow filesystem access")
                            ) +
                            "\n\t\t\t"
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.token.canRename
                  ? _c(
                      "ActionButton",
                      {
                        attrs: { icon: "icon-rename" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            $event.preventDefault()
                            return _vm.startRename.apply(null, arguments)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t" +
                            _vm._s(_vm.t("settings", "Rename")) +
                            "\n\t\t\t"
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.token.canDelete
                  ? [
                      _vm.token.type !== 2
                        ? [
                            _c(
                              "ActionButton",
                              {
                                attrs: { icon: "icon-delete" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    $event.preventDefault()
                                    return _vm.revoke.apply(null, arguments)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t" +
                                    _vm._s(_vm.t("settings", "Revoke")) +
                                    "\n\t\t\t\t\t"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "ActionButton",
                              {
                                attrs: { icon: "icon-delete" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    $event.preventDefault()
                                    return _vm.wipe.apply(null, arguments)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t" +
                                    _vm._s(_vm.t("settings", "Wipe device")) +
                                    "\n\t\t\t\t\t"
                                )
                              ]
                            )
                          ]
                        : _vm.token.type === 2
                        ? _c(
                            "ActionButton",
                            {
                              attrs: {
                                icon: "icon-delete",
                                title: _vm.t("settings", "Revoke")
                              },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  $event.preventDefault()
                                  return _vm.revoke.apply(null, arguments)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.t(
                                      "settings",
                                      "Revoking this token might prevent the wiping of your device if it hasn't started the wipe yet."
                                    )
                                  ) +
                                  "\n\t\t\t\t"
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  : _vm._e()
              ],
              2
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=template&id=04e85c7e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenList.vue?vue&type=template&id=04e85c7e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("table", { attrs: { id: "app-tokens-table" } }, [
    _vm.tokens.length
      ? _c("thead", [
          _c("tr", [
            _c("th"),
            _vm._v(" "),
            _c("th", [_vm._v(_vm._s(_vm.t("settings", "Device")))]),
            _vm._v(" "),
            _c("th", [_vm._v(_vm._s(_vm.t("settings", "Last activity")))]),
            _vm._v(" "),
            _c("th")
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "tbody",
      { staticClass: "token-list" },
      _vm._l(_vm.sortedTokens, function(token) {
        return _c("AuthToken", {
          key: token.id,
          attrs: { token: token },
          on: {
            toggleScope: _vm.toggleScope,
            rename: _vm.rename,
            delete: _vm.onDelete,
            wipe: _vm.onWipe
          }
        })
      }),
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSection.vue?vue&type=template&id=3d9b79b5&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSection.vue?vue&type=template&id=3d9b79b5&scoped=true& ***!
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
    { staticClass: "section", attrs: { id: "security" } },
    [
      _c("h2", [
        _vm._v(
          _vm._s(
            _vm.t("settings", "Devices & sessions", {}, undefined, {
              sanitize: false
            })
          )
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "settings-hint hidden-when-empty" }, [
        _vm._v(
          "\n\t\t" +
            _vm._s(
              _vm.t(
                "settings",
                "Web, desktop and mobile clients currently logged in to your account."
              )
            ) +
            "\n\t"
        )
      ]),
      _vm._v(" "),
      _c("AuthTokenList", {
        attrs: { tokens: _vm.tokens },
        on: {
          toggleScope: _vm.toggleTokenScope,
          rename: _vm.rename,
          delete: _vm.deleteToken,
          wipe: _vm.wipeToken
        }
      }),
      _vm._v(" "),
      _vm.canCreateToken
        ? _c("AuthTokenSetupDialogue", { attrs: { add: _vm.addNewToken } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=template&id=69a2f445&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/AuthTokenSetupDialogue.vue?vue&type=template&id=69a2f445&scoped=true& ***!
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
  return !_vm.adding
    ? _c("div", [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.deviceName,
              expression: "deviceName"
            }
          ],
          attrs: {
            type: "text",
            disabled: _vm.loading,
            placeholder: _vm.t("settings", "App name")
          },
          domProps: { value: _vm.deviceName },
          on: {
            keydown: function($event) {
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
              _vm.deviceName = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "button",
            attrs: { disabled: _vm.loading },
            on: { click: _vm.submit }
          },
          [
            _vm._v(
              "\n\t\t" +
                _vm._s(_vm.t("settings", "Create new app password")) +
                "\n\t"
            )
          ]
        )
      ])
    : _c("div", [
        _vm._v(
          "\n\t" +
            _vm._s(
              _vm.t(
                "settings",
                "Use the credentials below to configure your app or device."
              )
            ) +
            "\n\t" +
            _vm._s(
              _vm.t(
                "settings",
                "For security reasons this password will only be shown once."
              )
            ) +
            "\n\t"
        ),
        _c("div", { staticClass: "app-password-row" }, [
          _c("span", { staticClass: "app-password-label" }, [
            _vm._v(_vm._s(_vm.t("settings", "Username")))
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "monospaced",
            attrs: { type: "text", readonly: "readonly" },
            domProps: { value: _vm.loginName },
            on: { focus: _vm.selectInput }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "app-password-row" }, [
          _c("span", { staticClass: "app-password-label" }, [
            _vm._v(_vm._s(_vm.t("settings", "Password")))
          ]),
          _vm._v(" "),
          _c("input", {
            ref: "appPassword",
            staticClass: "monospaced",
            attrs: { type: "text", readonly: "readonly" },
            domProps: { value: _vm.appPassword },
            on: { focus: _vm.selectInput }
          }),
          _vm._v(" "),
          _c("a", {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: _vm.copyTooltipOptions,
                expression: "copyTooltipOptions"
              },
              {
                name: "clipboard",
                rawName: "v-clipboard:copy",
                value: _vm.appPassword,
                expression: "appPassword",
                arg: "copy"
              },
              {
                name: "clipboard",
                rawName: "v-clipboard:success",
                value: _vm.onCopyPassword,
                expression: "onCopyPassword",
                arg: "success"
              },
              {
                name: "clipboard",
                rawName: "v-clipboard:error",
                value: _vm.onCopyPasswordFailed,
                expression: "onCopyPasswordFailed",
                arg: "error"
              }
            ],
            ref: "clipboardButton",
            staticClass: "icon icon-clippy",
            on: {
              mouseover: function($event) {
                _vm.hoveringCopyButton = true
              },
              mouseleave: function($event) {
                _vm.hoveringCopyButton = false
              }
            }
          }),
          _vm._v(" "),
          _c("button", { staticClass: "button", on: { click: _vm.reset } }, [
            _vm._v("\n\t\t\t" + _vm._s(_vm.t("settings", "Done")) + "\n\t\t")
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "app-password-row" },
          [
            _c("span", { staticClass: "app-password-label" }),
            _vm._v(" "),
            !_vm.showQR
              ? _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        _vm.showQR = true
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n\t\t\t" +
                        _vm._s(
                          _vm.t("settings", "Show QR code for mobile apps")
                        ) +
                        "\n\t\t"
                    )
                  ]
                )
              : _c("QR", { attrs: { value: _vm.qrUrl } })
          ],
          1
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
/******/ 			"settings-vue-settings-personal-security": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/settings/src/main-personal-security.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=settings-vue-settings-personal-security.js.map?v=ecb42f320e76507c88db