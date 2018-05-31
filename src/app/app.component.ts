import { Component } from '@angular/core';

export const MOCK_RADIO_LIST = [
  {
    id: 'ALL',
    name: 'All users',
    selected: true,
  },
  {
    id: 'WITH',
    name: 'Users with flag',
    selected: false,
  },
  {
    id: 'WITHOUT',
    name: 'Users without flag',
    selected: false,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public radioList = MOCK_RADIO_LIST;
  constructor() {}

  public onChangeHandler(radioValue: any): void {
    console.log(radioValue);
  }
}
