const dataService = {
  mapFourCitiesWeatherData: (citiesWeatherData) => {
    return citiesWeatherData.map(cityData => { return {
      icon:cityData.weather[0].icon,
      weatherInfo: cityData.weather[0].main,
      perception:'',
      humidity:cityData.main.humidity,
      wind:cityData.wind.speed,
      temperature:Math.floor(cityData.main.temp),
      city:cityData.name,
      country:cityData.sys.country
    }})
  },

  mapWeatherData: (weatherData) => {
    return {
      name: weatherData.name,
      country: weatherData.sys.country,
      temp: Math.floor(weatherData.main.temp),
      tempMin: Math.floor(weatherData.main.temp_min),
      tempMax: Math.floor(weatherData.main.temp_max),
      weather: weatherData.weather[0].main,
      weatherIcon: weatherData.weather[0].icon,
      perception: "",
      humidity: weatherData.main.humidity,
      wind: weatherData.wind.speed
    }
  },
  
  mapForecastData: (forecastData) => {
    return forecastData.list.map(weather => { return {
      tempMin: Math.floor(weather.main.temp_min),
      tempMax: Math.floor(weather.main.temp_max),
      weatherDay: WeekDays[new Date(weather.dt_txt).getDay()],
      weatherIcon: weather.weather[0].icon
    }})
  }
}