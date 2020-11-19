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
        switch(items.type){
            case "paragraph":
                value += paragraph(items.data.text)
            case "link":
                value += link(items.data.link)
            case "header":
                value += head(items.data.text, items.data.level)
            case "list":
                value += list(items.data.items)
            case "raw":
                value += raw(items.data.html)
            case "quote":
                value += quote(items.data.caption, items.data.text)
            case "checklist":
                value += checklist(items.data.items)
            case "embed":
                value += embed(items.data)
            default:
                value += ''
        }
    })
    return value
}
module.exports = parser