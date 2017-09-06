import { Component } from '@stencil/core';


@Component({
    tag: 'my-cv',
    styleUrl: 'my-cv.scss'
})
export class MyCv {

    render() {
        return (
            <div class="my-cv-container">
                <a href="../assets/docs/Resume.pdf" download="resume">
                    <st-img src="../assets/download.svg" alt="Download"/>
                </a>
                <span class="highlighted">Download my CV (PDF - 84Kb)</span>
            </div>
        );
    }
}