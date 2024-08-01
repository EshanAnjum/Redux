import React from "react";
import { useSelector } from "react-redux";




const Counter = () =>{
  

    const Count = useSelector(state => state.counter)
    
    // console.log("hello from counter component" , Count);
 
    return(
        
        <div>
            <h2>{Count}</h2>
        </div>
    )
}


export default Counter;