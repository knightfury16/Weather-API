import { map, marker } from "./map";


type Data = {
	location:string;
	forecast: string;
	longitude: string;
	latitude: string;
	error?: string;
};
export abstract class BasedComponents {

	protected search: HTMLInputElement;
	protected messageOne: HTMLParagraphElement;
	protected messageTwo: HTMLParagraphElement;

	constructor() {
		this.search = document.querySelector("input")!;
		this.messageOne = document.querySelector("#msg-1")!;
		this.messageTwo = document.querySelector("#msg-2")!;
	}

	fetchData(crood: boolean, address?:string){

		this.messageOne.textContent = 'Loading...';
		this.messageTwo.textContent = '';
		
		if(!address) address = this.search.value;

		const url = '/weather?address=' + address + "&crood=" + (crood? 'true':'false');

		fetch(url)
		.then((response) => {
			return response.json();
		})
		.then(data => {
			if(data.error)
			{
				return this.messageOne.textContent = data.error;
			}
			this.renderData(data,crood);
		})
		.catch(err => {
			console.log(err);
		});
	}

	protected renderData(data: Data, crood: boolean){
			// Map settings
			const longitude = data.longitude;
			const latitude = data.latitude;
			map.easeTo({center: [+longitude, +latitude], zoom:9, duration: 4000});
			marker.setLngLat([+longitude,+latitude]);
			
			this.messageOne.textContent = data.location;
			this.messageTwo.textContent = data.forecast;

			if(crood)this.search.value = data.location.split(',')[0];
	}


}