// /* eslint-disable no-unused-vars */
import "./App.css";
import Counter from "./components/counter";





// import { createContext, useState } from 'react';
// import Header from './components/Header';
// import Profile from './components/Profile';
// import Footer from './components/Footer';
// import React from "react";
// import { useState } from "react";
// import Loading from "./components/Loading";

// Задание 1 (тайминг 25 минут)
// ● Создайте контексты UserContext и ThemeContext с начальными
// значениями (например, имя пользователя: "Гость", тема: "светлая").
// ● Реализуйте компонент App:
// ○ Оберните дочерние компоненты в UserContext.Provider и
// ThemeContext.Provider.
// ○ Добавьте возможность изменения имени пользователя и
// темы через интерфейс пользователя.
// ● Создайте компоненты, использующие эти контексты:
// ○ Header должен отображать приветствие с именем
// пользователя.
// ○ Profile может показывать более детальную информацию о
// пользователе или просто использовать тему для стилизации.
// ○ Footer должен использовать тему для стилизации и,
// возможно, отображать копирайт с текущим годом.
// ● Добавьте возможность изменения темы и имени пользователя в
// интерфейсе, используя состояние в компоненте App и передавая
// функции для изменения через контекст.



// export const UserContext = createContext("Guest");
// export const ThemeContext = createContext("light");

// function App() {
//   const [theme, setTheme] = useState('light');
//   const [userName, setUserName] = useState('Guest');

//   function changeUserName(e) {
//     let newUserName = e.target.closest('div').querySelector('input').value;
//     setUserName(newUserName);
//     newUserName = '';
//   }

//   function toggleTheme() {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   }

//   return (
    
//       <ThemeContext.Provider value={theme}>
//         <UserContext.Provider value={userName}>
//           <Header />
//           <div>
//             <input/>
//             <button onClick={changeUserName}>Change name</button>
//           </div>
//           <Profile />
//           <Footer />
//           <div>
//             <button onClick={toggleTheme}>Change Theme</button>
//           </div>
//           </UserContext.Provider>
//       </ThemeContext.Provider>
    
//   );
// }

// export default App;

// Задание 2 (тайминг 25 минут)
// Вам необходимо разработать HOC withLoadingIndicator, который можно использовать для
// оборачивания любого компонента. Этот HOC должен принимать параметр isLoading, который
// определяет, идет ли в данный момент загрузка. Если isLoading равен true, то вместо оборачиваемого
// компонента должен отображаться загрузочный индикатор.
// 1. Создайте HOC withLoadingIndicator, который принимает компонент и возвращает новый
// компонент, который показывает либо индикатор загрузки, либо содержимое оригинального
// компонента в зависимости от пропса isLoading.
// 2. Можно использовать простой текстовый индикатор или любой спиннер из доступных
// библиотек.


// const withLoadingIndicator = (Component, isLoading) => { 
//   return (props) => {
//     const newProps = {...props, isLoading};
//     return <Component {...newProps} />; 
//   };
// };  

          


// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const NewLoading = withLoadingIndicator(Loading, isLoading);

//   setTimeout(() => {
//     setIsLoading((prev) => !prev);
//   }, 3000);

//   return (
//     <>
//       <NewLoading/>
//     </>
//   );
// }

// export default App;


function App() {
  return (
    <Counter />
  );
} 

export default App;

