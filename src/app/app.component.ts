import { Component, OnInit } from '@angular/core'
import { log } from '@nativescript/core/profiling';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.css'],
})
export class AppComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  selectedIndex: number = 0;

  onTabSelected(index: number) {
    this.selectedIndex = index;
  }
}
