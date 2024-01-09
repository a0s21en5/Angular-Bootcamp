import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';

  TaskList: any[] = []

  AddTask(item: string) {
    this.TaskList.push({
      id: this.TaskList.length,
      name: item
    })
    console.warn(this.TaskList)
  }

  

  RemoveTask(id: number) {
    this.TaskList=this.TaskList.filter(item=>item.id!==id)
  }
}
