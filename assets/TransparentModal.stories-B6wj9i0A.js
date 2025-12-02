import{j as e}from"./jsx-runtime-o9qq2xiW.js";import{B as t}from"./Button-CWqAKjnC.js";import{T as l}from"./TransparentModal-C90ojgH4.js";import"./iframe-C1-GEPpH.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-DE4tniYN.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,p=(s,i)=>{const[{isOpen:c},n]=d();return e.jsxs("div",{className:"p-5",children:[e.jsx(t,{onClick:()=>n({isOpen:!0}),className:"mb-4",children:"Open Transparent Modal"}),s({...i,args:{...i.allArgs,isOpen:c,onClose:()=>n({isOpen:!1})}})]})},m={className:["min-w-[150px]","space-y-4","rounded-[20px]","p-7","bg-black/50","border border-white/15"].join(" ")},N={title:"Components/TransparentModal",component:l,decorators:[p],tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A transparent modal component with blur effect and modern glass design."}}},args:{disableBackdrop:!1},argTypes:{isOpen:{control:"boolean",description:"Controls the visibility of the modal"},disableBackdrop:{control:"boolean",description:"Deactivates the backdrop"}}},a={args:{isOpen:!1,className:m.className},parameters:{docs:{description:{story:"Default transparent modal with Figma specifications."}}},render:s=>e.jsx(l,{...s,children:e.jsxs("div",{className:"flex flex-col h-full text-white justify-between",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Modal Title"}),e.jsx(t,{onClick:s.onClose,className:"w-full bg-white/10 hover:bg-white/20 transition-colors",children:"Close Modal"})]})})},o={args:{isOpen:!1,className:"p-4"},parameters:{docs:{description:{story:"Form example with Figma styling specifications."}}},render:s=>e.jsx(l,{...s,children:e.jsxs("div",{className:"flex flex-col h-full text-white space-y-7",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Sign In"}),e.jsxs("div",{className:"flex-1 space-y-7",children:[e.jsx("input",{type:"email",placeholder:"Email",className:"w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30"}),e.jsx("input",{type:"password",placeholder:"Password",className:"w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30"})]}),e.jsx(t,{onClick:s.onClose,className:"w-full bg-white/10 hover:bg-white/20 transition-colors",children:"Sign In"})]})})},h={className:["h-[540px]","rounded-[20px]","p-7","bg-black/50","border border-white/15"].join(" ")},r={args:{isOpen:!1,className:h.className},parameters:{docs:{description:{story:"Meeting join example following Figma specs."}}},render:s=>e.jsx(l,{...s,children:e.jsxs("div",{className:"flex flex-col h-full text-white space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Join Meeting"}),e.jsx("div",{className:"flex-1 mt-7 space-y-7",children:e.jsx("input",{type:"text",placeholder:"Enter your name",className:"w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30"})}),e.jsx(t,{onClick:s.onClose,variant:"primary",children:"Join Meeting"})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const y=["Default","WithForm","MeetingJoin"];export{a as Default,r as MeetingJoin,o as WithForm,y as __namedExportsOrder,N as default};
