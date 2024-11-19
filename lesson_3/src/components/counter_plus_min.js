import { useState } from "react";

function Counter() {

   const [count, setcount] = useState(0);

   const upCount = () => {
    setcount(count + 1)
   }

   const downCount = () => {
    if (count === 0)
        return;
    setcount(count - 1)
   }


    return ( 
        <div>
            <span>{count}</span>
            <button onClick={upCount}>Увеличение значения на 1</button>
            <button onClick={downCount} >Уменьшение значения на 1</button>


        </div>
    );
}

export default Counter;