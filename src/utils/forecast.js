const request = require('request');
require('dotenv').config();


const forecast = (longitude,latitude,callback) => {
	url = 'http://api.weatherstack.com/current?access_key='+ process.env.WSAPIKEY + '&query=' + latitude + ',' + longitude;
	request({url,json:true},(err,{body:res} = {}) => {
		if(err){
			callback('Could not connect to internet',undefined);
		}else if (res.error){
			callback('Unable to find location',undefined);
		} else {
			const currentTemp = res.current.temperature;
			const feelTemp = res.current.feelslike
			const weatherDes = res.current.weather_descriptions[0];
			callback(undefined,`${weatherDes}. It is currently ${currentTemp} degree celcius outside, feels like ${feelTemp} degree.`);
		}
	})
}

module.exports = forecast;