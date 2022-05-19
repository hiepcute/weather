import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [city, setCity]=useState('')
  const [weather,setWeather] = useState({})
  const APIKEY = '8c2af675785487309f6c7215eae470f2'
  useEffect(() =>
  {
    if (city!=''){
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=${APIKEY}`)
     .then( res => res.json())
     .then(data => {
       setWeather({
        data: data,
        city: data.city,
        country: data.sys.country,
        description: data.weather[0].description,
        temperature: Math.round(data.main.temp * 9/5 - 459.67),
        error:""
       })
     })
    }
   
  
  },[city])

  return (
    <div className="App">
    
      <div className="btn-weather">
      <button onClick={()=>setCity('ha noi')}>Hà Nội</button>
      <button onClick={()=>setCity('ho chi minh')}>Hồ Chí Minh</button>
      <button onClick={() =>setCity('new york')}>cần thơ</button>    
      </div>

      <div className="text-weather">
            {weather.country||'' }
            {weather.temperature && <p>{weather.temperature}  °F</p>}
            {weather.description && <p> Conditions: {weather.description}</p>}
           
           
      </div>


    </div>

    

      
      
      

      
      
      
  );
}

export default App;
