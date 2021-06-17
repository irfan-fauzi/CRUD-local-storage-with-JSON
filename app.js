import './js/components/header.js';
import './js/components/main-form.js';
import './js/components/todo-list.js';

const mainForm = document.querySelector('main-form');
const todoList = document.querySelector('todo-list');

let dataStorage = [];

const eventSubmit = function(e){
  dataStorage.push({
      tugas: mainForm.valueTugas,
      waktu: mainForm.valueWaktu
    })
 // console.log(dataStorage)
  todoList.dataTugas = dataStorage;
  mainForm.clear()
  e.preventDefault()
}

mainForm.eventSubmit = eventSubmit;


