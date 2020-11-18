let val = ''
const list = (param) => {
    val = ''
    val += `<ol>`
    param.forEach(items => {
        val += `<li>${items}</li>`
    })
    val += `</ol>`

    return val
}

module.exports = list