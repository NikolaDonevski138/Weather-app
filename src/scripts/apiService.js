const url = `https://api.openweathermap.org/data/2.5`;
const key = '14175153236bfde9b467a65f18f207f1';

const apiService = {
  getFourCities: async (cities, units = "metric", lang = "en") => {
    const citiesWeatherData = []
    for (const city of cities){
      const res = await fetch(`${url}/weather?q=${city}&units=${units}&lang=${lang}&appid=${key}`)
      const data = await res.json()
      citiesWeatherData.push(data)
    }

    const citiesInfo = dataService.mapFourCitiesWeatherData(citiesWeatherData)
    uiService.renderFourCities(citiesInfo)
  },

  getForecast: (city, units = "metric", lang = "en") => {
    fetch(`${url}/weather?q=${city}&units=${units}&lang=${lang}&appid=${key}`)
      .then(weatherRes => weatherRes.json())
      .then(weatherData => {
        fetch(`${url}/forecast?q=${city}&units=${units}&lang=${lang}&cnt=17&appid=${key}`)
          .then(forecastRes => forecastRes.json())
          .then(forecastData => {
            console.log(forecastData,"unfiltered")
            const weatherInfo = dataService.mapWeatherData(weatherData)
            const forecastInfo = dataService.mapForecastData(forecastData)
            console.log(weatherInfo,'weatherInfo')
            console.log(forecastInfo,'forecastInfo')
            console.log(forecastInfo[0].weatherDay,'forecastInfoWeatherDay')
            uiService.renderForecast(weatherInfo, forecastInfo)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
