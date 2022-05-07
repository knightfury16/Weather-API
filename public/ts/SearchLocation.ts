import { BasedComponents } from "./BasedComponents";

export class SearchLoaction extends BasedComponents{

	addressForm: HTMLFormElement;

	constructor(){
		super();
		this.addressForm = document.querySelector(".addressForm")!;
		this.config();
	}

	config(){
		this.addressForm.addEventListener('submit',(e) =>{
			e.preventDefault();
			this.fetchData(false);
		})
	}
}