"use strict";
//import generalHelpers from "./generalHelpers"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var generalHelpers_1 = __importDefault(require("./generalHelpers"));
var queryStringHelpers = {
    normalizeQueryStringParams: function (queryParams) {
        console.log(JSON.parse(queryParams));
        try {
            require("../dataLayer/models/" + queryParams.model);
        }
        catch (e) {
            console.log("e.code" + e.code);
            throw new Error("Model does not exist");
        }
        queryParams.filters = this.normalizeQueryStringFilter(queryParams.filters);
        if (generalHelpers_1.default.isNullOrEmpty(queryParams.fields)) {
            queryParams.fields = "";
        }
        if (generalHelpers_1.default.isNullOrEmpty(queryParams.skip) || typeof (queryParams.skip) != "number") {
            queryParams.skip = 0;
        }
        if (generalHelpers_1.default.isNullOrEmpty(queryParams.limit) || typeof (queryParams.skip) != "number") {
            queryParams.limit = 0;
        }
        return queryParams;
    },
    normalizeUpdateAndDeleteQueryStringParams: function (queryParams) {
        queryParams = JSON.parse(queryParams);
        try {
            require("../dataLayer/models/" + queryParams.model);
        }
        catch (e) {
            console.log("e.code" + e.code);
            throw new Error("it dont exist");
        }
        queryParams.filters = this.normalizeUpdateAndDeleteQueryStringFilter(queryParams.filters);
        return queryParams;
    },
    normalizeUpdateAndDeleteQueryStringFilter: function (filter) {
        if (generalHelpers_1.default.isNullOrEmpty(filter)) {
            throw new Error("invalid filter");
        }
        else if (typeof (filter) != "object") {
            throw new Error("invalid filter");
        }
        return filter;
    },
    normalizeQueryStringFilter: function (filter) {
        if (generalHelpers_1.default.isNullOrEmpty(filter)) {
            return filter = {};
        }
        else if (typeof (filter) != "object") {
            throw new Error("invalid filter");
        }
        return filter;
    }
};
exports.default = queryStringHelpers;
//# sourceMappingURL=queryStringHelpers.js.map