import { Component } from "@angular/core";
import { Device } from "@nativescript/core";


@Component({
  selector: "BucaramangaTab",
  templateUrl: "./bucaramangaTab.component.html",
  styleUrls: ["./bucaramangaTab.component.css"],
})
export class BucaramangaTabComponent {
  onFabTap() {
    console.log("Botón flotante presionado");
  }
}
