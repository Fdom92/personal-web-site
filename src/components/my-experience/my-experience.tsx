import { Component, h } from '@stencil/core';


@Component({
    tag: 'my-experience',
    styleUrl: 'my-experience.scss'
})
export class MyExperience {

    render() {
        return (
            <div class="container-fluid">
                <div class="row example-basic">
                    <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                        <ul class="timeline">
                            <li class="timeline-item period">
                                <div class="timeline-info"></div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h2 class="timeline-title">2018</h2>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>March</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">
                                        Software Engineer at
                                        <a class="timeline-link" href="https://openforge.io/">Openforge</a>
                                    </h3>
                                    <p>Working remotely to USA using Angular, Ionic, Stencil, Capacitor, Ngrx and Firebase.</p>
                                </div>
                            </li>
                            <li class="timeline-item period">
                                <div class="timeline-info"></div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h2 class="timeline-title">2017</h2>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>November</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">
                                        Software Engineer at
                                        <a class="timeline-link" href="http://webjunto.com/">Webjunto</a>
                                    </h3>
                                    <p>Working remotely to USA using AngularJS, Angular 2+, Ionic 1, Ionic 2+, Ngrx and firebase.</p>
                                </div>
                            </li>
                            <li class="timeline-item period">
                                <div class="timeline-info"></div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h2 class="timeline-title">2016</h2>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>October</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">
                                    Frontend Developer at
                                        <a class="timeline-link" href="https://www.beeva.com/">Beeva</a>
                                    </h3>
                                    <p>Make some fixes and add new functionality into an internal BBVA app based on Polymer and Cells.</p>
                                    <p>Working on the innovation team using javascript with es6, webpack, babel and karma.</p>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>March</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">
                                        Frontend Developer at
                                        <a class="timeline-link" href="https://www.soprasteria.es">Sopra Steria</a>
                                    </h3>
                                    <p>Development of the mobile app for sanitas, this app was developed using
                                        Ionic v1, AngularJS, SASS to generate the CSS Styles and gulp to automate tasks.</p>
                                </div>
                            </li>
                            <li class="timeline-item period">
                                <div class="timeline-info"></div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h2 class="timeline-title">2015</h2>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>December</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">
                                        Frontend Developer at
                                        <a class="timeline-link" href="https://www.bq.com/es/">BQ</a>
                                    </h3>
                                    <p>Development of the bitbloq project to offer children the possibility of starting with robotics from small.
                                        Platform developed using HTML5, SASS and AngularJS.
                                        Also testing e2e with protractor and grunt for automate tasks.</p>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>April</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">
                                        Frontend Developer at
                                        <a class="timeline-link" href="https://www.altran.com/es/es/">Altran</a>
                                    </h3>
                                    <p>Analysis and Programming mobile tools in internal projects.
                                        This projects was made by Cordova, HTML5, Javascript and CSS.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
