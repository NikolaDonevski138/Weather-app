const weatherApiService = {
    url:`https://api.openweathermap.org/data/2.5`,
    resultNode: document.getElementById('result'),
    getWeather:function(location,units){
       const getWeather = `${this.url}/weather?q=${location}&units=metric&appid=${api.key}`
       this.resultNode.innerHTML = ''
       fetch(getWeather)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            uiService.renderWeather(data);
        })
        .catch(err => console.log(err));
    },
    getForecast:function(location,units){
        const getForecast = `${this.url}/forecast/daily?q=${location}&cnt=3&appid=${api.key}`
        fetch(getForecast)
        .then(res=>res.json())
        .then(data => console.log(data,'forecast'))
        .catch(err => console.log(err))
    }
}


//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
