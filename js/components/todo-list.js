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
        const itemElement = document.createElement('item-tugas');
        itemElement.dataTugas = itemTgsData
        this.appendChild(itemElement) 
    })
  }

}

customElements.define('todo-list', Todo)