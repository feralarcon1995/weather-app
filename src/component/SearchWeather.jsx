import React, { useState } from 'react'
const SearchWeather = () => {
    const api = {
        key: 'd4262e054f14154a761802fe434ab652',
        base: 'https://api.openweathermap.org/data/2.5/'
    }

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    let emoji = 'fa-cloud';


    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                });


                
                    
                }
            
        }
    
        if(typeof weather.main != "undefined"){
            if (weather?.weather[0].main === "Clouds") {
                emoji = "fa-cloud";
            } else if (weather.weather[0].main === "Thunderstorm") {
                emoji = "fa-cloud-shower-heavy";
            } else if (weather.weather[0].main === "Drizzle") {
                emoji = "fa-bolt";
            } else if (weather.weather[0].main === "Rain") {
                emoji = "fa-cloud-rain";
            } else if (weather.weather[0].main === "Snow") {
                emoji = "fa-snow-flake";
            } else if (weather.weather[0].main === "Clear") {
                emoji = "fa-sun";
            } else if (weather.weather[0].main === "Mist") {
                emoji = "fa-cloud-fog";
            } else {
                emoji = "fa-smog";
            }
        } else {
            emoji = "fa-smog";
        }
        


    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    

    return (
        <div >
            <main className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app sun' : 'app') : 'app'}>
                <div className="search-box">
                    <h1>Weather App</h1>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search.."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weather?.main != "undefined") ? (

                    <div className="bg-light bg-opacity-50  wrapper ">
                        <h2 class="card-title">{weather?.name}, {weather?.sys.country}</h2>
                        <p class="card-text fw-bolder">
                        {dateBuilder(new Date())}
                        </p>
                        <hr />
                        <i className={`fas ${emoji} fa-4x bounce`}></i>
                        <h3 className="fw-bolder ">{Math.round(weather?.main.temp)} &deg;c</h3>
                        <h6> Feels like: {weather?.main.feels_like} &deg;c</h6>
                        <p className=" fw-bolder mb-0">{weather?.weather[0].main}</p>
                        <p className="fw-bolder">Min: {weather.main.temp_min}&deg;c  </p>
                        <p  className="fw-bolder"> Max: {weather?.main.temp_max}&deg;c</p>
                        <p className='fw-bolder'>Wind speed: {weather?.wind.speed}ms  </p>
                        <p className='fw-bolder'>Humidity: {weather?.main.humidity}% </p>
                    </div>
                ) : ('')}

                
            </main>

        </div>
    );

   
}

export default SearchWeather;