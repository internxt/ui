import{j as t}from"./jsx-runtime-CccaB59u.js";import{r as s}from"./iframe-CAAsQIpV.js";import{B as x}from"./Button-CjFQnN5v.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-DQiDEb1j.js";const m=({isOpen:n,onClose:a,children:c,maxWidth:r,className:w,width:v,preventClosing:i=!1,stopMouseDownPropagation:b=!1})=>{const l=s.useRef(null),[T,u]=s.useState(n),[p,f]=s.useState("opacity-0"),[h,g]=s.useState("scale-95"),y=()=>{const e=document.querySelectorAll("[data-modal]"),o=e[e.length-1];l.current===o&&a()},N=e=>{b&&e.stopPropagation()};return s.useEffect(()=>{if(n){const e=setTimeout(()=>{f("opacity-100"),g("scale-100")},10);return u(!0),()=>clearTimeout(e)}else{f("opacity-0"),g("scale-95");const e=setTimeout(()=>{u(!1)},150);return()=>clearTimeout(e)}},[n]),s.useEffect(()=>{const e=o=>{l.current&&!l.current.contains(o.target)&&!i&&(o.preventDefault(),y())};return n&&document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[n,a,i]),s.useEffect(()=>{const e=o=>{o.key==="Escape"&&!i&&(o.preventDefault(),y())};return n&&window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[n,a,i]),t.jsx(t.Fragment,{children:T&&t.jsxs("div",{className:"m-0",onMouseDown:N,role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:`
              fixed
              min-h-full
              inset-0
              z-[9999]
              bg-highlight/40
              transition-opacity
              duration-150
              ease-out
              ${p}
              pointer-events-none           
            `}),t.jsx("div",{className:`
              fixed
              inset-0
              z-[9999]
              flex
              min-h-full
              items-center
              justify-center
              transition-opacity
              duration-150
              ease-out
              overflow-y-auto
              ${p}
              ${h}
            `,children:t.jsx("section",{"data-testid":"ModalContent",ref:l,"data-modal":!0,className:`
                ${v??"w-full"}
                ${r??"max-w-lg"}
                ${w??"p-5"}
                text-gray-100
                rounded-2xl
                bg-surface
                shadow-subtle-hard
                transform
                transition-all
                duration-150
                ease-out
                ${p}
                ${h}
              `,children:c})})]})})};m.__docgenInfo={description:`Modal component

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

@property {boolean} [stopMouseDownPropagation=false]
- Optional flag to stop event propagation on mousedown events.

@returns {JSX.Element | null}
- The rendered Modal component, or \`null\` if \`isOpen\` is \`false\`.

The component uses a series of hooks and effects to manage modal transitions and handle click and key press events.
It supports smooth opacity and scale transitions during opening and closing,
and prevents interaction with the modal's background during the transitions.

The \`preventClosing\` prop ensures the modal stays open when interacting outside of the modal or pressing 'Escape'.

The modal is displayed with a fixed position in the center of the screen, with a backdrop overlay.
The content of the modal is rendered inside a flex container with transition effects to animate its appearance.`,methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},preventClosing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},stopMouseDownPropagation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{useArgs:E}=__STORYBOOK_MODULE_PREVIEW_API__,M=(n,a)=>{const[{isOpen:c},r]=E();return t.jsxs("div",{style:{padding:"20px"},children:[t.jsx(x,{onClick:()=>r({isOpen:!0}),className:"mb-4 bg-blue-600 text-white rounded px-4 py-2",children:"Show modal"}),n({...a,args:{...a.allArgs,isOpen:c,onClose:()=>r({isOpen:!1})}})]})},S={title:"Overlay/Modal",component:m,decorators:[M],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean"},maxWidth:{control:"text"},width:{control:"text"},className:{control:"text"},preventClosing:{control:"boolean"}}},d={args:{isOpen:!1,maxWidth:"max-w-sm",width:"w-full",className:"p-5",preventClosing:!1},parameters:{docs:{description:{story:"A modal with default settings and general styling."}}},render:n=>t.jsx(m,{...n,children:t.jsxs("div",{className:"text-center",children:[t.jsx("h2",{className:"text-lg font-semibold",children:"Title"}),t.jsx("p",{className:"mt-2",children:"This is an example."}),t.jsx(x,{className:"mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",onClick:n.onClose,children:"Close"})]})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    maxWidth: 'max-w-sm',
    width: 'w-full',
    className: 'p-5',
    preventClosing: false
  },
  parameters: {
    docs: {
      description: {
        story: 'A modal with default settings and general styling.'
      }
    }
  },
  render: (args: any) => <Modal {...args}>
      <div className="text-center">
        <h2 className="text-lg font-semibold">Title</h2>
        <p className="mt-2">This is an example.</p>

        <Button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={args.onClose}>
          Close
        </Button>
      </div>
    </Modal>
}`,...d.parameters?.docs?.source}}};const _=["ModalExample"];export{d as ModalExample,_ as __namedExportsOrder,S as default};
