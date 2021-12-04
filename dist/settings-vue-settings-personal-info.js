/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/settings/src/constants/AccountPropertyConstants.js":
/*!*****************************************************************!*\
  !*** ./apps/settings/src/constants/AccountPropertyConstants.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACCOUNT_PROPERTY_ENUM": () => (/* binding */ ACCOUNT_PROPERTY_ENUM),
/* harmony export */   "ACCOUNT_PROPERTY_READABLE_ENUM": () => (/* binding */ ACCOUNT_PROPERTY_READABLE_ENUM),
/* harmony export */   "PROFILE_READABLE_ENUM": () => (/* binding */ PROFILE_READABLE_ENUM),
/* harmony export */   "PROPERTY_READABLE_KEYS_ENUM": () => (/* binding */ PROPERTY_READABLE_KEYS_ENUM),
/* harmony export */   "ACCOUNT_SETTING_PROPERTY_ENUM": () => (/* binding */ ACCOUNT_SETTING_PROPERTY_ENUM),
/* harmony export */   "ACCOUNT_SETTING_PROPERTY_READABLE_ENUM": () => (/* binding */ ACCOUNT_SETTING_PROPERTY_READABLE_ENUM),
/* harmony export */   "SCOPE_ENUM": () => (/* binding */ SCOPE_ENUM),
/* harmony export */   "PROPERTY_READABLE_SUPPORTED_SCOPES_ENUM": () => (/* binding */ PROPERTY_READABLE_SUPPORTED_SCOPES_ENUM),
/* harmony export */   "UNPUBLISHED_READABLE_PROPERTIES": () => (/* binding */ UNPUBLISHED_READABLE_PROPERTIES),
/* harmony export */   "SCOPE_SUFFIX": () => (/* binding */ SCOPE_SUFFIX),
/* harmony export */   "SCOPE_PROPERTY_ENUM": () => (/* binding */ SCOPE_PROPERTY_ENUM),
/* harmony export */   "DEFAULT_ADDITIONAL_EMAIL_SCOPE": () => (/* binding */ DEFAULT_ADDITIONAL_EMAIL_SCOPE),
/* harmony export */   "VERIFICATION_ENUM": () => (/* binding */ VERIFICATION_ENUM),
/* harmony export */   "VALIDATE_EMAIL_REGEX": () => (/* binding */ VALIDATE_EMAIL_REGEX)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.js");
/**
 * @copyright 2021, Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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

/*
 * SYNC to be kept in sync with `lib/public/Accounts/IAccountManager.php`
 */

/** Enum of account properties */

const ACCOUNT_PROPERTY_ENUM = Object.freeze({
  ADDRESS: 'address',
  AVATAR: 'avatar',
  BIOGRAPHY: 'biography',
  DISPLAYNAME: 'displayname',
  EMAIL_COLLECTION: 'additional_mail',
  EMAIL: 'email',
  HEADLINE: 'headline',
  NOTIFICATION_EMAIL: 'notify_email',
  ORGANISATION: 'organisation',
  PHONE: 'phone',
  PROFILE_ENABLED: 'profile_enabled',
  ROLE: 'role',
  TWITTER: 'twitter',
  WEBSITE: 'website'
});
/** Enum of account properties to human readable account property names */

const ACCOUNT_PROPERTY_READABLE_ENUM = Object.freeze({
  ADDRESS: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Address'),
  AVATAR: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Avatar'),
  BIOGRAPHY: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'About'),
  DISPLAYNAME: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Full name'),
  EMAIL_COLLECTION: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Additional email'),
  EMAIL: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Email'),
  HEADLINE: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Headline'),
  ORGANISATION: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Organisation'),
  PHONE: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Phone number'),
  PROFILE_ENABLED: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Profile'),
  ROLE: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Role'),
  TWITTER: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Twitter'),
  WEBSITE: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Website')
});
/** Enum of profile specific sections to human readable names */

const PROFILE_READABLE_ENUM = Object.freeze({
  PROFILE_VISIBILITY: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Profile visibility')
});
/** Enum of readable account properties to account property keys used by the server */

const PROPERTY_READABLE_KEYS_ENUM = Object.freeze({
  [ACCOUNT_PROPERTY_READABLE_ENUM.ADDRESS]: ACCOUNT_PROPERTY_ENUM.ADDRESS,
  [ACCOUNT_PROPERTY_READABLE_ENUM.AVATAR]: ACCOUNT_PROPERTY_ENUM.AVATAR,
  [ACCOUNT_PROPERTY_READABLE_ENUM.BIOGRAPHY]: ACCOUNT_PROPERTY_ENUM.BIOGRAPHY,
  [ACCOUNT_PROPERTY_READABLE_ENUM.DISPLAYNAME]: ACCOUNT_PROPERTY_ENUM.DISPLAYNAME,
  [ACCOUNT_PROPERTY_READABLE_ENUM.EMAIL_COLLECTION]: ACCOUNT_PROPERTY_ENUM.EMAIL_COLLECTION,
  [ACCOUNT_PROPERTY_READABLE_ENUM.EMAIL]: ACCOUNT_PROPERTY_ENUM.EMAIL,
  [ACCOUNT_PROPERTY_READABLE_ENUM.HEADLINE]: ACCOUNT_PROPERTY_ENUM.HEADLINE,
  [ACCOUNT_PROPERTY_READABLE_ENUM.ORGANISATION]: ACCOUNT_PROPERTY_ENUM.ORGANISATION,
  [ACCOUNT_PROPERTY_READABLE_ENUM.PHONE]: ACCOUNT_PROPERTY_ENUM.PHONE,
  [ACCOUNT_PROPERTY_READABLE_ENUM.PROFILE_ENABLED]: ACCOUNT_PROPERTY_ENUM.PROFILE_ENABLED,
  [ACCOUNT_PROPERTY_READABLE_ENUM.ROLE]: ACCOUNT_PROPERTY_ENUM.ROLE,
  [ACCOUNT_PROPERTY_READABLE_ENUM.TWITTER]: ACCOUNT_PROPERTY_ENUM.TWITTER,
  [ACCOUNT_PROPERTY_READABLE_ENUM.WEBSITE]: ACCOUNT_PROPERTY_ENUM.WEBSITE
});
/**
 * Enum of account setting properties
 *
 * Account setting properties unlike account properties do not support scopes*
 */

const ACCOUNT_SETTING_PROPERTY_ENUM = Object.freeze({
  LANGUAGE: 'language'
});
/** Enum of account setting properties to human readable setting properties */

const ACCOUNT_SETTING_PROPERTY_READABLE_ENUM = Object.freeze({
  LANGUAGE: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Language')
});
/** Enum of scopes */

const SCOPE_ENUM = Object.freeze({
  PRIVATE: 'v2-private',
  LOCAL: 'v2-local',
  FEDERATED: 'v2-federated',
  PUBLISHED: 'v2-published'
});
/** Enum of readable account properties to supported scopes */

const PROPERTY_READABLE_SUPPORTED_SCOPES_ENUM = Object.freeze({
  [ACCOUNT_PROPERTY_READABLE_ENUM.ADDRESS]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.AVATAR]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.BIOGRAPHY]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.DISPLAYNAME]: [SCOPE_ENUM.LOCAL],
  [ACCOUNT_PROPERTY_READABLE_ENUM.EMAIL_COLLECTION]: [SCOPE_ENUM.LOCAL],
  [ACCOUNT_PROPERTY_READABLE_ENUM.EMAIL]: [SCOPE_ENUM.LOCAL],
  [ACCOUNT_PROPERTY_READABLE_ENUM.HEADLINE]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.ORGANISATION]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.PHONE]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.PROFILE_ENABLED]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.ROLE]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.TWITTER]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE],
  [ACCOUNT_PROPERTY_READABLE_ENUM.WEBSITE]: [SCOPE_ENUM.LOCAL, SCOPE_ENUM.PRIVATE]
});
/** List of readable account properties which aren't published to the lookup server */

const UNPUBLISHED_READABLE_PROPERTIES = Object.freeze([ACCOUNT_PROPERTY_READABLE_ENUM.BIOGRAPHY, ACCOUNT_PROPERTY_READABLE_ENUM.HEADLINE, ACCOUNT_PROPERTY_READABLE_ENUM.ORGANISATION, ACCOUNT_PROPERTY_READABLE_ENUM.ROLE]);
/** Scope suffix */

const SCOPE_SUFFIX = 'Scope';
/**
 * Enum of scope names to properties
 *
 * Used for federation control*
 */

const SCOPE_PROPERTY_ENUM = Object.freeze({
  [SCOPE_ENUM.PRIVATE]: {
    name: SCOPE_ENUM.PRIVATE,
    displayName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Private'),
    tooltip: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Only visible to people matched via phone number integration through Talk on mobile'),
    tooltipDisabled: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Not available as this property is required for core functionality including file sharing and calendar invitations'),
    iconClass: 'icon-phone'
  },
  [SCOPE_ENUM.LOCAL]: {
    name: SCOPE_ENUM.LOCAL,
    displayName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Local'),
    tooltip: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Only visible to people on this instance and guests'),
    // tooltipDisabled is not required here as this scope is supported by all account properties
    iconClass: 'icon-password'
  },
  [SCOPE_ENUM.FEDERATED]: {
    name: SCOPE_ENUM.FEDERATED,
    displayName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Federated'),
    tooltip: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Only synchronize to trusted servers'),
    tooltipDisabled: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Not available as publishing user specific data to the lookup server is not allowed, contact your system administrator if you have any questions'),
    iconClass: 'icon-contacts-dark'
  },
  [SCOPE_ENUM.PUBLISHED]: {
    name: SCOPE_ENUM.PUBLISHED,
    displayName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Published'),
    tooltip: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Synchronize to trusted servers and the global and public address book'),
    tooltipDisabled: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('settings', 'Not available as publishing user specific data to the lookup server is not allowed, contact your system administrator if you have any questions'),
    iconClass: 'icon-link'
  }
});
/** Default additional email scope */

const DEFAULT_ADDITIONAL_EMAIL_SCOPE = SCOPE_ENUM.LOCAL;
/** Enum of verification constants, according to IAccountManager */

const VERIFICATION_ENUM = Object.freeze({
  NOT_VERIFIED: 0,
  VERIFICATION_IN_PROGRESS: 1,
  VERIFIED: 2
});
/**
 * Email validation regex
 *
 * Sourced from https://github.com/mpyw/FILTER_VALIDATE_EMAIL.js/blob/71e62ca48841d2246a1b531e7e84f5a01f15e615/src/regexp/ascii.ts*
 */
// eslint-disable-next-line no-control-regex

const VALIDATE_EMAIL_REGEX = /^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-+[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-+[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/i;

/***/ }),

/***/ "./apps/settings/src/constants/ProfileConstants.js":
/*!*********************************************************!*\
  !*** ./apps/settings/src/constants/ProfileConstants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VISIBILITY_ENUM": () => (/* binding */ VISIBILITY_ENUM),
/* harmony export */   "VISIBILITY_PROPERTY_ENUM": () => (/* binding */ VISIBILITY_PROPERTY_ENUM)
/* harmony export */ });
/**
 * @copyright 2021 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/*
 * SYNC to be kept in sync with `core/Db/ProfileConfig.php`
 */

/** Enum of profile visibility constants */
const VISIBILITY_ENUM = Object.freeze({
  SHOW: 'show',
  SHOW_USERS_ONLY: 'show_users_only',
  HIDE: 'hide'
});
/**
 * Enum of profile visibility constants to properties
 */

const VISIBILITY_PROPERTY_ENUM = Object.freeze({
  [VISIBILITY_ENUM.SHOW]: {
    name: VISIBILITY_ENUM.SHOW,
    label: t('settings', 'Show to everyone')
  },
  [VISIBILITY_ENUM.SHOW_USERS_ONLY]: {
    name: VISIBILITY_ENUM.SHOW_USERS_ONLY,
    label: t('settings', 'Show to logged in users only')
  },
  [VISIBILITY_ENUM.HIDE]: {
    name: VISIBILITY_ENUM.HIDE,
    label: t('settings', 'Hide')
  }
});

/***/ }),

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

/***/ "./apps/settings/src/main-personal-info.js":
/*!*************************************************!*\
  !*** ./apps/settings/src/main-personal-info.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.js");
/* harmony import */ var _nextcloud_dialogs_styles_toast_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/dialogs/styles/toast.scss */ "./node_modules/@nextcloud/dialogs/styles/toast.scss");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./apps/settings/src/logger.js");
/* harmony import */ var _components_PersonalInfo_DisplayNameSection_DisplayNameSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PersonalInfo/DisplayNameSection/DisplayNameSection */ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue");
/* harmony import */ var _components_PersonalInfo_EmailSection_EmailSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PersonalInfo/EmailSection/EmailSection */ "./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue");
/* harmony import */ var _components_PersonalInfo_LanguageSection_LanguageSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PersonalInfo/LanguageSection/LanguageSection */ "./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue");
/* harmony import */ var _components_PersonalInfo_ProfileSection_ProfileSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PersonalInfo/ProfileSection/ProfileSection */ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue");
/* harmony import */ var _components_PersonalInfo_OrganisationSection_OrganisationSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/PersonalInfo/OrganisationSection/OrganisationSection */ "./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue");
/* harmony import */ var _components_PersonalInfo_RoleSection_RoleSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PersonalInfo/RoleSection/RoleSection */ "./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue");
/* harmony import */ var _components_PersonalInfo_HeadlineSection_HeadlineSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/PersonalInfo/HeadlineSection/HeadlineSection */ "./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue");
/* harmony import */ var _components_PersonalInfo_BiographySection_BiographySection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/PersonalInfo/BiographySection/BiographySection */ "./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue");
/* harmony import */ var _components_PersonalInfo_ProfileVisibilitySection_ProfileVisibilitySection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection */ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue");
/**
 * @copyright 2021, Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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














__webpack_require__.nc = btoa((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getRequestToken)());
vue__WEBPACK_IMPORTED_MODULE_13__["default"].mixin({
  props: {
    logger: _logger__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate
  }
});
const DisplayNameView = vue__WEBPACK_IMPORTED_MODULE_13__["default"].extend(_components_PersonalInfo_DisplayNameSection_DisplayNameSection__WEBPACK_IMPORTED_MODULE_4__["default"]);
const EmailView = vue__WEBPACK_IMPORTED_MODULE_13__["default"].extend(_components_PersonalInfo_EmailSection_EmailSection__WEBPACK_IMPORTED_MODULE_5__["default"]);
const LanguageView = vue__WEBPACK_IMPORTED_MODULE_13__["default"].extend(_components_PersonalInfo_LanguageSection_LanguageSection__WEBPACK_IMPORTED_MODULE_6__["default"]);
const ProfileView = vue__WEBPACK_IMPORTED_MODULE_13__["default"].extend(_components_PersonalInfo_ProfileSection_ProfileSection__WEBPACK_IMPORTED_MODULE_7__["default"]);
const OrganisationView = vue__WEBPACK_IMPORTED_MODULE_13__["default"].extend(_components_PersonalInfo_OrganisationSection_OrganisationSection__WEBPACK_IMPORTED_MODULE_8__["default"]);
const RoleView = vue__WEBPACK_IMPORTED_MODULE_13__["default"].extend(_components_PersonalInfo_RoleSection_RoleSection__WEBPACK_IMPORTED_MODULE_9__["default"]);
const HeadlineView = vue__WEBPACK_IMPORTED_MODULE_13__["default"].extend(_components_PersonalInfo_HeadlineSection_HeadlineSection__WEBPACK_IMPORTED_MODULE_10__["default"]);
const BiographyView = vue__WEBPACK_IMPORTED_MODULE_13__["default"].extend(_components_PersonalInfo_BiographySection_BiographySection__WEBPACK_IMPORTED_MODULE_11__["default"]);
const ProfileVisibilityView = vue__WEBPACK_IMPORTED_MODULE_13__["default"].extend(_components_PersonalInfo_ProfileVisibilitySection_ProfileVisibilitySection__WEBPACK_IMPORTED_MODULE_12__["default"]);
new DisplayNameView().$mount('#vue-displayname-section');
new EmailView().$mount('#vue-email-section');
new LanguageView().$mount('#vue-language-section');
new ProfileView().$mount('#vue-profile-section');
new OrganisationView().$mount('#vue-organisation-section');
new RoleView().$mount('#vue-role-section');
new HeadlineView().$mount('#vue-headline-section');
new BiographyView().$mount('#vue-biography-section');
new ProfileVisibilityView().$mount('#vue-profile-visibility-section');

/***/ }),

/***/ "./apps/settings/src/service/PersonalInfo/EmailService.js":
/*!****************************************************************!*\
  !*** ./apps/settings/src/service/PersonalInfo/EmailService.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "savePrimaryEmail": () => (/* binding */ savePrimaryEmail),
/* harmony export */   "saveAdditionalEmail": () => (/* binding */ saveAdditionalEmail),
/* harmony export */   "saveNotificationEmail": () => (/* binding */ saveNotificationEmail),
/* harmony export */   "removeAdditionalEmail": () => (/* binding */ removeAdditionalEmail),
/* harmony export */   "updateAdditionalEmail": () => (/* binding */ updateAdditionalEmail),
/* harmony export */   "savePrimaryEmailScope": () => (/* binding */ savePrimaryEmailScope),
/* harmony export */   "saveAdditionalEmailScope": () => (/* binding */ saveAdditionalEmailScope)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
/**
 * @copyright 2021, Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
 * Save the primary email of the user
 *
 * @param {string} email the primary email
 * @return {object}
 */

const savePrimaryEmail = async email => {
  const userId = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid;
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userId}', {
    userId
  });
  await _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3___default()();
  const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, {
    key: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.ACCOUNT_PROPERTY_ENUM.EMAIL,
    value: email
  });
  return res.data;
};
/**
 * Save an additional email of the user
 *
 * Will be appended to the user's additional emails*
 *
 * @param {string} email the additional email
 * @return {object}
 */

const saveAdditionalEmail = async email => {
  const userId = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid;
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userId}', {
    userId
  });
  await _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3___default()();
  const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, {
    key: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.ACCOUNT_PROPERTY_ENUM.EMAIL_COLLECTION,
    value: email
  });
  return res.data;
};
/**
 * Save the notification email of the user
 *
 * @param {string} email the notification email
 * @return {object}
 */

const saveNotificationEmail = async email => {
  const userId = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid;
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userId}', {
    userId
  });
  await _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3___default()();
  const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, {
    key: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.ACCOUNT_PROPERTY_ENUM.NOTIFICATION_EMAIL,
    value: email
  });
  return res.data;
};
/**
 * Remove an additional email of the user
 *
 * @param {string} email the additional email
 * @return {object}
 */

const removeAdditionalEmail = async email => {
  const userId = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid;
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userId}/{collection}', {
    userId,
    collection: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.ACCOUNT_PROPERTY_ENUM.EMAIL_COLLECTION
  });
  await _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3___default()();
  const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, {
    key: email,
    value: ''
  });
  return res.data;
};
/**
 * Update an additional email of the user
 *
 * @param {string} prevEmail the additional email to be updated
 * @param {string} newEmail the new additional email
 * @return {object}
 */

