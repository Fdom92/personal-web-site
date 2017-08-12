import { Component } from '@stencil/core';


@Component({
    tag: 'my-info',
    styleUrl: 'my-info.scss'
})
export class MyInfo {

    render() {
        return (
            <p>My info</p>
        );
    }
}