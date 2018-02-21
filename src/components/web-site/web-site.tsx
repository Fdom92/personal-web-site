import '@stencil/router';
import '@ionic/core';
import { Component, Prop, Listen } from '@stencil/core';
import { ToastController } from '@ionic/core';

@Component({
    tag: 'web-site',
    styleUrl: 'web-site.scss'
})
export class WebSite {

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  componentDidLoad() {
    window.addEventListener('swUpdate', () => {
      this.toastCtrl.create({
        message: 'New version available',
        showCloseButton: true,
        closeButtonText: 'Reload'
      }).then((toast) => {
        toast.present();
      });
    })
  }

  @Listen('body:ionToastWillDismiss')
  reload() {
    window.location.reload();
  }

  render() {
    return [
      <web-header></web-header>,
      <h1 class="section-title">About me</h1>,
      <my-info></my-info>,
      <h1 class="section-title">Portfolio</h1>,
      <my-projects></my-projects>,
      <h1 class="section-title">Work Experience</h1>,
      <my-experience></my-experience>,
      <my-cv></my-cv>,
      <h1 class="section-title">Hobbies</h1>,
      <my-hobbies></my-hobbies>,
      <web-footer></web-footer>
    ];
  }
}
