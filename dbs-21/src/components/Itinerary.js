import React from 'react'
import Destination from './Destination'

const Itinerary = ({itinerary, onDelete}) => {
  return (
    <div className= 'itinerary'>
    <h1>Title: {itinerary.title} </h1>
    <h2>Budget: ${itinerary.budget}</h2>
     <h3> Destinations </h3>
     <button> Add Destination</button>
    {itinerary.destinations.map((destination, index) => (
        <Destination key={index} destination={destination} onDelete={onDelete} />
       ))} 
       <button >
        Edit
      </button>
      <button>
        Delete
      </button>
    </div>

  )
}

export default Itinerary