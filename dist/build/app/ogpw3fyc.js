/*! Built with http://stenciljs.com */

App.loadStyles("my-cv","my-cv .my-cv-container{margin:25px 0 25px 0;padding:20px;display:-webkit-flex;display:flex;-webkit-flex-direction:row;-webkit-align-items:center;flex-direction:column;align-items:center;-webkit-justify-content:center;justify-content:center;background:#ff6b6b;color:#212121;-webkit-transition:background-color .5s linear;-ms-transition:background-color .5s linear;transition:background-color .5s linear}my-cv .my-cv-container img{height:80px;width:80px}my-cv .my-cv-container span{padding-top:10px;cursor:default}my-cv .my-cv-container:hover{background:#ff4d4d}\nmy-cv.hydrated{visibility:inherit}","my-experience","my-experience .container-fluid .row{padding:25px 25px 25px 25px}my-experience .timeline{line-height:1.4em;list-style:none;margin:0;padding:0;width:100%}my-experience .timeline h1,my-experience .timeline h2,my-experience .timeline h3,my-experience .timeline h4,my-experience .timeline h5,my-experience .timeline h6{line-height:inherit}my-experience .timeline-item{padding-top:5px;padding-left:40px;position:relative;cursor:default}my-experience .timeline-item:last-child{padding-bottom:0}my-experience .timeline-info{color:#212121;font-size:16px;font-weight:600;letter-spacing:3px;margin:0 0 .5em 0;text-transform:uppercase;white-space:nowrap}my-experience .timeline-marker{position:absolute;top:0;bottom:0;left:0;width:15px}my-experience .timeline-marker:before{background:#ff6b6b;border:3px solid transparent;border-radius:100%;content:\"\";display:block;height:15px;position:absolute;top:4px;left:0;width:15px;transition:background .3s ease-in-out,border .3s ease-in-out}my-experience .timeline-marker:after{content:\"\";width:3px;background:#ccd5db;display:block;position:absolute;top:30px;bottom:0;left:9px}.timeline-item:last-child my-experience .timeline-marker:after{content:none}my-experience .timeline-item:not(.period):hover .timeline-marker:before{background:0 0;border:3px solid #ff6b6b}my-experience .timeline-item:not(.period) .timeline-title{color:#212121;font-weight:600;font-size:16px;font-weight:400;line-height:24px;margin:0}my-experience .timeline-content{padding-bottom:40px}my-experience .timeline-content p{color:#666;font-size:16px;font-weight:400;line-height:24px;margin:0}my-experience .period{padding:0}my-experience .period .timeline-info{display:none}my-experience .period .timeline-marker:before{background:0 0;content:\"\";width:20px;height:auto;border:none;border-radius:0;top:0;bottom:30px;position:absolute;border-top:3px solid #ccd5db;border-bottom:3px solid #ccd5db}my-experience .period .timeline-marker:after{content:\"\";height:32px;top:auto}my-experience .period .timeline-content{padding:20px 0 50px}my-experience .period .timeline-title{color:#212121;font-size:18px;margin:0}\@media (min-width:768px){my-experience .timeline-centered .timeline,my-experience .timeline-split .timeline{display:table}my-experience .timeline-centered .timeline-item,my-experience .timeline-split .timeline-item{display:table-row;padding:0}my-experience .timeline-centered .period .timeline-info,my-experience .timeline-centered .timeline-content,my-experience .timeline-centered .timeline-info,my-experience .timeline-centered .timeline-marker,my-experience .timeline-split .period .timeline-info,my-experience .timeline-split .timeline-content,my-experience .timeline-split .timeline-info,my-experience .timeline-split .timeline-marker{display:table-cell;vertical-align:top}my-experience .timeline-centered .timeline-marker,my-experience .timeline-split .timeline-marker{position:relative}my-experience .timeline-centered .timeline-content,my-experience .timeline-split .timeline-content{padding-left:30px}my-experience .timeline-centered .timeline-info,my-experience .timeline-split .timeline-info{padding-right:30px}my-experience .timeline-centered .period .timeline-title,my-experience .timeline-split .period .timeline-title{position:relative;left:-45px}}\@media (min-width:992px){my-experience .timeline-centered,my-experience .timeline-centered .timeline-content,my-experience .timeline-centered .timeline-info,my-experience .timeline-centered .timeline-item,my-experience .timeline-centered .timeline-marker{display:block;margin:0;padding:0}my-experience .timeline-centered .timeline-item{padding-bottom:40px;overflow:hidden}my-experience .timeline-centered .timeline-marker{position:absolute;left:50%;margin-left:-7.5px}my-experience .timeline-centered .timeline-content,my-experience .timeline-centered .timeline-info{width:50%}my-experience .timeline-centered>.timeline-item:nth-child(odd) .timeline-info{float:left;text-align:right;padding-right:30px}my-experience .timeline-centered>.timeline-item:nth-child(odd) .timeline-content{float:right;text-align:left;padding-left:30px}my-experience .timeline-centered>.timeline-item:nth-child(even) .timeline-info{float:right;text-align:left;padding-left:30px}my-experience .timeline-centered>.timeline-item:nth-child(even) .timeline-content{float:left;text-align:right;padding-right:30px}my-experience .timeline-centered>.timeline-item.period .timeline-content{float:none;padding:0;width:100%;text-align:center}my-experience .timeline-centered .timeline-item.period{padding:50px 0 90px}my-experience .timeline-centered .period .timeline-marker:after{height:30px;bottom:0;top:auto}my-experience .timeline-centered .period .timeline-title{left:auto}}my-experience .marker-outline .timeline-marker:before{background:0 0;border-color:#ff6b6b}my-experience .marker-outline .timeline-item:hover .timeline-marker:before{background:#ff6b6b}\@media only screen and (min-width:600px){my-experience .container-fluid .row{padding:25px 50px 25px 50px}}\@media only screen and (min-width:768px){my-experience .container-fluid .row{padding:25px 125px 25px 125px}}\nmy-experience.hydrated{visibility:inherit}","my-hobbies","my-hobbies .hobbies{display:flex;justify-content:space-around;padding:25px 25px 25px 25px}\@media only screen and (min-width:600px){my-hobbies .hobbies{padding:25px 50px 25px 50px}}\@media only screen and (min-width:768px){my-hobbies .hobbies{padding:25px 125px 25px 125px}}\nmy-hobbies.hydrated{visibility:inherit}","my-info","my-info .container{padding:25px 25px 25px 25px}\@media only screen and (min-width:600px){my-info .container{padding:25px 50px 25px 50px}}\@media only screen and (min-width:768px){my-info .container{padding:25px 125px 25px 125px}}\nmy-info.hydrated{visibility:inherit}","my-projects","my-projects .my-projects-container{display:grid;padding:25px 25px 25px 25px;grid-template-columns:1fr;grid-column-gap:10px;grid-row-gap:10px}\@media only screen and (min-width:600px){my-projects .my-projects-container{padding:25px 50px 25px 50px;grid-template-columns:1fr 1fr}}\@media only screen and (min-width:768px){my-projects .my-projects-container{padding:25px 125px 25px 125px}}\@media only screen and (min-width:992px){my-projects .my-projects-container{grid-template-columns:1fr 1fr 1fr}}\nmy-projects.hydrated{visibility:inherit}","web-footer","web-footer footer{display:block;color:#fff}web-footer footer .footer-main{padding-top:50px;padding-bottom:25px;background-color:#161618;border-bottom:1px solid #343434;text-align:center;cursor:default}web-footer footer .footer-main .footer-links{padding-top:20px}web-footer footer .footer-main .footer-links a{color:#fff;text-decoration:none;cursor:pointer;margin-left:15px;margin-right:15px}web-footer footer .footer-main .footer-links a img{height:16px;width:16px}web-footer footer .footer-main .footer-links a img:hover{-webkit-animation:spin .5s linear;-moz-animation:spin .5s linear;animation:spin .5s linear}web-footer footer .footer-info{background-color:#161618;padding:1.5em 0;text-align:center;cursor:default}web-footer footer .footer-info i{padding-left:5px;padding-right:5px}\@-moz-keyframes spin{100%{-moz-transform:rotate(360deg)}}\@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg)}}\@keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\nweb-footer.hydrated{visibility:inherit}","web-header","web-header header{display:block;position:relative}web-header header img{position:relative;width:100%;height:auto}web-header header .quote{height:100%;width:100%;top:40%;left:0;position:absolute;padding:0}web-header header .quote p{color:#fff;text-align:center;line-height:2em;font-size:16px;font-style:italic;font-weight:600;margin:0;cursor:default}\@media only screen and (min-width:600px){web-header header .quote p{font-size:20px}}\@media only screen and (min-width:768px){web-header header .quote p{font-size:24px}}\nweb-header.hydrated{visibility:inherit}");
App.loadComponents("ogpw3fyc",function(e,t,i,s){"use strict";class l{render(){return t("div",{class:"my-cv-container"},t("a",{href:"../assets/docs/Resume.pdf",download:"resume"},t("st-img",{src:"../assets/download.svg",alt:"Download"})),t("span",{class:"highlighted"},"Download my CV (PDF - 84Kb)"))}}class n{render(){return t("div",{class:"container-fluid"},t("div",{class:"row example-basic"},t("div",{class:"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2"},t("ul",{class:"timeline"},t("li",{class:"timeline-item period"},t("div",{class:"timeline-info"}),t("div",{class:"timeline-marker"}),t("div",{class:"timeline-content"},t("h2",{class:"timeline-title"},"2016"))),t("li",{class:"timeline-item"},t("div",{class:"timeline-info"},t("span",null,"October")),t("div",{class:"timeline-marker"}),t("div",{class:"timeline-content"},t("h3",{class:"timeline-title"},"Beeva - Frontend Developer"),t("p",null,"Make some fixes and add new functionality into an internal BBVA app based on Polymer and Cells."),t("p",null,"Working on the innovation team using javascript with es6, webpack, babel and karma."))),t("li",{class:"timeline-item"},t("div",{class:"timeline-info"},t("span",null,"March")),t("div",{class:"timeline-marker"}),t("div",{class:"timeline-content"},t("h3",{class:"timeline-title"},"Sopra Steria - Frontend Developer"),t("p",null,"Development of the mobile app for sanitas, this app was developed using Ionic v1, AngularJS, SASS to generate the CSS Styles and gulp to automate tasks."))),t("li",{class:"timeline-item period"},t("div",{class:"timeline-info"}),t("div",{class:"timeline-marker"}),t("div",{class:"timeline-content"},t("h2",{class:"timeline-title"},"2015"))),t("li",{class:"timeline-item"},t("div",{class:"timeline-info"},t("span",null,"December")),t("div",{class:"timeline-marker"}),t("div",{class:"timeline-content"},t("h3",{class:"timeline-title"},"BQ - Frontend Developer"),t("p",null,"Development of the bitbloq project to offer children the possibility of starting with robotics from small. Platform developed using HTML5, SASS and AngularJS. Also testing e2e with protractor and grunt for automate tasks."))),t("li",{class:"timeline-item"},t("div",{class:"timeline-info"},t("span",null,"April")),t("div",{class:"timeline-marker"}),t("div",{class:"timeline-content"},t("h3",{class:"timeline-title"},"Altran - Frontend Developer"),t("p",null,"Analysis and Programming mobile tools in internal projects. This projects was made by Cordova, HTML5, Javascript and CSS."))),t("li",{class:"timeline-item period"},t("div",{class:"timeline-info"}),t("div",{class:"timeline-marker"}),t("div",{class:"timeline-content"},t("h2",{class:"timeline-title"},"2014"))),t("li",{class:"timeline-item"},t("div",{class:"timeline-info"},t("span",null,"October")),t("div",{class:"timeline-marker"}),t("div",{class:"timeline-content"},t("h3",{class:"timeline-title"},"Taalk - Frontend Developer"),t("p",null,"Development of a revolutionary platform to practice languages collaboratively where users can practice while teaching. Platform developed by Python, Django, HTML, Javascript, JQuery and CSS. Also the Sockets.io library fro real time streaming.")))))))}}class a{constructor(){this.hobbies=[{path:"../assets/travel.svg",alt:"Travel"},{path:"../assets/water-activities.svg",alt:"Water Activities"},{path:"../assets/snowboard.svg",alt:"Snowboard"},{path:"../assets/coding.svg",alt:"Coding"},{path:"../assets/films.svg",alt:"Films"}]}render(){let e=[];return this.hobbies.forEach(i=>{e.push(t("single-hobby",{path:i.path,alt:i.alt}))}),t("div",{class:"hobbies"},e)}}class o{render(){return t("div",{class:"container"},t("p",{class:"italic"},"I'm a",t("span",{class:"highlighted"}," Front-end and Web developer "),"based on",t("span",{class:"highlighted"}," Madrid"),". I studied computer engineering degree and learned by myself the technologies i use now to work like Angular and Ionic. I'm interested in everything related to the web, mostly Web Components and Progressive Web Apps and i like to learn new things constantly and try them in side projects."))}}class r{constructor(){this.projects=[{title:"Pantrify",description:"A new simple way to organize your pantry from your mobile device.",tags:["Angular","Ionic","Firebase"],more:"https://github.com/Fdom92/Pantrify"},{title:"Progressive Weather App",description:"A progressive web app to get all the information of the time of where you are.",tags:["Angular","Ionic","Firebase"],more:"https://github.com/Fdom92/progressive-weather-app"},{title:"Stencil Weather PWA",description:"A progressive web app to get information of the time using Stencil.",tags:["Stenciljs"],more:"https://github.com/Fdom92/stencil-weather-pwa"},{title:"Personal web site",description:"My personal web site was also made using just Stencil, it is also a PWA.",tags:["Stenciljs"],more:"https://github.com/Fdom92/personal-web-site"}]}render(){let e=[];return this.projects.forEach(i=>{e.push(t("single-project",{project:i}))}),t("div",{class:"my-projects-container"},e)}}class c{render(){return t("footer",null,t("div",{class:"footer-main"},"Feel free to contact me on",t("div",{class:"footer-links"},t("a",{target:"_blank",href:"https://twitter.com/fdom92",rel:"noopener",title:"This link opens my twitter account in a new tab."},t("st-img",{src:"../assets/logos/logo-twitter.svg",alt:"Twitter"})),t("a",{target:"_blank",href:"https://github.com/Fdom92/",rel:"noopener",title:"This link opens my github account in a new tab."},t("st-img",{src:"../assets/logos/logo-github.svg",alt:"Github"})),t("a",{target:"_blank",href:"https://linkedin.com/in/fdom92",rel:"noopener",title:"This link opens my linkedin account in a new tab."},t("st-img",{src:"../assets/logos/logo-linkedin.svg",alt:"Linkedin"})),t("a",{target:"_blank",href:"https://stackoverflow.com/users/6691908/fernando-del-olmo",rel:"noopener",title:"This link opens my stackoverflow account in a new tab."},t("st-img",{src:"../assets/logos/logo-stackoverflow.svg",alt:"Stack-overflow"})))),t("div",{class:"footer-info"},"© 2017 — Developed with ❤️ by Fernando Del Olmo Martín"))}}class m{render(){return t("header",null,t("img",{src:"../assets/header.jpg",alt:"Header"}),t("div",{class:"quote"},t("p",null,"\"Opportunities don't happen,"),t("p",null,'you create them"')))}}e["my-cv"]=l,e["my-experience"]=n,e["my-hobbies"]=a,e["my-info"]=o,e["my-projects"]=r,e["web-footer"]=c,e["web-header"]=m},["my-cv",0,{}],["my-experience",0,{}],["my-hobbies",[["hobbies",5,0,1]],{}],["my-info",0,{}],["my-projects",[["projects",5,0,1]],{}],["web-footer",0,{}],["web-header",0,{}]);;