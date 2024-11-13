import './App.css';
import CurrentTime from './components/CurrentTime';
import Greeting from './components/Greeting';
import EventCard from "./components/EventCard";

function App() {
  return (
  <div>
  <Greeting />
  <CurrentTime/>
  <EventCard title="Концерт группы Крутая группа'" date="22 октября 2024, 19:00" location="Москва, Крокус Сити Холл"/>
  <EventCard title="Выставка 'Мир Динозавров'" date="5 ноября 2024, 10:00" location="Санкт-Петербург, Экспофорум"/>
  <EventCard title="Фестиваль еды 'Вкусная осень'" date="12 ноября 2024, 12:00" location="Нижний Новгород, Парк культуры и отдыха"/>
  </div>
  )
}

export default App;
