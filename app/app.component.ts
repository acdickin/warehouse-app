import { Component, Directive } from '@angular/core';
import {SidebarComponent} from "./sidebar.component";

export class Product{
	id: number;
	name: string;
	img: string;
	description: string;
}
//Flashing frames :product type
// Don't forget to turn your swag off 
const PRODUCTS: Product[] = [
	{ id: 1, name:'Bling Bling Hat',img:'bling-hat' , description:'Shine bright like a diamond' },
	{ id: 2, name: 'Howyoudoin Rag', img: 'do-rag-whatyoudoin', description: 'Doo rag that lets them know what up' },
	{ id: 3, name: 'Swag shirt', img: 'swag4', description: 'Swag^4' },
	{ id: 4, name:'Golden Nights', img:'golden-nights' , description:'Where how you feel. Golden'},
	{ id: 5, name:'Pink Swag', img:'pink-swag' , description:' Pink fresh swag'},
	{ id: 6, name:'Darth Swag', img:'darth-swag' , description:'The dark side of the Swag'},
	{ id: 7, name:'Bling Hat USA', img:'bling-hat-usa' , description:'Bling Bling America'},
	{ id: 8, name:'Bling Love', img:'bling-hat-love' , description:'Loving some bling'}
];

@Component({
    //moduleId: module.id,
    selector: 'my-app',
    template: `
    	<h1>{{title}}</h1>
    	<h2> Don't forget to turn off your swag off</h2>
    	<ul class="products">
			<li *ngFor="let product of products">
				<h3>{{product.name}}</h3>
				<img src= "../img/{{product.img}}.jpg"   alt="{{product.img}}" />
				<p> {{product.description}}</p>
			</li>
		</ul>
		<sidebar></sidebar>
    	`,
    directives:[SidebarComponent]
})

export class AppComponent{
	title= 'Swagalicious Apparel'; 		
	products= PRODUCTS;
}

