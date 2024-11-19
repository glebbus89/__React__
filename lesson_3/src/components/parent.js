import { useState  } from "react";
import Button from '@mui/material/Button';
    
function ParentCounter() {
    
        const [count, setCount] = useState(0);

        const upCount = () => {
            setCount(count + 1)
        }

    return (
        <div>
            <h2>Родитель:</h2>
            <ChilsCount count={count}/>
            <Button onClick={upCount} variant="contained">Плюс 1</Button>
            
        </div>


    );
}

function ChilsCount ({count}) {
    return ( 
        <div>
            <p>Счетчик Внутри</p>
            <p>Значение счетчика {count}</p>
        </div>
    );
}

export default ParentCounter ;