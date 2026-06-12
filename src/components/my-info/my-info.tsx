import { Component, h } from '@stencil/core';

@Component({
    tag: 'my-info',
    styleUrl: 'my-info.scss'
})
export class MyInfo {

  render() {
    return (
      <div class="container">
        <p class="italic">I'm a
          <span class="highlighted"> Senior Software Engineer </span>
            based in
            <span class="highlighted"> Madrid</span> with 10+ years of experience
            building scalable web and mobile applications in fully remote,
            international environments. Deep expertise in Angular, Ionic, Firebase
            and TypeScript, with a strong focus on architecture, code quality and
            developer experience. I own projects end-to-end — from scoping and
            architecture to delivery — and love learning new things and trying
            them in side projects.
        </p>
        <p class="availability">
          Currently <span class="highlighted">open to Senior / Tech Lead remote roles</span> worldwide.
        </p>
      </div>
    );
  }
}
