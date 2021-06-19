import './js/components/header.js';
import './js/components/main-form.js';
import './js/components/todo-list.js';
import './js/components/todo-item.js';
import './js/components/todo-finish-list.js';


class Todo {
  constructor(){
    this.mainForm = document.querySelector('main-form');
    this.todoList =  document.querySelector('todo-list');
    this.todoFinishList =  document.querySelector('todo-finish');
    this.store = [];
    this.finishStore = [];
  }

  // event ketika submit data dari form :
  eventSubmit(){
    this.mainForm.eventSubmit = (e) => {
      
      let tugas = this.mainForm.valueTugas;
      let waktu = this.mainForm.valueWaktu;

      if( waktu && tugas != ""){
        let id = Math.random()
        let myObj = { id, waktu, tugas } 
        this.getLocalStorageDaftarTugas();
        this.store.push(myObj);
        this.setLocalStorage(this.store);
        this.renderItem()

        this.mainForm.clear()
        e.preventDefault()
      }
    };
 
  }
  
  // mendapatkan akses / read data localStorage
  getLocalStorageDaftarTugas(){
    this.store = JSON.parse(localStorage.getItem('session')) || [];
  }

  getLocalStorageDaftarTugasFinish(){
    this.finishStore = JSON.parse(localStorage.getItem('finish')) || [];
  }

  // isi / write data local storage
  setLocalStorage(dataBase){
    localStorage.setItem('session', JSON.stringify(dataBase));
  }

  setLocalStorageTugasFinish(dataBase){
    localStorage.setItem('finish', JSON.stringify(dataBase));
  }

  // render daftar tugas saya
  renderItem(){
    this.todoList.dataTugas = this.store;
    
  }

  // render daftar tugas yang selesai
  renderFinishItem(){
    this.todoFinishList.dataFinish = this.finishStore;
  }

  // event checklist tugas yang belum selesai
  eventFinishTask(){
    
    this.todoList.eventItem = (e) => {
      let specifyVal = e.target.parentElement.parentElement.parentElement.parentElement._dataTugas;

      let i = this.store.indexOf(specifyVal)
      let newArr = this.store.splice(i,1);
      this.setLocalStorage(this.store)
      this.finishStore.push(newArr[0])
      this.setLocalStorageTugasFinish(this.finishStore)
      this.renderItem()
      this.renderFinishItem()
      
      
    } 
  }

  eventUndoTugas(){
    this.todoFinishList.undoEvent = (e) => {
      const target = e.target.parentElement.parentElement.parentElement.parentElement._dataFinish;

      const i = this.finishStore.indexOf(target)
      let newArr = this.finishStore.splice(i, 1)
      this.setLocalStorageTugasFinish(this.finishStore)
      this.store.push(newArr[0])
      this.setLocalStorage(this.store)
      this.renderFinishItem()
      this.renderItem()
    
    }
  }

  eventDeleteTugas(){
    this.todoFinishList.deleteEvent = (e) => {
      const target = e.target.parentElement.parentElement.parentElement.parentElement._dataFinish;
      const i = this.finishStore.indexOf(target);
      this.finishStore.splice(i, 1)
      this.setLocalStorageTugasFinish(this.finishStore)
      this.renderFinishItem()
      this.renderItem()
    }
  }
}

const todo = new Todo();
todo.eventSubmit();
todo.eventFinishTask();
todo.eventUndoTugas();
todo.eventDeleteTugas();
todo.getLocalStorageDaftarTugas();
todo.getLocalStorageDaftarTugasFinish();
todo.renderItem();
todo.renderFinishItem();
