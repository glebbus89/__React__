import { useContext } from "react";
import { UserContext } from "../App";
import React from "react";


function Header() {
    const userName = useContext(UserContext);
    return ( 
        <section>
            <h1>Hello {userName}</h1>
        </section>
    );
}

export default Header;