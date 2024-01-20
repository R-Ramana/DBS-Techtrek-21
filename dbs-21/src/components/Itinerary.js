import React from 'react'
import Destination from './Destination'

const Itinerary = ({itinerary, onDelete}) => {
  return (
    <>
    <h1>Title: {itinerary.title} </h1>
    <h2>Budget: ${itinerary.budget}</h2>
     <h3> Destinations: </h3>
    {itinerary.destinations.map((destination, index) => (
        <Destination key={index} destination={destination} onDelete={onDelete} />
       ))} 
    </>
  )
}

export default Itinerary