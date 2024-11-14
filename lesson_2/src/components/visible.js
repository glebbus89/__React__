import { useState } from "react";

// Кнопка показать или скрыть текст
function Show ({data}) {
    const [block, setBlock] = useState(); 
    // В useState можно передать true/false;
    const blockShow = () => {
        setBlock(!block)
    }
    return (
        <div>
            <button onClick={blockShow}>Показать или скрыть</button>
            <p style = {{display: block ? 'block' : 'none'}}> {data}</p>

        </div>
      );
}

export default Show
