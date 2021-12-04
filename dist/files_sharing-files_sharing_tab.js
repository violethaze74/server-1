/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/files_sharing/src/files_sharing_tab.js":
/*!*****************************************************!*\
  !*** ./apps/files_sharing/src/files_sharing_tab.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-clipboard2 */ "./node_modules/vue-clipboard2/vue-clipboard.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_clipboard2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.js");
/* harmony import */ var _views_SharingTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/SharingTab */ "./apps/files_sharing/src/views/SharingTab.vue");
/* harmony import */ var _services_ShareSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/ShareSearch */ "./apps/files_sharing/src/services/ShareSearch.js");
/* harmony import */ var _services_ExternalLinkActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/ExternalLinkActions */ "./apps/files_sharing/src/services/ExternalLinkActions.js");
/* harmony import */ var _services_ExternalShareActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/ExternalShareActions */ "./apps/files_sharing/src/services/ExternalShareActions.js");
/* harmony import */ var _services_TabSections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/TabSections */ "./apps/files_sharing/src/services/TabSections.js");
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
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







 // Init Sharing Tab Service

if (!window.OCA.Sharing) {
  window.OCA.Sharing = {};
}

Object.assign(window.OCA.Sharing, {
  ShareSearch: new _services_ShareSearch__WEBPACK_IMPORTED_MODULE_3__["default"]()
});
Object.assign(window.OCA.Sharing, {
  ExternalLinkActions: new _services_ExternalLinkActions__WEBPACK_IMPORTED_MODULE_4__["default"]()
});
Object.assign(window.OCA.Sharing, {
  ExternalShareActions: new _services_ExternalShareActions__WEBPACK_IMPORTED_MODULE_5__["default"]()
});
Object.assign(window.OCA.Sharing, {
  ShareTabSections: new _services_TabSections__WEBPACK_IMPORTED_MODULE_6__["default"]()
});
vue__WEBPACK_IMPORTED_MODULE_7__["default"].prototype.t = _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate;
vue__WEBPACK_IMPORTED_MODULE_7__["default"].prototype.n = _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translatePlural;
vue__WEBPACK_IMPORTED_MODULE_7__["default"].use((vue_clipboard2__WEBPACK_IMPORTED_MODULE_0___default())); // Init Sharing tab component

const View = vue__WEBPACK_IMPORTED_MODULE_7__["default"].extend(_views_SharingTab__WEBPACK_IMPORTED_MODULE_2__["default"]);
let TabInstance = null;
window.addEventListener('DOMContentLoaded', function () {
  if (OCA.Files && OCA.Files.Sidebar) {
    OCA.Files.Sidebar.registerTab(new OCA.Files.Sidebar.Tab({
      id: 'sharing',
      name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files_sharing', 'Sharing'),
      icon: 'icon-share',

      async mount(el, fileInfo, context) {
        if (TabInstance) {
          TabInstance.$destroy();
        }

        TabInstance = new View({
          // Better integration with vue parent component
          parent: context
        }); // Only mount after we have all the info we need

        await TabInstance.update(fileInfo);
        TabInstance.$mount(el);
      },

      update(fileInfo) {
        TabInstance.update(fileInfo);
      },

      destroy() {
        TabInstance.$destroy();
        TabInstance = null;
      }

    }));
  }
});

/***/ }),

/***/ "./apps/files_sharing/src/mixins/ShareRequests.js":
/*!********************************************************!*\
  !*** ./apps/files_sharing/src/mixins/ShareRequests.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-search-params-polyfill */ "./node_modules/url-search-params-polyfill/index.js");
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _models_Share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Share */ "./apps/files_sharing/src/models/Share.js");
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Joas Schilling <coding@schilljs.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
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
// TODO: remove when ie not supported




const shareUrl = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_sharing/api/v1/shares');
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    /**
     * Create a new share
     *
     * @param {object} data destructuring object
     * @param {string} data.path  path to the file/folder which should be shared
     * @param {number} data.shareType  0 = user; 1 = group; 3 = public link; 6 = federated cloud share
     * @param {string} data.shareWith  user/group id with which the file should be shared (optional for shareType > 1)
     * @param {boolean} [data.publicUpload=false]  allow public upload to a public shared folder
     * @param {string} [data.password]  password to protect public link Share with
     * @param {number} [data.permissions=31]  1 = read; 2 = update; 4 = create; 8 = delete; 16 = share; 31 = all (default: 31, for public shares: 1)
     * @param {boolean} [data.sendPasswordByTalk=false] send the password via a talk conversation
     * @param {string} [data.expireDate=''] expire the shareautomatically after
     * @param {string} [data.label=''] custom label
     * @return {Share} the new share
     * @throws {Error}
     */
    async createShare(_ref) {
      let {
        path,
        permissions,
        shareType,
        shareWith,
        publicUpload,
        password,
        sendPasswordByTalk,
        expireDate,
        label
      } = _ref;

      try {
        var _request$data;

        const request = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(shareUrl, {
          path,
          permissions,
          shareType,
          shareWith,
          publicUpload,
          password,
          sendPasswordByTalk,
          expireDate,
          label
        });

        if (!(request !== null && request !== void 0 && (_request$data = request.data) !== null && _request$data !== void 0 && _request$data.ocs)) {
          throw request;
        }

        return new _models_Share__WEBPACK_IMPORTED_MODULE_3__["default"](request.data.ocs.data);
      } catch (error) {
        var _error$response, _error$response$data, _error$response$data$, _error$response$data$2;

        console.error('Error while creating share', error);
        const errorMessage = error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : (_error$response$data$ = _error$response$data.ocs) === null || _error$response$data$ === void 0 ? void 0 : (_error$response$data$2 = _error$response$data$.meta) === null || _error$response$data$2 === void 0 ? void 0 : _error$response$data$2.message;
        OC.Notification.showTemporary(errorMessage ? t('files_sharing', 'Error creating the share: {errorMessage}', {
          errorMessage
        }) : t('files_sharing', 'Error creating the share'), {
          type: 'error'
        });
        throw error;
      }
    },

    /**
     * Delete a share
     *
     * @param {number} id share id
     * @throws {Error}
     */
    async deleteShare(id) {
      try {
        var _request$data2;

        const request = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](shareUrl + "/".concat(id));

        if (!(request !== null && request !== void 0 && (_request$data2 = request.data) !== null && _request$data2 !== void 0 && _request$data2.ocs)) {
          throw request;
        }

        return true;
      } catch (error) {
        var _error$response2, _error$response2$data, _error$response2$data2, _error$response2$data3;

        console.error('Error while deleting share', error);
        const errorMessage = error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : (_error$response2$data2 = _error$response2$data.ocs) === null || _error$response2$data2 === void 0 ? void 0 : (_error$response2$data3 = _error$response2$data2.meta) === null || _error$response2$data3 === void 0 ? void 0 : _error$response2$data3.message;
        OC.Notification.showTemporary(errorMessage ? t('files_sharing', 'Error deleting the share: {errorMessage}', {
          errorMessage
        }) : t('files_sharing', 'Error deleting the share'), {
          type: 'error'
        });
        throw error;
      }
    },

    /**
     * Update a share
     *
     * @param {number} id share id
     * @param {object} properties key-value object of the properties to update
     */
    async updateShare(id, properties) {
      try {
        var _request$data3;

        const request = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].put(shareUrl + "/".concat(id), properties, headers);

        if (!(request !== null && request !== void 0 && (_request$data3 = request.data) !== null && _request$data3 !== void 0 && _request$data3.ocs)) {
          throw request;
        }

        return true;
      } catch (error) {
        console.error('Error while updating share', error);

        if (error.response.status !== 400) {
          var _error$response3, _error$response3$data, _error$response3$data2, _error$response3$data3;

          const errorMessage = error === null || error === void 0 ? void 0 : (_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : (_error$response3$data = _error$response3.data) === null || _error$response3$data === void 0 ? void 0 : (_error$response3$data2 = _error$response3$data.ocs) === null || _error$response3$data2 === void 0 ? void 0 : (_error$response3$data3 = _error$response3$data2.meta) === null || _error$response3$data3 === void 0 ? void 0 : _error$response3$data3.message;
          OC.Notification.showTemporary(errorMessage ? t('files_sharing', 'Error updating the share: {errorMessage}', {
            errorMessage
          }) : t('files_sharing', 'Error updating the share'), {
            type: 'error'
          });
        }

        const message = error.response.data.ocs.meta.message;
        throw new Error(message);
      }
    }

  }
});

/***/ }),

/***/ "./apps/files_sharing/src/mixins/ShareTypes.js":
/*!*****************************************************!*\
  !*** ./apps/files_sharing/src/mixins/ShareTypes.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data() {
    return {
      SHARE_TYPES: {
        SHARE_TYPE_USER: OC.Share.SHARE_TYPE_USER,
        SHARE_TYPE_GROUP: OC.Share.SHARE_TYPE_GROUP,
        SHARE_TYPE_LINK: OC.Share.SHARE_TYPE_LINK,
        SHARE_TYPE_EMAIL: OC.Share.SHARE_TYPE_EMAIL,
        SHARE_TYPE_REMOTE: OC.Share.SHARE_TYPE_REMOTE,
        SHARE_TYPE_CIRCLE: OC.Share.SHARE_TYPE_CIRCLE,
        SHARE_TYPE_GUEST: OC.Share.SHARE_TYPE_GUEST,
        SHARE_TYPE_DECK: OC.Share.SHARE_TYPE_DECK,
        SHARE_TYPE_REMOTE_GROUP: OC.Share.SHARE_TYPE_REMOTE_GROUP,
        SHARE_TYPE_ROOM: OC.Share.SHARE_TYPE_ROOM
      }
    };
  }

});

/***/ }),

/***/ "./apps/files_sharing/src/mixins/SharesMixin.js":
/*!******************************************************!*\
  !*** ./apps/files_sharing/src/mixins/SharesMixin.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p-queue */ "./node_modules/p-queue/dist/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Share */ "./apps/files_sharing/src/models/Share.js");
/* harmony import */ var _ShareRequests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShareRequests */ "./apps/files_sharing/src/mixins/ShareRequests.js");
/* harmony import */ var _ShareTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShareTypes */ "./apps/files_sharing/src/mixins/ShareTypes.js");
/* harmony import */ var _services_ConfigService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ConfigService */ "./apps/files_sharing/src/services/ConfigService.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author Daniel Calviño Sánchez <danxuliu@gmail.com>
 *
 * @author Gary Kim <gary@garykim.dev>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @author Vincent Petry <vincent@nextcloud.com>
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







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_ShareRequests__WEBPACK_IMPORTED_MODULE_3__["default"], _ShareTypes__WEBPACK_IMPORTED_MODULE_4__["default"]],
  props: {
    fileInfo: {
      type: Object,
      default: () => {},
      required: true
    },
    share: {
      type: _models_Share__WEBPACK_IMPORTED_MODULE_2__["default"],
      default: null
    },
    isUnique: {
      type: Boolean,
      default: true
    }
  },

  data() {
    var _this$share;

    return {
      config: new _services_ConfigService__WEBPACK_IMPORTED_MODULE_5__["default"](),
      // errors helpers
      errors: {},
      // component status toggles
      loading: false,
      saving: false,
      open: false,
      // concurrency management queue
      // we want one queue per share
      updateQueue: new p_queue__WEBPACK_IMPORTED_MODULE_0__["default"]({
        concurrency: 1
      }),

      /**
       * ! This allow vue to make the Share class state reactive
       * ! do not remove it ot you'll lose all reactivity here
       */
      reactiveState: (_this$share = this.share) === null || _this$share === void 0 ? void 0 : _this$share.state,
      SHARE_TYPES: {
        SHARE_TYPE_USER: OC.Share.SHARE_TYPE_USER,
        SHARE_TYPE_GROUP: OC.Share.SHARE_TYPE_GROUP,
        SHARE_TYPE_LINK: OC.Share.SHARE_TYPE_LINK,
        SHARE_TYPE_EMAIL: OC.Share.SHARE_TYPE_EMAIL,
        SHARE_TYPE_REMOTE: OC.Share.SHARE_TYPE_REMOTE,
        SHARE_TYPE_CIRCLE: OC.Share.SHARE_TYPE_CIRCLE,
        SHARE_TYPE_GUEST: OC.Share.SHARE_TYPE_GUEST,
        SHARE_TYPE_REMOTE_GROUP: OC.Share.SHARE_TYPE_REMOTE_GROUP,
        SHARE_TYPE_ROOM: OC.Share.SHARE_TYPE_ROOM
      }
    };
  },

  computed: {
    /**
     * Does the current share have a note
     *
     * @return {boolean}
     */
    hasNote: {
      get() {
        return this.share.note !== '';
      },

      set(enabled) {
        this.share.note = enabled ? null // enabled but user did not changed the content yet
        : ''; // empty = no note = disabled
      }

    },

    dateTomorrow() {
      return moment().add(1, 'days');
    },

    /**
     * Datepicker lang values
     * https://github.com/nextcloud/nextcloud-vue/pull/146
     * TODO: have this in vue-components
     *
     * @return {int}
     */
    firstDay() {
      return window.firstDay ? window.firstDay : 0; // sunday as default
    },

    lang() {
      // fallback to default in case of unavailable data
      return {
        days: window.dayNamesShort ? window.dayNamesShort // provided by nextcloud
        : ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
        months: window.monthNamesShort ? window.monthNamesShort // provided by nextcloud
        : ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
        placeholder: {
          date: 'Select Date' // TODO: Translate

        }
      };
    },

    isShareOwner() {
      return this.share && this.share.owner === (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_6__.getCurrentUser)().uid;
    }

  },
  methods: {
    /**
     * Check if a share is valid before
     * firing the request
     *
     * @param {Share} share the share to check
     * @return {boolean}
     */
    checkShare(share) {
      if (share.password) {
        if (typeof share.password !== 'string' || share.password.trim() === '') {
          return false;
        }
      }

      if (share.expirationDate) {
        const date = moment(share.expirationDate);

        if (!date.isValid()) {
          return false;
        }
      }

      return true;
    },

    /**
     * ActionInput can be a little tricky to work with.
     * Since we expect a string and not a Date,
     * we need to process the value here
     *
     * @param {Date} date js date to be parsed by moment.js
     */
    onExpirationChange(date) {
      // format to YYYY-MM-DD
      const value = moment(date).format('YYYY-MM-DD');
      this.share.expireDate = value;
      this.queueUpdate('expireDate');
    },

    /**
     * Uncheck expire date
     * We need this method because @update:checked
     * is ran simultaneously as @uncheck, so
     * so we cannot ensure data is up-to-date
     */
    onExpirationDisable() {
      this.share.expireDate = '';
      this.queueUpdate('expireDate');
    },

    /**
     * Note changed, let's save it to a different key
     *
     * @param {string} note the share note
     */
    onNoteChange(note) {
      this.$set(this.share, 'newNote', note.trim());
    },

    /**
     * When the note change, we trim, save and dispatch
     *
     * @param {string} note the note
     */
    onNoteSubmit() {
      if (this.share.newNote) {
        this.share.note = this.share.newNote;
        this.$delete(this.share, 'newNote');
        this.queueUpdate('note');
      }
    },

    /**
     * Delete share button handler
     */
    async onDelete() {
      try {
        this.loading = true;
        this.open = false;
        await this.deleteShare(this.share.id);
        console.debug('Share deleted', this.share.id);
        this.$emit('remove:share', this.share);
      } catch (error) {
        // re-open menu if error
        this.open = true;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Send an update of the share to the queue
     *
     * @param {string} propertyNames the properties to sync
     */
    queueUpdate() {
      for (var _len = arguments.length, propertyNames = new Array(_len), _key = 0; _key < _len; _key++) {
        propertyNames[_key] = arguments[_key];
      }

      if (propertyNames.length === 0) {
        // Nothing to update
        return;
      }

      if (this.share.id) {
        const properties = {}; // force value to string because that is what our
        // share api controller accepts

        propertyNames.map(p => properties[p] = this.share[p].toString());
        this.updateQueue.add(async () => {
          this.saving = true;
          this.errors = {};

          try {
            await this.updateShare(this.share.id, properties);

            if (propertyNames.indexOf('password') >= 0) {
              // reset password state after sync
              this.$delete(this.share, 'newPassword');
            } // clear any previous errors


            this.$delete(this.errors, propertyNames[0]);
          } catch ({
            message
          }) {
            if (message && message !== '') {
              this.onSyncError(propertyNames[0], message);
            }
          } finally {
            this.saving = false;
          }
        });
      } else {
        console.error('Cannot update share.', this.share, 'No valid id');
      }
    },

    /**
     * Manage sync errors
     *
     * @param {string} property the errored property, e.g. 'password'
     * @param {string} message the error message
     */
    onSyncError(property, message) {
      // re-open menu if closed
      this.open = true;

      switch (property) {
        case 'password':
        case 'pending':
        case 'expireDate':
        case 'label':
        case 'note':
          {
            // show error
            this.$set(this.errors, property, message);
            let propertyEl = this.$refs[property];

            if (propertyEl) {
              if (propertyEl.$el) {
                propertyEl = propertyEl.$el;
              } // focus if there is a focusable action element


              const focusable = propertyEl.querySelector('.focusable');

              if (focusable) {
                focusable.focus();
              }
            }

            break;
          }

        case 'sendPasswordByTalk':
          {
            // show error
            this.$set(this.errors, property, message); // Restore previous state

            this.share.sendPasswordByTalk = !this.share.sendPasswordByTalk;
            break;
          }
      }
    },

    /**
     * Debounce queueUpdate to avoid requests spamming
     * more importantly for text data
     *
     * @param {string} property the property to sync
     */
    debounceQueueUpdate: debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (property) {
      this.queueUpdate(property);
    }, 500),

    /**
     * Returns which dates are disabled for the datepicker
     *
     * @param {Date} date date to check
     * @return {boolean}
     */
    disabledDate(date) {
      const dateMoment = moment(date);
      return this.dateTomorrow && dateMoment.isBefore(this.dateTomorrow, 'day') || this.dateMaxEnforced && dateMoment.isSameOrAfter(this.dateMaxEnforced, 'day');
    }

  }
});

/***/ }),

