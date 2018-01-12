import { Component } from '@stencil/core';


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
                                    <h2 class="timeline-title">2016</h2>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>November</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Webjunto - Software Engineer</h3>
                                    <p>Working on projects using Angular and Ionic</p>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>October</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Beeva - Frontend Developer</h3>
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
                                    <h3 class="timeline-title">Sopra Steria - Frontend Developer</h3>
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
                                    <h3 class="timeline-title">BQ - Frontend Developer</h3>
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
                                    <h3 class="timeline-title">Altran - Frontend Developer</h3>
                                    <p>Analysis and Programming mobile tools in internal projects.
                                        This projects was made by Cordova, HTML5, Javascript and CSS.</p>
                                </div>
                            </li>
                            <li class="timeline-item period">
                                <div class="timeline-info"></div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h2 class="timeline-title">2014</h2>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>October</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Taalk - Frontend Developer</h3>
                                    <p>Development of a revolutionary platform to practice languages collaboratively where users can practice while teaching.
                                        Platform developed by Python, Django, HTML, Javascript, JQuery and CSS.
                                        Also the Sockets.io library fro real time streaming.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}