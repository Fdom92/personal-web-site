import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'tech-chip',
    styleUrl: 'tech-chip.scss'
})
export class TechChip {

  @Prop() tag: string;

  render() {
    return (
      <div class="chip">
        <p>{this.tag}</p>
      </div>
    );
  }
}
