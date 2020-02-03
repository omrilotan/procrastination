/**
 *
 * @param  {function} original
 * @return {function}
 */
function wrap(original) {
	let called = false;
	let result;
	return function(...args) {
		if (!called) {
			result = original.apply(this, args);
			called = true;
		}
		return result;
	};
}

/**
 * Expose "wrap" as decorator
 * @param  {any} target
 * @param  {string} property
 * @param  {object} descriptor Property descriptor
 * @return {object}            Property descriptor
 */
function decorate(target, property, descriptor) {
	descriptor.value = wrap(descriptor.value);

	return descriptor;
}


module.exports = {
	wrap,
	decorate,
};
