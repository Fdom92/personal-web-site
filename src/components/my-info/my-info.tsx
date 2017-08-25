import { Component } from '@stencil/core';


@Component({
    tag: 'my-info',
    styleUrl: 'my-info.scss'
})
export class MyInfo {

    render() {
        return (
            <div class="my-info-container">
                <h3>About me</h3>
                <p>I'm a</p>
                <p class="role">Frontend developer</p>
                <p>based on Madrid, Spain. 
                    I studied computer engineering degree and learned by my self 
                    the technologies i use now to work like Angular and Ionic. 
                    I'm interested in everything related to the web, 
                    mostly Web Components and Progressive Web Apps and 
                    i like to learn new things constantly and try them in side projects.
                </p>
            </div>
        );
    }
}