import{j as t}from"./jsx-runtime-DEdD30eg.js";import{D as p}from"./Breadcrumbs-C_26Je0K.js";import{B as c}from"./Button-UUIrlFY4.js";import"./index-RYns6xqu.js";import"./IconBase-C0B5zwrg.js";import"./List-Do_7JdfG.js";import"./ContextMenu-BA8jxjCL.js";import"./Menu-GsUnQHJz.js";import"./Checkbox-nMqsM2bW.js";import"./SkeletonLoader-CMPmhq88.js";import"./InfiniteScroll-Bckbvu9a.js";import"./Avatar-Dqkp6atG.js";import"./BaseDialog-CO_0DwbN.js";import"./X-B91Cd-JX.js";import"./Card-KI_ytpPC.js";import"./Copyable-IAl0oZTn.js";import"./Tooltip-CSJfASjJ.js";import"./Empty-BA-FNOEK.js";import"./Input-BVGHFgkn.js";import"./Loader-BkvXvL7i.js";import"./Modal-BZOag5Dm.js";import"./Popover-D3jXCPSB.js";import"./RadioButton-CdUGs_6A.js";import"./RangeSlider-P4jgt9i4.js";import"./Switch-B_5fUSNe.js";import"./TextArea-D8l4yB63.js";const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,d=(r,e)=>{const[{isOpen:l},i]=m();return t.jsxs("div",{style:{padding:"20px"},children:[t.jsx(c,{onClick:()=>i({isOpen:!0}),className:"mb-4 bg-blue-600 text-white rounded px-4 py-2",children:"Show dialog"}),r({...e,args:{...e.allArgs,isOpen:l,onClose:()=>i({isOpen:!1})}})]})},N={title:"Components/Dialog",component:p,decorators:[d],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"},primaryAction:{control:"text"},secondaryAction:{control:"text"},primaryActionColor:{control:"select",options:["primary","danger"]},isLoading:{control:"boolean"}}},o={args:{isOpen:!1,title:"Dialog Title",subtitle:"This is a subtitle for the dialog.",primaryAction:"Confirm",secondaryAction:"Cancel",primaryActionColor:"primary",isLoading:!1,onPrimaryAction:()=>alert("Primary action executed!"),onSecondaryAction:()=>alert("Secondary action executed!")},parameters:{docs:{description:{story:"An example dialogue."}}},render:r=>t.jsx(p,{...r})};var n,a,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const U=["DialogExample"];export{o as DialogExample,U as __namedExportsOrder,N as default};
