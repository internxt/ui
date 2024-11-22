import{j as e}from"./jsx-runtime-DEdD30eg.js";import{M as i}from"./Modal-DRHrI35M.js";import"./Checkbox-B1LSGN-a.js";import"./Input-CC9g1h6A.js";import"./TextArea-BpjtNd7f.js";import{B as m}from"./Button-B7mFRUld.js";import"./Switch-CMlADDZa.js";import"./RadioButton-D0I2JMte.js";import"./Avatar-B0FIO6ZD.js";import"./RangeSlider-DcUOFDup.js";import"./InfiniteScroll-CZTZ1xiO.js";import"./List-C2C48ker.js";import"./index-RYns6xqu.js";import"./IconBase-C0B5zwrg.js";import"./index-BwmuJAIN.js";import"./SkeletonLoader-CulGQfQ9.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,c=(s,o)=>{const[{isOpen:p},r]=d();return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(m,{onClick:()=>r({isOpen:!0}),className:"mb-4 bg-blue-600 text-white rounded px-4 py-2",children:"Show modal"}),s({...o,args:{...o.allArgs,isOpen:p,onClose:()=>r({isOpen:!1})}})]})},A={title:"Components/Modal",component:i,decorators:[c],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean"},maxWidth:{control:"text"},width:{control:"text"},className:{control:"text"},preventClosing:{control:"boolean"}}},t={args:{isOpen:!1,maxWidth:"max-w-sm",width:"w-full",className:"p-5",preventClosing:!1},parameters:{docs:{description:{story:"A modal with default settings and general styling."}}},render:s=>e.jsx(i,{...s,children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Title"}),e.jsx("p",{className:"mt-2",children:"This is an example."}),e.jsx(m,{className:"mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",onClick:s.onClose,children:"Close"})]})})};var a,l,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
  render: args => <Modal {...args}>\r
      <div className="text-center">\r
        <h2 className="text-lg font-semibold">Title</h2>\r
        <p className="mt-2">This is an example.</p>\r
\r
        <Button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={args.onClose}>\r
          Close\r
        </Button>\r
      </div>\r
    </Modal>
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const T=["ModalExample"];export{t as ModalExample,T as __namedExportsOrder,A as default};
