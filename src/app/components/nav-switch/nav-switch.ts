import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rc-nav-switch',
  templateUrl: './nav-switch.html',
  styleUrls: ['./nav-switch.scss']
})
export class RCNavSwitch {
  @Output() handleNavSwitchClick = new EventEmitter<void>();

}
