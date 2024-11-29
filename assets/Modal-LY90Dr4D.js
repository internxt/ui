import{j as r}from"./jsx-runtime-DEdD30eg.js";import{R as a,r as s}from"./index-RYns6xqu.js";import{b as q}from"./IconBase-C0B5zwrg.js";import{B as v}from"./Button-LpIkml3t.js";const L=new Map([["bold",a.createElement(a.Fragment,null,a.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",a.createElement(a.Fragment,null,a.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),a.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",a.createElement(a.Fragment,null,a.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",a.createElement(a.Fragment,null,a.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",a.createElement(a.Fragment,null,a.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",a.createElement(a.Fragment,null,a.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]);var C=Object.defineProperty,N=Object.defineProperties,k=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,T=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))S.call(t,n)&&T(e,n,t[n]);if(w)for(var n of w(t))$.call(t,n)&&T(e,n,t[n]);return e},M=(e,t)=>N(e,k(t));const E=s.forwardRef((e,t)=>a.createElement(q,M(A({ref:t},e),{weights:L})));E.displayName="X";const I=({isOpen:e,title:t,subTitle:n,dialogRounded:g,children:h,onClose:x,classes:o,panelClasses:l,titleClasses:b,closeClass:d,weightIcon:c,bgColor:u,dataTest:p,hideCloseButton:m})=>r.jsx("div",{"data-test":p,className:`${e?"flex":"hidden"} ${o||""} absolute bottom-0 left-0 right-0 top-0 z-50 bg-black/40`,children:r.jsxs("div",{className:`${l||""} absolute left-1/2 top-1/2 flex w-104 -translate-x-1/2
        -translate-y-1/2 flex-col overflow-hidden  ${g?"rounded-2xl":"rounded-lg pt-8"} text-gray-100 ${u||"bg-surface"}`,children:[r.jsxs("div",{className:`${n?"justify-between bg-gray-1 p-5":""} flex flex-row items-start`,children:[t?r.jsxs("div",{className:"relative flex max-w-full flex-1 flex-col truncate",children:[r.jsx("span",{className:`${b||""} truncate text-xl`,title:t,children:t}),r.jsx("span",{className:"max-w-fit flex-1 truncate text-base font-normal text-gray-50",children:n})]}):null,m?null:r.jsx("div",{className:`relative ml-auto cursor-pointer bg-surface
           transition duration-200 ease-in-out ${d||"text-primary hover:text-primary-dark"} `,children:r.jsx(E,{role:"button",onClick:x,size:28,weight:c})})]}),h]})});I.__docgenInfo={description:`BaseDialog component

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
- Callback function triggered when the close button or overlay is clicked, used to close the dialog.`,methods:[],displayName:"BaseDialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:""},hideCloseButton:{required:!1,tsType:{name:"boolean"},description:""},subTitle:{required:!1,tsType:{name:"string"},description:""},dialogRounded:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:""},classes:{required:!1,tsType:{name:"string"},description:""},titleClasses:{required:!1,tsType:{name:"string"},description:""},panelClasses:{required:!1,tsType:{name:"string"},description:""},closeClass:{required:!1,tsType:{name:"string"},description:""},weightIcon:{required:!1,tsType:{name:"IconWeight"},description:""},bgColor:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},dataTest:{required:!1,tsType:{name:"string"},description:""}}};function X({isOpen:e,onClose:t,onPrimaryAction:n,onSecondaryAction:g,title:h,subtitle:x,primaryAction:o,secondaryAction:l,primaryActionColor:b,isLoading:d}){const[c,u]=s.useState(e),[p,m]=s.useState("opacity-0"),[i,f]=s.useState("scale-95");return s.useEffect(()=>{if(e){const y=setTimeout(()=>{m("opacity-100"),f("scale-100")},10);return u(!0),()=>clearTimeout(y)}else{m("opacity-0"),f("scale-95");const y=setTimeout(()=>{u(!1)},150);return()=>clearTimeout(y)}},[e]),s.useEffect(()=>{const y=j=>{j.key==="Escape"&&t()};return e&&window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}},[e,t]),r.jsx(r.Fragment,{children:c&&r.jsxs("div",{className:`fixed inset-0 z-50 ${e?"":"pointer-events-none"}`,children:[r.jsx("div",{className:`absolute inset-0 bg-gray-100/50 transition-opacity
             duration-150 dark:bg-black/75
              ${p}
            `,onClick:t,"data-testid":"dialog-overlay"}),r.jsxs("div",{className:`absolute
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
              ${i} 
              ${p}`,children:[r.jsxs("div",{className:"flex flex-col space-y-2",children:[r.jsx("p",{className:"text-2xl font-medium text-gray-100",children:h}),r.jsx("p",{className:"text-gray-60",children:x})]}),r.jsxs("div",{className:"mt-5 flex justify-end space-x-2",children:[r.jsx(v,{variant:"secondary",onClick:g,disabled:d,children:l}),r.jsx(v,{onClick:n,loading:d,variant:b==="primary"?"primary":"destructive",children:o})]})]})]})})}X.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrimaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSecondaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},primaryAction:{required:!0,tsType:{name:"string"},description:""},secondaryAction:{required:!0,tsType:{name:"string"},description:""},primaryActionColor:{required:!0,tsType:{name:"union",raw:"'primary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const D=({isOpen:e,onClose:t,children:n,maxWidth:g,className:h,width:x,preventClosing:o=!1})=>{const l=s.useRef(null),[b,d]=s.useState(e),[c,u]=s.useState("opacity-0"),[p,m]=s.useState("scale-95");return s.useEffect(()=>{if(e){const i=setTimeout(()=>{u("opacity-100"),m("scale-100")},10);return d(!0),()=>clearTimeout(i)}else{u("opacity-0"),m("scale-95");const i=setTimeout(()=>{d(!1)},150);return()=>clearTimeout(i)}},[e]),s.useEffect(()=>{const i=f=>{l.current&&!l.current.contains(f.target)&&!o&&t()};return e&&document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[e,t,o]),s.useEffect(()=>{const i=f=>{f.key==="Escape"&&!o&&t()};return e&&window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[e,t,o]),r.jsx(r.Fragment,{children:b&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:`
              fixed
              inset-0
              z-50
              bg-highlight/40
              transition-opacity
              duration-150
              ease-out
              ${c}
              pointer-events-none'}              
            `}),r.jsx("div",{className:`
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
              ${c}
              ${p}
              pointer-events-none
            `,children:r.jsx("section",{"data-testid":"ModalContent",ref:l,className:`
                ${x??"w-full"}
                ${g??"max-w-lg"}
                ${h??"p-5"}
                text-gray-100
                rounded-2xl
                bg-surface
                shadow-subtle-hard
                transform
                transition-all
                duration-150
                ease-out
                ${c}
                ${p}
                pointer-events-none
              `,children:n})})]})})};D.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},preventClosing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{I as B,X as D,D as M};
