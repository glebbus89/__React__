import { useEffect, useRef } from "react";

// Поле ввода

const RefExample = () => {
    const inputRef = useRef(null);

const handleClick = () => {
    inputRef.current.focus();
};

useEffect(() =>{
    inputRef.current?.focus();
}, [])

return(
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Фокус</button>
    </div>
)


    
}
export default RefExample ;



