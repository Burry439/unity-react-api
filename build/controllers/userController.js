"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const router = require('express').Router()
var dataAccess_1 = __importDefault(require("../dataLayer/dataAccess"));
var queryStringHelpers_1 = __importDefault(require("../helpers/queryStringHelpers"));
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/users', function (req, res) {
    var queryParams = req.query;
    //const queryParams = queryStringHelper.normalizeQueryStringParams(req.query.queryParams)
    dataAccess_1.default.get(req.query.model, req.query.filter).then(function (result) {
        return res.send(result);
    });
});
router.post('/users', function (req, res) {
    console.log(req.body);
    var model = req.body.model;
    var entity = req.body.entity;
    console.log("here");
    dataAccess_1.default.post(model, entity).then(function (result) {
        return res.send(result);
    });
});
router.put('/users', function (req, res) {
    var queryParams = queryStringHelpers_1.default.normalizeUpdateAndDeleteQueryStringParams(req.query.queryParams);
    var fieldsToUpdate = req.body.fields;
    dataAccess_1.default.update(queryParams.model, queryParams.filters, fieldsToUpdate).then(function (result) {
        return res.send(result);
    });
});
router.delete('/users', function (req, res) {
    var queryParams = queryStringHelpers_1.default.normalizeUpdateAndDeleteQueryStringParams(req.query.queryParams);
    dataAccess_1.default.delete(queryParams.model, queryParams.filters).then(function (result) {
        return res.send(result);
    });
});
exports.default = router;
//# sourceMappingURL=userController.js.map