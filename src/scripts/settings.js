const settings = {
    btnKelvin:document.getElementById('btnKelvin'),
    btnCelsius:document.getElementById('btnCelsius'),
    btnFahrenheit:document.getElementById('btnFahrenheit'),
    headerTitle:document.getElementById('header-title'),
    headerSubtitle:document.getElementById('header-subtitle'),
    input:document.getElementById('input'),
    searchBtn:document.getElementById('searchBtn'),

    registerListeners: function(e){
        this.searchBtn.addEventListener('click',(e)=>{
            if(this.input.value === ''){
                alert('please enter city or country')
            } else {
                state.cityName = this.input.value.trim();
                console.log(state.cityName)
                weatherApiService.getWeather(state.cityName)
                weatherApiService.getForecast(state.cityName)
            }
        })
    }

    
}