
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';




function TemperatureConverter() {

    const [celcius, setCelcius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    
    const changeCelcius = (value) => {
        const converted = (value * 9/5) + 32;
        setFahrenheit(converted || '');
    };
    const changeFahrenheit = (value) => {
        const converted = (value - 32) * 5/9;
        setCelcius(converted || '');
    }


    return ( 
        <div>
            <h1>Конвертер температур</h1>
            <TextField 
                label="Температура в Цельсиях"
                variant="filled"
                value={celcius}
                onChange={(e) => setCelcius(e.target.value)} 
                // onBlur={(e) => changeCelcius(e.target.value)}
                margin='normal'
            />
            <TextField 
                label="Температура в Фаренгейтах"
                variant="filled"
                value={fahrenheit}
                onChange={(e) => setFahrenheit(e.target.value)}
                // onBlur = {(e) => { const converted = (e.target.value - 32) * 5/9;
                // setCelcius(converted || '');
                // }}
                margin='normal'
                />
            <Button
                variant="contained"
                color='primary'
                onClick={() => {
                    if (celcius) {
                        changeCelcius(celcius);
                    }
                    else if (fahrenheit) {
                        changeFahrenheit(fahrenheit);
                    }
                 }} 
                style={{ marginTop: '25px' }}
            >
                Конвертировать
            </Button>
        </div>
    );
}

export default TemperatureConverter;