let standardizeInput = function (collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}

let myEach = function (collection, callback) {
    let newCollection = standardizeInput(collection);

    for (let i=0; i<newCollection.length; i++) {
        callback(newCollection[i]);
    }
    return collection;
}

let myMap = function (collection, callback) {
    let newCollection = standardizeInput(collection);

    let newArray = [];

    for(let i=0; i<newCollection.length; i++) {
        newArray.push(callback(newCollection[i]));
    }
    return newArray
}

let myReduce = function (collection, callback,acc) { 
    let newCollection = standardizeInput(collection);

    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }
    const len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }

let myFind = function (collection, predicate) {
    let newCollection = standardizeInput(collection);

    for (let i=0; i<newCollection.length; i++) {
        if (predicate(newCollection[i])){
            return newCollection[i]
        }
    }
    return undefined;
}

let myFilter = function (collection, predicate) {
    let newCollection = standardizeInput(collection);

    let newArray = [];

    for (let i=0; i<newCollection.length; i++) {
        if (predicate(newCollection[i])){
            newArray.push(newCollection[i]);
        }
    }
    return newArray;
}

let mySize = function(collection) {
    let newCollection = standardizeInput(collection);
    return newCollection.length;
}

let myFirst = function (array, int) {
    return (int) ? array.slice(0, int) : array[0];
}

let myLast = function (array, int) {
    return (int) ? array.slice(array.length-int,array.length) : array[array.length-1];
}

let mySortBy = function (array, callback) {
    let newArray = [...array];
    return newArray.sort(function(a,b) {
        if (callback(a)>callback(b)) {
            return 1;
        } else if (callback(b)>callback(a)) {
            return -1;
        } return 0;
    });
}

let unpack = function(receiver, array) {
    for (let value of array) {
      receiver.push(value);
    }
  }

let myFlatten = function(collection, shallow, newArray=[]) {
    if(shallow) {
        for (let value of collection) {
            Array.isArray(val) ? unpack(newArray, value) : newArray.push(value);
        }
    } else {
        for (let value of collection) {
            if (Array.isArray(value)) {
                myFlatten(value, false, newArray);
            } else {
                newArray.push(value);
            }
        }
    }
    return newArray;
}

let myKeys = function (object) {
    let keys = [];

    for(let key in object) {
        keys.push(key);
    }
    return keys;
}

let myValues = function (object) {
    let values = [];

    for(let key in object) {
        values.push(object[key]);
    }
    return values;
}