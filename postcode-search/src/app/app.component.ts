import { Component } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postcode: string = '';
  addresses: string[] = [];
  apiKey: string = 'nLWMMF3c567DLus9Tc1QVpAQzlOuBPji';

  async search() {
    if (!this.postcode.trim()) return;

    const url = `https://api.os.uk/search/places/v1/postcode?postcode=${encodeURIComponent(this.postcode)}&key=${this.apiKey}`;

    try {
      const response = await axios.get(url);
      const results = response.data.results;

      this.addresses = results?.map((res: any) => res.DPA.ADDRESS) || [];
    } catch (err) {
      console.error('Error:', err);
      this.addresses = ['Error retrieving data.'];
    }
  }
}