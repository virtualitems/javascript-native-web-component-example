class ExampleComponent extends HTMLElement {

  /**
   * @property {ShadowRoot} shadowRoot
   */
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  /**
   * if any of the observed attributes change, triggers the attributeChangedCallback
   *
   * @returns {Array}
  */
  static get observedAttributes() {
    return ['id'];
  }

  /**
   * renders the HTML for the component
   */
  getHTML() {
    // extract required values from attributes
    const id = this.getAttribute('id');

    // generate the HTML
    const html = `
      <style>
        slot::slotted(*) {
          color: darkred;
          font-family: sans-serif;
          text-align: center;
        }
        h2 {
          color: darkblue;
          font-family: sans-serif;
          text-align: center;
        }
      </style>
      <slot></slot>
      <h2>id = "${id ? id : ''}"</h2>
    `;

    return html;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.getHTML();
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    this.shadowRoot.innerHTML = this.getHTML();
  }

  /**
   * the component has been removed from the DOM
   */
  disconnectedCallback() {
    // use this function to dispose DOM elements
    // use this function to remove event listeners
    // use this function to nullify references
    // use this function to stop timers
  }

  /**
   * the component has been moved to a new document
   */
  adoptedCallback() {
    //
  }
}

customElements.define('example-component', ExampleComponent);