/***/ "./apps/files_sharing/src/models/Share.js":
/*!************************************************!*\
  !*** ./apps/files_sharing/src/models/Share.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Share)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Daniel Calviño Sánchez <danxuliu@gmail.com>
 * @author Gary Kim <gary@garykim.dev>
 * @author Georg Ehrke <oc.list@georgehrke.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
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
class Share {
  /**
   * Create the share object
   *
   * @param {object} ocsData ocs request response
   */
  constructor(ocsData) {
    _defineProperty(this, "_share", void 0);

    if (ocsData.ocs && ocsData.ocs.data && ocsData.ocs.data[0]) {
      ocsData = ocsData.ocs.data[0];
    } // convert int into boolean


    ocsData.hide_download = !!ocsData.hide_download;
    ocsData.mail_send = !!ocsData.mail_send; // store state

    this._share = ocsData;
  }
  /**
   * Get the share state
   * ! used for reactivity purpose
   * Do not remove. It allow vuejs to
   * inject its watchers into the #share
   * state and make the whole class reactive
   *
   * @return {object} the share raw state
   * @readonly
   * @memberof Sidebar
   */


  get state() {
    return this._share;
  }
  /**
   * get the share id
   *
   * @return {int}
   * @readonly
   * @memberof Share
   */


  get id() {
    return this._share.id;
  }
  /**
   * Get the share type
   *
   * @return {int}
   * @readonly
   * @memberof Share
   */


  get type() {
    return this._share.share_type;
  }
  /**
   * Get the share permissions
   * See OC.PERMISSION_* variables
   *
   * @return {int}
   * @readonly
   * @memberof Share
   */


  get permissions() {
    return this._share.permissions;
  }
  /**
   * Set the share permissions
   * See OC.PERMISSION_* variables
   *
   * @param {int} permissions valid permission, See OC.PERMISSION_* variables
   * @memberof Share
   */


  set permissions(permissions) {
    this._share.permissions = permissions;
  } // SHARE OWNER --------------------------------------------------

  /**
   * Get the share owner uid
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get owner() {
    return this._share.uid_owner;
  }
  /**
   * Get the share owner's display name
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get ownerDisplayName() {
    return this._share.displayname_owner;
  } // SHARED WITH --------------------------------------------------

  /**
   * Get the share with entity uid
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get shareWith() {
    return this._share.share_with;
  }
  /**
   * Get the share with entity display name
   * fallback to its uid if none
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get shareWithDisplayName() {
    return this._share.share_with_displayname || this._share.share_with;
  }
  /**
   * Unique display name in case of multiple
   * duplicates results with the same name.
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get shareWithDisplayNameUnique() {
    return this._share.share_with_displayname_unique || this._share.share_with;
  }
  /**
   * Get the share with entity link
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get shareWithLink() {
    return this._share.share_with_link;
  }
  /**
   * Get the share with avatar if any
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get shareWithAvatar() {
    return this._share.share_with_avatar;
  } // SHARED FILE OR FOLDER OWNER ----------------------------------

  /**
   * Get the shared item owner uid
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get uidFileOwner() {
    return this._share.uid_file_owner;
  }
  /**
   * Get the shared item display name
   * fallback to its uid if none
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get displaynameFileOwner() {
    return this._share.displayname_file_owner || this._share.uid_file_owner;
  } // TIME DATA ----------------------------------------------------

  /**
   * Get the share creation timestamp
   *
   * @return {int}
   * @readonly
   * @memberof Share
   */


  get createdTime() {
    return this._share.stime;
  }
  /**
   * Get the expiration date as a string format
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get expireDate() {
    return this._share.expiration;
  }
  /**
   * Set the expiration date as a string format
   * e.g. YYYY-MM-DD
   *
   * @param {string} date the share expiration date
   * @memberof Share
   */


  set expireDate(date) {
    this._share.expiration = date;
  } // EXTRA DATA ---------------------------------------------------

  /**
   * Get the public share token
   *
   * @return {string} the token
   * @readonly
   * @memberof Share
   */


  get token() {
    return this._share.token;
  }
  /**
   * Get the share note if any
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get note() {
    return this._share.note;
  }
  /**
   * Set the share note if any
   *
   * @param {string} note the note
   * @memberof Share
   */


  set note(note) {
    this._share.note = note;
  }
  /**
   * Get the share label if any
   * Should only exist on link shares
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get label() {
    return this._share.label;
  }
  /**
   * Set the share label if any
   * Should only be set on link shares
   *
   * @param {string} label the label
   * @memberof Share
   */


  set label(label) {
    this._share.label = label;
  }
  /**
   * Have a mail been sent
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */


  get mailSend() {
    return this._share.mail_send === true;
  }
  /**
   * Hide the download button on public page
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */


  get hideDownload() {
    return this._share.hide_download === true;
  }
  /**
   * Hide the download button on public page
   *
   * @param {boolean} state hide the button ?
   * @memberof Share
   */


  set hideDownload(state) {
    this._share.hide_download = state === true;
  }
  /**
   * Password protection of the share
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get password() {
    return this._share.password;
  }
  /**
   * Password protection of the share
   *
   * @param {string} password the share password
   * @memberof Share
   */


  set password(password) {
    this._share.password = password;
  }
  /**
   * Password protection by Talk of the share
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */


  get sendPasswordByTalk() {
    return this._share.send_password_by_talk;
  }
  /**
   * Password protection by Talk of the share
   *
   * @param {boolean} sendPasswordByTalk whether to send the password by Talk
   *        or not
   * @memberof Share
   */


  set sendPasswordByTalk(sendPasswordByTalk) {
    this._share.send_password_by_talk = sendPasswordByTalk;
  } // SHARED ITEM DATA ---------------------------------------------

  /**
   * Get the shared item absolute full path
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get path() {
    return this._share.path;
  }
  /**
   * Return the item type: file or folder
   *
   * @return {string} 'folder' or 'file'
   * @readonly
   * @memberof Share
   */


  get itemType() {
    return this._share.item_type;
  }
  /**
   * Get the shared item mimetype
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get mimetype() {
    return this._share.mimetype;
  }
  /**
   * Get the shared item id
   *
   * @return {int}
   * @readonly
   * @memberof Share
   */


  get fileSource() {
    return this._share.file_source;
  }
  /**
   * Get the target path on the receiving end
   * e.g the file /xxx/aaa will be shared in
   * the receiving root as /aaa, the fileTarget is /aaa
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get fileTarget() {
    return this._share.file_target;
  }
  /**
   * Get the parent folder id if any
   *
   * @return {int}
   * @readonly
   * @memberof Share
   */


  get fileParent() {
    return this._share.file_parent;
  } // PERMISSIONS Shortcuts

  /**
   * Does this share have READ permissions
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */


  get hasReadPermission() {
    return !!(this.permissions & OC.PERMISSION_READ);
  }
  /**
   * Does this share have CREATE permissions
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */


  get hasCreatePermission() {
    return !!(this.permissions & OC.PERMISSION_CREATE);
  }
  /**
   * Does this share have DELETE permissions
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */


  get hasDeletePermission() {
    return !!(this.permissions & OC.PERMISSION_DELETE);
  }
  /**
   * Does this share have UPDATE permissions
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */


  get hasUpdatePermission() {
    return !!(this.permissions & OC.PERMISSION_UPDATE);
  }
  /**
   * Does this share have SHARE permissions
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */


  get hasSharePermission() {
    return !!(this.permissions & OC.PERMISSION_SHARE);
  } // PERMISSIONS Shortcuts for the CURRENT USER
  // ! the permissions above are the share settings,
  // ! meaning the permissions for the recipient

  /**
   * Can the current user EDIT this share ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */


  get canEdit() {
    return this._share.can_edit === true;
  }
  /**
   * Can the current user DELETE this share ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Share
   */


  get canDelete() {
    return this._share.can_delete === true;
  }
  /**
   * Top level accessible shared folder fileid for the current user
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get viaFileid() {
    return this._share.via_fileid;
  }
  /**
   * Top level accessible shared folder path for the current user
   *
   * @return {string}
   * @readonly
   * @memberof Share
   */


  get viaPath() {
    return this._share.via_path;
  } // TODO: SORT THOSE PROPERTIES


  get parent() {
    return this._share.parent;
  }

  get storageId() {
    return this._share.storage_id;
  }

  get storage() {
    return this._share.storage;
  }

  get itemSource() {
    return this._share.item_source;
  }

  get status() {
    return this._share.status;
  }

}

/***/ }),

/***/ "./apps/files_sharing/src/services/ConfigService.js":
/*!**********************************************************!*\
  !*** ./apps/files_sharing/src/services/ConfigService.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Config)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
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
class Config {
  /**
   * Is public upload allowed on link shares ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Config
   */
  get isPublicUploadEnabled() {
    return document.getElementById('filestable') && document.getElementById('filestable').dataset.allowPublicUpload === 'yes';
  }
  /**
   * Are link share allowed ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Config
   */


  get isShareWithLinkAllowed() {
    return document.getElementById('allowShareWithLink') && document.getElementById('allowShareWithLink').value === 'yes';
  }
  /**
   * Get the federated sharing documentation link
   *
   * @return {string}
   * @readonly
   * @memberof Config
   */


  get federatedShareDocLink() {
    return OC.appConfig.core.federatedCloudShareDoc;
  }
  /**
   * Get the default link share expiration date as string
   *
   * @return {string}
   * @readonly
   * @memberof Config
   */


  get defaultExpirationDateString() {
    let expireDateString = '';

    if (this.isDefaultExpireDateEnabled) {
      const date = window.moment.utc();
      const expireAfterDays = this.defaultExpireDate;
      date.add(expireAfterDays, 'days');
      expireDateString = date.format('YYYY-MM-DD');
    }

    return expireDateString;
  }
  /**
   * Get the default internal expiration date as string
   *
   * @return {string}
   * @readonly
   * @memberof Config
   */


  get defaultInternalExpirationDateString() {
    let expireDateString = '';

    if (this.isDefaultInternalExpireDateEnabled) {
      const date = window.moment.utc();
      const expireAfterDays = this.defaultInternalExpireDate;
      date.add(expireAfterDays, 'days');
      expireDateString = date.format('YYYY-MM-DD');
    }

    return expireDateString;
  }
  /**
   * Get the default remote expiration date as string
   *
   * @return {string}
   * @readonly
   * @memberof Config
   */


  get defaultRemoteExpirationDateString() {
    let expireDateString = '';

    if (this.isDefaultRemoteExpireDateEnabled) {
      const date = window.moment.utc();
      const expireAfterDays = this.defaultRemoteExpireDate;
      date.add(expireAfterDays, 'days');
      expireDateString = date.format('YYYY-MM-DD');
    }

    return expireDateString;
  }
  /**
   * Are link shares password-enforced ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Config
   */


  get enforcePasswordForPublicLink() {
    return OC.appConfig.core.enforcePasswordForPublicLink === true;
  }
  /**
   * Is password asked by default on link shares ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Config
   */


  get enableLinkPasswordByDefault() {
    return OC.appConfig.core.enableLinkPasswordByDefault === true;
  }
  /**
   * Is link shares expiration enforced ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Config
   */


  get isDefaultExpireDateEnforced() {
    return OC.appConfig.core.defaultExpireDateEnforced === true;
  }
  /**
   * Is there a default expiration date for new link shares ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Config
   */


  get isDefaultExpireDateEnabled() {
    return OC.appConfig.core.defaultExpireDateEnabled === true;
  }
  /**
   * Is internal shares expiration enforced ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Config
   */


  get isDefaultInternalExpireDateEnforced() {
    return OC.appConfig.core.defaultInternalExpireDateEnforced === true;
  }
  /**
   * Is remote shares expiration enforced ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Config
   */


  get isDefaultRemoteExpireDateEnforced() {
    return OC.appConfig.core.defaultRemoteExpireDateEnforced === true;
  }
  /**
   * Is there a default expiration date for new internal shares ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Config
   */


  get isDefaultInternalExpireDateEnabled() {
    return OC.appConfig.core.defaultInternalExpireDateEnabled === true;
  }
  /**
   * Are users on this server allowed to send shares to other servers ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Config
   */


  get isRemoteShareAllowed() {
    return OC.appConfig.core.remoteShareAllowed === true;
  }
  /**
   * Is sharing my mail (link share) enabled ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Config
   */


  get isMailShareAllowed() {
    var _capabilities$files_s, _capabilities$files_s2, _capabilities$files_s3;

    const capabilities = OC.getCapabilities(); // eslint-disable-next-line camelcase

    return (capabilities === null || capabilities === void 0 ? void 0 : (_capabilities$files_s = capabilities.files_sharing) === null || _capabilities$files_s === void 0 ? void 0 : _capabilities$files_s.sharebymail) !== undefined // eslint-disable-next-line camelcase
    && (capabilities === null || capabilities === void 0 ? void 0 : (_capabilities$files_s2 = capabilities.files_sharing) === null || _capabilities$files_s2 === void 0 ? void 0 : (_capabilities$files_s3 = _capabilities$files_s2.public) === null || _capabilities$files_s3 === void 0 ? void 0 : _capabilities$files_s3.enabled) === true;
  }
  /**
   * Get the default days to link shares expiration
   *
   * @return {int}
   * @readonly
   * @memberof Config
   */


  get defaultExpireDate() {
    return OC.appConfig.core.defaultExpireDate;
  }
  /**
   * Get the default days to internal shares expiration
   *
   * @return {int}
   * @readonly
   * @memberof Config
   */


  get defaultInternalExpireDate() {
    return OC.appConfig.core.defaultInternalExpireDate;
  }
  /**
   * Get the default days to remote shares expiration
   *
   * @return {int}
   * @readonly
   * @memberof Config
   */


  get defaultRemoteExpireDate() {
    return OC.appConfig.core.defaultRemoteExpireDate;
  }
  /**
   * Is resharing allowed ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Config
   */


  get isResharingAllowed() {
    return OC.appConfig.core.resharingAllowed === true;
  }
  /**
   * Is password enforced for mail shares ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Config
   */


  get isPasswordForMailSharesRequired() {
    return OC.getCapabilities().files_sharing.sharebymail === undefined ? false : OC.getCapabilities().files_sharing.sharebymail.password.enforced;
  }
  /**
   * @return {boolean}
   * @readonly
   * @memberof Config
   */


  get shouldAlwaysShowUnique() {
    var _OC$getCapabilities$f, _OC$getCapabilities$f2;

    return ((_OC$getCapabilities$f = OC.getCapabilities().files_sharing) === null || _OC$getCapabilities$f === void 0 ? void 0 : (_OC$getCapabilities$f2 = _OC$getCapabilities$f.sharee) === null || _OC$getCapabilities$f2 === void 0 ? void 0 : _OC$getCapabilities$f2.always_show_unique) === true;
  }
  /**
   * Is sharing with groups allowed ?
   *
   * @return {boolean}
   * @readonly
   * @memberof Config
   */


  get allowGroupSharing() {
    return OC.appConfig.core.allowGroupSharing === true;
  }
  /**
   * Get the maximum results of a share search
   *
   * @return {int}
   * @readonly
   * @memberof Config
   */


  get maxAutocompleteResults() {
    return parseInt(OC.config['sharing.maxAutocompleteResults'], 10) || 25;
  }
  /**
   * Get the minimal string length
   * to initiate a share search
   *
   * @return {int}
   * @readonly
   * @memberof Config
   */


  get minSearchStringLength() {
    return parseInt(OC.config['sharing.minSearchStringLength'], 10) || 0;
  }
  /**
   * Get the password policy config
   *
   * @return {object}
   * @readonly
   * @memberof Config
   */


  get passwordPolicy() {
    const capabilities = OC.getCapabilities();
    return capabilities.password_policy ? capabilities.password_policy : {};
  }

}

/***/ }),

/***/ "./apps/files_sharing/src/services/ExternalLinkActions.js":
/*!****************************************************************!*\
  !*** ./apps/files_sharing/src/services/ExternalLinkActions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExternalLinkActions)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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
class ExternalLinkActions {
  constructor() {
    _defineProperty(this, "_state", void 0);

    // init empty state
    this._state = {}; // init default values

    this._state.actions = [];
    console.debug('OCA.Sharing.ExternalLinkActions initialized');
  }
  /**
   * Get the state
   *
   * @readonly
   * @memberof ExternalLinkActions
   * @return {object} the data state
   */


  get state() {
    return this._state;
  }
  /**
   * Register a new action for the link share
   * Mostly used by the social sharing app.
   *
   * @param {object} action new action component to register
   * @return {boolean}
   */


  registerAction(action) {
    console.warn('OCA.Sharing.ExternalLinkActions is deprecated, use OCA.Sharing.ExternalShareAction instead');

    if (typeof action === 'object' && action.icon && action.name && action.url) {
      this._state.actions.push(action);

      return true;
    }

    console.error('Invalid action provided', action);
    return false;
  }

}

/***/ }),

/***/ "./apps/files_sharing/src/services/ExternalShareActions.js":
/*!*****************************************************************!*\
  !*** ./apps/files_sharing/src/services/ExternalShareActions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExternalShareActions)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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
class ExternalShareActions {
  constructor() {
    _defineProperty(this, "_state", void 0);

    // init empty state
    this._state = {}; // init default values

    this._state.actions = [];
    console.debug('OCA.Sharing.ExternalShareActions initialized');
  }
  /**
   * Get the state
   *
   * @readonly
   * @memberof ExternalLinkActions
   * @return {object} the data state
   */


  get state() {
    return this._state;
  }
  /**
   * Register a new option/entry for the a given share type
   *
   * @param {object} action new action component to register
   * @param {string} action.id unique action id
   * @param {Function} action.data data to bind the component to
   * @param {Array} action.shareType list of OC.Share.SHARE_XXX to be mounted on
   * @param {object} action.handlers list of listeners
   * @return {boolean}
   */


  registerAction(action) {
    // Validate action
    if (typeof action !== 'object' || typeof action.id !== 'string' || typeof action.data !== 'function' // () => {disabled: true}
    || !Array.isArray(action.shareType) // [OC.Share.SHARE_TYPE_LINK, ...]
    || typeof action.handlers !== 'object' // {click: () => {}, ...}
    || !Object.values(action.handlers).every(handler => typeof handler === 'function')) {
      console.error('Invalid action provided', action);
      return false;
    } // Check duplicates


    const hasDuplicate = this._state.actions.findIndex(check => check.id === action.id) > -1;

    if (hasDuplicate) {
      console.error("An action with the same id ".concat(action.id, " already exists"), action);
      return false;
    }

    this._state.actions.push(action);

    return true;
  }

}

/***/ }),

/***/ "./apps/files_sharing/src/services/ShareSearch.js":
/*!********************************************************!*\
  !*** ./apps/files_sharing/src/services/ShareSearch.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShareSearch)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
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
class ShareSearch {
  constructor() {
    _defineProperty(this, "_state", void 0);

    // init empty state
    this._state = {}; // init default values

    this._state.results = [];
    console.debug('OCA.Sharing.ShareSearch initialized');
  }
  /**
   * Get the state
   *
   * @readonly
   * @memberof ShareSearch
   * @return {object} the data state
   */


  get state() {
    return this._state;
  }
  /**
   * Register a new result
   * Mostly used by the guests app.
   * We should consider deprecation and add results via php ?
   *
   * @param {object} result entry to append
   * @param {string} [result.user] entry user
   * @param {string} result.displayName entry first line
   * @param {string} [result.desc] entry second line
   * @param {string} [result.icon] entry icon
   * @param {Function} result.handler function to run on entry selection
   * @param {Function} [result.condition] condition to add entry or not
   * @return {boolean}
   */


  addNewResult(result) {
    if (result.displayName.trim() !== '' && typeof result.handler === 'function') {
      this._state.results.push(result);

      return true;
    }

    console.error('Invalid search result provided', result);
    return false;
  }

}

/***/ }),

/***/ "./apps/files_sharing/src/services/TabSections.js":
/*!********************************************************!*\
  !*** ./apps/files_sharing/src/services/TabSections.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabSections)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
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
class TabSections {
  constructor() {
    _defineProperty(this, "_sections", void 0);

    this._sections = [];
  }
  /**
   * @param {registerSectionCallback} section To be called to mount the section to the sharing sidebar
   */


  registerSection(section) {
    this._sections.push(section);
  }

  getSections() {
    return this._sections;
  }

}

/***/ }),

/***/ "./apps/files_sharing/src/utils/GeneratePassword.js":
/*!**********************************************************!*\
  !*** ./apps/files_sharing/src/utils/GeneratePassword.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _services_ConfigService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ConfigService */ "./apps/files_sharing/src/services/ConfigService.js");
/**
 * @copyright Copyright (c) 2020 John Molakvoæ <skjnldsv@protonmail.com>
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


const config = new _services_ConfigService__WEBPACK_IMPORTED_MODULE_1__["default"]();
const passwordSet = 'abcdefgijkmnopqrstwxyzABCDEFGHJKLMNPQRSTWXYZ23456789';
/**
 * Generate a valid policy password or
 * request a valid password if password_policy
 * is enabled
 *
 * @return {string} a valid password
 */

/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__() {
  // password policy is enabled, let's request a pass
  if (config.passwordPolicy.api && config.passwordPolicy.api.generate) {
    try {
      const request = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(config.passwordPolicy.api.generate);

      if (request.data.ocs.data.password) {
        return request.data.ocs.data.password;
      }
    } catch (error) {
      console.info('Error generating password from password_policy', error);
    }
  } // generate password of 10 length based on passwordSet


  return Array(10).fill(0).reduce((prev, curr) => {
    prev += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
    return prev;
  }, '');
}

/***/ }),

