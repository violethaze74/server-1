/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/settings/src/main-apps-users-management.js":
/*!*********************************************************!*\
  !*** ./apps/settings/src/main-apps-users-management.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app),
/* harmony export */   "router": () => (/* reexport safe */ _router__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "store": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var v_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-tooltip */ "./node_modules/v-tooltip/dist/v-tooltip.esm.js");
/* harmony import */ var vuex_router_sync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-router-sync */ "./node_modules/vuex-router-sync/index.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ "./apps/settings/src/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./apps/settings/src/router.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./apps/settings/src/store/index.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author rakekniven <mark.ziegler@rakekniven.de>
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






vue__WEBPACK_IMPORTED_MODULE_5__["default"].use(v_tooltip__WEBPACK_IMPORTED_MODULE_0__["default"], {
  defaultHtml: false
});
(0,vuex_router_sync__WEBPACK_IMPORTED_MODULE_1__.sync)(_store__WEBPACK_IMPORTED_MODULE_4__["default"], _router__WEBPACK_IMPORTED_MODULE_3__["default"]); // CSP config for webpack dynamic chunk loading
// eslint-disable-next-line camelcase

__webpack_require__.nc = btoa(OC.requestToken); // bind to window

vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.t = t;
vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.n = n;
vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.OC = OC;
vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.OCA = OCA; // eslint-disable-next-line camelcase

vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.oc_userconfig = oc_userconfig;
const app = new vue__WEBPACK_IMPORTED_MODULE_5__["default"]({
  router: _router__WEBPACK_IMPORTED_MODULE_3__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"])
}).$mount('#content');


/***/ }),

/***/ "./apps/settings/src/router.js":
/*!*************************************!*\
  !*** ./apps/settings/src/router.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
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


 // Dynamic loading

const Users = () => Promise.all(/*! import() | settings-users */[__webpack_require__.e("core-common"), __webpack_require__.e("settings-users")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/Users */ "./apps/settings/src/views/Users.vue"));

const Apps = () => Promise.all(/*! import() | settings-apps */[__webpack_require__.e("core-common"), __webpack_require__.e("settings-apps")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/Apps */ "./apps/settings/src/views/Apps.vue"));

vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_2__["default"]);
/*
 * This is the list of routes where the vuejs app will
 * take over php to provide data
 * You need to forward the php routing (routes.php) to
 * the settings-vue template, where the vue-router will
 * ensure the proper route.
 * ⚠️ Routes needs to match the php routes.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vue_router__WEBPACK_IMPORTED_MODULE_2__["default"]({
  mode: 'history',
  // if index.php is in the url AND we got this far, then it's working:
  // let's keep using index.php in the url
  base: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)(''),
  linkActiveClass: 'active',
  routes: [{
    path: '/:index(index.php/)?settings/users',
    component: Users,
    props: true,
    name: 'users',
    children: [{
      path: ':selectedGroup',
      name: 'group',
      component: Users
    }]
  }, {
    path: '/:index(index.php/)?settings/apps',
    component: Apps,
    props: true,
    name: 'apps',
    children: [{
      path: ':category',
      name: 'apps-category',
      component: Apps,
      children: [{
        path: ':id',
        name: 'apps-details',
        component: Apps
      }]
    }]
  }]
}));

/***/ }),

/***/ "./apps/settings/src/store/api.js":
/*!****************************************!*\
  !*** ./apps/settings/src/store/api.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @author Sujith Haridasan <sujith.h@gmail.com>
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



const sanitize = function (url) {
  return url.replace(/\/$/, ''); // Remove last url slash
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**
   * This Promise is used to chain a request that require an admin password confirmation
   * Since chaining Promise have a very precise behavior concerning catch and then,
   * you'll need to be careful when using it.
   * e.g
   * // store
   * action(context) {
   *   return api.requireAdmin().then((response) => {
   *     return api.get('url')
   *       .then((response) => {API success})
   *       .catch((error) => {API failure});
   *   }).catch((error) => {requireAdmin failure});
   * }
   * // vue
   * this.$store.dispatch('action').then(() => {always executed})
   *
   * Since Promise.then().catch().then() will always execute the last then
   * this.$store.dispatch('action').then will always be executed
   *
   * If you want requireAdmin failure to also catch the API request failure
   * you will need to throw a new error in the api.get.catch()
   *
   * e.g
   * api.requireAdmin().then((response) => {
   *   api.get('url')
   *     .then((response) => {API success})
   *     .catch((error) => {throw error;});
   * }).catch((error) => {requireAdmin OR API failure});
   *
   * @return {Promise}
   */
  requireAdmin() {
    return _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_1___default()();
  },

  get(url, options) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(sanitize(url), options);
  },

  post(url, data) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(sanitize(url), data);
  },

  patch(url, data) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch(sanitize(url), data);
  },

  put(url, data) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(sanitize(url), data);
  },

  delete(url, data) {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](sanitize(url), {
      params: data
    });
  }

});

