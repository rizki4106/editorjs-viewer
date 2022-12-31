import { Block, Elements } from './type';
/**
 * This class used to turn json data to HTML data with the following steps
 * 1. take the block data that returned from editorjs value
 * 2. take the configuration ( criteria how should we turn your json data to HTML ) -> optional
 * 3. if configuration sent then update the existing configuration with the new one check user method `checkConfig`
 * 4. loop to all of the item block
 * 5. parse to html using `toHTML()` method then return it to the user
 */
declare class Parser {
    protected result: string[];
    protected conf: Elements;
    constructor(conf: Elements);
    /**
     * Check if user sending the configuration for the elements
     * if user send it then update the existing configuration with the new one
     * but if user doens't send it just let it as what it is
     * @param {Elements} conf -> configuration for parsing data from json to HTML tag
     */
    protected checkConfig(conf: Elements): void;
    /**
     * parsing json data to HTML tag
     * @param {Block[]} blocks -> array of block from return value editor.js
     * @param {Elements} config -> tag configuration see the docummentation
     */
    toHTML(blocks: Block[], config?: Elements): string;
}
export default Parser;
