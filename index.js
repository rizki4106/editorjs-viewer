const {
    paragraph,
    link,
    head,
    list,
    quote,
    checklist,
    Image
} = require('./component')
const embed = require('./embed')
const raw = require('./raw')

let value = ''

const parser = (val) => {
    console.log(val)
    value = ''
    try{
        val.forEach((items) => {
            switch(items.type){
                case "paragraph":
                    value += paragraph(items.data.text)
                    break;
                case "link":
                    value += link(items.data.link)
                    break;
                case "header":
                    value += head(items.data.text, items.data.level)
                    break;
                case "list":
                    value += list(items.data.items)
                    break;
                case "raw":
                    value += raw(items.data.html)
                    break;
                case "quote":
                    value += quote(items.data.caption, items.data.text)
                    break;
                case "checklist":
                    value += checklist(items.data.items)
                    break;
                case "embed":
                    value += embed(items.data)
                    break;
                case "image":
                    value += Image(items.data)
                    break;
                default:
                    value += ''
            }
        })
    }catch(err){
        // 
    }
    return value
}
module.exports = parser