/***/ "./apps/files_sharing/src/utils/SharedWithMe.js":
/*!******************************************************!*\
  !*** ./apps/files_sharing/src/utils/SharedWithMe.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shareWithTitle": () => (/* binding */ shareWithTitle)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Joas Schilling <coding@schilljs.com>
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
const shareWithTitle = function (share) {
  if (share.type === OC.Share.SHARE_TYPE_GROUP) {
    return t('files_sharing', 'Shared with you and the group {group} by {owner}', {
      group: share.shareWithDisplayName,
      owner: share.ownerDisplayName
    }, undefined, {
      escape: false
    });
  } else if (share.type === OC.Share.SHARE_TYPE_CIRCLE) {
    return t('files_sharing', 'Shared with you and {circle} by {owner}', {
      circle: share.shareWithDisplayName,
      owner: share.ownerDisplayName
    }, undefined, {
      escape: false
    });
  } else if (share.type === OC.Share.SHARE_TYPE_ROOM) {
    if (share.shareWithDisplayName) {
      return t('files_sharing', 'Shared with you and the conversation {conversation} by {owner}', {
        conversation: share.shareWithDisplayName,
        owner: share.ownerDisplayName
      }, undefined, {
        escape: false
      });
    } else {
      return t('files_sharing', 'Shared with you in a conversation by {owner}', {
        owner: share.ownerDisplayName
      }, undefined, {
        escape: false
      });
    }
  } else {
    return t('files_sharing', 'Shared with you by {owner}', {
      owner: share.ownerDisplayName
    }, undefined, {
      escape: false
    });
  }
};



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/ExternalShareAction.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/ExternalShareAction.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Share */ "./apps/files_sharing/src/models/Share.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ExternalShareAction',
  props: {
    id: {
      type: String,
      required: true
    },
    action: {
      type: Object,
      default: () => ({})
    },
    fileInfo: {
      type: Object,
      default: () => {},
      required: true
    },
    share: {
      type: _models_Share__WEBPACK_IMPORTED_MODULE_0__["default"],
      default: null
    }
  },
  computed: {
    data() {
      return this.action.data(this);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntry.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntry.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Avatar */ "./node_modules/@nextcloud/vue/dist/Components/Avatar.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Actions */ "./node_modules/@nextcloud/vue/dist/Components/Actions.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionButton */ "./node_modules/@nextcloud/vue/dist/Components/ActionButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionCheckbox */ "./node_modules/@nextcloud/vue/dist/Components/ActionCheckbox.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionCheckbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionCheckbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionInput */ "./node_modules/@nextcloud/vue/dist/Components/ActionInput.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionInput__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionInput__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionTextEditable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionTextEditable */ "./node_modules/@nextcloud/vue/dist/Components/ActionTextEditable.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionTextEditable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionTextEditable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Directives/Tooltip */ "./node_modules/@nextcloud/vue/dist/Directives/Tooltip.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mixins_SharesMixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mixins/SharesMixin */ "./apps/files_sharing/src/mixins/SharesMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SharingEntry',
  components: {
    Actions: (_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_1___default()),
    ActionButton: (_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_2___default()),
    ActionCheckbox: (_nextcloud_vue_dist_Components_ActionCheckbox__WEBPACK_IMPORTED_MODULE_3___default()),
    ActionInput: (_nextcloud_vue_dist_Components_ActionInput__WEBPACK_IMPORTED_MODULE_4___default()),
    ActionTextEditable: (_nextcloud_vue_dist_Components_ActionTextEditable__WEBPACK_IMPORTED_MODULE_5___default()),
    Avatar: (_nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_0___default())
  },
  directives: {
    Tooltip: (_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_6___default())
  },
  mixins: [_mixins_SharesMixin__WEBPACK_IMPORTED_MODULE_7__["default"]],

  data() {
    return {
      permissionsEdit: OC.PERMISSION_UPDATE,
      permissionsCreate: OC.PERMISSION_CREATE,
      permissionsDelete: OC.PERMISSION_DELETE,
      permissionsRead: OC.PERMISSION_READ,
      permissionsShare: OC.PERMISSION_SHARE
    };
  },

  computed: {
    title() {
      let title = this.share.shareWithDisplayName;

      if (this.share.type === this.SHARE_TYPES.SHARE_TYPE_GROUP) {
        title += " (".concat(t('files_sharing', 'group'), ")");
      } else if (this.share.type === this.SHARE_TYPES.SHARE_TYPE_ROOM) {
        title += " (".concat(t('files_sharing', 'conversation'), ")");
      } else if (this.share.type === this.SHARE_TYPES.SHARE_TYPE_REMOTE) {
        title += " (".concat(t('files_sharing', 'remote'), ")");
      } else if (this.share.type === this.SHARE_TYPES.SHARE_TYPE_REMOTE_GROUP) {
        title += " (".concat(t('files_sharing', 'remote group'), ")");
      } else if (this.share.type === this.SHARE_TYPES.SHARE_TYPE_GUEST) {
        title += " (".concat(t('files_sharing', 'guest'), ")");
      }

      return title;
    },

    tooltip() {
      if (this.share.owner !== this.share.uidFileOwner) {
        const data = {
          // todo: strong or italic?
          // but the t function escape any html from the data :/
          user: this.share.shareWithDisplayName,
          owner: this.share.ownerDisplayName
        };

        if (this.share.type === this.SHARE_TYPES.SHARE_TYPE_GROUP) {
          return t('files_sharing', 'Shared with the group {user} by {owner}', data);
        } else if (this.share.type === this.SHARE_TYPES.SHARE_TYPE_ROOM) {
          return t('files_sharing', 'Shared with the conversation {user} by {owner}', data);
        }

        return t('files_sharing', 'Shared with {user} by {owner}', data);
      }

      return null;
    },

    canHaveNote() {
      return !this.isRemote;
    },

    isRemote() {
      return this.share.type === this.SHARE_TYPES.SHARE_TYPE_REMOTE || this.share.type === this.SHARE_TYPES.SHARE_TYPE_REMOTE_GROUP;
    },

    /**
     * Can the sharer set whether the sharee can edit the file ?
     *
     * @return {boolean}
     */
    canSetEdit() {
      // If the owner revoked the permission after the resharer granted it
      // the share still has the permission, and the resharer is still
      // allowed to revoke it too (but not to grant it again).
      return this.fileInfo.sharePermissions & OC.PERMISSION_UPDATE || this.canEdit;
    },

    /**
     * Can the sharer set whether the sharee can create the file ?
     *
     * @return {boolean}
     */
    canSetCreate() {
      // If the owner revoked the permission after the resharer granted it
      // the share still has the permission, and the resharer is still
      // allowed to revoke it too (but not to grant it again).
      return this.fileInfo.sharePermissions & OC.PERMISSION_CREATE || this.canCreate;
    },

    /**
     * Can the sharer set whether the sharee can delete the file ?
     *
     * @return {boolean}
     */
    canSetDelete() {
      // If the owner revoked the permission after the resharer granted it
      // the share still has the permission, and the resharer is still
      // allowed to revoke it too (but not to grant it again).
      return this.fileInfo.sharePermissions & OC.PERMISSION_DELETE || this.canDelete;
    },

    /**
     * Can the sharer set whether the sharee can reshare the file ?
     *
     * @return {boolean}
     */
    canSetReshare() {
      // If the owner revoked the permission after the resharer granted it
      // the share still has the permission, and the resharer is still
      // allowed to revoke it too (but not to grant it again).
      return this.fileInfo.sharePermissions & OC.PERMISSION_SHARE || this.canReshare;
    },

    /**
     * Can the sharee edit the shared file ?
     */
    canEdit: {
      get() {
        return this.share.hasUpdatePermission;
      },

      set(checked) {
        this.updatePermissions({
          isEditChecked: checked
        });
      }

    },

    /**
     * Can the sharee create the shared file ?
     */
    canCreate: {
      get() {
        return this.share.hasCreatePermission;
      },

      set(checked) {
        this.updatePermissions({
          isCreateChecked: checked
        });
      }

    },

    /**
     * Can the sharee delete the shared file ?
     */
    canDelete: {
      get() {
        return this.share.hasDeletePermission;
      },

      set(checked) {
        this.updatePermissions({
          isDeleteChecked: checked
        });
      }

    },

    /**
     * Can the sharee reshare the file ?
     */
    canReshare: {
      get() {
        return this.share.hasSharePermission;
      },

      set(checked) {
        this.updatePermissions({
          isReshareChecked: checked
        });
      }

    },

    /**
     * Is this share readable
     * Needed for some federated shares that might have been added from file drop links
     */
    hasRead: {
      get() {
        return this.share.hasReadPermission;
      }

    },

    /**
     * Is the current share a folder ?
     *
     * @return {boolean}
     */
    isFolder() {
      return this.fileInfo.type === 'dir';
    },

    /**
     * Does the current share have an expiration date
     *
     * @return {boolean}
     */
    hasExpirationDate: {
      get() {
        return this.config.isDefaultInternalExpireDateEnforced || !!this.share.expireDate;
      },

      set(enabled) {
        this.share.expireDate = enabled ? this.config.defaultInternalExpirationDateString !== '' ? this.config.defaultInternalExpirationDateString : moment().format('YYYY-MM-DD') : '';
      }

    },

    dateMaxEnforced() {
      if (!this.isRemote) {
        return this.config.isDefaultInternalExpireDateEnforced && moment().add(1 + this.config.defaultInternalExpireDate, 'days');
      } else {
        return this.config.isDefaultRemoteExpireDateEnforced && moment().add(1 + this.config.defaultRemoteExpireDate, 'days');
      }
    },

    /**
     * @return {bool}
     */
    hasStatus() {
      if (this.share.type !== this.SHARE_TYPES.SHARE_TYPE_USER) {
        return false;
      }

      return typeof this.share.status === 'object' && !Array.isArray(this.share.status);
    }

  },
  methods: {
    updatePermissions() {
      let {
        isEditChecked = this.canEdit,
        isCreateChecked = this.canCreate,
        isDeleteChecked = this.canDelete,
        isReshareChecked = this.canReshare
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // calc permissions if checked
      const permissions = 0 | (this.hasRead ? this.permissionsRead : 0) | (isCreateChecked ? this.permissionsCreate : 0) | (isDeleteChecked ? this.permissionsDelete : 0) | (isEditChecked ? this.permissionsEdit : 0) | (isReshareChecked ? this.permissionsShare : 0);
      this.share.permissions = permissions;
      this.queueUpdate('permissions');
    },

    /**
     * Save potential changed data on menu close
     */
    onMenuClose() {
      this.onNoteSubmit();
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/paths */ "./node_modules/@nextcloud/paths/dist/index.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Avatar */ "./node_modules/@nextcloud/vue/dist/Components/Avatar.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionButton */ "./node_modules/@nextcloud/vue/dist/Components/ActionButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionLink */ "./node_modules/@nextcloud/vue/dist/Components/ActionLink.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionLink__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionLink__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionText */ "./node_modules/@nextcloud/vue/dist/Components/ActionText.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_Share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/Share */ "./apps/files_sharing/src/models/Share.js");
/* harmony import */ var _mixins_SharesMixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mixins/SharesMixin */ "./apps/files_sharing/src/mixins/SharesMixin.js");
/* harmony import */ var _components_SharingEntrySimple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SharingEntrySimple */ "./apps/files_sharing/src/components/SharingEntrySimple.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





 // eslint-disable-next-line no-unused-vars




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SharingEntryInherited',
  components: {
    ActionButton: (_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_3___default()),
    ActionLink: (_nextcloud_vue_dist_Components_ActionLink__WEBPACK_IMPORTED_MODULE_4___default()),
    ActionText: (_nextcloud_vue_dist_Components_ActionText__WEBPACK_IMPORTED_MODULE_5___default()),
    Avatar: (_nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_2___default()),
    SharingEntrySimple: _components_SharingEntrySimple__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mixins: [_mixins_SharesMixin__WEBPACK_IMPORTED_MODULE_7__["default"]],
  props: {
    share: {
      type: _models_Share__WEBPACK_IMPORTED_MODULE_6__["default"],
      required: true
    }
  },
  computed: {
    viaFileTargetUrl() {
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/f/{fileid}', {
        fileid: this.share.viaFileid
      });
    },

    viaFolderName() {
      return (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_1__.basename)(this.share.viaPath);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionLink */ "./node_modules/@nextcloud/vue/dist/Components/ActionLink.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionLink__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionLink__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SharingEntrySimple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharingEntrySimple */ "./apps/files_sharing/src/components/SharingEntrySimple.vue");
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SharingEntryInternal',
  components: {
    ActionLink: (_nextcloud_vue_dist_Components_ActionLink__WEBPACK_IMPORTED_MODULE_1___default()),
    SharingEntrySimple: _SharingEntrySimple__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    fileInfo: {
      type: Object,
      default: () => {},
      required: true
    }
  },

  data() {
    return {
      copied: false,
      copySuccess: false
    };
  },

  computed: {
    /**
     * Get the internal link to this file id
     *
     * @return {string}
     */
    internalLink() {
      return window.location.protocol + '//' + window.location.host + (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/f/') + this.fileInfo.id;
    },

    /**
     * Clipboard v-tooltip message
     *
     * @return {string}
     */
    clipboardTooltip() {
      if (this.copied) {
        return this.copySuccess ? t('files_sharing', 'Link copied') : t('files_sharing', 'Cannot copy, please copy the link manually');
      }

      return t('files_sharing', 'Copy to clipboard');
    },

    internalLinkSubtitle() {
      if (this.fileInfo.type === 'dir') {
        return t('files_sharing', 'Only works for users with access to this folder');
      }

      return t('files_sharing', 'Only works for users with access to this file');
    }

  },
  methods: {
    async copyLink() {
      try {
        await this.$copyText(this.internalLink); // focus and show the tooltip

        this.$refs.copyButton.$el.focus();
        this.copySuccess = true;
        this.copied = true;
      } catch (error) {
        this.copySuccess = false;
        this.copied = true;
        console.error(error);
      } finally {
        setTimeout(() => {
          this.copySuccess = false;
          this.copied = false;
        }, 4000);
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionButton */ "./node_modules/@nextcloud/vue/dist/Components/ActionButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionCheckbox */ "./node_modules/@nextcloud/vue/dist/Components/ActionCheckbox.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionCheckbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionCheckbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionInput */ "./node_modules/@nextcloud/vue/dist/Components/ActionInput.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionInput__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionInput__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionLink */ "./node_modules/@nextcloud/vue/dist/Components/ActionLink.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionLink__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionLink__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionRadio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionRadio */ "./node_modules/@nextcloud/vue/dist/Components/ActionRadio.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionRadio__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionRadio__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionText */ "./node_modules/@nextcloud/vue/dist/Components/ActionText.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionTextEditable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionTextEditable */ "./node_modules/@nextcloud/vue/dist/Components/ActionTextEditable.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionTextEditable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionTextEditable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Actions */ "./node_modules/@nextcloud/vue/dist/Components/Actions.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Avatar */ "./node_modules/@nextcloud/vue/dist/Components/Avatar.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/vue/dist/Directives/Tooltip */ "./node_modules/@nextcloud/vue/dist/Directives/Tooltip.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ExternalShareAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ExternalShareAction */ "./apps/files_sharing/src/components/ExternalShareAction.vue");
/* harmony import */ var _utils_GeneratePassword__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/GeneratePassword */ "./apps/files_sharing/src/utils/GeneratePassword.js");
/* harmony import */ var _models_Share__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/Share */ "./apps/files_sharing/src/models/Share.js");
/* harmony import */ var _mixins_SharesMixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../mixins/SharesMixin */ "./apps/files_sharing/src/mixins/SharesMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SharingEntryLink',
  components: {
    Actions: (_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_8___default()),
    ActionButton: (_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1___default()),
    ActionCheckbox: (_nextcloud_vue_dist_Components_ActionCheckbox__WEBPACK_IMPORTED_MODULE_2___default()),
    ActionRadio: (_nextcloud_vue_dist_Components_ActionRadio__WEBPACK_IMPORTED_MODULE_5___default()),
    ActionInput: (_nextcloud_vue_dist_Components_ActionInput__WEBPACK_IMPORTED_MODULE_3___default()),
    ActionLink: (_nextcloud_vue_dist_Components_ActionLink__WEBPACK_IMPORTED_MODULE_4___default()),
    ActionText: (_nextcloud_vue_dist_Components_ActionText__WEBPACK_IMPORTED_MODULE_6___default()),
    ActionTextEditable: (_nextcloud_vue_dist_Components_ActionTextEditable__WEBPACK_IMPORTED_MODULE_7___default()),
    Avatar: (_nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_9___default()),
    ExternalShareAction: _ExternalShareAction__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  directives: {
    Tooltip: (_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10___default())
  },
  mixins: [_mixins_SharesMixin__WEBPACK_IMPORTED_MODULE_14__["default"]],
  props: {
    canReshare: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      copySuccess: true,
      copied: false,
      // Are we waiting for password/expiration date
      pending: false,
      publicUploadRWValue: OC.PERMISSION_UPDATE | OC.PERMISSION_CREATE | OC.PERMISSION_READ | OC.PERMISSION_DELETE,
      publicUploadRValue: OC.PERMISSION_READ,
      publicUploadWValue: OC.PERMISSION_CREATE,
      ExternalLegacyLinkActions: OCA.Sharing.ExternalLinkActions.state,
      ExternalShareActions: OCA.Sharing.ExternalShareActions.state
    };
  },

  computed: {
    /**
     * Return the current share permissions
     * We always ignore the SHARE permission as this is used for the
     * federated sharing.
     *
     * @return {number}
     */
    sharePermissions() {
      return this.share.permissions & ~OC.PERMISSION_SHARE;
    },

    /**
     * Generate a unique random id for this SharingEntryLink only
     * This allows ActionRadios to have the same name prop
     * but not to impact others SharingEntryLink
     *
     * @return {string}
     */
    randomId() {
      return Math.random().toString(27).substr(2);
    },

    /**
     * Link share label
     *
     * @return {string}
     */
    title() {
      // if we have a valid existing share (not pending)
      if (this.share && this.share.id) {
        if (!this.isShareOwner && this.share.ownerDisplayName) {
          if (this.isEmailShareType) {
            return t('files_sharing', '{shareWith} by {initiator}', {
              shareWith: this.share.shareWith,
              initiator: this.share.ownerDisplayName
            });
          }

          return t('files_sharing', 'Shared via link by {initiator}', {
            initiator: this.share.ownerDisplayName
          });
        }

        if (this.share.label && this.share.label.trim() !== '') {
          if (this.isEmailShareType) {
            return t('files_sharing', 'Mail share ({label})', {
              label: this.share.label.trim()
            });
          }

          return t('files_sharing', 'Share link ({label})', {
            label: this.share.label.trim()
          });
        }

        if (this.isEmailShareType) {
          return this.share.shareWith;
        }
      }

      return t('files_sharing', 'Share link');
    },

    /**
     * Show the email on a second line if a label is set for mail shares
     *
     * @return {string}
     */
    subtitle() {
      if (this.isEmailShareType && this.title !== this.share.shareWith) {
        return this.share.shareWith;
      }

      return null;
    },

    /**
     * Does the current share have an expiration date
     *
     * @return {boolean}
     */
    hasExpirationDate: {
      get() {
        return this.config.isDefaultExpireDateEnforced || !!this.share.expireDate;
      },

      set(enabled) {
        let dateString = moment(this.config.defaultExpirationDateString);

        if (!dateString.isValid()) {
          dateString = moment();
        }

        this.share.state.expiration = enabled ? dateString.format('YYYY-MM-DD') : '';
        console.debug('Expiration date status', enabled, this.share.expireDate);
      }

    },

    dateMaxEnforced() {
      return this.config.isDefaultExpireDateEnforced && moment().add(1 + this.config.defaultExpireDate, 'days');
    },

    /**
     * Is the current share password protected ?
     *
     * @return {boolean}
     */
    isPasswordProtected: {
      get() {
        return this.config.enforcePasswordForPublicLink || !!this.share.password;
      },

      async set(enabled) {
        // TODO: directly save after generation to make sure the share is always protected
        vue__WEBPACK_IMPORTED_MODULE_15__["default"].set(this.share, 'password', enabled ? await (0,_utils_GeneratePassword__WEBPACK_IMPORTED_MODULE_12__["default"])() : '');
        vue__WEBPACK_IMPORTED_MODULE_15__["default"].set(this.share, 'newPassword', this.share.password);
      }

    },

    /**
     * Is Talk enabled?
     *
     * @return {boolean}
     */
    isTalkEnabled() {
      return OC.appswebroots.spreed !== undefined;
    },

    /**
     * Is it possible to protect the password by Talk?
     *
     * @return {boolean}
     */
    isPasswordProtectedByTalkAvailable() {
      return this.isPasswordProtected && this.isTalkEnabled;
    },

    /**
     * Is the current share password protected by Talk?
     *
     * @return {boolean}
     */
    isPasswordProtectedByTalk: {
      get() {
        return this.share.sendPasswordByTalk;
      },

      async set(enabled) {
        this.share.sendPasswordByTalk = enabled;
      }

    },

    /**
     * Is the current share an email share ?
     *
     * @return {boolean}
     */
    isEmailShareType() {
      return this.share ? this.share.type === this.SHARE_TYPES.SHARE_TYPE_EMAIL : false;
    },

    canTogglePasswordProtectedByTalkAvailable() {
      if (!this.isPasswordProtected) {
        // Makes no sense
        return false;
      } else if (this.isEmailShareType && !this.hasUnsavedPassword) {
        // For email shares we need a new password in order to enable or
        // disable
        return false;
      } // Anything else should be fine


      return true;
    },

    /**
     * Pending data.
     * If the share still doesn't have an id, it is not synced
     * Therefore this is still not valid and requires user input
     *
     * @return {boolean}
     */
    pendingPassword() {
      return this.config.enforcePasswordForPublicLink && this.share && !this.share.id;
    },

    pendingExpirationDate() {
      return this.config.isDefaultExpireDateEnforced && this.share && !this.share.id;
    },

    /**
     * Can the recipient edit the file ?
     *
     * @return {boolean}
     */
    canUpdate: {
      get() {
        return this.share.hasUpdatePermission;
      },

      set(enabled) {
        this.share.permissions = enabled ? OC.PERMISSION_READ | OC.PERMISSION_UPDATE : OC.PERMISSION_READ;
      }

    },

    // if newPassword exists, but is empty, it means
    // the user deleted the original password
    hasUnsavedPassword() {
      return this.share.newPassword !== undefined;
    },

    /**
     * Is the current share a folder ?
     * TODO: move to a proper FileInfo model?
     *
     * @return {boolean}
     */
    isFolder() {
      return this.fileInfo.type === 'dir';
    },

    /**
     * Does the current file/folder have create permissions
     * TODO: move to a proper FileInfo model?
     *
     * @return {boolean}
     */
    fileHasCreatePermission() {
      return !!(this.fileInfo.permissions & OC.PERMISSION_CREATE);
    },

    /**
     * Return the public share link
     *
     * @return {string}
     */
    shareLink() {
      return window.location.protocol + '//' + window.location.host + (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/s/') + this.share.token;
    },

    /**
     * Clipboard v-tooltip message
     *
     * @return {string}
     */
    clipboardTooltip() {
      if (this.copied) {
        return this.copySuccess ? t('files_sharing', 'Link copied') : t('files_sharing', 'Cannot copy, please copy the link manually');
      }

      return t('files_sharing', 'Copy to clipboard');
    },

    /**
     * External additionnai actions for the menu
     *
     * @deprecated use OCA.Sharing.ExternalShareActions
     * @return {Array}
     */
    externalLegacyLinkActions() {
      return this.ExternalLegacyLinkActions.actions;
    },

    /**
     * Additional actions for the menu
     *
     * @return {Array}
     */
    externalLinkActions() {
      // filter only the registered actions for said link
      return this.ExternalShareActions.actions.filter(action => action.shareType.includes(OC.Share.SHARE_TYPE_LINK) || action.shareType.includes(OC.Share.SHARE_TYPE_EMAIL));
    },

    isPasswordPolicyEnabled() {
      return typeof this.config.passwordPolicy === 'object';
    }

  },
  methods: {
    /**
     * Create a new share link and append it to the list
     */
    async onNewLinkShare() {
      // do not run again if already loading
      if (this.loading) {
        return;
      }

      const shareDefaults = {
        share_type: OC.Share.SHARE_TYPE_LINK
      };

      if (this.config.isDefaultExpireDateEnforced) {
        // default is empty string if not set
        // expiration is the share object key, not expireDate
        shareDefaults.expiration = this.config.defaultExpirationDateString;
      }

      if (this.config.enableLinkPasswordByDefault) {
        shareDefaults.password = await (0,_utils_GeneratePassword__WEBPACK_IMPORTED_MODULE_12__["default"])();
      } // do not push yet if we need a password or an expiration date: show pending menu


      if (this.config.enforcePasswordForPublicLink || this.config.isDefaultExpireDateEnforced) {
        this.pending = true; // if a share already exists, pushing it

        if (this.share && !this.share.id) {
          // if the share is valid, create it on the server
          if (this.checkShare(this.share)) {
            await this.pushNewLinkShare(this.share, true);
            return true;
          } else {
            this.open = true;
            OC.Notification.showTemporary(t('files_sharing', 'Error, please enter proper password and/or expiration date'));
            return false;
          }
        } // ELSE, show the pending popovermenu
        // if password enforced, pre-fill with random one


        if (this.config.enforcePasswordForPublicLink) {
          shareDefaults.password = await (0,_utils_GeneratePassword__WEBPACK_IMPORTED_MODULE_12__["default"])();
        } // create share & close menu


        const share = new _models_Share__WEBPACK_IMPORTED_MODULE_13__["default"](shareDefaults);
        const component = await new Promise(resolve => {
          this.$emit('add:share', share, resolve);
        }); // open the menu on the
        // freshly created share component

        this.open = false;
        this.pending = false;
        component.open = true; // Nothing is enforced, creating share directly
      } else {
        const share = new _models_Share__WEBPACK_IMPORTED_MODULE_13__["default"](shareDefaults);
        await this.pushNewLinkShare(share);
      }
    },

    /**
     * Push a new link share to the server
     * And update or append to the list
     * accordingly
     *
     * @param {Share} share the new share
     * @param {boolean} [update=false] do we update the current share ?
     */
    async pushNewLinkShare(share, update) {
      try {
        // do nothing if we're already pending creation
        if (this.loading) {
          return true;
        }

        this.loading = true;
        this.errors = {};
        const path = (this.fileInfo.path + '/' + this.fileInfo.name).replace('//', '/');
        const newShare = await this.createShare({
          path,
          shareType: OC.Share.SHARE_TYPE_LINK,
          password: share.password,
          expireDate: share.expireDate // we do not allow setting the publicUpload
          // before the share creation.
          // Todo: We also need to fix the createShare method in
          // lib/Controller/ShareAPIController.php to allow file drop
          // (currently not supported on create, only update)

        });
        this.open = false;
        console.debug('Link share created', newShare); // if share already exists, copy link directly on next tick

        let component;

        if (update) {
          component = await new Promise(resolve => {
            this.$emit('update:share', newShare, resolve);
          });
        } else {
          // adding new share to the array and copying link to clipboard
          // using promise so that we can copy link in the same click function
          // and avoid firefox copy permissions issue
          component = await new Promise(resolve => {
            this.$emit('add:share', newShare, resolve);
          });
        } // Execute the copy link method
        // freshly created share component
        // ! somehow does not works on firefox !


        if (!this.config.enforcePasswordForPublicLink) {
          // Only copy the link when the password was not forced,
          // otherwise the user needs to copy/paste the password before finishing the share.
          component.copyLink();
        }
      } catch ({
        response
      }) {
        const message = response.data.ocs.meta.message;

        if (message.match(/password/i)) {
          this.onSyncError('password', message);
        } else if (message.match(/date/i)) {
          this.onSyncError('expireDate', message);
        } else {
          this.onSyncError('pending', message);
        }
      } finally {
        this.loading = false;
      }
    },

    /**
     * On permissions change
     *
     * @param {Event} event js event
     */
    togglePermissions(event) {
      const permissions = parseInt(event.target.value, 10);
      this.share.permissions = permissions;
      this.queueUpdate('permissions');
    },

    /**
     * Label changed, let's save it to a different key
     *
     * @param {string} label the share label
     */
    onLabelChange(label) {
      this.$set(this.share, 'newLabel', label.trim());
    },

    /**
     * When the note change, we trim, save and dispatch
     */
    onLabelSubmit() {
      if (typeof this.share.newLabel === 'string') {
        this.share.label = this.share.newLabel;
        this.$delete(this.share, 'newLabel');
        this.queueUpdate('label');
      }
    },

    async copyLink() {
      try {
        await this.$copyText(this.shareLink); // focus and show the tooltip

        this.$refs.copyButton.$el.focus();
        this.copySuccess = true;
        this.copied = true;
      } catch (error) {
        this.copySuccess = false;
        this.copied = true;
        console.error(error);
      } finally {
        setTimeout(() => {
          this.copySuccess = false;
          this.copied = false;
        }, 4000);
      }
    },

    /**
     * Update newPassword values
     * of share. If password is set but not newPassword
     * then the user did not changed the password
     * If both co-exists, the password have changed and
     * we show it in plain text.
     * Then on submit (or menu close), we sync it.
     *
     * @param {string} password the changed password
     */
    onPasswordChange(password) {
      this.$set(this.share, 'newPassword', password);
    },

    /**
     * Uncheck password protection
     * We need this method because @update:checked
     * is ran simultaneously as @uncheck, so
     * so we cannot ensure data is up-to-date
     */
    onPasswordDisable() {
      this.share.password = ''; // reset password state after sync

      this.$delete(this.share, 'newPassword'); // only update if valid share.

      if (this.share.id) {
        this.queueUpdate('password');
      }
    },

    /**
     * Menu have been closed or password has been submited.
     * The only property that does not get
     * synced automatically is the password
     * So let's check if we have an unsaved
     * password.
     * expireDate is saved on datepicker pick
     * or close.
     */
    onPasswordSubmit() {
      if (this.hasUnsavedPassword) {
        this.share.password = this.share.newPassword.trim();
        this.queueUpdate('password');
      }
    },

    /**
     * Update the password along with "sendPasswordByTalk".
     *
     * If the password was modified the new password is sent; otherwise
     * updating a mail share would fail, as in that case it is required that
     * a new password is set when enabling or disabling
     * "sendPasswordByTalk".
     */
    onPasswordProtectedByTalkChange() {
      if (this.hasUnsavedPassword) {
        this.share.password = this.share.newPassword.trim();
      }

      this.queueUpdate('sendPasswordByTalk', 'password');
    },

    /**
     * Save potential changed data on menu close
     */
    onMenuClose() {
      this.onPasswordSubmit();
      this.onNoteSubmit();
    },

    /**
     * Cancel the share creation
     * Used in the pending popover
     */
    onCancel() {
      // this.share already exists at this point,
      // but is incomplete as not pushed to server
      // YET. We can safely delete the share :)
      this.$emit('remove:share', this.share);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Actions */ "./node_modules/@nextcloud/vue/dist/Components/Actions.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Directives/Tooltip */ "./node_modules/@nextcloud/vue/dist/Directives/Tooltip.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SharingEntrySimple',
  components: {
    Actions: (_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0___default())
  },
  directives: {
    Tooltip: (_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1___default())
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    tooltip: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    isUnique: {
      type: Boolean,
      default: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingInput.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingInput.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Multiselect */ "./node_modules/@nextcloud/vue/dist/Components/Multiselect.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_ConfigService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ConfigService */ "./apps/files_sharing/src/services/ConfigService.js");
/* harmony import */ var _utils_GeneratePassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/GeneratePassword */ "./apps/files_sharing/src/utils/GeneratePassword.js");
/* harmony import */ var _models_Share__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/Share */ "./apps/files_sharing/src/models/Share.js");
/* harmony import */ var _mixins_ShareRequests__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mixins/ShareRequests */ "./apps/files_sharing/src/mixins/ShareRequests.js");
/* harmony import */ var _mixins_ShareTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/ShareTypes */ "./apps/files_sharing/src/mixins/ShareTypes.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SharingInput',
  components: {
    Multiselect: (_nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_4___default())
  },
  mixins: [_mixins_ShareTypes__WEBPACK_IMPORTED_MODULE_9__["default"], _mixins_ShareRequests__WEBPACK_IMPORTED_MODULE_8__["default"]],
  props: {
    shares: {
      type: Array,
      default: () => [],
      required: true
    },
    linkShares: {
      type: Array,
      default: () => [],
      required: true
    },
    fileInfo: {
      type: Object,
      default: () => {},
      required: true
    },
    reshare: {
      type: _models_Share__WEBPACK_IMPORTED_MODULE_7__["default"],
      default: null
    },
    canReshare: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      config: new _services_ConfigService__WEBPACK_IMPORTED_MODULE_5__["default"](),
      loading: false,
      query: '',
      recommendations: [],
      ShareSearch: OCA.Sharing.ShareSearch.state,
      suggestions: []
    };
  },

  computed: {
    /**
     * Implement ShareSearch
     * allows external appas to inject new
     * results into the autocomplete dropdown
     * Used for the guests app
     *
     * @return {Array}
     */
    externalResults() {
      return this.ShareSearch.results;
    },

    inputPlaceholder() {
      const allowRemoteSharing = this.config.isRemoteShareAllowed;

      if (!this.canReshare) {
        return t('files_sharing', 'Resharing is not allowed');
      } // We can always search with email addresses for users too


      if (!allowRemoteSharing) {
        return t('files_sharing', 'Name or email …');
      }

      return t('files_sharing', 'Name, email, or Federated Cloud ID …');
    },

    isValidQuery() {
      return this.query && this.query.trim() !== '' && this.query.length > this.config.minSearchStringLength;
    },

    options() {
      if (this.isValidQuery) {
        return this.suggestions;
      }

      return this.recommendations;
    },

    noResultText() {
      if (this.loading) {
        return t('files_sharing', 'Searching …');
      }

      return t('files_sharing', 'No elements found.');
    }

  },

  mounted() {
    this.getRecommendations();
  },

  methods: {
    async asyncFind(query, id) {
      // save current query to check if we display
      // recommendations or search results
      this.query = query.trim();

      if (this.isValidQuery) {
        // start loading now to have proper ux feedback
        // during the debounce
        this.loading = true;
        await this.debounceGetSuggestions(query);
      }
    },

    /**
     * Get suggestions
     *
     * @param {string} search the search query
     * @param {boolean} [lookup=false] search on lookup server
     */
    async getSuggestions(search) {
      let lookup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.loading = true;

      if (OC.getCapabilities().files_sharing.sharee.query_lookup_default === true) {
        lookup = true;
      }

      const shareType = [this.SHARE_TYPES.SHARE_TYPE_USER, this.SHARE_TYPES.SHARE_TYPE_GROUP, this.SHARE_TYPES.SHARE_TYPE_REMOTE, this.SHARE_TYPES.SHARE_TYPE_REMOTE_GROUP, this.SHARE_TYPES.SHARE_TYPE_CIRCLE, this.SHARE_TYPES.SHARE_TYPE_ROOM, this.SHARE_TYPES.SHARE_TYPE_GUEST, this.SHARE_TYPES.SHARE_TYPE_DECK];

      if (OC.getCapabilities().files_sharing.public.enabled === true) {
        shareType.push(this.SHARE_TYPES.SHARE_TYPE_EMAIL);
      }

      let request = null;

      try {
        request = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('apps/files_sharing/api/v1/sharees'), {
          params: {
            format: 'json',
            itemType: this.fileInfo.type === 'dir' ? 'folder' : 'file',
            search,
            lookup,
            perPage: this.config.maxAutocompleteResults,
            shareType
          }
        });
      } catch (error) {
        console.error('Error fetching suggestions', error);
        return;
      }

      const data = request.data.ocs.data;
      const exact = request.data.ocs.data.exact;
      data.exact = []; // removing exact from general results
      // flatten array of arrays

      const rawExactSuggestions = Object.values(exact).reduce((arr, elem) => arr.concat(elem), []);
      const rawSuggestions = Object.values(data).reduce((arr, elem) => arr.concat(elem), []); // remove invalid data and format to user-select layout

      const exactSuggestions = this.filterOutExistingShares(rawExactSuggestions).map(share => this.formatForMultiselect(share)) // sort by type so we can get user&groups first...
      .sort((a, b) => a.shareType - b.shareType);
      const suggestions = this.filterOutExistingShares(rawSuggestions).map(share => this.formatForMultiselect(share)) // sort by type so we can get user&groups first...
      .sort((a, b) => a.shareType - b.shareType); // lookup clickable entry
      // show if enabled and not already requested

      const lookupEntry = [];

      if (data.lookupEnabled && !lookup) {
        lookupEntry.push({
          id: 'global-lookup',
          isNoUser: true,
          displayName: t('files_sharing', 'Search globally'),
          lookup: true
        });
      } // if there is a condition specified, filter it


      const externalResults = this.externalResults.filter(result => !result.condition || result.condition(this));
      const allSuggestions = exactSuggestions.concat(suggestions).concat(externalResults).concat(lookupEntry); // Count occurances of display names in order to provide a distinguishable description if needed

      const nameCounts = allSuggestions.reduce((nameCounts, result) => {
        if (!result.displayName) {
          return nameCounts;
        }

        if (!nameCounts[result.displayName]) {
          nameCounts[result.displayName] = 0;
        }

        nameCounts[result.displayName]++;
        return nameCounts;
      }, {});
      this.suggestions = allSuggestions.map(item => {
        // Make sure that items with duplicate displayName get the shareWith applied as a description
        if (nameCounts[item.displayName] > 1 && !item.desc) {
          return { ...item,
            desc: item.shareWithDisplayNameUnique
          };
        }

        return item;
      });
      this.loading = false;
      console.info('suggestions', this.suggestions);
    },

    /**
     * Debounce getSuggestions
     *
     * @param {...*} args the arguments
     */
    debounceGetSuggestions: debounce__WEBPACK_IMPORTED_MODULE_3___default()(function () {
      this.getSuggestions(...arguments);
    }, 300),

    /**
     * Get the sharing recommendations
     */
    async getRecommendations() {
      this.loading = true;
      let request = null;

      try {
        request = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('apps/files_sharing/api/v1/sharees_recommended'), {
          params: {
            format: 'json',
            itemType: this.fileInfo.type
          }
        });
      } catch (error) {
        console.error('Error fetching recommendations', error);
        return;
      } // Add external results from the OCA.Sharing.ShareSearch api


      const externalResults = this.externalResults.filter(result => !result.condition || result.condition(this)); // flatten array of arrays

      const rawRecommendations = Object.values(request.data.ocs.data.exact).reduce((arr, elem) => arr.concat(elem), []); // remove invalid data and format to user-select layout

      this.recommendations = this.filterOutExistingShares(rawRecommendations).map(share => this.formatForMultiselect(share)).concat(externalResults);
      this.loading = false;
      console.info('recommendations', this.recommendations);
    },

    /**
     * Filter out existing shares from
     * the provided shares search results
     *
     * @param {object[]} shares the array of shares object
     * @return {object[]}
     */
    filterOutExistingShares(shares) {
      return shares.reduce((arr, share) => {
        // only check proper objects
        if (typeof share !== 'object') {
          return arr;
        }

        try {
          if (share.value.shareType === this.SHARE_TYPES.SHARE_TYPE_USER) {
            // filter out current user
            if (share.value.shareWith === (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid) {
              return arr;
            } // filter out the owner of the share


            if (this.reshare && share.value.shareWith === this.reshare.owner) {
              return arr;
            }
          } // filter out existing mail shares


          if (share.value.shareType === this.SHARE_TYPES.SHARE_TYPE_EMAIL) {
            const emails = this.linkShares.map(elem => elem.shareWith);

            if (emails.indexOf(share.value.shareWith.trim()) !== -1) {
              return arr;
            }
          } else {
            // filter out existing shares
            // creating an object of uid => type
            const sharesObj = this.shares.reduce((obj, elem) => {
              obj[elem.shareWith] = elem.type;
              return obj;
            }, {}); // if shareWith is the same and the share type too, ignore it

            const key = share.value.shareWith.trim();

            if (key in sharesObj && sharesObj[key] === share.value.shareType) {
              return arr;
            }
          } // ALL GOOD
          // let's add the suggestion


          arr.push(share);
        } catch {
          return arr;
        }

        return arr;
      }, []);
    },

    /**
     * Get the icon based on the share type
     *
     * @param {number} type the share type
     * @return {string} the icon class
     */
    shareTypeToIcon(type) {
      switch (type) {
        case this.SHARE_TYPES.SHARE_TYPE_GUEST:
          // default is a user, other icons are here to differenciate
          // themselves from it, so let's not display the user icon
          // case this.SHARE_TYPES.SHARE_TYPE_REMOTE:
          // case this.SHARE_TYPES.SHARE_TYPE_USER:
          return 'icon-user';

        case this.SHARE_TYPES.SHARE_TYPE_REMOTE_GROUP:
        case this.SHARE_TYPES.SHARE_TYPE_GROUP:
          return 'icon-group';

        case this.SHARE_TYPES.SHARE_TYPE_EMAIL:
          return 'icon-mail';

        case this.SHARE_TYPES.SHARE_TYPE_CIRCLE:
          return 'icon-circle';

        case this.SHARE_TYPES.SHARE_TYPE_ROOM:
          return 'icon-room';

        case this.SHARE_TYPES.SHARE_TYPE_DECK:
          return 'icon-deck';

        default:
          return '';
      }
    },

    /**
     * Format shares for the multiselect options
     *
     * @param {object} result select entry item
     * @return {object}
     */
    formatForMultiselect(result) {
      let subtitle;

      if (result.value.shareType === this.SHARE_TYPES.SHARE_TYPE_USER && this.config.shouldAlwaysShowUnique) {
        var _result$shareWithDisp;

        subtitle = (_result$shareWithDisp = result.shareWithDisplayNameUnique) !== null && _result$shareWithDisp !== void 0 ? _result$shareWithDisp : '';
      } else if ((result.value.shareType === this.SHARE_TYPES.SHARE_TYPE_REMOTE || result.value.shareType === this.SHARE_TYPES.SHARE_TYPE_REMOTE_GROUP) && result.value.server) {
        subtitle = t('files_sharing', 'on {server}', {
          server: result.value.server
        });
      } else if (result.value.shareType === this.SHARE_TYPES.SHARE_TYPE_EMAIL) {
        subtitle = result.value.shareWith;
      } else {
        var _result$shareWithDesc;

        subtitle = (_result$shareWithDesc = result.shareWithDescription) !== null && _result$shareWithDesc !== void 0 ? _result$shareWithDesc : '';
      }

      return {
        id: "".concat(result.value.shareType, "-").concat(result.value.shareWith),
        shareWith: result.value.shareWith,
        shareType: result.value.shareType,
        user: result.uuid || result.value.shareWith,
        isNoUser: result.value.shareType !== this.SHARE_TYPES.SHARE_TYPE_USER,
        displayName: result.name || result.label,
        subtitle,
        shareWithDisplayNameUnique: result.shareWithDisplayNameUnique || '',
        icon: this.shareTypeToIcon(result.value.shareType)
      };
    },

    /**
     * Process the new share request
     *
     * @param {object} value the multiselect option
     */
    async addShare(value) {
      if (value.lookup) {
        await this.getSuggestions(this.query, true); // focus the input again

        this.$nextTick(() => {
          this.$refs.multiselect.$el.querySelector('.multiselect__input').focus();
        });
        return true;
      } // handle externalResults from OCA.Sharing.ShareSearch


      if (value.handler) {
        const share = await value.handler(this);
        this.$emit('add:share', new _models_Share__WEBPACK_IMPORTED_MODULE_7__["default"](share));
        return true;
      }

      this.loading = true;
      console.debug('Adding a new share from the input for', value);

      try {
        var _this$$refs$multisele, _this$$refs$multisele2, _this$$refs$multisele3;

        let password = null;

        if (this.config.enforcePasswordForPublicLink && value.shareType === this.SHARE_TYPES.SHARE_TYPE_EMAIL) {
          password = await (0,_utils_GeneratePassword__WEBPACK_IMPORTED_MODULE_6__["default"])();
        }

        const path = (this.fileInfo.path + '/' + this.fileInfo.name).replace('//', '/');
        const share = await this.createShare({
          path,
          shareType: value.shareType,
          shareWith: value.shareWith,
          password,
          permissions: this.fileInfo.sharePermissions & OC.getCapabilities().files_sharing.default_permissions
        }); // If we had a password, we need to show it to the user as it was generated

        if (password) {
          share.newPassword = password; // Wait for the newly added share

          const component = await new Promise(resolve => {
            this.$emit('add:share', share, resolve);
          }); // open the menu on the
          // freshly created share component

          component.open = true;
        } else {
          // Else we just add it normally
          this.$emit('add:share', share);
        } // reset the search string when done
        // FIXME: https://github.com/shentao/vue-multiselect/issues/633


        if ((_this$$refs$multisele = this.$refs.multiselect) !== null && _this$$refs$multisele !== void 0 && (_this$$refs$multisele2 = _this$$refs$multisele.$refs) !== null && _this$$refs$multisele2 !== void 0 && (_this$$refs$multisele3 = _this$$refs$multisele2.VueMultiselect) !== null && _this$$refs$multisele3 !== void 0 && _this$$refs$multisele3.search) {
          this.$refs.multiselect.$refs.VueMultiselect.search = '';
        }

        await this.getRecommendations();
      } catch (error) {
        // focus back if any error
        const input = this.$refs.multiselect.$el.querySelector('input');

        if (input) {
          input.focus();
        }

        this.query = value.shareWith;
        console.error('Error while adding new share', error);
      } finally {
        this.loading = false;
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingInherited.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingInherited.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionButton */ "./node_modules/@nextcloud/vue/dist/Components/ActionButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _models_Share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Share */ "./apps/files_sharing/src/models/Share.js");
/* harmony import */ var _components_SharingEntryInherited__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SharingEntryInherited */ "./apps/files_sharing/src/components/SharingEntryInherited.vue");
/* harmony import */ var _components_SharingEntrySimple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SharingEntrySimple */ "./apps/files_sharing/src/components/SharingEntrySimple.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SharingInherited',
  components: {
    ActionButton: (_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1___default()),
    SharingEntryInherited: _components_SharingEntryInherited__WEBPACK_IMPORTED_MODULE_4__["default"],
    SharingEntrySimple: _components_SharingEntrySimple__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    fileInfo: {
      type: Object,
      default: () => {},
      required: true
    }
  },

  data() {
    return {
      loaded: false,
      loading: false,
      showInheritedShares: false,
      shares: []
    };
  },

  computed: {
    showInheritedSharesIcon() {
      if (this.loading) {
        return 'icon-loading-small';
      }

      if (this.showInheritedShares) {
        return 'icon-triangle-n';
      }

      return 'icon-triangle-s';
    },

    mainTitle() {
      return t('files_sharing', 'Others with access');
    },

    subTitle() {
      return this.showInheritedShares && this.shares.length === 0 ? t('files_sharing', 'No other users with access found') : '';
    },

    toggleTooltip() {
      return this.fileInfo.type === 'dir' ? t('files_sharing', 'Toggle list of others with access to this directory') : t('files_sharing', 'Toggle list of others with access to this file');
    },

    fullPath() {
      const path = "".concat(this.fileInfo.path, "/").concat(this.fileInfo.name);
      return path.replace('//', '/');
    }

  },
  watch: {
    fileInfo() {
      this.resetState();
    }

  },
  methods: {
    /**
     * Toggle the list view and fetch/reset the state
     */
    toggleInheritedShares() {
      this.showInheritedShares = !this.showInheritedShares;

      if (this.showInheritedShares) {
        this.fetchInheritedShares();
      } else {
        this.resetState();
      }
    },

    /**
     * Fetch the Inherited Shares array
     */
    async fetchInheritedShares() {
      this.loading = true;

      try {
        const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('apps/files_sharing/api/v1/shares/inherited?format=json&path={path}', {
          path: this.fullPath
        });
        const shares = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(url);
        this.shares = shares.data.ocs.data.map(share => new _models_Share__WEBPACK_IMPORTED_MODULE_3__["default"](share)).sort((a, b) => b.createdTime - a.createdTime);
        console.info(this.shares);
        this.loaded = true;
      } catch (error) {
        OC.Notification.showTemporary(t('files_sharing', 'Unable to fetch inherited shares'), {
          type: 'error'
        });
      } finally {
        this.loading = false;
      }
    },

    /**
     * Reset current component state
     */
    resetState() {
      this.loaded = false;
      this.loading = false;
      this.showInheritedShares = false;
      this.shares = [];
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingLinkList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingLinkList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Share */ "./apps/files_sharing/src/models/Share.js");
/* harmony import */ var _mixins_ShareTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/ShareTypes */ "./apps/files_sharing/src/mixins/ShareTypes.js");
/* harmony import */ var _components_SharingEntryLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SharingEntryLink */ "./apps/files_sharing/src/components/SharingEntryLink.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// eslint-disable-next-line no-unused-vars



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SharingLinkList',
  components: {
    SharingEntryLink: _components_SharingEntryLink__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_mixins_ShareTypes__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    fileInfo: {
      type: Object,
      default: () => {},
      required: true
    },
    shares: {
      type: Array,
      default: () => [],
      required: true
    },
    canReshare: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      canLinkShare: OC.getCapabilities().files_sharing.public.enabled
    };
  },

  computed: {
    /**
     * Do we have link shares?
     * Using this to still show the `new link share`
     * button regardless of mail shares
     *
     * @return {Array}
     */
    hasLinkShares() {
      return this.shares.filter(share => share.type === this.SHARE_TYPES.SHARE_TYPE_LINK).length > 0;
    },

    /**
     * Do we have any link or email shares?
     *
     * @return {boolean}
     */
    hasShares() {
      return this.shares.length > 0;
    }

  },
  methods: {
    /**
     * Add a new share into the link shares list
     * and return the newly created share component
     *
     * @param {Share} share the share to add to the array
     * @param {Function} resolve a function to run after the share is added and its component initialized
     */
    addShare(share, resolve) {
      // eslint-disable-next-line vue/no-mutating-props
      this.shares.unshift(share);
      this.awaitForShare(share, resolve);
    },

    /**
     * Await for next tick and render after the list updated
     * Then resolve with the matched vue component of the
     * provided share object
     *
     * @param {Share} share newly created share
     * @param {Function} resolve a function to execute after
     */
    awaitForShare(share, resolve) {
      this.$nextTick(() => {
        const newShare = this.$children.find(component => component.share === share);

        if (newShare) {
          resolve(newShare);
        }
      });
    },

    /**
     * Remove a share from the shares list
     *
     * @param {Share} share the share to remove
     */
    removeShare(share) {
      const index = this.shares.findIndex(item => item === share); // eslint-disable-next-line vue/no-mutating-props

      this.shares.splice(index, 1);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Share */ "./apps/files_sharing/src/models/Share.js");
/* harmony import */ var _components_SharingEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SharingEntry */ "./apps/files_sharing/src/components/SharingEntry.vue");
/* harmony import */ var _mixins_ShareTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/ShareTypes */ "./apps/files_sharing/src/mixins/ShareTypes.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// eslint-disable-next-line no-unused-vars



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SharingList',
  components: {
    SharingEntry: _components_SharingEntry__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_mixins_ShareTypes__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: {
    fileInfo: {
      type: Object,
      default: () => {},
      required: true
    },
    shares: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  computed: {
    hasShares() {
      return this.shares.length === 0;
    },

    isUnique() {
      return share => {
        return [...this.shares].filter(item => {
          return share.type === this.SHARE_TYPES.SHARE_TYPE_USER && share.shareWithDisplayName === item.shareWithDisplayName;
        }).length <= 1;
      };
    }

  },
  methods: {
    /**
     * Remove a share from the shares list
     *
     * @param {Share} share the share to remove
     */
    removeShare(share) {
      const index = this.shares.findIndex(item => item === share); // eslint-disable-next-line vue/no-mutating-props

      this.shares.splice(index, 1);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingTab.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingTab.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nextcloud_vue_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nextcloud-vue-collections */ "./node_modules/nextcloud-vue-collections/dist/nextcloud-vue-collections.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Avatar */ "./node_modules/@nextcloud/vue/dist/Components/Avatar.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _services_ConfigService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ConfigService */ "./apps/files_sharing/src/services/ConfigService.js");
/* harmony import */ var _utils_SharedWithMe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/SharedWithMe */ "./apps/files_sharing/src/utils/SharedWithMe.js");
/* harmony import */ var _models_Share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/Share */ "./apps/files_sharing/src/models/Share.js");
/* harmony import */ var _mixins_ShareTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mixins/ShareTypes */ "./apps/files_sharing/src/mixins/ShareTypes.js");
/* harmony import */ var _components_SharingEntryInternal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SharingEntryInternal */ "./apps/files_sharing/src/components/SharingEntryInternal.vue");
/* harmony import */ var _components_SharingEntrySimple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SharingEntrySimple */ "./apps/files_sharing/src/components/SharingEntrySimple.vue");
/* harmony import */ var _components_SharingInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SharingInput */ "./apps/files_sharing/src/components/SharingInput.vue");
/* harmony import */ var _SharingInherited__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SharingInherited */ "./apps/files_sharing/src/views/SharingInherited.vue");
/* harmony import */ var _SharingLinkList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SharingLinkList */ "./apps/files_sharing/src/views/SharingLinkList.vue");
/* harmony import */ var _SharingList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SharingList */ "./apps/files_sharing/src/views/SharingList.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SharingTab',
  components: {
    Avatar: (_nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_2___default()),
    CollectionList: nextcloud_vue_collections__WEBPACK_IMPORTED_MODULE_0__.CollectionList,
    SharingEntryInternal: _components_SharingEntryInternal__WEBPACK_IMPORTED_MODULE_8__["default"],
    SharingEntrySimple: _components_SharingEntrySimple__WEBPACK_IMPORTED_MODULE_9__["default"],
    SharingInherited: _SharingInherited__WEBPACK_IMPORTED_MODULE_11__["default"],
    SharingInput: _components_SharingInput__WEBPACK_IMPORTED_MODULE_10__["default"],
    SharingLinkList: _SharingLinkList__WEBPACK_IMPORTED_MODULE_12__["default"],
    SharingList: _SharingList__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  mixins: [_mixins_ShareTypes__WEBPACK_IMPORTED_MODULE_7__["default"]],

  data() {
    return {
      config: new _services_ConfigService__WEBPACK_IMPORTED_MODULE_4__["default"](),
      error: '',
      expirationInterval: null,
      loading: true,
      fileInfo: null,
      // reshare Share object
      reshare: null,
      sharedWithMe: {},
      shares: [],
      linkShares: [],
      sections: OCA.Sharing.ShareTabSections.getSections()
    };
  },

  computed: {
    /**
     * Is this share shared with me?
     *
     * @return {boolean}
     */
    isSharedWithMe() {
      return Object.keys(this.sharedWithMe).length > 0;
    },

    canReshare() {
      return !!(this.fileInfo.permissions & OC.PERMISSION_SHARE) || !!(this.reshare && this.reshare.hasSharePermission && this.config.isResharingAllowed);
    }

  },
  methods: {
    /**
     * Update current fileInfo and fetch new data
     *
     * @param {object} fileInfo the current file FileInfo
     */
    async update(fileInfo) {
      this.fileInfo = fileInfo;
      this.resetState();
      this.getShares();
    },

    /**
     * Get the existing shares infos
     */
    async getShares() {
      try {
        this.loading = true; // init params

        const shareUrl = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_sharing/api/v1/shares');
        const format = 'json'; // TODO: replace with proper getFUllpath implementation of our own FileInfo model

        const path = (this.fileInfo.path + '/' + this.fileInfo.name).replace('//', '/'); // fetch shares

        const fetchShares = _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(shareUrl, {
          params: {
            format,
            path,
            reshares: true
          }
        });
        const fetchSharedWithMe = _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(shareUrl, {
          params: {
            format,
            path,
            shared_with_me: true
          }
        }); // wait for data

        const [shares, sharedWithMe] = await Promise.all([fetchShares, fetchSharedWithMe]);
        this.loading = false; // process results

        this.processSharedWithMe(sharedWithMe);
        this.processShares(shares);
      } catch (error) {
        this.error = t('files_sharing', 'Unable to load the shares list');
        this.loading = false;
        console.error('Error loading the shares list', error);
      }
    },

    /**
     * Reset the current view to its default state
     */
    resetState() {
      clearInterval(this.expirationInterval);
      this.loading = true;
      this.error = '';
      this.sharedWithMe = {};
      this.shares = [];
      this.linkShares = [];
    },

    /**
     * Update sharedWithMe.subtitle with the appropriate
     * expiration time left
     *
     * @param {Share} share the sharedWith Share object
     */
    updateExpirationSubtitle(share) {
      const expiration = moment(share.expireDate).unix();
      this.$set(this.sharedWithMe, 'subtitle', t('files_sharing', 'Expires {relativetime}', {
        relativetime: OC.Util.relativeModifiedDate(expiration * 1000)
      })); // share have expired

      if (moment().unix() > expiration) {
        clearInterval(this.expirationInterval); // TODO: clear ui if share is expired

        this.$set(this.sharedWithMe, 'subtitle', t('files_sharing', 'this share just expired.'));
      }
    },

    /**
     * Process the current shares data
     * and init shares[]
     *
     * @param {object} share the share ocs api request data
     * @param {object} share.data the request data
     */
    processShares(_ref) {
      let {
        data
      } = _ref;

      if (data.ocs && data.ocs.data && data.ocs.data.length > 0) {
        // create Share objects and sort by newest
        const shares = data.ocs.data.map(share => new _models_Share__WEBPACK_IMPORTED_MODULE_6__["default"](share)).sort((a, b) => b.createdTime - a.createdTime);
        this.linkShares = shares.filter(share => share.type === this.SHARE_TYPES.SHARE_TYPE_LINK || share.type === this.SHARE_TYPES.SHARE_TYPE_EMAIL);
        this.shares = shares.filter(share => share.type !== this.SHARE_TYPES.SHARE_TYPE_LINK && share.type !== this.SHARE_TYPES.SHARE_TYPE_EMAIL);
        console.debug('Processed', this.linkShares.length, 'link share(s)');
        console.debug('Processed', this.shares.length, 'share(s)');
      }
    },

    /**
     * Process the sharedWithMe share data
     * and init sharedWithMe
     *
     * @param {object} share the share ocs api request data
     * @param {object} share.data the request data
     */
    processSharedWithMe(_ref2) {
      let {
        data
      } = _ref2;

      if (data.ocs && data.ocs.data && data.ocs.data[0]) {
        const share = new _models_Share__WEBPACK_IMPORTED_MODULE_6__["default"](data);
        const title = (0,_utils_SharedWithMe__WEBPACK_IMPORTED_MODULE_5__.shareWithTitle)(share);
        const displayName = share.ownerDisplayName;
        const user = share.owner;
        this.sharedWithMe = {
          displayName,
          title,
          user
        };
        this.reshare = share; // If we have an expiration date, use it as subtitle
        // Refresh the status every 10s and clear if expired

        if (share.expireDate && moment(share.expireDate).unix() > moment().unix()) {
          // first update
          this.updateExpirationSubtitle(share); // interval update

          this.expirationInterval = setInterval(this.updateExpirationSubtitle, 10000, share);
        }
      }
    },

    /**
     * Add a new share into the shares list
     * and return the newly created share component
     *
     * @param {Share} share the share to add to the array
     * @param {Function} [resolve] a function to run after the share is added and its component initialized
     */
    addShare(share) {
      let resolve = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};

      // only catching share type MAIL as link shares are added differently
      // meaning: not from the ShareInput
      if (share.type === this.SHARE_TYPES.SHARE_TYPE_EMAIL) {
        this.linkShares.unshift(share);
      } else {
        this.shares.unshift(share);
      }

      this.awaitForShare(share, resolve);
    },

    /**
     * Await for next tick and render after the list updated
     * Then resolve with the matched vue component of the
     * provided share object
     *
     * @param {Share} share newly created share
     * @param {Function} resolve a function to execute after
     */
    awaitForShare(share, resolve) {
      let listComponent = this.$refs.shareList; // Only mail shares comes from the input, link shares
      // are managed internally in the SharingLinkList component

      if (share.type === this.SHARE_TYPES.SHARE_TYPE_EMAIL) {
        listComponent = this.$refs.linkShareList;
      }

      this.$nextTick(() => {
        const newShare = listComponent.$children.find(component => component.share === share);

        if (newShare) {
          resolve(newShare);
        }
      });
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntry.vue?vue&type=style&index=0&id=61240f7a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntry.vue?vue&type=style&index=0&id=61240f7a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".sharing-entry[data-v-61240f7a] {\n  display: flex;\n  align-items: center;\n  height: 44px;\n}\n.sharing-entry__desc[data-v-61240f7a] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 8px;\n  line-height: 1.2em;\n}\n.sharing-entry__desc p[data-v-61240f7a] {\n  color: var(--color-text-maxcontrast);\n}\n.sharing-entry__desc-unique[data-v-61240f7a] {\n  color: var(--color-text-maxcontrast);\n}\n.sharing-entry__actions[data-v-61240f7a] {\n  margin-left: auto;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=style&index=0&id=06bd31b0&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=style&index=0&id=06bd31b0&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".sharing-entry[data-v-06bd31b0] {\n  display: flex;\n  align-items: center;\n  height: 44px;\n}\n.sharing-entry__desc[data-v-06bd31b0] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 8px;\n  line-height: 1.2em;\n}\n.sharing-entry__desc p[data-v-06bd31b0] {\n  color: var(--color-text-maxcontrast);\n}\n.sharing-entry__actions[data-v-06bd31b0] {\n  margin-left: auto;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=style&index=0&id=f55cfc52&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=style&index=0&id=f55cfc52&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".sharing-entry__internal .avatar-external[data-v-f55cfc52] {\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  font-size: 18px;\n  background-color: var(--color-text-maxcontrast);\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.sharing-entry__internal .icon-checkmark-color[data-v-f55cfc52] {\n  opacity: 1;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=style&index=0&id=7a675594&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=style&index=0&id=7a675594&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".sharing-entry[data-v-7a675594] {\n  display: flex;\n  align-items: center;\n  min-height: 44px;\n}\n.sharing-entry__desc[data-v-7a675594] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 8px;\n  line-height: 1.2em;\n  overflow: hidden;\n}\n.sharing-entry__desc h5[data-v-7a675594] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.sharing-entry__desc p[data-v-7a675594] {\n  color: var(--color-text-maxcontrast);\n}\n.sharing-entry:not(.sharing-entry--share) .sharing-entry__actions .new-share-link[data-v-7a675594] {\n  border-top: 1px solid var(--color-border);\n}\n.sharing-entry[data-v-7a675594]  .avatar-link-share {\n  background-color: var(--color-primary);\n}\n.sharing-entry .sharing-entry__action--public-upload[data-v-7a675594] {\n  border-bottom: 1px solid var(--color-border);\n}\n.sharing-entry__loading[data-v-7a675594] {\n  width: 44px;\n  height: 44px;\n  margin: 0;\n  padding: 14px;\n  margin-left: auto;\n}\n.sharing-entry .action-item[data-v-7a675594] {\n  margin-left: auto;\n}\n.sharing-entry .action-item ~ .action-item[data-v-7a675594],\n.sharing-entry .action-item ~ .sharing-entry__loading[data-v-7a675594] {\n  margin-left: 0;\n}\n.sharing-entry .icon-checkmark-color[data-v-7a675594] {\n  opacity: 1;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=style&index=0&id=354542cc&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=style&index=0&id=354542cc&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".sharing-entry[data-v-354542cc] {\n  display: flex;\n  align-items: center;\n  min-height: 44px;\n}\n.sharing-entry__desc[data-v-354542cc] {\n  padding: 8px;\n  line-height: 1.2em;\n  position: relative;\n  flex: 1 1;\n  min-width: 0;\n}\n.sharing-entry__desc h5[data-v-354542cc] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: inherit;\n}\n.sharing-entry__desc p[data-v-354542cc] {\n  color: var(--color-text-maxcontrast);\n}\n.sharing-entry__actions[data-v-354542cc] {\n  margin-left: auto !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingInput.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingInput.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".sharing-input {\n  width: 100%;\n  margin: 10px 0;\n}\n.sharing-input .multiselect__option span[lookup] .avatardiv {\n  background-image: var(--icon-search-fff);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: var(--color-text-maxcontrast) !important;\n}\n.sharing-input .multiselect__option span[lookup] .avatardiv div {\n  display: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingInherited.vue?vue&type=style&index=0&id=3f1bda78&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingInherited.vue?vue&type=style&index=0&id=3f1bda78&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".sharing-entry__inherited .avatar-shared[data-v-3f1bda78] {\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  font-size: 18px;\n  background-color: var(--color-text-maxcontrast);\n  border-radius: 50%;\n  flex-shrink: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntry.vue?vue&type=style&index=0&id=61240f7a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntry.vue?vue&type=style&index=0&id=61240f7a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntry_vue_vue_type_style_index_0_id_61240f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntry.vue?vue&type=style&index=0&id=61240f7a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntry.vue?vue&type=style&index=0&id=61240f7a&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntry_vue_vue_type_style_index_0_id_61240f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntry_vue_vue_type_style_index_0_id_61240f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=style&index=0&id=06bd31b0&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=style&index=0&id=06bd31b0&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInherited_vue_vue_type_style_index_0_id_06bd31b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntryInherited.vue?vue&type=style&index=0&id=06bd31b0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=style&index=0&id=06bd31b0&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInherited_vue_vue_type_style_index_0_id_06bd31b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInherited_vue_vue_type_style_index_0_id_06bd31b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=style&index=0&id=f55cfc52&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=style&index=0&id=f55cfc52&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInternal_vue_vue_type_style_index_0_id_f55cfc52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntryInternal.vue?vue&type=style&index=0&id=f55cfc52&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=style&index=0&id=f55cfc52&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInternal_vue_vue_type_style_index_0_id_f55cfc52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInternal_vue_vue_type_style_index_0_id_f55cfc52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=style&index=0&id=7a675594&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=style&index=0&id=7a675594&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryLink_vue_vue_type_style_index_0_id_7a675594_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntryLink.vue?vue&type=style&index=0&id=7a675594&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=style&index=0&id=7a675594&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryLink_vue_vue_type_style_index_0_id_7a675594_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryLink_vue_vue_type_style_index_0_id_7a675594_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=style&index=0&id=354542cc&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=style&index=0&id=354542cc&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntrySimple_vue_vue_type_style_index_0_id_354542cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntrySimple.vue?vue&type=style&index=0&id=354542cc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=style&index=0&id=354542cc&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntrySimple_vue_vue_type_style_index_0_id_354542cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntrySimple_vue_vue_type_style_index_0_id_354542cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingInput.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingInput.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingInput.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingInput.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingInherited.vue?vue&type=style&index=0&id=3f1bda78&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingInherited.vue?vue&type=style&index=0&id=3f1bda78&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInherited_vue_vue_type_style_index_0_id_3f1bda78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingInherited.vue?vue&type=style&index=0&id=3f1bda78&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingInherited.vue?vue&type=style&index=0&id=3f1bda78&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInherited_vue_vue_type_style_index_0_id_3f1bda78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInherited_vue_vue_type_style_index_0_id_3f1bda78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./apps/files_sharing/src/components/ExternalShareAction.vue":
/*!*******************************************************************!*\
  !*** ./apps/files_sharing/src/components/ExternalShareAction.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExternalShareAction_vue_vue_type_template_id_27835356___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExternalShareAction.vue?vue&type=template&id=27835356& */ "./apps/files_sharing/src/components/ExternalShareAction.vue?vue&type=template&id=27835356&");
/* harmony import */ var _ExternalShareAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExternalShareAction.vue?vue&type=script&lang=js& */ "./apps/files_sharing/src/components/ExternalShareAction.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExternalShareAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExternalShareAction_vue_vue_type_template_id_27835356___WEBPACK_IMPORTED_MODULE_0__.render,
  _ExternalShareAction_vue_vue_type_template_id_27835356___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_sharing/src/components/ExternalShareAction.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntry.vue":
/*!************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntry.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SharingEntry_vue_vue_type_template_id_61240f7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharingEntry.vue?vue&type=template&id=61240f7a&scoped=true& */ "./apps/files_sharing/src/components/SharingEntry.vue?vue&type=template&id=61240f7a&scoped=true&");
/* harmony import */ var _SharingEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharingEntry.vue?vue&type=script&lang=js& */ "./apps/files_sharing/src/components/SharingEntry.vue?vue&type=script&lang=js&");
/* harmony import */ var _SharingEntry_vue_vue_type_style_index_0_id_61240f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharingEntry.vue?vue&type=style&index=0&id=61240f7a&lang=scss&scoped=true& */ "./apps/files_sharing/src/components/SharingEntry.vue?vue&type=style&index=0&id=61240f7a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SharingEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharingEntry_vue_vue_type_template_id_61240f7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SharingEntry_vue_vue_type_template_id_61240f7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "61240f7a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_sharing/src/components/SharingEntry.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntryInherited.vue":
/*!*********************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntryInherited.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SharingEntryInherited_vue_vue_type_template_id_06bd31b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharingEntryInherited.vue?vue&type=template&id=06bd31b0&scoped=true& */ "./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=template&id=06bd31b0&scoped=true&");
/* harmony import */ var _SharingEntryInherited_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharingEntryInherited.vue?vue&type=script&lang=js& */ "./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=script&lang=js&");
/* harmony import */ var _SharingEntryInherited_vue_vue_type_style_index_0_id_06bd31b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharingEntryInherited.vue?vue&type=style&index=0&id=06bd31b0&lang=scss&scoped=true& */ "./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=style&index=0&id=06bd31b0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SharingEntryInherited_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharingEntryInherited_vue_vue_type_template_id_06bd31b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SharingEntryInherited_vue_vue_type_template_id_06bd31b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "06bd31b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_sharing/src/components/SharingEntryInherited.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntryInternal.vue":
/*!********************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntryInternal.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SharingEntryInternal_vue_vue_type_template_id_f55cfc52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharingEntryInternal.vue?vue&type=template&id=f55cfc52&scoped=true& */ "./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=template&id=f55cfc52&scoped=true&");
/* harmony import */ var _SharingEntryInternal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharingEntryInternal.vue?vue&type=script&lang=js& */ "./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=script&lang=js&");
/* harmony import */ var _SharingEntryInternal_vue_vue_type_style_index_0_id_f55cfc52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharingEntryInternal.vue?vue&type=style&index=0&id=f55cfc52&lang=scss&scoped=true& */ "./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=style&index=0&id=f55cfc52&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SharingEntryInternal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharingEntryInternal_vue_vue_type_template_id_f55cfc52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SharingEntryInternal_vue_vue_type_template_id_f55cfc52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f55cfc52",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_sharing/src/components/SharingEntryInternal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntryLink.vue":
/*!****************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntryLink.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SharingEntryLink_vue_vue_type_template_id_7a675594_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharingEntryLink.vue?vue&type=template&id=7a675594&scoped=true& */ "./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=template&id=7a675594&scoped=true&");
/* harmony import */ var _SharingEntryLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharingEntryLink.vue?vue&type=script&lang=js& */ "./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _SharingEntryLink_vue_vue_type_style_index_0_id_7a675594_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharingEntryLink.vue?vue&type=style&index=0&id=7a675594&lang=scss&scoped=true& */ "./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=style&index=0&id=7a675594&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SharingEntryLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharingEntryLink_vue_vue_type_template_id_7a675594_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SharingEntryLink_vue_vue_type_template_id_7a675594_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7a675594",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_sharing/src/components/SharingEntryLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntrySimple.vue":
/*!******************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntrySimple.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SharingEntrySimple_vue_vue_type_template_id_354542cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharingEntrySimple.vue?vue&type=template&id=354542cc&scoped=true& */ "./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=template&id=354542cc&scoped=true&");
/* harmony import */ var _SharingEntrySimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharingEntrySimple.vue?vue&type=script&lang=js& */ "./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=script&lang=js&");
/* harmony import */ var _SharingEntrySimple_vue_vue_type_style_index_0_id_354542cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharingEntrySimple.vue?vue&type=style&index=0&id=354542cc&lang=scss&scoped=true& */ "./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=style&index=0&id=354542cc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SharingEntrySimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharingEntrySimple_vue_vue_type_template_id_354542cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SharingEntrySimple_vue_vue_type_template_id_354542cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "354542cc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_sharing/src/components/SharingEntrySimple.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_sharing/src/components/SharingInput.vue":
/*!************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingInput.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SharingInput_vue_vue_type_template_id_39161a5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharingInput.vue?vue&type=template&id=39161a5c& */ "./apps/files_sharing/src/components/SharingInput.vue?vue&type=template&id=39161a5c&");
/* harmony import */ var _SharingInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharingInput.vue?vue&type=script&lang=js& */ "./apps/files_sharing/src/components/SharingInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _SharingInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharingInput.vue?vue&type=style&index=0&lang=scss& */ "./apps/files_sharing/src/components/SharingInput.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SharingInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharingInput_vue_vue_type_template_id_39161a5c___WEBPACK_IMPORTED_MODULE_0__.render,
  _SharingInput_vue_vue_type_template_id_39161a5c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_sharing/src/components/SharingInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_sharing/src/views/SharingInherited.vue":
