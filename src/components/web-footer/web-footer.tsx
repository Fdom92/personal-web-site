import { Component } from '@stencil/core';


@Component({
    tag: 'web-footer',
    styleUrl: 'web-footer.scss'
})
export class WebFooter {

    render() {
        return (
            <footer>
                <div class="footer-main">
                    Feel free to contact me on
                    <div class="footer-links">
                        <a target="_blank" href="https://twitter.com/fdom92" rel="noopener"
                        title="This link opens my twitter account in a new tab.">
                            <st-img src="../assets/logos/logo-twitter.svg" alt="Twitter"/>
                        </a>
                        <a target="_blank" href="https://github.com/Fdom92/" rel="noopener"
                        title="This link opens my github account in a new tab.">
                            <st-img src="../assets/logos/logo-github.svg" alt="Github"/>
                        </a>
                        <a target="_blank" href="https://linkedin.com/in/fdom92" rel="noopener"
                        title="This link opens my linkedin account in a new tab.">
                            <st-img src="../assets/logos/logo-linkedin.svg" alt="Linkedin"/>
                        </a>
                        <a target="_blank" href="https://stackoverflow.com/users/6691908/fernando-del-olmo" rel="noopener"
                        title="This link opens my stackoverflow account in a new tab.">
                            <st-img src="../assets/logos/logo-stackoverflow.svg" alt="Stack-overflow"/>
                        </a>
                    </div>
                </div>
                <div class="footer-info">
                    © 2017 — Developed with ❤️ by Fernando Del Olmo Martín
                </div>
            </footer>
        );
    }
}