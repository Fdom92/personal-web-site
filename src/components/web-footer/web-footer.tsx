import { Component, h } from '@stencil/core';

@Component({
    tag: 'web-footer',
    styleUrl: 'web-footer.scss'
})
export class WebFooter {

  render() {
    return (
      <footer>
        <div class="footer-links">
          <a target="_blank" href="https://github.com/Fdom92/" rel="noopener"
          title="This link opens my github account in a new tab.">
            <lazy-img src="../assets/logo-github.svg" alt="Github"/>
          </a>
          <a target="_blank" href="https://x.com/fdom92" rel="noopener"
          title="This link opens my X account in a new tab.">
            <lazy-img src="../assets/logo-twitter.svg" alt="X"/>
          </a>
        </div>
        <div class="footer-info">
          © 2026 — Developed with ❤️ by Fernando Del Olmo Martín
        </div>
      </footer>
    );
  }
}
