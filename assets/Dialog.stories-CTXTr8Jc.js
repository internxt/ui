import{j as t}from"./jsx-runtime-BTUVAWqj.js";import{D as n}from"./Breadcrumbs-BzxXAN3g.js";import{B as s}from"./Button-4mnq6jx3.js";import"./iframe-D3grh0SS.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-QKYK38-V.js";import"./List-C1scQsLJ.js";import"./ContextMenu-DVzwBKfr.js";import"./Menu-JmFA1Vx5.js";import"./Checkbox-COCh0MWi.js";import"./SkeletonLoader-DNkdfZ6x.js";import"./InfiniteScroll-4gnx4_QE.js";import"./Avatar-DSMSE_Qt.js";import"./BaseDialog-pzI2BOtU.js";import"./X.es-9V-k0WUQ.js";import"./CircleButton-ByDngHUX.js";import"./Warning.es-DP2vcSG5.js";import"./Card-CzhkTHJV.js";import"./Copyable-BYj9K2qB.js";import"./Tooltip-DkGGU6MK.js";import"./Empty-DRWgfe1G.js";import"./Header-DHv7_Lqm.js";import"./Input-CLn8WJga.js";import"./Loader-BALLjVti.js";import"./Modal-DaJwcMDb.js";import"./TransparentModal-N1N2RHSH.js";import"./Popover-BGo9QSFF.js";import"./RadioButton-TE0PTyRN.js";import"./RangeSlider-79rbSIzl.js";import"./Sidenav-CXydsJFz.js";import"./Switch-DhOvY-La.js";import"./Table-BaYB6ouC.js";import"./TextArea-DbiAJ50z.js";import"./TrayList-BVhapOeD.js";import"./MessageCheapSkeleton-uNwjWfwy.js";import"./MessageCheap-D8axeVfu.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,m=(r,i)=>{const[{isOpen:a},e]=p();return t.jsxs("div",{style:{padding:"20px"},children:[t.jsx(s,{onClick:()=>e({isOpen:!0}),className:"mb-4 bg-blue-600 text-white rounded px-4 py-2",children:"Show dialog"}),r({...i,args:{...i.allArgs,isOpen:a,onClose:()=>e({isOpen:!1})}})]})},F={title:"Components/Dialog",component:n,decorators:[m],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"},primaryAction:{control:"text"},secondaryAction:{control:"text"},primaryActionColor:{control:"select",options:["primary","danger"]},isLoading:{control:"boolean"}}},o={args:{isOpen:!1,title:"Dialog Title",subtitle:"This is a subtitle for the dialog.",primaryAction:"Confirm",secondaryAction:"Cancel",primaryActionColor:"primary",isLoading:!1,onPrimaryAction:()=>alert("Primary action executed!"),onSecondaryAction:()=>alert("Secondary action executed!")},parameters:{docs:{description:{story:"An example dialogue."}}},render:r=>t.jsx(n,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const G=["DialogExample"];export{o as DialogExample,G as __namedExportsOrder,F as default};
