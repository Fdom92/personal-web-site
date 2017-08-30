import { Component } from '@stencil/core';


@Component({
    tag: 'my-cv',
    styleUrl: 'my-cv.scss'
})
export class MyCv {

    render() {
        return (
            <div class="my-cv-container">
                You can download my cv from here
                <a href="" download>
                    <i class="fa fa-download" aria-hidden="true"></i>
                </a>
            </div>
        );
    }
}