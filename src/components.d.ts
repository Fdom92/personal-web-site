/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface LazyImg {
    'alt': string;
    'src': string;
  }
  interface MyCv {}
  interface MyExperience {}
  interface MyHobbies {}
  interface MyInfo {}
  interface MyProjects {}
  interface SingleHobby {
    'alt': string;
    'path': string;
  }
  interface SingleProject {
    'project': any;
  }
  interface TechChip {
    'tag': string;
  }
  interface WebFooter {}
  interface WebHeader {}
  interface WebSite {}
}

declare global {


  interface HTMLLazyImgElement extends Components.LazyImg, HTMLStencilElement {}
  var HTMLLazyImgElement: {
    prototype: HTMLLazyImgElement;
    new (): HTMLLazyImgElement;
  };

  interface HTMLMyCvElement extends Components.MyCv, HTMLStencilElement {}
  var HTMLMyCvElement: {
    prototype: HTMLMyCvElement;
    new (): HTMLMyCvElement;
  };

  interface HTMLMyExperienceElement extends Components.MyExperience, HTMLStencilElement {}
  var HTMLMyExperienceElement: {
    prototype: HTMLMyExperienceElement;
    new (): HTMLMyExperienceElement;
  };

  interface HTMLMyHobbiesElement extends Components.MyHobbies, HTMLStencilElement {}
  var HTMLMyHobbiesElement: {
    prototype: HTMLMyHobbiesElement;
    new (): HTMLMyHobbiesElement;
  };

  interface HTMLMyInfoElement extends Components.MyInfo, HTMLStencilElement {}
  var HTMLMyInfoElement: {
    prototype: HTMLMyInfoElement;
    new (): HTMLMyInfoElement;
  };

  interface HTMLMyProjectsElement extends Components.MyProjects, HTMLStencilElement {}
  var HTMLMyProjectsElement: {
    prototype: HTMLMyProjectsElement;
    new (): HTMLMyProjectsElement;
  };

  interface HTMLSingleHobbyElement extends Components.SingleHobby, HTMLStencilElement {}
  var HTMLSingleHobbyElement: {
    prototype: HTMLSingleHobbyElement;
    new (): HTMLSingleHobbyElement;
  };

  interface HTMLSingleProjectElement extends Components.SingleProject, HTMLStencilElement {}
  var HTMLSingleProjectElement: {
    prototype: HTMLSingleProjectElement;
    new (): HTMLSingleProjectElement;
  };

  interface HTMLTechChipElement extends Components.TechChip, HTMLStencilElement {}
  var HTMLTechChipElement: {
    prototype: HTMLTechChipElement;
    new (): HTMLTechChipElement;
  };

  interface HTMLWebFooterElement extends Components.WebFooter, HTMLStencilElement {}
  var HTMLWebFooterElement: {
    prototype: HTMLWebFooterElement;
    new (): HTMLWebFooterElement;
  };

  interface HTMLWebHeaderElement extends Components.WebHeader, HTMLStencilElement {}
  var HTMLWebHeaderElement: {
    prototype: HTMLWebHeaderElement;
    new (): HTMLWebHeaderElement;
  };

  interface HTMLWebSiteElement extends Components.WebSite, HTMLStencilElement {}
  var HTMLWebSiteElement: {
    prototype: HTMLWebSiteElement;
    new (): HTMLWebSiteElement;
  };
  interface HTMLElementTagNameMap {
    'lazy-img': HTMLLazyImgElement;
    'my-cv': HTMLMyCvElement;
    'my-experience': HTMLMyExperienceElement;
    'my-hobbies': HTMLMyHobbiesElement;
    'my-info': HTMLMyInfoElement;
    'my-projects': HTMLMyProjectsElement;
    'single-hobby': HTMLSingleHobbyElement;
    'single-project': HTMLSingleProjectElement;
    'tech-chip': HTMLTechChipElement;
    'web-footer': HTMLWebFooterElement;
    'web-header': HTMLWebHeaderElement;
    'web-site': HTMLWebSiteElement;
  }
}

declare namespace LocalJSX {
  interface LazyImg {
    'alt'?: string;
    'onLazyImgloaded'?: (event: CustomEvent<HTMLImageElement>) => void;
    'src'?: string;
  }
  interface MyCv {}
  interface MyExperience {}
  interface MyHobbies {}
  interface MyInfo {}
  interface MyProjects {}
  interface SingleHobby {
    'alt'?: string;
    'path'?: string;
  }
  interface SingleProject {
    'project'?: any;
  }
  interface TechChip {
    'tag'?: string;
  }
  interface WebFooter {}
  interface WebHeader {}
  interface WebSite {}

  interface IntrinsicElements {
    'lazy-img': LazyImg;
    'my-cv': MyCv;
    'my-experience': MyExperience;
    'my-hobbies': MyHobbies;
    'my-info': MyInfo;
    'my-projects': MyProjects;
    'single-hobby': SingleHobby;
    'single-project': SingleProject;
    'tech-chip': TechChip;
    'web-footer': WebFooter;
    'web-header': WebHeader;
    'web-site': WebSite;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'lazy-img': LocalJSX.LazyImg & JSXBase.HTMLAttributes<HTMLLazyImgElement>;
      'my-cv': LocalJSX.MyCv & JSXBase.HTMLAttributes<HTMLMyCvElement>;
      'my-experience': LocalJSX.MyExperience & JSXBase.HTMLAttributes<HTMLMyExperienceElement>;
      'my-hobbies': LocalJSX.MyHobbies & JSXBase.HTMLAttributes<HTMLMyHobbiesElement>;
      'my-info': LocalJSX.MyInfo & JSXBase.HTMLAttributes<HTMLMyInfoElement>;
      'my-projects': LocalJSX.MyProjects & JSXBase.HTMLAttributes<HTMLMyProjectsElement>;
      'single-hobby': LocalJSX.SingleHobby & JSXBase.HTMLAttributes<HTMLSingleHobbyElement>;
      'single-project': LocalJSX.SingleProject & JSXBase.HTMLAttributes<HTMLSingleProjectElement>;
      'tech-chip': LocalJSX.TechChip & JSXBase.HTMLAttributes<HTMLTechChipElement>;
      'web-footer': LocalJSX.WebFooter & JSXBase.HTMLAttributes<HTMLWebFooterElement>;
      'web-header': LocalJSX.WebHeader & JSXBase.HTMLAttributes<HTMLWebHeaderElement>;
      'web-site': LocalJSX.WebSite & JSXBase.HTMLAttributes<HTMLWebSiteElement>;
    }
  }
}


