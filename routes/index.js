weatherController = require("../controllers/weatherController");

//set up the routes for each controller.
exports.appRoute = router => {
  router.get("/", weatherController.getWeatherController);
};