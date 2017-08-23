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
                    <div class="col-md-12 example-title">
                        <h2>Timeline</h2>
                    </div>
                    <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                        <ul class="timeline">
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>March 12, 2016</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Event Title</h3>
                                    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                        eu pede mollis pretium. Pellentesque ut neque.</p>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>March 23, 2016</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Event Title</h3>
                                    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                        eu pede mollis pretium. Pellentesque ut neque. </p>
                                </div>
                            </li>
                            <li class="timeline-item period">
                                <div class="timeline-info"></div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h2 class="timeline-title">April 2016</h2>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>April 02, 2016</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Event Title</h3>
                                    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                        eu pede mollis pretium. Pellentesque ut neque. </p>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>April 28, 2016</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Event Title</h3>
                                    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                        eu pede mollis pretium. Pellentesque ut neque. </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div class="row example-split">
                    <div class="col-md-12 example-title">
                        <h2>Split Timeline</h2>
                        <p>Small devices (tablets, 768px and up)</p>
                    </div>
                    <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                        <ul class="timeline timeline-split">
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>March 12, 2016</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Event Title</h3>
                                    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                        eu pede mollis pretium. Pellentesque ut neque.</p>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>March 23, 2016</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Event Title</h3>
                                    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                        eu pede mollis pretium. Pellentesque ut neque. </p>
                                </div>
                            </li>
                            <li class="timeline-item period">
                                <div class="timeline-info"></div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h2 class="timeline-title">April 2016</h2>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>April 02, 2016</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Event Title</h3>
                                    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                        eu pede mollis pretium. Pellentesque ut neque. </p>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>April 28, 2016</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Event Title</h3>
                                    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                        eu pede mollis pretium. Pellentesque ut neque. </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> */}
                {/* <div class="row example-centered">
                    <div class="col-md-12 example-title">
                        <h2>Centered Timeline</h2>
                        <p>Medium devices (desktops, 992px and up).</p>
                    </div>
                    <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                        <ul class="timeline timeline-centered">
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>March 12, 2016</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Event Title</h3>
                                    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                        eu pede mollis pretium. Pellentesque ut neque.</p>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>March 23, 2016</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Event Title</h3>
                                    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                        eu pede mollis pretium. Pellentesque ut neque. </p>
                                </div>
                            </li>
                            <li class="timeline-item period">
                                <div class="timeline-info"></div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h2 class="timeline-title">April 2016</h2>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>April 02, 2016</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Event Title</h3>
                                    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                        eu pede mollis pretium. Pellentesque ut neque. </p>
                                </div>
                            </li>
                            <li class="timeline-item">
                                <div class="timeline-info">
                                    <span>April 28, 2016</span>
                                </div>
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">Event Title</h3>
                                    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                        eu pede mollis pretium. Pellentesque ut neque. </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
        );
    }
}