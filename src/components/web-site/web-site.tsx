import { Component, h } from '@stencil/core';

@Component({
    tag: 'web-site',
    styleUrl: 'web-site.scss'
})
export class WebSite {

  componentDidLoad() {
    window.addEventListener('swUpdate', () => {
      window.location.reload();
    })
  }

  render() {
    return [
      <web-nav></web-nav>,
      <web-header></web-header>,
      <h1 id="about" class="section-title">About me</h1>,
      <my-info></my-info>,
      <h1 id="skills" class="section-title">Skills</h1>,
      <my-skills></my-skills>,
      <h1 id="portfolio" class="section-title">Portfolio</h1>,
      <my-projects></my-projects>,
      <h1 id="experience" class="section-title">Work Experience</h1>,
      <my-experience></my-experience>,
      <closing-cta></closing-cta>,
      <web-footer></web-footer>
    ];
  }
}
