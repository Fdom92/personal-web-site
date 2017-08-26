import { Component } from '@stencil/core';


@Component({
    tag: 'web-site',
    styleUrl: 'web-site.scss'
})
export class WebSite {

    render() {
        return [
            <web-header></web-header>,
            <h3 class="section-title">About me</h3>,            
            <my-info></my-info>,
            <h3 class="section-title">Portfolio</h3>, 
            <my-projects></my-projects>,
            <h3 class="section-title">Experience</h3>, 
            <my-experience></my-experience>,
            <h3 class="section-title">Hobbies</h3>, 
            <my-hobbies></my-hobbies>,            
            <web-footer></web-footer>
        ];
    }
}