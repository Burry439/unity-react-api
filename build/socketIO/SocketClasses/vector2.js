"use strict";
module.exports = /** @class */ (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x,
            this.y = y;
    }
    Vector2.prototype.magnitude = function () {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    };
    Vector2.prototype.normalized = function () {
        var mag = this.magnitude();
        return new Vector2(this.x / mag);
    };
    return Vector2;
}());
//# sourceMappingURL=vector2.js.map