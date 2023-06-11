const { SlashCommandBuilder } = require("discord.js");
const { weatherToken } = require("../../config.json");
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Reports weather in a city')
        .addStringOption( option => 
            option.setName('city')
                .setDescription('The desired city for forecast')
                .setRequired(true)),
    async execute(interaction) {
        //formatting city for api reference
        var city = interaction.options.getString('city');
        city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

        //Make request to weatherapi 
        const url = `http://api.weatherapi.com/v1/current.json?key=${weatherToken}&q=${city}`;

        await fetch(url)
        .then(response => response.json())
        .then(data => {
            interaction.reply(`The current temperature in ${city} is ${data.current.temp_f} F`);
        })
        .catch(error => {
            console.log(error);
        });
        
    },
};
