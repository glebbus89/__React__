import { useState } from "react";

// Создать компонент TextInput, который содержит текстовое
// поле ввода и отображает введённый текст под ним в реальном
// времени.


function TexInput () {
    const [text, setText] = useState();

    const getText = ({target}) => {
        setText(target.value);
    };

    return ( 
        <div>
            <input type="text" value={text} onChange={getText}/>
            <p>Вы ввели: {text}</p>
        </div>
    );
}

export default TexInput;