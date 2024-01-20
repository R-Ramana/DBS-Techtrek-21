import React, {useState} from 'react';

const CreateIt=()=>{
    const [itData, setItData] = useState({
        'country_id':'',
        'budget':'',
        'title':''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = name === 'budget' ? parseFloat(value) : value;
        setItData({ ...itData, [name]: parsedValue });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(itData)
    
        try {
          const response = await fetch('http://localhost:3000/api/insuranceclaims', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(itData),
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
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={itData.title} onChange={handleChange} />
          </label>
          <br />
          <label>
            Budget:
            <input type = 'number' name="budget" value={itData.budget} onChange={handleChange} />
          </label>
          <br />
          <select name='country_id' value={itData.country_id} onChange={handleChange}>
            <option name='country_id' value='1'>Country 1</option>
            <option name='country_id' value='2'>Country 2</option>
          </select>
          
          <button type="submit">Submit</button>
        </form>
      );
    };
    
    
    export default CreateIt;