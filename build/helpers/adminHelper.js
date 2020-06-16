"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminHelper = void 0;
var DB_1 = require("../dataLayer/DB");
var mongoose_1 = require("mongoose");
var AdminHelper = /** @class */ (function () {
    function AdminHelper() {
    }
    AdminHelper.getEntity = function (entityType, field, value, skip, limit, exclude, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, err_1, error;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = {};
                        //having problem using regex with id this is a quik fix
                        if (field && value) {
                            if (field == "_id" && value.length == 24) {
                                filter[field] = mongoose_1.Types.ObjectId(value);
                            }
                            else if (parseInt(value)) {
                                filter[field] = value;
                            }
                            else {
                                filter[field] = { "$regex": value, "$options": "i" };
                            }
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, DB_1.DB.AdminModels[entityType].find(filter, {}, { skip: parseInt(skip), limit: parseInt(limit) }, function (err, entities) { return __awaiter(_this, void 0, void 0, function () {
                                var error, totalCount;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (err) {
                                                error = new Error("ADMIN ERROR: something went wrong in DB.AdminModels[entityType].find");
                                                res.status(500);
                                                return [2 /*return*/, next(error)];
                                            }
                                            return [4 /*yield*/, DB_1.DB.AdminModels[entityType].countDocuments(filter, function (err, count) {
                                                    if (err) {
                                                        res.status(500);
                                                        var error = new Error("ADMIN ERROR: DB.AdminModels[entityType].countDocuments");
                                                        return next(error);
                                                    }
                                                    totalCount = count;
                                                    // if we found something send it to client
                                                    if (totalCount > 0 && entities.length) {
                                                        res.status(200).send({ entities: entities, totalCount: totalCount, exclude: exclude });
                                                        // if we do not find something send just the fields to client
                                                    }
                                                    else {
                                                        var headerFields_1 = {};
                                                        Object.keys(DB_1.DB.AdminModels[entityType].schema.paths).forEach(function (field) {
                                                            headerFields_1[field] = field;
                                                        });
                                                        var headers = [headerFields_1];
                                                        res.status(200).send({ headers: headers, totalCount: totalCount, exclude: exclude });
                                                    }
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        res.status(500);
                        error = new Error("ADMIN ERROR: something went wrong in try catch");
                        return [2 /*return*/, next(error)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AdminHelper.updateEntity = function (entityType, entity, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                try {
                    DB_1.DB.AdminModels[entityType].findByIdAndUpdate(entity._id, { $set: entity }, { new: true }, function (err, entity) {
                        if (err) {
                            var error = new Error("something went wrong");
                            res.status(500);
                            next(error);
                        }
                        else if (!entity) {
                            var error = new Error("whoops cant find that " + entityType);
                            res.status(404);
                            next(error);
                        }
                        else {
                            console.log("updated " + entityType + ": " + entity);
                            res.send(entity);
                        }
                    });
                }
                catch (_b) {
                    error = new Error("something went wrong");
                    res.status(500);
                    next(error);
                }
                return [2 /*return*/];
            });
        });
    };
    return AdminHelper;
}());
exports.AdminHelper = AdminHelper;
//# sourceMappingURL=adminHelper.js.map