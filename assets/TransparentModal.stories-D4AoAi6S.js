import{j as e}from"./jsx-runtime-CccaB59u.js";import{B as p}from"./Button-CjFQnN5v.js";import{r as a}from"./iframe-CAAsQIpV.js";import"./Loader-DQiDEb1j.js";import"./preload-helper-PPVm8Dsz.js";const r=({isOpen:s,onClose:o,children:m,className:n,disableBackdrop:l=!1})=>{const u=a.useRef(null),[b,f]=a.useState(s),[h,g]=a.useState("opacity-0"),[w,x]=a.useState("scale-95");return a.useEffect(()=>{if(s){f(!0);const t=setTimeout(()=>{g("opacity-100"),x("scale-100")},10);return()=>clearTimeout(t)}else{g("opacity-0"),x("scale-95");const t=setTimeout(()=>{f(!1)},150);return()=>clearTimeout(t)}},[s]),a.useEffect(()=>{const t=y=>{u.current&&!u.current.contains(y.target)&&o()};return s&&!l&&document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[s,o,l]),b?e.jsxs("div",{className:`
      fixed 
      inset-0 
      z-50 
      flex 
      items-center 
      justify-center
      ${l?"pointer-events-none":""}
    `,children:[!l&&e.jsx("div",{className:`
            fixed 
            inset-0 
            bg-black/50 
            backdrop-blur-sm 
            transition-opacity 
            duration-200
            ${h}
          `}),e.jsx("div",{ref:u,className:`
          relative
          flex
          bg-black/15
          border
          border-white/15
          rounded-[20px]
          backdrop-blur
          shadow-lg
          transition-all
          duration-200
          pointer-events-auto
          ${h}
          ${w}
          ${n}
        `,children:m})]}):null};r.__docgenInfo={description:"",methods:[],displayName:"TransparentModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disableBackdrop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{useArgs:N}=__STORYBOOK_MODULE_PREVIEW_API__,v=(s,o)=>{const[{isOpen:m},n]=N();return e.jsxs("div",{className:"p-5",children:[e.jsx(p,{onClick:()=>n({isOpen:!0}),className:"mb-4",children:"Open Transparent Modal"}),s({...o,args:{...o.allArgs,isOpen:m,onClose:()=>n({isOpen:!1})}})]})},j={className:["min-w-[150px]","space-y-4","rounded-[20px]","p-7","bg-black/50","border border-white/15"].join(" ")},E={title:"Overlay/TransparentModal",component:r,decorators:[v],tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A transparent modal component with blur effect and modern glass design."}}},args:{disableBackdrop:!1},argTypes:{isOpen:{control:"boolean",description:"Controls the visibility of the modal"},disableBackdrop:{control:"boolean",description:"Deactivates the backdrop"}}},i={args:{isOpen:!1,className:j.className},parameters:{docs:{description:{story:"Default transparent modal with Figma specifications."}}},render:s=>e.jsx(r,{...s,children:e.jsxs("div",{className:"flex flex-col h-full text-white justify-between",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Modal Title"}),e.jsx(p,{onClick:s.onClose,className:"w-full bg-white/10 hover:bg-white/20 transition-colors",children:"Close Modal"})]})})},c={args:{isOpen:!1,className:"p-4"},parameters:{docs:{description:{story:"Form example with Figma styling specifications."}}},render:s=>e.jsx(r,{...s,children:e.jsxs("div",{className:"flex flex-col h-full text-white space-y-7",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Sign In"}),e.jsxs("div",{className:"flex-1 space-y-7",children:[e.jsx("input",{type:"email",placeholder:"Email",className:"w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30"}),e.jsx("input",{type:"password",placeholder:"Password",className:"w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30"})]}),e.jsx(p,{onClick:s.onClose,className:"w-full bg-white/10 hover:bg-white/20 transition-colors",children:"Sign In"})]})})},M={className:["h-[540px]","rounded-[20px]","p-7","bg-black/50","border border-white/15"].join(" ")},d={args:{isOpen:!1,className:M.className},parameters:{docs:{description:{story:"Meeting join example following Figma specs."}}},render:s=>e.jsx(r,{...s,children:e.jsxs("div",{className:"flex flex-col h-full text-white space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Join Meeting"}),e.jsx("div",{className:"flex-1 mt-7 space-y-7",children:e.jsx("input",{type:"text",placeholder:"Enter your name",className:"w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30"})}),e.jsx(p,{onClick:s.onClose,variant:"primary",children:"Join Meeting"})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    className: baseModalStyles.className
  },
  parameters: {
    docs: {
      description: {
        story: 'Default transparent modal with Figma specifications.'
      }
    }
  },
  render: args => <TransparentModal {...args}>
      <div className="flex flex-col h-full text-white justify-between">
        <h2 className="text-xl font-semibold">Modal Title</h2>
        <Button onClick={args.onClose} className="w-full bg-white/10 hover:bg-white/20 transition-colors">
          Close Modal
        </Button>
      </div>
    </TransparentModal>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    className: 'p-4'
  },
  parameters: {
    docs: {
      description: {
        story: 'Form example with Figma styling specifications.'
      }
    }
  },
  render: args => <TransparentModal {...args}>
      <div className="flex flex-col h-full text-white space-y-7">
        <h2 className="text-xl font-semibold">Sign In</h2>
        <div className="flex-1 space-y-7">
          <input type="email" placeholder="Email" className="w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30" />
          <input type="password" placeholder="Password" className="w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30" />
        </div>
        <Button onClick={args.onClose} className="w-full bg-white/10 hover:bg-white/20 transition-colors">
          Sign In
        </Button>
      </div>
    </TransparentModal>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    className: meetModalStyles.className
  },
  parameters: {
    docs: {
      description: {
        story: 'Meeting join example following Figma specs.'
      }
    }
  },
  render: args => <TransparentModal {...args}>
      <div className="flex flex-col h-full text-white space-y-4">
        <h2 className="text-xl font-semibold">Join Meeting</h2>
        <div className="flex-1 mt-7 space-y-7">
          <input type="text" placeholder="Enter your name" className="w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30" />
        </div>
        <Button onClick={args.onClose} variant="primary">
          Join Meeting
        </Button>
      </div>
    </TransparentModal>
}`,...d.parameters?.docs?.source}}};const _=["Default","WithForm","MeetingJoin"];export{i as Default,d as MeetingJoin,c as WithForm,_ as __namedExportsOrder,E as default};
