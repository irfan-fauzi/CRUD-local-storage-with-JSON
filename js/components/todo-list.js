import './todo-item.js';

class Todo extends HTMLElement{

  set dataTugas(data){
    this._dataTugas = data;
    this.render();
  }

  render(){
    this.innerHTML = "";
    // looping data
    this._dataTugas.forEach( itemTgsData => {
      // buat elemen item
      const itemTugasElemen = document.createElement("item-tugas");
      // isi data eleemen item
      itemTugasElemen.dataTugas = itemTgsData;
      // taruh elemen item di dalam elemen todo-list 
      this.appendChild(itemTugasElemen);
    })
  }

}

customElements.define('todo-list', Todo)