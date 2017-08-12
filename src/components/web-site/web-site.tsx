import { Component } from '@stencil/core';


@Component({
    tag: 'web-site',
    styleUrl: 'web-site.scss'
})
export class WebSite {

    render() {
        return (
            <h2>My personal web site</h2>
        );
    }
}