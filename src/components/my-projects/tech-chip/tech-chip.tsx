import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'tech-chip',
    styleUrl: 'tech-chip.scss'
})
export class TechChip {

  @Prop() tag;

  render() {
    return (
      <div class="chip">
        <p>{this.tag}</p>
      </div>
    );
  }
}