/*!***********************************************************!*\
  !*** ./apps/files_sharing/src/views/SharingInherited.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SharingInherited_vue_vue_type_template_id_3f1bda78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharingInherited.vue?vue&type=template&id=3f1bda78&scoped=true& */ "./apps/files_sharing/src/views/SharingInherited.vue?vue&type=template&id=3f1bda78&scoped=true&");
/* harmony import */ var _SharingInherited_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharingInherited.vue?vue&type=script&lang=js& */ "./apps/files_sharing/src/views/SharingInherited.vue?vue&type=script&lang=js&");
/* harmony import */ var _SharingInherited_vue_vue_type_style_index_0_id_3f1bda78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharingInherited.vue?vue&type=style&index=0&id=3f1bda78&lang=scss&scoped=true& */ "./apps/files_sharing/src/views/SharingInherited.vue?vue&type=style&index=0&id=3f1bda78&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SharingInherited_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharingInherited_vue_vue_type_template_id_3f1bda78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SharingInherited_vue_vue_type_template_id_3f1bda78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3f1bda78",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_sharing/src/views/SharingInherited.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_sharing/src/views/SharingLinkList.vue":
/*!**********************************************************!*\
  !*** ./apps/files_sharing/src/views/SharingLinkList.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SharingLinkList_vue_vue_type_template_id_dd248c84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharingLinkList.vue?vue&type=template&id=dd248c84& */ "./apps/files_sharing/src/views/SharingLinkList.vue?vue&type=template&id=dd248c84&");
