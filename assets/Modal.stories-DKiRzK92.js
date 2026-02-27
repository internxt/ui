import{j as e}from"./jsx-runtime-C89ddIqy.js";import{M as l}from"./Modal-DeIQxPlb.js";import{B as r}from"./Button-CBG_LY9U.js";import"./iframe-CeiX8cuE.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-slauWO2S.js";const{useArgs:i}=__STORYBOOK_MODULE_PREVIEW_API__,d=(s,a)=>{const[{isOpen:n},o]=i();return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(r,{onClick:()=>o({isOpen:!0}),className:"mb-4 bg-blue-600 text-white rounded px-4 py-2",children:"Show modal"}),s({...a,args:{...a.allArgs,isOpen:n,onClose:()=>o({isOpen:!1})}})]})},u={title:"Components/Modal",component:l,decorators:[d],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean"},maxWidth:{control:"text"},width:{control:"text"},className:{control:"text"},preventClosing:{control:"boolean"}}},t={args:{isOpen:!1,maxWidth:"max-w-sm",width:"w-full",className:"p-5",preventClosing:!1},parameters:{docs:{description:{story:"A modal with default settings and general styling."}}},render:s=>e.jsx(l,{...s,children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Title"}),e.jsx("p",{className:"mt-2",children:"This is an example."}),e.jsx(r,{className:"mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",onClick:s.onClose,children:"Close"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const b=["ModalExample"];export{t as ModalExample,b as __namedExportsOrder,u as default};
