import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rc-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleNav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
