import './App.css';
import HavaDurumu from './components/HavaDurumu';
import { MainContext } from './components/context';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
    const [city, setCity] = useState([]);
    const [selectedCity,setSelectedCity] = useState("Adana");
    useEffect(()=>{
        axios('https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json')
           .then(res => setCity(res.data));
   },[]);
   const handleSelect = (e)=>{
    setSelectedCity(e.target.value)
  }
  const data = {
    selectedCity,
    setSelectedCity
  }
  return (
    <MainContext.Provider className="App" value={data} >
      <div className='dropDown'>
        <h2>{selectedCity} Hava Durumu</h2>
        <select onChange={(handleSelect)} name="cities" id="city" className='selectDropdown' >
          {  
              city.map((cities)=> (
                  <option  key={cities.id} value={cities.name}>{cities.name}</option>
              ))
          }
      </select>
      </div>
      <HavaDurumu/>
    </MainContext.Provider>
  );
}

export default App;
