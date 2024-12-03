import{j as e}from"./jsx-runtime-DEdD30eg.js";import{R as T}from"./Input-DyrQ7-Q4.js";import{r as t}from"./index-RYns6xqu.js";import{B as x}from"./Button-LpIkml3t.js";const w=({isOpen:n,title:r,subTitle:g,dialogRounded:v,children:a,onClose:y,classes:i,panelClasses:c,titleClasses:h,closeClass:u,weightIcon:l,bgColor:p,dataTest:d,hideCloseButton:m})=>e.jsx("div",{"data-test":d,className:`${n?"flex":"hidden"} ${i||""} absolute bottom-0 left-0 right-0 top-0 z-50 bg-black/40`,children:e.jsxs("div",{className:`${c||""} absolute left-1/2 top-1/2 flex w-104 -translate-x-1/2
        -translate-y-1/2 flex-col overflow-hidden  ${v?"rounded-2xl":"rounded-lg pt-8"} text-gray-100 ${p||"bg-surface"}`,children:[e.jsxs("div",{className:`${g?"justify-between bg-gray-1 p-5":""} flex flex-row items-start`,children:[r?e.jsxs("div",{className:"relative flex max-w-full flex-1 flex-col truncate",children:[e.jsx("span",{className:`${h||""} truncate text-xl`,title:r,children:r}),e.jsx("span",{className:"max-w-fit flex-1 truncate text-base font-normal text-gray-50",children:g})]}):null,m?null:e.jsx("div",{className:`relative ml-auto cursor-pointer bg-surface
           transition duration-200 ease-in-out ${u||"text-primary hover:text-primary-dark"} `,children:e.jsx(T,{role:"button",onClick:y,size:28,weight:l})})]}),a]})});w.__docgenInfo={description:`BaseDialog component

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
- Callback function triggered when the close button or overlay is clicked, used to close the dialog.`,methods:[],displayName:"BaseDialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:""},hideCloseButton:{required:!1,tsType:{name:"boolean"},description:""},subTitle:{required:!1,tsType:{name:"string"},description:""},dialogRounded:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:""},classes:{required:!1,tsType:{name:"string"},description:""},titleClasses:{required:!1,tsType:{name:"string"},description:""},panelClasses:{required:!1,tsType:{name:"string"},description:""},closeClass:{required:!1,tsType:{name:"string"},description:""},weightIcon:{required:!1,tsType:{name:"IconWeight"},description:""},bgColor:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},dataTest:{required:!1,tsType:{name:"string"},description:""}}};function q({isOpen:n,onClose:r,onPrimaryAction:g,onSecondaryAction:v,title:a,subtitle:y,primaryAction:i,secondaryAction:c,primaryActionColor:h,isLoading:u}){const[l,p]=t.useState(n),[d,m]=t.useState("opacity-0"),[o,f]=t.useState("scale-95");return t.useEffect(()=>{if(n){const s=setTimeout(()=>{m("opacity-100"),f("scale-100")},10);return p(!0),()=>clearTimeout(s)}else{m("opacity-0"),f("scale-95");const s=setTimeout(()=>{p(!1)},150);return()=>clearTimeout(s)}},[n]),t.useEffect(()=>{const s=b=>{b.key==="Escape"&&r()};return n&&window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[n,r]),e.jsx(e.Fragment,{children:l&&e.jsxs("div",{className:`fixed inset-0 z-50 ${n?"":"pointer-events-none"}`,children:[e.jsx("div",{className:`absolute inset-0 bg-gray-100/50 transition-opacity
             duration-150 dark:bg-black/75
              ${d}
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
              ${o} 
              ${d}`,children:[e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("p",{className:"text-2xl font-medium text-gray-100",children:a}),e.jsx("p",{className:"text-gray-60",children:y})]}),e.jsxs("div",{className:"mt-5 flex justify-end space-x-2",children:[e.jsx(x,{variant:"secondary",onClick:v,disabled:u,children:c}),e.jsx(x,{onClick:g,loading:u,variant:h==="primary"?"primary":"destructive",children:i})]})]})]})})}q.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrimaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSecondaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},primaryAction:{required:!0,tsType:{name:"string"},description:""},secondaryAction:{required:!0,tsType:{name:"string"},description:""},primaryActionColor:{required:!0,tsType:{name:"union",raw:"'primary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const N=({isOpen:n,onClose:r,children:g,maxWidth:v,className:a,width:y,preventClosing:i=!1})=>{const c=t.useRef(null),[h,u]=t.useState(n),[l,p]=t.useState("opacity-0"),[d,m]=t.useState("scale-95");return t.useEffect(()=>{if(n){const o=setTimeout(()=>{p("opacity-100"),m("scale-100")},10);return u(!0),()=>clearTimeout(o)}else{p("opacity-0"),m("scale-95");const o=setTimeout(()=>{u(!1)},150);return()=>clearTimeout(o)}},[n]),t.useEffect(()=>{const o=f=>{c.current&&!c.current.contains(f.target)&&!i&&r()};return n&&document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[n,r,i]),t.useEffect(()=>{const o=f=>{f.key==="Escape"&&!i&&r()};return n&&window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[n,r,i]),e.jsx(e.Fragment,{children:h&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`
              fixed
              inset-0
              z-50
              bg-highlight/40
              transition-opacity
              duration-150
              ease-out
              ${l}
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
              ${l}
              ${d}
              pointer-events-none
            `,children:e.jsx("section",{"data-testid":"ModalContent",ref:c,className:`
                ${y??"w-full"}
                ${v??"max-w-lg"}
                ${a??"p-5"}
                text-gray-100
                rounded-2xl
                bg-surface
                shadow-subtle-hard
                transform
                transition-all
                duration-150
                ease-out
                ${l}
                ${d}
                pointer-events-none
              `,children:g})})]})})};N.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},preventClosing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const j=({childrenButton:n,panel:r,className:g,classButton:v})=>{const[a,y]=t.useState(!1),i=t.useRef(null),[c,h]=t.useState(a),[u,l]=t.useState("opacity-0"),[p,d]=t.useState("scale-95"),m=()=>y(s=>!s),o=s=>{i.current&&!i.current.contains(s.target)&&f()},f=()=>{y(!1)};return t.useEffect(()=>{if(a){const s=setTimeout(()=>{l("opacity-100"),d("scale-100")},10);return h(!0),()=>clearTimeout(s)}else{l("opacity-0"),d("scale-95");const s=setTimeout(()=>{h(!1)},100);return()=>clearTimeout(s)}},[a]),t.useEffect(()=>(document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}),[]),e.jsxs("div",{style:{lineHeight:0},className:`relative ${g}`,children:[e.jsx("button",{onClick:m,onMouseDown:s=>s.stopPropagation(),className:`cursor-pointer outline-none ${v}`,"aria-expanded":a,children:n}),c&&e.jsx("div",{ref:i,className:`
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
            ${u}
            ${p}
          `,children:r(f)})]})};j.__docgenInfo={description:`Popover component

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
- The rendered Popover component.`,methods:[],displayName:"Popover",props:{childrenButton:{required:!0,tsType:{name:"ReactNode"},description:""},panel:{required:!0,tsType:{name:"signature",type:"function",raw:"(closePopover: () => void) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"closePopover"}],return:{name:"ReactNode"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},classButton:{required:!1,tsType:{name:"string"},description:""}}};export{w as B,q as D,N as M,j as P};
