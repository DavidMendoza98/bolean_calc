import { Rule } from "./Rule.interface";

const r10:Rule = {
    pattern:[
        { 
          isSingle : true,
          value: 'A'
        },
        { 
            isSingle : true,
            value: '+'
        },
        { 
            isSingle : false,
            value: [
                {
                    isSingle : true,
                    value: 'A'
                },
                {
                    isSingle : true,
                    value: 'B'
                }
            ]
        },
    ],
    output:{
        isSingle : true,
        value: 'A'
    },
    identifier:'Regla_10'
}

export default  {
    r10,
}