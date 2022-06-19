import './App.css';
import {useState} from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
function App() {
  const [showModal, setShowModal] = useState(false)
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
      

    {
      showEvents && 
      <EventList event = {events}  handleClick ={handleClick}/>
    }

    {showEvents && <div>
      <button onClick={() => setShowEvents(false)}>hide events</button>
    </div>
    }
    {!showEvents && <div>
      <button onClick={() => setShowEvents(true)}>show events</button>
    </div>
    }

    {showModal &&
      <Modal handleClose= {handleClose}>
    <h2>10% off Coupon Code</h2>
        <p>Use the code NINJA10 at the checkout.</p>
    </Modal>
    }
    {!showModal &&
    <button onClick={handleModal}>Show Coupon</button>
    
    }
    </div>
  );
}

export default App;
