const uiElements = {
  // div1: document.getElementById("fist"),
  // languageDropDown: document.getElementById("fist"),
  btnKelvin: document.getElementById('btnKelvin'),
  btnCelsius: document.getElementById('btnCelsius'),
  btnFahrenheit: document.getElementById('btnFahrenheit'),
  btnSmKelvin: document.getElementById('btnSmKelvin'),
  btnSmCelsius: document.getElementById('btnSmCelsius'),
  btnSmFahrenheit: document.getElementById('btnSmFahrenheit'),
  cityTitle: document.getElementById('header-title'),
  countryTitle: document.getElementById('country-title'),
  searchInput: document.getElementById('input'),
  searchBtn: document.getElementById('searchBtn'),
  result: document.getElementById('result')
}
  
const uiService = {
  registerListeners: () => {
    uiElements.searchBtn.addEventListener("click", e => {
      state.page = Pages.Forecast

      if (uiElements.searchInput.value === '') {
        alert('Please enter City')
      }
      else {
        state.searchInput = uiElements.searchInput.value
        uiService.refresh()
      }
    })

    uiElements.btnKelvin.addEventListener("click", e => {
      state.units = Units.Kelvin
      uiService.refresh()
    })

    uiElements.btnCelsius.addEventListener("click", e => {
      state.units = Units.Celsius
      uiService.refresh()
    })

    uiElements.btnFahrenheit.addEventListener("click", e => {
      state.units = Units.Fahrenheit
      uiService.refresh()
    })

    uiElements.btnSmKelvin.addEventListener("click", e => {
      state.units = Units.Kelvin
      uiService.refresh()
    })

    uiElements.btnSmCelsius.addEventListener("click", e => {
      state.units = Units.Celsius
      uiService.refresh()
    })

    uiElements.btnSmFahrenheit.addEventListener("click", e => {
      state.units = Units.Fahrenheit
      uiService.refresh()
    })
    
   
  },

  initialAction: (cities) => {
    apiService.getFourCities(cities, state.units, state.language)
  },

  refresh: () => {
    switch (state.page) {
      case Pages.Landing: 
        apiService.getFourCities(state.initalCities, state.units, state.language)
        break
      case Pages.Forecast:
        apiService.getForecast(state.searchInput, state.units, state.language)
        break
      default:
        // apiService.getForecast(state.currentValue, state.lang, state.units)
        break
    }
  },
 

  renderFourCities: (citiesClean) => {
    let temperatureSign = ()=> {
      if(state.units === Units.Kelvin) {
        return `°K`
      }
      if(state.units === Units.Celsius ){
        return `°C`
      }
      if(state.units === Units.Fahrenheit){
        return `°F`
      }
    }
    let resultHTMLString = `
      <div class="container text-center">   
        <h1 class="weather-title mt-5 mb-5" id="weather-status">
            TODAY WEATHER IN FEATURED CITIES
        </h1>
        <div class="row">`;

    for (const cityClean of citiesClean) {
      resultHTMLString += `
          <div class="col-md-3">
            <div class="card border-0" style="width: 100%;">
              <img src="./src/img/${cityClean.icon}.png" class="card-img-top weather-img m-auto d-block" alt="...">
              <div class="card-body">
                <h2 class="card-title lato-black-14 blue" id="weather-info">${cityClean.weatherInfo}</h2>
                <p class="card-text space lato-light-14 grey" id="perception">Perception:$0%</p>
                <p class="card-text space lato-light-14 grey" id="humidity">Humidity:%${cityClean.humidity}%</p>
                <p class="card-text space lato-light-14 grey" id="wind">Wind:${cityClean.wind}km/h</p>
                <h1 class="card-text lato-black-42 lato-black-md blue" id="temperature-result">${cityClean.temperature} ${temperatureSign()}</h1>
                <h1 class="city lato-light-24 grey" id="city">${cityClean.city},${cityClean.country}</h1>
              </div>
            </div>
          </div>`
    }

    resultHTMLString += `
        </div>
      </div>`
      

    uiElements.result.innerHTML = resultHTMLString
  },

  renderForecast: (weatherInfo, forecastInfo) => {
    let temperatureSign = ()=> {
      if(state.units === Units.Kelvin) {
        return `°K`
      }
      if(state.units === Units.Celsius ){
        return `°C`
      }
      if(state.units === Units.Fahrenheit){
        return `°F`
      }
    } 
    let temperatureMiniSign = () => {
      if(state.units === Units.Kelvin || state.units === Units.Celsius || state.units === Units.Fahrenheit) {
        return `°`
      }
    }
    let resultHtmlString = `
      <div class="row mb-3">
      <div class="col-md-12 text-center">
       <h1 class="weather-title mt-5 mb-5 lato-light-24 grey" id="weather-status">
        CURRENT WEATHER TODAY, ${forecastInfo[1].weatherDay}, ${new Date().getHours()}:${new Date().getMinutes()}
       </h1>
      </div> 
      </div>  

      <div class="container">
      <div class="row">
        <div class="col-md-4 text-center">
          <img src="src/img/${weatherInfo.weatherIcon}.png" class="currentDayImg">
        </div>
        <div class="col-md-4 text-center borderGrey">
        
       
        <div class="row">
         <div class="col-md-11 col-sm-10 col-xs-10 d-flex justify-content-between">    
          <h1 class="lato-black-60 blue d-inline-block">${weatherInfo.temp} ${temperatureSign()}</h1>
          <div class="row d-inline-block">
         <div>
          <div class="col pl-0 pr-0">
          <p class="d-inline-block pl-0 p-0 mb-0 lato-light-24 grey">max ${weatherInfo.tempMax}${temperatureMiniSign()}</p>
          </div>
          <div class="col pl-0 pr-0">
          <p class="d-inline-block pl-0 mb-0 lato-light-24 grey">min ${weatherInfo.tempMin}${temperatureMiniSign()}</p>
          </div>
         </div>
          </div>
          
         </div>
        
        
          
    
    </div>
          
          <div class="row">
            <div class="col-sm-10 text-left">
              <div class="card bg-transparent border-0">
                <div class="card-body pl-0">
                  <h5 class="card-title mb-0 lato-black-24 blue">${weatherInfo.weather}</h5>
                  <p class="card-text mb-0 lato-light-18 grey">Perception:0 %</p>
                  <p class="card-text mb-0 lato-light-18 grey">Humidity:${weatherInfo.humidity} %</p>
                  <p class="card-text mb-0 lato-light-18 grey">Wind:${weatherInfo.wind}km/h</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 grey text-left">
              <p>View in 16 day weather forecast<p>
            </div>
          </div>
        </div>
        <div class="col-md-4" id="nextDaysInfo">
          <div class="row pl-2">
            <div class="col-md-4">
              <img class="nextDayImg d-block" src="src/img/${forecastInfo[1].weatherIcon}.png"/>
            </div>
            <div class="col-md-8">
              <div class="row">
                <p class="mb-0 lato-light-24 grey">${forecastInfo[1].weatherDay}</p>
              </div>
              <div class="row">
                <div class="pl-0 lato-black-24 blue">
                  <p class="pl-0">${forecastInfo[1].tempMax}${temperatureMiniSign()}</p>
                </div>
                
                  <p class="pb-0 mb-0 pl-0 lato-light-24 grey">${forecastInfo[2].tempMin}${temperatureMiniSign()}</p>
             
              </div>
            </div>
          </div>

          <div class="row pl-2">
            <div class="col-md-4">
              <img class="nextDayImg d-block" src="src/img/${forecastInfo[9].weatherIcon}.png"/>
            </div>
            <div class="col-md-8">
              <div class="row">
                <p class="mb-0 lato-light-24 grey">${forecastInfo[9].weatherDay}</p>
              </div>
              <div class="row">
                <div class="pl-0 lato-black-24 blue">
                  <p>${forecastInfo[10].tempMax}${temperatureMiniSign()}</p>
                </div>
                
                  <p class="pb-0 mb-0 lato-light-24 grey">${forecastInfo[11].tempMin}${temperatureMiniSign()}</p>
                
              </div>
            </div>
          </div>
          
          <div class="row pl-2">
            <div class="col-md-4">
              <img class="nextDayImg d-block" src="src/img/${forecastInfo[14].weatherIcon}.png"/>
            </div>
            <div class="col-md-8">
              <div class="row">
                <p class="mb-0 lato-light-24 grey">${forecastInfo[14].weatherDay}</p>
              </div>
              <div class="row">
                <div class="pl-0 lato-black-24 blue">
                  <p>${forecastInfo[15].tempMax}${temperatureMiniSign()}</p>
                </div>
               
                  <p class="pb-0 mb-0 lato-light-24 grey">${forecastInfo[16].tempMin}${temperatureMiniSign()}</p>
               
              </div>
            </div>
          </div>


        </div>
      </div>
    </div> 

`

     
//Need to be improve with some for-loop for nextDays and units Sign for temperature
//DataService Icon
      




      uiElements.result.innerHTML = resultHtmlString
  }
}