const weatherModel = require("../models/weatherInfo");

//Initial render of the page.
exports.getWeatherController = (req, res, next) => {
  const weather_info = weatherModel.getWeather();
  res.render("dashboardtest", { weather_info });
};

