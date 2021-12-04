/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/files_versions/src/files_versions.js":
/*!***************************************************!*\
  !*** ./apps/files_versions/src/files_versions.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _versionmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./versionmodel */ "./apps/files_versions/src/versionmodel.js");
/* harmony import */ var _versionmodel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_versionmodel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _versioncollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./versioncollection */ "./apps/files_versions/src/versioncollection.js");
/* harmony import */ var _versioncollection__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_versioncollection__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _versionstabview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./versionstabview */ "./apps/files_versions/src/versionstabview.js");
/* harmony import */ var _filesplugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filesplugin */ "./apps/files_versions/src/filesplugin.js");
/* harmony import */ var _filesplugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_filesplugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_versions_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/versions.css */ "./apps/files_versions/src/css/versions.css");
/**
 * @copyright Copyright (c) 2016 Roeland Jago Douma <roeland@famdouma.nl>
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





window.OCA.Versions = OCA.Versions;

/***/ }),

/***/ "./apps/files_versions/src/filesplugin.js":
/*!************************************************!*\
  !*** ./apps/files_versions/src/filesplugin.js ***!
  \************************************************/
/***/ (() => {

/**
 * Copyright (c) 2015
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
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
(function () {
  OCA.Versions = OCA.Versions || {};
  /**
   * @namespace
   */

  OCA.Versions.Util = {
    /**
     * Initialize the versions plugin.
     *
     * @param {OCA.Files.FileList} fileList file list to be extended
     */
    attach(fileList) {
      if (fileList.id === 'trashbin' || fileList.id === 'files.public') {
        return;
      }

      fileList.registerTabView(new OCA.Versions.VersionsTabView('versionsTabView', {
        order: -10
      }));
    }

  };
})();

OC.Plugins.register('OCA.Files.FileList', OCA.Versions.Util);

/***/ }),

/***/ "./apps/files_versions/src/versioncollection.js":
/*!******************************************************!*\
  !*** ./apps/files_versions/src/versioncollection.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/**
 * Copyright (c) 2015
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Robin Appelman <robin@icewind.nl>
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
(function () {
  /**
   * @memberof OCA.Versions
   */
  const VersionCollection = OC.Backbone.Collection.extend({
    model: OCA.Versions.VersionModel,
    sync: OC.Backbone.davSync,

    /**
     * @member OCA.Files.FileInfoModel
     */
    _fileInfo: null,
    _currentUser: null,
    _client: null,

    setFileInfo(fileInfo) {
      this._fileInfo = fileInfo;
    },

    getFileInfo() {
      return this._fileInfo;
    },

    setCurrentUser(user) {
      this._currentUser = user;
    },

    getCurrentUser() {
      return this._currentUser || OC.getCurrentUser().uid;
    },

    setClient(client) {
      this._client = client;
    },

    getClient() {
      return this._client || new OC.Files.Client({
        host: OC.getHost(),
        root: OC.linkToRemoteBase('dav') + '/versions/' + this.getCurrentUser(),
        useHTTPS: OC.getProtocol() === 'https'
      });
    },

    url() {
      return OC.linkToRemoteBase('dav') + '/versions/' + this.getCurrentUser() + '/versions/' + this._fileInfo.get('id');
    },

    parse(result) {
      const fullPath = this._fileInfo.getFullPath();

      const fileId = this._fileInfo.get('id');

      const name = this._fileInfo.get('name');

      const user = this.getCurrentUser();
      const client = this.getClient();
      return _.map(result, function (version) {
        version.fullPath = fullPath;
        version.fileId = fileId;
        version.name = name;
        version.timestamp = parseInt(moment(new Date(version.timestamp)).format('X'), 10);
        version.id = OC.basename(version.href);
        version.size = parseInt(version.size, 10);
        version.user = user;
        version.client = client;
        return version;
      });
    }

  });
  OCA.Versions = OCA.Versions || {};
  OCA.Versions.VersionCollection = VersionCollection;
})();

/***/ }),

