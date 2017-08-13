import { Component } from '@stencil/core';


@Component({
    tag: 'my-info',
    styleUrl: 'my-info.scss'
})
export class MyInfo {

    render() {
        return (
            <div class="my-info-container">
                <p>I'm a</p>
                <label class="role">Frontend developer</label>
                <p>based on Madrid, Spain. 
                    I studied computer engineering degree in Spain and learned by my self 
                    the technologies i use now to work. 
                    I'm interested in everything related to the web, 
                    mostly Web Components and Progressive Web Apps.
                </p>
            </div>
        );
    }
}