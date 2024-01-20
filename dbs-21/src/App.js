import logo from './logo.svg';
import './App.css';
import Itinerary from './components/Itinerary'

import {useState, useEffect} from 'react'
function App() {
  const [itinerary,setItineraries] = useState({
    id:1,
    budget: 500,
    title: "Singapore Trip",
    destinations: [{
      id: 1,
      country_id: 1,
      cost:50,
      name: 'Marina Bay Sands',
      notes: 'Iconic hotel with an infinity pool and stunning views of the city skyline. Open 24/7.'
    },
    {
      id: 2,
      country_id: 1,
      cost:500,
      name: 'Gardens by the Bay',
      notes: 'Futuristic park featuring Supertree Grove and Flower Dome conservatories. Open daily from 9 AM to 9 PM.'
    },
    {
      id: 3,
      country_id: 1,
      cost:50,
      name: 'Sentosa Island',
      notes: 'Fun-filled island resort with beaches, theme parks, and various attractions. Open daily from 10 AM to 7 PM.'
    }
  ]
}
    )

    const deleteItinerary = (id) => {
      console.log(id)
    }

  return (
    <div className="App">
      <header className="App-header">
        <Itinerary itinerary={itinerary} onDelete={deleteItinerary}></Itinerary>
        <h1> {itinerary.title} </h1>
      </header>
    </div>
  );
}

export default App;
