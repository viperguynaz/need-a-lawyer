import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-specialty-select',
  templateUrl: './specialty-select.component.html',
  styleUrls: ['./specialty-select.component.scss']
})
export class SpecialtySelectComponent implements OnInit {

  @Output() onSpecialtyChange: EventEmitter<string> = new EventEmitter();
  public options: Array<string> = [
    "Bankruptcy", 
    "Business", 
    "Corporate", 
    "Civil Rights", 
    "Criminal Defense", 
    "Divorce", 
    "DUI", 
    "DWI", 
    "Employment", 
    "Environmental", 
    "Estate Law", 
    "Estate Planning", 
    "Family", 
    "Government", 
    "Immigration", 
    "Military", 
    "Paralegals", 
    "Personal Injury", 
    "Private Practice", 
    "Property", 
    "Public Interest", 
    "Real Estate", 
    "Toxic Tort", 
    "Trial"
  ];

  constructor() { }

  ngOnInit() {
  }

  specialtyChangeEvent(event: any) {
    this.onSpecialtyChange.emit(event.target.value);
  }

}
