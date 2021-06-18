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
    this.finishStore = [];
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
       // localStorage.setItem('session', JSON.stringify(this.store));
        this.renderItem()
        e.preventDefault()
      }
      
    };
 
  }

 
  // localStorageFn(){
  //   this.store = JSON.parse(localStorage.getItem('session')) || [];
  // }

  renderItem(){
    this.todoList.dataTugas = this.store;
   // console.log(`ini dari render Item :`, this.store)   
  }
 

  eventItem(){
    
    this.todoList.eventItem = (e) => {
      let specifyVal = e.target.parentElement.parentElement.parentElement.parentElement._dataTugas;
      let i = this.store.indexOf(specifyVal)
      let newArr = this.store.splice(i,1);
      this.finishStore.push(newArr[0])

      this.renderItem()
      console.log(`ini array baru :`, this.finishStore)
      console.log(`sisa store :`,this.store)
    }
    
  }      
}

const todo = new Todo(mainForm, todoList);
todo.getEvent();
todo.eventItem();

document.addEventListener('DOMContentLoaded', () => {
  todo.renderItem()
  
})
