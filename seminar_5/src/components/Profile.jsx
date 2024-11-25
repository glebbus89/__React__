import { useContext } from "react";
import { ThemeContext } from "../App";
import classes from "./Profile.module.css";




function Profile() {
    const theme = useContext(ThemeContext);
    return (

        <section className={theme === "light" ? `${classes.light}` : `${classes.dark}`} >

            <h2>Profile</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci eligendi quos blanditiis odit ad placeat optio commodi necessitatibus earum cupiditate, maxime quo at sequi, esse ex hic. Laudantium, harum?
            </p>
        </section>
    );
}

export default Profile;


