export interface Token {
    isSingle : boolean,
    value: string | Array<Token>
}