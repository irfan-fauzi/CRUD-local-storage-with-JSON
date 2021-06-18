import './todo-item.js';

class Todo extends HTMLElement{

  set eventItem(item){
    this._eventItem = item;
  }

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
        itemElement.dataTugas = itemTgsData;
        itemElement.eventItem = this._eventItem;
        this.appendChild(itemElement) 
    })
  }

}

customElements.define('todo-list', Todo)