import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as d}from"./index-DJO9vBfz.js";const x=({children:m,title:h,subtitle:a,popsFrom:i,className:c,delayInMs:s,arrow:u=!0})=>{const[f,n]=d.useState(!1),l=d.useRef(null);function g(){n(!0)}function p(){n(!1)}function y(){l.current!==null&&clearTimeout(l.current),g()}function b(){s?l.current=setTimeout(()=>{l.current=null,p()},s):p()}let t="",o="",r="";switch(i){case"right":t="left-full top-1/2 -translate-y-1/2 ml-1.5",o="flex-row-reverse",r="polygon(100% 0%, 100% 100%, 0% 50%)";break;case"left":t="right-full top-1/2 -translate-y-1/2 mr-1.5",o="flex-row",r="polygon(0% 0%, 0% 100%, 100% 50%)";break;case"top":t="bottom-full left-1/2 -translate-x-1/2 mb-1.5 origin-bottom",o="flex-col",r="polygon(0% 0%, 100% 0%, 50% 100%)";break;case"bottom":t="top-full left-1/2 -translate-x-1/2 mt-1.5",o="flex-col-reverse",r="polygon(50% 0%, 0% 100%, 100% 100%)";break}return e.jsxs("div",{className:`relative w-max ${c}`,onMouseEnter:y,onMouseLeave:b,style:{lineHeight:0},children:[e.jsxs("div",{className:`pointer-events-none absolute ${t} flex items-center ${o} drop-shadow-tooltip transition-all duration-150 ${f?"scale-100 opacity-100":"scale-50 opacity-0"}`,children:[e.jsxs("div",{className:"w-max rounded-lg bg-gray-90 px-4 py-1.5 text-center dark:bg-gray-5",children:[e.jsx("p",{className:"text-base text-white",children:h}),a&&e.jsx("p",{className:"-mt-1 text-sm text-gray-40",children:a})]}),u&&e.jsx("div",{className:`bg-gray-90 dark:bg-gray-5 ${i==="bottom"||i==="top"?"h-1.5 w-4":"h-4 w-1.5"}`,style:{clipPath:r,marginTop:i==="top"?"-1px":void 0},"data-testid":"tooltip-arrow"})]}),m]})};x.__docgenInfo={description:`Tooltip component

@property {ReactNode} children
- The content that triggers the tooltip when hovered over.

@property {string} title
- The main text displayed inside the tooltip. This is required.

@property {string} [subtitle]
- An optional subtitle displayed below the main title inside the tooltip.

@property {'right' | 'left' | 'top' | 'bottom'} popsFrom
- Determines the direction from which the tooltip appears relative to the trigger element.
  - "right": Tooltip appears to the right of the element.
  - "left": Tooltip appears to the left of the element.
  - "top": Tooltip appears above the element.
  - "bottom": Tooltip appears below the element.

@property {string} [className]
- Additional CSS classes to style the tooltip container. Use to override default styles.

@property {number} [delayInMs]
- The delay (in milliseconds) before hiding the tooltip after the mouse leaves the trigger element.
  - If not provided, the tooltip hides immediately.

@property {boolean} [arrow=true]
- Whether to display the arrow pointing to the trigger element.
  - Default is true.

@returns {JSX.Element}
- A tooltip component that shows additional information when hovering over its children.`,methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},popsFrom:{required:!0,tsType:{name:"union",raw:"'right' | 'left' | 'top' | 'bottom'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},delayInMs:{required:!1,tsType:{name:"number"},description:""},arrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{x as T};