/* harmony import */ var _SharingLinkList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharingLinkList.vue?vue&type=script&lang=js& */ "./apps/files_sharing/src/views/SharingLinkList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharingLinkList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharingLinkList_vue_vue_type_template_id_dd248c84___WEBPACK_IMPORTED_MODULE_0__.render,
  _SharingLinkList_vue_vue_type_template_id_dd248c84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_sharing/src/views/SharingLinkList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_sharing/src/views/SharingList.vue":
/*!******************************************************!*\
  !*** ./apps/files_sharing/src/views/SharingList.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SharingList_vue_vue_type_template_id_698e26a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharingList.vue?vue&type=template&id=698e26a4& */ "./apps/files_sharing/src/views/SharingList.vue?vue&type=template&id=698e26a4&");
/* harmony import */ var _SharingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharingList.vue?vue&type=script&lang=js& */ "./apps/files_sharing/src/views/SharingList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharingList_vue_vue_type_template_id_698e26a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _SharingList_vue_vue_type_template_id_698e26a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_sharing/src/views/SharingList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_sharing/src/views/SharingTab.vue":
/*!*****************************************************!*\
  !*** ./apps/files_sharing/src/views/SharingTab.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SharingTab_vue_vue_type_template_id_0f81577f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharingTab.vue?vue&type=template&id=0f81577f& */ "./apps/files_sharing/src/views/SharingTab.vue?vue&type=template&id=0f81577f&");
