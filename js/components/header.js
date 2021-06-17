class Header extends HTMLElement{
  connectedCallback(){
    this.render()
  }
  render(){
    this.innerHTML = `
    <header>
      <div class="container">
        <h2 class="title">Todo List</h2>
      </div>
    </header>`;
  }
}

customElements.define('my-header', Header);