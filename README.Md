# Welcome

`editorjs-viewer` is package to turn `JSON` data to `HTML` from [editor.js](https://editorjs.io/) dynamicly and extremly easy to use.

by default this package can parse the following data:

1. paragraph
2. header
3. ...whatever you want you can add more

not too many right, it's because we want to provide you a `dynamic` return **easily** and it's up to you whatever data you want to return you can do that it's absolutly posible, by doing that you can parse any json data to any html tag.


## Installation

```bash
npm install editorjs-viewer
```
## Usage
#### 1. Using the default configuration
```jsx
import {parser} from 'editorjs-viewer'

// example data from editor.js
const example = {
    blokcs: [
        {
            "id": "4VO1-bae5v",
            "type": "header",
            "data": {
                "text": "Editor.js",
                "level": 1
            }
        },
        {
            "id": "uF5EPBJ50g",
            "type": "paragraph",
            "data": {
                "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
            }
        },
    ]
};

// turn json to html
const result = parser.toHTML(example.blocks)
console.log(result)
```

#### 2. Using custom configuration

In this example below, i wan't to turn `image` block to `html` tag but in the default configuration there's no configuration for returning image block as html, so here's the benefit by using this package you can use custom configuration look at example below

```jsx
import {parser} from 'editorjs-viewer'

// example from editor js
const examples = {
    blokcs: [
        {
            "id": "4VO1-bae5v",
            "type": "header",
            "data": {
                "text": "Editor.js",
                "level": 1
            }
        },
        {
            "id": "uF5EPBJ50g",
            "type": "paragraph",
            "data": {
                "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
            }
        },
        {
            "id" : "mom8ixFY4s",
            "type" : "image",
            "data" : {
                "file" : {
                    "url" : "https://codex.so/public/app/img/external/codex2x.png"
                },
                "caption" : "",
                "withBorder" : false,
                "stretched" : false,
                "withBackground" : false
            }
        }
    ]
};

// define custom configuration
const conf = {

    // naming must be in lower case and can not be combined
    image : {
        onReturn(value){
            // value.data.file.url is the value from editor js image look at here https://github.com/editor-js/image
            // if you want to use another tag such as link, iframe or etc then follow their return rules
            return `<img src='${value.data.file.url}'`/>
        }
    },
    // you can add more e.g iframe, code, raw and etc
}

// passing the custom configuration as the second argument
const result = parser.toHTML(example.blocks, conf)
console.log(result)
```
