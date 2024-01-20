import React from 'react'

import './Destination.css';

const Destination = ({destination, onDelete}) => {
    const handleDelete = () => {
        onDelete(destination.id);
      };
  return (
    <div className='destination-card'>
    <h2> Budget {destination.budget} </h2>
    <h2> Name: {destination.name} </h2>
    <h3> Country: {destination.country}</h3>
    <h3> Notes </h3>
    <p> {destination.notes}</p>
    <button className='edit-button'> Edit </button>
    <button className='delete-button' onClick={handleDelete}>Delete</button>
   </div>
  )
}

export default Destination