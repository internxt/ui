import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{B as t}from"./Button-t3VSbunz.js";import{T as l}from"./TransparentModal-CobRkEZ_.js";import"./index-DJO9vBfz.js";import"./Loader-WXXQ1viB.js";const{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,N=(s,i)=>{const[{isOpen:b},n]=w();return e.jsxs("div",{className:"p-5",children:[e.jsx(t,{onClick:()=>n({isOpen:!0}),className:"mb-4",children:"Open Transparent Modal"}),s({...i,args:{...i.allArgs,isOpen:b,onClose:()=>n({isOpen:!1})}})]})},y={className:["min-w-[150px]","space-y-4","rounded-[20px]","p-7","bg-black/50","border border-white/15"].join(" ")},k={title:"Components/TransparentModal",component:l,decorators:[N],tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A transparent modal component with blur effect and modern glass design."}}},args:{disableBackdrop:!1},argTypes:{isOpen:{control:"boolean",description:"Controls the visibility of the modal"},disableBackdrop:{control:"boolean",description:"Deactivates the backdrop"}}},a={args:{isOpen:!1,className:y.className},parameters:{docs:{description:{story:"Default transparent modal with Figma specifications."}}},render:s=>e.jsx(l,{...s,children:e.jsxs("div",{className:"flex flex-col h-full text-white justify-between",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Modal Title"}),e.jsx(t,{onClick:s.onClose,className:"w-full bg-white/10 hover:bg-white/20 transition-colors",children:"Close Modal"})]})})},o={args:{isOpen:!1,className:"p-4"},parameters:{docs:{description:{story:"Form example with Figma styling specifications."}}},render:s=>e.jsx(l,{...s,children:e.jsxs("div",{className:"flex flex-col h-full text-white space-y-7",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Sign In"}),e.jsxs("div",{className:"flex-1 space-y-7",children:[e.jsx("input",{type:"email",placeholder:"Email",className:"w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30"}),e.jsx("input",{type:"password",placeholder:"Password",className:"w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30"})]}),e.jsx(t,{onClick:s.onClose,className:"w-full bg-white/10 hover:bg-white/20 transition-colors",children:"Sign In"})]})})},j={className:["h-[540px]","rounded-[20px]","p-7","bg-black/50","border border-white/15"].join(" ")},r={args:{isOpen:!1,className:j.className},parameters:{docs:{description:{story:"Meeting join example following Figma specs."}}},render:s=>e.jsx(l,{...s,children:e.jsxs("div",{className:"flex flex-col h-full text-white space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Join Meeting"}),e.jsx("div",{className:"flex-1 mt-7 space-y-7",children:e.jsx("input",{type:"text",placeholder:"Enter your name",className:"w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30"})}),e.jsx(t,{onClick:s.onClose,variant:"primary",children:"Join Meeting"})]})})};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,h,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var f,g,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const S=["Default","WithForm","MeetingJoin"];export{a as Default,r as MeetingJoin,o as WithForm,S as __namedExportsOrder,k as default};
