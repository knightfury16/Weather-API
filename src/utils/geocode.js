const request = require('request');
require('dotenv').config();

const geocode = (location,crood,callback) => {
	if(!location)return callback('Enter location',undefined);

	let url;
	
	if(!crood)url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(location) +'.json?access_token='+ process.env.GEOCODEAPIKEY +'&limit=1';
	else url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ location +'.json?access_token='+ process.env.GEOCODEAPIKEY +'&limit=1';
	
	request({url,json:true}, (err, {body:res}={}) => {
		if (err) {
			callback('Could not connect to the internet',undefined);
		} else if (res.features.length === 0 || res.features === undefined ) {
			callback('Could not get the location. Search another location.', undefined);
		} else{
			callback(undefined,{
				location: res.features[0].place_name,
				longitude: res.features[0].center[0],
				latitude: res.features[0].center[1]
			});
		}
	})
}

module.exports = geocode;