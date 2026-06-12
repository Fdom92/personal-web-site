import { Component, h } from '@stencil/core';

@Component({
    tag: 'my-cv',
    styleUrl: 'my-cv.scss'
})
export class MyCv {

  render() {
    return (
      <div class="my-cv-container">
        <a href="../assets/Fernando_del_Olmo_CV.pdf" download="Fernando_del_Olmo_CV">
          <lazy-img src="../assets/download.svg" alt="Download"/>
          <span class="highlighted">Download my CV (PDF - 95Kb)</span>
        </a>
      </div>
    );
  }
}
