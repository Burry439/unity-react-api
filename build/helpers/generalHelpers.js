"use strict";
var generalHelpers = {
    isNullOrEmpty: function (object) {
        if (object === null || object === "" || object === undefined) {
            return true;
        }
        else {
            return false;
        }
    },
    isEmptyArray: function (array) {
        if (Array.isArray(array) && array.length == 0) {
            return true;
        }
        else {
            return false;
        }
    },
    isArrayOfObjects: function (array) {
        var isArrayOfObjects = true;
        array.forEach(function (element) {
            if (typeof (element) != "object") {
                isArrayOfObjects = false;
            }
        });
        return isArrayOfObjects;
    }
};
module.exports = generalHelpers;
//# sourceMappingURL=generalHelpers.js.map