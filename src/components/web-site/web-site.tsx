import { Build, Component, h } from '@stencil/core';

@Component({
    tag: 'web-site',
    styleUrl: 'web-site.scss'
})
export class WebSite {

  componentDidLoad() {
    if (!Build.isBrowser || !navigator.serviceWorker) return;

    const activateWaiting = () => {
      navigator.serviceWorker.getRegistration().then(reg => {
        if (reg && reg.waiting) {
          reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
      });
    };

    window.addEventListener('swUpdate', activateWaiting);
    activateWaiting();

    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
  }

  render() {
    return [
      <a class="skip-link" href="#content">Skip to content</a>,
      <web-nav></web-nav>,
      <web-header></web-header>,
      <main id="content" tabindex="-1">
        <h2 id="about" class="section-title">About me</h2>
        <my-info></my-info>
        <h2 id="skills" class="section-title">Skills</h2>
        <my-skills></my-skills>
        <h2 id="portfolio" class="section-title">Portfolio</h2>
        <my-projects></my-projects>
        <h2 id="experience" class="section-title">Work Experience</h2>
        <my-experience></my-experience>
        <closing-cta></closing-cta>
      </main>,
      <web-footer></web-footer>
    ];
  }
}
