import { Component, OnInit } from '@angular/core';

import { CaliTab } from './shared/caliTab.model';

@Component({
	selector: 'caliTab',
	templateUrl: 'caliTab.component.html',
	styleUrls: ['./caliTab.component.css']
})

export class CaliTabComponent implements OnInit {
	caliTab: CaliTab[] = [];

	constructor() { }

	ngOnInit() {
		
	}
}