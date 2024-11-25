
import './App.css';
import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from "react";
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Counter from './Counter';








// // Создаем контекст

// const MessgeContext = createContext();

// // Компонент GrandGrandGrandChild использует контекст

// function GrandGrandGrandChild() {
//   // Используем useContext для доступа к контексту
//     const message = useContext(MessgeContext);
//   return <span>{message}</span>;
// }

// // Компонент GrandParent устанавливает контекст
// // function GrandParent() {
// //   return (
// //     <MessgeContext.Provider value="Hello from the top Context!">
// //       <Parent />
// //     </MessgeContext.Provider>
// //   );
// // }

// // Компонент Parent передает контекст через пропсы
// function Parent() {
//   return <Child/>;
// }

// // Компонент Child передает контекст дальше
// function Child() {
//   return <GrandChild/>;
// }

// // Компонент GrandChild передает контекст на последний уровень
// function GrandChild() {
//   return <GrandGrandGrandChild/>;
// }

// EX2
// Шаг 1: Создаем контекст
// const ThemeContext = createContext();

// // Компонент, использующий конетекст
//   const ThemedButton = () => {
//     // Шаг 2: Используем useContext для доступа к контексту
//     const theme = useContext(ThemeContext);
//     return <button style={{ background: theme.background, color: theme.foreground }}>Themed Button</button>;
//   }

// // Компонент, который устанавливает контекст
//   const App = () => {
//     // Шаг 3: Определяем состояние, которое будет передаваться через контекст
//     const [theme, setTheme] = useState
//     ({ background: 'lightgray',
//       foreground: 'black' });

//       // Шаг 4: Оборачиваем компоненты, которые должны использовать контекст, в провайдер контекста
//     return (
//       <ThemeContext.Provider value={theme}>
//         <ThemedButton />
//         <button 
//           onClick={() => 
//             setTheme
//             ({ background: 'black', foreground: 'white' })
//           }
//         >Сменить тему
//         </button>
//       </ThemeContext.Provider>
//     );
// //   } 

//   // EX3
//   // Создаем контексты для темы и заметок

// const ThemeContext = createContext();
// const NoteContext = createContext();

// // Создаем пользовательские хуки для удобства использования контекстов

// const useTheme = () => useContext(ThemeContext);
// const useNotes = () => useContext(NoteContext);

// // Компоненты, отображающий список заметок

// const NotesList = () => {
//   const { notes } = useNotes();
//   return (
//     <ul>
//       {notes.map((note, index) => (
//         <li key={index}>{note}</li>
//       ))}
//     </ul>
//   );
// };


// // Компонент, позволяющий добавлять заметки

// const NoteInput = () => {
//   const [inputValue, setInputValue] = useState('');
//   const { addNote } = useNotes();
  
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddNote = () => {
//     addNote(inputValue);
//     setInputValue('');
//   };


//   return (
//     <div>
//       <input value={inputValue} onChange={handleInputChange} />
//       <button onClick={handleAddNote}>Добавить</button>
//     </div>
//   )
// };

//   // Компонент для переключения темы

//   const ThemeToggle = () => {
//     const {theme, toggleTheme} = useTheme();
//     return (
//       <button onClick={toggleTheme}>Нажми чтобы переключить на {theme === 'light' ? 'темную' : 'светлую'} тему</button>
//     );
//   };

//   const App = () => {
//     const [theme, setTheme] = useState('light');
//     const [notes, setNotes] = useState(['Элемент списка 1', 'Элемент списка 2']);
//     const toggleTheme = () => {
//       setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
//     };
    
//     const addNote = (note) => {
//       setNotes((prevNotes) => [...prevNotes, note]);
//     };
    
//     return (
//       <ThemeContext.Provider value={{ theme, toggleTheme }}>
//         <NoteContext.Provider value={{ notes, addNote }}>
//           <div className="content" style={{color: theme === 'light' ? 'black' : 'white', background: theme === 'light' ? 'white' : 'black'}}>
//           <h1>Список</h1>
//           <ThemeToggle />
//           <NotesList />
//           <NoteInput />
//           </div>
//         </NoteContext.Provider>
//       </ThemeContext.Provider>
//     );
//   };
  


//   // HOC компоненты высшего порядка

//   // НОС для добавления стилей к компоненту

//   const withStyle = (WrappedComponent, styles) => {
//     return (props) => {
//     const newProps = {...props, styles };
//     return <WrappedComponent {...newProps} />;
//   }; 
// }

// const Button = ({ styles}) => {
//   return (
//     <button style={styles}>Click me</button>
//   );
// };

// // Используем HOC для добавления стилей к компоненту Button


// const StyledButton = withStyle(Button, { background: 'blue', color: 'white' });
// const StyledButton2 = withStyle(Button, { background: 'green', color: 'white' });

// // HOC для добавления счетчика ккомпоненту

// const withCounter = (WrappedComponent) => {
//   return (props) => {
//     const [count, setCount] = useState(0);

//     const incrementCount = () => {
//       setCount(count + 1);
//     };

//     const newProps = {...props, count, incrementCount };
//     return <WrappedComponent {...newProps} />;
//   };
// };


// // Компонент, который будет обернут с счетчиком и другими пропсами

// const ClickCounter = ({ count, incrementCount, message }) => {
//   return (
//     <div>
//       <p>{message} {count}</p>
//       <button onClick={incrementCount}>Click me</button>
//       <p>Clicked {count} times</p>
//     </div>
//   )
// }

// const ClickCounterWithCounterAndProps = withCounter(ClickCounter);

// const App = () => {
//   return (
//     <div>
//       <ClickCounterWithCounterAndProps message="Счетчик кликов:" />
//       <ClickCounterWithCounterAndProps message="Счетчик новых кликов кликов:" />
//     </div>
//   );
// }
  





// const App = () => {
//   return (
//     <div>
//       <StyledButton />
//       <StyledButton2 />
//     </div>
//   );
// }
  

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}









// function App() {
//   return (
//     <div className="App">
//       <h1>Пример использования React.Context</h1>
//       <GrandParent/>
//     </div>
//   );
// }

export default App;
