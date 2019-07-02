/**
 *  * Helper prevents composability issues with other hocs that expect functions as an input
 *  Issue: https://github.com/zanettin/incompose/issues/26
 * @param BaseComponent
 * @returns {function(*): *}
 */
const wrapClassComponent = (BaseComponent) => (props) =>
  <BaseComponent {...props }/>;

export default wrapClassComponent;
