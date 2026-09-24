import { Component, h } from '@stencil/core';

@Component({
    tag: 'my-info',
    styleUrl: 'my-info.scss'
})
export class MyInfo {

  render() {
    return (
      <div class="container">
        <p class="lead">
          I'm a <span class="highlighted">Senior Software Engineer</span> based in
          <span class="highlighted"> Madrid</span>, building scalable web and mobile
          applications for remote, international teams.
        </p>
        <p class="support">
          10+ years building web and mobile products, 8+ of them fully remote for
          US companies. Deep expertise in Angular, Ionic, TypeScript and Firebase,
          taking client projects from scoping and architecture through to
          production, and acting as technical reference for junior developers.
          Currently exploring Nx monorepos and microfrontends in a side project.
        </p>
      </div>
    );
  }
}
