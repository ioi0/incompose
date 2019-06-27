"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @author recompose (https://github.com/acdlite/recompose)
 */
var pick = function pick(obj, keys) {
  var result = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (obj && obj[key]) {
      result[key] = obj[key];
    }
  }

  return result;
};

var _default = pick;
exports.default = _default;