/***/ }),

/***/ "./apps/settings/src/store/apps.js":
/*!*****************************************!*\
  !*** ./apps/settings/src/store/apps.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./apps/settings/src/store/api.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/**
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
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



const state = {
  apps: [],
  categories: [],
  updateCount: 0,
  loading: {},
  loadingList: false
};
const mutations = {
  APPS_API_FAILURE(state, error) {
    OC.Notification.showHtml(t('settings', 'An error occured during the request. Unable to proceed.') + '<br>' + error.error.response.data.data.message, {
      timeout: 7
    });
    console.error(state, error);
  },

  initCategories(state, _ref) {
    let {
      categories,
      updateCount
    } = _ref;
    state.categories = categories;
    state.updateCount = updateCount;
  },

  setUpdateCount(state, updateCount) {
    state.updateCount = updateCount;
  },

  addCategory(state, category) {
    state.categories.push(category);
  },

  appendCategories(state, categoriesArray) {
    // convert obj to array
    state.categories = categoriesArray;
  },

  setAllApps(state, apps) {
    state.apps = apps;
  },

  setError(state, _ref2) {
    let {
      appId,
      error
    } = _ref2;

    if (!Array.isArray(appId)) {
      appId = [appId];
    }

    appId.forEach(_id => {
      const app = state.apps.find(app => app.id === _id);
      app.error = error;
    });
  },

  clearError(state, _ref3) {
    let {
      appId,
      error
    } = _ref3;
    const app = state.apps.find(app => app.id === appId);
    app.error = null;
  },

  enableApp(state, _ref4) {
    let {
      appId,
      groups
    } = _ref4;
    const app = state.apps.find(app => app.id === appId);
    app.active = true;
    app.groups = groups;
  },

  disableApp(state, appId) {
    const app = state.apps.find(app => app.id === appId);
    app.active = false;
    app.groups = [];

    if (app.removable) {
      app.canUnInstall = true;
    }
  },

  uninstallApp(state, appId) {
    state.apps.find(app => app.id === appId).active = false;
    state.apps.find(app => app.id === appId).groups = [];
    state.apps.find(app => app.id === appId).needsDownload = true;
    state.apps.find(app => app.id === appId).installed = false;
    state.apps.find(app => app.id === appId).canUnInstall = false;
    state.apps.find(app => app.id === appId).canInstall = true;
  },

  updateApp(state, appId) {
    const app = state.apps.find(app => app.id === appId);
    const version = app.update;
    app.update = null;
    app.version = version;
    state.updateCount--;
  },

  resetApps(state) {
    state.apps = [];
  },

  reset(state) {
    state.apps = [];
    state.categories = [];
    state.updateCount = 0;
  },

  startLoading(state, id) {
    if (Array.isArray(id)) {
      id.forEach(_id => {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].set(state.loading, _id, true);
      });
    } else {
      vue__WEBPACK_IMPORTED_MODULE_2__["default"].set(state.loading, id, true);
    }
  },

  stopLoading(state, id) {
    if (Array.isArray(id)) {
      id.forEach(_id => {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].set(state.loading, _id, false);
      });
    } else {
      vue__WEBPACK_IMPORTED_MODULE_2__["default"].set(state.loading, id, false);
    }
  }

};
const getters = {
  loading(state) {
    return function (id) {
      return state.loading[id];
    };
  },

  getCategories(state) {
    return state.categories;
  },

  getAllApps(state) {
    return state.apps;
  },

  getUpdateCount(state) {
    return state.updateCount;
  }

};
const actions = {
  enableApp(context, _ref5) {
    let {
      appId,
      groups
    } = _ref5;
    let apps;

    if (Array.isArray(appId)) {
      apps = appId;
    } else {
      apps = [appId];
    }

    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      context.commit('startLoading', apps);
      context.commit('startLoading', 'install');
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/enable'), {
        appIds: apps,
        groups
      }).then(response => {
        context.commit('stopLoading', apps);
        context.commit('stopLoading', 'install');
        apps.forEach(_appId => {
          context.commit('enableApp', {
            appId: _appId,
            groups
          });
        }); // check for server health

        return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('apps/files')).then(() => {
          if (response.data.update_required) {
            OC.dialogs.info(t('settings', 'The app has been enabled but needs to be updated. You will be redirected to the update page in 5 seconds.'), t('settings', 'App update'), function () {
              window.location.reload();
            }, true);
            setTimeout(function () {
              location.reload();
            }, 5000);
          }
        }).catch(() => {
          if (!Array.isArray(appId)) {
            context.commit('setError', {
              appId: apps,
              error: t('settings', 'Error: This app cannot be enabled because it makes the server unstable')
            });
          }
        });
      }).catch(error => {
        context.commit('stopLoading', apps);
        context.commit('stopLoading', 'install');
        context.commit('setError', {
          appId: apps,
          error: error.response.data.data.message
        });
        context.commit('APPS_API_FAILURE', {
          appId,
          error
        });
      });
    }).catch(error => context.commit('API_FAILURE', {
      appId,
      error
    }));
  },

  forceEnableApp(context, _ref6) {
    let {
      appId,
      groups
    } = _ref6;
    let apps;

    if (Array.isArray(appId)) {
      apps = appId;
    } else {
      apps = [appId];
    }

    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(() => {
      context.commit('startLoading', apps);
      context.commit('startLoading', 'install');
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/force'), {
        appId
      }).then(response => {
        // TODO: find a cleaner solution
        location.reload();
      }).catch(error => {
        context.commit('stopLoading', apps);
        context.commit('stopLoading', 'install');
        context.commit('setError', {
          appId: apps,
          error: error.response.data.data.message
        });
        context.commit('APPS_API_FAILURE', {
          appId,
          error
        });
      });
    }).catch(error => context.commit('API_FAILURE', {
      appId,
      error
    }));
  },

  disableApp(context, _ref7) {
    let {
      appId
    } = _ref7;
    let apps;

    if (Array.isArray(appId)) {
      apps = appId;
    } else {
      apps = [appId];
    }

    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      context.commit('startLoading', apps);
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/disable'), {
        appIds: apps
      }).then(response => {
        context.commit('stopLoading', apps);
        apps.forEach(_appId => {
          context.commit('disableApp', _appId);
        });
        return true;
      }).catch(error => {
        context.commit('stopLoading', apps);
        context.commit('APPS_API_FAILURE', {
          appId,
          error
        });
      });
    }).catch(error => context.commit('API_FAILURE', {
      appId,
      error
    }));
  },

  uninstallApp(context, _ref8) {
    let {
      appId
    } = _ref8;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      context.commit('startLoading', appId);
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)("settings/apps/uninstall/".concat(appId))).then(response => {
        context.commit('stopLoading', appId);
        context.commit('uninstallApp', appId);
        return true;
      }).catch(error => {
        context.commit('stopLoading', appId);
        context.commit('APPS_API_FAILURE', {
          appId,
          error
        });
      });
    }).catch(error => context.commit('API_FAILURE', {
      appId,
      error
    }));
  },

  updateApp(context, _ref9) {
    let {
      appId
    } = _ref9;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      context.commit('startLoading', appId);
      context.commit('startLoading', 'install');
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)("settings/apps/update/".concat(appId))).then(response => {
        context.commit('stopLoading', 'install');
        context.commit('stopLoading', appId);
        context.commit('updateApp', appId);
        return true;
      }).catch(error => {
        context.commit('stopLoading', appId);
        context.commit('stopLoading', 'install');
        context.commit('APPS_API_FAILURE', {
          appId,
          error
        });
      });
    }).catch(error => context.commit('API_FAILURE', {
      appId,
      error
    }));
  },

  getAllApps(context) {
    context.commit('startLoading', 'list');
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/list')).then(response => {
      context.commit('setAllApps', response.data.apps);
      context.commit('stopLoading', 'list');
      return true;
    }).catch(error => context.commit('API_FAILURE', error));
  },

  getCategories(context) {
    context.commit('startLoading', 'categories');
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/categories')).then(response => {
      if (response.data.length > 0) {
        context.commit('appendCategories', response.data);
        context.commit('stopLoading', 'categories');
        return true;
      }

      return false;
    }).catch(error => context.commit('API_FAILURE', error));
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state,
  mutations,
  getters,
  actions
});

/***/ }),

