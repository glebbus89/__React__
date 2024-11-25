import { useContext, useState } from "react";
import classes from './Profile.module.css';
import { ThemeContext } from "../App";
import React from "react";

function Footer() {
    const theme = useContext(ThemeContext);
    const [now, setNow] = useState(new Date());

    setInterval(() => {
        setNow(new Date());
    }, 1000);

    return ( 
            <section className={theme === "light" ? `${classes.light}` : `${classes.dark}`} >
           
                <h2>Footer</h2>
                <p>Time: {now.toLocaleTimeString()}</p>
            </section>
        
    );
}

export default Footer;




