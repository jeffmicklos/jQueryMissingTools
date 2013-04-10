CollectionTools = {

  /**
   * Returns the number of immediate key/val pairs in an object
   * Think Array.prototype.length but for Objects.
   * @param obj {Object} an object of kv pairs to count
   * @return {number} the number of pairs in object
   */
  size: function(obj) {

    var numberOfProperties = 0;

    for(var prop in obj) {
      /*
        Users could possibly override `hasOwnProperty`
        on `obj`, so we try and call it in the most
        secure manner.
      */
      if(Object.prototype.hasOwnProperty.call(obj, prop)) {
        numberOfProperties++;
      }
    }

    return numberOfProperties;

  },

  /**
   * Returns an array of values from an object
   * Think of Object.keys but... values.
   * @param obj {Object} an object to rip values from
   * @return {Array} an array of ever keys value
   */
  values: function(obj) {

    var values = [];

    for (var prop in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, prop)) {
        values.push(obj[prop]);
      }
    }

    return values;

  },

  /**
   * Divides an array into N child pieces
   * @param {Array} array a collection to divide
   * @param {Number} sliceNumber how many pieces to chop array into
   * @return {Array} the newly segmented collection
   */
  segment: function(array, sliceNumber) {
  
    if(sliceNumber === 0 || sliceNumber > array.length) {
      return array;
    }

    var i,
        segmentedArray = [],
        length = array.length / sliceNumber;
        
    for(i = 0; i < length; i++) {
  
      if(sliceNumber === 1) {
        segmentedArray.push([array[i]]);
      } else {
        if(array[i]) {
          segmentedArray.push(array.splice(0, sliceNumber));
        } else {
          segmentedArray.push(array);
        }
      }
    }
      
    return segmentedArray;
  
  },

  /**
   * Loops over a collection, calling a validator for each member.
   * Returns true if the validator ever returns truthy.
   * If a validator is not given, just check truthiness.
   * Think Ruby `.any?`
   * @param {Array|Object} collection
   * @param {function} validator
   * @returns {Boolean}
   */
  any: function(collection, validator) {

    var validValues = [];

    for(var prop in collection) {

      var current = collection[prop];

      if(Object.prototype.hasOwnProperty.call(collection, prop)) {

        // If a validator function is available
        if(validator) {
          if(validator(current)) {
            validValues.push(current);
          }
        // Otherwise, just check for truthiness
        } else {
          if(current) {
            validValues.push(current);
          } else {
            // We can bail out early if any value is false
            return false;
          }
        }

      }

    }

    return validValues.length > 0;

  },
  
  /**
   * Find the next index from any point of an array
   * If at last index, it will loop around to the front
   * @param collection {Array} a collection to find in
   * @param index {number} the starting index
   * @return {number} the next index from index
   */
  getNextIndex: function(array, index) {
    
    return (array[index++] ? index++ : 0)
    
  },
  
  /**
   * Find the prev index from any point of an array
   * If at first index, it will loop around to the back
   * @param collection {Array} a collection to find in
   * @param index {number} the starting index
   * @return {number} the prev index from index
   */
  getPrevIndex: function(array, index) {
    
    return (array[index--] ? index-- : 0)
    
  }

};