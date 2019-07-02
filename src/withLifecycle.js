/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

export default lifecycles => Component => {
	Component.defaultHooks = {
		...lifecycles,
	};

	return Component;
};
