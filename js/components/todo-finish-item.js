class TodoFinishItem extends HTMLElement{

  set dataFinish(vel){
    this._dataFinish = vel;
    this.render()
  }

  render(){
    this.innerHTML = `
    <div class="list-item">
      <div class="text-wrap">
        <h3 class="tugas" >${this._dataFinish.tugas}</h3>
        <h3 class="tgl" >${this._dataFinish.waktu}</h3>
      </div>
      <div class="icon-wrap">
        <button class="check-btn">
          <i class="fas fa-trash"></i>
        </button>
        <button class="check-btn">
          <i class="fas fa-undo-alt"></i>
        </button>
      </div>
    </div>
    
    `;
  }

}

customElements.define("finish-item", TodoFinishItem)