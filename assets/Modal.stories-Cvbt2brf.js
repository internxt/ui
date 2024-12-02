import{j as e}from"./jsx-runtime-DEdD30eg.js";import{M as n}from"./Tooltip-D-4JECEw.js";import"./Checkbox-B1LSGN-a.js";import"./Input-CC9g1h6A.js";import"./TextArea-BpjtNd7f.js";import{B as m}from"./Button-LpIkml3t.js";import"./Loader-BkvXvL7i.js";import"./Switch-CMlADDZa.js";import"./RadioButton-D0I2JMte.js";import"./Avatar-Dqkp6atG.js";import"./RangeSlider-DcUOFDup.js";import"./Empty-C5xdo4xg.js";import"./InfiniteScroll-C-7M1eJr.js";import"./List-CBVHCCnz.js";import"./Dropdown-CiQs3i6E.js";import"./Menu-CuyP6RQK.js";import"./Breadcrumbs-xWvwyB-k.js";import"./index-RYns6xqu.js";import"./IconBase-C0B5zwrg.js";import"./index-BwmuJAIN.js";import"./DotsThree-CDi4_-Er.js";import"./SkeletonLoader-CMPmhq88.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,c=(t,o)=>{const[{isOpen:p},r]=d();return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(m,{onClick:()=>r({isOpen:!0}),className:"mb-4 bg-blue-600 text-white rounded px-4 py-2",children:"Show modal"}),t({...o,args:{...o.allArgs,isOpen:p,onClose:()=>r({isOpen:!1})}})]})},S={title:"Components/Modal",component:n,decorators:[c],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean"},maxWidth:{control:"text"},width:{control:"text"},className:{control:"text"},preventClosing:{control:"boolean"}}},s={args:{isOpen:!1,maxWidth:"max-w-sm",width:"w-full",className:"p-5",preventClosing:!1},parameters:{docs:{description:{story:"A modal with default settings and general styling."}}},render:t=>e.jsx(n,{...t,children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Title"}),e.jsx("p",{className:"mt-2",children:"This is an example."}),e.jsx(m,{className:"mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",onClick:t.onClose,children:"Close"})]})})};var a,l,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const D=["ModalExample"];export{s as ModalExample,D as __namedExportsOrder,S as default};
