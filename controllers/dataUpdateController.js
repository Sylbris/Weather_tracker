const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const weatherModel = require("../models/weatherInfo");

/**
 * Our loop to send the data every X seconds.
 * @param {*} socket 
 */
  exports.getCELSIUS =  async function (socket) {
    i=0
    const intervalId = setInterval(async () => {
      const jsonData = await weatherModel.getData();
      socket.emit('data', jsonData);
      console.log(i++);
    }, 10000);
  }
