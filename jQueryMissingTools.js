$.extend({

	/**
	 * Returns the number of (first-level) key/val pairs in an object
	 * Think of Array.length but for Objects!
	 * @param map {Object} an object of kv pairs to count
	 * @return {number} the number of pairs in object
	 */
	size: function(map) {

		var numberOfProperties = 0;

		$.each(map, function(key) {
			if (hasOwnProperty.call(map, key)) {
				numberOfProperties++;
			}
		});

		return numberOfProperties;
	},

	/**
	 * Returns an array of values from an object
	 * Think of Object.keys but... values.
	 * @param map {Object} an object to rip values from
	 * @return {Array} an array of ever keys value
	 */
	values: function(map) {

		var values = [];

		$.each(map, function(key, value) {
			if (hasOwnProperty.call(map, key)) {
				values.push(value);
			}
		});

		return values;
	},

	/**
	 * Divides a collection into N child pieces
	 * @param collection {Array} a collection to divide
	 * @param number {number} how many pieces to chop collection into
	 * @return {Array} the newly segmented collection
	 */
	segment: function(collection, number) {
	
		if(number === 0 || number > collection.length) {
			return collection;
		}
		
		var i;
		var segmentedCollection = [];
		var collectionClone = collection;
		var length = collectionClone.length / number;
				
		for(i = 0; length > i; i++) {
	
			if(number === 1) {
				segmentedCollection.push([collectionClone[i]]);
			} else {
			
				if(collection[i]) {
					segmentedCollection.push(collectionClone.splice(0, number));
				} else {
			 		segmentedCollection.push(collectionClone);
				}
			
			}
		}
			
		return segmentedCollection;
	
	},
	
	any: function(collection, functionToCall) {

		return $.grep(collection, function(member) {
			return functionToCall(member);
		}).length > 0

	},
	
	/**
	 * Find the next index from any point of an array
	 * If at last index, it will loop around to the front
	 * @param collection {Array} a collection to find in
	 * @param index {number} the starting index
	 * @return {number} the next index from index
	 */
	getNextIndex: function(collection, index) {
		
		return (collection[index++] ? index++ : 0)
		
	},
	
	/**
	 * Find the prev index from any point of an array
	 * If at first index, it will loop around to the back
	 * @param collection {Array} a collection to find in
	 * @param index {number} the starting index
	 * @return {number} the prev index from index
	 */
	getPrevIndex: function(collection, index) {
		
		return (collection[index--] ? index-- : 0)
		
	}

});