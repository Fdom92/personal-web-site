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
            title: 'Personal web site',
            description: 'My personal web site was also made using just Stencil, it is also a PWA.',
            tags: [
                'Stenciljs', 'PWA'
            ],
            more: 'https://github.com/Fdom92/personal-web-site'
        },
        {
            title: 'Anidb',
            description: 'A PWA to search information about your favorites animes',
            tags: [
                'Stenciljs', 'PWA'
            ],
            more: 'https://github.com/Fdom92/anidb'
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