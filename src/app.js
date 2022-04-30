const path = require('path');
const express = require('express');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const morgan = require('morgan');


//*Initializing express app 
const app = express();

//*Configuring express view engine
app.set('view engine','ejs');

//*Initializing morgan for logging
app.use(morgan('dev'));

//*Setting up and serving public folder
const publicDirectoryPath = path.join(__dirname ,'../public');
app.use(express.static(publicDirectoryPath));

//*Start listening
app.listen(process.env.PORT || 3000, () => console.log("Server is up and running..."));

//* Render home page
app.get('/',(req,res) => {
	res.render('index',{title:'Home'});
});

//*Render about page
app.get('/about',(req,res) => {
	res.render('about',{title:'About'});
});

//*Render help page
app.get('/help',(req,res) => {
	res.render('help',{title:'Help'});
});

// *Weather endpoint
app.get('/weather', (req,res) => {
	if (!req.query.address) {
		return res.send({
			error:"You must specify a address"
		});
	}
	// *Wire up geocode and forecast function
	geocode(req.query.address, (err, {longitude,latitude,location}={}) => {
		if (err){ 
			return res.send({
				error: err
			});
		}
		forecast(longitude,latitude, (err,forecastData) => {
			if(err){
				return res.send({
					error: err
				});
			}
			res.send({
				location,
				forecast: forecastData,
				longitude: longitude,
				latitude:latitude
			});
		});	
	});
});


//*Render 404 page
app.use((req,res) => {
	res.status(404).render('404',{title:'404'});
});
