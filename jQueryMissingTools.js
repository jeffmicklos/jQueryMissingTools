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
				values.push(value);
			}
		});

		return values;
	},

	bind: function(functionToCall, object) {
		return function() {
			functionToCall.apply(object, arguments);
		};

	},
	
	segment: function(collection, number) {
		
		var segmentedCollection = [];
		
		$.each(collection, function(i, item) {

            if(item) {
                segmentedCollection.push(collection.splice(0, number));
            } else {
                $.break;
            }
			
		});
	
		return segmentedCollection;

	},
	
	any: function(collection, functionToCall) {

	    return $.grep(collection, function(member) {
	           return functionToCall(member);
	    }).length > 0

	}

});