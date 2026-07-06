import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'single-project',
    styleUrl: 'single-project.scss'
})
export class SingleProject {

  @Prop() project: any;

  render() {
    if (this.project){
      if (this.project.lastCard) {
        return (
          <a class="card card-cta" target="_blank" rel="noopener" href={this.project.more}
          title="This link opens my github account in a new tab.">
            <div class="container">
              <h2>{this.project.title}</h2>
              <p>{this.project.description}</p>
              <span class="arrow">View on GitHub →</span>
            </div>
          </a>
        );
      }
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
              <a class="code-link" target="_blank" href={this.project.more} rel="noopener"
              title="This link opens my project code in a new tab.">
                <lazy-img src="../assets/logo-github-2.svg" alt="Github"/>
              </a>
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
