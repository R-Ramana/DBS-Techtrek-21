import React from 'react'

import './Destination.css';
import {FaPencilAlt,FaTrash} from 'react-icons/fa'

const Destination = ({destination, onDelete,onEdit}) => {
    const handleDelete = () => {
        onDelete(destination.id);
      };
      const handleEdit = () => {
        onEdit(destination.id);
      };
  return (
    <div className='destination-card'>
        <img className="destination-image" src='/img/MBS.jpg'/>
        <div className = "content">
            <h2> Name: {destination.name} </h2>
            <h2> Budget: $ {destination.cost} </h2>
            <h3> Notes </h3>
            <p> {destination.notes}</p>
            <button className='edit-button' onClick={handleEdit}> <FaPencilAlt /> </button>
            <button className='delete-button' onClick={handleDelete}> <FaTrash /> </button>
        </div>
    {/* <img src=""> </img> */}
   </div>
  )
}

export default Destination