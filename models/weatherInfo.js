
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const https = require('https');

const arielID = "73"
const generalDataUrl = "https://ims.gov.il/he/now_analysis";
const weeklyDataUrl = "https://ims.gov.il/en/forecast_data/73";

//////////////////////////////////////////////INITIAL DATA ///////////////////////////////////////////////
//Some fake data.
var weather = { day: "Monday", UV: "5", celsius: "7-15" };

  //Allow the Controller to access and fetch the weather
  exports.getWeather = () => {
    https.get(generalDataUrl,(res) => {
      let body = "";
  
      res.on("data", (chunk) => {
          body += chunk;
      });
  
      res.on("end", () => {
          try {
              let json = JSON.parse(body);
              let arielData = json["data"][arielID]
              //console.log(arielData)
          } catch (error) {
              console.error(error.message);
          };
      });
  
  }).on("error", (error) => {
      console.error(error.message);
  });
    return weather;
  };
/**
 * Parse initial json data , in order to send it to the client.
 * @param {} data 
 */
function parseInitialDailyData(data){

}
////////////////////////// Fetching data ---- Our SERVER's data //////////////////////////////////////////
/**
 * Fetching the html, via puppeteer.
 * This allows, viewing the page in full rendered mode.
 * @returns 
 */
 exports.getData = async () => {
  let dataToReturn;
  https.get(generalDataUrl,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let json = JSON.parse(body);
            let arielData = json["data"][arielID]
            
            console.log(arielData);
            dataToReturn = arielData;
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});
return dataToReturn;
}
/**
 * Process data using cheerio, we gather all neccessery data and process it here
 * @param  data 
 * @returns a JSON formatted data.
 */
function processData(data) {
  //console.log("Processing Data...");
  const $ = cheerio.load(data);
  //Degrees
  const currentDegreesC =
    "#ims_home_page > div.header > div.row.no-margin.banner > div.col-sm-6.col-9.info-circle.circle-container > li:nth-child(5) > p.city-temp.ng-binding";
    console.log($(currentDegreesC).text());
  const currentRadiation =
    "#ims_home_page > div.header > div.row.no-margin.banner > div.col-sm-6.col-9.info-circle.circle-container > li:nth-child(5) > span.max_uvi > span.max_uvi_value.ng-binding";
    console.log($(currentRadiation).text());

  const currentWinds =
    "#ims_home_page > div.header > div.row.no-margin.banner > div.col-sm-6.col-9.info-circle.circle-container > li:nth-child(5) > p.direction-icon > b.speed.ng-binding";
    console.log($(currentWinds).text());

  const jsonData = {"currentDegreesC" : $(currentDegreesC).text(), "currentRadiation": $(currentRadiation).text(), "currentWinds": $(currentWinds).text()};
  return jsonData;
}