/* harmony import */ var _SharingTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharingTab.vue?vue&type=script&lang=js& */ "./apps/files_sharing/src/views/SharingTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharingTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharingTab_vue_vue_type_template_id_0f81577f___WEBPACK_IMPORTED_MODULE_0__.render,
  _SharingTab_vue_vue_type_template_id_0f81577f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_sharing/src/views/SharingTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_sharing/src/components/ExternalShareAction.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/ExternalShareAction.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ExternalShareAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExternalShareAction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/ExternalShareAction.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ExternalShareAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntry.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntry.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntry.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInherited_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntryInherited.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInherited_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInternal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntryInternal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInternal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntryLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntrySimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntrySimple.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntrySimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_sharing/src/components/SharingInput.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingInput.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_sharing/src/views/SharingInherited.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./apps/files_sharing/src/views/SharingInherited.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInherited_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingInherited.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingInherited.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInherited_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_sharing/src/views/SharingLinkList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./apps/files_sharing/src/views/SharingLinkList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingLinkList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingLinkList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingLinkList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingLinkList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_sharing/src/views/SharingList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./apps/files_sharing/src/views/SharingList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_sharing/src/views/SharingTab.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./apps/files_sharing/src/views/SharingTab.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntry.vue?vue&type=style&index=0&id=61240f7a&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntry.vue?vue&type=style&index=0&id=61240f7a&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntry_vue_vue_type_style_index_0_id_61240f7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntry.vue?vue&type=style&index=0&id=61240f7a&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntry.vue?vue&type=style&index=0&id=61240f7a&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=style&index=0&id=06bd31b0&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=style&index=0&id=06bd31b0&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInherited_vue_vue_type_style_index_0_id_06bd31b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntryInherited.vue?vue&type=style&index=0&id=06bd31b0&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=style&index=0&id=06bd31b0&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=style&index=0&id=f55cfc52&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=style&index=0&id=f55cfc52&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInternal_vue_vue_type_style_index_0_id_f55cfc52_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntryInternal.vue?vue&type=style&index=0&id=f55cfc52&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=style&index=0&id=f55cfc52&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=style&index=0&id=7a675594&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=style&index=0&id=7a675594&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryLink_vue_vue_type_style_index_0_id_7a675594_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntryLink.vue?vue&type=style&index=0&id=7a675594&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=style&index=0&id=7a675594&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=style&index=0&id=354542cc&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=style&index=0&id=354542cc&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntrySimple_vue_vue_type_style_index_0_id_354542cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntrySimple.vue?vue&type=style&index=0&id=354542cc&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=style&index=0&id=354542cc&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/files_sharing/src/components/SharingInput.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingInput.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingInput.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingInput.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./apps/files_sharing/src/views/SharingInherited.vue?vue&type=style&index=0&id=3f1bda78&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./apps/files_sharing/src/views/SharingInherited.vue?vue&type=style&index=0&id=3f1bda78&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInherited_vue_vue_type_style_index_0_id_3f1bda78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingInherited.vue?vue&type=style&index=0&id=3f1bda78&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingInherited.vue?vue&type=style&index=0&id=3f1bda78&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/files_sharing/src/components/ExternalShareAction.vue?vue&type=template&id=27835356&":
/*!**************************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/ExternalShareAction.vue?vue&type=template&id=27835356& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExternalShareAction_vue_vue_type_template_id_27835356___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExternalShareAction_vue_vue_type_template_id_27835356___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExternalShareAction_vue_vue_type_template_id_27835356___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExternalShareAction.vue?vue&type=template&id=27835356& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/ExternalShareAction.vue?vue&type=template&id=27835356&");


/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntry.vue?vue&type=template&id=61240f7a&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntry.vue?vue&type=template&id=61240f7a&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntry_vue_vue_type_template_id_61240f7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntry_vue_vue_type_template_id_61240f7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntry_vue_vue_type_template_id_61240f7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntry.vue?vue&type=template&id=61240f7a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntry.vue?vue&type=template&id=61240f7a&scoped=true&");


/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=template&id=06bd31b0&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=template&id=06bd31b0&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInherited_vue_vue_type_template_id_06bd31b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInherited_vue_vue_type_template_id_06bd31b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInherited_vue_vue_type_template_id_06bd31b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntryInherited.vue?vue&type=template&id=06bd31b0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=template&id=06bd31b0&scoped=true&");


/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=template&id=f55cfc52&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=template&id=f55cfc52&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInternal_vue_vue_type_template_id_f55cfc52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInternal_vue_vue_type_template_id_f55cfc52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryInternal_vue_vue_type_template_id_f55cfc52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntryInternal.vue?vue&type=template&id=f55cfc52&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=template&id=f55cfc52&scoped=true&");


/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=template&id=7a675594&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=template&id=7a675594&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryLink_vue_vue_type_template_id_7a675594_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryLink_vue_vue_type_template_id_7a675594_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntryLink_vue_vue_type_template_id_7a675594_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntryLink.vue?vue&type=template&id=7a675594&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=template&id=7a675594&scoped=true&");


/***/ }),

/***/ "./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=template&id=354542cc&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=template&id=354542cc&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntrySimple_vue_vue_type_template_id_354542cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntrySimple_vue_vue_type_template_id_354542cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingEntrySimple_vue_vue_type_template_id_354542cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingEntrySimple.vue?vue&type=template&id=354542cc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=template&id=354542cc&scoped=true&");


