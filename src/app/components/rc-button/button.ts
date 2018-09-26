import { Component, Input } from "@angular/core";

@Component({
  selector: 'rc-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})

export class rcButton {
  @Input() buttonText = '';
  @Input() buttonLink = '';
}