const image = (param) => {
    return `<img src='${param.file.url}' alt='${param.caption}'/>`
}
module.exports = image