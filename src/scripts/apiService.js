url = `https://api.openweathermap.org/data/2.5`;
key = '14175153236bfde9b467a65f18f207f1';

const apiService = {
   getFourCities:async(cities) => {
       const citiesData = []
       for (const city of cities){
           const res = await fetch(`${url}/weather?q=${city}&appid=${key}`)
           const data = await res.json()
           citiesData.push(data)
       }
       const citiesInfo = dataService.mapFourCities(citiesData)
       console.log(citiesInfo,'citiesInfo');
       console.log(citiesData,'citiesData')
       uiService.renderFourCities(citiesInfo)
   },

    getWeather:(city) =>{
        fetch(`${url}/weather?q=${city}&appid=${key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },
    getForecast:(city) =>{
        fetch(`${url}/weather?q=${city}&appid=${key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
    })
}
}

// getFourCities: (cities) => {
//     fetch(`${url}/weather?q=${cities}&appid=${key}`)
//       .then(res => res.json())
//       .then(data => {
//           let arr = []
//           arr.push(data)
//           console.log(arr)
//        const cities = dataService.mapFourCities(arr)
//          console.log(cities,'cities')
//          uiService.renderFourCities(cities)
//       }).catch(err => console.error(err))
//   }