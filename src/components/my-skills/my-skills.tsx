import { Component, h } from '@stencil/core';

@Component({
    tag: 'my-skills',
    styleUrl: 'my-skills.scss'
})
export class MySkills {

  skills: string[] = [
    'Angular', 'TypeScript', 'RxJS', 'Ionic', 'Capacitor', 'Stencil',
    'NGXS', 'Firebase', 'NodeJS', 'Nx', 'Jest', 'Cypress', 'Playwright',
    'GitHub Actions', 'SASS'
  ];

  render() {
    return (
      <div class="my-skills-container">
        {this.skills.map(skill => <tech-chip tag={skill}></tech-chip>)}
      </div>
    );
  }
}
