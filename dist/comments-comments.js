/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/comments/src/activitytabviewplugin.js":
/*!****************************************************!*\
  !*** ./apps/comments/src/activitytabviewplugin.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Copyright (c) 2016
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
(function () {
  OCA.Comments.ActivityTabViewPlugin = {
    /**
     * Prepare activity for display
     *
     * @param {OCA.Activity.ActivityModel} model for this activity
     * @param {jQuery} $el jQuery handle for this activity
     * @param {string} view The view that displayes this activity
     */
    prepareModelForDisplay(model, $el, view) {
      if (model.get('app') !== 'comments' || model.get('type') !== 'comments') {
        return;
      }

      if (view === 'ActivityTabView') {
        $el.addClass('comment');

        if (model.get('message') && this._isLong(model.get('message'))) {
          $el.addClass('collapsed');
          const $overlay = $('<div>').addClass('message-overlay');
          $el.find('.activitymessage').after($overlay);
          $el.on('click', this._onClickCollapsedComment);
        }
      }
    },

    /*
     * Copy of CommentsTabView._onClickComment()
     */
    _onClickCollapsedComment(ev) {
      let $row = $(ev.target);

      if (!$row.is('.comment')) {
        $row = $row.closest('.comment');
      }

      $row.removeClass('collapsed');
    },

    /*
     * Copy of CommentsTabView._isLong()
     */
    _isLong(message) {
      return message.length > 250 || (message.match(/\n/g) || []).length > 1;
    }

  };
})();

OC.Plugins.register('OCA.Activity.RenderingPlugins', OCA.Comments.ActivityTabViewPlugin);

/***/ }),

/***/ "./apps/comments/src/app.js":
/*!**********************************!*\
  !*** ./apps/comments/src/app.js ***!
  \**********************************/
/***/ (() => {

/**
 * Copyright (c) 2016 Vincent Petry <pvince81@owncloud.com>
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
  if (!OCA.Comments) {
    /**
     * @namespace
     */
    OCA.Comments = {};
  }
})();

/***/ }),

/***/ "./apps/comments/src/comments.js":
/*!***************************************!*\
  !*** ./apps/comments/src/comments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./apps/comments/src/app.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ "./apps/comments/src/templates.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _filesplugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filesplugin */ "./apps/comments/src/filesplugin.js");
/* harmony import */ var _filesplugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_filesplugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _activitytabviewplugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activitytabviewplugin */ "./apps/comments/src/activitytabviewplugin.js");
/* harmony import */ var _activitytabviewplugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_activitytabviewplugin__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @copyright Copyright (c) 2016 Roeland Jago Douma <roeland@famdouma.nl>
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




window.OCA.Comments = OCA.Comments;

/***/ }),

