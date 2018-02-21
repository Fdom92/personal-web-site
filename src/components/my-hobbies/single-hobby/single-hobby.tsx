import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'single-hobby',
    styleUrl: 'single-hobby.scss'
})
export class SingleHobby {

  @Prop() path: string;
  @Prop() alt: string;

  render() {
    return (
      <div class="hobby">
        <lazy-img src={this.path} alt={this.alt}/>
        <p>{this.alt}</p>
      </div>
    );
  }
}
