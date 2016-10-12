import { Component } from '@angular/core';

export class Icon{
	id:number;
	name: string;
}

const ICONS: Icon[]=[
	{ id:1, name:"hat-icon"},
	{ id:2, name:"shirt-icon"},
	{ id:3, name:"pants-icon"},
	{ id:4, name:"shoes-icon"},
	{ id:5, name:"bag-icon"},
	{ id:6, name:"about-us-icon"}
	];
@Component({
	selector:'sidebar',
	template: `
		<img src ="../img/arrow1-icon.png" class="sidebar-arrow"/>
		
		<div class="sidebar">
			<ul class="sidebar-menu" >
		
				<img src ="../img/arrow1-icon.png" class="sidebar-arrow2" />
				<li><h4>Menu</h4></li>
				<li *ngFor="let icon of icons">
					<img src="../img/{{icon.name}}.png" alt="{{icon.name}}" />
				</li>
			</ul>
		</div>
`
})
export class SidebarComponent{
	show=false;
	icons=ICONS;
}
