import { useState } from "react";
import Content from "./content";


function TemeSwitcher() {
    const [theme, setTheme] = useState('light');

    function switchTheme () {
        if (theme === 'light') {
            setTheme('dark');
            document.querySelector('body').style.backgroundColor = 'black';
        } else {
            setTheme('light');
            document.querySelector('body').style.backgroundColor = 'white';
        }
    }
    return ( 
        <div>
            <button onClick={switchTheme}>Переключить тему</button>
            <Content themeColor = {theme}/>
        </div>
    );
}

export default TemeSwitcher;