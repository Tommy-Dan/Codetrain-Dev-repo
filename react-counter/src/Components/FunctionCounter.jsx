import React, {useState} from "react";

function FunctionCounter(){
    const [count, setCount] = useState(0)
   
    const handleIncrement = () => {
        setCount(count + 1 )
    } 
   
    const handleDecrement = () => {
        setCount(count - 1)
    }

    return(
        <>
            <h1>Function Counter:  {count}</h1>
            <button onClick={handleIncrement}>&#8593;</button>
            <button onClick={handleDecrement}>&#8595;</button>
        </>
    );
}
export default FunctionCounter;