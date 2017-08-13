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
                        <a href="https://twitter.com/fdom92">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/Fdom92/">
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://linkedin.com/in/fdom92">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="https://stackoverflow.com/users/6691908/fernando-del-olmo">
                            <i class="fa fa-stack-overflow" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div class="footer-info">
                    © 2017 — Developed with <i class="em em-heart"></i> by Fernando del olmo
                </div>
            </footer>
        );
    }
}