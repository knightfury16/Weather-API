import {map,marker} from "./map"

export class SendMyPos{

	sendLocationButton;
	messageOne;
	messageTwo;
    search;

	constructor(){
		this.sendLocationButton = document.getElementById('my-pos');
		this.messageOne = document.querySelector("#msg-1");
		this.messageTwo = document.querySelector("#msg-2");
        this.search = document.querySelector("input");


		this.config();
	}

	config(){
		this.sendLocationButton.addEventListener('click', e =>{
			e.preventDefault();
			
			if(!navigator.geolocation){
				return alert('Geolocation is not supported by your browser.');
			}

			this.sendLocationButton.setAttribute('disabled','disabled');
			
			navigator.geolocation.getCurrentPosition(position => {
				let location = {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				}
				this.fetchData(location);
			});
		});
	}

	fetchData(location){
		
		this.messageOne.textContent = 'Loading...';
		this.messageTwo.textContent = '';

		const address = `${location.longitude.toString()},${location.latitude.toString()}`;
		
		const url = '/weather?address=' + address + "&crood=true";
	
		fetch(url)
		.then((response) => {
			return response.json();
		})
		.then(data => {
			if(data.error)
			{
				return this.messageOne.textContent = data.error;
			}
			// Map settings
			const longitude = data.longitude;
			const latitude = data.latitude;
			map.easeTo({center: [longitude, latitude], zoom:9, duration: 4000});
			marker.setLngLat([longitude,latitude]);
			
            this.search.value = data.location;
			this.messageOne.textContent = data.location;
			this.messageTwo.textContent = data.forecast;
            // Activating pos button
			this.sendLocationButton.removeAttribute('disabled');
		})
		.catch(err => {
			console.log(err);
		});
    }
}

