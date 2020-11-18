let val = ''
const quote = (caption, text) => {
    val = ''
    val += `<blockquote class="blockquote">
            ${text}
            <footer class="blockquote-footer">${caption}</footer>
            </blockquote>
            `
    return val
}

module.exports = quote
