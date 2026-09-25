import { Component, State, h } from '@stencil/core';

@Component({
    tag: 'my-projects',
    styleUrl: 'my-projects.scss'
})
export class MyProjects {

  @State() projects: any = [
    {
      title: 'Azimut',
      description: 'Offline-first wilderness tools that run entirely in your browser: sun, moon, orientation, knots and distress signalling. No backend, no account, no build step.',
      tags: [
          'Vanilla JS', 'PWA', 'Offline-first'
      ],
      image: 'https://fdom92.github.io/azimut/icons/social-card.png',
      more: 'https://github.com/Fdom92/azimut'
    },
    {
      title: 'Cerberus',
      description: 'Local-first security PWA to check suspicious links, emails, SMS, files and apps straight from your phone. No backend, no accounts, no build step.',
      tags: [
          'Vanilla JS', 'PWA', 'Security'
      ],
      image: 'https://fdom92.github.io/cerberus/icons/social-card.png',
      more: 'https://github.com/Fdom92/cerberus'
    },
    {
      title: 'Pantry-Manager',
      description: 'App to manage your pantry at home: track inventory, reduce food waste and plan meals, shipped to Android with Capacitor.',
      tags: [
          'Angular', 'Ionic', 'Capacitor'
      ],
      image: 'https://fdom92.github.io/Pantry-Manager/screenshot-dashboard.png',
      more: 'https://github.com/Fdom92/Pantry-Manager'
    },
    {
      title: 'More Projects',
      description: 'See more projects on my github account',
      tags: [],
      more: 'https://github.com/Fdom92/',
      lastCard: true
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
