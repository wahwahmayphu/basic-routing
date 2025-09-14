import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  users = [
    {
      id:'1',
      name:'John',
      age:28,
    },
    {
      id:'2',
      name:'Phyo',
      age:33,
    },
    {
      id:'3',
      name:'Thu',
      age:29,
    },
    {
      id:'4',
      name:'May',
      age:27,
    },
    {
      id:'5',
      name:'Poe',
      age:16,
    }
  ]

}
