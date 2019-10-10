import { Component, State, h } from '@stencil/core';

@Component({
    tag: 'my-projects',
    styleUrl: 'my-projects.scss'
})
export class MyProjects {

  @State() projects: any = [
    {
      title: 'Personal web site',
      description: 'My personal web site was also made using just Stencil, it is also a PWA.',
      tags: [
          'Stenciljs', 'PWA'
      ],
      more: 'https://github.com/Fdom92/personal-web-site'
    },
    {
      title: 'Anidb',
      description: 'A PWA to search information about your favorites animes',
      tags: [
          'Stenciljs', 'PWA'
      ],
      more: 'https://github.com/Fdom92/anidb'
    },
    {
      title: 'Stencil Snippets',
      description: 'Stencil Snippets for VCode',
      tags: [
          'VCode', 'Snippets'
      ],
      more: 'https://github.com/Fdom92/stencil-snippets'
    },
    {
      title: 'Payment Web Component',
      description: 'Payment request API implementation in Stenciljs',
      tags: [
          'WebComponent', 'Stenciljs'
      ],
      more: 'https://github.com/Fdom92/stencil-payment'
    },
    {
      title: 'Voice 2 Text Web Component',
      description: 'A webcomponent built with stencil to convert audio into text',
      tags: [
          'WebComponent', 'Stenciljs'
      ],
      more: 'https://github.com/Fdom92/stencil-voice2text'
    }
  ];

  render() {
    let items = [];
    this.projects.forEach(project => {
      items.push(
        <single-project project={project}></single-project>
      );
    });
    return (
      <div class="my-projects-container">
        {items}
      </div>
    );
  }
}
