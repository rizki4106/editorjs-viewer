const warning = (items) => {
    return `<figure id='figure'><figcaption>${items.title}</figcaption><p>${items.message}</p></figure>`
}

module.exports = warning