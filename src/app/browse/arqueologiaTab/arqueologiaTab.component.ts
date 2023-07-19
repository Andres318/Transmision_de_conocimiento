import { Component, OnInit } from '@angular/core';

import { ArqueologiaTab } from './shared/arqueologiaTab.model';
import { ArqueologiaTabService } from './shared/arqueologiaTab.service';

@Component({
	selector: 'arqueologiaTab',
	templateUrl: 'arqueologiaTab.component.html',
})

export class ArqueologiaTabComponent implements OnInit {
	arqueologiaTab: ArqueologiaTab[] = [];

	constructor(private arqueologiaTabService: ArqueologiaTabService) { }

	ngOnInit() {
		this.arqueologiaTabService.getList().subscribe((res) => {
			this.arqueologiaTab = res;
		});
	}
}