const updateAdditionalEmail = async (prevEmail, newEmail) => {
  const userId = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid;
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userId}/{collection}', {
    userId,
    collection: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.ACCOUNT_PROPERTY_ENUM.EMAIL_COLLECTION
  });
  await _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3___default()();
  const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, {
    key: prevEmail,
    value: newEmail
  });
  return res.data;
};
/**
 * Save the federation scope for the primary email of the user
 *
 * @param {string} scope the federation scope
 * @return {object}
 */

const savePrimaryEmailScope = async scope => {
  const userId = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid;
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userId}', {
    userId
  });
  await _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3___default()();
  const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, {
    key: "".concat(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.ACCOUNT_PROPERTY_ENUM.EMAIL).concat(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.SCOPE_SUFFIX),
    value: scope
  });
  return res.data;
};
/**
 * Save the federation scope for the additional email of the user
 *
 * @param {string} email the additional email
 * @param {string} scope the federation scope
 * @return {object}
 */

const saveAdditionalEmailScope = async (email, scope) => {
  const userId = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid;
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userId}/{collectionScope}', {
    userId,
    collectionScope: "".concat(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.ACCOUNT_PROPERTY_ENUM.EMAIL_COLLECTION).concat(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.SCOPE_SUFFIX)
  });
  await _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3___default()();
  const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, {
    key: email,
    value: scope
  });
  return res.data;
};

/***/ }),

/***/ "./apps/settings/src/service/PersonalInfo/PersonalInfoService.js":
/*!***********************************************************************!*\
  !*** ./apps/settings/src/service/PersonalInfo/PersonalInfoService.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "savePrimaryAccountProperty": () => (/* binding */ savePrimaryAccountProperty),
/* harmony export */   "savePrimaryAccountPropertyScope": () => (/* binding */ savePrimaryAccountPropertyScope)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
/**
 * @copyright 2021, Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
 * Save the primary account property value for the user
 *
 * @param {string} accountProperty the account property
 * @param {string|boolean} value the primary value
 * @return {object}
 */

const savePrimaryAccountProperty = async (accountProperty, value) => {
  // TODO allow boolean values on backend route handler
  // Convert boolean to string for compatibility
  if (typeof value === 'boolean') {
    value = value ? '1' : '0';
  }

  const userId = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid;
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userId}', {
    userId
  });
  await _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3___default()();
  const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, {
    key: accountProperty,
    value
  });
  return res.data;
};
/**
 * Save the federation scope of the primary account property for the user
 *
 * @param {string} accountProperty the account property
 * @param {string} scope the federation scope
 * @return {object}
 */

const savePrimaryAccountPropertyScope = async (accountProperty, scope) => {
  const userId = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid;
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('cloud/users/{userId}', {
    userId
  });
  await _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3___default()();
  const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, {
    key: "".concat(accountProperty).concat(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.SCOPE_SUFFIX),
    value: scope
  });
  return res.data;
};

/***/ }),

/***/ "./apps/settings/src/service/ProfileService.js":
/*!*****************************************************!*\
  !*** ./apps/settings/src/service/ProfileService.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveProfileParameterVisibility": () => (/* binding */ saveProfileParameterVisibility)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/password-confirmation */ "./node_modules/@nextcloud/password-confirmation/dist/main.js");
/* harmony import */ var _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @copyright 2021 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




/**
 * Save the visibility of the profile parameter
 *
 * @param {string} paramId the profile parameter ID
 * @param {string} visibility the visibility
 * @return {object}
 */

const saveProfileParameterVisibility = async (paramId, visibility) => {
  const userId = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)().uid;
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('/profile/{userId}', {
    userId
  });
  await _nextcloud_password_confirmation__WEBPACK_IMPORTED_MODULE_3___default()();
  const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, {
    paramId,
    visibility
  });
  return res.data;
};

/***/ }),

/***/ "./apps/settings/src/utils/validate.js":
/*!*********************************************!*\
  !*** ./apps/settings/src/utils/validate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateStringInput": () => (/* binding */ validateStringInput),
/* harmony export */   "validateEmail": () => (/* binding */ validateEmail),
/* harmony export */   "validateLanguage": () => (/* binding */ validateLanguage),
/* harmony export */   "validateBoolean": () => (/* binding */ validateBoolean)
/* harmony export */ });
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
/**
 * @copyright 2021, Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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

/*
 * Frontend validators, less strict than backend validators
 *
 * TODO add nice validation errors for Profile page settings modal
 */

/**
 * Validate the string input
 *
 * Generic validator just to check that input is not an empty string*
 *
 * @param {string} input the input
 * @return {boolean}
 */

function validateStringInput(input) {
  return input !== '';
}
/**
 * Validate the email input
 *
 * Compliant with PHP core FILTER_VALIDATE_EMAIL validator*
 *
 * Reference implementation https://github.com/mpyw/FILTER_VALIDATE_EMAIL.js/blob/71e62ca48841d2246a1b531e7e84f5a01f15e615/src/index.ts*
 *
 * @param {string} input the input
 * @return {boolean}
 */

function validateEmail(input) {
  return typeof input === 'string' && _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_0__.VALIDATE_EMAIL_REGEX.test(input) && input.slice(-1) !== '\n' && input.length <= 320 && encodeURIComponent(input).replace(/%../g, 'x').length <= 320;
}
/**
 * Validate the language input
 *
 * @param {object} input the input
 * @return {boolean}
 */

function validateLanguage(input) {
  return input.code !== '' && input.name !== '' && input.name !== undefined;
}
/**
 * Validate boolean input
 *
 * @param {boolean} input the input
 * @return {boolean}
 */

