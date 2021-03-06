import {Component} from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    axios.get('./assets/data.json')
      .then((response) => {
        console.log(response.data[0].address);
      });
  }
}
