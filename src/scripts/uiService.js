const uiElements = {
    // div1: document.getElementById("fist"),
    // languageDropDown: document.getElementById("fist"),
    btnKelvin:document.getElementById('btnKelvin'),
    btnCelsius:document.getElementById('btnCelsius'),
    btnFahrenheit:document.getElementById('btnFahrenheit'),
    cityTitle:document.getElementById('header-title'),
    countryTitle:document.getElementById('country-title'),
    searchInput:document.getElementById('input'),
    searchBtn:document.getElementById('searchBtn'),
    result:document.getElementById('result')


  }
  
  const uiService = {
    registerListeners: () => {
      uiElements.searchBtn.addEventListener("click", e => {
        if(uiElements.searchInput.value === ''){
            alert('Please enter City')
        } else {
        state.searchInput = uiElements.searchInput.value
        apiService.getWeather(state.currentValue)
        }
      })
    //   ,
    //   uiElements.languageDropDown.addEventListener("change", e => {
    //     state.language = uiElements.languageDropDown.selectedValue
    //     uiService.refresh()
    //   })
    },
  
    initialAction: (cities) => {
      apiService.getFourCities(cities)
    },
    

  
    renderFourCities: (citiesClean) => {
        uiElements.result.innerHTML = `<div class="container text-center">   
        <h1 class="weather-title mt-5 mb-5" id="weather-status">
            TODAY WEATHER IN FEATURED CITIES
        </h1><div class="row">`;
      for(const cityClean of citiesClean){
        uiElements.result.innerHTML += `
        <div class="col-lg-3 col-sm-12">
        <div class="card" style="width: 17rem;">
            <img src="${cityClean.icon}" class="card-img-top weather-img mx-auto d-block" alt="...">
            <div class="card-body">
              <h2 class="card-title weather-info" id="weather-info">${cityClean.weatherInfo}</h2>
              <p class="card-text space" id="perception">Perception:$0%</p>
              <p class="card-text space" id="humidity">Humidity:%${cityClean.humidity}%</p>
              <p class="card-text space" id="wind">Wind:${cityClean.wind}km/h</p>
              <h1 class="card-text temperature-result" id="temperature-result">28 C</h1>
              <h1 class="city" id="city">${cityClean.city},${cityClean.country}</h1>
            </div>
          </div>
          </div>
    
        `
      }
      uiElements.result.innerHtml = `</div></div>`
    },
  
    refresh: () => {
      apiService.getWeather(state.currentValue, state.lang, state.units)
    }
  }