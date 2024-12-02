import{j as e}from"./jsx-runtime-DEdD30eg.js";import{R as i,r as a}from"./index-RYns6xqu.js";import{b as j}from"./IconBase-C0B5zwrg.js";import{B as x}from"./Button-LpIkml3t.js";const q=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),i.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]);var L=Object.defineProperty,S=Object.defineProperties,C=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,T=(t,r,n)=>r in t?L(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,P=(t,r)=>{for(var n in r||(r={}))$.call(r,n)&&T(t,n,r[n]);if(w)for(var n of w(r))k.call(r,n)&&T(t,n,r[n]);return t},R=(t,r)=>S(t,C(r));const E=a.forwardRef((t,r)=>i.createElement(j,R(P({ref:r},t),{weights:q})));E.displayName="X";const A=({isOpen:t,title:r,subTitle:n,dialogRounded:p,children:u,onClose:h,classes:d,panelClasses:y,titleClasses:b,closeClass:c,weightIcon:m,bgColor:f,dataTest:g,hideCloseButton:v})=>e.jsx("div",{"data-test":g,className:`${t?"flex":"hidden"} ${d||""} absolute bottom-0 left-0 right-0 top-0 z-50 bg-black/40`,children:e.jsxs("div",{className:`${y||""} absolute left-1/2 top-1/2 flex w-104 -translate-x-1/2
        -translate-y-1/2 flex-col overflow-hidden  ${p?"rounded-2xl":"rounded-lg pt-8"} text-gray-100 ${f||"bg-surface"}`,children:[e.jsxs("div",{className:`${n?"justify-between bg-gray-1 p-5":""} flex flex-row items-start`,children:[r?e.jsxs("div",{className:"relative flex max-w-full flex-1 flex-col truncate",children:[e.jsx("span",{className:`${b||""} truncate text-xl`,title:r,children:r}),e.jsx("span",{className:"max-w-fit flex-1 truncate text-base font-normal text-gray-50",children:n})]}):null,v?null:e.jsx("div",{className:`relative ml-auto cursor-pointer bg-surface
           transition duration-200 ease-in-out ${c||"text-primary hover:text-primary-dark"} `,children:e.jsx(E,{role:"button",onClick:h,size:28,weight:m})})]}),u]})});A.__docgenInfo={description:`BaseDialog component

@property {boolean} isOpen
- Controls whether the dialog is open or closed. If true, the dialog is visible.

@property {string} [title]
- The title of the dialog, displayed at the top of the dialog box.

@property {boolean} [hideCloseButton]
- If true, hides the close button (X icon) in the top right corner of the dialog.

@property {string} [subTitle]
- A subtitle for the dialog, displayed below the title.

@property {boolean} [dialogRounded]
- If true, applies a more rounded corner style to the dialog.

@property {JSX.Element | JSX.Element[]} children
- The content to be displayed inside the dialog. Can be a single JSX element or an array of elements.

@property {string} [classes]
- Custom classes for the outermost container of the dialog. Allows additional styling like margins or padding.

@property {string} [titleClasses]
- Custom classes for styling the title element. Can modify font size, weight, etc.

@property {string} [panelClasses]
- Custom classes for the main dialog panel, where the content is displayed.

@property {string} [closeClass]
- Custom classes for the close button, allowing for customization of the button's appearance.

@property {IconWeight} [weightIcon]
- Controls the thickness of the close button icon (X). Options range from "thin" to "bold".

@property {string} [bgColor]
- Custom background color for the dialog. Defaults to a light surface color if not provided.

@property {() => void} onClose
- Callback function triggered when the close button or overlay is clicked, used to close the dialog.`,methods:[],displayName:"BaseDialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:""},hideCloseButton:{required:!1,tsType:{name:"boolean"},description:""},subTitle:{required:!1,tsType:{name:"string"},description:""},dialogRounded:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:""},classes:{required:!1,tsType:{name:"string"},description:""},titleClasses:{required:!1,tsType:{name:"string"},description:""},panelClasses:{required:!1,tsType:{name:"string"},description:""},closeClass:{required:!1,tsType:{name:"string"},description:""},weightIcon:{required:!1,tsType:{name:"IconWeight"},description:""},bgColor:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},dataTest:{required:!1,tsType:{name:"string"},description:""}}};function M({isOpen:t,onClose:r,onPrimaryAction:n,onSecondaryAction:p,title:u,subtitle:h,primaryAction:d,secondaryAction:y,primaryActionColor:b,isLoading:c}){const[m,f]=a.useState(t),[g,v]=a.useState("opacity-0"),[s,l]=a.useState("scale-95");return a.useEffect(()=>{if(t){const o=setTimeout(()=>{v("opacity-100"),l("scale-100")},10);return f(!0),()=>clearTimeout(o)}else{v("opacity-0"),l("scale-95");const o=setTimeout(()=>{f(!1)},150);return()=>clearTimeout(o)}},[t]),a.useEffect(()=>{const o=N=>{N.key==="Escape"&&r()};return t&&window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[t,r]),e.jsx(e.Fragment,{children:m&&e.jsxs("div",{className:`fixed inset-0 z-50 ${t?"":"pointer-events-none"}`,children:[e.jsx("div",{className:`absolute inset-0 bg-gray-100/50 transition-opacity
             duration-150 dark:bg-black/75
              ${g}
            `,onClick:r,"data-testid":"dialog-overlay"}),e.jsxs("div",{className:`absolute
              left-1/2
              top-1/2
              w-full
              max-w-sm
              -translate-x-1/2
              -translate-y-1/2
              transform rounded-2xl
              bg-surface p-5
              transition-all
              duration-150
              dark:bg-gray-1
              ${s} 
              ${g}`,children:[e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("p",{className:"text-2xl font-medium text-gray-100",children:u}),e.jsx("p",{className:"text-gray-60",children:h})]}),e.jsxs("div",{className:"mt-5 flex justify-end space-x-2",children:[e.jsx(x,{variant:"secondary",onClick:p,disabled:c,children:y}),e.jsx(x,{onClick:n,loading:c,variant:b==="primary"?"primary":"destructive",children:d})]})]})]})})}M.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrimaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSecondaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},primaryAction:{required:!0,tsType:{name:"string"},description:""},secondaryAction:{required:!0,tsType:{name:"string"},description:""},primaryActionColor:{required:!0,tsType:{name:"union",raw:"'primary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const I=({isOpen:t,onClose:r,children:n,maxWidth:p,className:u,width:h,preventClosing:d=!1})=>{const y=a.useRef(null),[b,c]=a.useState(t),[m,f]=a.useState("opacity-0"),[g,v]=a.useState("scale-95");return a.useEffect(()=>{if(t){const s=setTimeout(()=>{f("opacity-100"),v("scale-100")},10);return c(!0),()=>clearTimeout(s)}else{f("opacity-0"),v("scale-95");const s=setTimeout(()=>{c(!1)},150);return()=>clearTimeout(s)}},[t]),a.useEffect(()=>{const s=l=>{y.current&&!y.current.contains(l.target)&&!d&&r()};return t&&document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[t,r,d]),a.useEffect(()=>{const s=l=>{l.key==="Escape"&&!d&&r()};return t&&window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[t,r,d]),e.jsx(e.Fragment,{children:b&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`
              fixed
              inset-0
              z-50
              bg-highlight/40
              transition-opacity
              duration-150
              ease-out
              ${m}
              pointer-events-none'}              
            `}),e.jsx("div",{className:`
              fixed
              inset-0
              z-50
              flex
              min-h-full
              items-center
              justify-center
              transition-opacity
              duration-150
              ease-out
              ${m}
              ${g}
              pointer-events-none
            `,children:e.jsx("section",{"data-testid":"ModalContent",ref:y,className:`
                ${h??"w-full"}
                ${p??"max-w-lg"}
                ${u??"p-5"}
                text-gray-100
                rounded-2xl
                bg-surface
                shadow-subtle-hard
                transform
                transition-all
                duration-150
                ease-out
                ${m}
                ${g}
                pointer-events-none
              `,children:n})})]})})};I.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},preventClosing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const D=({childrenButton:t,panel:r,className:n,classButton:p})=>{const[u,h]=a.useState(!1),d=a.useRef(null),[y,b]=a.useState(u),[c,m]=a.useState("opacity-0"),[f,g]=a.useState("scale-95"),v=()=>h(o=>!o),s=o=>{d.current&&!d.current.contains(o.target)&&l()},l=()=>{h(!1)};return a.useEffect(()=>{if(u){const o=setTimeout(()=>{m("opacity-100"),g("scale-100")},10);return b(!0),()=>clearTimeout(o)}else{m("opacity-0"),g("scale-95");const o=setTimeout(()=>{b(!1)},100);return()=>clearTimeout(o)}},[u]),a.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[]),e.jsxs("div",{style:{lineHeight:0},className:`relative ${n}`,children:[e.jsx("button",{onClick:v,onMouseDown:o=>o.stopPropagation(),className:`cursor-pointer outline-none ${p}`,"aria-expanded":u,children:t}),y&&e.jsx("div",{ref:d,className:`
            absolute
            right-0
            z-50
            mt-1
            origin-top-right
            transform
            rounded-md
            border
            border-gray-10
            bg-surface
            py-1.5 
            shadow-subtle
            duration-100
            ease-out
            dark:bg-gray-5 
            ${c}
            ${f}
          `,children:r(l)})]})};D.__docgenInfo={description:`Popover component

@property {ReactNode} childrenButton
- The content to be displayed inside the trigger button.

@property {(closePopover: () => void) => ReactNode} panel
- A function that returns the content to be displayed inside the popover panel.
It receives a \`closePopover\` function as a parameter, which can be used to programmatically close the popover.

@property {string} [className]
- Additional custom classes for the outermost container of the popover.
Can be used for positioning or adding custom styles.

@property {string} [classButton]
- Custom classes for the trigger button.

@returns {JSX.Element}
- The rendered Popover component.`,methods:[],displayName:"Popover",props:{childrenButton:{required:!0,tsType:{name:"ReactNode"},description:""},panel:{required:!0,tsType:{name:"signature",type:"function",raw:"(closePopover: () => void) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"closePopover"}],return:{name:"ReactNode"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},classButton:{required:!1,tsType:{name:"string"},description:""}}};const X=({children:t,title:r,subtitle:n,popsFrom:p,className:u,delayInMs:h,arrow:d=!0})=>{const[y,b]=a.useState(!1),c=a.useRef(null);function m(){b(!0)}function f(){b(!1)}function g(){c.current!==null&&clearTimeout(c.current),m()}function v(){h?c.current=setTimeout(()=>{c.current=null,f()},h):f()}let s="",l="",o="";switch(p){case"right":s="left-full top-1/2 -translate-y-1/2 ml-1.5",l="flex-row-reverse",o="polygon(100% 0%, 100% 100%, 0% 50%)";break;case"left":s="right-full top-1/2 -translate-y-1/2 mr-1.5",l="flex-row",o="polygon(0% 0%, 0% 100%, 100% 50%)";break;case"top":s="bottom-full left-1/2 -translate-x-1/2 mb-1.5 origin-bottom",l="flex-col",o="polygon(0% 0%, 100% 0%, 50% 100%)";break;case"bottom":s="top-full left-1/2 -translate-x-1/2 mt-1.5",l="flex-col-reverse",o="polygon(50% 0%, 0% 100%, 100% 100%)";break}return e.jsxs("div",{className:`relative w-max ${u}`,onMouseEnter:g,onMouseLeave:v,style:{lineHeight:0},children:[e.jsxs("div",{className:`pointer-events-none absolute ${s} flex items-center ${l} drop-shadow-tooltip transition-all duration-150 ${y?"scale-100 opacity-100":"scale-50 opacity-0"}`,children:[e.jsxs("div",{className:"w-max rounded-lg bg-gray-90 px-4 py-1.5 text-center dark:bg-gray-5",children:[e.jsx("p",{className:"text-base text-white",children:r}),n&&e.jsx("p",{className:"-mt-1 text-sm text-gray-40",children:n})]}),d&&e.jsx("div",{className:`bg-gray-90 dark:bg-gray-5 ${p==="bottom"||p==="top"?"h-1.5 w-4":"h-4 w-1.5"}`,style:{clipPath:o,marginTop:p==="top"?"-1px":void 0},"data-testid":"tooltip-arrow"})]}),t]})};X.__docgenInfo={description:`Tooltip component

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
- A tooltip component that shows additional information when hovering over its children.`,methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},popsFrom:{required:!0,tsType:{name:"union",raw:"'right' | 'left' | 'top' | 'bottom'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},delayInMs:{required:!1,tsType:{name:"number"},description:""},arrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{A as B,M as D,I as M,D as P,X as T};
