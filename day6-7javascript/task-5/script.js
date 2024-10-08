const addButton = document
  .getElementById("search")
  .addEventListener("click", function() {
    var city = document.getElementById("input-field").value;
    var api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87f4fc5af2349e10f857a96c920328ba&units=metric`;

    if (city.trim() == "") {
      console.warn("Please Enter the valid city name");
      alert("Please enter a valid city name");
      return;
    }
    fetchApi(api);
  });

async function fetchApi(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    document.getElementById("city-name").textContent = data.name;
    document.getElementById("temperature").textContent = data.main.temp + " °C";
    document.getElementById("humidity").textContent = data.main.humidity + " %";
    document.getElementById("input-field").value = "";

    document.getElementById(
      "weather-icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"/>`;
    //   data.main.temp <= 10
    //     ? "🌨️"
    //     : data.main.temp <= 20
    //     ? "😶‍🌫️"
    //     : data.main.temp <= 30
    //     ? "🌦️"
    //     : "🌞";
  } catch (e) {
    console.error("Error fetching weather data:", e);
    alert("Error fetching weather data:", e);
  }
}
