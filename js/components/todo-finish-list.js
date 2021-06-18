import './todo-finish-item.js';

class TodoFinish extends HTMLElement{

  set dataFinish(val){
    this._dataFinish = val;
    this.render()
  }

  // connectedCallback(){
  //   this.render()
  // }

  render(){
    this.innerHTML = "";
    this._dataFinish.forEach(el => {
      const finishElement = document.createElement('finish-item');
      finishElement.dataFinish = el;
      this.appendChild(finishElement)
    })
  }


}

customElements.define("todo-finish", TodoFinish);