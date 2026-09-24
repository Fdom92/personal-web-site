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
                                    <span>April</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">
                                        Senior Software Engineer at
                                        <a class="timeline-link" href="https://openforge.io/">OpenForge</a>
                                    </h3>
                                    <p>Apr 2018 – Present. Remote (Philadelphia, PA, USA). Led the full development lifecycle of client projects, including the Edwards Lifesciences mobile app, from scoping and architecture through to production. Built cross-platform mobile and web apps with Angular, Ionic, Capacitor, Stencil, NGXS, Firebase and Node.js. Improved team processes and tooling, and mentored junior developers through architecture guidance and code reviews.</p>
                                    <p><a class="timeline-link" href="https://www.startupwars.com/">Startup Wars</a> — internal OpenForge product. Joined in its early development phases; now used by 10k+ users and 100+ US institutions. Drove Scrum ceremonies and contributed to architectural decisions.</p>
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
                                    <p>Nov 2017 – Apr 2018. Remote (Philadelphia, PA, USA). Assisted in the full development lifecycle of web and mobile products, from architectural scoping to implementation, using Angular, Ionic, Firebase and Node.js.</p>
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
                                    <p>Oct 2016 – Oct 2017. On-site (Madrid, Spain). Developed new features for an internal BBVA application and later joined the innovation team, working with ES6, Webpack, Babel and Karma.</p>
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
                                    <p>Development of internal mobile tools using Apache Cordova, HTML5, JavaScript and CSS.</p>
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
                                    <h3 class="timeline-title">
                                        Software Developer at Taalk
                                    </h3>
                                    <p>Built a real-time collaborative language learning platform using Python, Django, JavaScript, jQuery and Socket.io.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
