import './NewEventForm.css'
import { useState } from 'react'

export default function NewEventForm({addEvent}) {

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('Florida')
  const resetForm = () => 
  {
    setTitle('')
    setDate('')
    setLocation('Florida')
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000)
    }
    
    addEvent(event)
    resetForm()
  }

  return (
    <form className = "new-event-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Event Title:</label>
        <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
        <label>
            <span>Event Date:</span>
            <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
        </label>

        <label>
            <span>Event Location:</span>
            <select onChange={(e) => setLocation(e.target.value)}>
              <option value="Florida">Florida</option>
              <option value="Manchester">Manchester</option>
              <option value="London">London</option>
            </select>
        </label>
        <button>Submit</button>
    </form>
  )
}
