window.addEventListener("load", ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection=document.querySelector('.degree-section');
    let temperatureSectionSpan=document.querySelector('.degree-section span');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
         
        const proxy= `https://cors-anywhere.herokuapp.com/`;
        const api= `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=83a59a4e1696d74b794e17a6d13c3e56`;
        fetch(api)
          .then(response =>{
            return response.json();
        })
          .then(data=>{
              console.log(data);
              let temperature = data.main.temp;
              let celcius = temperature-273.15;
              let description  = data.weather[0].description;
              let icon=data.weather[0].icon;
              let timezone = data.sys.country;
              switch(icon){
                case "01d":
                  icon="CLEAR_DAY";
                    break;
                case "01n":
                  icon="CLEAR_NIGHT";
                    break;
                case "02d":
                  icon="PARTLY_CLOUDY_DAY";
                    break;
                case "02d":
                  icon="PARTLY_CLOUDY_NIGHT";
                    break;
                case "03d":
                  icon="CLOUDY";
                    break;
                case "03n":
                  icon="CLOUDY";
                    break;
                case "04d":
                  icon="CLOUDY";
                    break;
                case "04n":
                  icon= "CLOUDY";
                    break;
                case "09d":
                  icon="RAIN";
                    break;
                case "09n":
                  icon="RAIN";
                    break;
                case "10d":
                  icon="RAIN";
                    break;
                case "10n":
                  icon="RAIN";
                    break;
                case "11d":
                  icon="RAIN";
                    break;
                case "11n":
                  icon="RAIN";
                    break;
                case "13d":
                  icon= "SNOW";
                      break;
                case "13n":
                  icon= "SNOW";
                      break;
                case "50d":
                  icon="FOG";
                      break;
                case "50n":
                  icon="FOG";
                      break;
              }
              temperatureDegree.textContent=temperature;
              temperatureDescription.textContent=description;
              locationTimezone.textContent=timezone;
              setIcons(icon, document.querySelector(".icon") );

              temperatureSection.addEventListener('click', ()=>{
                if(temperatureSectionSpan.textContent==="K"){
                  temperatureDegree.textContent=celcius;
                  temperatureSectionSpan.textContent="C";
                }
                else{
                  temperatureDegree.textContent=temperature;
                  temperatureSectionSpan.textContent="K";
                }
              })
          });
        });

       
    }
    function setIcons(icon, iconID){
      const skycons = new Skycons({color:"white"});
      let currentIcon = icon;
      skycons.play();
      return skycons.set(iconID, Skycons[currentIcon]);
    }
})