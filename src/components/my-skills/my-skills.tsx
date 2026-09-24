import { Component, h } from '@stencil/core';

@Component({
    tag: 'my-skills',
    styleUrl: 'my-skills.scss'
})
export class MySkills {

  groups: { label: string; skills: string[] }[] = [
    { label: 'Frontend', skills: ['Angular', 'TypeScript', 'RxJS'] },
    { label: 'Mobile', skills: ['Ionic', 'Capacitor', 'Stencil'] },
    { label: 'State & data', skills: ['NGXS', 'Firebase'] },
    { label: 'Backend', skills: ['NodeJS'] },
    { label: 'Testing', skills: ['Jest', 'Cypress', 'Playwright'] },
    { label: 'Tooling', skills: ['Nx', 'GitHub Actions', 'SASS'] }
  ];

  render() {
    return (
      <div class="my-skills-container">
        {this.groups.map(group => (
          <div class="skills-group">
            <span class="skills-group-label">{group.label}</span>
            <div class="skills-group-chips">
              {group.skills.map(skill => <tech-chip tag={skill}></tech-chip>)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
