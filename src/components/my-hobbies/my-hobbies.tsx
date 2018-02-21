import { Component, State } from '@stencil/core';

@Component({
    tag: 'my-hobbies',
    styleUrl: 'my-hobbies.scss'
})
export class MyHobbies {

  @State() hobbies: any = [
    {
      path: '../assets/travel.svg',
      alt: 'Travel',
    },
    {
      path: '../assets/water-activities.svg',
      alt: 'Water Activities',
    },
    {
      path: '../assets/snowboard.svg',
      alt: 'Snowboard',
    },
    {
      path: '../assets/coding.svg',
      alt: 'Coding',
    },
    {
      path: '../assets/films.svg',
      alt: 'Films',
    }
  ];

  render() {
    let items = [];
    this.hobbies.forEach(hobby => {
      items.push(
        <single-hobby path={hobby.path} alt={hobby.alt}></single-hobby>
      );
    });
    return (
      <div class="hobbies">
        {items}
      </div>
    );
  }
}
