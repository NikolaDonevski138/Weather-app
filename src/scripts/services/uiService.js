const uiService = {

    resultNode: document.getElementById('result'),

    renderWeather:function(dataWeather){
       
        this.resultNode.innerHTML = `
        <div class="container">

            <h1 class="weather-title mt-5 mb-5" id="weather-status">
                CURRENT WEATHER TODAY
            </h1>

                <div class="row">
                <div class="col-3-md">
                <img src="" alt="weather-img">
                </div>
                <div class="col-6-md">
                    <div class="row">
                    
                    </div>
                    <div class="row">
                    <div class="card"">
                        <div class="card-body">
                            <h2 class="card-title weather-info" id="weather-info">${dataWeather.weather[0].main}</h2>
                            <p class="card-text space" id="perception">Perception:${dataWeather}%</p>
                            <p class="card-text space" id="humidity">Humidity:${dataWeather}%</p>
                            <p class="card-text space" id="wind">Wind:${dataWeather}km/h</p>
                            <p class="card-text" id="View_status">View in 16 day weather forecast</p>
                            
                        </div>
                        </div>
                        </div>

                <div>

                </div>
                <div class="col-3-md">
                <div class="row">
                </div>
                <div class="row">
                </div>
                <div class="row">
                </div>
                </div>
                <div> 
                    `
        
    }
}







 