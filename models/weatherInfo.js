//Some initial data.
var weather = { day: "Monday", UV: "5", celsius: "7-15" };

  //Allow the Controller to access and fetch the weather
  exports.getWeather = () => {
    return weather;
  };