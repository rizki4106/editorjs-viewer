const {
    paragraph,
    link,
    head,
    list,
    quote,
    checklist,
    image,
    table,
    code,
    raw,
    embed,
    warning
} = require('./component')

let value = ''

const parser = (val) => {
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
                    value += image(items.data)
                    break;
                case "table":
                    value += table(items)
                    break;
                case "code":
                    value += code(items)
                    break;
                case "warning":
                    value += warning(items.data)
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