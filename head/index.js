let val = ''
const head = (param, type) => {
    val = ''
    if(type === 1){
        val += `<h1>${param}</h1>`
    }else if(type === 2){
        val += `<h2>${param}</h2>`
    }else if(type === 3){
        val += `<h3>${param}</h3>`
    }else if(type === 4){
        val += `<h4>${param}</h4>`
    }else if(type === 5){
        val += `<h5>${param}</h4>`
    }else{
        val += `<h6>${param}</h6>`
    }
    return val
}

module.exports = head