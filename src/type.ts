// define bloc data type
type Block = {
    readonly id? : string
    type : string
    data? : any
}


// define how is the data look loke that must return to user
interface ReturnValue {
    onReturn(value : Block) : string
}

// define list of elements e.g paragraph, header and etc
type Elements = {
    [type : string] : ReturnValue
}

export {Block, ReturnValue, Elements}