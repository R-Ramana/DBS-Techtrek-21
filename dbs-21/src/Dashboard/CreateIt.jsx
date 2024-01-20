import React, {useState} from 'react';
import {countries, destinations} from './testData.js';
import './CreateIt.css';

const CreateIt=()=>{
    const [itData, setItData] = useState({
        'country_id':1,
        'user_id':1,
        'budget':'',
        'title':'',
      });
    
    const [destination, setDestinations]= useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = name === 'budget' ? parseFloat(value) : value;
        setItData({ ...itData, [name]: parsedValue });
      };

      const handleDestionation = (e)=>{
        const { value } = e.target;
        setDestinations((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((item) => item !== value);
            } else {
             return [...prevSelected, value];
            }
            });
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(itData)
    
        try {
          const response = await fetch('http://localhost:3001/itinerary/1', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2aGhpYXl1emtwc2p4dnp1dnZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3MDg2MDksImV4cCI6MjAyMTI4NDYwOX0.cyhiinfoCYzCCx0IX6ns8Spcs2UOy7WR-W95aqHJqUE",
              Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2aGhpYXl1emtwc2p4dnp1dnZsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNTcwODYwOSwiZXhwIjoyMDIxMjg0NjA5fQ.eOaqXI8bq6KgtlC8m2WgMD3QllcWQJF2cFlN3mn1UxU"
            },
            body: JSON.stringify(itData),
          });
    
          if (response.ok) {
            console.log('itinerary data submitted successfully!');
            // You can perform additional actions upon successful submission
          } else {
            console.error('Failed to submit itinerary data.');
            // Handle the error as needed
          }
        } catch (error) {
          console.error('Error submitting itinerary data:', error);
          // Handle the error as needed
        }
      };
    
      return (
        <form className = 'itinery_form' onSubmit={handleSubmit}>
          <label className='itinery_line'>
            Title:
            <input type="text" name="title" value={itData.title} onChange={handleChange} />
          </label>
          <label className='itinery_line'>
            Budget:
            <input type = 'number' name="budget" value={itData.budget} onChange={handleChange} />
          </label>
          <select className='itinery_dropdown' name='country_id' value={itData.country_id} onChange={handleChange}>
            {countries.map((c)=>(
                <option key={c.country_id} value={c.country_id}>{c.name}</option>
            ))}
          </select>

          <select className='itinery_dropdown' multiple name='destination' value={destination} onChange={handleDestionation}>
            {destinations.map((d) => (
                <option key={d.id} value={d.id}>
                {d.name}
             </option>
             ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      );
    };
    
    
    export default CreateIt;