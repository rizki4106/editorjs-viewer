# editorjs-viewer

```bash
npm install editorjs-viewer
```

editorjs-viewer is tool to convert json data to html from [editorjs](https://editorjs.io/).
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
9. table
10. code
11. warning

for styling **quote** and **checklist** we use bootstrap so make sure you have install bootstrap on your project

## example

```javascript
import { renderHTML } from 'editorjs-viewer'
const data = {
    time: 1605667704216,
    version: "2.19.0"
    blocks: [
        {
            data: {
                text: "header example",
                level: 2
            }
            type: "header"
        }
    ]
    time: 1605667704216
    version: "2.19.0"
}

const result = renderHTML(data.blocks)
console.log(result)
// outout
// <h2>header example</h2>
```

LICENCE MIT
