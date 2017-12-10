import {Component} from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {

    axios.get('./data.json')
      .then((response) => {
        console.log(response.data);
      });
  }
}