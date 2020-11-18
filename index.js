const {
    paragraph,
    link,
    head,
    list,
    quote,
    checklist
} = require('./component')
const embed = require('./embed')
const raw = require('./raw')

let value = ''

const parser = (val) => {
    value = ''
    val.forEach((items) => {
        if(items.type === "paragraph"){
            value += paragraph(items.data.text)
        }else if(items.type === "link"){
            value += link(items.data.link)
        }else if(items.type === "header"){
            value += head(items.data.text, items.data.level)
        }else if(items.type === "list"){
            value += list(items.data.items)
        }else if(items.type === "raw"){
            value += raw(items.data.html)
        }else if(items.type === "quote"){
            value += quote(items.data.caption, items.data.text)
        }else if(items.type === "checklist"){
            value += checklist(items.data.items)
        }else if(items.type === "embed"){
            value += embed(items.data)
        }
    })
    return value
}
module.exports = parser