"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parser = void 0;
// default value
const default_1 = require("./default");
/**
 * This class used to turn json data to HTML data with the following steps
 * 1. take the block data that returned from editorjs value
 * 2. take the configuration ( criteria how should we turn your json data to HTML ) -> optional
 * 3. if configuration sent then update the existing configuration with the new one check user method `checkConfig`
 * 4. loop to all of the item block
 * 5. parse to html using `toHTML()` method then return it to the user
 */
class Parser {
    constructor(conf) {
        this.result = [];
        this.conf = {};
        this.conf = conf;
    }
    /**
     * Check if user sending the configuration for the elements
     * if user send it then update the existing configuration with the new one
     * but if user doens't send it just let it as what it is
     * @param {Elements} conf -> configuration for parsing data from json to HTML tag
     */
    checkConfig(conf) {
        // loop to all of the configuration that user send
        Object.keys(conf).forEach((key) => {
            // if user send new configuration then save it to conf variable
            // if user send configuration but already exists then update it with the new one
            this.conf[key] = conf[key];
        });
    }
    /**
     * parsing json data to HTML tag
     * @param {Block[]} blocks -> array of block from return value editor.js
     * @param {Elements} config -> tag configuration see the docummentation
     */
    toHTML(blocks, config) {
        // if user send argument config then update the existing config with the new one
        if (config !== undefined) {
            this.checkConfig(config);
        }
        // loop to all of the editor block
        blocks.forEach((items) => {
            this.result.push(this.conf[items.type].onReturn(items));
        });
        // return parsed html to the user
        return this.result.join("");
    }
}
const parser = new Parser(default_1.configuration);
exports.parser = parser;
