import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{r as o}from"./index-DJO9vBfz.js";const w=({isOpen:t,onClose:s,children:m,maxWidth:f,className:h,width:y,preventClosing:i=!1})=>{const a=o.useRef(null),[g,l]=o.useState(t),[r,c]=o.useState("opacity-0"),[p,u]=o.useState("scale-95");return o.useEffect(()=>{if(t){const e=setTimeout(()=>{c("opacity-100"),u("scale-100")},10);return l(!0),()=>clearTimeout(e)}else{c("opacity-0"),u("scale-95");const e=setTimeout(()=>{l(!1)},150);return()=>clearTimeout(e)}},[t]),o.useEffect(()=>{const e=d=>{a.current&&!a.current.contains(d.target)&&!i&&s()};return t&&document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[t,s,i]),o.useEffect(()=>{const e=d=>{d.key==="Escape"&&!i&&s()};return t&&window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[t,s,i]),n.jsx(n.Fragment,{children:g&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:`
              fixed
              inset-0
              z-50
              bg-highlight/40
              transition-opacity
              duration-150
              ease-out
              ${r}
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
              ${r}
              ${p}
              pointer-events-none
            `,children:n.jsx("section",{"data-testid":"ModalContent",ref:a,className:`
                ${y??"w-full"}
                ${f??"max-w-lg"}
                ${h??"p-5"}
                text-gray-100
                rounded-2xl
                bg-surface
                shadow-subtle-hard
                transform
                transition-all
                duration-150
                ease-out
                ${r}
                ${p}
                pointer-events-none
              `,children:m})})]})})};w.__docgenInfo={description:`Modal component

@param {ModalProps} props - Properties of the Modal component.

@property {boolean} isOpen
- Controls the visibility of the modal. If \`true\`, the modal is shown; if \`false\`, the modal is hidden.

@property {() => void} onClose
- Callback function that is called when the modal is closed.
This function is triggered by clicking outside the modal or
pressing the 'Escape' key (unless \`preventClosing\` is \`true\`).

@property {ReactNode} children
- The content to be displayed inside the modal.

@property {string} [maxWidth]
- Optional maximum width for the modal. Defaults to \`'max-w-lg'\` if not specified.

@property {string} [className]
- Optional custom class names to apply to the modal content wrapper.

@property {string} [width]
- Optional width for the modal. Defaults to \`'w-full'\` if not specified.

@property {boolean} [preventClosing=false]
- Optional flag to prevent the modal from closing when clicking outside or pressing the 'Escape' key.

@returns {JSX.Element | null}
- The rendered Modal component, or \`null\` if \`isOpen\` is \`false\`.

The component uses a series of hooks and effects to manage modal transitions and handle click and key press events.
It supports smooth opacity and scale transitions during opening and closing,
and prevents interaction with the modal's background during the transitions.

The \`preventClosing\` prop ensures the modal stays open when interacting outside of the modal or pressing 'Escape'.

The modal is displayed with a fixed position in the center of the screen, with a backdrop overlay.
The content of the modal is rendered inside a flex container with transition effects to animate its appearance.`,methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},preventClosing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{w as M};
