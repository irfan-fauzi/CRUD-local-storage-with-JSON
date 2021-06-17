class TodoItem extends HTMLElement{

  set dataTugas(data){
    this._dataTugas = data;
    this.render();
  }
  render(){
    this.innerHTML = `
    <div class="list-item">
      <div class="text-wrap">
        <h3 class="tugas" >${this._dataTugas.tugas}</h3>
        <h3 class="tgl" >${this._dataTugas.waktu}</h3>
      </div>
      <div class="icon-wrap">
        <button class="check-btn">
          <i class="far fa-check-circle"></i>
        </button>
      </div>
    </div>
    
    `;
  }
  
}

customElements.define("item-tugas", TodoItem);