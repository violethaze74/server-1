/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./core/src/logger.js":
/*!****************************!*\
  !*** ./core/src/logger.js ***!
  \****************************/
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
    return (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerBuilder)().setApp('core').build();
  }

  return (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_1__.getLoggerBuilder)().setApp('core').setUid(user.uid).build();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLogger((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()));

/***/ }),

/***/ "./core/src/recommendedapps.js":
/*!*************************************!*\
  !*** ./core/src/recommendedapps.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./core/src/logger.js");
/* harmony import */ var _components_setup_RecommendedApps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/setup/RecommendedApps */ "./core/src/components/setup/RecommendedApps.vue");
/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
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
vue__WEBPACK_IMPORTED_MODULE_4__["default"].mixin({
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate
  }
});
const View = vue__WEBPACK_IMPORTED_MODULE_4__["default"].extend(_components_setup_RecommendedApps__WEBPACK_IMPORTED_MODULE_3__["default"]);
new View().$mount('#recommended-apps');
_logger__WEBPACK_IMPORTED_MODULE_2__["default"].debug('recommended apps view rendered');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var p_limit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! p-limit */ "./node_modules/p-limit/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logger */ "./core/src/logger.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const recommended = {
  calendar: {
    description: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('core', 'Schedule work & meetings, synced with all your devices.'),
    icon: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.imagePath)('core', 'places/calendar.svg')
  },
  contacts: {
    description: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('core', 'Keep your colleagues and friends in one place without leaking their private info.'),
    icon: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.imagePath)('core', 'places/contacts.svg')
  },
  mail: {
    description: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('core', 'Simple email app nicely integrated with Files, Contacts and Calendar.'),
    icon: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.imagePath)('core', 'actions/mail.svg')
  },
  spreed: {
    description: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('core', 'Chatting, video calls, screensharing, online meetings and web conferencing – in your browser and with mobile apps.'),
    icon: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.imagePath)('core', 'apps/spreed.svg')
  },
  richdocuments: {
    description: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('core', 'Collaboratively edit office documents.'),
    icon: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.imagePath)('core', 'apps/richdocuments.svg')
  },
  richdocumentscode: {
    description: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('core', 'Local document editing back-end used by the Collabora Online app.'),
    icon: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.imagePath)('core', 'apps/richdocumentscode.svg')
  }
};
const recommendedIds = Object.keys(recommended);
const defaultPageUrl = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__.loadState)('core', 'defaultPageUrl');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RecommendedApps',

  data() {
    return {
      loadingApps: true,
      loadingAppsError: false,
      apps: [],
      defaultPageUrl
    };
  },

  computed: {
    recommendedApps() {
      return this.apps.filter(app => recommendedIds.includes(app.id));
    }

  },

  mounted() {
    return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/list')).then(resp => resp.data).then(data => {
      _logger__WEBPACK_IMPORTED_MODULE_5__["default"].info("".concat(data.apps.length, " apps fetched"));
      this.apps = data.apps.map(app => Object.assign(app, {
        loading: false,
        installationError: false
      }));
      _logger__WEBPACK_IMPORTED_MODULE_5__["default"].debug("".concat(this.recommendedApps.length, " recommended apps found"), {
        apps: this.recommendedApps
      });
      this.installApps();
    }).catch(error => {
      _logger__WEBPACK_IMPORTED_MODULE_5__["default"].error('could not fetch app list', {
        error
      });
      this.loadingAppsError = true;
    }).then(() => {
      this.loadingApps = false;
    });
  },

  methods: {
    installApps() {
      const limit = (0,p_limit__WEBPACK_IMPORTED_MODULE_3__["default"])(1);
      const installing = this.recommendedApps.filter(app => !app.active && app.isCompatible && app.canInstall).map(app => limit(() => {
        _logger__WEBPACK_IMPORTED_MODULE_5__["default"].info("installing ".concat(app.id));
        app.loading = true;
        return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('settings/apps/enable'), {
          appIds: [app.id],
          groups: []
        }).catch(error => {
          _logger__WEBPACK_IMPORTED_MODULE_5__["default"].error("could not install ".concat(app.id), {
            error
          });
          app.installationError = true;
        }).then(() => {
          _logger__WEBPACK_IMPORTED_MODULE_5__["default"].info("installed ".concat(app.id));
          app.loading = false;
        });
      }));
      _logger__WEBPACK_IMPORTED_MODULE_5__["default"].debug("installing ".concat(installing.length, " recommended apps"));
      Promise.all(installing).then(() => {
        _logger__WEBPACK_IMPORTED_MODULE_5__["default"].info('all recommended apps installed, redirecting …');
        window.location = defaultPageUrl;
      }).catch(error => _logger__WEBPACK_IMPORTED_MODULE_5__["default"].error('could not install recommended apps', {
        error
      }));
    },

    customIcon(appId) {
      if (!(appId in recommended) || !recommended[appId].icon) {
        _logger__WEBPACK_IMPORTED_MODULE_5__["default"].warn("no app icon for recommended app ".concat(appId));
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.imagePath)('core', 'places/default-app-icon.svg');
      }

      return recommended[appId].icon;
    },

    customDescription(appId) {
      if (!(appId in recommended)) {
        _logger__WEBPACK_IMPORTED_MODULE_5__["default"].warn("no app description for recommended app ".concat(appId));
        return '';
      }

      return recommended[appId].description;
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "p.loading[data-v-0530d6c2], p.loading-error[data-v-0530d6c2] {\n  height: 100px;\n}\n.text-center[data-v-0530d6c2] {\n  text-align: center;\n}\n.app[data-v-0530d6c2] {\n  display: flex;\n  flex-direction: row;\n}\n.app img[data-v-0530d6c2] {\n  height: 50px;\n  width: 50px;\n  filter: invert(1);\n}\n.app img[data-v-0530d6c2], .app .info[data-v-0530d6c2] {\n  padding: 12px;\n}\n.app .info h3[data-v-0530d6c2], .app .info p[data-v-0530d6c2] {\n  text-align: left;\n}\n.app .info h3[data-v-0530d6c2] {\n  color: #fff;\n  margin-top: 0;\n}\n.app .info h3 > span.icon[data-v-0530d6c2] {\n  display: inline-block;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_style_index_0_id_0530d6c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_style_index_0_id_0530d6c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_style_index_0_id_0530d6c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./core/src/components/setup/RecommendedApps.vue":
/*!*******************************************************!*\
  !*** ./core/src/components/setup/RecommendedApps.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecommendedApps_vue_vue_type_template_id_0530d6c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true& */ "./core/src/components/setup/RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true&");
