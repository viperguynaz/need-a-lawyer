import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rc-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent implements OnInit {
  public navOpen: boolean;

  constructor() { }

  ngOnInit() {
    
  }

  public toggleNav() {
    console.log("this is firing");
    this.navOpen = !this.navOpen;
  }
}
