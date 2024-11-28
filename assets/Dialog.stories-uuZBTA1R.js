import{j as t}from"./jsx-runtime-DEdD30eg.js";import{D as l}from"./Modal-BI15CdoA.js";import"./Checkbox-B1LSGN-a.js";import"./Input-CC9g1h6A.js";import"./TextArea-BpjtNd7f.js";import{B as p}from"./Button-C7msI41c.js";import"./Switch-CMlADDZa.js";import"./RadioButton-D0I2JMte.js";import"./Avatar-Dqkp6atG.js";import"./RangeSlider-DcUOFDup.js";import"./InfiniteScroll-C-7M1eJr.js";import"./List-CBVHCCnz.js";import"./Dropdown-CiQs3i6E.js";import"./Menu-CuyP6RQK.js";import"./Breadcrumbs-xWvwyB-k.js";import"./index-RYns6xqu.js";import"./IconBase-C0B5zwrg.js";import"./index-BwmuJAIN.js";import"./DotsThree-CDi4_-Er.js";import"./SkeletonLoader-CMPmhq88.js";const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,d=(r,e)=>{const[{isOpen:c},i]=m();return t.jsxs("div",{style:{padding:"20px"},children:[t.jsx(p,{onClick:()=>i({isOpen:!0}),className:"mb-4 bg-blue-600 text-white rounded px-4 py-2",children:"Show dialog"}),r({...e,args:{...e.allArgs,isOpen:c,onClose:()=>i({isOpen:!1})}})]})},w={title:"Components/Dialog",component:l,decorators:[d],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"},primaryAction:{control:"text"},secondaryAction:{control:"text"},primaryActionColor:{control:"select",options:["primary","danger"]},isLoading:{control:"boolean"}}},o={args:{isOpen:!1,title:"Dialog Title",subtitle:"This is a subtitle for the dialog.",primaryAction:"Confirm",secondaryAction:"Cancel",primaryActionColor:"primary",isLoading:!1,onPrimaryAction:()=>alert("Primary action executed!"),onSecondaryAction:()=>alert("Secondary action executed!")},parameters:{docs:{description:{story:"An example dialogue."}}},render:r=>t.jsx(l,{...r})};var n,a,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    title: 'Dialog Title',
    subtitle: 'This is a subtitle for the dialog.',
    primaryAction: 'Confirm',
    secondaryAction: 'Cancel',
    primaryActionColor: 'primary',
    isLoading: false,
    onPrimaryAction: () => alert('Primary action executed!'),
    onSecondaryAction: () => alert('Secondary action executed!')
  },
  parameters: {
    docs: {
      description: {
        story: 'An example dialogue.'
      }
    }
  },
  render: args => <Dialog {...args} />
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const I=["DialogExample"];export{o as DialogExample,I as __namedExportsOrder,w as default};