/***/ "./apps/files_versions/src/versionmodel.js":
/*!*************************************************!*\
  !*** ./apps/files_versions/src/versionmodel.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/**
 * Copyright (c) 2015
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Robin Appelman <robin@icewind.nl>
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
(function () {
  /**
   * @memberof OCA.Versions
   */
  const VersionModel = OC.Backbone.Model.extend({
    sync: OC.Backbone.davSync,
    davProperties: {
      size: '{DAV:}getcontentlength',
      mimetype: '{DAV:}getcontenttype',
      timestamp: '{DAV:}getlastmodified'
    },

    /**
     * Restores the original file to this revision
     *
     * @param {object} [options] options
     * @return {Promise}
     */
    revert(options) {
      options = options ? _.clone(options) : {};
      const model = this;
      const client = this.get('client');
      return client.move('/versions/' + this.get('fileId') + '/' + this.get('id'), '/restore/target', true).done(function () {
        if (options.success) {
          options.success.call(options.context, model, {}, options);
        }

        model.trigger('revert', model, options);
      }).fail(function () {
        if (options.error) {
          options.error.call(options.context, model, {}, options);
        }

        model.trigger('error', model, {}, options);
      });
    },

    getFullPath() {
      return this.get('fullPath');
    },

    getPreviewUrl() {
      const url = OC.generateUrl('/apps/files_versions/preview');
      const params = {
        file: this.get('fullPath'),
        version: this.get('id')
      };
      return url + '?' + OC.buildQueryString(params);
    },

    getDownloadUrl() {
      return OC.linkToRemoteBase('dav') + '/versions/' + this.get('user') + '/versions/' + this.get('fileId') + '/' + this.get('id');
    }

  });
  OCA.Versions = OCA.Versions || {};
  OCA.Versions.VersionModel = VersionModel;
})();

/***/ }),

/***/ "./apps/files_versions/src/versionstabview.js":
/*!****************************************************!*\
  !*** ./apps/files_versions/src/versionstabview.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_item_handlebars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/item.handlebars */ "./apps/files_versions/src/templates/item.handlebars");
