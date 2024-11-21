// import React, { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import ArticleDetail from "./components/ArticleDetail";
// import ArticleList from "./components/ArticleList";
import ProductDetail from "./components/ProductDetails";
import ProductList from "./components/ProductList";




// const articles = [
//   {id: 1, title: 'Статья 1', content: 'Содержимое статьи 1'},
//   {id: 2, title: 'Статья 2', content: 'Содержимое статьи 2'},
//   {id: 3, title: 'Статья 3', content: 'Содержимое статьи 3'},
// ];

const products = [
  {id: 1, name: 'Продукт 1', description: 'Содержимое продукта 1', price: 100},
  {id: 2, name: 'Продукт 2', description: 'Содержимое продукта 2', price: 100},
  {id: 3, name: 'Продукт 3', description: 'Содержимое продукта 3', price: 100},
  {id: 4, name: 'Продукт 4', description: 'Содержимое продукта 1', price: 100},
  {id: 5, name: 'Продукт 5', description: 'Содержимое продукта 2', price: 100},
  {id: 6, name: 'Продукт 6', description: 'Содержимое продукта 3', price: 100},
  {id: 7, name: 'Продукт 7', description: 'Содержимое продукта 1', price: 100},
  {id: 8, name: 'Продукт 8', description: 'Содержимое продукта 2', price: 100},
  {id: 9, name: 'Продукт 9', description: 'Содержимое продукта 3', price: 100},
  {id: 10, name: 'Продукт 10', description: 'Содержимое продукта 1', price: 100}
  
];



const App = () => (
  // npm install react-router-dom
  <Router>
    <div>
      <h1>Приложение для просмотра статей</h1>
      <Routes>
        {/* <Route path="/" element={<ArticleList articles={articles} />} /> */}
        {/* <Route path="/articles/:id" element={<ArticleDetail articles={articles} />} />
        <Route path="*" element={<ArticleList articles={articles} />}></Route> */}

        <Route path="/page/:pageNumber" element={<ProductList products={products} />} />
        <Route path="/products/:productId" element={<ProductDetail products={products} />} />
        <Route path="/" element={<ProductList products={products} />}/>
      </Routes>
    </div>
  </Router>
);


// function App() {
  // return (
  //   <>
  //     <div className="App">

        
        {/* {
          console.log(
            <DivWithChild>
              <p>Новый текст</p>
              <div>Новый элемент div</div>
            </DivWithChild>
          )
        } */}
        {/* <div>
          <h2>Пример 2 использования "children"</h2>
          <BorderComp>
            <p>Этот абзац находится внутри рамки</p>
            <button> Кнопка внутри рамки</button>
          </BorderComp>
          <p>Этот абзац находится снаружи рамки.</p>
        </div> */}
        {/* <div>
          <h2>
            Пример 3 использования "props.children"        
          </h2>
          <Card title="Карточка 1">
            <p>Это содержимое первой карточки</p>
            <button>Действие</button>

          </Card>
          <Card title="Карточка 2">
            <p>Это содержимое второй карточки</p>
            <a href="#">Ссылка</a>
          </Card>
        </div> */}

        {/* <div>
          <h1>Пример Render props с функциональными компонентами</h1>
          <MouseTracker render={({ x, y }) => <MouseInfo x={x} y={y} />} />
        </div> */}



        




//       </div>
//     </>

    
      
    
//   );
// }
// Это для консоли
// function DivWithChild({children}) {
//   return (
//   <div>
//     {children}
//   </div> 
//   );
// }
// Вариант 1
// Это передаем в компонент, затем в App создаем div  передаем компонент и внутри тэги
// const BorderComp = ({children}) => {
//   return (
//     <div style={{border: '2px solid black', padding: '16px'}}>
//       {children}
//     </div>
//   );
// }
// Вариант 2
// // Компонент Card принимает заголовок и содержимое в качестве children
// const Card = ({title, children}) => {
//   return (
//     <div style={{border: '2px solid black', padding: '16px'}}>
//       <h2>{title}</h2>
//       {children}
//     </div>
//   );
// };


// Компонент для отслеживания положения курсора мыши

  // const MouseTracker = ({render}) => {
  //   const [position, setPosition] = useState({x: 0, y: 0});

  // const handleMouseMove = (event) => {
  //   setPosition({x: event.clientX, y: event.clientY});
  // };

  // return (
  //   <div style={{height: '100vh'}} onMouseMove={handleMouseMove}>
  //     {/* Внутри Render prop используем переданную функцию */}
  //     {render(position)}
  //   </div>
  //   );
  // };


  // Компонент, который использует Render prop для рендеринга информации о положении курсора
  // const MouseInfo = ({x, y}) => {
  //   return (
  //     <div>
  //       <h1>Положение курсора мыши</h1>
  //       <p>X: {x}, Y: {y}</p>
  //     </div>
  //   );
    
  // }



  




export default App;
