import {useState,useEffect} from 'react'
import axios from 'axios'
import { MainContext,useContext } from './context';
import Weath from './Weath';

function HavaDurumu() {

    const {selectedCity} = useContext(MainContext);
    const [weather, setWeather] = useState({});

    async function getData(selectedCity){
      await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&lang=tr&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(res => setWeather(res.data))
      .catch(err => console.log(err))  
    }

    useEffect(()=>{ 
      getData(selectedCity);
    },[selectedCity]);


    if (!weather.list) {
      return <p>Loading...</p>
    }

    const list = []
    for (let i = 0; i < weather.list.length; i+=8) {
     list.push(weather.list.slice(i,i+8))
    }
    
  return (
    <div className='welement'>
      <div className='weatherList'>
      {
        list.map((weathers)=> {
          const wt = weathers[0];
          return <div  key={wt.dt}><Weath wt={wt}/></div>
        })
      }
      </div>
    </div>
  )
}

export default HavaDurumu
