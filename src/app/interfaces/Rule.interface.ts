import { Token } from "./token.interface"
export interface Rule {
    pattern:Token | Array<Token>,
    output:Token | Array<Token>
    identifier:string
}