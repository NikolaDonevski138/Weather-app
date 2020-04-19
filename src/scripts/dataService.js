const dataService = {
    mapFourCities: (citiesData) => {
      return citiesData.map(cityData => { return {
        icon:cityData.weather[0].icon,
        weatherInfo: cityData.weather[0].main,
        perception:'',
        humidity:cityData.main.humidity,
        wind:cityData.wind.speed,
        temperature:cityData.main.temp,
        city:cityData.name,
        country:cityData.sys.country
      }})
    }
  }