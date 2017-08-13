import { Component } from '@stencil/core';


@Component({
    tag: 'web-header',
    styleUrl: 'web-header.scss'
})
export class WebHeader {

    render() {
        return (
            <header>
                Hi! Welcome to my website
            </header>
        );
    }
}