/* harmony import */ var _templates_item_handlebars__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_item_handlebars__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_template_handlebars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/template.handlebars */ "./apps/files_versions/src/templates/template.handlebars");
/* harmony import */ var _templates_template_handlebars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_template_handlebars__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/**
 * Copyright (c) 2015
 *
 * @author Jan-Christoph Borchardt <hey@jancborchardt.net>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Michael Jobst <mjobst+github@tecratech.de>
 * @author noveens <noveen.sachdeva@research.iiit.ac.in>
 * @author Robin Appelman <robin@icewind.nl>
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



(function () {
  if (!OCA.Files.DetailTabView) {
    // Only register the versions tab within the files app
    return;
  }
  /**
   * @memberof OCA.Versions
   */


  const VersionsTabView = OCA.Files.DetailTabView.extend(
  /** @lends OCA.Versions.VersionsTabView.prototype */
  {
    id: 'versionsTabView',
    className: 'tab versionsTabView',
    _template: null,
    $versionsContainer: null,
    events: {
      'click .revertVersion': '_onClickRevertVersion'
    },

    initialize() {
      OCA.Files.DetailTabView.prototype.initialize.apply(this, arguments);
      this.collection = new OCA.Versions.VersionCollection();
      this.collection.on('request', this._onRequest, this);
      this.collection.on('sync', this._onEndRequest, this);
      this.collection.on('update', this._onUpdate, this);
      this.collection.on('error', this._onError, this);
      this.collection.on('add', this._onAddModel, this);
    },

    getLabel() {
      return t('files_versions', 'Versions');
    },

    getIcon() {
      return 'icon-history';
    },

    nextPage() {
      if (this._loading) {
        return;
      }

      if (this.collection.getFileInfo() && this.collection.getFileInfo().isDirectory()) {
        return;
      }

      this.collection.fetch();
    },

    _onClickRevertVersion(ev) {
      const self = this;
      let $target = $(ev.target);
      const fileInfoModel = this.collection.getFileInfo();

      if (!$target.is('li')) {
        $target = $target.closest('li');
      }

      ev.preventDefault();
      const revision = $target.attr('data-revision');
      const versionModel = this.collection.get(revision);
      versionModel.revert({
        success() {
          // reset and re-fetch the updated collection
          self.$versionsContainer.empty();
          self.collection.setFileInfo(fileInfoModel);
          self.collection.reset([], {
            silent: true
          });
          self.collection.fetch();
          self.$el.find('.versions').removeClass('hidden'); // update original model

          fileInfoModel.trigger('busy', fileInfoModel, false);
          fileInfoModel.set({
            size: versionModel.get('size'),
            mtime: versionModel.get('timestamp') * 1000,
            // temp dummy, until we can do a PROPFIND
            etag: versionModel.get('id') + versionModel.get('timestamp')
          });
        },

        error() {
          fileInfoModel.trigger('busy', fileInfoModel, false);
          self.$el.find('.versions').removeClass('hidden');

          self._toggleLoading(false);

          OC.Notification.show(t('files_version', 'Failed to revert {file} to revision {timestamp}.', {
            file: versionModel.getFullPath(),
            timestamp: OC.Util.formatDate(versionModel.get('timestamp') * 1000)
          }), {
            type: 'error'
          });
        }

      }); // spinner

      this._toggleLoading(true);

      fileInfoModel.trigger('busy', fileInfoModel, true);
    },

    _toggleLoading(state) {
      this._loading = state;
      this.$el.find('.loading').toggleClass('hidden', !state);
    },

    _onRequest() {
      this._toggleLoading(true);
    },

    _onEndRequest() {
      this._toggleLoading(false);

      this.$el.find('.empty').toggleClass('hidden', !!this.collection.length);
    },

    _onAddModel(model) {
      const $el = $(this.itemTemplate(this._formatItem(model)));
      this.$versionsContainer.append($el);
      $el.find('.has-tooltip').tooltip();
    },

    template(data) {
      return _templates_template_handlebars__WEBPACK_IMPORTED_MODULE_1___default()(data);
    },

    itemTemplate(data) {
      return _templates_item_handlebars__WEBPACK_IMPORTED_MODULE_0___default()(data);
    },

    setFileInfo(fileInfo) {
      if (fileInfo) {
        this.render();
        this.collection.setFileInfo(fileInfo);
        this.collection.reset([], {
          silent: true
        });
        this.nextPage();
      } else {
        this.render();
        this.collection.reset();
      }
    },

    _formatItem(version) {
      const timestamp = version.get('timestamp') * 1000;
      const size = version.has('size') ? version.get('size') : 0;
      const preview = OC.MimeType.getIconUrl(version.get('mimetype'));
      const img = new Image();

      img.onload = function () {
        $('li[data-revision=' + version.get('id') + '] .preview').attr('src', version.getPreviewUrl());
      };

      img.src = version.getPreviewUrl();
      return _.extend({
        versionId: version.get('id'),
        formattedTimestamp: OC.Util.formatDate(timestamp),
        relativeTimestamp: OC.Util.relativeModifiedDate(timestamp),
        millisecondsTimestamp: timestamp,
        humanReadableSize: OC.Util.humanFileSize(size, true),
        altSize: n('files', '%n byte', '%n bytes', size),
        hasDetails: version.has('size'),
        downloadUrl: version.getDownloadUrl(),
        downloadIconUrl: OC.imagePath('core', 'actions/download'),
        downloadName: version.get('name'),
        revertIconUrl: OC.imagePath('core', 'actions/history'),
        previewUrl: preview,
        revertLabel: t('files_versions', 'Restore'),
        canRevert: (this.collection.getFileInfo().get('permissions') & OC.PERMISSION_UPDATE) !== 0
      }, version.attributes);
    },

    /**
     * Renders this details view
     */
    render() {
      this.$el.html(this.template({
        emptyResultLabel: t('files_versions', 'No other versions available')
      }));
      this.$el.find('.has-tooltip').tooltip();
      this.$versionsContainer = this.$el.find('ul.versions');
      this.delegateEvents();
    },

    /**
     * Returns true for files, false for folders.
     *
     * @param {FileInfo} fileInfo fileInfo
     * @return {bool} true for files, false for folders
     */
    canDisplay(fileInfo) {
      if (!fileInfo) {
        return false;
      }

      return !fileInfo.isDirectory();
    }

  });
  OCA.Versions = OCA.Versions || {};
  OCA.Versions.VersionsTabView = VersionsTabView;
})();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./apps/files_versions/src/css/versions.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./apps/files_versions/src/css/versions.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".versionsTabView .clear-float {\n\tclear: both;\n}\n\n.versionsTabView li {\n\twidth: 100%;\n\tcursor: default;\n\theight: 56px;\n\tfloat: left;\n\tborder-bottom: 1px solid rgba(100,100,100,.1);\n}\n.versionsTabView li:last-child {\n\tborder-bottom: none;\n}\n\n.versionsTabView a,\n.versionsTabView div > span {\n\tvertical-align: middle;\n\topacity: .5;\n}\n\n.versionsTabView li a{\n\tpadding: 15px 10px 11px;\n}\n\n.versionsTabView a:hover,\n.versionsTabView a:focus {\n\topacity: 1;\n}\n\n.versionsTabView .preview-container {\n\tdisplay: inline-block;\n  vertical-align: top;\n}\n\n.versionsTabView img {\n\tcursor: pointer;\n\tpadding-right: 4px;\n}\n\n.versionsTabView img.preview {\n\tcursor: default;\n}\n\n.versionsTabView .version-container {\n\tdisplay: inline-block;\n}\n\n.versionsTabView .versiondate {\n\tmin-width: 100px;\n\tvertical-align: super;\n}\n\n.versionsTabView .version-details {\n\ttext-align: left;\n}\n\n.versionsTabView .version-details > span {\n\tpadding: 0 10px;\n}\n\n.versionsTabView .revertVersion {\n\tcursor: pointer;\n\tfloat: right;\n\tmargin-right: -10px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./apps/files_versions/src/templates/item.handlebars":
/*!***********************************************************!*\
  !*** ./apps/files_versions/src/templates/item.handlebars ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"version-details\">\n					<span class=\"size has-tooltip\" title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"altSize") || (depth0 != null ? lookupProperty(depth0,"altSize") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"altSize","hash":{},"data":data,"loc":{"start":{"line":14,"column":43},"end":{"line":14,"column":54}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"humanReadableSize") || (depth0 != null ? lookupProperty(depth0,"humanReadableSize") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"humanReadableSize","hash":{},"data":data,"loc":{"start":{"line":14,"column":56},"end":{"line":14,"column":77}}}) : helper)))
    + "</span>\n				</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<a href=\"#\" class=\"revertVersion\" title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"revertLabel") || (depth0 != null ? lookupProperty(depth0,"revertLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"revertLabel","hash":{},"data":data,"loc":{"start":{"line":19,"column":44},"end":{"line":19,"column":59}}}) : helper)))
    + "\"><img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"revertIconUrl") || (depth0 != null ? lookupProperty(depth0,"revertIconUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"revertIconUrl","hash":{},"data":data,"loc":{"start":{"line":19,"column":71},"end":{"line":19,"column":88}}}) : helper)))
    + "\" /></a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.hooks.blockHelperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<li data-revision=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":19},"end":{"line":1,"column":25}}}) : helper)))
    + "\">\n	<div>\n		<div class=\"preview-container\">\n			<img class=\"preview\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"previewUrl") || (depth0 != null ? lookupProperty(depth0,"previewUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"previewUrl","hash":{},"data":data,"loc":{"start":{"line":4,"column":29},"end":{"line":4,"column":43}}}) : helper)))
    + "\" width=\"44\" height=\"44\"/>\n		</div>\n		<div class=\"version-container\">\n			<div>\n				<a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"downloadUrl") || (depth0 != null ? lookupProperty(depth0,"downloadUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"downloadUrl","hash":{},"data":data,"loc":{"start":{"line":8,"column":13},"end":{"line":8,"column":28}}}) : helper)))
    + "\" class=\"downloadVersion\" download=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"downloadName") || (depth0 != null ? lookupProperty(depth0,"downloadName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"downloadName","hash":{},"data":data,"loc":{"start":{"line":8,"column":64},"end":{"line":8,"column":80}}}) : helper)))
    + "\"><img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"downloadIconUrl") || (depth0 != null ? lookupProperty(depth0,"downloadIconUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"downloadIconUrl","hash":{},"data":data,"loc":{"start":{"line":8,"column":92},"end":{"line":8,"column":111}}}) : helper)))
    + "\" />\n					<span class=\"versiondate has-tooltip live-relative-timestamp\" data-timestamp=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"millisecondsTimestamp") || (depth0 != null ? lookupProperty(depth0,"millisecondsTimestamp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"millisecondsTimestamp","hash":{},"data":data,"loc":{"start":{"line":9,"column":83},"end":{"line":9,"column":108}}}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"formattedTimestamp") || (depth0 != null ? lookupProperty(depth0,"formattedTimestamp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"formattedTimestamp","hash":{},"data":data,"loc":{"start":{"line":9,"column":117},"end":{"line":9,"column":139}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"relativeTimestamp") || (depth0 != null ? lookupProperty(depth0,"relativeTimestamp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"relativeTimestamp","hash":{},"data":data,"loc":{"start":{"line":9,"column":141},"end":{"line":9,"column":162}}}) : helper)))
    + "</span>\n				</a>\n			</div>\n";
  stack1 = ((helper = (helper = lookupProperty(helpers,"hasDetails") || (depth0 != null ? lookupProperty(depth0,"hasDetails") : depth0)) != null ? helper : alias2),(options={"name":"hasDetails","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":3},"end":{"line":16,"column":18}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"hasDetails")) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n";
  stack1 = ((helper = (helper = lookupProperty(helpers,"canRevert") || (depth0 != null ? lookupProperty(depth0,"canRevert") : depth0)) != null ? helper : alias2),(options={"name":"canRevert","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":20,"column":16}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"canRevert")) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n</li>\n";
},"useData":true});

/***/ }),

