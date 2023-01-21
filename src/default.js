"use strict";
exports.__esModule = true;
exports.configuration = void 0;
var configuration = {
    paragraph: {
        onReturn: function (value) {
            return "<p>".concat(value.data.text, "</p>");
        }
    },
    header: {
        onReturn: function (value) {
            switch (value.data.level) {
                case 1:
                    return "<h1>".concat(value.data.text, "</h1>");
                case 2:
                    return "<h2>".concat(value.data.text, "</h2>");
                case 3:
                    return "<h3>".concat(value.data.text, "</h3>");
                case 4:
                    return "<h4>".concat(value.data.text, "</h4>");
                case 5:
                    return "<h5>".concat(value.data.text, "</h5>");
                case 6:
                    return "<h6>".concat(value.data.text, "</h6>");
                default:
                    return "<h1>".concat(value.data.text, "</h1>");
            }
        }
    }
};
exports.configuration = configuration;
