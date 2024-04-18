let search = document.getElementById('search');
let searchBtn = document.getElementById('search-btn');
let temp = document.getElementById('temp');
let city = document.getElementById('location');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let weatherIcon = document.querySelectorAll('.weather-icon');

let request = new XMLHttpRequest();

searchBtn.addEventListener('click', function () {
  setInterval(() => {
    request.open(
      'GET',
      `https://api.weatherapi.com/v1/current.json?key=189a35ffbb994c5483d142448241204&q=${search.value}&aqi=yes`
    );

    request.onerror = function () {
      console.log('Could not find weather');
    };

    request.onload = () => {
      // console.log(request);
      // console.log(request.responseText);
  

      let myData = request.responseText;
      // console.log(myData);

      let newData = JSON.parse(myData);
      console.log(newData);

      city.innerHTML = newData.location.name;

      temp.innerHTML = newData.current.temp_c + '°c';

      humidity.innerHTML = newData.current.humidity + '%';
      wind.innerHTML = newData.current.wind_kph + 'kph';
    };

    request.send();
  }, 3000);
});
