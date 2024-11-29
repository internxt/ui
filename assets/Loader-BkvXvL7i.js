import{j as e}from"./jsx-runtime-DEdD30eg.js";const l=({classNameContainer:a,classNameLoader:s,classNameText:t,type:i="spinner",text:n,size:r=32})=>{const o=i==="spinner";return e.jsx("div",{className:a,children:o?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{className:`animate-spin ${s}`,width:r,height:r,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",role:"img",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824
                3 7.938l3-2.647z`})]}),n&&e.jsx("p",{className:t,children:n})]}):e.jsxs("div",{className:`loader-container ${s}`,children:[e.jsx("div",{className:"loader06"}),n&&e.jsx("p",{className:`loader-text ${t}`,children:n})]})})};l.__docgenInfo={description:`Loader component.

@property {string} [classNameContainer]
- Optional class name for the container wrapping the loader.
Useful for applying custom styles to the outermost container.

@property {string} [classNameLoader]
- Optional class name for the loader element itself (spinner or pulse).
Allows custom styling of the loading animation.

@property {string} [classNameText]
- Optional class name for the text displayed below the loader.
Allows style or adjust the appearance of the text.

@property {'spinner' | 'pulse'} [type='spinner']
- Determines the type of loader to render.
Can be \`'spinner'\` for a rotating animation or \`'pulse'\` for a pulsing effect.
Defaults to \`'spinner'\`.

@property {string} [text]
- Optional text to display below the loader.

@property {number} [size=32]
- Size of the spinner loader in pixels.
Applies to the width and height of the SVG element for the \`'spinner'\` type.
Defaults to \`32\`.`,methods:[],displayName:"Loader",props:{classNameContainer:{required:!1,tsType:{name:"string"},description:""},classNameLoader:{required:!1,tsType:{name:"string"},description:""},classNameText:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'spinner' | 'pulse'",elements:[{name:"literal",value:"'spinner'"},{name:"literal",value:"'pulse'"}]},description:"",defaultValue:{value:"'spinner'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}}}};export{l as L};
