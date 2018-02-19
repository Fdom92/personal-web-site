/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import 'st-img';


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  MyCv as MyCv
} from './components/my-cv/my-cv';

declare global {
  interface HTMLMyCvElement extends MyCv, HTMLStencilElement {
  }
  var HTMLMyCvElement: {
    prototype: HTMLMyCvElement;
    new (): HTMLMyCvElement;
  };
  interface HTMLElementTagNameMap {
    "my-cv": HTMLMyCvElement;
  }
  interface ElementTagNameMap {
    "my-cv": HTMLMyCvElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-cv": JSXElements.MyCvAttributes;
    }
  }
  namespace JSXElements {
    export interface MyCvAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  MyExperience as MyExperience
} from './components/my-experience/my-experience';

declare global {
  interface HTMLMyExperienceElement extends MyExperience, HTMLStencilElement {
  }
  var HTMLMyExperienceElement: {
    prototype: HTMLMyExperienceElement;
    new (): HTMLMyExperienceElement;
  };
  interface HTMLElementTagNameMap {
    "my-experience": HTMLMyExperienceElement;
  }
  interface ElementTagNameMap {
    "my-experience": HTMLMyExperienceElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-experience": JSXElements.MyExperienceAttributes;
    }
  }
  namespace JSXElements {
    export interface MyExperienceAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  MyHobbies as MyHobbies
} from './components/my-hobbies/my-hobbies';

declare global {
  interface HTMLMyHobbiesElement extends MyHobbies, HTMLStencilElement {
  }
  var HTMLMyHobbiesElement: {
    prototype: HTMLMyHobbiesElement;
    new (): HTMLMyHobbiesElement;
  };
  interface HTMLElementTagNameMap {
    "my-hobbies": HTMLMyHobbiesElement;
  }
  interface ElementTagNameMap {
    "my-hobbies": HTMLMyHobbiesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-hobbies": JSXElements.MyHobbiesAttributes;
    }
  }
  namespace JSXElements {
    export interface MyHobbiesAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SingleHobby as SingleHobby
} from './components/my-hobbies/single-hobby/single-hobby';

declare global {
  interface HTMLSingleHobbyElement extends SingleHobby, HTMLStencilElement {
  }
  var HTMLSingleHobbyElement: {
    prototype: HTMLSingleHobbyElement;
    new (): HTMLSingleHobbyElement;
  };
  interface HTMLElementTagNameMap {
    "single-hobby": HTMLSingleHobbyElement;
  }
  interface ElementTagNameMap {
    "single-hobby": HTMLSingleHobbyElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "single-hobby": JSXElements.SingleHobbyAttributes;
    }
  }
  namespace JSXElements {
    export interface SingleHobbyAttributes extends HTMLAttributes {
      alt?: string;
      path?: string;
    }
  }
}


import {
  MyInfo as MyInfo
} from './components/my-info/my-info';

declare global {
  interface HTMLMyInfoElement extends MyInfo, HTMLStencilElement {
  }
  var HTMLMyInfoElement: {
    prototype: HTMLMyInfoElement;
    new (): HTMLMyInfoElement;
  };
  interface HTMLElementTagNameMap {
    "my-info": HTMLMyInfoElement;
  }
  interface ElementTagNameMap {
    "my-info": HTMLMyInfoElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-info": JSXElements.MyInfoAttributes;
    }
  }
  namespace JSXElements {
    export interface MyInfoAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  MyProjects as MyProjects
} from './components/my-projects/my-projects';

declare global {
  interface HTMLMyProjectsElement extends MyProjects, HTMLStencilElement {
  }
  var HTMLMyProjectsElement: {
    prototype: HTMLMyProjectsElement;
    new (): HTMLMyProjectsElement;
  };
  interface HTMLElementTagNameMap {
    "my-projects": HTMLMyProjectsElement;
  }
  interface ElementTagNameMap {
    "my-projects": HTMLMyProjectsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-projects": JSXElements.MyProjectsAttributes;
    }
  }
  namespace JSXElements {
    export interface MyProjectsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SingleProject as SingleProject
} from './components/my-projects/single-project/single-project';

declare global {
  interface HTMLSingleProjectElement extends SingleProject, HTMLStencilElement {
  }
  var HTMLSingleProjectElement: {
    prototype: HTMLSingleProjectElement;
    new (): HTMLSingleProjectElement;
  };
  interface HTMLElementTagNameMap {
    "single-project": HTMLSingleProjectElement;
  }
  interface ElementTagNameMap {
    "single-project": HTMLSingleProjectElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "single-project": JSXElements.SingleProjectAttributes;
    }
  }
  namespace JSXElements {
    export interface SingleProjectAttributes extends HTMLAttributes {
      project?: any;
    }
  }
}


import {
  TechChip as TechChip
} from './components/my-projects/tech-chip/tech-chip';

declare global {
  interface HTMLTechChipElement extends TechChip, HTMLStencilElement {
  }
  var HTMLTechChipElement: {
    prototype: HTMLTechChipElement;
    new (): HTMLTechChipElement;
  };
  interface HTMLElementTagNameMap {
    "tech-chip": HTMLTechChipElement;
  }
  interface ElementTagNameMap {
    "tech-chip": HTMLTechChipElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "tech-chip": JSXElements.TechChipAttributes;
    }
  }
  namespace JSXElements {
    export interface TechChipAttributes extends HTMLAttributes {
      tag?: any;
    }
  }
}


import {
  WebFooter as WebFooter
} from './components/web-footer/web-footer';

declare global {
  interface HTMLWebFooterElement extends WebFooter, HTMLStencilElement {
  }
  var HTMLWebFooterElement: {
    prototype: HTMLWebFooterElement;
    new (): HTMLWebFooterElement;
  };
  interface HTMLElementTagNameMap {
    "web-footer": HTMLWebFooterElement;
  }
  interface ElementTagNameMap {
    "web-footer": HTMLWebFooterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "web-footer": JSXElements.WebFooterAttributes;
    }
  }
  namespace JSXElements {
    export interface WebFooterAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  WebHeader as WebHeader
} from './components/web-header/web-header';

declare global {
  interface HTMLWebHeaderElement extends WebHeader, HTMLStencilElement {
  }
  var HTMLWebHeaderElement: {
    prototype: HTMLWebHeaderElement;
    new (): HTMLWebHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "web-header": HTMLWebHeaderElement;
  }
  interface ElementTagNameMap {
    "web-header": HTMLWebHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "web-header": JSXElements.WebHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface WebHeaderAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  WebSite as WebSite
} from './components/web-site/web-site';

declare global {
  interface HTMLWebSiteElement extends WebSite, HTMLStencilElement {
  }
  var HTMLWebSiteElement: {
    prototype: HTMLWebSiteElement;
    new (): HTMLWebSiteElement;
  };
  interface HTMLElementTagNameMap {
    "web-site": HTMLWebSiteElement;
  }
  interface ElementTagNameMap {
    "web-site": HTMLWebSiteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "web-site": JSXElements.WebSiteAttributes;
    }
  }
  namespace JSXElements {
    export interface WebSiteAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
