import { Component, h } from '@stencil/core';

@Component({
    tag: 'web-header',
    styleUrl: 'web-header.scss'
})
export class WebHeader {

  render() {
    return (
      <header class="hero">
        <div class="hero-inner">
          <div class="hero-text">
            <p class="eyebrow">Open to Senior remote roles</p>
            <h1>Fernando del Olmo Martín</h1>
            <p class="role">Senior Software Engineer</p>
            <p class="pitch">
              10+ years building scalable web and mobile apps with Angular, Ionic,
              Firebase and TypeScript for fully remote, international teams.
            </p>
            <div class="cta-row">
              <a class="btn btn-primary" href="../assets/Fernando_del_Olmo_CV.pdf" download="Fernando_del_Olmo_CV">
                Download CV
              </a>
              <a class="btn btn-outline" target="_blank" rel="noopener" href="https://linkedin.com/in/fdom92">
                LinkedIn
              </a>
              <a class="btn btn-ghost" href="mailto:fer.olmo92@gmail.com">
                Email me
              </a>
            </div>
          </div>
          <div class="hero-media">
            <img src="../assets/Fdom-portrait.png" alt="Fernando del Olmo Martín"/>
          </div>
        </div>
      </header>
    );
  }
}
