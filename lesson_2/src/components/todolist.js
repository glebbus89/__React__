import {useState} from "react";

function ToDoList() {
    const [inputText, setinputText] = useState("");
    const [arr,setArr] = useState(['Prod 1', 'Prod 2']);

    function clickHander() {
        if (!inputText.trim()) {
            return;
        }
        setArr([...arr, inputText]);
        setinputText('');
        }

    return (
        <>
            <label htmlFor="input"> Введите текст:</label>
            <input onChange={(event) => setinputText(event.target.value)}
            type="text" id='input' value={inputText} maxLength={20}>
            </input>
            <button onClick={clickHander}> Click to add</button>
            <ul>{arr.map((item) => (<li key={arr.indexOf(item)}>{item}</li>))}
            </ul>
        </>
    );
}


export default ToDoList;