/***/ "./apps/files_versions/src/templates/template.handlebars":
/*!***************************************************************!*\
  !*** ./apps/files_versions/src/templates/template.handlebars ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul class=\"versions\"></ul>\n<div class=\"clear-float\"></div>\n<div class=\"empty hidden\">\n	<div class=\"emptycontent\">\n		<div class=\"icon-history\"></div>\n		<p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"emptyResultLabel") || (depth0 != null ? lookupProperty(depth0,"emptyResultLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"emptyResultLabel","hash":{},"data":data,"loc":{"start":{"line":6,"column":5},"end":{"line":6,"column":25}}}) : helper)))
    + "</p>\n	</div>\n</div>\n<input type=\"button\" class=\"showMoreVersions hidden\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"moreVersionsLabel") || (depth0 != null ? lookupProperty(depth0,"moreVersionsLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"moreVersionsLabel","hash":{},"data":data,"loc":{"start":{"line":9,"column":60},"end":{"line":9,"column":81}}}) : helper)))
    + "\" name=\"show-more-versions\" id=\"show-more-versions\" />\n<div class=\"loading hidden\" style=\"height: 50px\"></div>\n";
},"useData":true});

/***/ }),

/***/ "./apps/files_versions/src/css/versions.css":
/*!**************************************************!*\
  !*** ./apps/files_versions/src/css/versions.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_versions_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./versions.css */ "./node_modules/css-loader/dist/cjs.js!./apps/files_versions/src/css/versions.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_versions_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_versions_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/******/ 			"files_versions-files_versions": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/files_versions/src/files_versions.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=files_versions-files_versions.js.map?v=4c834cb7372f381cff7a