/***/ "./apps/settings/src/store/index.js":
/*!******************************************!*\
  !*** ./apps/settings/src/store/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ "./apps/settings/src/store/users.js");
/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps */ "./apps/settings/src/store/apps.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./apps/settings/src/store/settings.js");
/* harmony import */ var _oc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oc */ "./apps/settings/src/store/oc.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
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






vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_5__["default"]);
const debug = "development" !== 'production';
const mutations = {
  API_FAILURE(state, error) {
    try {
      const message = error.error.response.data.ocs.meta.message;
      OC.Notification.showHtml(t('settings', 'An error occured during the request. Unable to proceed.') + '<br>' + message, {
        timeout: 7
      });
    } catch (e) {
      OC.Notification.showTemporary(t('settings', 'An error occured during the request. Unable to proceed.'));
    }

    console.error(state, error);
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vuex__WEBPACK_IMPORTED_MODULE_5__["default"].Store({
  modules: {
    users: _users__WEBPACK_IMPORTED_MODULE_0__["default"],
    apps: _apps__WEBPACK_IMPORTED_MODULE_1__["default"],
    settings: _settings__WEBPACK_IMPORTED_MODULE_2__["default"],
    oc: _oc__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  strict: debug,
  mutations
}));

/***/ }),

/***/ "./apps/settings/src/store/oc.js":
/*!***************************************!*\
  !*** ./apps/settings/src/store/oc.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./apps/settings/src/store/api.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
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


const state = {};
const mutations = {};
const getters = {};
const actions = {
  /**
   * Set application config in database
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.app Application name
   * @param {boolean} options.key Config key
   * @param {boolean} options.value Value to set
   * @returns{Promise}
   */
  setAppConfig(context, _ref) {
    let {
      app,
      key,
      value
    } = _ref;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/provisioning_api/api/v1/config/apps/{app}/{key}', {
        app,
        key
      }), {
        value
      }).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      app,
      key,
      value,
      error
    }));
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state,
  mutations,
  getters,
  actions
});

