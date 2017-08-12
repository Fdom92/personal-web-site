import { Component } from '@stencil/core';


@Component({
    tag: 'web-site',
    styleUrl: 'web-site.scss'
})
export class WebSite {

    render() {
        return [
            <web-header></web-header>,
            <my-info></my-info>,
            <my-projects></my-projects>,
            <my-experience></my-experience>,
            <my-hobbies></my-hobbies>,            
            <web-footer></web-footer>
        ];
    }
}