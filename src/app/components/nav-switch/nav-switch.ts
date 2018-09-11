import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rc-nav-switch',
  templateUrl: './nav-switch.html',
  styleUrls: ['./nav-switch.scss']
})
export class RCNavSwitch implements OnInit {
  @Output() handleNavSwitchClick = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
