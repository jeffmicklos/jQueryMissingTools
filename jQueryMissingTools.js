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
		
	}

});

var MakeAJeff = function() {
    this.name = 'Jeff';
    this.levelOfAwesome = 0;
};

MakeAJeff.prototype.makeAwesome = function() {
    this.levelOfAwesome++; 
};

var jeffBuilder = new MakeAJeff();
setInterval(jeffBuilder.deep, 500);