/***/ "./apps/comments/src/filesplugin.js":
/*!******************************************!*\
  !*** ./apps/comments/src/filesplugin.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Copyright (c) 2016 Vincent Petry <pvince81@owncloud.com>
 *
 * @author Joas Schilling <coding@schilljs.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Michael Jobst <mjobst+github@tecratech.de>
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
(function () {
  _.extend(OC.Files.Client, {
    PROPERTY_COMMENTS_UNREAD: '{' + OC.Files.Client.NS_OWNCLOUD + '}comments-unread'
  });

  OCA.Comments = _.extend({}, OCA.Comments);

  if (!OCA.Comments) {
    /**
     * @namespace
     */
    OCA.Comments = {};
  }
  /**
   * @namespace
   */


  OCA.Comments.FilesPlugin = {
    ignoreLists: ['trashbin', 'files.public'],

    _formatCommentCount(count) {
      return OCA.Comments.Templates.filesplugin({
        count,
        countMessage: n('comments', '%n unread comment', '%n unread comments', count),
        iconUrl: OC.imagePath('core', 'actions/comment')
      });
    },

    attach(fileList) {
      const self = this;

      if (this.ignoreLists.indexOf(fileList.id) >= 0) {
        return;
      }

      const oldGetWebdavProperties = fileList._getWebdavProperties;

      fileList._getWebdavProperties = function () {
        const props = oldGetWebdavProperties.apply(this, arguments);
        props.push(OC.Files.Client.PROPERTY_COMMENTS_UNREAD);
        return props;
      };

      fileList.filesClient.addFileInfoParser(function (response) {
        const data = {};
        const props = response.propStat[0].properties;
        const commentsUnread = props[OC.Files.Client.PROPERTY_COMMENTS_UNREAD];

        if (!_.isUndefined(commentsUnread) && commentsUnread !== '') {
          data.commentsUnread = parseInt(commentsUnread, 10);
        }

        return data;
      });
      fileList.$el.addClass('has-comments');
      const oldCreateRow = fileList._createRow;

      fileList._createRow = function (fileData) {
        const $tr = oldCreateRow.apply(this, arguments);

        if (fileData.commentsUnread) {
          $tr.attr('data-comments-unread', fileData.commentsUnread);
        }

        return $tr;
      }; // register "comment" action for reading comments


      fileList.fileActions.registerAction({
        name: 'Comment',

        displayName(context) {
          if (context && context.$file) {
            const unread = parseInt(context.$file.data('comments-unread'), 10);

            if (unread >= 0) {
              return n('comments', '1 new comment', '{unread} new comments', unread, {
                unread
              });
            }
          }

          return t('comments', 'Comment');
        },

        mime: 'all',
        order: -140,
        iconClass: 'icon-comment',
        permissions: OC.PERMISSION_READ,
        type: OCA.Files.FileActions.TYPE_INLINE,

        render(actionSpec, isDefault, context) {
          const $file = context.$file;
          const unreadComments = $file.data('comments-unread');

          if (unreadComments) {
            const $actionLink = $(self._formatCommentCount(unreadComments));
            context.$file.find('a.name>span.fileactions').append($actionLink);
            return $actionLink;
          }

          return '';
        },

        actionHandler(fileName, context) {
          context.$file.find('.action-comment').tooltip('hide'); // open sidebar in comments section

          OCA.Files.Sidebar.setActiveTab('comments');
          OCA.Files.Sidebar.open(context.dir + '/' + fileName);
        }

      }); // add attribute to "elementToFile"

      const oldElementToFile = fileList.elementToFile;

      fileList.elementToFile = function ($el) {
        const fileInfo = oldElementToFile.apply(this, arguments);
        const commentsUnread = $el.data('comments-unread');

        if (commentsUnread) {
          fileInfo.commentsUnread = commentsUnread;
        }

        return fileInfo;
      };
    }

  };
})();

OC.Plugins.register('OCA.Files.FileList', OCA.Comments.FilesPlugin);

/***/ }),

/***/ "./apps/comments/src/templates.js":
/*!****************************************!*\
  !*** ./apps/comments/src/templates.js ***!
  \****************************************/
/***/ (() => {

(function () {
  var template = Handlebars.template,
      templates = OCA.Comments.Templates = OCA.Comments.Templates || {};
  templates['filesplugin'] = template({
    "compiler": [8, ">= 4.3.0"],
    "main": function (container, depth0, helpers, partials, data) {
      var helper,
          alias1 = depth0 != null ? depth0 : container.nullContext || {},
          alias2 = container.hooks.helperMissing,
          alias3 = "function",
          alias4 = container.escapeExpression,
          lookupProperty = container.lookupProperty || function (parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }

        return undefined;
      };

      return "<a class=\"action action-comment permanent\" title=\"" + alias4((helper = (helper = lookupProperty(helpers, "countMessage") || (depth0 != null ? lookupProperty(depth0, "countMessage") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "countMessage",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 1,
            "column": 50
          },
          "end": {
            "line": 1,
            "column": 66
          }
        }
      }) : helper)) + "\" href=\"#\">\n	<img class=\"svg\" src=\"" + alias4((helper = (helper = lookupProperty(helpers, "iconUrl") || (depth0 != null ? lookupProperty(depth0, "iconUrl") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "iconUrl",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 2,
            "column": 23
          },
          "end": {
            "line": 2,
            "column": 34
          }
        }
      }) : helper)) + "\"/>\n</a>\n";
    },
    "useData": true
  });
})();

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
/******/ 			"comments-comments": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/comments/src/comments.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=comments-comments.js.map?v=5aa502f1f312d4917865