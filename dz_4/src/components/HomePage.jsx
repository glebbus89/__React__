import { Link } from "react-router-dom";

function HomePage () {


    return (  
        <div>
            <h1>Добро пожаловать на наш сайт</h1>
            <Link to="/about">О нас</Link>
        </div>

    );
}

export default HomePage ;