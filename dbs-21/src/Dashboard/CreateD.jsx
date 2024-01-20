import React, {useState} from 'react';
import {countries} from './testData.js';
import './CreateIt.css';

const CreateD=()=>{
    const [dData, setdData] = useState({
        'country_id':'',
        'cost':'',
        'name':'',
        'notes':'',
      });


    const handleChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = name === 'cost' ? parseFloat(value) : value;
        setdData({ ...dData, [name]: parsedValue });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(dData)
    
        try {
          const response = await fetch('http://localhost:3000/api/insuranceclaims', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dData),
          });
    
          if (response.ok) {
            console.log('Claim data submitted successfully!');
            // You can perform additional actions upon successful submission
          } else {
            console.error('Failed to submit claim data.');
            // Handle the error as needed
          }
        } catch (error) {
          console.error('Error submitting claim data:', error);
          // Handle the error as needed
        }
      };
    
      return (
        <form className = 'itinery_form' onSubmit={handleSubmit}>
          <label className='itinery_line'>
            Name:
            <input type="text" name="name" value={dData.name} onChange={handleChange} />
          </label>
          <label className='itinery_line'>
            Cost:
            <input type = 'number' name="cost" value={dData.cost} onChange={handleChange} />
          </label>
          <select className='itinery_dropdown' name='country_id' value={dData.country_id} onChange={handleChange}>
            {countries.map((c)=>(
                <option key={c.country_id} value={c.country_id}>{c.name}</option>
            ))}
          </select>

          <label className='itinery_line'>Notes
            <input type = "text" name='name'/>
          </label>
          <button type="submit">Submit</button>
        </form>
      );
    };
    
    
    export default CreateD;