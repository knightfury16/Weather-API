import {marker,map} from "./map";

console.log('Client side javascript file is loaded.');

const addressForm = document.querySelector(".addressForm");
const search = document.querySelector("input");
const messageOne = document.querySelector("#msg-1");
const messageTwo = document.querySelector("#msg-2");


addressForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const address = search.value;
	
	
	messageOne.textContent = 'Loading...';
	messageTwo.textContent = '';
	
	const url = '/weather?address=' + address;

	fetch(url)
	.then((response) => {
		return response.json();
	})
	.then(data => {
		if(data.error)
		{
			return messageOne.textContent = data.error;
		}
		// Map settings
		const longitude = data.longitude;
		const latitude = data.latitude;
		map.easeTo({center: [longitude, latitude], zoom:9, duration: 4000});
		marker.setLngLat([longitude,latitude]);
		
		messageOne.textContent = data.location;
		messageTwo.textContent = data.forecast;
	})
	.catch(err => {
		console.log(err);
	});

})

