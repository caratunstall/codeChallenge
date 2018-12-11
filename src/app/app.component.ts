import { Component } from '@angular/core';
import { AppService } from './services/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: any;
  title = 'myApp';

  constructor(public service: AppService) {
    this.todos = service.getAllTODOS();
  }

  onSelect(id: number): void {
    // write implmentaion here
  }
}
