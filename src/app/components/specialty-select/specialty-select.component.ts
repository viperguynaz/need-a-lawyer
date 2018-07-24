import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-specialty-select',
  templateUrl: './specialty-select.component.html',
  styleUrls: ['./specialty-select.component.scss']
})
export class SpecialtySelectComponent implements OnInit {

  @Output() onSpecialtyChange: EventEmitter<string> = new EventEmitter();
  public options: Array<string> = ["AAA", "BBB", "CCC" ];

  constructor() { }

  ngOnInit() {
  }

  specialtyChangeEvent() {
    console.log("testing");
  }

}