/***/ }),

/***/ "./apps/files_sharing/src/components/SharingInput.vue?vue&type=template&id=39161a5c&":
/*!*******************************************************************************************!*\
  !*** ./apps/files_sharing/src/components/SharingInput.vue?vue&type=template&id=39161a5c& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInput_vue_vue_type_template_id_39161a5c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInput_vue_vue_type_template_id_39161a5c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInput_vue_vue_type_template_id_39161a5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingInput.vue?vue&type=template&id=39161a5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingInput.vue?vue&type=template&id=39161a5c&");


/***/ }),

/***/ "./apps/files_sharing/src/views/SharingInherited.vue?vue&type=template&id=3f1bda78&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./apps/files_sharing/src/views/SharingInherited.vue?vue&type=template&id=3f1bda78&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInherited_vue_vue_type_template_id_3f1bda78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInherited_vue_vue_type_template_id_3f1bda78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingInherited_vue_vue_type_template_id_3f1bda78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingInherited.vue?vue&type=template&id=3f1bda78&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingInherited.vue?vue&type=template&id=3f1bda78&scoped=true&");


/***/ }),

/***/ "./apps/files_sharing/src/views/SharingLinkList.vue?vue&type=template&id=dd248c84&":
/*!*****************************************************************************************!*\
  !*** ./apps/files_sharing/src/views/SharingLinkList.vue?vue&type=template&id=dd248c84& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingLinkList_vue_vue_type_template_id_dd248c84___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingLinkList_vue_vue_type_template_id_dd248c84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingLinkList_vue_vue_type_template_id_dd248c84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingLinkList.vue?vue&type=template&id=dd248c84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingLinkList.vue?vue&type=template&id=dd248c84&");


/***/ }),

/***/ "./apps/files_sharing/src/views/SharingList.vue?vue&type=template&id=698e26a4&":
/*!*************************************************************************************!*\
  !*** ./apps/files_sharing/src/views/SharingList.vue?vue&type=template&id=698e26a4& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingList_vue_vue_type_template_id_698e26a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingList_vue_vue_type_template_id_698e26a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingList_vue_vue_type_template_id_698e26a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingList.vue?vue&type=template&id=698e26a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingList.vue?vue&type=template&id=698e26a4&");


/***/ }),

