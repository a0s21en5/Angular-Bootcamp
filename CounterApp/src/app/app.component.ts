import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CounterApp';

  count = 0;

  getCounter(data: string) {
    data == 'add' ? this.count++ : this.count--
  }
}
