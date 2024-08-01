import {Increment} from "./ActionTypes"
import {Decrement} from "./ActionTypes"



 export const Increment_Count = () =>{
    return{
        type: Increment
    }
}


 export const Decrement_Count = () =>{
    return{
        type: Decrement
    }
}

