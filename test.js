const fetch = require('node-fetch');
const { weatherToken } = require("./config.json");

const url = `http://api.weatherapi.com/v1/current.json?key=${weatherToken}&q=Denver`;
var poo;

fetch(url)
.then(response => response.json())
.then(data => {
    poo = data.current.temp_f;
})
.catch(error => {
    console.log(error);
});

console.log(poo);