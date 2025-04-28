import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  standalone: true,
  selector: 'app-postcode-search',
  templateUrl: './postcode-search.component.html',
  styleUrls: ['./postcode-search.component.css'],
  imports: [CommonModule, FormsModule]
})
export class PostcodeSearchComponent {
  postcode: string = '';
  addresses: string[] = [];
  addressitems: string[] = [];
  localauthorities: string[] = [];
  uprns: string[] = [];
  apiKey: string = 'nLWMMF3c567DLus9Tc1QVpAQzlOuBPji';

  async search() {
    if (!this.postcode.trim()) return;

    const url = `https://api.os.uk/search/places/v1/postcode?postcode=${encodeURIComponent(this.postcode)}&key=${this.apiKey}`;

    try {
      const response = await axios.get(url);
      const results = response.data.results;

      this.addressitems = results
      this.addresses = results?.map((res: any) => res.DPA.ADDRESS) || [];
      this.localauthorities = results?.map((res: any) => res.DPA.LOCAL_CUSTODIAN_CODE_DESCRIPTION) || [];
      this.uprns = results?.map((res: any) => res.DPA.UPRN) || [];

      console.log('LAs:', this.localauthorities);
    } catch (err) {
      console.error('Error:', err);
      this.addressitems = ['Error retrieving data'];
    }
  }

}

