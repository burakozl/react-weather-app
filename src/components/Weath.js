import React from 'react'

function Weath(props) {

    let day = props.wt.dt_txt.slice(0,10);
    let descp= props.wt.weather[0].description;
    let tempMax= props.wt.main.temp_max;
    let tempMin= props.wt.main.temp_min;
    let icon = props.wt.weather[0].icon;

    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
    let d = new Date(day);
    let dayName = days[d.getDay()];
    
  return (
    <div>
    <div className="Weath">
          <div className="dayName">
                <h4>{dayName}</h4>
          </div>
          <div className="weatherIcon">
            <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="example"
              />
          </div>
          <div className="weatherTemp">
             <strong>{Math.floor(tempMax)}°C / {Math.floor(tempMin)}°C</strong> 
          </div>
          <div className="weatherDescp">
              <strong>{descp}</strong> 
          </div>
  </div>
</div>
  )
}

export default Weath
