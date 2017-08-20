import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'single-project',
    styleUrl: 'single-project.scss'
})
export class SingleProject {

    @Prop() project;

    render() {
        if (this.project){
            let tags = [];
            this.project.tags.forEach(tag => {
                tags.push(
                    <tech-chip tag={tag}></tech-chip>
                );
            });
            return (
                <div class="card">
                    <div class="container">
                        <div class="title">
                            <p>{this.project.title}</p>
                        </div>
                        <div class="description">
                            <p>{this.project.description}</p>
                        </div>
                        <div class="tags">
                            {tags}
                        </div>
                        <div class="more">
                            <a href={this.project.more}>
                                View more
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
    }
}