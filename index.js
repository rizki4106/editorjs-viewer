"use strict";
exports.__esModule = true;
exports.parser = void 0;
// load default configuration
var default_1 = require("./lib/default");
// 
var parser_1 = require("./src/parser");
var parser = new parser_1["default"](default_1.configuration);
exports.parser = parser;
