import './todo-finish-item.js';

class TodoFinish extends HTMLElement{

  set dataFinish(val){
    this._dataFinish = val;
    this.render()
  }

  set undoEvent(val){
    this._undoEvent = val
  }

  set deleteEvent(event){
    this._deleteEvent = event;
  }
  // connectedCallback(){
  //   this.render()
  // }

  render(){
    this.innerHTML = "";
    this._dataFinish.forEach(el => {
      const finishElement = document.createElement('finish-item');
      finishElement.dataFinish = el;
      finishElement.undoEvent = this._undoEvent;
      finishElement.deleteEvent = this._deleteEvent;
      this.appendChild(finishElement)
    })
  }


}

customElements.define("todo-finish", TodoFinish);