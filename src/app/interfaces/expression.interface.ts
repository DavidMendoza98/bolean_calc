import { Token } from "./token.interface";
import { Rule } from "./Rule.interface";
export interface Expression {
    tokens: Array<Token>,
    rules : string | Rule | Array<Rule>
}