function validateBoolean(input) {
  return typeof input === 'boolean';
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
/* harmony import */ var _service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/PersonalInfo/PersonalInfoService */ "./apps/settings/src/service/PersonalInfo/PersonalInfoService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Biography',
  props: {
    biography: {
      type: String,
      required: true
    },
    scope: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      initialBiography: this.biography,
      localScope: this.scope,
      showCheckmarkIcon: false,
      showErrorIcon: false
    };
  },

  methods: {
    onBiographyChange(e) {
      this.$emit('update:biography', e.target.value);
      this.debounceBiographyChange(e.target.value.trim());
    },

    debounceBiographyChange: debounce__WEBPACK_IMPORTED_MODULE_2___default()(async function (biography) {
      await this.updatePrimaryBiography(biography);
    }, 500),

    async updatePrimaryBiography(biography) {
      try {
        var _responseData$ocs, _responseData$ocs$met;

        const responseData = await (0,_service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_4__.savePrimaryAccountProperty)(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__.ACCOUNT_PROPERTY_ENUM.BIOGRAPHY, biography);
        this.handleResponse({
          biography,
          status: (_responseData$ocs = responseData.ocs) === null || _responseData$ocs === void 0 ? void 0 : (_responseData$ocs$met = _responseData$ocs.meta) === null || _responseData$ocs$met === void 0 ? void 0 : _responseData$ocs$met.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to update biography'),
          error: e
        });
      }
    },

    handleResponse(_ref) {
      let {
        biography,
        status,
        errorMessage,
        error
      } = _ref;

      if (status === 'ok') {
        // Ensure that local state reflects server state
        this.initialBiography = biography;
        (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.emit)('settings:biography:updated', biography);
        this.showCheckmarkIcon = true;
        setTimeout(() => {
          this.showCheckmarkIcon = false;
        }, 2000);
      } else {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(errorMessage);
        this.logger.error(errorMessage, error);
        this.showErrorIcon = true;
        setTimeout(() => {
          this.showErrorIcon = false;
        }, 2000);
      }
    },

    onScopeChange(scope) {
      this.$emit('update:scope', scope);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _Biography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Biography */ "./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue");
/* harmony import */ var _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/HeaderBar */ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue");
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const {
  biographyMap: {
    primaryBiography
  }
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'personalInfoParameters', {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BiographySection',
  components: {
    Biography: _Biography__WEBPACK_IMPORTED_MODULE_1__["default"],
    HeaderBar: _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },

  data() {
    return {
      accountProperty: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__.ACCOUNT_PROPERTY_READABLE_ENUM.BIOGRAPHY,
      primaryBiography
    };
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
/* harmony import */ var _service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/PersonalInfo/PersonalInfoService */ "./apps/settings/src/service/PersonalInfo/PersonalInfoService.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/validate */ "./apps/settings/src/utils/validate.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





 // TODO Global avatar updating on events (e.g. updating the displayname) is currently being handled by global js, investigate using https://github.com/nextcloud/nextcloud-event-bus for global avatar updating

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DisplayName',
  props: {
    displayName: {
      type: String,
      required: true
    },
    scope: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      initialDisplayName: this.displayName,
      localScope: this.scope,
      showCheckmarkIcon: false,
      showErrorIcon: false
    };
  },

  methods: {
    onDisplayNameChange(e) {
      this.$emit('update:display-name', e.target.value);
      this.debounceDisplayNameChange(e.target.value.trim());
    },

    debounceDisplayNameChange: debounce__WEBPACK_IMPORTED_MODULE_2___default()(async function (displayName) {
      if ((0,_utils_validate__WEBPACK_IMPORTED_MODULE_5__.validateStringInput)(displayName)) {
        await this.updatePrimaryDisplayName(displayName);
      }
    }, 500),

    async updatePrimaryDisplayName(displayName) {
      try {
        var _responseData$ocs, _responseData$ocs$met;

        const responseData = await (0,_service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_4__.savePrimaryAccountProperty)(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__.ACCOUNT_PROPERTY_ENUM.DISPLAYNAME, displayName);
        this.handleResponse({
          displayName,
          status: (_responseData$ocs = responseData.ocs) === null || _responseData$ocs === void 0 ? void 0 : (_responseData$ocs$met = _responseData$ocs.meta) === null || _responseData$ocs$met === void 0 ? void 0 : _responseData$ocs$met.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to update full name'),
          error: e
        });
      }
    },

    handleResponse(_ref) {
      let {
        displayName,
        status,
        errorMessage,
        error
      } = _ref;

      if (status === 'ok') {
        // Ensure that local state reflects server state
        this.initialDisplayName = displayName;
        (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.emit)('settings:display-name:updated', displayName);
        this.showCheckmarkIcon = true;
        setTimeout(() => {
          this.showCheckmarkIcon = false;
        }, 2000);
      } else {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(errorMessage);
        this.logger.error(errorMessage, error);
        this.showErrorIcon = true;
        setTimeout(() => {
          this.showErrorIcon = false;
        }, 2000);
      }
    },

    onScopeChange(scope) {
      this.$emit('update:scope', scope);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _DisplayName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayName */ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue");
/* harmony import */ var _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/HeaderBar */ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue");
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/validate */ "./apps/settings/src/utils/validate.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const {
  displayNameMap: {
    primaryDisplayName
  }
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'personalInfoParameters', {});
const {
  displayNameChangeSupported
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'accountParameters', {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DisplayNameSection',
  components: {
    DisplayName: _DisplayName__WEBPACK_IMPORTED_MODULE_1__["default"],
    HeaderBar: _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },

  data() {
    return {
      accountProperty: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__.ACCOUNT_PROPERTY_READABLE_ENUM.DISPLAYNAME,
      displayNameChangeSupported,
      primaryDisplayName
    };
  },

  computed: {
    isValidSection() {
      return (0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__.validateStringInput)(this.primaryDisplayName.value);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Actions */ "./node_modules/@nextcloud/vue/dist/Components/Actions.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionButton */ "./node_modules/@nextcloud/vue/dist/Components/ActionButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_FederationControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/FederationControl */ "./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue");
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
/* harmony import */ var _service_PersonalInfo_EmailService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/PersonalInfo/EmailService */ "./apps/settings/src/service/PersonalInfo/EmailService.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/validate */ "./apps/settings/src/utils/validate.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Email',
  components: {
    Actions: (_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0___default()),
    ActionButton: (_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_1___default()),
    FederationControl: _shared_FederationControl__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    email: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      default: 0
    },
    primary: {
      type: Boolean,
      default: false
    },
    scope: {
      type: String,
      required: true
    },
    activeNotificationEmail: {
      type: String,
      default: ''
    },
    localVerificationState: {
      type: Number,
      default: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_5__.VERIFICATION_ENUM.NOT_VERIFIED
    }
  },

  data() {
    return {
      accountProperty: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_5__.ACCOUNT_PROPERTY_READABLE_ENUM.EMAIL,
      initialEmail: this.email,
      localScope: this.scope,
      saveAdditionalEmailScope: _service_PersonalInfo_EmailService__WEBPACK_IMPORTED_MODULE_6__.saveAdditionalEmailScope,
      showCheckmarkIcon: false,
      showErrorIcon: false
    };
  },

  computed: {
    deleteDisabled() {
      if (this.primary) {
        // Disable for empty primary email as there is nothing to delete
        // OR when initialEmail (reflects server state) and email (current input) are not the same
        return this.email === '' || this.initialEmail !== this.email;
      } else if (this.initialEmail !== '') {
        return this.initialEmail !== this.email;
      }

      return false;
    },

    deleteEmailLabel() {
      if (this.primary) {
        return t('settings', 'Remove primary email');
      }

      return t('settings', 'Delete email');
    },

    setNotificationMailDisabled() {
      return !this.primary && this.localVerificationState !== _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_5__.VERIFICATION_ENUM.VERIFIED;
    },

    setNotificationMailLabel() {
      if (this.isNotificationEmail) {
        return t('settings', 'Unset as primary email');
      } else if (!this.primary && this.localVerificationState !== _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_5__.VERIFICATION_ENUM.VERIFIED) {
        return t('settings', 'This address is not confirmed');
      }

      return t('settings', 'Set as primary email');
    },

    federationDisabled() {
      return !this.initialEmail;
    },

    inputId() {
      if (this.primary) {
        return 'email';
      }

      return "email-".concat(this.index);
    },

    inputPlaceholder() {
      if (this.primary) {
        return t('settings', 'Your email address');
      }

      return t('settings', 'Additional email address {index}', {
        index: this.index + 1
      });
    },

    isNotificationEmail() {
      return this.email === this.activeNotificationEmail || this.primary && this.activeNotificationEmail === '';
    }

  },

  mounted() {
    if (!this.primary && this.initialEmail === '') {
      // $nextTick is needed here, otherwise it may not always work https://stackoverflow.com/questions/51922767/autofocus-input-on-mount-vue-ios/63485725#63485725
      this.$nextTick(() => {
        var _this$$refs$email;

        return (_this$$refs$email = this.$refs.email) === null || _this$$refs$email === void 0 ? void 0 : _this$$refs$email.focus();
      });
    }
  },

  methods: {
    onEmailChange(e) {
      this.$emit('update:email', e.target.value);
      this.debounceEmailChange(e.target.value.trim());
    },

    debounceEmailChange: debounce__WEBPACK_IMPORTED_MODULE_3___default()(async function (email) {
      if ((0,_utils_validate__WEBPACK_IMPORTED_MODULE_7__.validateEmail)(email) || email === '') {
        if (this.primary) {
          await this.updatePrimaryEmail(email);
        } else {
          if (email) {
            if (this.initialEmail === '') {
              await this.addAdditionalEmail(email);
            } else {
              await this.updateAdditionalEmail(email);
            }
          }
        }
      }
    }, 500),

    async deleteEmail() {
      if (this.primary) {
        this.$emit('update:email', '');
        await this.updatePrimaryEmail('');
      } else {
        await this.deleteAdditionalEmail();
      }
    },

    async updatePrimaryEmail(email) {
      try {
        var _responseData$ocs, _responseData$ocs$met;

        const responseData = await (0,_service_PersonalInfo_EmailService__WEBPACK_IMPORTED_MODULE_6__.savePrimaryEmail)(email);
        this.handleResponse({
          email,
          status: (_responseData$ocs = responseData.ocs) === null || _responseData$ocs === void 0 ? void 0 : (_responseData$ocs$met = _responseData$ocs.meta) === null || _responseData$ocs$met === void 0 ? void 0 : _responseData$ocs$met.status
        });
      } catch (e) {
        if (email === '') {
          this.handleResponse({
            errorMessage: t('settings', 'Unable to delete primary email address'),
            error: e
          });
        } else {
          this.handleResponse({
            errorMessage: t('settings', 'Unable to update primary email address'),
            error: e
          });
        }
      }
    },

    async addAdditionalEmail(email) {
      try {
        var _responseData$ocs2, _responseData$ocs2$me;

        const responseData = await (0,_service_PersonalInfo_EmailService__WEBPACK_IMPORTED_MODULE_6__.saveAdditionalEmail)(email);
        this.handleResponse({
          email,
          status: (_responseData$ocs2 = responseData.ocs) === null || _responseData$ocs2 === void 0 ? void 0 : (_responseData$ocs2$me = _responseData$ocs2.meta) === null || _responseData$ocs2$me === void 0 ? void 0 : _responseData$ocs2$me.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to add additional email address'),
          error: e
        });
      }
    },

    async setNotificationMail() {
      try {
        var _responseData$ocs3, _responseData$ocs3$me;

        const newNotificationMailValue = this.primary || this.isNotificationEmail ? '' : this.initialEmail;
        const responseData = await (0,_service_PersonalInfo_EmailService__WEBPACK_IMPORTED_MODULE_6__.saveNotificationEmail)(newNotificationMailValue);
        this.handleResponse({
          notificationEmail: newNotificationMailValue,
          status: (_responseData$ocs3 = responseData.ocs) === null || _responseData$ocs3 === void 0 ? void 0 : (_responseData$ocs3$me = _responseData$ocs3.meta) === null || _responseData$ocs3$me === void 0 ? void 0 : _responseData$ocs3$me.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: 'Unable to choose this email for notifications',
          error: e
        });
      }
    },

    async updateAdditionalEmail(email) {
      try {
        var _responseData$ocs4, _responseData$ocs4$me;

        const responseData = await (0,_service_PersonalInfo_EmailService__WEBPACK_IMPORTED_MODULE_6__.updateAdditionalEmail)(this.initialEmail, email);
        this.handleResponse({
          email,
          status: (_responseData$ocs4 = responseData.ocs) === null || _responseData$ocs4 === void 0 ? void 0 : (_responseData$ocs4$me = _responseData$ocs4.meta) === null || _responseData$ocs4$me === void 0 ? void 0 : _responseData$ocs4$me.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to update additional email address'),
          error: e
        });
      }
    },

    async deleteAdditionalEmail() {
      try {
        var _responseData$ocs5, _responseData$ocs5$me;

        const responseData = await (0,_service_PersonalInfo_EmailService__WEBPACK_IMPORTED_MODULE_6__.removeAdditionalEmail)(this.initialEmail);
        this.handleDeleteAdditionalEmail((_responseData$ocs5 = responseData.ocs) === null || _responseData$ocs5 === void 0 ? void 0 : (_responseData$ocs5$me = _responseData$ocs5.meta) === null || _responseData$ocs5$me === void 0 ? void 0 : _responseData$ocs5$me.status);
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to delete additional email address'),
          error: e
        });
      }
    },

    handleDeleteAdditionalEmail(status) {
      if (status === 'ok') {
        this.$emit('delete-additional-email');
      } else {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to delete additional email address')
        });
      }
    },

    handleResponse(_ref) {
      let {
        email,
        notificationEmail,
        status,
        errorMessage,
        error
      } = _ref;

      if (status === 'ok') {
        // Ensure that local state reflects server state
        if (email) {
          this.initialEmail = email;
        } else if (notificationEmail !== undefined) {
          this.$emit('update:notification-email', notificationEmail);
        }

        this.showCheckmarkIcon = true;
        setTimeout(() => {
          this.showCheckmarkIcon = false;
        }, 2000);
      } else {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(errorMessage);
        this.logger.error(errorMessage, error);
        this.showErrorIcon = true;
        setTimeout(() => {
          this.showErrorIcon = false;
        }, 2000);
      }
    },

    onScopeChange(scope) {
      this.$emit('update:scope', scope);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var _Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Email */ "./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue");
/* harmony import */ var _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/HeaderBar */ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue");
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
/* harmony import */ var _service_PersonalInfo_EmailService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/PersonalInfo/EmailService */ "./apps/settings/src/service/PersonalInfo/EmailService.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/validate */ "./apps/settings/src/utils/validate.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const {
  emailMap: {
    additionalEmails,
    primaryEmail,
    notificationEmail
  }
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'personalInfoParameters', {});
const {
  displayNameChangeSupported
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'accountParameters', {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EmailSection',
  components: {
    HeaderBar: _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Email: _Email__WEBPACK_IMPORTED_MODULE_2__["default"]
  },

  data() {
    return {
      accountProperty: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.ACCOUNT_PROPERTY_READABLE_ENUM.EMAIL,
      additionalEmails,
      displayNameChangeSupported,
      primaryEmail,
      savePrimaryEmailScope: _service_PersonalInfo_EmailService__WEBPACK_IMPORTED_MODULE_5__.savePrimaryEmailScope,
      notificationEmail
    };
  },

  computed: {
    firstAdditionalEmail() {
      if (this.additionalEmails.length) {
        return this.additionalEmails[0].value;
      }

      return null;
    },

    isValidSection() {
      return (0,_utils_validate__WEBPACK_IMPORTED_MODULE_6__.validateEmail)(this.primaryEmail.value) && this.additionalEmails.map(_ref => {
        let {
          value
        } = _ref;
        return value;
      }).every(_utils_validate__WEBPACK_IMPORTED_MODULE_6__.validateEmail);
    },

    primaryEmailValue: {
      get() {
        return this.primaryEmail.value;
      },

      set(value) {
        this.primaryEmail.value = value;
      }

    }
  },
  methods: {
    onAddAdditionalEmail() {
      if (this.isValidSection) {
        this.additionalEmails.push({
          value: '',
          scope: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_ADDITIONAL_EMAIL_SCOPE
        });
      }
    },

    onDeleteAdditionalEmail(index) {
      this.$delete(this.additionalEmails, index);
    },

    async onUpdateEmail() {
      if (this.primaryEmailValue === '' && this.firstAdditionalEmail) {
        const deletedEmail = this.firstAdditionalEmail;
        await this.deleteFirstAdditionalEmail();
        this.primaryEmailValue = deletedEmail;
        await this.updatePrimaryEmail();
      }
    },

    async onUpdateNotificationEmail(email) {
      this.notificationEmail = email;
    },

    async updatePrimaryEmail() {
      try {
        var _responseData$ocs, _responseData$ocs$met;

        const responseData = await (0,_service_PersonalInfo_EmailService__WEBPACK_IMPORTED_MODULE_5__.savePrimaryEmail)(this.primaryEmailValue);
        this.handleResponse((_responseData$ocs = responseData.ocs) === null || _responseData$ocs === void 0 ? void 0 : (_responseData$ocs$met = _responseData$ocs.meta) === null || _responseData$ocs$met === void 0 ? void 0 : _responseData$ocs$met.status);
      } catch (e) {
        this.handleResponse('error', t('settings', 'Unable to update primary email address'), e);
      }
    },

    async deleteFirstAdditionalEmail() {
      try {
        var _responseData$ocs2, _responseData$ocs2$me;

        const responseData = await (0,_service_PersonalInfo_EmailService__WEBPACK_IMPORTED_MODULE_5__.removeAdditionalEmail)(this.firstAdditionalEmail);
        this.handleDeleteFirstAdditionalEmail((_responseData$ocs2 = responseData.ocs) === null || _responseData$ocs2 === void 0 ? void 0 : (_responseData$ocs2$me = _responseData$ocs2.meta) === null || _responseData$ocs2$me === void 0 ? void 0 : _responseData$ocs2$me.status);
      } catch (e) {
        this.handleResponse('error', t('settings', 'Unable to delete additional email address'), e);
      }
    },

    handleDeleteFirstAdditionalEmail(status) {
      if (status === 'ok') {
        this.$delete(this.additionalEmails, 0);
      } else {
        this.handleResponse('error', t('settings', 'Unable to delete additional email address'), {});
      }
    },

    handleResponse(status, errorMessage, error) {
      if (status !== 'ok') {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(errorMessage);
        this.logger.error(errorMessage, error);
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
/* harmony import */ var _service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/PersonalInfo/PersonalInfoService */ "./apps/settings/src/service/PersonalInfo/PersonalInfoService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Headline',
  props: {
    headline: {
      type: String,
      required: true
    },
    scope: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      initialHeadline: this.headline,
      localScope: this.scope,
      showCheckmarkIcon: false,
      showErrorIcon: false
    };
  },

  methods: {
    onHeadlineChange(e) {
      this.$emit('update:headline', e.target.value);
      this.debounceHeadlineChange(e.target.value.trim());
    },

    debounceHeadlineChange: debounce__WEBPACK_IMPORTED_MODULE_2___default()(async function (headline) {
      await this.updatePrimaryHeadline(headline);
    }, 500),

    async updatePrimaryHeadline(headline) {
      try {
        var _responseData$ocs, _responseData$ocs$met;

        const responseData = await (0,_service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_4__.savePrimaryAccountProperty)(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__.ACCOUNT_PROPERTY_ENUM.HEADLINE, headline);
        this.handleResponse({
          headline,
          status: (_responseData$ocs = responseData.ocs) === null || _responseData$ocs === void 0 ? void 0 : (_responseData$ocs$met = _responseData$ocs.meta) === null || _responseData$ocs$met === void 0 ? void 0 : _responseData$ocs$met.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to update headline'),
          error: e
        });
      }
    },

    handleResponse(_ref) {
      let {
        headline,
        status,
        errorMessage,
        error
      } = _ref;

      if (status === 'ok') {
        // Ensure that local state reflects server state
        this.initialHeadline = headline;
        (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.emit)('settings:headline:updated', headline);
        this.showCheckmarkIcon = true;
        setTimeout(() => {
          this.showCheckmarkIcon = false;
        }, 2000);
      } else {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(errorMessage);
        this.logger.error(errorMessage, error);
        this.showErrorIcon = true;
        setTimeout(() => {
          this.showErrorIcon = false;
        }, 2000);
      }
    },

    onScopeChange(scope) {
      this.$emit('update:scope', scope);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Headline */ "./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue");
/* harmony import */ var _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/HeaderBar */ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue");
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const {
  headlineMap: {
    primaryHeadline
  }
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'personalInfoParameters', {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'HeadlineSection',
  components: {
    Headline: _Headline__WEBPACK_IMPORTED_MODULE_1__["default"],
    HeaderBar: _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },

  data() {
    return {
      accountProperty: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__.ACCOUNT_PROPERTY_READABLE_ENUM.HEADLINE,
      primaryHeadline
    };
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
/* harmony import */ var _service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/PersonalInfo/PersonalInfoService */ "./apps/settings/src/service/PersonalInfo/PersonalInfoService.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/validate */ "./apps/settings/src/utils/validate.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Language',
  props: {
    commonLanguages: {
      type: Array,
      required: true
    },
    otherLanguages: {
      type: Array,
      required: true
    },
    language: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      initialLanguage: this.language
    };
  },

  computed: {
    allLanguages() {
      return Object.freeze([...this.commonLanguages, ...this.otherLanguages].reduce((acc, _ref) => {
        let {
          code,
          name
        } = _ref;
        return { ...acc,
          [code]: name
        };
      }, {}));
    }

  },
  methods: {
    async onLanguageChange(e) {
      const language = this.constructLanguage(e.target.value);
      this.$emit('update:language', language);

      if ((0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__.validateLanguage)(language)) {
        await this.updateLanguage(language);
      }
    },

    async updateLanguage(language) {
      try {
        var _responseData$ocs, _responseData$ocs$met;

        const responseData = await (0,_service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_2__.savePrimaryAccountProperty)(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_1__.ACCOUNT_SETTING_PROPERTY_ENUM.LANGUAGE, language.code);
        this.handleResponse({
          language,
          status: (_responseData$ocs = responseData.ocs) === null || _responseData$ocs === void 0 ? void 0 : (_responseData$ocs$met = _responseData$ocs.meta) === null || _responseData$ocs$met === void 0 ? void 0 : _responseData$ocs$met.status
        });
        this.reloadPage();
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to update language'),
          error: e
        });
      }
    },

    constructLanguage(languageCode) {
      return {
        code: languageCode,
        name: this.allLanguages[languageCode]
      };
    },

    handleResponse(_ref2) {
      let {
        language,
        status,
        errorMessage,
        error
      } = _ref2;

      if (status === 'ok') {
        // Ensure that local state reflects server state
        this.initialLanguage = language;
      } else {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(errorMessage);
        this.logger.error(errorMessage, error);
      }
    },

    reloadPage() {
      location.reload();
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Language */ "./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue");
/* harmony import */ var _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/HeaderBar */ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue");
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const {
  languageMap: {
    activeLanguage,
    commonLanguages,
    otherLanguages
  }
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'personalInfoParameters', {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LanguageSection',
  components: {
    Language: _Language__WEBPACK_IMPORTED_MODULE_1__["default"],
    HeaderBar: _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },

  data() {
    return {
      accountProperty: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__.ACCOUNT_SETTING_PROPERTY_READABLE_ENUM.LANGUAGE,
      commonLanguages,
      otherLanguages,
      language: activeLanguage
    };
  },

  computed: {
    isEditable() {
      return Boolean(this.language);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
/* harmony import */ var _service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/PersonalInfo/PersonalInfoService */ "./apps/settings/src/service/PersonalInfo/PersonalInfoService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Organisation',
  props: {
    organisation: {
      type: String,
      required: true
    },
    scope: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      initialOrganisation: this.organisation,
      localScope: this.scope,
      showCheckmarkIcon: false,
      showErrorIcon: false
    };
  },

  methods: {
    onOrganisationChange(e) {
      this.$emit('update:organisation', e.target.value);
      this.debounceOrganisationChange(e.target.value.trim());
    },

    debounceOrganisationChange: debounce__WEBPACK_IMPORTED_MODULE_2___default()(async function (organisation) {
      await this.updatePrimaryOrganisation(organisation);
    }, 500),

    async updatePrimaryOrganisation(organisation) {
      try {
        var _responseData$ocs, _responseData$ocs$met;

        const responseData = await (0,_service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_4__.savePrimaryAccountProperty)(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__.ACCOUNT_PROPERTY_ENUM.ORGANISATION, organisation);
        this.handleResponse({
          organisation,
          status: (_responseData$ocs = responseData.ocs) === null || _responseData$ocs === void 0 ? void 0 : (_responseData$ocs$met = _responseData$ocs.meta) === null || _responseData$ocs$met === void 0 ? void 0 : _responseData$ocs$met.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to update organisation'),
          error: e
        });
      }
    },

    handleResponse(_ref) {
      let {
        organisation,
        status,
        errorMessage,
        error
      } = _ref;

      if (status === 'ok') {
        // Ensure that local state reflects server state
        this.initialOrganisation = organisation;
        (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.emit)('settings:organisation:updated', organisation);
        this.showCheckmarkIcon = true;
        setTimeout(() => {
          this.showCheckmarkIcon = false;
        }, 2000);
      } else {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(errorMessage);
        this.logger.error(errorMessage, error);
        this.showErrorIcon = true;
        setTimeout(() => {
          this.showErrorIcon = false;
        }, 2000);
      }
    },

    onScopeChange(scope) {
      this.$emit('update:scope', scope);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _Organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Organisation */ "./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue");
/* harmony import */ var _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/HeaderBar */ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue");
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const {
  organisationMap: {
    primaryOrganisation
  }
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'personalInfoParameters', {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'OrganisationSection',
  components: {
    Organisation: _Organisation__WEBPACK_IMPORTED_MODULE_1__["default"],
    HeaderBar: _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },

  data() {
    return {
      accountProperty: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__.ACCOUNT_PROPERTY_READABLE_ENUM.ORGANISATION,
      primaryOrganisation
    };
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_material_design_icons_ChevronDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material-design-icons/ChevronDown */ "./node_modules/vue-material-design-icons/ChevronDown.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'EditProfileAnchorLink',
  components: {
    ChevronDownIcon: vue_material_design_icons_ChevronDown__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    profileEnabled: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    disabled() {
      return !this.profileEnabled;
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.js");
/* harmony import */ var _service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/PersonalInfo/PersonalInfoService */ "./apps/settings/src/service/PersonalInfo/PersonalInfoService.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/validate */ "./apps/settings/src/utils/validate.js");
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ProfileCheckbox',
  props: {
    profileEnabled: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      initialProfileEnabled: this.profileEnabled
    };
  },

  methods: {
    async onEnableProfileChange(e) {
      const isEnabled = e.target.checked;
      this.$emit('update:profile-enabled', isEnabled);

      if ((0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__.validateBoolean)(isEnabled)) {
        await this.updateEnableProfile(isEnabled);
      }
    },

    async updateEnableProfile(isEnabled) {
      try {
        var _responseData$ocs, _responseData$ocs$met;

        const responseData = await (0,_service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_2__.savePrimaryAccountProperty)(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.ACCOUNT_PROPERTY_ENUM.PROFILE_ENABLED, isEnabled);
        this.handleResponse({
          isEnabled,
          status: (_responseData$ocs = responseData.ocs) === null || _responseData$ocs === void 0 ? void 0 : (_responseData$ocs$met = _responseData$ocs.meta) === null || _responseData$ocs$met === void 0 ? void 0 : _responseData$ocs$met.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to update profile enabled state'),
          error: e
        });
      }
    },

    handleResponse(_ref) {
      let {
        isEnabled,
        status,
        errorMessage,
        error
      } = _ref;

      if (status === 'ok') {
        // Ensure that local state reflects server state
        this.initialProfileEnabled = isEnabled;
        (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.emit)('settings:profile-enabled:updated', isEnabled);
      } else {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(errorMessage);
        this.logger.error(errorMessage, error);
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Avatar */ "./node_modules/@nextcloud/vue/dist/Components/Avatar.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ProfilePreviewCard',
  components: {
    Avatar: (_nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_2___default())
  },
  props: {
    displayName: {
      type: String,
      required: true
    },
    organisation: {
      type: String,
      required: true
    },
    profileEnabled: {
      type: Boolean,
      required: true
    },
    userId: {
      type: String,
      required: true
    }
  },
  computed: {
    disabled() {
      return !this.profileEnabled;
    },

    profilePageLink() {
      if (this.profileEnabled) {
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/u/{userId}', {
          userId: (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)().uid
        });
      } // Since an anchor element is used rather than a button for better UX,
      // this hack removes href if the profile is disabled so that disabling pointer-events is not needed to prevent a click from opening a page
      // and to allow the hover event (which disabling pointer-events wouldn't allow) for styling


      return null;
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.js");
/* harmony import */ var _EditProfileAnchorLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditProfileAnchorLink */ "./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue");
/* harmony import */ var _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/HeaderBar */ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue");
/* harmony import */ var _ProfileCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileCheckbox */ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue");
/* harmony import */ var _ProfilePreviewCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfilePreviewCard */ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue");
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const {
  organisationMap: {
    primaryOrganisation: {
      value: organisation
    }
  },
  displayNameMap: {
    primaryDisplayName: {
      value: displayName
    }
  },
  profileEnabled,
  userId
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'personalInfoParameters', {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProfileSection',
  components: {
    EditProfileAnchorLink: _EditProfileAnchorLink__WEBPACK_IMPORTED_MODULE_2__["default"],
    HeaderBar: _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_3__["default"],
    ProfileCheckbox: _ProfileCheckbox__WEBPACK_IMPORTED_MODULE_4__["default"],
    ProfilePreviewCard: _ProfilePreviewCard__WEBPACK_IMPORTED_MODULE_5__["default"]
  },

  data() {
    return {
      accountProperty: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_6__.ACCOUNT_PROPERTY_READABLE_ENUM.PROFILE_ENABLED,
      organisation,
      displayName,
      profileEnabled,
      userId
    };
  },

  mounted() {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.subscribe)('settings:display-name:updated', this.handleDisplayNameUpdate);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.subscribe)('settings:organisation:updated', this.handleOrganisationUpdate);
  },

  beforeDestroy() {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.unsubscribe)('settings:display-name:updated', this.handleDisplayNameUpdate);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.unsubscribe)('settings:organisation:updated', this.handleOrganisationUpdate);
  },

  methods: {
    handleDisplayNameUpdate(displayName) {
      this.displayName = displayName;
    },

    handleOrganisationUpdate(organisation) {
      this.organisation = organisation;
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.js");
/* harmony import */ var _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/HeaderBar */ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue");
/* harmony import */ var _VisibilityDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisibilityDropdown */ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue");
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const {
  profileConfig
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'profileParameters', {});
const {
  profileEnabled
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'personalInfoParameters', false);

const compareParams = (a, b) => {
  if (a.appId === b.appId || a.appId !== 'core' && b.appId !== 'core') {
    return a.displayId.localeCompare(b.displayId);
  } else if (a.appId === 'core') {
    return 1;
  } else {
    return -1;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProfileVisibilitySection',
  components: {
    HeaderBar: _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    VisibilityDropdown: _VisibilityDropdown__WEBPACK_IMPORTED_MODULE_3__["default"]
  },

  data() {
    return {
      heading: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.PROFILE_READABLE_ENUM.PROFILE_VISIBILITY,
      profileEnabled,
      visibilityParams: Object.entries(profileConfig).map(_ref => {
        let [paramId, {
          appId,
          displayId,
          visibility
        }] = _ref;
        return {
          id: paramId,
          appId,
          displayId,
          visibility
        };
      }).sort(compareParams),
      // TODO remove this when not used once the settings layout is updated
      marginLeft: window.matchMedia('(min-width: 1600px)').matches ? window.getComputedStyle(document.getElementById('personal-settings-avatar-container')).getPropertyValue('width').trim() : '0px'
    };
  },

  computed: {
    disabled() {
      return !this.profileEnabled;
    },

    rows() {
      return Math.ceil(this.visibilityParams.length / 2);
    }

  },

  mounted() {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.subscribe)('settings:profile-enabled:updated', this.handleProfileEnabledUpdate); // TODO remove this when not used once the settings layout is updated

    window.onresize = () => {
      this.marginLeft = window.matchMedia('(min-width: 1600px)').matches ? window.getComputedStyle(document.getElementById('personal-settings-avatar-container')).getPropertyValue('width').trim() : '0px';
    };
  },

  beforeDestroy() {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.unsubscribe)('settings:profile-enabled:updated', this.handleProfileEnabledUpdate);
  },

  methods: {
    handleProfileEnabledUpdate(profileEnabled) {
      this.profileEnabled = profileEnabled;
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Multiselect */ "./node_modules/@nextcloud/vue/dist/Components/Multiselect.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_ProfileService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/ProfileService */ "./apps/settings/src/service/ProfileService.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/validate */ "./apps/settings/src/utils/validate.js");
/* harmony import */ var _constants_ProfileConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/ProfileConstants */ "./apps/settings/src/constants/ProfileConstants.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const {
  profileEnabled
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('settings', 'personalInfoParameters', false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'VisibilityDropdown',
  components: {
    Multiselect: (_nextcloud_vue_dist_Components_Multiselect__WEBPACK_IMPORTED_MODULE_3___default())
  },
  props: {
    paramId: {
      type: String,
      required: true
    },
    displayId: {
      type: String,
      required: true
    },
    visibility: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      initialVisibility: this.visibility,
      profileEnabled
    };
  },

  computed: {
    disabled() {
      return !this.profileEnabled;
    },

    inputId() {
      return "profile-visibility-".concat(this.paramId);
    },

    visibilityObject() {
      return _constants_ProfileConstants__WEBPACK_IMPORTED_MODULE_6__.VISIBILITY_PROPERTY_ENUM[this.visibility];
    },

    visibilityOptions() {
      return Object.values(_constants_ProfileConstants__WEBPACK_IMPORTED_MODULE_6__.VISIBILITY_PROPERTY_ENUM);
    }

  },

  mounted() {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_2__.subscribe)('settings:profile-enabled:updated', this.handleProfileEnabledUpdate);
  },

  beforeDestroy() {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_2__.unsubscribe)('settings:profile-enabled:updated', this.handleProfileEnabledUpdate);
  },

  methods: {
    async onVisibilityChange(visibilityObject) {
      // This check is needed as the argument is null when selecting the same option
      if (visibilityObject !== null) {
        const {
          name: visibility
        } = visibilityObject;
        this.$emit('update:visibility', visibility);

        if ((0,_utils_validate__WEBPACK_IMPORTED_MODULE_5__.validateStringInput)(visibility)) {
          await this.updateVisibility(visibility);
        }
      }
    },

    async updateVisibility(visibility) {
      try {
        var _responseData$ocs, _responseData$ocs$met;

        const responseData = await (0,_service_ProfileService__WEBPACK_IMPORTED_MODULE_4__.saveProfileParameterVisibility)(this.paramId, visibility);
        this.handleResponse({
          visibility,
          status: (_responseData$ocs = responseData.ocs) === null || _responseData$ocs === void 0 ? void 0 : (_responseData$ocs$met = _responseData$ocs.meta) === null || _responseData$ocs$met === void 0 ? void 0 : _responseData$ocs$met.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to update visibility of {displayId}', {
            displayId: this.displayId
          }),
          error: e
        });
      }
    },

    handleResponse(_ref) {
      let {
        visibility,
        status,
        errorMessage,
        error
      } = _ref;

      if (status === 'ok') {
        // Ensure that local state reflects server state
        this.initialVisibility = visibility;
      } else {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(errorMessage);
        this.logger.error(errorMessage, error);
      }
    },

    handleProfileEnabledUpdate(profileEnabled) {
      this.profileEnabled = profileEnabled;
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
/* harmony import */ var _service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/PersonalInfo/PersonalInfoService */ "./apps/settings/src/service/PersonalInfo/PersonalInfoService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Role',
  props: {
    role: {
      type: String,
      required: true
    },
    scope: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      initialRole: this.role,
      localScope: this.scope,
      showCheckmarkIcon: false,
      showErrorIcon: false
    };
  },

  methods: {
    onRoleChange(e) {
      this.$emit('update:role', e.target.value);
      this.debounceRoleChange(e.target.value.trim());
    },

    debounceRoleChange: debounce__WEBPACK_IMPORTED_MODULE_2___default()(async function (role) {
      await this.updatePrimaryRole(role);
    }, 500),

    async updatePrimaryRole(role) {
      try {
        var _responseData$ocs, _responseData$ocs$met;

        const responseData = await (0,_service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_4__.savePrimaryAccountProperty)(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__.ACCOUNT_PROPERTY_ENUM.ROLE, role);
        this.handleResponse({
          role,
          status: (_responseData$ocs = responseData.ocs) === null || _responseData$ocs === void 0 ? void 0 : (_responseData$ocs$met = _responseData$ocs.meta) === null || _responseData$ocs$met === void 0 ? void 0 : _responseData$ocs$met.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to update role'),
          error: e
        });
      }
    },

    handleResponse(_ref) {
      let {
        role,
        status,
        errorMessage,
        error
      } = _ref;

      if (status === 'ok') {
        // Ensure that local state reflects server state
        this.initialRole = role;
        (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.emit)('settings:role:updated', role);
        this.showCheckmarkIcon = true;
        setTimeout(() => {
          this.showCheckmarkIcon = false;
        }, 2000);
      } else {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(errorMessage);
        this.logger.error(errorMessage, error);
        this.showErrorIcon = true;
        setTimeout(() => {
          this.showErrorIcon = false;
        }, 2000);
      }
    },

    onScopeChange(scope) {
      this.$emit('update:scope', scope);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _Role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Role */ "./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue");
/* harmony import */ var _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/HeaderBar */ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue");
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const {
  roleMap: {
    primaryRole
  }
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('settings', 'personalInfoParameters', {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RoleSection',
  components: {
    Role: _Role__WEBPACK_IMPORTED_MODULE_1__["default"],
    HeaderBar: _shared_HeaderBar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },

  data() {
    return {
      accountProperty: _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_3__.ACCOUNT_PROPERTY_READABLE_ENUM.ROLE,
      primaryRole
    };
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AddButton',
  props: {
    disabled: {
      type: Boolean,
      default: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Actions */ "./node_modules/@nextcloud/vue/dist/Components/Actions.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* harmony import */ var _FederationControlAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FederationControlAction */ "./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue");
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
/* harmony import */ var _service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/PersonalInfo/PersonalInfoService */ "./apps/settings/src/service/PersonalInfo/PersonalInfoService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const {
  lookupServerUploadEnabled
} = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('settings', 'accountParameters', {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FederationControl',
  components: {
    Actions: (_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_0___default()),
    FederationControlAction: _FederationControlAction__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    accountProperty: {
      type: String,
      required: true,
      validator: value => Object.values(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.ACCOUNT_PROPERTY_READABLE_ENUM).includes(value)
    },
    additional: {
      type: Boolean,
      default: false
    },
    additionalValue: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    handleAdditionalScopeChange: {
      type: Function,
      default: null
    },
    scope: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      accountPropertyLowerCase: this.accountProperty.toLocaleLowerCase(),
      initialScope: this.scope
    };
  },

  computed: {
    ariaLabel() {
      return t('settings', 'Change scope level of {accountProperty}', {
        accountProperty: this.accountPropertyLowerCase
      });
    },

    scopeIcon() {
      return _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.SCOPE_PROPERTY_ENUM[this.scope].iconClass;
    },

    federationScopes() {
      return Object.values(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.SCOPE_PROPERTY_ENUM);
    },

    supportedScopes() {
      if (lookupServerUploadEnabled && !_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.UNPUBLISHED_READABLE_PROPERTIES.includes(this.accountProperty)) {
        return [..._constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.PROPERTY_READABLE_SUPPORTED_SCOPES_ENUM[this.accountProperty], _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.SCOPE_ENUM.FEDERATED, _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.SCOPE_ENUM.PUBLISHED];
      }

      return _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.PROPERTY_READABLE_SUPPORTED_SCOPES_ENUM[this.accountProperty];
    }

  },
  methods: {
    async changeScope(scope) {
      this.$emit('update:scope', scope);

      if (!this.additional) {
        await this.updatePrimaryScope(scope);
      } else {
        await this.updateAdditionalScope(scope);
      }
    },

    async updatePrimaryScope(scope) {
      try {
        var _responseData$ocs, _responseData$ocs$met;

        const responseData = await (0,_service_PersonalInfo_PersonalInfoService__WEBPACK_IMPORTED_MODULE_5__.savePrimaryAccountPropertyScope)(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_4__.PROPERTY_READABLE_KEYS_ENUM[this.accountProperty], scope);
        this.handleResponse({
          scope,
          status: (_responseData$ocs = responseData.ocs) === null || _responseData$ocs === void 0 ? void 0 : (_responseData$ocs$met = _responseData$ocs.meta) === null || _responseData$ocs$met === void 0 ? void 0 : _responseData$ocs$met.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to update federation scope of the primary {accountProperty}', {
            accountProperty: this.accountPropertyLowerCase
          }),
          error: e
        });
      }
    },

    async updateAdditionalScope(scope) {
      try {
        var _responseData$ocs2, _responseData$ocs2$me;

        const responseData = await this.handleAdditionalScopeChange(this.additionalValue, scope);
        this.handleResponse({
          scope,
          status: (_responseData$ocs2 = responseData.ocs) === null || _responseData$ocs2 === void 0 ? void 0 : (_responseData$ocs2$me = _responseData$ocs2.meta) === null || _responseData$ocs2$me === void 0 ? void 0 : _responseData$ocs2$me.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: t('settings', 'Unable to update federation scope of additional {accountProperty}', {
            accountProperty: this.accountPropertyLowerCase
          }),
          error: e
        });
      }
    },

    handleResponse(_ref) {
      let {
        scope,
        status,
        errorMessage,
        error
      } = _ref;

      if (status === 'ok') {
        this.initialScope = scope;
      } else {
        this.$emit('update:scope', this.initialScope);
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(errorMessage);
        this.logger.error(errorMessage, error);
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionButton */ "./node_modules/@nextcloud/vue/dist/Components/ActionButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'FederationControlAction',
  components: {
    ActionButton: (_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    activeScope: {
      type: String,
      required: true
    },
    displayName: {
      type: String,
      required: true
    },
    handleScopeChange: {
      type: Function,
      default: () => {}
    },
    iconClass: {
      type: String,
      required: true
    },
    isSupportedScope: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    tooltipDisabled: {
      type: String,
      default: ''
    },
    tooltip: {
      type: String,
      required: true
    }
  },
  methods: {
    updateScope() {
      this.handleScopeChange(this.name);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddButton */ "./apps/settings/src/components/PersonalInfo/shared/AddButton.vue");
/* harmony import */ var _FederationControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FederationControl */ "./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue");
/* harmony import */ var _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/AccountPropertyConstants */ "./apps/settings/src/constants/AccountPropertyConstants.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'HeaderBar',
  components: {
    AddButton: _AddButton__WEBPACK_IMPORTED_MODULE_0__["default"],
    FederationControl: _FederationControl__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    accountProperty: {
      type: String,
      required: true,
      validator: value => Object.values(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_2__.ACCOUNT_PROPERTY_READABLE_ENUM).includes(value) || Object.values(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_2__.ACCOUNT_SETTING_PROPERTY_READABLE_ENUM).includes(value) || value === _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_2__.PROFILE_READABLE_ENUM.PROFILE_VISIBILITY
    },
    isEditable: {
      type: Boolean,
      default: true
    },
    isMultiValueSupported: {
      type: Boolean,
      default: false
    },
    isValidSection: {
      type: Boolean,
      default: false
    },
    labelFor: {
      type: String,
      default: ''
    },
    scope: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      localScope: this.scope
    };
  },

  computed: {
    isProfileProperty() {
      return this.accountProperty === _constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_2__.ACCOUNT_PROPERTY_READABLE_ENUM.PROFILE_ENABLED;
    },

    isSettingProperty() {
      return Object.values(_constants_AccountPropertyConstants__WEBPACK_IMPORTED_MODULE_2__.ACCOUNT_SETTING_PROPERTY_READABLE_ENUM).includes(this.accountProperty);
    }

  },
  methods: {
    onAddAdditional() {
      this.$emit('add-additional');
    },

    onScopeChange(scope) {
      this.$emit('update:scope', scope);
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=style&index=0&id=5428a4f4&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=style&index=0&id=5428a4f4&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".biography[data-v-5428a4f4] {\n  display: grid;\n  align-items: center;\n}\n.biography textarea[data-v-5428a4f4] {\n  resize: vertical;\n  grid-area: 1/1;\n  width: 100%;\n  margin: 3px 3px 3px 0;\n  padding: 7px 6px;\n  color: var(--color-main-text);\n  border: 1px solid var(--color-border-dark);\n  border-radius: var(--border-radius);\n  background-color: var(--color-main-background);\n  font-family: var(--font-face);\n  cursor: text;\n}\n.biography textarea[data-v-5428a4f4]:hover, .biography textarea[data-v-5428a4f4]:focus, .biography textarea[data-v-5428a4f4]:active {\n  border-color: var(--color-primary-element) !important;\n  outline: none !important;\n}\n.biography .biography__actions-container[data-v-5428a4f4] {\n  grid-area: 1/1;\n  justify-self: flex-end;\n  align-self: flex-end;\n  height: 30px;\n  display: flex;\n  gap: 0 2px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n.biography .biography__actions-container .icon-checkmark[data-v-5428a4f4],\n.biography .biography__actions-container .icon-error[data-v-5428a4f4] {\n  height: 30px !important;\n  min-height: 30px !important;\n  width: 30px !important;\n  min-width: 30px !important;\n  top: 0;\n  right: 0;\n  float: none;\n}\n.fade-enter[data-v-5428a4f4],\n.fade-leave-to[data-v-5428a4f4] {\n  opacity: 0;\n}\n.fade-enter-active[data-v-5428a4f4] {\n  transition: opacity 200ms ease-out;\n}\n.fade-leave-active[data-v-5428a4f4] {\n  transition: opacity 300ms ease-out;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=style&index=0&id=9b1d47a2&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=style&index=0&id=9b1d47a2&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "section[data-v-9b1d47a2] {\n  padding: 10px 10px;\n}\nsection[data-v-9b1d47a2] button:disabled {\n  cursor: default;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=style&index=0&id=2b6172f4&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=style&index=0&id=2b6172f4&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".displayname[data-v-2b6172f4] {\n  display: grid;\n  align-items: center;\n}\n.displayname input[data-v-2b6172f4] {\n  grid-area: 1/1;\n  width: 100%;\n  height: 34px;\n  margin: 3px 3px 3px 0;\n  padding: 7px 6px;\n  color: var(--color-main-text);\n  border: 1px solid var(--color-border-dark);\n  border-radius: var(--border-radius);\n  background-color: var(--color-main-background);\n  font-family: var(--font-face);\n  cursor: text;\n}\n.displayname .displayname__actions-container[data-v-2b6172f4] {\n  grid-area: 1/1;\n  justify-self: flex-end;\n  height: 30px;\n  display: flex;\n  gap: 0 2px;\n  margin-right: 5px;\n}\n.displayname .displayname__actions-container .icon-checkmark[data-v-2b6172f4],\n.displayname .displayname__actions-container .icon-error[data-v-2b6172f4] {\n  height: 30px !important;\n  min-height: 30px !important;\n  width: 30px !important;\n  min-width: 30px !important;\n  top: 0;\n  right: 0;\n  float: none;\n}\n.fade-enter[data-v-2b6172f4],\n.fade-leave-to[data-v-2b6172f4] {\n  opacity: 0;\n}\n.fade-enter-active[data-v-2b6172f4] {\n  transition: opacity 200ms ease-out;\n}\n.fade-leave-active[data-v-2b6172f4] {\n  transition: opacity 300ms ease-out;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=style&index=0&id=0c7fa32f&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=style&index=0&id=0c7fa32f&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "section[data-v-0c7fa32f] {\n  padding: 10px 10px;\n}\nsection[data-v-0c7fa32f] button:disabled {\n  cursor: default;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=style&index=0&id=a9c46cb4&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=style&index=0&id=a9c46cb4&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".email[data-v-a9c46cb4] {\n  display: grid;\n  align-items: center;\n}\n.email input[data-v-a9c46cb4] {\n  grid-area: 1/1;\n  width: 100%;\n  height: 34px;\n  margin: 3px 3px 3px 0;\n  padding: 7px 6px;\n  color: var(--color-main-text);\n  border: 1px solid var(--color-border-dark);\n  border-radius: var(--border-radius);\n  background-color: var(--color-main-background);\n  font-family: var(--font-face);\n  cursor: text;\n}\n.email .email__actions-container[data-v-a9c46cb4] {\n  grid-area: 1/1;\n  justify-self: flex-end;\n  height: 30px;\n  display: flex;\n  gap: 0 2px;\n  margin-right: 5px;\n}\n.email .email__actions-container .email__actions[data-v-a9c46cb4] {\n  opacity: 0.4 !important;\n}\n.email .email__actions-container .email__actions[data-v-a9c46cb4]:hover, .email .email__actions-container .email__actions[data-v-a9c46cb4]:focus, .email .email__actions-container .email__actions[data-v-a9c46cb4]:active {\n  opacity: 0.8 !important;\n}\n.email .email__actions-container .email__actions[data-v-a9c46cb4] button {\n  height: 30px !important;\n  min-height: 30px !important;\n  width: 30px !important;\n  min-width: 30px !important;\n}\n.email .email__actions-container .icon-checkmark[data-v-a9c46cb4],\n.email .email__actions-container .icon-error[data-v-a9c46cb4] {\n  height: 30px !important;\n  min-height: 30px !important;\n  width: 30px !important;\n  min-width: 30px !important;\n  top: 0;\n  right: 0;\n  float: none;\n}\n.fade-enter[data-v-a9c46cb4],\n.fade-leave-to[data-v-a9c46cb4] {\n  opacity: 0;\n}\n.fade-enter-active[data-v-a9c46cb4] {\n  transition: opacity 200ms ease-out;\n}\n.fade-leave-active[data-v-a9c46cb4] {\n  transition: opacity 300ms ease-out;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=style&index=0&id=c3e547e2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=style&index=0&id=c3e547e2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "section[data-v-c3e547e2] {\n  padding: 10px 10px;\n}\nsection[data-v-c3e547e2] button:disabled {\n  cursor: default;\n}\nsection .additional-emails-label[data-v-c3e547e2] {\n  display: block;\n  margin-top: 16px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=style&index=0&id=9418803c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=style&index=0&id=9418803c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".headline[data-v-9418803c] {\n  display: grid;\n  align-items: center;\n}\n.headline input[data-v-9418803c] {\n  grid-area: 1/1;\n  width: 100%;\n  height: 34px;\n  margin: 3px 3px 3px 0;\n  padding: 7px 6px;\n  color: var(--color-main-text);\n  border: 1px solid var(--color-border-dark);\n  border-radius: var(--border-radius);\n  background-color: var(--color-main-background);\n  font-family: var(--font-face);\n  cursor: text;\n}\n.headline .headline__actions-container[data-v-9418803c] {\n  grid-area: 1/1;\n  justify-self: flex-end;\n  height: 30px;\n  display: flex;\n  gap: 0 2px;\n  margin-right: 5px;\n}\n.headline .headline__actions-container .icon-checkmark[data-v-9418803c],\n.headline .headline__actions-container .icon-error[data-v-9418803c] {\n  height: 30px !important;\n  min-height: 30px !important;\n  width: 30px !important;\n  min-width: 30px !important;\n  top: 0;\n  right: 0;\n  float: none;\n}\n.fade-enter[data-v-9418803c],\n.fade-leave-to[data-v-9418803c] {\n  opacity: 0;\n}\n.fade-enter-active[data-v-9418803c] {\n  transition: opacity 200ms ease-out;\n}\n.fade-leave-active[data-v-9418803c] {\n  transition: opacity 300ms ease-out;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=style&index=0&id=637d2a53&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=style&index=0&id=637d2a53&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "section[data-v-637d2a53] {\n  padding: 10px 10px;\n}\nsection[data-v-637d2a53] button:disabled {\n  cursor: default;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=style&index=0&id=0e2d022c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=style&index=0&id=0e2d022c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".language[data-v-0e2d022c] {\n  display: grid;\n}\n.language select[data-v-0e2d022c] {\n  width: 100%;\n  height: 34px;\n  margin: 3px 3px 3px 0;\n  padding: 6px 16px;\n  color: var(--color-main-text);\n  border: 1px solid var(--color-border-dark);\n  border-radius: var(--border-radius);\n  background: var(--icon-triangle-s-000) no-repeat right 4px center;\n  font-family: var(--font-face);\n  appearance: none;\n  cursor: pointer;\n}\n.language a[data-v-0e2d022c] {\n  color: var(--color-main-text);\n  text-decoration: none;\n  width: max-content;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=style&index=0&id=126bf24b&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=style&index=0&id=126bf24b&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "section[data-v-126bf24b] {\n  padding: 10px 10px;\n}\nsection[data-v-126bf24b] button:disabled {\n  cursor: default;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=style&index=0&id=5952d9ee&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=style&index=0&id=5952d9ee&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".organisation[data-v-5952d9ee] {\n  display: grid;\n  align-items: center;\n}\n.organisation input[data-v-5952d9ee] {\n  grid-area: 1/1;\n  width: 100%;\n  height: 34px;\n  margin: 3px 3px 3px 0;\n  padding: 7px 6px;\n  color: var(--color-main-text);\n  border: 1px solid var(--color-border-dark);\n  border-radius: var(--border-radius);\n  background-color: var(--color-main-background);\n  font-family: var(--font-face);\n  cursor: text;\n}\n.organisation .organisation__actions-container[data-v-5952d9ee] {\n  grid-area: 1/1;\n  justify-self: flex-end;\n  height: 30px;\n  display: flex;\n  gap: 0 2px;\n  margin-right: 5px;\n}\n.organisation .organisation__actions-container .icon-checkmark[data-v-5952d9ee],\n.organisation .organisation__actions-container .icon-error[data-v-5952d9ee] {\n  height: 30px !important;\n  min-height: 30px !important;\n  width: 30px !important;\n  min-width: 30px !important;\n  top: 0;\n  right: 0;\n  float: none;\n}\n.fade-enter[data-v-5952d9ee],\n.fade-leave-to[data-v-5952d9ee] {\n  opacity: 0;\n}\n.fade-enter-active[data-v-5952d9ee] {\n  transition: opacity 200ms ease-out;\n}\n.fade-leave-active[data-v-5952d9ee] {\n  transition: opacity 300ms ease-out;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=style&index=0&id=774a2a72&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=style&index=0&id=774a2a72&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "section[data-v-774a2a72] {\n  padding: 10px 10px;\n}\nsection[data-v-774a2a72] button:disabled {\n  cursor: default;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  scroll-behavior: smooth;\n}\n@media screen and (prefers-reduced-motion: reduce) {\nhtml {\n    scroll-behavior: auto;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=1&id=29aba6ea&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=1&id=29aba6ea&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "a[data-v-29aba6ea] {\n  display: block;\n  height: 44px;\n  width: 290px;\n  line-height: 44px;\n  padding: 0 16px;\n  margin: 14px auto;\n  border-radius: var(--border-radius-pill);\n  opacity: 0.4;\n  background-color: transparent;\n}\na .anchor-icon[data-v-29aba6ea] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: 6px;\n  margin-right: 8px;\n}\na[data-v-29aba6ea]:hover, a[data-v-29aba6ea]:focus, a[data-v-29aba6ea]:active {\n  opacity: 0.8;\n  background-color: rgba(127, 127, 127, 0.25);\n}\na.disabled[data-v-29aba6ea] {\n  pointer-events: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=style&index=0&id=3c8483c2&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=style&index=0&id=3c8483c2&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".preview-card[data-v-3c8483c2] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 290px;\n  height: 116px;\n  margin: 14px auto;\n  border-radius: var(--border-radius-large);\n  background-color: var(--color-main-background);\n  font-weight: bold;\n  box-shadow: 0 2px 9px var(--color-box-shadow);\n}\n.preview-card[data-v-3c8483c2]:hover, .preview-card[data-v-3c8483c2]:focus, .preview-card[data-v-3c8483c2]:active {\n  box-shadow: 0 2px 12px var(--color-box-shadow);\n}\n.preview-card[data-v-3c8483c2]:focus-visible {\n  outline: var(--color-main-text) solid 1px;\n  outline-offset: 3px;\n}\n.preview-card.disabled[data-v-3c8483c2] {\n  filter: grayscale(1);\n  opacity: 0.5;\n  cursor: default;\n  box-shadow: 0 0 3px var(--color-box-shadow);\n}\n.preview-card.disabled *[data-v-3c8483c2], .preview-card.disabled[data-v-3c8483c2] * {\n  cursor: default;\n}\n.preview-card__avatar[data-v-3c8483c2] {\n  position: absolute !important;\n  top: 40px;\n  left: 18px;\n  z-index: 1;\n}\n.preview-card__avatar[data-v-3c8483c2]:not(.avatardiv--unknown) {\n  box-shadow: 0 0 0 3px var(--color-main-background) !important;\n}\n.preview-card__header[data-v-3c8483c2], .preview-card__footer[data-v-3c8483c2] {\n  position: relative;\n  width: auto;\n}\n.preview-card__header span[data-v-3c8483c2], .preview-card__footer span[data-v-3c8483c2] {\n  position: absolute;\n  left: 78px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n}\n@supports (-webkit-line-clamp: 2) {\n.preview-card__header span[data-v-3c8483c2], .preview-card__footer span[data-v-3c8483c2] {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n}\n.preview-card__header[data-v-3c8483c2] {\n  height: 70px;\n  border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;\n}\n.preview-card__header span[data-v-3c8483c2] {\n  bottom: 0;\n  color: var(--color-primary-text);\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0 4px 8px 0;\n}\n.preview-card__footer[data-v-3c8483c2] {\n  height: 46px;\n}\n.preview-card__footer span[data-v-3c8483c2] {\n  top: 0;\n  color: var(--color-text-maxcontrast);\n  font-size: 14px;\n  font-weight: normal;\n  margin: 4px 4px 0 0;\n  line-height: 1.3;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=style&index=0&id=22b97e2f&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=style&index=0&id=22b97e2f&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "section[data-v-22b97e2f] {\n  padding: 10px 10px;\n}\nsection[data-v-22b97e2f] button:disabled {\n  cursor: default;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=style&index=0&id=561c922f&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=style&index=0&id=561c922f&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "section[data-v-561c922f] {\n  padding: 30px;\n}\nsection em[data-v-561c922f] {\n  display: block;\n  margin: 16px 0;\n}\nsection em.disabled[data-v-561c922f] {\n  filter: grayscale(1);\n  opacity: 0.5;\n  cursor: default;\n  pointer-events: none;\n}\nsection em.disabled *[data-v-561c922f], section em.disabled[data-v-561c922f] * {\n  cursor: default;\n  pointer-events: none;\n}\nsection .visibility-dropdowns[data-v-561c922f] {\n  display: grid;\n  gap: 10px 40px;\n}\n@media (min-width: 1200px) {\nsection[data-v-561c922f] {\n    width: 940px;\n}\nsection .visibility-dropdowns[data-v-561c922f] {\n    grid-auto-flow: column;\n}\n}\n@media (max-width: 1200px) {\nsection[data-v-561c922f] {\n    width: 470px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=style&index=0&id=5b020be8&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=style&index=0&id=5b020be8&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".visibility-container[data-v-5b020be8] {\n  display: flex;\n  width: max-content;\n}\n.visibility-container.disabled[data-v-5b020be8] {\n  filter: grayscale(1);\n  opacity: 0.5;\n  cursor: default;\n  pointer-events: none;\n}\n.visibility-container.disabled *[data-v-5b020be8], .visibility-container.disabled[data-v-5b020be8] * {\n  cursor: default;\n  pointer-events: none;\n}\n.visibility-container label[data-v-5b020be8] {\n  color: var(--color-text-lighter);\n  width: 150px;\n  line-height: 50px;\n}\n.visibility-container__multiselect[data-v-5b020be8] {\n  width: 260px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=style&index=0&id=6181b1b4&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=style&index=0&id=6181b1b4&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".role[data-v-6181b1b4] {\n  display: grid;\n  align-items: center;\n}\n.role input[data-v-6181b1b4] {\n  grid-area: 1/1;\n  width: 100%;\n  height: 34px;\n  margin: 3px 3px 3px 0;\n  padding: 7px 6px;\n  color: var(--color-main-text);\n  border: 1px solid var(--color-border-dark);\n  border-radius: var(--border-radius);\n  background-color: var(--color-main-background);\n  font-family: var(--font-face);\n  cursor: text;\n}\n.role .role__actions-container[data-v-6181b1b4] {\n  grid-area: 1/1;\n  justify-self: flex-end;\n  height: 30px;\n  display: flex;\n  gap: 0 2px;\n  margin-right: 5px;\n}\n.role .role__actions-container .icon-checkmark[data-v-6181b1b4],\n.role .role__actions-container .icon-error[data-v-6181b1b4] {\n  height: 30px !important;\n  min-height: 30px !important;\n  width: 30px !important;\n  min-width: 30px !important;\n  top: 0;\n  right: 0;\n  float: none;\n}\n.fade-enter[data-v-6181b1b4],\n.fade-leave-to[data-v-6181b1b4] {\n  opacity: 0;\n}\n.fade-enter-active[data-v-6181b1b4] {\n  transition: opacity 200ms ease-out;\n}\n.fade-leave-active[data-v-6181b1b4] {\n  transition: opacity 300ms ease-out;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=style&index=0&id=fea062e2&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=style&index=0&id=fea062e2&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "section[data-v-fea062e2] {\n  padding: 10px 10px;\n}\nsection[data-v-fea062e2] button:disabled {\n  cursor: default;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=style&index=0&id=aa45d34e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=style&index=0&id=aa45d34e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button[data-v-aa45d34e] {\n  height: 44px;\n  padding: 0 16px;\n  border: none;\n  background-color: transparent;\n}\nbutton .icon[data-v-aa45d34e] {\n  margin-right: 8px;\n}\nbutton[data-v-aa45d34e]:enabled {\n  opacity: 0.4 !important;\n}\nbutton:enabled .icon[data-v-aa45d34e] {\n  opacity: 0.8 !important;\n}\nbutton[data-v-aa45d34e]:hover, button[data-v-aa45d34e]:focus, button[data-v-aa45d34e]:active {\n  background-color: rgba(127, 127, 127, 0.15);\n}\nbutton[data-v-aa45d34e]:enabled:hover, button[data-v-aa45d34e]:enabled:focus, button[data-v-aa45d34e]:enabled:active {\n  background-color: rgba(127, 127, 127, 0.25);\n  opacity: 0.8 !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=style&index=0&id=08cbb240&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=style&index=0&id=08cbb240&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".federation-actions[data-v-08cbb240],\n.federation-actions--additional[data-v-08cbb240] {\n  opacity: 0.4 !important;\n}\n.federation-actions[data-v-08cbb240]:hover, .federation-actions[data-v-08cbb240]:focus, .federation-actions[data-v-08cbb240]:active,\n.federation-actions--additional[data-v-08cbb240]:hover,\n.federation-actions--additional[data-v-08cbb240]:focus,\n.federation-actions--additional[data-v-08cbb240]:active {\n  opacity: 0.8 !important;\n}\n.federation-actions--additional[data-v-08cbb240] button {\n  padding-bottom: 7px;\n  height: 30px !important;\n  min-height: 30px !important;\n  width: 30px !important;\n  min-width: 30px !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=style&index=0&id=ba1ab8d4&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=style&index=0&id=ba1ab8d4&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".federation-actions__btn[data-v-ba1ab8d4] p {\n  width: 150px !important;\n  padding: 8px 0 !important;\n  color: var(--color-main-text) !important;\n  font-size: 12.8px !important;\n  line-height: 1.5em !important;\n}\n.federation-actions__btn--active[data-v-ba1ab8d4] {\n  background-color: var(--color-primary-light) !important;\n  box-shadow: inset 2px 0 var(--color-primary) !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=style&index=0&id=6a8a7fec&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=style&index=0&id=6a8a7fec&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h3[data-v-6a8a7fec] {\n  display: inline-flex;\n  width: 100%;\n  margin: 12px 0 0 0;\n  font-size: 16px;\n  color: var(--color-text-light);\n}\nh3.profile-property[data-v-6a8a7fec] {\n  height: 38px;\n}\nh3.setting-property[data-v-6a8a7fec] {\n  height: 32px;\n}\nh3 label[data-v-6a8a7fec] {\n  cursor: pointer;\n}\n.federation-control[data-v-6a8a7fec] {\n  margin: -12px 0 0 8px;\n}\n.add-button[data-v-6a8a7fec] {\n  margin: -12px 0 0 auto !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=style&index=0&id=5428a4f4&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=style&index=0&id=5428a4f4&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Biography_vue_vue_type_style_index_0_id_5428a4f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Biography.vue?vue&type=style&index=0&id=5428a4f4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=style&index=0&id=5428a4f4&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Biography_vue_vue_type_style_index_0_id_5428a4f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Biography_vue_vue_type_style_index_0_id_5428a4f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=style&index=0&id=9b1d47a2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=style&index=0&id=9b1d47a2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BiographySection_vue_vue_type_style_index_0_id_9b1d47a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BiographySection.vue?vue&type=style&index=0&id=9b1d47a2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=style&index=0&id=9b1d47a2&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BiographySection_vue_vue_type_style_index_0_id_9b1d47a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BiographySection_vue_vue_type_style_index_0_id_9b1d47a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=style&index=0&id=2b6172f4&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=style&index=0&id=2b6172f4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayName_vue_vue_type_style_index_0_id_2b6172f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisplayName.vue?vue&type=style&index=0&id=2b6172f4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=style&index=0&id=2b6172f4&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayName_vue_vue_type_style_index_0_id_2b6172f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayName_vue_vue_type_style_index_0_id_2b6172f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=style&index=0&id=0c7fa32f&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=style&index=0&id=0c7fa32f&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayNameSection_vue_vue_type_style_index_0_id_0c7fa32f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisplayNameSection.vue?vue&type=style&index=0&id=0c7fa32f&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=style&index=0&id=0c7fa32f&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayNameSection_vue_vue_type_style_index_0_id_0c7fa32f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayNameSection_vue_vue_type_style_index_0_id_0c7fa32f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=style&index=0&id=a9c46cb4&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=style&index=0&id=a9c46cb4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_id_a9c46cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Email.vue?vue&type=style&index=0&id=a9c46cb4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=style&index=0&id=a9c46cb4&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_id_a9c46cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_id_a9c46cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=style&index=0&id=c3e547e2&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=style&index=0&id=c3e547e2&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSection_vue_vue_type_style_index_0_id_c3e547e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailSection.vue?vue&type=style&index=0&id=c3e547e2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=style&index=0&id=c3e547e2&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSection_vue_vue_type_style_index_0_id_c3e547e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSection_vue_vue_type_style_index_0_id_c3e547e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=style&index=0&id=9418803c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=style&index=0&id=9418803c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_id_9418803c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Headline.vue?vue&type=style&index=0&id=9418803c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=style&index=0&id=9418803c&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_id_9418803c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_id_9418803c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=style&index=0&id=637d2a53&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=style&index=0&id=637d2a53&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlineSection_vue_vue_type_style_index_0_id_637d2a53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeadlineSection.vue?vue&type=style&index=0&id=637d2a53&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=style&index=0&id=637d2a53&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlineSection_vue_vue_type_style_index_0_id_637d2a53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlineSection_vue_vue_type_style_index_0_id_637d2a53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=style&index=0&id=0e2d022c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=style&index=0&id=0e2d022c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_style_index_0_id_0e2d022c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Language.vue?vue&type=style&index=0&id=0e2d022c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=style&index=0&id=0e2d022c&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_style_index_0_id_0e2d022c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_style_index_0_id_0e2d022c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=style&index=0&id=126bf24b&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=style&index=0&id=126bf24b&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSection_vue_vue_type_style_index_0_id_126bf24b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSection.vue?vue&type=style&index=0&id=126bf24b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=style&index=0&id=126bf24b&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSection_vue_vue_type_style_index_0_id_126bf24b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSection_vue_vue_type_style_index_0_id_126bf24b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=style&index=0&id=5952d9ee&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=style&index=0&id=5952d9ee&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Organisation_vue_vue_type_style_index_0_id_5952d9ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Organisation.vue?vue&type=style&index=0&id=5952d9ee&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=style&index=0&id=5952d9ee&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Organisation_vue_vue_type_style_index_0_id_5952d9ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Organisation_vue_vue_type_style_index_0_id_5952d9ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=style&index=0&id=774a2a72&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=style&index=0&id=774a2a72&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganisationSection_vue_vue_type_style_index_0_id_774a2a72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrganisationSection.vue?vue&type=style&index=0&id=774a2a72&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=style&index=0&id=774a2a72&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganisationSection_vue_vue_type_style_index_0_id_774a2a72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganisationSection_vue_vue_type_style_index_0_id_774a2a72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileAnchorLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProfileAnchorLink.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileAnchorLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileAnchorLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=1&id=29aba6ea&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=1&id=29aba6ea&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileAnchorLink_vue_vue_type_style_index_1_id_29aba6ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProfileAnchorLink.vue?vue&type=style&index=1&id=29aba6ea&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=1&id=29aba6ea&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileAnchorLink_vue_vue_type_style_index_1_id_29aba6ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileAnchorLink_vue_vue_type_style_index_1_id_29aba6ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=style&index=0&id=3c8483c2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=style&index=0&id=3c8483c2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePreviewCard_vue_vue_type_style_index_0_id_3c8483c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfilePreviewCard.vue?vue&type=style&index=0&id=3c8483c2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=style&index=0&id=3c8483c2&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePreviewCard_vue_vue_type_style_index_0_id_3c8483c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePreviewCard_vue_vue_type_style_index_0_id_3c8483c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=style&index=0&id=22b97e2f&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=style&index=0&id=22b97e2f&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_style_index_0_id_22b97e2f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileSection.vue?vue&type=style&index=0&id=22b97e2f&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=style&index=0&id=22b97e2f&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_style_index_0_id_22b97e2f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_style_index_0_id_22b97e2f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=style&index=0&id=561c922f&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=style&index=0&id=561c922f&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileVisibilitySection_vue_vue_type_style_index_0_id_561c922f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileVisibilitySection.vue?vue&type=style&index=0&id=561c922f&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=style&index=0&id=561c922f&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileVisibilitySection_vue_vue_type_style_index_0_id_561c922f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileVisibilitySection_vue_vue_type_style_index_0_id_561c922f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=style&index=0&id=5b020be8&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=style&index=0&id=5b020be8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VisibilityDropdown_vue_vue_type_style_index_0_id_5b020be8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisibilityDropdown.vue?vue&type=style&index=0&id=5b020be8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=style&index=0&id=5b020be8&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VisibilityDropdown_vue_vue_type_style_index_0_id_5b020be8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VisibilityDropdown_vue_vue_type_style_index_0_id_5b020be8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=style&index=0&id=6181b1b4&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=style&index=0&id=6181b1b4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_style_index_0_id_6181b1b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Role.vue?vue&type=style&index=0&id=6181b1b4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=style&index=0&id=6181b1b4&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_style_index_0_id_6181b1b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_style_index_0_id_6181b1b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=style&index=0&id=fea062e2&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=style&index=0&id=fea062e2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleSection_vue_vue_type_style_index_0_id_fea062e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RoleSection.vue?vue&type=style&index=0&id=fea062e2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=style&index=0&id=fea062e2&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleSection_vue_vue_type_style_index_0_id_fea062e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleSection_vue_vue_type_style_index_0_id_fea062e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=style&index=0&id=aa45d34e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=style&index=0&id=aa45d34e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_style_index_0_id_aa45d34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddButton.vue?vue&type=style&index=0&id=aa45d34e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=style&index=0&id=aa45d34e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_style_index_0_id_aa45d34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_style_index_0_id_aa45d34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=style&index=0&id=08cbb240&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=style&index=0&id=08cbb240&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControl_vue_vue_type_style_index_0_id_08cbb240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FederationControl.vue?vue&type=style&index=0&id=08cbb240&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=style&index=0&id=08cbb240&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControl_vue_vue_type_style_index_0_id_08cbb240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControl_vue_vue_type_style_index_0_id_08cbb240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=style&index=0&id=ba1ab8d4&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=style&index=0&id=ba1ab8d4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControlAction_vue_vue_type_style_index_0_id_ba1ab8d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FederationControlAction.vue?vue&type=style&index=0&id=ba1ab8d4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=style&index=0&id=ba1ab8d4&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControlAction_vue_vue_type_style_index_0_id_ba1ab8d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControlAction_vue_vue_type_style_index_0_id_ba1ab8d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=style&index=0&id=6a8a7fec&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=style&index=0&id=6a8a7fec&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_id_6a8a7fec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderBar.vue?vue&type=style&index=0&id=6a8a7fec&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=style&index=0&id=6a8a7fec&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_id_6a8a7fec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_id_6a8a7fec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue":
/*!**********************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Biography_vue_vue_type_template_id_5428a4f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Biography.vue?vue&type=template&id=5428a4f4&scoped=true& */ "./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=template&id=5428a4f4&scoped=true&");
/* harmony import */ var _Biography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Biography.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=script&lang=js&");
/* harmony import */ var _Biography_vue_vue_type_style_index_0_id_5428a4f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Biography.vue?vue&type=style&index=0&id=5428a4f4&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=style&index=0&id=5428a4f4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Biography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Biography_vue_vue_type_template_id_5428a4f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Biography_vue_vue_type_template_id_5428a4f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5428a4f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue":
/*!*****************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BiographySection_vue_vue_type_template_id_9b1d47a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BiographySection.vue?vue&type=template&id=9b1d47a2&scoped=true& */ "./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=template&id=9b1d47a2&scoped=true&");
/* harmony import */ var _BiographySection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BiographySection.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=script&lang=js&");
/* harmony import */ var _BiographySection_vue_vue_type_style_index_0_id_9b1d47a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BiographySection.vue?vue&type=style&index=0&id=9b1d47a2&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=style&index=0&id=9b1d47a2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BiographySection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BiographySection_vue_vue_type_template_id_9b1d47a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BiographySection_vue_vue_type_template_id_9b1d47a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9b1d47a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue":
/*!**************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayName_vue_vue_type_template_id_2b6172f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayName.vue?vue&type=template&id=2b6172f4&scoped=true& */ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=template&id=2b6172f4&scoped=true&");
/* harmony import */ var _DisplayName_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayName.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=script&lang=js&");
/* harmony import */ var _DisplayName_vue_vue_type_style_index_0_id_2b6172f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayName.vue?vue&type=style&index=0&id=2b6172f4&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=style&index=0&id=2b6172f4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DisplayName_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DisplayName_vue_vue_type_template_id_2b6172f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DisplayName_vue_vue_type_template_id_2b6172f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2b6172f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue":
/*!*********************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayNameSection_vue_vue_type_template_id_0c7fa32f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayNameSection.vue?vue&type=template&id=0c7fa32f&scoped=true& */ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=template&id=0c7fa32f&scoped=true&");
/* harmony import */ var _DisplayNameSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayNameSection.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=script&lang=js&");
/* harmony import */ var _DisplayNameSection_vue_vue_type_style_index_0_id_0c7fa32f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayNameSection.vue?vue&type=style&index=0&id=0c7fa32f&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=style&index=0&id=0c7fa32f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DisplayNameSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DisplayNameSection_vue_vue_type_template_id_0c7fa32f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DisplayNameSection_vue_vue_type_template_id_0c7fa32f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0c7fa32f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue":
/*!**************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Email_vue_vue_type_template_id_a9c46cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Email.vue?vue&type=template&id=a9c46cb4&scoped=true& */ "./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=template&id=a9c46cb4&scoped=true&");
/* harmony import */ var _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Email.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=script&lang=js&");
/* harmony import */ var _Email_vue_vue_type_style_index_0_id_a9c46cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Email.vue?vue&type=style&index=0&id=a9c46cb4&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=style&index=0&id=a9c46cb4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Email_vue_vue_type_template_id_a9c46cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Email_vue_vue_type_template_id_a9c46cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a9c46cb4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/EmailSection/Email.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue":
/*!*********************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmailSection_vue_vue_type_template_id_c3e547e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailSection.vue?vue&type=template&id=c3e547e2&scoped=true& */ "./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=template&id=c3e547e2&scoped=true&");
/* harmony import */ var _EmailSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailSection.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=script&lang=js&");
/* harmony import */ var _EmailSection_vue_vue_type_style_index_0_id_c3e547e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailSection.vue?vue&type=style&index=0&id=c3e547e2&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=style&index=0&id=c3e547e2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmailSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailSection_vue_vue_type_template_id_c3e547e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmailSection_vue_vue_type_template_id_c3e547e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c3e547e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue":
/*!********************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Headline_vue_vue_type_template_id_9418803c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Headline.vue?vue&type=template&id=9418803c&scoped=true& */ "./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=template&id=9418803c&scoped=true&");
/* harmony import */ var _Headline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Headline.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=script&lang=js&");
/* harmony import */ var _Headline_vue_vue_type_style_index_0_id_9418803c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Headline.vue?vue&type=style&index=0&id=9418803c&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=style&index=0&id=9418803c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Headline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Headline_vue_vue_type_template_id_9418803c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Headline_vue_vue_type_template_id_9418803c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9418803c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue":
/*!***************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeadlineSection_vue_vue_type_template_id_637d2a53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeadlineSection.vue?vue&type=template&id=637d2a53&scoped=true& */ "./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=template&id=637d2a53&scoped=true&");
/* harmony import */ var _HeadlineSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeadlineSection.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=script&lang=js&");
/* harmony import */ var _HeadlineSection_vue_vue_type_style_index_0_id_637d2a53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadlineSection.vue?vue&type=style&index=0&id=637d2a53&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=style&index=0&id=637d2a53&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HeadlineSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeadlineSection_vue_vue_type_template_id_637d2a53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _HeadlineSection_vue_vue_type_template_id_637d2a53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "637d2a53",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue":
/*!********************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Language_vue_vue_type_template_id_0e2d022c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Language.vue?vue&type=template&id=0e2d022c&scoped=true& */ "./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=template&id=0e2d022c&scoped=true&");
/* harmony import */ var _Language_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Language.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=script&lang=js&");
/* harmony import */ var _Language_vue_vue_type_style_index_0_id_0e2d022c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Language.vue?vue&type=style&index=0&id=0e2d022c&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=style&index=0&id=0e2d022c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Language_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Language_vue_vue_type_template_id_0e2d022c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Language_vue_vue_type_template_id_0e2d022c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0e2d022c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue":
/*!***************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LanguageSection_vue_vue_type_template_id_126bf24b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LanguageSection.vue?vue&type=template&id=126bf24b&scoped=true& */ "./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=template&id=126bf24b&scoped=true&");
/* harmony import */ var _LanguageSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguageSection.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=script&lang=js&");
/* harmony import */ var _LanguageSection_vue_vue_type_style_index_0_id_126bf24b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LanguageSection.vue?vue&type=style&index=0&id=126bf24b&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=style&index=0&id=126bf24b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LanguageSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LanguageSection_vue_vue_type_template_id_126bf24b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _LanguageSection_vue_vue_type_template_id_126bf24b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "126bf24b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue":
/*!****************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Organisation_vue_vue_type_template_id_5952d9ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Organisation.vue?vue&type=template&id=5952d9ee&scoped=true& */ "./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=template&id=5952d9ee&scoped=true&");
/* harmony import */ var _Organisation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Organisation.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=script&lang=js&");
/* harmony import */ var _Organisation_vue_vue_type_style_index_0_id_5952d9ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Organisation.vue?vue&type=style&index=0&id=5952d9ee&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=style&index=0&id=5952d9ee&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Organisation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Organisation_vue_vue_type_template_id_5952d9ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Organisation_vue_vue_type_template_id_5952d9ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5952d9ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue":
/*!***********************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrganisationSection_vue_vue_type_template_id_774a2a72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrganisationSection.vue?vue&type=template&id=774a2a72&scoped=true& */ "./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=template&id=774a2a72&scoped=true&");
/* harmony import */ var _OrganisationSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrganisationSection.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=script&lang=js&");
/* harmony import */ var _OrganisationSection_vue_vue_type_style_index_0_id_774a2a72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrganisationSection.vue?vue&type=style&index=0&id=774a2a72&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=style&index=0&id=774a2a72&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OrganisationSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrganisationSection_vue_vue_type_template_id_774a2a72_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _OrganisationSection_vue_vue_type_template_id_774a2a72_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "774a2a72",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue":
/*!********************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditProfileAnchorLink_vue_vue_type_template_id_29aba6ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProfileAnchorLink.vue?vue&type=template&id=29aba6ea&scoped=true& */ "./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=template&id=29aba6ea&scoped=true&");
/* harmony import */ var _EditProfileAnchorLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProfileAnchorLink.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _EditProfileAnchorLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditProfileAnchorLink.vue?vue&type=style&index=0&lang=scss& */ "./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _EditProfileAnchorLink_vue_vue_type_style_index_1_id_29aba6ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditProfileAnchorLink.vue?vue&type=style&index=1&id=29aba6ea&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=1&id=29aba6ea&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _EditProfileAnchorLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProfileAnchorLink_vue_vue_type_template_id_29aba6ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditProfileAnchorLink_vue_vue_type_template_id_29aba6ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "29aba6ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue":
/*!**************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileCheckbox_vue_vue_type_template_id_a46c582e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileCheckbox.vue?vue&type=template&id=a46c582e&scoped=true& */ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue?vue&type=template&id=a46c582e&scoped=true&");
/* harmony import */ var _ProfileCheckbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileCheckbox.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileCheckbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileCheckbox_vue_vue_type_template_id_a46c582e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileCheckbox_vue_vue_type_template_id_a46c582e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a46c582e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue":
/*!*****************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfilePreviewCard_vue_vue_type_template_id_3c8483c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfilePreviewCard.vue?vue&type=template&id=3c8483c2&scoped=true& */ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=template&id=3c8483c2&scoped=true&");
/* harmony import */ var _ProfilePreviewCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePreviewCard.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _ProfilePreviewCard_vue_vue_type_style_index_0_id_3c8483c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfilePreviewCard.vue?vue&type=style&index=0&id=3c8483c2&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=style&index=0&id=3c8483c2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProfilePreviewCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfilePreviewCard_vue_vue_type_template_id_3c8483c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfilePreviewCard_vue_vue_type_template_id_3c8483c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3c8483c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue":
/*!*************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileSection_vue_vue_type_template_id_22b97e2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileSection.vue?vue&type=template&id=22b97e2f&scoped=true& */ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=template&id=22b97e2f&scoped=true&");
/* harmony import */ var _ProfileSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileSection.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=script&lang=js&");
/* harmony import */ var _ProfileSection_vue_vue_type_style_index_0_id_22b97e2f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileSection.vue?vue&type=style&index=0&id=22b97e2f&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=style&index=0&id=22b97e2f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProfileSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileSection_vue_vue_type_template_id_22b97e2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileSection_vue_vue_type_template_id_22b97e2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "22b97e2f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue":
/*!*********************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileVisibilitySection_vue_vue_type_template_id_561c922f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileVisibilitySection.vue?vue&type=template&id=561c922f&scoped=true& */ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=template&id=561c922f&scoped=true&");
/* harmony import */ var _ProfileVisibilitySection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileVisibilitySection.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=script&lang=js&");
/* harmony import */ var _ProfileVisibilitySection_vue_vue_type_style_index_0_id_561c922f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileVisibilitySection.vue?vue&type=style&index=0&id=561c922f&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=style&index=0&id=561c922f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProfileVisibilitySection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileVisibilitySection_vue_vue_type_template_id_561c922f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileVisibilitySection_vue_vue_type_template_id_561c922f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "561c922f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue":
/*!***************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VisibilityDropdown_vue_vue_type_template_id_5b020be8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisibilityDropdown.vue?vue&type=template&id=5b020be8&scoped=true& */ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=template&id=5b020be8&scoped=true&");
/* harmony import */ var _VisibilityDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisibilityDropdown.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=script&lang=js&");
/* harmony import */ var _VisibilityDropdown_vue_vue_type_style_index_0_id_5b020be8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VisibilityDropdown.vue?vue&type=style&index=0&id=5b020be8&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=style&index=0&id=5b020be8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VisibilityDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VisibilityDropdown_vue_vue_type_template_id_5b020be8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _VisibilityDropdown_vue_vue_type_template_id_5b020be8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5b020be8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue":
/*!************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Role_vue_vue_type_template_id_6181b1b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Role.vue?vue&type=template&id=6181b1b4&scoped=true& */ "./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=template&id=6181b1b4&scoped=true&");
/* harmony import */ var _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Role.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=script&lang=js&");
/* harmony import */ var _Role_vue_vue_type_style_index_0_id_6181b1b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Role.vue?vue&type=style&index=0&id=6181b1b4&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=style&index=0&id=6181b1b4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Role_vue_vue_type_template_id_6181b1b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Role_vue_vue_type_template_id_6181b1b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6181b1b4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/RoleSection/Role.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue":
/*!*******************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RoleSection_vue_vue_type_template_id_fea062e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleSection.vue?vue&type=template&id=fea062e2&scoped=true& */ "./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=template&id=fea062e2&scoped=true&");
/* harmony import */ var _RoleSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleSection.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=script&lang=js&");
/* harmony import */ var _RoleSection_vue_vue_type_style_index_0_id_fea062e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoleSection.vue?vue&type=style&index=0&id=fea062e2&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=style&index=0&id=fea062e2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RoleSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoleSection_vue_vue_type_template_id_fea062e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RoleSection_vue_vue_type_template_id_fea062e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fea062e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/AddButton.vue":
/*!************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/AddButton.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddButton_vue_vue_type_template_id_aa45d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddButton.vue?vue&type=template&id=aa45d34e&scoped=true& */ "./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=template&id=aa45d34e&scoped=true&");
/* harmony import */ var _AddButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddButton.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddButton_vue_vue_type_style_index_0_id_aa45d34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddButton.vue?vue&type=style&index=0&id=aa45d34e&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=style&index=0&id=aa45d34e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddButton_vue_vue_type_template_id_aa45d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddButton_vue_vue_type_template_id_aa45d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "aa45d34e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/shared/AddButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue":
/*!********************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FederationControl_vue_vue_type_template_id_08cbb240_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FederationControl.vue?vue&type=template&id=08cbb240&scoped=true& */ "./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=template&id=08cbb240&scoped=true&");
/* harmony import */ var _FederationControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FederationControl.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=script&lang=js&");
/* harmony import */ var _FederationControl_vue_vue_type_style_index_0_id_08cbb240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FederationControl.vue?vue&type=style&index=0&id=08cbb240&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=style&index=0&id=08cbb240&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FederationControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FederationControl_vue_vue_type_template_id_08cbb240_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FederationControl_vue_vue_type_template_id_08cbb240_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "08cbb240",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/shared/FederationControl.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue":
/*!**************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FederationControlAction_vue_vue_type_template_id_ba1ab8d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FederationControlAction.vue?vue&type=template&id=ba1ab8d4&scoped=true& */ "./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=template&id=ba1ab8d4&scoped=true&");
/* harmony import */ var _FederationControlAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FederationControlAction.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=script&lang=js&");
/* harmony import */ var _FederationControlAction_vue_vue_type_style_index_0_id_ba1ab8d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FederationControlAction.vue?vue&type=style&index=0&id=ba1ab8d4&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=style&index=0&id=ba1ab8d4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FederationControlAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FederationControlAction_vue_vue_type_template_id_ba1ab8d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FederationControlAction_vue_vue_type_template_id_ba1ab8d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ba1ab8d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue":
/*!************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderBar_vue_vue_type_template_id_6a8a7fec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderBar.vue?vue&type=template&id=6a8a7fec&scoped=true& */ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=template&id=6a8a7fec&scoped=true&");
/* harmony import */ var _HeaderBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderBar.vue?vue&type=script&lang=js& */ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _HeaderBar_vue_vue_type_style_index_0_id_6a8a7fec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderBar.vue?vue&type=style&index=0&id=6a8a7fec&lang=scss&scoped=true& */ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=style&index=0&id=6a8a7fec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HeaderBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderBar_vue_vue_type_template_id_6a8a7fec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _HeaderBar_vue_vue_type_template_id_6a8a7fec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6a8a7fec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Biography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Biography.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Biography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BiographySection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BiographySection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BiographySection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayName_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisplayName.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayName_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayNameSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisplayNameSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayNameSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Email.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Headline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlineSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeadlineSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlineSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Language.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Organisation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Organisation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Organisation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganisationSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrganisationSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganisationSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileAnchorLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProfileAnchorLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileAnchorLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCheckbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileCheckbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCheckbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePreviewCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfilePreviewCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePreviewCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileVisibilitySection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileVisibilitySection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileVisibilitySection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VisibilityDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisibilityDropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VisibilityDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Role.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RoleSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FederationControl.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControlAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FederationControlAction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControlAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=style&index=0&id=5428a4f4&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=style&index=0&id=5428a4f4&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Biography_vue_vue_type_style_index_0_id_5428a4f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Biography.vue?vue&type=style&index=0&id=5428a4f4&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=style&index=0&id=5428a4f4&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=style&index=0&id=9b1d47a2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=style&index=0&id=9b1d47a2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BiographySection_vue_vue_type_style_index_0_id_9b1d47a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BiographySection.vue?vue&type=style&index=0&id=9b1d47a2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=style&index=0&id=9b1d47a2&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=style&index=0&id=2b6172f4&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=style&index=0&id=2b6172f4&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayName_vue_vue_type_style_index_0_id_2b6172f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisplayName.vue?vue&type=style&index=0&id=2b6172f4&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=style&index=0&id=2b6172f4&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=style&index=0&id=0c7fa32f&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=style&index=0&id=0c7fa32f&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayNameSection_vue_vue_type_style_index_0_id_0c7fa32f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisplayNameSection.vue?vue&type=style&index=0&id=0c7fa32f&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=style&index=0&id=0c7fa32f&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=style&index=0&id=a9c46cb4&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=style&index=0&id=a9c46cb4&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_id_a9c46cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Email.vue?vue&type=style&index=0&id=a9c46cb4&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=style&index=0&id=a9c46cb4&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=style&index=0&id=c3e547e2&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=style&index=0&id=c3e547e2&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSection_vue_vue_type_style_index_0_id_c3e547e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailSection.vue?vue&type=style&index=0&id=c3e547e2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=style&index=0&id=c3e547e2&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=style&index=0&id=9418803c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=style&index=0&id=9418803c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_id_9418803c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Headline.vue?vue&type=style&index=0&id=9418803c&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=style&index=0&id=9418803c&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=style&index=0&id=637d2a53&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=style&index=0&id=637d2a53&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlineSection_vue_vue_type_style_index_0_id_637d2a53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeadlineSection.vue?vue&type=style&index=0&id=637d2a53&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=style&index=0&id=637d2a53&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=style&index=0&id=0e2d022c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=style&index=0&id=0e2d022c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_style_index_0_id_0e2d022c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Language.vue?vue&type=style&index=0&id=0e2d022c&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=style&index=0&id=0e2d022c&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=style&index=0&id=126bf24b&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=style&index=0&id=126bf24b&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSection_vue_vue_type_style_index_0_id_126bf24b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSection.vue?vue&type=style&index=0&id=126bf24b&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=style&index=0&id=126bf24b&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=style&index=0&id=5952d9ee&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=style&index=0&id=5952d9ee&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Organisation_vue_vue_type_style_index_0_id_5952d9ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Organisation.vue?vue&type=style&index=0&id=5952d9ee&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=style&index=0&id=5952d9ee&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=style&index=0&id=774a2a72&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=style&index=0&id=774a2a72&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganisationSection_vue_vue_type_style_index_0_id_774a2a72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrganisationSection.vue?vue&type=style&index=0&id=774a2a72&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=style&index=0&id=774a2a72&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileAnchorLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProfileAnchorLink.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=1&id=29aba6ea&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=1&id=29aba6ea&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileAnchorLink_vue_vue_type_style_index_1_id_29aba6ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProfileAnchorLink.vue?vue&type=style&index=1&id=29aba6ea&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=style&index=1&id=29aba6ea&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=style&index=0&id=3c8483c2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=style&index=0&id=3c8483c2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePreviewCard_vue_vue_type_style_index_0_id_3c8483c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfilePreviewCard.vue?vue&type=style&index=0&id=3c8483c2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=style&index=0&id=3c8483c2&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=style&index=0&id=22b97e2f&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=style&index=0&id=22b97e2f&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_style_index_0_id_22b97e2f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileSection.vue?vue&type=style&index=0&id=22b97e2f&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=style&index=0&id=22b97e2f&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=style&index=0&id=561c922f&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=style&index=0&id=561c922f&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileVisibilitySection_vue_vue_type_style_index_0_id_561c922f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileVisibilitySection.vue?vue&type=style&index=0&id=561c922f&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=style&index=0&id=561c922f&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=style&index=0&id=5b020be8&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=style&index=0&id=5b020be8&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VisibilityDropdown_vue_vue_type_style_index_0_id_5b020be8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisibilityDropdown.vue?vue&type=style&index=0&id=5b020be8&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=style&index=0&id=5b020be8&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=style&index=0&id=6181b1b4&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=style&index=0&id=6181b1b4&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_style_index_0_id_6181b1b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Role.vue?vue&type=style&index=0&id=6181b1b4&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=style&index=0&id=6181b1b4&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=style&index=0&id=fea062e2&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=style&index=0&id=fea062e2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleSection_vue_vue_type_style_index_0_id_fea062e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RoleSection.vue?vue&type=style&index=0&id=fea062e2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=style&index=0&id=fea062e2&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=style&index=0&id=aa45d34e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=style&index=0&id=aa45d34e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_style_index_0_id_aa45d34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddButton.vue?vue&type=style&index=0&id=aa45d34e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=style&index=0&id=aa45d34e&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=style&index=0&id=08cbb240&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=style&index=0&id=08cbb240&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControl_vue_vue_type_style_index_0_id_08cbb240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FederationControl.vue?vue&type=style&index=0&id=08cbb240&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=style&index=0&id=08cbb240&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=style&index=0&id=ba1ab8d4&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=style&index=0&id=ba1ab8d4&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControlAction_vue_vue_type_style_index_0_id_ba1ab8d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FederationControlAction.vue?vue&type=style&index=0&id=ba1ab8d4&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=style&index=0&id=ba1ab8d4&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=style&index=0&id=6a8a7fec&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=style&index=0&id=6a8a7fec&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_id_6a8a7fec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderBar.vue?vue&type=style&index=0&id=6a8a7fec&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=style&index=0&id=6a8a7fec&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=template&id=5428a4f4&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=template&id=5428a4f4&scoped=true& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Biography_vue_vue_type_template_id_5428a4f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Biography_vue_vue_type_template_id_5428a4f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Biography_vue_vue_type_template_id_5428a4f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Biography.vue?vue&type=template&id=5428a4f4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=template&id=5428a4f4&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=template&id=9b1d47a2&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=template&id=9b1d47a2&scoped=true& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BiographySection_vue_vue_type_template_id_9b1d47a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BiographySection_vue_vue_type_template_id_9b1d47a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BiographySection_vue_vue_type_template_id_9b1d47a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BiographySection.vue?vue&type=template&id=9b1d47a2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=template&id=9b1d47a2&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=template&id=2b6172f4&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=template&id=2b6172f4&scoped=true& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayName_vue_vue_type_template_id_2b6172f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayName_vue_vue_type_template_id_2b6172f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayName_vue_vue_type_template_id_2b6172f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisplayName.vue?vue&type=template&id=2b6172f4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=template&id=2b6172f4&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=template&id=0c7fa32f&scoped=true&":
/*!****************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=template&id=0c7fa32f&scoped=true& ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayNameSection_vue_vue_type_template_id_0c7fa32f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayNameSection_vue_vue_type_template_id_0c7fa32f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayNameSection_vue_vue_type_template_id_0c7fa32f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisplayNameSection.vue?vue&type=template&id=0c7fa32f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=template&id=0c7fa32f&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=template&id=a9c46cb4&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=template&id=a9c46cb4&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_a9c46cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_a9c46cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_a9c46cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Email.vue?vue&type=template&id=a9c46cb4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=template&id=a9c46cb4&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=template&id=c3e547e2&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=template&id=c3e547e2&scoped=true& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSection_vue_vue_type_template_id_c3e547e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSection_vue_vue_type_template_id_c3e547e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSection_vue_vue_type_template_id_c3e547e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailSection.vue?vue&type=template&id=c3e547e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=template&id=c3e547e2&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=template&id=9418803c&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=template&id=9418803c&scoped=true& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_template_id_9418803c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_template_id_9418803c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_template_id_9418803c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Headline.vue?vue&type=template&id=9418803c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=template&id=9418803c&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=template&id=637d2a53&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=template&id=637d2a53&scoped=true& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlineSection_vue_vue_type_template_id_637d2a53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlineSection_vue_vue_type_template_id_637d2a53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlineSection_vue_vue_type_template_id_637d2a53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeadlineSection.vue?vue&type=template&id=637d2a53&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=template&id=637d2a53&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=template&id=0e2d022c&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=template&id=0e2d022c&scoped=true& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_template_id_0e2d022c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_template_id_0e2d022c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_template_id_0e2d022c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Language.vue?vue&type=template&id=0e2d022c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=template&id=0e2d022c&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=template&id=126bf24b&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=template&id=126bf24b&scoped=true& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSection_vue_vue_type_template_id_126bf24b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSection_vue_vue_type_template_id_126bf24b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSection_vue_vue_type_template_id_126bf24b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSection.vue?vue&type=template&id=126bf24b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=template&id=126bf24b&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=template&id=5952d9ee&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=template&id=5952d9ee&scoped=true& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Organisation_vue_vue_type_template_id_5952d9ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Organisation_vue_vue_type_template_id_5952d9ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Organisation_vue_vue_type_template_id_5952d9ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Organisation.vue?vue&type=template&id=5952d9ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=template&id=5952d9ee&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=template&id=774a2a72&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=template&id=774a2a72&scoped=true& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganisationSection_vue_vue_type_template_id_774a2a72_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganisationSection_vue_vue_type_template_id_774a2a72_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrganisationSection_vue_vue_type_template_id_774a2a72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrganisationSection.vue?vue&type=template&id=774a2a72&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=template&id=774a2a72&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=template&id=29aba6ea&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=template&id=29aba6ea&scoped=true& ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileAnchorLink_vue_vue_type_template_id_29aba6ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileAnchorLink_vue_vue_type_template_id_29aba6ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileAnchorLink_vue_vue_type_template_id_29aba6ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProfileAnchorLink.vue?vue&type=template&id=29aba6ea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=template&id=29aba6ea&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue?vue&type=template&id=a46c582e&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue?vue&type=template&id=a46c582e&scoped=true& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCheckbox_vue_vue_type_template_id_a46c582e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCheckbox_vue_vue_type_template_id_a46c582e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCheckbox_vue_vue_type_template_id_a46c582e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileCheckbox.vue?vue&type=template&id=a46c582e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue?vue&type=template&id=a46c582e&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=template&id=3c8483c2&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=template&id=3c8483c2&scoped=true& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePreviewCard_vue_vue_type_template_id_3c8483c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePreviewCard_vue_vue_type_template_id_3c8483c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePreviewCard_vue_vue_type_template_id_3c8483c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfilePreviewCard.vue?vue&type=template&id=3c8483c2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=template&id=3c8483c2&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=template&id=22b97e2f&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=template&id=22b97e2f&scoped=true& ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_template_id_22b97e2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_template_id_22b97e2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_template_id_22b97e2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileSection.vue?vue&type=template&id=22b97e2f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=template&id=22b97e2f&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=template&id=561c922f&scoped=true&":
/*!****************************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=template&id=561c922f&scoped=true& ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileVisibilitySection_vue_vue_type_template_id_561c922f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileVisibilitySection_vue_vue_type_template_id_561c922f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileVisibilitySection_vue_vue_type_template_id_561c922f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileVisibilitySection.vue?vue&type=template&id=561c922f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=template&id=561c922f&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=template&id=5b020be8&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=template&id=5b020be8&scoped=true& ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisibilityDropdown_vue_vue_type_template_id_5b020be8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisibilityDropdown_vue_vue_type_template_id_5b020be8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisibilityDropdown_vue_vue_type_template_id_5b020be8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisibilityDropdown.vue?vue&type=template&id=5b020be8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=template&id=5b020be8&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=template&id=6181b1b4&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=template&id=6181b1b4&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_6181b1b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_6181b1b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_6181b1b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Role.vue?vue&type=template&id=6181b1b4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=template&id=6181b1b4&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=template&id=fea062e2&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=template&id=fea062e2&scoped=true& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleSection_vue_vue_type_template_id_fea062e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleSection_vue_vue_type_template_id_fea062e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleSection_vue_vue_type_template_id_fea062e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RoleSection.vue?vue&type=template&id=fea062e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=template&id=fea062e2&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=template&id=aa45d34e&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=template&id=aa45d34e&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_template_id_aa45d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_template_id_aa45d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddButton_vue_vue_type_template_id_aa45d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddButton.vue?vue&type=template&id=aa45d34e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=template&id=aa45d34e&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=template&id=08cbb240&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=template&id=08cbb240&scoped=true& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControl_vue_vue_type_template_id_08cbb240_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControl_vue_vue_type_template_id_08cbb240_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControl_vue_vue_type_template_id_08cbb240_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FederationControl.vue?vue&type=template&id=08cbb240&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=template&id=08cbb240&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=template&id=ba1ab8d4&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=template&id=ba1ab8d4&scoped=true& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControlAction_vue_vue_type_template_id_ba1ab8d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControlAction_vue_vue_type_template_id_ba1ab8d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FederationControlAction_vue_vue_type_template_id_ba1ab8d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FederationControlAction.vue?vue&type=template&id=ba1ab8d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=template&id=ba1ab8d4&scoped=true&");


/***/ }),

/***/ "./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=template&id=6a8a7fec&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=template&id=6a8a7fec&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_template_id_6a8a7fec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_template_id_6a8a7fec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_template_id_6a8a7fec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderBar.vue?vue&type=template&id=6a8a7fec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=template&id=6a8a7fec&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=template&id=5428a4f4&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/Biography.vue?vue&type=template&id=5428a4f4&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "biography" }, [
    _c("textarea", {
      attrs: {
        id: "biography",
        placeholder: _vm.t("settings", "Your biography"),
        rows: "8",
        autocapitalize: "none",
        autocomplete: "off",
        autocorrect: "off"
      },
      domProps: { value: _vm.biography },
      on: { input: _vm.onBiographyChange }
    }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "biography__actions-container" },
      [
        _c("transition", { attrs: { name: "fade" } }, [
          _vm.showCheckmarkIcon
            ? _c("span", { staticClass: "icon-checkmark" })
            : _vm.showErrorIcon
            ? _c("span", { staticClass: "icon-error" })
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=template&id=9b1d47a2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/BiographySection/BiographySection.vue?vue&type=template&id=9b1d47a2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
    "section",
    [
      _c("HeaderBar", {
        attrs: {
          "account-property": _vm.accountProperty,
          "label-for": "biography",
          scope: _vm.primaryBiography.scope
        },
        on: {
          "update:scope": function($event) {
            return _vm.$set(_vm.primaryBiography, "scope", $event)
          }
        }
      }),
      _vm._v(" "),
      _c("Biography", {
        attrs: {
          biography: _vm.primaryBiography.value,
          scope: _vm.primaryBiography.scope
        },
        on: {
          "update:biography": function($event) {
            return _vm.$set(_vm.primaryBiography, "value", $event)
          },
          "update:scope": function($event) {
            return _vm.$set(_vm.primaryBiography, "scope", $event)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=template&id=2b6172f4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayName.vue?vue&type=template&id=2b6172f4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "displayname" }, [
    _c("input", {
      attrs: {
        id: "displayname",
        type: "text",
        placeholder: _vm.t("settings", "Your full name"),
        autocapitalize: "none",
        autocomplete: "on",
        autocorrect: "off"
      },
      domProps: { value: _vm.displayName },
      on: { input: _vm.onDisplayNameChange }
    }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "displayname__actions-container" },
      [
        _c("transition", { attrs: { name: "fade" } }, [
          _vm.showCheckmarkIcon
            ? _c("span", { staticClass: "icon-checkmark" })
            : _vm.showErrorIcon
            ? _c("span", { staticClass: "icon-error" })
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=template&id=0c7fa32f&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/DisplayNameSection/DisplayNameSection.vue?vue&type=template&id=0c7fa32f&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
    "section",
    [
      _c("HeaderBar", {
        attrs: {
          "account-property": _vm.accountProperty,
          "label-for": "displayname",
          "is-editable": _vm.displayNameChangeSupported,
          "is-valid-section": _vm.isValidSection,
          scope: _vm.primaryDisplayName.scope
        },
        on: {
          "update:scope": function($event) {
            return _vm.$set(_vm.primaryDisplayName, "scope", $event)
          }
        }
      }),
      _vm._v(" "),
      _vm.displayNameChangeSupported
        ? [
            _c("DisplayName", {
              attrs: {
                "display-name": _vm.primaryDisplayName.value,
                scope: _vm.primaryDisplayName.scope
              },
              on: {
                "update:displayName": function($event) {
                  return _vm.$set(_vm.primaryDisplayName, "value", $event)
                },
                "update:display-name": function($event) {
                  return _vm.$set(_vm.primaryDisplayName, "value", $event)
                },
                "update:scope": function($event) {
                  return _vm.$set(_vm.primaryDisplayName, "scope", $event)
                }
              }
            })
          ]
        : _c("span", [
            _vm._v(
              "\n\t\t" +
                _vm._s(
                  _vm.primaryDisplayName.value ||
                    _vm.t("settings", "No full name set")
                ) +
                "\n\t"
            )
          ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=template&id=a9c46cb4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue?vue&type=template&id=a9c46cb4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "email" }, [
      _c("input", {
        ref: "email",
        attrs: {
          id: _vm.inputId,
          type: "email",
          placeholder: _vm.inputPlaceholder,
          autocapitalize: "none",
          autocomplete: "on",
          autocorrect: "off"
        },
        domProps: { value: _vm.email },
        on: { input: _vm.onEmailChange }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "email__actions-container" },
        [
          _c("transition", { attrs: { name: "fade" } }, [
            _vm.showCheckmarkIcon
              ? _c("span", { staticClass: "icon-checkmark" })
              : _vm.showErrorIcon
              ? _c("span", { staticClass: "icon-error" })
              : _vm._e()
          ]),
          _vm._v(" "),
          !_vm.primary
            ? [
                _c("FederationControl", {
                  attrs: {
                    "account-property": _vm.accountProperty,
                    additional: true,
                    "additional-value": _vm.email,
                    disabled: _vm.federationDisabled,
                    "handle-additional-scope-change":
                      _vm.saveAdditionalEmailScope,
                    scope: _vm.localScope
                  },
                  on: {
                    "update:scope": [
                      function($event) {
                        _vm.localScope = $event
                      },
                      _vm.onScopeChange
                    ]
                  }
                })
              ]
            : _vm._e(),
          _vm._v(" "),
          _c(
            "Actions",
            {
              staticClass: "email__actions",
              attrs: {
                "aria-label": _vm.t("settings", "Email options"),
                disabled: _vm.deleteDisabled,
                "force-menu": true
              }
            },
            [
              _c(
                "ActionButton",
                {
                  attrs: {
                    "aria-label": _vm.deleteEmailLabel,
                    "close-after-click": true,
                    disabled: _vm.deleteDisabled,
                    icon: "icon-delete"
                  },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.deleteEmail.apply(null, arguments)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n\t\t\t\t\t" + _vm._s(_vm.deleteEmailLabel) + "\n\t\t\t\t"
                  )
                ]
              ),
              _vm._v(" "),
              !_vm.primary || !_vm.isNotificationEmail
                ? _c(
                    "ActionButton",
                    {
                      attrs: {
                        "aria-label": _vm.setNotificationMailLabel,
                        "close-after-click": true,
                        disabled: _vm.setNotificationMailDisabled,
                        icon: "icon-favorite"
                      },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          $event.preventDefault()
                          return _vm.setNotificationMail.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n\t\t\t\t\t" +
                          _vm._s(_vm.setNotificationMailLabel) +
                          "\n\t\t\t\t"
                      )
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        2
      )
    ]),
    _vm._v(" "),
    _vm.isNotificationEmail
      ? _c("em", [
          _vm._v(
            "\n\t\t" +
              _vm._s(
                _vm.t(
                  "settings",
                  "Primary email for password reset and notifications"
                )
              ) +
              "\n\t"
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=template&id=c3e547e2&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue?vue&type=template&id=c3e547e2&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
    "section",
    [
      _c("HeaderBar", {
        attrs: {
          "account-property": _vm.accountProperty,
          "label-for": "email",
          "handle-scope-change": _vm.savePrimaryEmailScope,
          "is-editable": true,
          "is-multi-value-supported": true,
          "is-valid-section": _vm.isValidSection,
          scope: _vm.primaryEmail.scope
        },
        on: {
          "update:scope": function($event) {
            return _vm.$set(_vm.primaryEmail, "scope", $event)
          },
          "add-additional": _vm.onAddAdditionalEmail
        }
      }),
      _vm._v(" "),
      _vm.displayNameChangeSupported
        ? [
            _c("Email", {
              attrs: {
                primary: true,
                scope: _vm.primaryEmail.scope,
                email: _vm.primaryEmail.value,
                "active-notification-email": _vm.notificationEmail
              },
              on: {
                "update:scope": function($event) {
                  return _vm.$set(_vm.primaryEmail, "scope", $event)
                },
                "update:email": [
                  function($event) {
                    return _vm.$set(_vm.primaryEmail, "value", $event)
                  },
                  _vm.onUpdateEmail
                ],
                "update:activeNotificationEmail": function($event) {
                  _vm.notificationEmail = $event
                },
                "update:active-notification-email": function($event) {
                  _vm.notificationEmail = $event
                },
                "update:notification-email": _vm.onUpdateNotificationEmail
              }
            })
          ]
        : _c("span", [
            _vm._v(
              "\n\t\t" +
                _vm._s(
                  _vm.primaryEmail.value ||
                    _vm.t("settings", "No email address set")
                ) +
                "\n\t"
            )
          ]),
      _vm._v(" "),
      _vm.additionalEmails.length
        ? [
            _c("em", { staticClass: "additional-emails-label" }, [
              _vm._v(_vm._s(_vm.t("settings", "Additional emails")))
            ]),
            _vm._v(" "),
            _vm._l(_vm.additionalEmails, function(additionalEmail, index) {
              return _c("Email", {
                key: index,
                attrs: {
                  index: index,
                  scope: additionalEmail.scope,
                  email: additionalEmail.value,
                  "local-verification-state": parseInt(
                    additionalEmail.locallyVerified,
                    10
                  ),
                  "active-notification-email": _vm.notificationEmail
                },
                on: {
                  "update:scope": function($event) {
                    return _vm.$set(additionalEmail, "scope", $event)
                  },
                  "update:email": [
                    function($event) {
                      return _vm.$set(additionalEmail, "value", $event)
                    },
                    _vm.onUpdateEmail
                  ],
                  "update:activeNotificationEmail": function($event) {
                    _vm.notificationEmail = $event
                  },
                  "update:active-notification-email": function($event) {
                    _vm.notificationEmail = $event
                  },
                  "update:notification-email": _vm.onUpdateNotificationEmail,
                  "delete-additional-email": function($event) {
                    return _vm.onDeleteAdditionalEmail(index)
                  }
                }
              })
            })
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=template&id=9418803c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/Headline.vue?vue&type=template&id=9418803c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "headline" }, [
    _c("input", {
      attrs: {
        id: "headline",
        type: "text",
        placeholder: _vm.t("settings", "Your headline"),
        autocapitalize: "none",
        autocomplete: "on",
        autocorrect: "off"
      },
      domProps: { value: _vm.headline },
      on: { input: _vm.onHeadlineChange }
    }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "headline__actions-container" },
      [
        _c("transition", { attrs: { name: "fade" } }, [
          _vm.showCheckmarkIcon
            ? _c("span", { staticClass: "icon-checkmark" })
            : _vm.showErrorIcon
            ? _c("span", { staticClass: "icon-error" })
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=template&id=637d2a53&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/HeadlineSection/HeadlineSection.vue?vue&type=template&id=637d2a53&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
    "section",
    [
      _c("HeaderBar", {
        attrs: {
          "account-property": _vm.accountProperty,
          "label-for": "headline",
          scope: _vm.primaryHeadline.scope
        },
        on: {
          "update:scope": function($event) {
            return _vm.$set(_vm.primaryHeadline, "scope", $event)
          }
        }
      }),
      _vm._v(" "),
      _c("Headline", {
        attrs: {
          headline: _vm.primaryHeadline.value,
          scope: _vm.primaryHeadline.scope
        },
        on: {
          "update:headline": function($event) {
            return _vm.$set(_vm.primaryHeadline, "value", $event)
          },
          "update:scope": function($event) {
            return _vm.$set(_vm.primaryHeadline, "scope", $event)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=template&id=0e2d022c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue?vue&type=template&id=0e2d022c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "language" }, [
    _c(
      "select",
      {
        attrs: { id: "language", placeholder: _vm.t("settings", "Language") },
        on: { change: _vm.onLanguageChange }
      },
      [
        _vm._l(_vm.commonLanguages, function(commonLanguage) {
          return _c(
            "option",
            {
              key: commonLanguage.code,
              domProps: {
                selected: _vm.language.code === commonLanguage.code,
                value: commonLanguage.code
              }
            },
            [_vm._v("\n\t\t\t" + _vm._s(commonLanguage.name) + "\n\t\t")]
          )
        }),
        _vm._v(" "),
        _c("option", { attrs: { disabled: "" } }, [
          _vm._v("\n\t\t\t──────────\n\t\t")
        ]),
        _vm._v(" "),
        _vm._l(_vm.otherLanguages, function(otherLanguage) {
          return _c(
            "option",
            {
              key: otherLanguage.code,
              domProps: {
                selected: _vm.language.code === otherLanguage.code,
                value: otherLanguage.code
              }
            },
            [_vm._v("\n\t\t\t" + _vm._s(otherLanguage.name) + "\n\t\t")]
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        attrs: {
          href: "https://www.transifex.com/nextcloud/nextcloud/",
          target: "_blank",
          rel: "noreferrer noopener"
        }
      },
      [_c("em", [_vm._v(_vm._s(_vm.t("settings", "Help translate")))])]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=template&id=126bf24b&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue?vue&type=template&id=126bf24b&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
    "section",
    [
      _c("HeaderBar", {
        attrs: {
          "account-property": _vm.accountProperty,
          "label-for": "language"
        }
      }),
      _vm._v(" "),
      _vm.isEditable
        ? [
            _c("Language", {
              attrs: {
                "common-languages": _vm.commonLanguages,
                "other-languages": _vm.otherLanguages,
                language: _vm.language
              },
              on: {
                "update:language": function($event) {
                  _vm.language = $event
                }
              }
            })
          ]
        : _c("span", [
            _vm._v(
              "\n\t\t" + _vm._s(_vm.t("settings", "No language set")) + "\n\t"
            )
          ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=template&id=5952d9ee&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/Organisation.vue?vue&type=template&id=5952d9ee&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "organisation" }, [
    _c("input", {
      attrs: {
        id: "organisation",
        type: "text",
        placeholder: _vm.t("settings", "Your organisation"),
        autocapitalize: "none",
        autocomplete: "on",
        autocorrect: "off"
      },
      domProps: { value: _vm.organisation },
      on: { input: _vm.onOrganisationChange }
    }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "organisation__actions-container" },
      [
        _c("transition", { attrs: { name: "fade" } }, [
          _vm.showCheckmarkIcon
            ? _c("span", { staticClass: "icon-checkmark" })
            : _vm.showErrorIcon
            ? _c("span", { staticClass: "icon-error" })
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=template&id=774a2a72&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/OrganisationSection/OrganisationSection.vue?vue&type=template&id=774a2a72&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
    "section",
    [
      _c("HeaderBar", {
        attrs: {
          "account-property": _vm.accountProperty,
          "label-for": "organisation",
          scope: _vm.primaryOrganisation.scope
        },
        on: {
          "update:scope": function($event) {
            return _vm.$set(_vm.primaryOrganisation, "scope", $event)
          }
        }
      }),
      _vm._v(" "),
      _c("Organisation", {
        attrs: {
          organisation: _vm.primaryOrganisation.value,
          scope: _vm.primaryOrganisation.scope
        },
        on: {
          "update:organisation": function($event) {
            return _vm.$set(_vm.primaryOrganisation, "value", $event)
          },
          "update:scope": function($event) {
            return _vm.$set(_vm.primaryOrganisation, "scope", $event)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=template&id=29aba6ea&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue?vue&type=template&id=29aba6ea&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
    "a",
    _vm._g(
      {
        class: { disabled: _vm.disabled },
        attrs: { href: "#profile-visibility" }
      },
      _vm.$listeners
    ),
    [
      _c("ChevronDownIcon", {
        staticClass: "anchor-icon",
        attrs: { decorative: "", title: "", size: 22 }
      }),
      _vm._v(
        "\n\t" +
          _vm._s(_vm.t("settings", "Edit your Profile visibility")) +
          "\n"
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue?vue&type=template&id=a46c582e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileCheckbox.vue?vue&type=template&id=a46c582e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "checkbox-container" }, [
    _c("input", {
      staticClass: "checkbox",
      attrs: { id: "enable-profile", type: "checkbox" },
      domProps: { checked: _vm.profileEnabled },
      on: { change: _vm.onEnableProfileChange }
    }),
    _vm._v(" "),
    _c("label", { attrs: { for: "enable-profile" } }, [
      _vm._v("\n\t\t" + _vm._s(_vm.t("settings", "Enable Profile")) + "\n\t")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=template&id=3c8483c2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue?vue&type=template&id=3c8483c2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
    "a",
    {
      staticClass: "preview-card",
      class: { disabled: _vm.disabled },
      attrs: { href: _vm.profilePageLink }
    },
    [
      _c("Avatar", {
        staticClass: "preview-card__avatar",
        attrs: {
          user: _vm.userId,
          size: 48,
          "show-user-status": true,
          "show-user-status-compact": false,
          "disable-menu": true,
          "disable-tooltip": true
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "preview-card__header" }, [
        _c("span", [_vm._v(_vm._s(_vm.displayName))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "preview-card__footer" }, [
        _c("span", [_vm._v(_vm._s(_vm.organisation))])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=template&id=22b97e2f&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue?vue&type=template&id=22b97e2f&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
    "section",
    [
      _c("HeaderBar", { attrs: { "account-property": _vm.accountProperty } }),
      _vm._v(" "),
      _c("ProfileCheckbox", {
        attrs: { "profile-enabled": _vm.profileEnabled },
        on: {
          "update:profileEnabled": function($event) {
            _vm.profileEnabled = $event
          },
          "update:profile-enabled": function($event) {
            _vm.profileEnabled = $event
          }
        }
      }),
      _vm._v(" "),
      _c("ProfilePreviewCard", {
        attrs: {
          organisation: _vm.organisation,
          "display-name": _vm.displayName,
          "profile-enabled": _vm.profileEnabled,
          "user-id": _vm.userId
        }
      }),
      _vm._v(" "),
      _c("EditProfileAnchorLink", {
        attrs: { "profile-enabled": _vm.profileEnabled }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=template&id=561c922f&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue?vue&type=template&id=561c922f&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
    "section",
    {
      style: { marginLeft: _vm.marginLeft },
      attrs: { id: "profile-visibility" }
    },
    [
      _c("HeaderBar", { attrs: { "account-property": _vm.heading } }),
      _vm._v(" "),
      _c("em", { class: { disabled: _vm.disabled } }, [
        _vm._v(
          "\n\t\t" +
            _vm._s(
              _vm.t(
                "settings",
                'The more restrictive setting of either visibility or scope is respected on your Profile. For example, if visibility is set to "Show to everyone" and scope is set to "Private", "Private" is respected.'
              )
            ) +
            "\n\t"
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "visibility-dropdowns",
          style: {
            gridTemplateRows: "repeat(" + _vm.rows + ", 44px)"
          }
        },
        _vm._l(_vm.visibilityParams, function(param) {
          return _c("VisibilityDropdown", {
            key: param.id,
            attrs: {
              "param-id": param.id,
              "display-id": param.displayId,
              visibility: param.visibility
            },
            on: {
              "update:visibility": function($event) {
                return _vm.$set(param, "visibility", $event)
              }
            }
          })
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=template&id=5b020be8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue?vue&type=template&id=5b020be8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "visibility-container", class: { disabled: _vm.disabled } },
    [
      _c("label", { attrs: { for: _vm.inputId } }, [
        _vm._v(
          "\n\t\t" +
            _vm._s(
              _vm.t("settings", "{displayId}", { displayId: _vm.displayId })
            ) +
            "\n\t"
        )
      ]),
      _vm._v(" "),
      _c("Multiselect", {
        staticClass: "visibility-container__multiselect",
        attrs: {
          id: _vm.inputId,
          options: _vm.visibilityOptions,
          "track-by": "name",
          label: "label",
          value: _vm.visibilityObject
        },
        on: { change: _vm.onVisibilityChange }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=template&id=6181b1b4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/Role.vue?vue&type=template&id=6181b1b4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "role" }, [
    _c("input", {
      attrs: {
        id: "role",
        type: "text",
        placeholder: _vm.t("settings", "Your role"),
        autocapitalize: "none",
        autocomplete: "on",
        autocorrect: "off"
      },
      domProps: { value: _vm.role },
      on: { input: _vm.onRoleChange }
    }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "role__actions-container" },
      [
        _c("transition", { attrs: { name: "fade" } }, [
          _vm.showCheckmarkIcon
            ? _c("span", { staticClass: "icon-checkmark" })
            : _vm.showErrorIcon
            ? _c("span", { staticClass: "icon-error" })
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=template&id=fea062e2&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/RoleSection/RoleSection.vue?vue&type=template&id=fea062e2&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
    "section",
    [
      _c("HeaderBar", {
        attrs: {
          "account-property": _vm.accountProperty,
          "label-for": "role",
          scope: _vm.primaryRole.scope
        },
        on: {
          "update:scope": function($event) {
            return _vm.$set(_vm.primaryRole, "scope", $event)
          }
        }
      }),
      _vm._v(" "),
      _c("Role", {
        attrs: { role: _vm.primaryRole.value, scope: _vm.primaryRole.scope },
        on: {
          "update:role": function($event) {
            return _vm.$set(_vm.primaryRole, "value", $event)
          },
          "update:scope": function($event) {
            return _vm.$set(_vm.primaryRole, "scope", $event)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=template&id=aa45d34e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/AddButton.vue?vue&type=template&id=aa45d34e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    "button",
    _vm._g({ attrs: { disabled: _vm.disabled } }, _vm.$listeners),
    [
      _c("span", { staticClass: "icon icon-add" }),
      _vm._v("\n\t" + _vm._s(_vm.t("settings", "Add")) + "\n")
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=template&id=08cbb240&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue?vue&type=template&id=08cbb240&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
    "Actions",
    {
      class: {
        "federation-actions": !_vm.additional,
        "federation-actions--additional": _vm.additional
      },
      attrs: {
        "aria-label": _vm.ariaLabel,
        "default-icon": _vm.scopeIcon,
        disabled: _vm.disabled
      }
    },
    _vm._l(_vm.federationScopes, function(federationScope) {
      return _c("FederationControlAction", {
        key: federationScope.name,
        attrs: {
          "active-scope": _vm.scope,
          "display-name": federationScope.displayName,
          "handle-scope-change": _vm.changeScope,
          "icon-class": federationScope.iconClass,
          "is-supported-scope": _vm.supportedScopes.includes(
            federationScope.name
          ),
          name: federationScope.name,
          "tooltip-disabled": federationScope.tooltipDisabled,
          tooltip: federationScope.tooltip
        }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=template&id=ba1ab8d4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue?vue&type=template&id=ba1ab8d4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
    "ActionButton",
    {
      staticClass: "federation-actions__btn",
      class: {
        "federation-actions__btn--active": _vm.activeScope === _vm.name
      },
      attrs: {
        "aria-label": _vm.isSupportedScope ? _vm.tooltip : _vm.tooltipDisabled,
        "close-after-click": true,
        disabled: !_vm.isSupportedScope,
        icon: _vm.iconClass,
        title: _vm.displayName
      },
      on: {
        click: function($event) {
          $event.stopPropagation()
          $event.preventDefault()
          return _vm.updateScope.apply(null, arguments)
        }
      }
    },
    [
      _vm._v(
        "\n\t" +
          _vm._s(_vm.isSupportedScope ? _vm.tooltip : _vm.tooltipDisabled) +
          "\n"
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=template&id=6a8a7fec&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue?vue&type=template&id=6a8a7fec&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    "h3",
    {
      class: {
        "setting-property": _vm.isSettingProperty,
        "profile-property": _vm.isProfileProperty
      }
    },
    [
      _c("label", { attrs: { for: _vm.labelFor } }, [
        _vm._v("\n\t\t" + _vm._s(_vm.accountProperty) + "\n\t")
      ]),
      _vm._v(" "),
      _vm.scope
        ? [
            _c("FederationControl", {
              staticClass: "federation-control",
              attrs: {
                "account-property": _vm.accountProperty,
                scope: _vm.localScope
              },
              on: {
                "update:scope": [
                  function($event) {
                    _vm.localScope = $event
                  },
                  _vm.onScopeChange
                ]
              }
            })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.isEditable && _vm.isMultiValueSupported
        ? [
            _c("AddButton", {
              staticClass: "add-button",
              attrs: { disabled: !_vm.isValidSection },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  $event.preventDefault()
                  return _vm.onAddAdditional.apply(null, arguments)
                }
              }
            })
          ]
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
/******/ 			"settings-vue-settings-personal-info": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/settings/src/main-personal-info.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=settings-vue-settings-personal-info.js.map?v=6922611a0b09ec3298d2