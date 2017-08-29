import { Component, State } from '@stencil/core';


@Component({
    tag: 'my-projects',
    styleUrl: 'my-projects.scss'
})
export class MyProjects {

    @State() projects: any = [
        {
            title: 'Pantrify',
            description: 'Self learn latest Ionic and Angular versions with Firebase',
            tags: [
                'Angular',
                'Ionic',
                'Firebase'
            ],
            more: 'https://github.com/Fdom92/Pantrify'
        },
        {
            title: 'Progressive Weather App',
            description: 'A PWA with latest Ionic and Angular versions hosted on Firebase',
            tags: [
                'Angular',
                'Ionic',
                'Firebase'
            ],
            more: 'https://github.com/Fdom92/progressive-weather-app'
        },
        {
            title: 'Stencil Weather PWA',
            description: 'Self learn about stenciljs',
            tags: [
                'Stenciljs'
            ],
            more: 'https://github.com/Fdom92/stencil-weather-pwa'
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