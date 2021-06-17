class MainForm extends HTMLElement{

  connectedCallback(){
    this.render();
  }

  set eventSubmit(event){
    this._eventSubmit = event;
  }
  
  clear(){
    this.querySelector('#nama').value = "";
    this.querySelector('#tgl').value = "";
  }

  get valueTugas(){
    return this.querySelector('#nama').value;
  }

  get valueWaktu(){
    return this.querySelector('#tgl').value;
  }
 
  disconnctedCallback(){
    console.log("clear")
  }


  render(){
    this.innerHTML = `
    <div class="formContent">
    <form id="formDataDiri">
        <div class="form-element">
            <label for="nama">Masukan Tugas yang harus dilakukan</label><br>
            <input type="text" id="nama" name="nama" placeholder="Nama Anda" required><br>
        </div>
        <div class="form-element">
            <label for="tgl">Tanggal deadline</label><br>
            <input type="date" id="tgl" name="tgl" placeholder="tanggal deadline" required><br>
        </div>
        <div class="form-element">
            <input type="submit" value="Submit Data" class="submit-btn">
        </div>
    </form>
  </div>
    
    `;
    this.querySelector('.submit-btn').addEventListener('click', (e) => this._eventSubmit(e))
  }
}

customElements.define('main-form', MainForm);