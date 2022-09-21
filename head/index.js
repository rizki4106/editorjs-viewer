const head = (param, type) => {
    const heading = {
        1 : `<h1>${param}</h1>`,
        2 : `<h2>${param}</h2>`,
        3 : `<h3>${param}</h3>`,
        4 : `<h4>${param}</h4>`,
        5 : `<h5>${param}</h4>`,
        6 : `<h6>${param}</h6>`,
    }
    return heading[type]
}

module.exports = head