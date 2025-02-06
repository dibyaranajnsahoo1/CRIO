import { useState } from "react";

export const Counter = () =>{

    const [count, updateCount] = useState(0);

    const increment = () =>{
        updateCount(count + 1);

    }

    const decrement = () =>{

        updateCount(count - 1)

    }

    return(
        <div>
            <h1>count : {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )


}