import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  todos: Array<any> = [
    {id: 1, name: 'cut Grass'},
    {id: 2, name: 'do my Hair'},
    {id: 3, name: 'work Out'}
   ];
  constructor() {
  }

  public getAllTODOS(): Array<any> {
    return this.todos;
  }

  public getTodoById(id: number) {
    return this.todos.filter(x => x.id === id);
  }

  public deleteTodo(id: number) {
    //write you implementation here
  }
}
