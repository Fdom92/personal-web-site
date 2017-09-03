import { Component } from '@stencil/core';


@Component({
    tag: 'web-header',
    styleUrl: 'web-header.scss'
})
export class WebHeader {

    render() {
        return (
            <header>
                <img src="../assets/header.jpg" alt="Header"/>
                <div class="quote">
                    <p>
                        "Opportunities don't happen,
                    </p>
                    <p>
                        you create them"
                    </p>
                </div>
            </header>
        );
    }
}