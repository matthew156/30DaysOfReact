import './App.css';
import {useState} from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
function App() {
  const [showEvents, setShowEvents] =useState(true)
  const [events, setEvents] = useState([
    {title: "marios birthday bash", id:1},
    {title: "bowser's live stream", id:2},
    {title: "race on moo moo farm", id:3}
  ])
  const handleClick = (id) =>{
    setEvents((prevEvent) => {
      return prevEvent.filter((e)=>{
      return id!== e.id
    })})
  }

  const subtitle = "All the latest events in Marioland"
  return (
    <div>
    <div className="App">
      <Modal/>
      <Title title="Events in Your Area" subtitle = {subtitle}/>\

    </div>
    {showEvents && <div>
      <button onClick={() => setShowEvents(false)}>hide events</button>
    </div>
    }
    {!showEvents && <div>
      <button onClick={() => setShowEvents(true)}>show events</button>
    </div>
    }
    <ol>
    {showEvents && events.map((e) => 
    <div>
    <li key={e.id}>{e.title}</li>
    <button onClick={() => handleClick(e.id)}>Delete Event</button>
    </div>
    )}
    </ol>
    </div>
  );
}

export default App;
