import { Component, OnInit } from '@angular/core';

import { GastronomiaTab } from './shared/gastronomiaTab.model';
import { GastronomiaTabService } from './shared/gastronomiaTab.service';

@Component({
	selector: 'gastronomiaTab',
	templateUrl: 'gastronomiaTab.component.html'
})

export class GastronomiaTabComponent implements OnInit {
	gastronomiaTab: GastronomiaTab[] = [];

	constructor(private gastronomiaTabService: GastronomiaTabService) { }

	ngOnInit() {
		this.gastronomiaTabService.getList().subscribe((res) => {
			this.gastronomiaTab = res;
		});
	}
}