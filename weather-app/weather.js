                    // Javascript file for weather app //
              // You can get an api key from openweathermap.org //
      const apikey = //api key here//;
      const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      const searchbox = document.querySelector(".search input");
      const searchbtn = document.querySelector(".search button");

      const weather_icon = document.querySelector(".weather-icon")



      async function checkweather(city) {
        let response = await fetch(apiurl+`${city}&appid=${apikey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display= "block"
            document.querySelector(".weather").style.display= "None"
        }
        else{

            var data = await response.json();
            
            console.log(data);
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + `°C`;
            document.querySelector(".humidity").innerHTML =
            data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            
            if(data.weather[0].main == "Clear"){
                weather_icon.src ="images/clear.png"
            }
            else if(data.weather[0].main == "Clouds"){
                weather_icon.src ="images/clouds.png"
            }
            else if(data.weather[0].main == "Drizzle"){
                weather_icon.src ="images/drizzle.png"
            }
            else if(data.weather[0].main == "Mist"){
                weather_icon.src ="images/mist.png"
            }
            else if(data.weather[0].main == "Rain"){
                weather_icon.src ="images/rain.png"
            }
            else if(data.weather[0].main == "Snow"){
                weather_icon.src ="images/snow.png"
            }
            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display= "none"
        }
            
        }

      searchbtn.addEventListener("click", function () {
        checkweather(searchbox.value);
      });

      checkweather();

