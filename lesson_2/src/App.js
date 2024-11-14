
import './App.css';
import Counter from './components/counter';
import MessagesList from './components/list';
import RefExample from './components/refexample';
import TexInput from './components/text';
import Timer from './components/timer';
import Timer_new from './components/Timer_new';
import ToDoList from './components/todolist';
import Show from './components/visible';

function App() {
  return (
    <div>
      <RefExample/>
      <Timer/>
      <Timer_new/>
      <Counter/>
      <Show data="Текст из компонента"/>
      <MessagesList/>
      <TexInput/>
      <ToDoList/>

    </div>

  );
}

export default App;
