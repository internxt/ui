import{j as t}from"./jsx-runtime-C89ddIqy.js";import{D as n}from"./Breadcrumbs-Dc6-wsKW.js";import{B as s}from"./Button-CBG_LY9U.js";import"./iframe-CeiX8cuE.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-ySa3pMSe.js";import"./List-6hxXm6R7.js";import"./ContextMenu-CSVlXjm6.js";import"./Menu-CsZZ-Dq8.js";import"./Checkbox-BcWMKMTf.js";import"./SkeletonLoader-DsQXanlU.js";import"./InfiniteScroll-B1HmUEgi.js";import"./Avatar-DfoPFbjF.js";import"./BaseDialog-Dj6jxaEK.js";import"./X.es-DREZHKIl.js";import"./CircleButton-vhzqfwxC.js";import"./Warning.es-AUONRyYt.js";import"./Card-C4xiAqLj.js";import"./Copyable-D9GQNENb.js";import"./Tooltip-BvVdSqN6.js";import"./Empty-C_u805jA.js";import"./Header-BRgl_lNR.js";import"./Input-g0SIY1q6.js";import"./Loader-slauWO2S.js";import"./Modal-DeIQxPlb.js";import"./TransparentModal-C6v41256.js";import"./Popover-d3ESCN4B.js";import"./RadioButton-DQGWVm3t.js";import"./RangeSlider-B2CWQxWZ.js";import"./Sidenav-W8WuYffF.js";import"./Switch-M7trTDfd.js";import"./Table-BmZ1tDmk.js";import"./TextArea-Ctxxjozv.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,m=(r,i)=>{const[{isOpen:a},e]=p();return t.jsxs("div",{style:{padding:"20px"},children:[t.jsx(s,{onClick:()=>e({isOpen:!0}),className:"mb-4 bg-blue-600 text-white rounded px-4 py-2",children:"Show dialog"}),r({...i,args:{...i.allArgs,isOpen:a,onClose:()=>e({isOpen:!1})}})]})},Y={title:"Components/Dialog",component:n,decorators:[m],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"},primaryAction:{control:"text"},secondaryAction:{control:"text"},primaryActionColor:{control:"select",options:["primary","danger"]},isLoading:{control:"boolean"}}},o={args:{isOpen:!1,title:"Dialog Title",subtitle:"This is a subtitle for the dialog.",primaryAction:"Confirm",secondaryAction:"Cancel",primaryActionColor:"primary",isLoading:!1,onPrimaryAction:()=>alert("Primary action executed!"),onSecondaryAction:()=>alert("Secondary action executed!")},parameters:{docs:{description:{story:"An example dialogue."}}},render:r=>t.jsx(n,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["DialogExample"];export{o as DialogExample,q as __namedExportsOrder,Y as default};
