import './js/components/header.js';
import './js/components/main-form.js';
import './js/components/todo-list.js';
import './js/components/todo-item.js';

const mainForm = document.querySelector('main-form');
const todoList = document.querySelector('todo-list');

class Todo {
  constructor(mainForm, todoList){
    this.mainForm = mainForm;
    this.todoList = todoList;
    this.store = [];
  }

 
  getEvent(){

    this.mainForm.eventSubmit = (e) => {
      
      let tugas = this.mainForm.valueTugas;
      let waktu = this.mainForm.valueWaktu;
      if( waktu && tugas != ""){
        let id = Math.random()
        let myObj = { id, waktu, tugas } 
        
        //this.store = JSON.parse(localStorage.getItem('session')) || [];
        this.store.push(myObj);
        localStorage.setItem('session', JSON.stringify(this.store));
        this.renderItem()
        e.preventDefault()
      }
      
    };
 
  }

  getData(){
    this.todoList.dataTugas = this.store
  }

  localStorageFn(){
    this.store = JSON.parse(localStorage.getItem('session')) || [];
  }

  renderItem(){
    this.todoList.dataTugas = this.store
  }
}

const todo = new Todo(mainForm, todoList);
todo.getEvent();
todo.localStorageFn();

document.addEventListener('DOMContentLoaded', () => {
  todo.renderItem()
})
