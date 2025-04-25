import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address-result',
  imports: [],
  templateUrl: './address-result.component.html',
  styleUrls: ['./address-result.component.css']
})
export class AddressResultComponent {
  @Input() address: any;
}
