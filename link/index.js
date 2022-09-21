const link = (param) => {
    const domain = param.link.split('/')
    const selected_domain = domain[2]

    return `
    <a href='${param.link}' class='linkTool'>
        <h4>${param.meta.title}</h4>
        <p>${param.meta.description}</p>
        <small>${selected_domain}</small>
    </a>`
}
module.exports = link