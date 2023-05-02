// Header
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    
    `;
  }
}

//Footer
class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    
    `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);