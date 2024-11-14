import { useEffect, useState } from "react";

// Функция обновления Времени

function Timer () {
    const [time, setTime] = useState(new Date());

        useEffect(() => {
            const timer = setInterval(() =>{
                setTime(new Date());
            }, 1000);

            return () => {
                clearInterval(timer);
            }
        }, [])
        // useEfect принимает 2 параметра 1 это функция что нужно сделать если хочу сделать в момент монтирования, то 
        // вторым действием ничего не передаю, если передаю props, то передаю []



    
    return ( 
        <div>
            <p>Время {time.toLocaleTimeString()}</p>
        </div>
     );
}

export default Timer ;