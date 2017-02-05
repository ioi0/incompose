/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import Inferno from 'inferno';

const createEagerElementUtil = (
  hasKey,
  isReferentiallyTransparent,
  type,
  props,
  children
) => {
  if (!hasKey && isReferentiallyTransparent) {
    if (children) {
      return type({ ...props, children });
    }
    return type(props);
  }

  const Component = type;

  if (children) {
    return <Component {...props}>{children}</Component>;
  }

  return <Component {...props} />;
};

export default createEagerElementUtil;