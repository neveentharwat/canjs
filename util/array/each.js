steal('can/util/can.js',function (can) {
	can.each = function (elements, callback, context) {
		var i = 0, key;
		if (elements) {
			if (typeof elements.length === 'number' && elements.pop) {
				if ( elements.attr ) {
					elements.attr('length');
				}
				for (key = elements.length; i < key; i++) {
					if (callback.call(context || elements[i], elements[i], i, elements) === false) {
						break;
					}
				}
			} else {
				for (key in elements) {
					if (callback.call(context || elements[key], elements[key], key, elements) === false) {
						break;
					}
				}
			}
		}
		return elements;
	};
});
