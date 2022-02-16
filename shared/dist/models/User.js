"use strict";
exports.__esModule = true;
exports.userSchema = void 0;
var joi_1 = require("@hapi/joi");
require("joi-extract-type");
exports.userSchema = joi_1["default"].object().keys({
    id: joi_1["default"].string().uuid().required(),
    name: joi_1["default"].string().required()
});
//# sourceMappingURL=User.js.map