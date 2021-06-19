class TodoFinishItem extends HTMLElement{

  set dataFinish(vel){
    this._dataFinish = vel;
    this.render()
  }

  set undoEvent(event){
    this._undoEvent = event;
  }

  set deleteEvent(event){
    this._deleteEvent = event;
  }

  render(){
    this.innerHTML = `
    <div class="list-item">
      <div class="text-wrap">
        <h3 class="tugas" >${this._dataFinish.tugas}</h3>
        <h3 class="tgl" >${this._dataFinish.waktu}</h3>
      </div>
      <div class="icon-wrap">
        <button class="hapus-btn">
          <i class="fas fa-trash"></i>
        </button>
        <button class="undo-btn">
          <i class="fas fa-undo-alt"></i>
        </button>
      </div>
    </div>`;

    this.querySelector('.undo-btn').addEventListener('click', (e) => this._undoEvent(e))

    this.querySelector('.hapus-btn').addEventListener('click', (e) =>
    this._deleteEvent(e))
  }

}

customElements.define("finish-item", TodoFinishItem)