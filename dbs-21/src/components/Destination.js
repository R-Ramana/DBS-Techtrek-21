import React from 'react'

const Destination = ({destination, onDelete}) => {
  return (
    <div className='destination'>
    <h2> Budget {destination.budget} </h2>
    <h2> Name: {destination.name} </h2>
    <h3> Country: {destination.country}</h3>
    <h3> Notes </h3>
    <p> {destination.notes}</p>
   </div>
  )
}

export default Destination