import './App.css';
import {useState} from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';
function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] =useState(true)
  const [events, setEvents] = useState([])
  const handleClick = (id) =>{
    setEvents((prevEvent) => {
      return prevEvent.filter((e)=>{
      return id!== e.id
    })})
  }

const addEvent = (e) =>
{
  setEvents((prevEvents) => {
    return [...prevEvents, e]
  })
  setShowModal(false)
}


  const handleClose = () =>{
    setShowModal(false)
  }

  const handleModal = () =>{
    setShowModal(true)
  }


  const subtitle = "All the latest events in Marioland"
  return (
    <div className="App">
     
      <Title title="Events in Your Area" subtitle = {subtitle}/>
      
      {showEvents && <div>
      <button onClick={() => setShowEvents(false)}>hide events</button>
    </div>
    }

    {
      showEvents && 
      <EventList event = {events}  handleClick ={handleClick}/>
    }

 
    {!showEvents && <div>
      <button onClick={() => setShowEvents(true)}>Show Events</button>
    </div>
    }

    {showModal &&<Modal handleClose= {handleClose} isSalesModal={true}>
    <NewEventForm addEvent={addEvent}/>
    </Modal>
    
    }
    {!showModal &&
    <button onClick={handleModal}>Create Event</button>
    
    }
    </div>
  );
}

export default App;
