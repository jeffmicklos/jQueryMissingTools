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

	segment: function(collection, number) {
	
	    if(number === 0 || number > collection.length) {
	        return collection;
	    }
		
		var i;
	    var segmentedCollection = [];
	    var collectionClone = collection;
	    var length = collection.length / number;
				
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

	}

});