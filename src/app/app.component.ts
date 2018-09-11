import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public navOpen: boolean;
  @Output() close = new EventEmitter<void>();


  public toggleNav() {
    console.log("this is firing");
    this.navOpen = !this.navOpen;
  }
}

