const uiElements = {
  // div1: document.getElementById("fist"),
  // languageDropDown: document.getElementById("fist"),
  btnKelvin: document.getElementById('btnKelvin'),
  btnCelsius: document.getElementById('btnCelsius'),
  btnFahrenheit: document.getElementById('btnFahrenheit'),
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
        apiService.getForecast(state.currentValue, state.lang, state.units)
        break
    }
  },

  renderFourCities: (citiesClean) => {
    let resultHTMLString = `
      <div class="container text-center">   
        <h1 class="weather-title mt-5 mb-5" id="weather-status">
            TODAY WEATHER IN FEATURED CITIES
        </h1>
        <div class="row">`;

    for (const cityClean of citiesClean) {
      resultHTMLString += `
          <div class="col-md-3">
            <div class="card border-0" style="width: 17rem;">
              <img src="./src/img/${cityClean.icon}.png" class="card-img-top weather-img mx-auto d-block" alt="...">
              <div class="card-body">
                <h2 class="card-title weather-info" id="weather-info">${cityClean.weatherInfo}</h2>
                <p class="card-text space" id="perception">Perception:$0%</p>
                <p class="card-text space" id="humidity">Humidity:%${cityClean.humidity}%</p>
                <p class="card-text space" id="wind">Wind:${cityClean.wind}km/h</p>
                <h1 class="card-text temperature-result" id="temperature-result">${cityClean.temperature} C</h1>
                <h1 class="city" id="city">${cityClean.city},${cityClean.country}</h1>
              </div>
            </div>
          </div>`
    }

    resultHTMLString += `
        </div>
      </div>`
    console.log(resultHTMLString)
    uiElements.result.innerHTML = resultHTMLString
  },

  renderForecast: (weatherInfo, forecastInfo) => {
      let resultHtmlString = `
      
      <div class="container">
      <div class="row">
        <div class="col-md-4 text-center">
          <img src="src/img/02d.png" class="currentDayImg">
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-4">
              <h1 class="lato-black-60 blue">${weatherInfo.temp}C</h1>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-6 pl-0">
                  <p class="pl-3 pb-0 mb-0 lato-light-24 grey">max ${weatherInfo.tempMax}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 pl-3 lato-light-24 grey">
                  <p class="">min ${weatherInfo.tempMin}</p>
                </div>
              </div>
            </div>

          </div>
          
          <div class="row">
            <div class="col-sm-6">
              <div class="card bg-transparent border-0">
                <div class="card-body pl-0">
                  <h5 class="card-title mb-0 lato-light-24 blue">${weatherInfo.weather}</h5>
                  <p class="card-text mb-0 lato-light-18 grey">Perception:0 %</p>
                  <p class="card-text mb-0 lato-light-18 grey">Humidity:${weatherInfo.humidity} %</p>
                  <p class="card-text mb-0 lato-light-18 grey">Wind:${weatherInfo.wind}km/h</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 grey">
              <p>View in 16 day weather forecast<p>
            </div>
          </div>
        </div>
        <div class="col-md-4" id="nextDaysInfo">
          <div class="row pl-2">
            <div class="col-md-3">
              <img class="nextDayImg d-block" src="src/img/02d.png"/>
            </div>
            <div class="col-md-9">
              <div class="row">
                <p class="mb-0 lato-light-24 grey">${forecastInfo.weatherDay}</p>
              </div>
              <div class="row">
                <div class="col-md-2 pl-0 lato-light-24 grey">
                  <p>${forecastInfo.tempMax}</p>
                </div>
                <div class="col-md-10 pl-0">
                  <p class="pb-0 mb-0 lato-light-24 grey">${forecastInfo.tempMin}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row pl-2">
            <div class="col-md-3">
              <img class="nextDayImg d-block" src="src/img/02d.png"/>
            </div>
            <div class="col-md-9">
              <div class="row">
                <p class="mb-0 lato-light-24 grey">Sunny</p>
              </div>
              <div class="row">
                <div class="col-md-2 pl-0 lato-light-24 grey">
                  <p>33</p>
                </div>
                <div class="col-md-10 pl-0">
                  <p class="pb-0 mb-0 lato-light-24 grey">29</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="row pl-2">
            <div class="col-md-3">
              <img class="nextDayImg d-block" src="src/img/02d.png"/>
            </div>
            <div class="col-md-9">
              <div class="row">
                <p class="mb-0 lato-light-24 grey">Sunny</p>
              </div>
              <div class="row">
                <div class="col-md-2 pl-0 lato-light-24 grey">
                  <p>33</p>
                </div>
                <div class="col-md-10 pl-0">
                  <p class="pb-0 mb-0 lato-light-24 grey">29</p>
                </div>
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