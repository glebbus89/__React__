import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';






function ToDoList() {
    const [tasks, setTasks] = useState([]);

    const printTask = () => {
        const task = document.querySelector('#task').value;
        if (task !== '') {
            setTasks([...tasks, task]);
            document.querySelector('#task').value = '';
        }
    };
    
    return ( 
        <div>
            <h1>Список задач</h1>
            <TextField 
                id='task'
                label="Введите задачу"
                variant="filled"
                margin='normal'
            />
            <Button
                variant="contained"
                color='primary'
                onClick={printTask}
                style={{ marginTop: '25px' }}
            >
                Добавить в список
            </Button>
            <List style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {tasks.map((task, index) => (
            <ListItem
            style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                justifyContent: "space-between",
            }}
            key={index}>
            {task}
            <IconButton
                aria-label="delete"
                size="small"
                onClick={() => {
                setTasks(tasks.filter((e, i) => i !== index));
                }}>
            <DeleteIcon fontSize="inherit" />
            </IconButton>
            </ListItem>
            ))}
            </List>
        </div>
    );
}

export default ToDoList;