import { useEffect, useState } from "react";

// компонент, который отображает таймер, увеличивающийся на 1
// каждую секунду. Использовать useEffect для установки и очистки интервала

function Timer_new() {
    const [time, setTime] = useState(0);

        useEffect(() => {
            const timer = setInterval(() => {
                setTime(prevTime => prevTime +1);
            }, 1000);
                
            return () => {
                clearInterval(timer);
            }
        }, [])
    return ( 
        <div>
            <p> Таймер: {time}</p>
        </div>
    );
}
export default Timer_new;

    
