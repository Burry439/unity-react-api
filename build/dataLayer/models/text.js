"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var mongoose_1 = require("mongoose");
;
var Text = /** @class */ (function () {
    function Text() {
        var schema = new mongoose_1.Schema({
            language: { type: String, required: true },
            pageName: { type: String, required: true },
            key: { type: String, required: true },
            value: { type: String, required: true }
        });
        this._model = mongoose_1.model('Text', schema);
    }
    Object.defineProperty(Text.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}());
exports.Text = Text;
//# sourceMappingURL=text.js.map