/***/ }),

/***/ "./apps/settings/src/store/settings.js":
/*!*********************************************!*\
  !*** ./apps/settings/src/store/settings.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
const state = {
  serverData: {}
};
const mutations = {
  setServerData(state, data) {
    state.serverData = data;
  }

};
const getters = {
  getServerData(state) {
    return state.serverData;
  }

};
const actions = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state,
  mutations,
  getters,
  actions
});

/***/ }),

/***/ "./apps/settings/src/store/users.js":
/*!******************************************!*\
  !*** ./apps/settings/src/store/users.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./apps/settings/src/store/api.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Daniel Calviño Sánchez <danxuliu@gmail.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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




const orderGroups = function (groups, orderBy) {
  /* const SORT_USERCOUNT = 1;
   * const SORT_GROUPNAME = 2;
   * https://github.com/nextcloud/server/blob/208e38e84e1a07a49699aa90dc5b7272d24489f0/lib/private/Group/MetaData.php#L34
   */
  if (orderBy === 1) {
    return groups.sort((a, b) => a.usercount - a.disabled < b.usercount - b.disabled);
  } else {
    return groups.sort((a, b) => a.name.localeCompare(b.name));
  }
};

const defaults = {
  group: {
    id: '',
    name: '',
    usercount: 0,
    disabled: 0,
    canAdd: true,
    canRemove: true
  }
};
const state = {
  users: [],
  groups: [],
  orderBy: 1,
  minPasswordLength: 0,
  usersOffset: 0,
  usersLimit: 25,
  userCount: 0
};
const mutations = {
  appendUsers(state, usersObj) {
    // convert obj to array
    const users = state.users.concat(Object.keys(usersObj).map(userid => usersObj[userid]));
    state.usersOffset += state.usersLimit;
    state.users = users;
  },

  setPasswordPolicyMinLength(state, length) {
    state.minPasswordLength = length !== '' ? length : 0;
  },

  initGroups(state, _ref) {
    let {
      groups,
      orderBy,
      userCount
    } = _ref;
    state.groups = groups.map(group => Object.assign({}, defaults.group, group));
    state.orderBy = orderBy;
    state.userCount = userCount;
    state.groups = orderGroups(state.groups, state.orderBy);
  },

  addGroup(state, _ref2) {
    let {
      gid,
      displayName
    } = _ref2;

    try {
      if (typeof state.groups.find(group => group.id === gid) !== 'undefined') {
        return;
      } // extend group to default values


      const group = Object.assign({}, defaults.group, {
        id: gid,
        name: displayName
      });
      state.groups.push(group);
      state.groups = orderGroups(state.groups, state.orderBy);
    } catch (e) {
      console.error('Can\'t create group', e);
    }
  },

  removeGroup(state, gid) {
    const groupIndex = state.groups.findIndex(groupSearch => groupSearch.id === gid);

    if (groupIndex >= 0) {
      state.groups.splice(groupIndex, 1);
    }
  },

  addUserGroup(state, _ref3) {
    let {
      userid,
      gid
    } = _ref3;
    const group = state.groups.find(groupSearch => groupSearch.id === gid);
    const user = state.users.find(user => user.id === userid); // increase count if user is enabled

    if (group && user.enabled && state.userCount > 0) {
      group.usercount++;
    }

    const groups = user.groups;
    groups.push(gid);
    state.groups = orderGroups(state.groups, state.orderBy);
  },

  removeUserGroup(state, _ref4) {
    let {
      userid,
      gid
    } = _ref4;
    const group = state.groups.find(groupSearch => groupSearch.id === gid);
    const user = state.users.find(user => user.id === userid); // lower count if user is enabled

    if (group && user.enabled && state.userCount > 0) {
      group.usercount--;
    }

    const groups = user.groups;
    groups.splice(groups.indexOf(gid), 1);
    state.groups = orderGroups(state.groups, state.orderBy);
  },

  addUserSubAdmin(state, _ref5) {
    let {
      userid,
      gid
    } = _ref5;
    const groups = state.users.find(user => user.id === userid).subadmin;
    groups.push(gid);
  },

  removeUserSubAdmin(state, _ref6) {
    let {
      userid,
      gid
    } = _ref6;
    const groups = state.users.find(user => user.id === userid).subadmin;
    groups.splice(groups.indexOf(gid), 1);
  },

  deleteUser(state, userid) {
    const userIndex = state.users.findIndex(user => user.id === userid);
    state.users.splice(userIndex, 1);
  },

  addUserData(state, response) {
    state.users.push(response.data.ocs.data);
  },

  enableDisableUser(state, _ref7) {
    let {
      userid,
      enabled
    } = _ref7;
    const user = state.users.find(user => user.id === userid);
    user.enabled = enabled; // increment or not

    if (state.userCount > 0) {
      state.groups.find(group => group.id === 'disabled').usercount += enabled ? -1 : 1;
      state.userCount += enabled ? 1 : -1;
      user.groups.forEach(group => {
        // Increment disabled count
        state.groups.find(groupSearch => groupSearch.id === group).disabled += enabled ? -1 : 1;
      });
    }
  },

  setUserData(state, _ref8) {
    let {
      userid,
      key,
      value
    } = _ref8;

    if (key === 'quota') {
      const humanValue = OC.Util.computerFileSize(value);
      state.users.find(user => user.id === userid)[key][key] = humanValue !== null ? humanValue : value;
    } else {
      state.users.find(user => user.id === userid)[key] = value;
    }
  },

  /**
   * Reset users list
   *
   * @param {object} state the store state
   */
  resetUsers(state) {
    state.users = [];
    state.usersOffset = 0;
  }

};
const getters = {
  getUsers(state) {
    return state.users;
  },

  getGroups(state) {
    return state.groups;
  },

  getSubadminGroups(state) {
    // Can't be subadmin of admin or disabled
    return state.groups.filter(group => group.id !== 'admin' && group.id !== 'disabled');
  },

  getPasswordPolicyMinLength(state) {
    return state.minPasswordLength;
  },

  getUsersOffset(state) {
    return state.usersOffset;
  },

  getUsersLimit(state) {
    return state.usersLimit;
  },

  getUserCount(state) {
    return state.userCount;
  }

};
const CancelToken = _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].CancelToken;
let searchRequestCancelSource = null;
const actions = {
  /**
   * Get all users with full details
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {int} options.offset List offset to request
   * @param {int} options.limit List number to return from offset
   * @param {string} options.search Search amongst users
   * @param {string} options.group Get users from group
   * @return {Promise}
   */
  getUsers(context, _ref9) {
    let {
      offset,
      limit,
      search,
      group
    } = _ref9;

    if (searchRequestCancelSource) {
      searchRequestCancelSource.cancel('Operation canceled by another search request.');
    }

    searchRequestCancelSource = CancelToken.source();
    search = typeof search === 'string' ? search : '';
    group = typeof group === 'string' ? group : '';

    if (group !== '') {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/groups/{group}/users/details?offset={offset}&limit={limit}&search={search}', {
        group: encodeURIComponent(group),
        offset,
        limit,
        search
      }), {
        cancelToken: searchRequestCancelSource.token
      }).then(response => {
        const usersCount = Object.keys(response.data.ocs.data.users).length;

        if (usersCount > 0) {
          context.commit('appendUsers', response.data.ocs.data.users);
        }

        return usersCount;
      }).catch(error => {
        if (!_nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].isCancel(error)) {
          context.commit('API_FAILURE', error);
        }
      });
    }

    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/details?offset={offset}&limit={limit}&search={search}', {
      offset,
      limit,
      search
    }), {
      cancelToken: searchRequestCancelSource.token
    }).then(response => {
      const usersCount = Object.keys(response.data.ocs.data.users).length;

      if (usersCount > 0) {
        context.commit('appendUsers', response.data.ocs.data.users);
      }

      return usersCount;
    }).catch(error => {
      if (!_nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].isCancel(error)) {
        context.commit('API_FAILURE', error);
      }
    });
  },

  getGroups(context, _ref10) {
    let {
      offset,
      limit,
      search
    } = _ref10;
    search = typeof search === 'string' ? search : '';
    const limitParam = limit === -1 ? '' : "&limit=".concat(limit);
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/groups?offset={offset}&search={search}', {
      offset,
      search
    }) + limitParam).then(response => {
      if (Object.keys(response.data.ocs.data.groups).length > 0) {
        response.data.ocs.data.groups.forEach(function (group) {
          context.commit('addGroup', {
            gid: group,
            displayName: group
          });
        });
        return true;
      }

      return false;
    }).catch(error => context.commit('API_FAILURE', error));
  },

  /**
   * Get all users with full details
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {int} options.offset List offset to request
   * @param {int} options.limit List number to return from offset
   * @param options.search
   * @return {Promise}
   */
  getUsersFromList(context, _ref11) {
    let {
      offset,
      limit,
      search
    } = _ref11;
    search = typeof search === 'string' ? search : '';
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/details?offset={offset}&limit={limit}&search={search}', {
      offset,
      limit,
      search
    })).then(response => {
      if (Object.keys(response.data.ocs.data.users).length > 0) {
        context.commit('appendUsers', response.data.ocs.data.users);
        return true;
      }

      return false;
    }).catch(error => context.commit('API_FAILURE', error));
  },

  /**
   * Get all users with full details from a groupid
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {int} options.offset List offset to request
   * @param {int} options.limit List number to return from offset
   * @param options.groupid
   * @return {Promise}
   */
  getUsersFromGroup(context, _ref12) {
    let {
      groupid,
      offset,
      limit
    } = _ref12;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{groupId}/details?offset={offset}&limit={limit}', {
      groupId: encodeURIComponent(groupid),
      offset,
      limit
    })).then(response => context.commit('getUsersFromList', response.data.ocs.data.users)).catch(error => context.commit('API_FAILURE', error));
  },

  getPasswordPolicyMinLength(context) {
    if (OC.getCapabilities().password_policy && OC.getCapabilities().password_policy.minLength) {
      context.commit('setPasswordPolicyMinLength', OC.getCapabilities().password_policy.minLength);
      return OC.getCapabilities().password_policy.minLength;
    }

    return false;
  },

  /**
   * Add group
   *
   * @param {object} context store context
   * @param {string} gid Group id
   * @return {Promise}
   */
  addGroup(context, gid) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/groups'), {
        groupid: gid
      }).then(response => {
        context.commit('addGroup', {
          gid,
          displayName: gid
        });
        return {
          gid,
          displayName: gid
        };
      }).catch(error => {
        throw error;
      });
    }).catch(error => {
      context.commit('API_FAILURE', {
        gid,
        error
      }); // let's throw one more time to prevent the view
      // from adding the user to a group that doesn't exists

      throw error;
    });
  },

  /**
   * Remove group
   *
   * @param {object} context store context
   * @param {string} gid Group id
   * @return {Promise}
   */
  removeGroup(context, gid) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/groups/{groupId}', {
        groupId: encodeURIComponent(gid)
      })).then(response => context.commit('removeGroup', gid)).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      gid,
      error
    }));
  },

  /**
   * Add user to group
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.gid Group id
   * @return {Promise}
   */
  addUserGroup(context, _ref13) {
    let {
      userid,
      gid
    } = _ref13;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/groups', {
        userid
      }), {
        groupid: gid
      }).then(response => context.commit('addUserGroup', {
        userid,
        gid
      })).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  },

  /**
   * Remove user from group
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.gid Group id
   * @return {Promise}
   */
  removeUserGroup(context, _ref14) {
    let {
      userid,
      gid
    } = _ref14;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/groups', {
        userid
      }), {
        groupid: gid
      }).then(response => context.commit('removeUserGroup', {
        userid,
        gid
      })).catch(error => {
        throw error;
      });
    }).catch(error => {
      context.commit('API_FAILURE', {
        userid,
        error
      }); // let's throw one more time to prevent
      // the view from removing the user row on failure

      throw error;
    });
  },

  /**
   * Add user to group admin
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.gid Group id
   * @return {Promise}
   */
  addUserSubAdmin(context, _ref15) {
    let {
      userid,
      gid
    } = _ref15;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/subadmins', {
        userid
      }), {
        groupid: gid
      }).then(response => context.commit('addUserSubAdmin', {
        userid,
        gid
      })).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  },

  /**
   * Remove user from group admin
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.gid Group id
   * @return {Promise}
   */
  removeUserSubAdmin(context, _ref16) {
    let {
      userid,
      gid
    } = _ref16;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/subadmins', {
        userid
      }), {
        groupid: gid
      }).then(response => context.commit('removeUserSubAdmin', {
        userid,
        gid
      })).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  },

  /**
   * Mark all user devices for remote wipe
   *
   * @param {object} context store context
   * @param {string} userid User id
   * @return {Promise}
   */
  wipeUserDevices(context, userid) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/wipe', {
        userid
      })).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  },

  /**
   * Delete a user
   *
   * @param {object} context store context
   * @param {string} userid User id
   * @return {Promise}
   */
  deleteUser(context, userid) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}', {
        userid
      })).then(response => context.commit('deleteUser', userid)).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  },

  /**
   * Add a user
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.password User password
   * @param {string} options.displayName User display name
   * @param {string} options.email User email
   * @param {string} options.groups User groups
   * @param {string} options.subadmin User subadmin groups
   * @param {string} options.quota User email
   * @param context.commit
   * @param context.dispatch
   * @param options.language
   * @return {Promise}
   */
  addUser(_ref17, _ref18) {
    let {
      commit,
      dispatch
    } = _ref17;
    let {
      userid,
      password,
      displayName,
      email,
      groups,
      subadmin,
      quota,
      language
    } = _ref18;
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users'), {
        userid,
        password,
        displayName,
        email,
        groups,
        subadmin,
        quota,
        language
      }).then(response => dispatch('addUserData', userid || response.data.ocs.data.id)).catch(error => {
        throw error;
      });
    }).catch(error => {
      commit('API_FAILURE', {
        userid,
        error
      });
      throw error;
    });
  },

  /**
   * Get user data and commit addition
   *
   * @param {object} context store context
   * @param {string} userid User id
   * @return {Promise}
   */
  addUserData(context, userid) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}', {
        userid
      })).then(response => context.commit('addUserData', response)).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  },

  /**
   * Enable or disable user
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {boolean} options.enabled User enablement status
   * @return {Promise}
   */
  enableDisableUser(context, _ref19) {
    let {
      userid,
      enabled = true
    } = _ref19;
    const userStatus = enabled ? 'enable' : 'disable';
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/{userStatus}', {
        userid,
        userStatus
      })).then(response => context.commit('enableDisableUser', {
        userid,
        enabled
      })).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  },

  /**
   * Edit user data
   *
   * @param {object} context store context
   * @param {object} options destructuring object
   * @param {string} options.userid User id
   * @param {string} options.key User field to edit
   * @param {string} options.value Value of the change
   * @return {Promise}
   */
  setUserData(context, _ref20) {
    let {
      userid,
      key,
      value
    } = _ref20;
    const allowedEmpty = ['email', 'displayname'];

    if (['email', 'language', 'quota', 'displayname', 'password'].indexOf(key) !== -1) {
      // We allow empty email or displayname
      if (typeof value === 'string' && (allowedEmpty.indexOf(key) === -1 && value.length > 0 || allowedEmpty.indexOf(key) !== -1)) {
        return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
          return _api__WEBPACK_IMPORTED_MODULE_0__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}', {
            userid
          }), {
            key,
            value
          }).then(response => context.commit('setUserData', {
            userid,
            key,
            value
          })).catch(error => {
            throw error;
          });
        }).catch(error => context.commit('API_FAILURE', {
          userid,
          error
        }));
      }
    }

    return Promise.reject(new Error('Invalid request data'));
  },

  /**
   * Send welcome mail
   *
   * @param {object} context store context
   * @param {string} userid User id
   * @return {Promise}
   */
  sendWelcomeMail(context, userid) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].requireAdmin().then(response => {
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userid}/welcome', {
        userid
      })).then(response => true).catch(error => {
        throw error;
      });
    }).catch(error => context.commit('API_FAILURE', {
      userid,
      error
    }));
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state,
  mutations,
  getters,
  actions
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
//
//
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
  name: 'App',

  beforeMount() {
    // importing server data into the store
    const serverDataElmt = document.getElementById('serverData');

    if (serverDataElmt !== null) {
      this.$store.commit('setServerData', JSON.parse(document.getElementById('serverData').dataset.server));
    }
  }

});

/***/ }),

/***/ "./apps/settings/src/App.vue":
/*!***********************************!*\
  !*** ./apps/settings/src/App.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f468116e& */ "./apps/settings/src/App.vue?vue&type=template&id=f468116e&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./apps/settings/src/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/App.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./apps/settings/src/App.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/App.vue?vue&type=template&id=f468116e&":
/*!******************************************************************!*\
  !*** ./apps/settings/src/App.vue?vue&type=template&id=f468116e& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f468116e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=f468116e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=template&id=f468116e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=template&id=f468116e&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/App.vue?vue&type=template&id=f468116e& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("router-view")
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "-" + chunkId + ".js?v=" + {"settings-users":"02945bca202fc32a527b","settings-apps":"c82ec7571e780f632253"}[chunkId] + "";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "nextcloud:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 			"settings-vue-settings-apps-users-management": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/settings/src/main-apps-users-management.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=settings-vue-settings-apps-users-management.js.map?v=e19021f0c6ff66d0d901