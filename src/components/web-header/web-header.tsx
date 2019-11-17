import { Component, h } from '@stencil/core';

@Component({
    tag: 'web-header',
    styleUrl: 'web-header.scss'
})
export class WebHeader {

  render() {
    return (
      <header>
        <img src="../assets/Fdom-header-1.png" alt="Header"/>
      </header>
    );
  }
}
