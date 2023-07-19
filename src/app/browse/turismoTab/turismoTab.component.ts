import { Component, OnInit } from '@angular/core';

import { TurismoTab } from './shared/turismoTab.model';
import { TurismoTabService } from './shared/turismoTab.service';

@Component({
	selector: 'turismoTab',
	templateUrl: 'turismoTab.component.html',
	styleUrls: ['./turismoTab.component.css'],
})

export class TurismoTabComponent implements OnInit {
	turismoTab: TurismoTab[] = [];

	constructor(private turismoTabService: TurismoTabService) { }

	ngOnInit() {
		this.turismoTabService.getList().subscribe((res) => {
			this.turismoTab = res;
		});
	}
}

export { TurismoTab };
