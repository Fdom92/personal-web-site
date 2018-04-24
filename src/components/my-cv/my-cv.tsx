import { Component } from '@stencil/core';

@Component({
    tag: 'my-cv',
    styleUrl: 'my-cv.scss'
})
export class MyCv {

  render() {
    return (
      <div class="my-cv-container">
        <a href="../assets/Resume.pdf" download="resume">
          <lazy-img src="../assets/download.svg" alt="Download"/>
          <span class="highlighted">Download my CV (PDF - 80Kb)</span>
        </a>
      </div>
    );
  }
}
