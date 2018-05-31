import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss']
})

export class RadioListComponent implements OnInit {
  @Input() radioList: Array<any>;
  @Output() onItemsChange = new EventEmitter();

  public radioListControl: FormControl;

  constructor() {}

  ngOnInit() {
    this.radioListControl = new FormControl();
    this.radioListControl.valueChanges.subscribe(id => {
      this.onItemsChange.emit(id);
    });
  }
}
