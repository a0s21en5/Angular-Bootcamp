import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  If_else_title = 'If else condition';
  elseIf_title = "Multiple condition or else if";
  Switch_title = "Switch case";
  For_Loop_title = "For Loop";
  Nested_Loop_title = "Nested Loop";

  status = true;

  color = 'red';

  users = ['Ashish', 'Adarsh', 'Anurag']

  usersDetails = [
    { name: 'Ashish', email: 'ashsahu9713@gmail.com', phone: '9713939427', account: ['GitHub', 'Gamil', 'Hackerrank'] },
    { name: 'Ash', email: '0173CS191014@gmail.com', phone: '8966805727', account: ['GitHub', 'Gamil'] },
  ]
}