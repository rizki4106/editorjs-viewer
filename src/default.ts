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
                default:
                    return ''
            }
        },
    }
}

export {configuration}