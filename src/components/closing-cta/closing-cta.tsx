import { Component, h } from '@stencil/core';

@Component({
    tag: 'closing-cta',
    styleUrl: 'closing-cta.scss'
})
export class ClosingCta {

  render() {
    return (
      <div class="closing-cta-container">
        <h2>Let's work together</h2>
        <p>Open to Senior remote roles. Reach out and let's talk.</p>
        <div class="cta-row">
          <a class="btn btn-dark" href="mailto:fer.olmo92@gmail.com">
            Email me
          </a>
          <a class="btn btn-dark-outline" target="_blank" rel="noopener" href="https://linkedin.com/in/fdom92">
            LinkedIn
          </a>
        </div>
      </div>
    );
  }
}
