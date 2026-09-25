import { Component, State, h } from '@stencil/core';

@Component({
    tag: 'web-nav',
    styleUrl: 'web-nav.scss'
})
export class WebNav {

  @State() activeId: string = '';
  @State() scrolled: boolean = false;

  sections: string[] = ['about', 'skills', 'portfolio', 'experience'];

  componentDidLoad() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    this.scrolled = window.scrollY > 40;

    const offset = 90;
    let current = this.sections[0];
    this.sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) {
        current = id;
      }
    });
    this.activeId = current;
  }

  render() {
    return (
      <nav class={{ 'web-nav': true, 'scrolled': this.scrolled }}>
        <div class="web-nav-inner">
          <a class="brand" href="#">Home</a>
          <div class="links">
            {this.sections.map(id => (
              <a
                href={`#${id}`}
                class={{ active: this.activeId === id }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
          <a class="cta" href="../assets/Fernando_del_Olmo_CV.pdf" download="Fernando_del_Olmo_CV">
            Download CV
          </a>
        </div>
      </nav>
    );
  }
}
