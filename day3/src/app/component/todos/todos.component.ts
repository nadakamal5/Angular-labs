import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  constructor(){}
  todos : string[] = [];
  inputValue:string = ''
  addTodo(){
    this.todos.push(this.inputValue);
    this.inputValue = '';
  }
  removeTodo(i:Number){
  this.todos = this.todos.filter((item,index)=> i != index)
  }

}
