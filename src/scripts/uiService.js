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
            <div class="card" style="width: 17rem;">
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
      let resultHtmlString = 
      `<div class="container text-center">   
          <h1 class="weather-title mt-5 mb-5" id="weather-status">
              TODAY WEATHER IN FEATURED CITIES
          </h1>
          <div class="row">
            <div class="col-md-3">
              <img class="d-block" src=./src/img/${weatherInfo.icon}.png">
            </div>
            <div class="col-md-4">
              <div class="card" style="width:20rem;">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-6">
                      <h1>${weatherInfo.temp} <span>C</span></h1>
                    </div>
                    <div class="col-sm-6">
                      <div class="row">
                        <div class="col-sm-6 col-md-6">
                          <p>max<span>${weatherInfo.tempMax}</span></p>
                        </div>
                        <div class="col-sm-6 col-md-6>
                          <p>min<span>${weatherInfo.tempMin}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>                   
                </div>                  
              </div>
            </div>
          </div>
          `;

      




      uiElements.result.innerHTML = resultHtmlString
  }
}