import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core';


@Component({
  tag: 'lazy-img',
  styleUrl: 'lazy-img.scss'
})
export class LazyImg {

  @Element() el: HTMLElement;

  @Prop() src: string;
  @Prop() alt: string;

  @State() oldSrc: string;

  @Event() lazyImgloaded: EventEmitter<HTMLImageElement>;

  io: IntersectionObserver;

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  componentWillUpdate() {
    if (this.src !== this.oldSrc) {
      this.addIntersectionObserver();
    }
    this.oldSrc = this.src;
  }

  handleImage() {
    const image: HTMLImageElement = this.el.querySelector('img');
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
      this.lazyImgloaded.emit(image);
    };
  }

  addIntersectionObserver() {
    if (!this.src) {
      return;
    }
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any) => {
        if (data[0].isIntersecting) {
          this.handleImage();
          this.removeIntersectionObserver();
        }
      })

      this.io.observe(this.el.querySelector('img'));
    } else {
      this.handleImage();
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  render() {
    return (
      <img data-src={this.src} alt={this.alt}></img>
    );
  }
}
