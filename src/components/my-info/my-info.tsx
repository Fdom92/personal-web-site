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
          Deep expertise in Angular, Ionic, Firebase and TypeScript, with a strong
          focus on architecture, code quality and developer experience. I own
          projects end-to-end — from scoping and architecture to delivery — and
          love learning new things and trying them in side projects.
        </p>
      </div>
    );
  }
}
