import './App.css';
import Box from './components/Box';
import List from './components/List';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from './components/ListPage';
import DetailPage from './components/DetailPage';

function App() {
  const LiElement = [1,2,3,4,5,6,7]
  const renderItem = (item, index) => {
    const style = {
      color: index % 2 === 0 ? 'red' : 'blue'};
  
  return(
    <div style={style}>
      {item} - Уникальный стиль
    </div>
    );
  };
  

  return (
    <div className="App">
      <div>
        <List listItems={LiElement} renderItem={renderItem}/>
          <Box>
            <p>First paragraph</p>
            <button> Кнопка внутри рамки</button>
          </Box>
          <Box>
            <p>Second paragraph</p>
            <button> Кнопка внутри рамки</button>
          </Box>
          <Box>
            <p>Three paragraph</p>
            <button> Кнопка внутри рамки</button>
          </Box>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ListPage />} />
              <Route path="/details/:id" element={<DetailPage />} />
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
