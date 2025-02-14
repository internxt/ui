import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{M as i}from"./Modal-DBGlfaXo.js";import{B as d}from"./Button-t3VSbunz.js";import"./index-DJO9vBfz.js";import"./Loader-WXXQ1viB.js";const{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,p=(s,a)=>{const[{isOpen:m},o]=c();return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(d,{onClick:()=>o({isOpen:!0}),className:"mb-4 bg-blue-600 text-white rounded px-4 py-2",children:"Show modal"}),s({...a,args:{...a.allArgs,isOpen:m,onClose:()=>o({isOpen:!1})}})]})},f={title:"Components/Modal",component:i,decorators:[p],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean"},maxWidth:{control:"text"},width:{control:"text"},className:{control:"text"},preventClosing:{control:"boolean"}}},t={args:{isOpen:!1,maxWidth:"max-w-sm",width:"w-full",className:"p-5",preventClosing:!1},parameters:{docs:{description:{story:"A modal with default settings and general styling."}}},render:s=>e.jsx(i,{...s,children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Title"}),e.jsx("p",{className:"mt-2",children:"This is an example."}),e.jsx(d,{className:"mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",onClick:s.onClose,children:"Close"})]})})};var l,r,n;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
  render: args => <Modal {...args}>
      <div className="text-center">
        <h2 className="text-lg font-semibold">Title</h2>
        <p className="mt-2">This is an example.</p>

        <Button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={args.onClose}>
          Close
        </Button>
      </div>
    </Modal>
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const w=["ModalExample"];export{t as ModalExample,w as __namedExportsOrder,f as default};
