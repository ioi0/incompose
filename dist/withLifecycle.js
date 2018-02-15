import { createComponentVNode, normalizeProps } from 'inferno';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import { createClass } from 'inferno-compat';
import createHelper from './createHelper';

var lifecycle = function lifecycle(spec) {
  return function (BaseComponent) {

    if (process.env.NODE_ENV !== 'production' && spec.hasOwnProperty('render')) {
      console.error('lifecycle() does not support the render method; its behavior is to ' + 'pass all props and state to the base component.');
    }

    /* eslint-disable react/prefer-es6-class */
    return createClass(Object.assign({}, spec, {
      render: function render() {
        return normalizeProps(createComponentVNode(2, BaseComponent, Object.assign({}, Object.assign.apply(Object, _toConsumableArray(this.props).concat(_toConsumableArray(this.state))))));
      }
    }));
    /* eslint-enable react/prefer-es6-class */
  };
};

export default createHelper(lifecycle, 'lifecycle');