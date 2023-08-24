import { Expression } from "./expression.interface"
export interface Tree {
    initial:Expression,
    body:Array<Expression>,
    end:Expression
}