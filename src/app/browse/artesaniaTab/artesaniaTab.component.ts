import { Component, OnInit } from '@angular/core';

import { ArtesaniaTab } from './shared/artesaniaTab.model';
import { ArtesaniaTabService } from './shared/artesaniaTab.service';

@Component({
	selector: 'artesaniaTab',
	templateUrl: 'artesaniaTab.component.html',
})

export class ArtesaniaTabComponent implements OnInit {
	artesaniaTab: ArtesaniaTab[] = [];

	constructor(private artesaniaTabService: ArtesaniaTabService) { }

	ngOnInit() {
		this.artesaniaTabService.getList().subscribe((res) => {
			this.artesaniaTab = res;
		});
	}
}