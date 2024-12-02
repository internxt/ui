import{j as o}from"./jsx-runtime-DEdD30eg.js";import{R as e,r as m}from"./index-RYns6xqu.js";import{b as w}from"./IconBase-C0B5zwrg.js";const j=new Map([["bold",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"}))],["duotone",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"}),e.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["fill",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["light",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"}))],["regular",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["thin",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"}))]]);var E=Object.defineProperty,C=Object.defineProperties,M=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,b=(r,t,a)=>t in r?E(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,q=(r,t)=>{for(var a in t||(t={}))N.call(t,a)&&b(r,a,t[a]);if(g)for(var a of g(t))Z.call(t,a)&&b(r,a,t[a]);return r},A=(r,t)=>C(r,M(t));const x=m.forwardRef((r,t)=>e.createElement(w,A(q({ref:t},r),{weights:j})));x.displayName="Copy";const V=({children:r,title:t,subtitle:a,popsFrom:l,className:u,delayInMs:i,arrow:c=!0})=>{const[h,y]=m.useState(!1),d=m.useRef(null);function H(){y(!0)}function f(){y(!1)}function v(){d.current!==null&&clearTimeout(d.current),H()}function T(){i?d.current=setTimeout(()=>{d.current=null,f()},i):f()}let n="",s="",p="";switch(l){case"right":n="left-full top-1/2 -translate-y-1/2 ml-1.5",s="flex-row-reverse",p="polygon(100% 0%, 100% 100%, 0% 50%)";break;case"left":n="right-full top-1/2 -translate-y-1/2 mr-1.5",s="flex-row",p="polygon(0% 0%, 0% 100%, 100% 50%)";break;case"top":n="bottom-full left-1/2 -translate-x-1/2 mb-1.5 origin-bottom",s="flex-col",p="polygon(0% 0%, 100% 0%, 50% 100%)";break;case"bottom":n="top-full left-1/2 -translate-x-1/2 mt-1.5",s="flex-col-reverse",p="polygon(50% 0%, 0% 100%, 100% 100%)";break}return o.jsxs("div",{className:`relative w-max ${u}`,onMouseEnter:v,onMouseLeave:T,style:{lineHeight:0},children:[o.jsxs("div",{className:`pointer-events-none absolute ${n} flex items-center ${s} drop-shadow-tooltip transition-all duration-150 ${h?"scale-100 opacity-100":"scale-50 opacity-0"}`,children:[o.jsxs("div",{className:"w-max rounded-lg bg-gray-90 px-4 py-1.5 text-center dark:bg-gray-5",children:[o.jsx("p",{className:"text-base text-white",children:t}),a&&o.jsx("p",{className:"-mt-1 text-sm text-gray-40",children:a})]}),c&&o.jsx("div",{className:`bg-gray-90 dark:bg-gray-5 ${l==="bottom"||l==="top"?"h-1.5 w-4":"h-4 w-1.5"}`,style:{clipPath:p,marginTop:l==="top"?"-1px":void 0},"data-testid":"tooltip-arrow"})]}),r]})};V.__docgenInfo={description:`Tooltip component

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
- A tooltip component that shows additional information when hovering over its children.`,methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},popsFrom:{required:!0,tsType:{name:"union",raw:"'right' | 'left' | 'top' | 'bottom'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},delayInMs:{required:!1,tsType:{name:"number"},description:""},arrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};function O({className:r="",classText:t="select-text text-gray-80",text:a,copiedText:l="Copied!",copyToClipboardText:u="Copy to clipboard"}){const[i,c]=m.useState(!1);async function h(){await navigator.clipboard.writeText(a),c(!0),setTimeout(()=>c(!1),1e3)}return o.jsxs("div",{className:`${r} flex h-11 items-center justify-between rounded-md border border-gray-10 bg-gray-5 px-4`,children:[o.jsx("p",{className:`${t}`,children:a}),o.jsx(V,{className:"ml-6",popsFrom:"bottom",title:i?l:u,delayInMs:i?500:void 0,children:o.jsx("button",{disabled:i,onClick:h,children:o.jsx(x,{className:"shrink-0 text-gray-50 hover:text-gray-60",size:24})})})]})}O.__docgenInfo={description:`Copyable component

@property {string} [className]
- Custom classes for the outer container.

@property {string} [classText]
- Custom classes for the selected text.

@property {string} text
- The text content to be displayed and copied to the clipboard.

@property {string} copiedText
- The text to display in the tooltip when the content has been copied.

@property {string} copyToClipboardText
- The text to display in the tooltip when the content can be copied to the clipboard.`,methods:[],displayName:"Copyable",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},classText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'select-text text-gray-80'",computed:!1}},text:{required:!0,tsType:{name:"string"},description:""},copiedText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Copied!'",computed:!1}},copyToClipboardText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Copy to clipboard'",computed:!1}}}};export{O as C,V as T};
