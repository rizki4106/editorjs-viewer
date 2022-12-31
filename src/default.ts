import {ReturnValue, Elements} from './type'

const configuration : Elements = {
    paragraph : {
        onReturn(value) {
            return `<p>${value.data.text}</p>`
        },
    },
    header : {
        onReturn(value) {
            switch(value.data.level){
                case 1:
                    return `<h1>${value.data.text}</h1>`
                case 2:
                    return `<h2>${value.data.text}</h2>`
                case 3:
                    return `<h3>${value.data.text}</h3>`
                case 4:
                    return `<h4>${value.data.text}</h4>`
                case 5:
                    return `<h5>${value.data.text}</h5>`
                case 6:
                    return `<h6>${value.data.text}</h6>`
                default:
                    return `<h1>${value.data.text}</h1>`
            }
        },
    }
}

export {configuration}