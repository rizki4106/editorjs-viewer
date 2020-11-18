# editor-js-parser
```bash
npm install @son_xx/editor-js-parser
```
editor-js-parser is tool to convert json data to html from [editorjs](https://editorjs.io/).
<br/>
suported component
1. checklist
2. embed
3. head
4. link
5. list
6. paragraph
7. quote
8. raw

for styling **quote** and **checklist** we use bootstrap so make sure you have install bootstrap on your project

## example
```javascript
import Parser from '@son_xx/editor-js-parser'
const data = {
    time: 1605667704216, 
    version: "2.19.0"}
    blocks: Array(1)
        0:{ 
            data: {text: "header example",level: 2}
            type: "header"
        }     
    time: 1605667704216
    version: "2.19.0"
}

const result = Parser(data.blocks)
console.log(result)
// outout
// <h2>header example</h2>
```
LICENCE MIT
