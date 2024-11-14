import {useState} from 'react';

// Счетчик
function Counter() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1)
        // Это второй способ счетчика когда выносим функцию  
    }

    return (
        <div>
            <span>{count}</span>
            {/* <button onClick={() => {setCount(prevstate => ++prevstate)}}>click +1</button>  Это первый способ, без выноса функции*/}
            <button onClick={updateCount}>click +1</button> 
             {/*"Это второй способ счетчика, работают одинаково"  */}

        </div>
    );
}

export default Counter;