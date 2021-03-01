let result = ''
const table = (items) => {
    let table_header = ''
    let table_body = ''
    // get the header of table
    items.data.content[0].forEach(head => {
        table_header += `<th>${head}</th>`
    })
    // get the body of table
    for(let i = 1; i < items.data.content.length; i++){
        table_body += `<tr>`
        items.data.content[i].forEach(body => {
            table_body += `<td>${body}</td>`
        })
        table_body += `</tr>`
    }
    result += `
<table class='table table-bordered mt-2'>
    <thead class='thead-dark'>
        <tr>
            ${table_header}
        <tr>
    </thead>
    <tbody>
        ${table_body}
    </tbody>
</table>
    `

    return result
}

module.exports = table