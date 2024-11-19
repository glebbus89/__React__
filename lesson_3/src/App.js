

import Counter from './components/counter_plus_min';
import InputForm from './components/form';
import Greeting from './components/greeting';
import BasicList from './components/list';
import Nav from './components/menu';
import MessageList from './components/messageList';
import ParentCounter from './components/parent';
import Student from './components/propType';
import HoverRating from './components/raiting';
import TemeSwitcher from './components/themeswitcher';
import TextDisplayForm from './components/textdisplayform';


function App() {

  const name = 'Dima';


  return (


    <div>
      <HoverRating />
      <Nav/>
      <ParentCounter />
      <InputForm />
      <BasicList/>
      <Student name="Dima" age={30} isStudent={true} />
      <Greeting name={name}/>
      <Counter />
      <MessageList/>
      <TemeSwitcher />
      <TextDisplayForm/>
      

    </div>

  );
}

export default App;
