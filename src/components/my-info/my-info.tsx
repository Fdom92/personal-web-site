import { Component } from '@stencil/core';


@Component({
    tag: 'my-info',
    styleUrl: 'my-info.scss'
})
export class MyInfo {

    render() {
        return (
            <div class="container">
                <p class="italic">I'm a
                    <span class="highlighted"> Front-end and Web developer </span>
                     based on
                     <span class="highlighted"> Madrid</span>.
                     I studied computer engineering degree and learned by myself the technologies
                     i use now to work like Angular and Ionic. I'm interested in everything
                     related to the web, mostly Web Components and Progressive Web Apps and
                     i like to learn new things constantly and try them in side projects.
                </p>
            </div>
        );
    }
}