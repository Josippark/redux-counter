import {INCREMENT,DECREMENT}  from './ActionType';

export function increment (){
    return {
        type:INCREMENT
    };
}

export function decrement (){
    return {
        type:DECREMENT
    };
}


