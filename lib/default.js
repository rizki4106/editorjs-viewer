"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const configuration = {
    paragraph: {
        onReturn(value) {
            return `<p>${value.data.text}</p>`;
        },
    },
    header: {
        onReturn(value) {
            switch (value.data.level) {
                case 1:
                    return `<h1>${value.data.text}</h1>`;
                case 2:
                    return `<h2>${value.data.text}</h2>`;
                default:
                    return '';
            }
        },
    }
};
exports.configuration = configuration;
