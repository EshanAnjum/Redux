import {Increment} from "./ActionTypes"
import { Decrement } from "./ActionTypes";



//Initial state of our application.
export const initialState = {
   counter: 0 
  };


//Reducer 
export const CounterReducer = (state = initialState,action) =>{
  console.log("Inside reducer");
  switch (action.type){

    case Increment :  return {...state,counter:state.counter + 1};
    case Decrement :  return {...state,counter :state.counter -1};
    default :return state;
  }
}