/***/ "./apps/files_sharing/src/views/SharingTab.vue?vue&type=template&id=0f81577f&":
/*!************************************************************************************!*\
  !*** ./apps/files_sharing/src/views/SharingTab.vue?vue&type=template&id=0f81577f& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingTab_vue_vue_type_template_id_0f81577f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingTab_vue_vue_type_template_id_0f81577f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharingTab_vue_vue_type_template_id_0f81577f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SharingTab.vue?vue&type=template&id=0f81577f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingTab.vue?vue&type=template&id=0f81577f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/ExternalShareAction.vue?vue&type=template&id=27835356&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/ExternalShareAction.vue?vue&type=template&id=27835356& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    _vm.data.is,
    _vm._g(
      _vm._b({ tag: "Component" }, "Component", _vm.data, false),
      _vm.action.handlers
    ),
    [_vm._v("\n\t" + _vm._s(_vm.data.text) + "\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntry.vue?vue&type=template&id=61240f7a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntry.vue?vue&type=template&id=61240f7a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    "li",
    { staticClass: "sharing-entry" },
    [
      _c("Avatar", {
        staticClass: "sharing-entry__avatar",
        attrs: {
          "is-no-user": _vm.share.type !== _vm.SHARE_TYPES.SHARE_TYPE_USER,
          user: _vm.share.shareWith,
          "display-name": _vm.share.shareWithDisplayName,
          "tooltip-message":
            _vm.share.type === _vm.SHARE_TYPES.SHARE_TYPE_USER
              ? _vm.share.shareWith
              : "",
          "menu-position": "left",
          url: _vm.share.shareWithAvatar
        }
      }),
      _vm._v(" "),
      _c(
        _vm.share.shareWithLink ? "a" : "div",
        {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip.auto",
              value: _vm.tooltip,
              expression: "tooltip",
              modifiers: { auto: true }
            }
          ],
          tag: "component",
          staticClass: "sharing-entry__desc",
          attrs: { href: _vm.share.shareWithLink }
        },
        [
          _c("h5", [
            _vm._v(_vm._s(_vm.title)),
            !_vm.isUnique
              ? _c("span", { staticClass: "sharing-entry__desc-unique" }, [
                  _vm._v(
                    " (" + _vm._s(_vm.share.shareWithDisplayNameUnique) + ")"
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.hasStatus
            ? _c("p", [
                _c("span", [_vm._v(_vm._s(_vm.share.status.icon || ""))]),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(_vm.share.status.message || ""))])
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "Actions",
        {
          staticClass: "sharing-entry__actions",
          attrs: { "menu-align": "right" },
          on: { close: _vm.onMenuClose }
        },
        [
          _vm.share.canEdit
            ? [
                _c(
                  "ActionCheckbox",
                  {
                    ref: "canEdit",
                    attrs: {
                      checked: _vm.canEdit,
                      value: _vm.permissionsEdit,
                      disabled: _vm.saving || !_vm.canSetEdit
                    },
                    on: {
                      "update:checked": function($event) {
                        _vm.canEdit = $event
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n\t\t\t\t" +
                        _vm._s(_vm.t("files_sharing", "Allow editing")) +
                        "\n\t\t\t"
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.isFolder
                  ? _c(
                      "ActionCheckbox",
                      {
                        ref: "canCreate",
                        attrs: {
                          checked: _vm.canCreate,
                          value: _vm.permissionsCreate,
                          disabled: _vm.saving || !_vm.canSetCreate
                        },
                        on: {
                          "update:checked": function($event) {
                            _vm.canCreate = $event
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t" +
                            _vm._s(_vm.t("files_sharing", "Allow creating")) +
                            "\n\t\t\t"
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.isFolder
                  ? _c(
                      "ActionCheckbox",
                      {
                        ref: "canDelete",
                        attrs: {
                          checked: _vm.canDelete,
                          value: _vm.permissionsDelete,
                          disabled: _vm.saving || !_vm.canSetDelete
                        },
                        on: {
                          "update:checked": function($event) {
                            _vm.canDelete = $event
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t" +
                            _vm._s(_vm.t("files_sharing", "Allow deleting")) +
                            "\n\t\t\t"
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.config.isResharingAllowed
                  ? _c(
                      "ActionCheckbox",
                      {
                        ref: "canReshare",
                        attrs: {
                          checked: _vm.canReshare,
                          value: _vm.permissionsShare,
                          disabled: _vm.saving || !_vm.canSetReshare
                        },
                        on: {
                          "update:checked": function($event) {
                            _vm.canReshare = $event
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t" +
                            _vm._s(_vm.t("files_sharing", "Allow resharing")) +
                            "\n\t\t\t"
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "ActionCheckbox",
                  {
                    attrs: {
                      checked: _vm.hasExpirationDate,
                      disabled:
                        _vm.config.isDefaultInternalExpireDateEnforced ||
                        _vm.saving
                    },
                    on: {
                      "update:checked": function($event) {
                        _vm.hasExpirationDate = $event
                      },
                      uncheck: _vm.onExpirationDisable
                    }
                  },
                  [
                    _vm._v(
                      "\n\t\t\t\t" +
                        _vm._s(
                          _vm.config.isDefaultInternalExpireDateEnforced
                            ? _vm.t("files_sharing", "Expiration date enforced")
                            : _vm.t("files_sharing", "Set expiration date")
                        ) +
                        "\n\t\t\t"
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.hasExpirationDate
                  ? _c(
                      "ActionInput",
                      {
                        directives: [
                          {
                            name: "tooltip",
                            rawName: "v-tooltip.auto",
                            value: {
                              content: _vm.errors.expireDate,
                              show: _vm.errors.expireDate,
                              trigger: "manual"
                            },
                            expression:
                              "{\n\t\t\t\t\tcontent: errors.expireDate,\n\t\t\t\t\tshow: errors.expireDate,\n\t\t\t\t\ttrigger: 'manual'\n\t\t\t\t}",
                            modifiers: { auto: true }
                          }
                        ],
                        ref: "expireDate",
                        class: { error: _vm.errors.expireDate },
                        attrs: {
                          disabled: _vm.saving,
                          "first-day-of-week": _vm.firstDay,
                          lang: _vm.lang,
                          value: _vm.share.expireDate,
                          "value-type": "format",
                          icon: "icon-calendar-dark",
                          type: "date",
                          "disabled-date": _vm.disabledDate
                        },
                        on: { "update:value": _vm.onExpirationChange }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t" +
                            _vm._s(_vm.t("files_sharing", "Enter a date")) +
                            "\n\t\t\t"
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.canHaveNote
                  ? [
                      _c(
                        "ActionCheckbox",
                        {
                          attrs: { checked: _vm.hasNote, disabled: _vm.saving },
                          on: {
                            "update:checked": function($event) {
                              _vm.hasNote = $event
                            },
                            uncheck: function($event) {
                              return _vm.queueUpdate("note")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t" +
                              _vm._s(
                                _vm.t("files_sharing", "Note to recipient")
                              ) +
                              "\n\t\t\t\t"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.hasNote
                        ? _c("ActionTextEditable", {
                            directives: [
                              {
                                name: "tooltip",
                                rawName: "v-tooltip.auto",
                                value: {
                                  content: _vm.errors.note,
                                  show: _vm.errors.note,
                                  trigger: "manual"
                                },
                                expression:
                                  "{\n\t\t\t\t\t\tcontent: errors.note,\n\t\t\t\t\t\tshow: errors.note,\n\t\t\t\t\t\ttrigger: 'manual'\n\t\t\t\t\t}",
                                modifiers: { auto: true }
                              }
                            ],
                            ref: "note",
                            class: { error: _vm.errors.note },
                            attrs: {
                              disabled: _vm.saving,
                              value: _vm.share.newNote || _vm.share.note,
                              icon: "icon-edit"
                            },
                            on: {
                              "update:value": _vm.onNoteChange,
                              submit: _vm.onNoteSubmit
                            }
                          })
                        : _vm._e()
                    ]
                  : _vm._e()
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.share.canDelete
            ? _c(
                "ActionButton",
                {
                  attrs: { icon: "icon-close", disabled: _vm.saving },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.onDelete.apply(null, arguments)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n\t\t\t" +
                      _vm._s(_vm.t("files_sharing", "Unshare")) +
                      "\n\t\t"
                  )
                ]
              )
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=template&id=06bd31b0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInherited.vue?vue&type=template&id=06bd31b0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    "SharingEntrySimple",
    {
      key: _vm.share.id,
      staticClass: "sharing-entry__inherited",
      attrs: { title: _vm.share.shareWithDisplayName },
      scopedSlots: _vm._u([
        {
          key: "avatar",
          fn: function() {
            return [
              _c("Avatar", {
                staticClass: "sharing-entry__avatar",
                attrs: {
                  user: _vm.share.shareWith,
                  "display-name": _vm.share.shareWithDisplayName,
                  "tooltip-message": ""
                }
              })
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c("ActionText", { attrs: { icon: "icon-user" } }, [
        _vm._v(
          "\n\t\t" +
            _vm._s(
              _vm.t("files_sharing", "Added by {initiator}", {
                initiator: _vm.share.ownerDisplayName
              })
            ) +
            "\n\t"
        )
      ]),
      _vm._v(" "),
      _vm.share.viaPath && _vm.share.viaFileid
        ? _c(
            "ActionLink",
            { attrs: { icon: "icon-folder", href: _vm.viaFileTargetUrl } },
            [
              _vm._v(
                "\n\t\t" +
                  _vm._s(
                    _vm.t("files_sharing", "Via “{folder}”", {
                      folder: _vm.viaFolderName
                    })
                  ) +
                  "\n\t"
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.share.canDelete
        ? _c(
            "ActionButton",
            {
              attrs: { icon: "icon-close" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.onDelete.apply(null, arguments)
                }
              }
            },
            [
              _vm._v(
                "\n\t\t" + _vm._s(_vm.t("files_sharing", "Unshare")) + "\n\t"
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=template&id=f55cfc52&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryInternal.vue?vue&type=template&id=f55cfc52&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    "SharingEntrySimple",
    {
      staticClass: "sharing-entry__internal",
      attrs: {
        title: _vm.t("files_sharing", "Internal link"),
        subtitle: _vm.internalLinkSubtitle
      },
      scopedSlots: _vm._u([
        {
          key: "avatar",
          fn: function() {
            return [
              _c("div", { staticClass: "avatar-external icon-external-white" })
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c(
        "ActionLink",
        {
          ref: "copyButton",
          attrs: {
            href: _vm.internalLink,
            target: "_blank",
            icon:
              _vm.copied && _vm.copySuccess
                ? "icon-checkmark-color"
                : "icon-clippy"
          },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.copyLink.apply(null, arguments)
            }
          }
        },
        [_vm._v("\n\t\t" + _vm._s(_vm.clipboardTooltip) + "\n\t")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=template&id=7a675594&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntryLink.vue?vue&type=template&id=7a675594&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    "li",
    {
      staticClass: "sharing-entry sharing-entry__link",
      class: { "sharing-entry--share": _vm.share }
    },
    [
      _c("Avatar", {
        staticClass: "sharing-entry__avatar",
        attrs: {
          "is-no-user": true,
          "icon-class": _vm.isEmailShareType
            ? "avatar-link-share icon-mail-white"
            : "avatar-link-share icon-public-white"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "sharing-entry__desc" }, [
        _c("h5", { attrs: { title: _vm.title } }, [
          _vm._v("\n\t\t\t" + _vm._s(_vm.title) + "\n\t\t")
        ]),
        _vm._v(" "),
        _vm.subtitle
          ? _c("p", [_vm._v("\n\t\t\t" + _vm._s(_vm.subtitle) + "\n\t\t")])
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.share && !_vm.isEmailShareType && _vm.share.token
        ? _c(
            "Actions",
            { ref: "copyButton", staticClass: "sharing-entry__copy" },
            [
              _c(
                "ActionLink",
                {
                  attrs: {
                    href: _vm.shareLink,
                    target: "_blank",
                    icon:
                      _vm.copied && _vm.copySuccess
                        ? "icon-checkmark-color"
                        : "icon-clippy"
                  },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.copyLink.apply(null, arguments)
                    }
                  }
                },
                [_vm._v("\n\t\t\t" + _vm._s(_vm.clipboardTooltip) + "\n\t\t")]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.pending && (_vm.pendingPassword || _vm.pendingExpirationDate)
        ? _c(
            "Actions",
            {
              staticClass: "sharing-entry__actions",
              attrs: { "menu-align": "right", open: _vm.open },
              on: {
                "update:open": function($event) {
                  _vm.open = $event
                },
                close: _vm.onNewLinkShare
              }
            },
            [
              _vm.errors.pending
                ? _c(
                    "ActionText",
                    {
                      class: { error: _vm.errors.pending },
                      attrs: { icon: "icon-error" }
                    },
                    [_vm._v("\n\t\t\t" + _vm._s(_vm.errors.pending) + "\n\t\t")]
                  )
                : _c("ActionText", { attrs: { icon: "icon-info" } }, [
                    _vm._v(
                      "\n\t\t\t" +
                        _vm._s(
                          _vm.t(
                            "files_sharing",
                            "Please enter the following required information before creating the share"
                          )
                        ) +
                        "\n\t\t"
                    )
                  ]),
              _vm._v(" "),
              _vm.pendingPassword
                ? _c("ActionText", { attrs: { icon: "icon-password" } }, [
                    _vm._v(
                      "\n\t\t\t" +
                        _vm._s(
                          _vm.t(
                            "files_sharing",
                            "Password protection (enforced)"
                          )
                        ) +
                        "\n\t\t"
                    )
                  ])
                : _vm.config.enableLinkPasswordByDefault
                ? _c(
                    "ActionCheckbox",
                    {
                      staticClass: "share-link-password-checkbox",
                      attrs: {
                        checked: _vm.isPasswordProtected,
                        disabled:
                          _vm.config.enforcePasswordForPublicLink || _vm.saving
                      },
                      on: {
                        "update:checked": function($event) {
                          _vm.isPasswordProtected = $event
                        },
                        uncheck: _vm.onPasswordDisable
                      }
                    },
                    [
                      _vm._v(
                        "\n\t\t\t" +
                          _vm._s(
                            _vm.t("files_sharing", "Password protection")
                          ) +
                          "\n\t\t"
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.pendingPassword || _vm.share.password
                ? _c(
                    "ActionInput",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip.auto",
                          value: {
                            content: _vm.errors.password,
                            show: _vm.errors.password,
                            trigger: "manual",
                            defaultContainer: "#app-sidebar"
                          },
                          expression:
                            "{\n\t\t\t\tcontent: errors.password,\n\t\t\t\tshow: errors.password,\n\t\t\t\ttrigger: 'manual',\n\t\t\t\tdefaultContainer: '#app-sidebar'\n\t\t\t}",
                          modifiers: { auto: true }
                        }
                      ],
                      staticClass: "share-link-password",
                      attrs: {
                        value: _vm.share.password,
                        disabled: _vm.saving,
                        required:
                          _vm.config.enableLinkPasswordByDefault ||
                          _vm.config.enforcePasswordForPublicLink,
                        minlength:
                          _vm.isPasswordPolicyEnabled &&
                          _vm.config.passwordPolicy.minLength,
                        icon: "",
                        autocomplete: "new-password"
                      },
                      on: {
                        "update:value": function($event) {
                          return _vm.$set(_vm.share, "password", $event)
                        },
                        submit: _vm.onNewLinkShare
                      }
                    },
                    [
                      _vm._v(
                        "\n\t\t\t" +
                          _vm._s(_vm.t("files_sharing", "Enter a password")) +
                          "\n\t\t"
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.pendingExpirationDate
                ? _c("ActionText", { attrs: { icon: "icon-calendar-dark" } }, [
                    _vm._v(
                      "\n\t\t\t" +
                        _vm._s(
                          _vm.t("files_sharing", "Expiration date (enforced)")
                        ) +
                        "\n\t\t"
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.pendingExpirationDate
                ? _c(
                    "ActionInput",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip.auto",
                          value: {
                            content: _vm.errors.expireDate,
                            show: _vm.errors.expireDate,
                            trigger: "manual",
                            defaultContainer: "#app-sidebar"
                          },
                          expression:
                            "{\n\t\t\t\tcontent: errors.expireDate,\n\t\t\t\tshow: errors.expireDate,\n\t\t\t\ttrigger: 'manual',\n\t\t\t\tdefaultContainer: '#app-sidebar'\n\t\t\t}",
                          modifiers: { auto: true }
                        }
                      ],
                      staticClass: "share-link-expire-date",
                      attrs: {
                        disabled: _vm.saving,
                        "first-day-of-week": _vm.firstDay,
                        lang: _vm.lang,
                        icon: "",
                        type: "date",
                        "value-type": "format",
                        "disabled-date": _vm.disabledDate
                      },
                      model: {
                        value: _vm.share.expireDate,
                        callback: function($$v) {
                          _vm.$set(_vm.share, "expireDate", $$v)
                        },
                        expression: "share.expireDate"
                      }
                    },
                    [
                      _vm._v(
                        "\n\t\t\t" +
                          _vm._s(_vm.t("files_sharing", "Enter a date")) +
                          "\n\t\t"
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "ActionButton",
                {
                  attrs: { icon: "icon-checkmark" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      $event.stopPropagation()
                      return _vm.onNewLinkShare.apply(null, arguments)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n\t\t\t" +
                      _vm._s(_vm.t("files_sharing", "Create share")) +
                      "\n\t\t"
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "ActionButton",
                {
                  attrs: { icon: "icon-close" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      $event.stopPropagation()
                      return _vm.onCancel.apply(null, arguments)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n\t\t\t" +
                      _vm._s(_vm.t("files_sharing", "Cancel")) +
                      "\n\t\t"
                  )
                ]
              )
            ],
            1
          )
        : !_vm.loading
        ? _c(
            "Actions",
            {
              staticClass: "sharing-entry__actions",
              attrs: { "menu-align": "right", open: _vm.open },
              on: {
                "update:open": function($event) {
                  _vm.open = $event
                },
                close: _vm.onMenuClose
              }
            },
            [
              _vm.share
                ? [
                    _vm.share.canEdit && _vm.canReshare
                      ? [
                          _c(
                            "ActionInput",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip.auto",
                                  value: {
                                    content: _vm.errors.label,
                                    show: _vm.errors.label,
                                    trigger: "manual",
                                    defaultContainer: ".app-sidebar"
                                  },
                                  expression:
                                    "{\n\t\t\t\t\t\tcontent: errors.label,\n\t\t\t\t\t\tshow: errors.label,\n\t\t\t\t\t\ttrigger: 'manual',\n\t\t\t\t\t\tdefaultContainer: '.app-sidebar'\n\t\t\t\t\t}",
                                  modifiers: { auto: true }
                                }
                              ],
                              ref: "label",
                              class: { error: _vm.errors.label },
                              attrs: {
                                disabled: _vm.saving,
                                "aria-label": _vm.t(
                                  "files_sharing",
                                  "Share label"
                                ),
                                value:
                                  _vm.share.newLabel !== undefined
                                    ? _vm.share.newLabel
                                    : _vm.share.label,
                                icon: "icon-edit",
                                maxlength: "255"
                              },
                              on: {
                                "update:value": _vm.onLabelChange,
                                submit: _vm.onLabelSubmit
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.t("files_sharing", "Share label")
                                  ) +
                                  "\n\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.isFolder &&
                          _vm.fileHasCreatePermission &&
                          _vm.config.isPublicUploadEnabled
                            ? [
                                _c(
                                  "ActionRadio",
                                  {
                                    attrs: {
                                      checked:
                                        _vm.sharePermissions ===
                                        _vm.publicUploadRValue,
                                      value: _vm.publicUploadRValue,
                                      name: _vm.randomId,
                                      disabled: _vm.saving
                                    },
                                    on: { change: _vm.togglePermissions }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t" +
                                        _vm._s(
                                          _vm.t("files_sharing", "Read only")
                                        ) +
                                        "\n\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ActionRadio",
                                  {
                                    attrs: {
                                      checked:
                                        _vm.sharePermissions ===
                                        _vm.publicUploadRWValue,
                                      value: _vm.publicUploadRWValue,
                                      disabled: _vm.saving,
                                      name: _vm.randomId
                                    },
                                    on: { change: _vm.togglePermissions }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t" +
                                        _vm._s(
                                          _vm.t(
                                            "files_sharing",
                                            "Allow upload and editing"
                                          )
                                        ) +
                                        "\n\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ActionRadio",
                                  {
                                    staticClass:
                                      "sharing-entry__action--public-upload",
                                    attrs: {
                                      checked:
                                        _vm.sharePermissions ===
                                        _vm.publicUploadWValue,
                                      value: _vm.publicUploadWValue,
                                      disabled: _vm.saving,
                                      name: _vm.randomId
                                    },
                                    on: { change: _vm.togglePermissions }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t" +
                                        _vm._s(
                                          _vm.t(
                                            "files_sharing",
                                            "File drop (upload only)"
                                          )
                                        ) +
                                        "\n\t\t\t\t\t"
                                    )
                                  ]
                                )
                              ]
                            : _c(
                                "ActionCheckbox",
                                {
                                  attrs: {
                                    checked: _vm.canUpdate,
                                    disabled: _vm.saving
                                  },
                                  on: {
                                    "update:checked": function($event) {
                                      _vm.canUpdate = $event
                                    },
                                    change: function($event) {
                                      return _vm.queueUpdate("permissions")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t" +
                                      _vm._s(
                                        _vm.t("files_sharing", "Allow editing")
                                      ) +
                                      "\n\t\t\t\t"
                                  )
                                ]
                              ),
                          _vm._v(" "),
                          _c(
                            "ActionCheckbox",
                            {
                              attrs: {
                                checked: _vm.share.hideDownload,
                                disabled: _vm.saving
                              },
                              on: {
                                "update:checked": function($event) {
                                  return _vm.$set(
                                    _vm.share,
                                    "hideDownload",
                                    $event
                                  )
                                },
                                change: function($event) {
                                  return _vm.queueUpdate("hideDownload")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.t("files_sharing", "Hide download")
                                  ) +
                                  "\n\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "ActionCheckbox",
                            {
                              staticClass: "share-link-password-checkbox",
                              attrs: {
                                checked: _vm.isPasswordProtected,
                                disabled:
                                  _vm.config.enforcePasswordForPublicLink ||
                                  _vm.saving
                              },
                              on: {
                                "update:checked": function($event) {
                                  _vm.isPasswordProtected = $event
                                },
                                uncheck: _vm.onPasswordDisable
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.config.enforcePasswordForPublicLink
                                      ? _vm.t(
                                          "files_sharing",
                                          "Password protection (enforced)"
                                        )
                                      : _vm.t(
                                          "files_sharing",
                                          "Password protect"
                                        )
                                  ) +
                                  "\n\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.isPasswordProtected
                            ? _c(
                                "ActionInput",
                                {
                                  directives: [
                                    {
                                      name: "tooltip",
                                      rawName: "v-tooltip.auto",
                                      value: {
                                        content: _vm.errors.password,
                                        show: _vm.errors.password,
                                        trigger: "manual",
                                        defaultContainer: "#app-sidebar"
                                      },
                                      expression:
                                        "{\n\t\t\t\t\t\tcontent: errors.password,\n\t\t\t\t\t\tshow: errors.password,\n\t\t\t\t\t\ttrigger: 'manual',\n\t\t\t\t\t\tdefaultContainer: '#app-sidebar'\n\t\t\t\t\t}",
                                      modifiers: { auto: true }
                                    }
                                  ],
                                  ref: "password",
                                  staticClass: "share-link-password",
                                  class: { error: _vm.errors.password },
                                  attrs: {
                                    disabled: _vm.saving,
                                    required:
                                      _vm.config.enforcePasswordForPublicLink,
                                    value: _vm.hasUnsavedPassword
                                      ? _vm.share.newPassword
                                      : "***************",
                                    icon: "icon-password",
                                    autocomplete: "new-password",
                                    type: _vm.hasUnsavedPassword
                                      ? "text"
                                      : "password"
                                  },
                                  on: {
                                    "update:value": _vm.onPasswordChange,
                                    submit: _vm.onPasswordSubmit
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t" +
                                      _vm._s(
                                        _vm.t(
                                          "files_sharing",
                                          "Enter a password"
                                        )
                                      ) +
                                      "\n\t\t\t\t"
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.isPasswordProtectedByTalkAvailable
                            ? _c(
                                "ActionCheckbox",
                                {
                                  staticClass:
                                    "share-link-password-talk-checkbox",
                                  attrs: {
                                    checked: _vm.isPasswordProtectedByTalk,
                                    disabled:
                                      !_vm.canTogglePasswordProtectedByTalkAvailable ||
                                      _vm.saving
                                  },
                                  on: {
                                    "update:checked": function($event) {
                                      _vm.isPasswordProtectedByTalk = $event
                                    },
                                    change: _vm.onPasswordProtectedByTalkChange
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t" +
                                      _vm._s(
                                        _vm.t(
                                          "files_sharing",
                                          "Video verification"
                                        )
                                      ) +
                                      "\n\t\t\t\t"
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "ActionCheckbox",
                            {
                              staticClass: "share-link-expire-date-checkbox",
                              attrs: {
                                checked: _vm.hasExpirationDate,
                                disabled:
                                  _vm.config.isDefaultExpireDateEnforced ||
                                  _vm.saving
                              },
                              on: {
                                "update:checked": function($event) {
                                  _vm.hasExpirationDate = $event
                                },
                                uncheck: _vm.onExpirationDisable
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.config.isDefaultExpireDateEnforced
                                      ? _vm.t(
                                          "files_sharing",
                                          "Expiration date (enforced)"
                                        )
                                      : _vm.t(
                                          "files_sharing",
                                          "Set expiration date"
                                        )
                                  ) +
                                  "\n\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.hasExpirationDate
                            ? _c(
                                "ActionInput",
                                {
                                  directives: [
                                    {
                                      name: "tooltip",
                                      rawName: "v-tooltip.auto",
                                      value: {
                                        content: _vm.errors.expireDate,
                                        show: _vm.errors.expireDate,
                                        trigger: "manual",
                                        defaultContainer: "#app-sidebar"
                                      },
                                      expression:
                                        "{\n\t\t\t\t\t\tcontent: errors.expireDate,\n\t\t\t\t\t\tshow: errors.expireDate,\n\t\t\t\t\t\ttrigger: 'manual',\n\t\t\t\t\t\tdefaultContainer: '#app-sidebar'\n\t\t\t\t\t}",
                                      modifiers: { auto: true }
                                    }
                                  ],
                                  ref: "expireDate",
                                  staticClass: "share-link-expire-date",
                                  class: { error: _vm.errors.expireDate },
                                  attrs: {
                                    disabled: _vm.saving,
                                    "first-day-of-week": _vm.firstDay,
                                    lang: _vm.lang,
                                    value: _vm.share.expireDate,
                                    "value-type": "format",
                                    icon: "icon-calendar-dark",
                                    type: "date",
                                    "disabled-date": _vm.disabledDate
                                  },
                                  on: { "update:value": _vm.onExpirationChange }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t" +
                                      _vm._s(
                                        _vm.t("files_sharing", "Enter a date")
                                      ) +
                                      "\n\t\t\t\t"
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "ActionCheckbox",
                            {
                              attrs: {
                                checked: _vm.hasNote,
                                disabled: _vm.saving
                              },
                              on: {
                                "update:checked": function($event) {
                                  _vm.hasNote = $event
                                },
                                uncheck: function($event) {
                                  return _vm.queueUpdate("note")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.t("files_sharing", "Note to recipient")
                                  ) +
                                  "\n\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.hasNote
                            ? _c("ActionTextEditable", {
                                directives: [
                                  {
                                    name: "tooltip",
                                    rawName: "v-tooltip.auto",
                                    value: {
                                      content: _vm.errors.note,
                                      show: _vm.errors.note,
                                      trigger: "manual",
                                      defaultContainer: "#app-sidebar"
                                    },
                                    expression:
                                      "{\n\t\t\t\t\t\tcontent: errors.note,\n\t\t\t\t\t\tshow: errors.note,\n\t\t\t\t\t\ttrigger: 'manual',\n\t\t\t\t\t\tdefaultContainer: '#app-sidebar'\n\t\t\t\t\t}",
                                    modifiers: { auto: true }
                                  }
                                ],
                                ref: "note",
                                class: { error: _vm.errors.note },
                                attrs: {
                                  disabled: _vm.saving,
                                  placeholder: _vm.t(
                                    "files_sharing",
                                    "Enter a note for the share recipient"
                                  ),
                                  value: _vm.share.newNote || _vm.share.note,
                                  icon: "icon-edit"
                                },
                                on: {
                                  "update:value": _vm.onNoteChange,
                                  submit: _vm.onNoteSubmit
                                }
                              })
                            : _vm._e()
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.externalLinkActions, function(action) {
                      return _c("ExternalShareAction", {
                        key: action.id,
                        attrs: {
                          id: action.id,
                          action: action,
                          "file-info": _vm.fileInfo,
                          share: _vm.share
                        }
                      })
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.externalLegacyLinkActions, function(ref, index) {
                      var icon = ref.icon
                      var url = ref.url
                      var name = ref.name
                      return _c(
                        "ActionLink",
                        {
                          key: index,
                          attrs: {
                            href: url(_vm.shareLink),
                            icon: icon,
                            target: "_blank"
                          }
                        },
                        [_vm._v("\n\t\t\t\t" + _vm._s(name) + "\n\t\t\t")]
                      )
                    }),
                    _vm._v(" "),
                    _vm.share.canDelete
                      ? _c(
                          "ActionButton",
                          {
                            attrs: { icon: "icon-close", disabled: _vm.saving },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.onDelete.apply(null, arguments)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n\t\t\t\t" +
                                _vm._s(_vm.t("files_sharing", "Unshare")) +
                                "\n\t\t\t"
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.isEmailShareType && _vm.canReshare
                      ? _c(
                          "ActionButton",
                          {
                            staticClass: "new-share-link",
                            attrs: { icon: "icon-add" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                $event.stopPropagation()
                                return _vm.onNewLinkShare.apply(null, arguments)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n\t\t\t\t" +
                                _vm._s(
                                  _vm.t("files_sharing", "Add another link")
                                ) +
                                "\n\t\t\t"
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                : _vm.canReshare
                ? _c(
                    "ActionButton",
                    {
                      staticClass: "new-share-link",
                      attrs: {
                        icon: _vm.loading ? "icon-loading-small" : "icon-add"
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          $event.stopPropagation()
                          return _vm.onNewLinkShare.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n\t\t\t" +
                          _vm._s(
                            _vm.t("files_sharing", "Create a new share link")
                          ) +
                          "\n\t\t"
                      )
                    ]
                  )
                : _vm._e()
            ],
            2
          )
        : _c("div", {
            staticClass: "icon-loading-small sharing-entry__loading"
          })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=template&id=354542cc&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingEntrySimple.vue?vue&type=template&id=354542cc&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    "li",
    { staticClass: "sharing-entry" },
    [
      _vm._t("avatar"),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip",
              value: _vm.tooltip,
              expression: "tooltip"
            }
          ],
          staticClass: "sharing-entry__desc"
        },
        [
          _c("h5", [_vm._v(_vm._s(_vm.title))]),
          _vm._v(" "),
          _vm.subtitle
            ? _c("p", [_vm._v("\n\t\t\t" + _vm._s(_vm.subtitle) + "\n\t\t")])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _vm.$slots["default"]
        ? _c(
            "Actions",
            {
              staticClass: "sharing-entry__actions",
              attrs: { "menu-align": "right" }
            },
            [_vm._t("default")],
            2
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingInput.vue?vue&type=template&id=39161a5c&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/components/SharingInput.vue?vue&type=template&id=39161a5c& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("Multiselect", {
    ref: "multiselect",
    staticClass: "sharing-input",
    attrs: {
      "clear-on-select": true,
      disabled: !_vm.canReshare,
      "hide-selected": true,
      "internal-search": false,
      loading: _vm.loading,
      options: _vm.options,
      placeholder: _vm.inputPlaceholder,
      "preselect-first": true,
      "preserve-search": true,
      searchable: true,
      "user-select": true,
      "open-direction": "below",
      label: "displayName",
      "track-by": "id"
    },
    on: { "search-change": _vm.asyncFind, select: _vm.addShare },
    scopedSlots: _vm._u([
      {
        key: "noOptions",
        fn: function() {
          return [
            _vm._v(
              "\n\t\t" +
                _vm._s(
                  _vm.t("files_sharing", "No recommendations. Start typing.")
                ) +
                "\n\t"
            )
          ]
        },
        proxy: true
      },
      {
        key: "noResult",
        fn: function() {
          return [_vm._v("\n\t\t" + _vm._s(_vm.noResultText) + "\n\t")]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingInherited.vue?vue&type=template&id=3f1bda78&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingInherited.vue?vue&type=template&id=3f1bda78&scoped=true& ***!
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
    "ul",
    { attrs: { id: "sharing-inherited-shares" } },
    [
      _c(
        "SharingEntrySimple",
        {
          staticClass: "sharing-entry__inherited",
          attrs: { title: _vm.mainTitle, subtitle: _vm.subTitle },
          scopedSlots: _vm._u([
            {
              key: "avatar",
              fn: function() {
                return [
                  _c("div", { staticClass: "avatar-shared icon-more-white" })
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c(
            "ActionButton",
            {
              attrs: { icon: _vm.showInheritedSharesIcon },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  $event.stopPropagation()
                  return _vm.toggleInheritedShares.apply(null, arguments)
                }
              }
            },
            [_vm._v("\n\t\t\t" + _vm._s(_vm.toggleTooltip) + "\n\t\t")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.shares, function(share) {
        return _c("SharingEntryInherited", {
          key: share.id,
          attrs: { "file-info": _vm.fileInfo, share: share }
        })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingLinkList.vue?vue&type=template&id=dd248c84&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingLinkList.vue?vue&type=template&id=dd248c84& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _vm.canLinkShare
    ? _c(
        "ul",
        { staticClass: "sharing-link-list" },
        [
          !_vm.hasLinkShares && _vm.canReshare
            ? _c("SharingEntryLink", {
                attrs: {
                  "can-reshare": _vm.canReshare,
                  "file-info": _vm.fileInfo
                },
                on: { "add:share": _vm.addShare }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.hasShares
            ? _vm._l(_vm.shares, function(share, index) {
                return _c("SharingEntryLink", {
                  key: share.id,
                  attrs: {
                    "can-reshare": _vm.canReshare,
                    share: _vm.shares[index],
                    "file-info": _vm.fileInfo
                  },
                  on: {
                    "update:share": [
                      function($event) {
                        return _vm.$set(_vm.shares, index, $event)
                      },
                      function($event) {
                        return _vm.awaitForShare.apply(void 0, arguments)
                      }
                    ],
                    "add:share": function($event) {
                      return _vm.addShare.apply(void 0, arguments)
                    },
                    "remove:share": _vm.removeShare
                  }
                })
              })
            : _vm._e()
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingList.vue?vue&type=template&id=698e26a4&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingList.vue?vue&type=template&id=698e26a4& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "ul",
    { staticClass: "sharing-sharee-list" },
    _vm._l(_vm.shares, function(share) {
      return _c("SharingEntry", {
        key: share.id,
        attrs: {
          "file-info": _vm.fileInfo,
          share: share,
          "is-unique": _vm.isUnique(share)
        },
        on: { "remove:share": _vm.removeShare }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingTab.vue?vue&type=template&id=0f81577f&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_sharing/src/views/SharingTab.vue?vue&type=template&id=0f81577f& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { class: { "icon-loading": _vm.loading } },
    [
      _vm.error
        ? _c("div", { staticClass: "emptycontent" }, [
            _c("div", { staticClass: "icon icon-error" }),
            _vm._v(" "),
            _c("h2", [_vm._v(_vm._s(_vm.error))])
          ])
        : [
            _vm.isSharedWithMe
              ? _c(
                  "SharingEntrySimple",
                  _vm._b(
                    {
                      staticClass: "sharing-entry__reshare",
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "avatar",
                            fn: function() {
                              return [
                                _c("Avatar", {
                                  staticClass: "sharing-entry__avatar",
                                  attrs: {
                                    user: _vm.sharedWithMe.user,
                                    "display-name":
                                      _vm.sharedWithMe.displayName,
                                    "tooltip-message": ""
                                  }
                                })
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        false,
                        1643724538
                      )
                    },
                    "SharingEntrySimple",
                    _vm.sharedWithMe,
                    false
                  )
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.loading
              ? _c("SharingInput", {
                  attrs: {
                    "can-reshare": _vm.canReshare,
                    "file-info": _vm.fileInfo,
                    "link-shares": _vm.linkShares,
                    reshare: _vm.reshare,
                    shares: _vm.shares
                  },
                  on: { "add:share": _vm.addShare }
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.loading
              ? _c("SharingLinkList", {
                  ref: "linkShareList",
                  attrs: {
                    "can-reshare": _vm.canReshare,
                    "file-info": _vm.fileInfo,
                    shares: _vm.linkShares
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.loading
              ? _c("SharingList", {
                  ref: "shareList",
                  attrs: { shares: _vm.shares, "file-info": _vm.fileInfo }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.canReshare && !_vm.loading
              ? _c("SharingInherited", { attrs: { "file-info": _vm.fileInfo } })
              : _vm._e(),
            _vm._v(" "),
            _c("SharingEntryInternal", {
              attrs: { "file-info": _vm.fileInfo }
            }),
            _vm._v(" "),
            _vm.fileInfo
              ? _c("CollectionList", {
                  attrs: {
                    id: "" + _vm.fileInfo.id,
                    type: "file",
                    name: _vm.fileInfo.name
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.sections, function(section, index) {
              return _c(
                "div",
                {
                  key: index,
                  ref: "section-" + index,
                  refInFor: true,
                  staticClass: "sharingTab__additionalContent"
                },
                [
                  _c(section(_vm.$refs["section-" + index], _vm.fileInfo), {
                    tag: "component",
                    attrs: { "file-info": _vm.fileInfo }
                  })
                ],
                1
              )
            })
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
/******/ 			"files_sharing-files_sharing_tab": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/files_sharing/src/files_sharing_tab.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=files_sharing-files_sharing_tab.js.map?v=f85d588eff4d0cbcbbff