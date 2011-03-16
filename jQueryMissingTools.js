$.extend({

	size: function(enumerableObject) {
	
		var numberOfProperties = 0;
		
		$.each(enumerableObject, function(key) {
			if (hasOwnProperty.call(enumerableObject, key)) {
				numberOfProperties++;
			}
		});

		return numberOfProperties;
	},
	
	values: function(map) {

		var values = [];
		
		$.each(map, function(key, value) {
			if (hasOwnProperty.call(map, key)) {
				values.push(key);
			}
		});

		return values;
	},
	
	bind: function(functionToCall, object) {
		return function() {
			functionToCall.apply(object, arguments);
		};
		
	}

});