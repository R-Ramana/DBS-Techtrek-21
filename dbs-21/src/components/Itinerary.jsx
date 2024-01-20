import React from 'react'
import Destination from './Destination'

const Itinerary = ({itinerary, onDelete, onEdit}) => {
  const h3Style = {
    textAlign: 'left',
  };
  return (
   
    <div className= 'itinerary'>
    <img src=""></img>
    <h1>Title: {itinerary.title} </h1>
    <h2>Budget: ${itinerary.budget}</h2>
     <h3 style={h3Style}> Destinations </h3>
    {itinerary.destinations.map((destination, index) => (
        <Destination key={index} destination={destination} onDelete={onDelete} onEdit={onEdit} />
       ))} 
       <button className="edit-button"> Edit Itinerary </button>
      <button className= "delete-button"> Delete Itinerary </button>
    </div>

  )
}

export default Itinerary