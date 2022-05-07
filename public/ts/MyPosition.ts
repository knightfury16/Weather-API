import { BasedComponents } from "./BasedComponents";

export class MyPosition extends BasedComponents{
	sendMyLocationButton: HTMLButtonElement;

	constructor(){
		super();
		this.sendMyLocationButton = document.getElementById('my-pos')! as HTMLButtonElement;
		this.config();
	}

	
	config(){
		this.sendMyLocationButton.addEventListener('click', e =>{
			e.preventDefault();
			
			if(!navigator.geolocation){
				return alert('Geolocation is not supported by your browser.');
			}

			this.sendMyLocationButton.setAttribute('disabled','disabled');
			
			navigator.geolocation.getCurrentPosition(position => {
				const address = position.coords.longitude + ',' + position.coords.latitude;
				this.fetchData(true, address);
			});

			this.sendMyLocationButton.removeAttribute('disabled');
		});
	}

}