/* harmony import */ var _RecommendedApps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecommendedApps.vue?vue&type=script&lang=js& */ "./core/src/components/setup/RecommendedApps.vue?vue&type=script&lang=js&");
/* harmony import */ var _RecommendedApps_vue_vue_type_style_index_0_id_0530d6c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true& */ "./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RecommendedApps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecommendedApps_vue_vue_type_template_id_0530d6c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RecommendedApps_vue_vue_type_template_id_0530d6c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0530d6c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "core/src/components/setup/RecommendedApps.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./core/src/components/setup/RecommendedApps.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./core/src/components/setup/RecommendedApps.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecommendedApps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_style_index_0_id_0530d6c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=style&index=0&id=0530d6c2&lang=scss&scoped=true&");


/***/ }),

/***/ "./core/src/components/setup/RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./core/src/components/setup/RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_template_id_0530d6c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_template_id_0530d6c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedApps_vue_vue_type_template_id_0530d6c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/setup/RecommendedApps.vue?vue&type=template&id=0530d6c2&scoped=true& ***!
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
    "div",
    { staticClass: "body-login-container" },
    [
      _c("h2", [_vm._v(_vm._s(_vm.t("core", "Recommended apps")))]),
      _vm._v(" "),
      _vm.loadingApps
        ? _c("p", { staticClass: "loading text-center" }, [
            _vm._v("\n\t\t" + _vm._s(_vm.t("core", "Loading apps …")) + "\n\t")
          ])
        : _vm.loadingAppsError
        ? _c("p", { staticClass: "loading-error text-center" }, [
            _vm._v(
              "\n\t\t" +
                _vm._s(
                  _vm.t(
                    "core",
                    "Could not fetch list of apps from the App Store."
                  )
                ) +
                "\n\t"
            )
          ])
        : _c("p", { staticClass: "text-center" }, [
            _vm._v(
              "\n\t\t" + _vm._s(_vm.t("core", "Installing apps …")) + "\n\t"
            )
          ]),
      _vm._v(" "),
      _vm._l(_vm.recommendedApps, function(app) {
        return _c("div", { key: app.id, staticClass: "app" }, [
          _c("img", { attrs: { src: _vm.customIcon(app.id), alt: "" } }),
          _vm._v(" "),
          _c("div", { staticClass: "info" }, [
            _c("h3", [
              _vm._v("\n\t\t\t\t" + _vm._s(app.name) + "\n\t\t\t\t"),
              app.loading
                ? _c("span", { staticClass: "icon icon-loading-small-dark" })
                : app.active
                ? _c("span", { staticClass: "icon icon-checkmark-white" })
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("p", {
              domProps: { innerHTML: _vm._s(_vm.customDescription(app.id)) }
            }),
            _vm._v(" "),
            app.installationError
              ? _c("p", [
                  _c("strong", [
                    _vm._v(
                      _vm._s(
                        _vm.t("core", "App download or installation failed")
                      )
                    )
                  ])
                ])
              : !app.isCompatible
              ? _c("p", [
                  _c("strong", [
                    _vm._v(
                      _vm._s(
                        _vm.t(
                          "core",
                          "Cannot install this app because it is not compatible"
                        )
                      )
                    )
                  ])
                ])
              : !app.canInstall
              ? _c("p", [
                  _c("strong", [
                    _vm._v(_vm._s(_vm.t("core", "Cannot install this app")))
                  ])
                ])
              : _vm._e()
          ])
        ])
      }),
      _vm._v(" "),
      _c("p", { staticClass: "text-center" }, [
        _c("a", { attrs: { href: _vm.defaultPageUrl } }, [
          _vm._v(_vm._s(_vm.t("core", "Cancel")))
        ])
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
/******/ 			"core-recommendedapps": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./core/src/recommendedapps.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=core-recommendedapps.js.map?v=2aed939a7cb7849bf1f6