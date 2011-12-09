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
		
		return (list[index++] ? index++ : 0)
		
	},
	
	/**
	 * Find the prev index from any point of an array
	 * If at first index, it will loop around to the back
	 * @param collection {Array} a collection to find in
	 * @param index {number} the starting index
	 * @return {number} the prev index from index
	 */
	getPrevIndex: function(list, index) {
		
		return (list[index--] ? index-- : 0)
		
	}

});