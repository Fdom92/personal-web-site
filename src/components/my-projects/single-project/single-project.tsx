import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'single-project',
    styleUrl: 'single-project.scss'
})
export class SingleProject {

  @Prop() project: any;

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
              <h2>{this.project.title}</h2>
              <div class="code">
                <label>Code</label>
                <a target="_blank" href={this.project.more} rel="noopener"
                title="This link opens my project code in a new tab.">
                  <lazy-img src="../assets/logo-github-2.svg" alt="Github"/>
                </a>
              </div>
            </div>
            <div class="description">
              <p>{this.project.description}</p>
            </div>
            <div class="tags">
              {tags}
            </div>
          </div>
        </div>
      );
    }
  }
}
