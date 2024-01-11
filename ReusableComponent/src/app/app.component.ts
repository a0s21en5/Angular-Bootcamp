import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReusableComponent';

  users = [
    { name: 'Ashish Sahu', email: 'ashish.sahu@gmail.com' },
    { name: 'Anurag Sahu', email: 'anurag.sahu@gmail.com' },
    { name: 'Adarsh Shukla', email: 'adarsh.shukla@gmail.com' },
  ]
}
