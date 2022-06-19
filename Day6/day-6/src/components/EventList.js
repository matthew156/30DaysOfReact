import React from "react"
export default function EventList({event, handleClick}) {
  return (
    <div>
      {
            event.map((event, index) =>(
                    <React.Fragment key = {event.id}>
                       <h2>{index}. {event.title}</h2>
                       <button onClick={() => handleClick(event.id)}>Delete Event</button> 
                    </React.Fragment>
            )
            )
      }
      
    </div>
  )
}
