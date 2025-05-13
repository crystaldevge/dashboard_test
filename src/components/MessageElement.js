import React from 'react';
import ReactDOM from 'react-dom/client';
import Message from './Message'; // შენი React კომპონენტი

class MessageElement extends HTMLElement {
  
  connectedCallback() {
    const props = {
      message: this.getAttribute('message') || 'Default message',
      type: this.getAttribute('type') || 'info'
    };

    // გამოიყენე React 18 root API
    const root = ReactDOM.createRoot(this);
    root.render(<Message {...props} />);
  }
}

customElements.define('message-component', MessageElement);
