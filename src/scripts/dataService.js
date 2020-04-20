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
    },
    mapCity:(cityData) => {
        return cityData.map(data => {
            return {
                icon:data.weather[0].icon,
                weatherInfo:data.weather[0].main,
                perception:'',
                humidity:data.main.humidity,
                wind:data.wind.speed,
                temperature:data.main.temp,
                maxTemp:data.main.temp_max,
                minTemp:data.main.temp_min
                
            }
        })
    },
    mapCityForecast:(cityData) => {
        return cityData.map(data => {
            return {
                icon:data.list.map(item => item.weather[0].icon),
                day:'',
                max_temp:data.list.map(item =>item.main.temp_max),
                min_temp:data.list.map(item =>item.main.temp_min)
            }
        })
    }
  }