type Block = {
    readonly id?: string;
    type: string;
    data?: any;
};
interface ReturnValue {
    onReturn(value: Block): string;
}
type Elements = {
    [type: string]: ReturnValue;
};
export { Block, ReturnValue, Elements };
