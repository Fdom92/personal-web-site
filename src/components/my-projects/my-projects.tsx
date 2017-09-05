import { Component, State } from '@stencil/core';


@Component({
    tag: 'my-projects',
    styleUrl: 'my-projects.scss'
})
export class MyProjects {

    @State() projects: any = [
        {
            title: 'Pantrify',
            description: 'A new simple way to organize your pantry from your mobile device.',
            tags: [
                'Angular',
                'Ionic',
                'Firebase'
            ],
            more: 'https://github.com/Fdom92/Pantrify'
        },
        {
            title: 'Progressive Weather App',
            description: 'A progressive web app to get all the information of the time of where you are.',
            tags: [
                'Angular',
                'Ionic',
                'Firebase'
            ],
            more: 'https://github.com/Fdom92/progressive-weather-app'
        },
        {
            title: 'Stencil Weather PWA',
            description: 'A progressive web app to get information of the time using Stencil.',
            tags: [
                'Stenciljs'
            ],
            more: 'https://github.com/Fdom92/stencil-weather-pwa'
        },
        {
            title: 'Personal web site',
            description: 'My personal web site was also made using just Stencil, it is also a PWA.',
            tags: [
                'Stenciljs'
            ],
            more: 'https://github.com/Fdom92/personal-web-site'
        }
    ];

    render() {
        let items = [];
        this.projects.forEach(project => {
            items.push(
                <single-project project={project}></single-project>
            );
        });
        return (
            <div class="my-projects-container">
                {items}
            </div>
        );
    }
}