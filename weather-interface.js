$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[[API-KEY-GOES-HERE]]`)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonifiedResponse) {
        getElements(jsonifiedResponse);
      });

   const getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});
