import{j as t}from"./jsx-runtime-DQ7wxIhe.js";import{D as n}from"./Breadcrumbs-T6sOqUOe.js";import{B as s}from"./Button-BNCWPCAr.js";import"./iframe-B0e6c2EL.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-D7t78SyI.js";import"./List-W-U0xGrz.js";import"./ContextMenu-Cemz2U4T.js";import"./Menu-Bh2QmXu_.js";import"./Checkbox-Bx1nIjko.js";import"./SkeletonLoader-B3XnU42M.js";import"./InfiniteScroll-BR2m0wIa.js";import"./Avatar-DGL7XgHv.js";import"./BaseDialog-rlrtNF4O.js";import"./X.es-CbOdNntq.js";import"./CircleButton-D7f_HMI3.js";import"./Warning.es-71j64cBf.js";import"./Card-W63TWrDz.js";import"./Copyable-Dezg9PjK.js";import"./Tooltip-BLUQuG1p.js";import"./Empty-DVpYHkdN.js";import"./Header-FI-MQB2d.js";import"./Input-DrOOcaPu.js";import"./Loader-CGM5KxLV.js";import"./Modal-DUivo5jO.js";import"./TransparentModal-D2hHmuf_.js";import"./Popover-C-exRkN0.js";import"./RadioButton-CQplX_AC.js";import"./RangeSlider-BocHSCDY.js";import"./Sidenav-vUozO5JM.js";import"./Switch-C_-vbrTV.js";import"./Table-BkzPCyj5.js";import"./TextArea-DjRbFvGz.js";import"./TrayList-CcTRPbXY.js";import"./MessageCheapSkeleton-CqsKMJAP.js";import"./MessageCheap-pOQPEqXC.js";import"./UserCheap-DiDh6rG6.js";import"./Grid-CqXznJpJ.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,m=(r,i)=>{const[{isOpen:a},e]=p();return t.jsxs("div",{style:{padding:"20px"},children:[t.jsx(s,{onClick:()=>e({isOpen:!0}),className:"mb-4 bg-blue-600 text-white rounded px-4 py-2",children:"Show dialog"}),r({...i,args:{...i.allArgs,isOpen:a,onClose:()=>e({isOpen:!1})}})]})},H={title:"Components/Dialog",component:n,decorators:[m],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"},primaryAction:{control:"text"},secondaryAction:{control:"text"},primaryActionColor:{control:"select",options:["primary","danger"]},isLoading:{control:"boolean"}}},o={args:{isOpen:!1,title:"Dialog Title",subtitle:"This is a subtitle for the dialog.",primaryAction:"Confirm",secondaryAction:"Cancel",primaryActionColor:"primary",isLoading:!1,onPrimaryAction:()=>alert("Primary action executed!"),onSecondaryAction:()=>alert("Secondary action executed!")},parameters:{docs:{description:{story:"An example dialogue."}}},render:r=>t.jsx(n,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  render: (args: any) => <Dialog {...args} />
}`,...o.parameters?.docs?.source}}};const J=["DialogExample"];export{o as DialogExample,J as __namedExportsOrder,H as default};
