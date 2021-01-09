const express = require("express");
const request = require('request');
const bodyParser=require("body-parser");
const argv = require('yargs').argv;
const app = express();
app.use(bodyParser.urlencoded({extended:true}));


let apiKey = '4fbd09f3677f275d820bdbd5ec1d7191';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});

 app.listen(3000,function()
 {
     console.log("Server is running at port 3000");
 });