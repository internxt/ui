import{j as n}from"./jsx-runtime-DEdD30eg.js";import{R as r,r as a}from"./index-RYns6xqu.js";import{b as q}from"./IconBase-C0B5zwrg.js";import{B as x}from"./Button-LpIkml3t.js";const N=new Map([["bold",r.createElement(r.Fragment,null,r.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",r.createElement(r.Fragment,null,r.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),r.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",r.createElement(r.Fragment,null,r.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",r.createElement(r.Fragment,null,r.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",r.createElement(r.Fragment,null,r.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",r.createElement(r.Fragment,null,r.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]);var L=Object.defineProperty,C=Object.defineProperties,S=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,T=(e,t,s)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,P=(e,t)=>{for(var s in t||(t={}))$.call(t,s)&&T(e,s,t[s]);if(w)for(var s of w(t))k.call(t,s)&&T(e,s,t[s]);return e},A=(e,t)=>C(e,S(t));const E=a.forwardRef((e,t)=>r.createElement(q,A(P({ref:t},e),{weights:N})));E.displayName="X";const R=({isOpen:e,title:t,subTitle:s,dialogRounded:b,children:c,onClose:h,classes:l,panelClasses:p,titleClasses:v,closeClass:m,weightIcon:d,bgColor:f,dataTest:u,hideCloseButton:g})=>n.jsx("div",{"data-test":u,className:`${e?"flex":"hidden"} ${l||""} absolute bottom-0 left-0 right-0 top-0 z-50 bg-black/40`,children:n.jsxs("div",{className:`${p||""} absolute left-1/2 top-1/2 flex w-104 -translate-x-1/2
        -translate-y-1/2 flex-col overflow-hidden  ${b?"rounded-2xl":"rounded-lg pt-8"} text-gray-100 ${f||"bg-surface"}`,children:[n.jsxs("div",{className:`${s?"justify-between bg-gray-1 p-5":""} flex flex-row items-start`,children:[t?n.jsxs("div",{className:"relative flex max-w-full flex-1 flex-col truncate",children:[n.jsx("span",{className:`${v||""} truncate text-xl`,title:t,children:t}),n.jsx("span",{className:"max-w-fit flex-1 truncate text-base font-normal text-gray-50",children:s})]}):null,g?null:n.jsx("div",{className:`relative ml-auto cursor-pointer bg-surface
           transition duration-200 ease-in-out ${m||"text-primary hover:text-primary-dark"} `,children:n.jsx(E,{role:"button",onClick:h,size:28,weight:d})})]}),c]})});R.__docgenInfo={description:`BaseDialog component

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
- Callback function triggered when the close button or overlay is clicked, used to close the dialog.`,methods:[],displayName:"BaseDialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:""},hideCloseButton:{required:!1,tsType:{name:"boolean"},description:""},subTitle:{required:!1,tsType:{name:"string"},description:""},dialogRounded:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:""},classes:{required:!1,tsType:{name:"string"},description:""},titleClasses:{required:!1,tsType:{name:"string"},description:""},panelClasses:{required:!1,tsType:{name:"string"},description:""},closeClass:{required:!1,tsType:{name:"string"},description:""},weightIcon:{required:!1,tsType:{name:"IconWeight"},description:""},bgColor:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},dataTest:{required:!1,tsType:{name:"string"},description:""}}};function I({isOpen:e,onClose:t,onPrimaryAction:s,onSecondaryAction:b,title:c,subtitle:h,primaryAction:l,secondaryAction:p,primaryActionColor:v,isLoading:m}){const[d,f]=a.useState(e),[u,g]=a.useState("opacity-0"),[i,y]=a.useState("scale-95");return a.useEffect(()=>{if(e){const o=setTimeout(()=>{g("opacity-100"),y("scale-100")},10);return f(!0),()=>clearTimeout(o)}else{g("opacity-0"),y("scale-95");const o=setTimeout(()=>{f(!1)},150);return()=>clearTimeout(o)}},[e]),a.useEffect(()=>{const o=j=>{j.key==="Escape"&&t()};return e&&window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[e,t]),n.jsx(n.Fragment,{children:d&&n.jsxs("div",{className:`fixed inset-0 z-50 ${e?"":"pointer-events-none"}`,children:[n.jsx("div",{className:`absolute inset-0 bg-gray-100/50 transition-opacity
             duration-150 dark:bg-black/75
              ${u}
            `,onClick:t,"data-testid":"dialog-overlay"}),n.jsxs("div",{className:`absolute
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
              ${u}`,children:[n.jsxs("div",{className:"flex flex-col space-y-2",children:[n.jsx("p",{className:"text-2xl font-medium text-gray-100",children:c}),n.jsx("p",{className:"text-gray-60",children:h})]}),n.jsxs("div",{className:"mt-5 flex justify-end space-x-2",children:[n.jsx(x,{variant:"secondary",onClick:b,disabled:m,children:p}),n.jsx(x,{onClick:s,loading:m,variant:v==="primary"?"primary":"destructive",children:l})]})]})]})})}I.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrimaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSecondaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},primaryAction:{required:!0,tsType:{name:"string"},description:""},secondaryAction:{required:!0,tsType:{name:"string"},description:""},primaryActionColor:{required:!0,tsType:{name:"union",raw:"'primary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const M=({isOpen:e,onClose:t,children:s,maxWidth:b,className:c,width:h,preventClosing:l=!1})=>{const p=a.useRef(null),[v,m]=a.useState(e),[d,f]=a.useState("opacity-0"),[u,g]=a.useState("scale-95");return a.useEffect(()=>{if(e){const i=setTimeout(()=>{f("opacity-100"),g("scale-100")},10);return m(!0),()=>clearTimeout(i)}else{f("opacity-0"),g("scale-95");const i=setTimeout(()=>{m(!1)},150);return()=>clearTimeout(i)}},[e]),a.useEffect(()=>{const i=y=>{p.current&&!p.current.contains(y.target)&&!l&&t()};return e&&document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[e,t,l]),a.useEffect(()=>{const i=y=>{y.key==="Escape"&&!l&&t()};return e&&window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[e,t,l]),n.jsx(n.Fragment,{children:v&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:`
              fixed
              inset-0
              z-50
              bg-highlight/40
              transition-opacity
              duration-150
              ease-out
              ${d}
              pointer-events-none'}              
            `}),n.jsx("div",{className:`
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
              ${d}
              ${u}
              pointer-events-none
            `,children:n.jsx("section",{"data-testid":"ModalContent",ref:p,className:`
                ${h??"w-full"}
                ${b??"max-w-lg"}
                ${c??"p-5"}
                text-gray-100
                rounded-2xl
                bg-surface
                shadow-subtle-hard
                transform
                transition-all
                duration-150
                ease-out
                ${d}
                ${u}
                pointer-events-none
              `,children:s})})]})})};M.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},preventClosing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const B=({childrenButton:e,panel:t,className:s,classButton:b})=>{const[c,h]=a.useState(!1),l=a.useRef(null),[p,v]=a.useState(c),[m,d]=a.useState("opacity-0"),[f,u]=a.useState("scale-95"),g=()=>h(o=>!o),i=o=>{l.current&&!l.current.contains(o.target)&&y()},y=()=>{h(!1)};return a.useEffect(()=>{if(c){const o=setTimeout(()=>{d("opacity-100"),u("scale-100")},10);return v(!0),()=>clearTimeout(o)}else{d("opacity-0"),u("scale-95");const o=setTimeout(()=>{v(!1)},100);return()=>clearTimeout(o)}},[c]),a.useEffect(()=>(document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}),[]),n.jsxs("div",{style:{lineHeight:0},className:`relative ${s}`,children:[n.jsx("button",{onClick:g,onMouseDown:o=>o.stopPropagation(),className:`cursor-pointer outline-none ${b}`,"aria-expanded":c,children:e}),p&&n.jsx("div",{ref:l,className:`
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
            ${m}
            ${f}
          `,children:t(y)})]})};B.__docgenInfo={description:`Popover component

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
- The rendered Popover component.`,methods:[],displayName:"Popover",props:{childrenButton:{required:!0,tsType:{name:"ReactNode"},description:""},panel:{required:!0,tsType:{name:"signature",type:"function",raw:"(closePopover: () => void) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"closePopover"}],return:{name:"ReactNode"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},classButton:{required:!1,tsType:{name:"string"},description:""}}};export{R as B,I as D,M,B as P};
