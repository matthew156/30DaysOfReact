import React from "react"
import styles from './EventList.module.css'
export default function EventList({event, handleClick}) {
  return (
    <div>
      {
            event.map((event) =>(
                    <div className={styles.card} key = {event.id}>
                       <h2>{event.title}</h2>
                       <p><em>{event.date}</em></p>
                       <button onClick={() => handleClick(event.id)}>Delete Event</button> 
                    </div>
            )
            )
      }
      
    </div>
  )
}
