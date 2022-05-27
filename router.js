route = require("./routes");

//set our router folder routes.
module.exports = (app, router) => {
  route.appRoute(router);
};