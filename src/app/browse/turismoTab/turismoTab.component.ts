import { Component, OnInit } from '@angular/core';

import { TurismoTab } from './shared/turismoTab.model';

@Component({
	selector: 'turismoTab',
	templateUrl: 'turismoTab.component.html',
	styleUrls: ['./turismoTab.component.css'],
})

export class TurismoTabComponent implements OnInit {
	turismoTab: TurismoTab[] = [];

	constructor() { }

	ngOnInit() {
		
	}
}

export { TurismoTab };
