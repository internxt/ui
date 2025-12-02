import{j as t}from"./jsx-runtime-o9qq2xiW.js";import{D as n}from"./Breadcrumbs-vR1Z03Hy.js";import{B as s}from"./Button-CWqAKjnC.js";import"./iframe-C1-GEPpH.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-DWuuYLqk.js";import"./List-CgDImlYD.js";import"./ContextMenu-B9lnddGp.js";import"./Menu-DFe5yjEM.js";import"./Checkbox-DhuBjC8k.js";import"./SkeletonLoader-DCUECBVL.js";import"./InfiniteScroll-RoMnOfRJ.js";import"./Avatar-CRrgkm52.js";import"./BaseDialog-Bn_Q31tf.js";import"./X.es-D67TZzyf.js";import"./CircleButton-Bl3R5yod.js";import"./Warning.es-N6yblQxM.js";import"./Card-BGdD2_Cd.js";import"./Copyable-NLwpI5p2.js";import"./Tooltip--5UIkFVa.js";import"./Empty-BksxYAIY.js";import"./Header-PJR7LpZJ.js";import"./Input-xa1UM22n.js";import"./Loader-DE4tniYN.js";import"./Modal-DMcWQhHg.js";import"./TransparentModal-C90ojgH4.js";import"./Popover-BLEQeUt0.js";import"./RadioButton-5pTwHk1n.js";import"./RangeSlider-BDNltDB-.js";import"./Switch-DNQpQNVg.js";import"./Table-D6i7mFAi.js";import"./TextArea-C6NpNPjY.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,m=(r,i)=>{const[{isOpen:a},e]=p();return t.jsxs("div",{style:{padding:"20px"},children:[t.jsx(s,{onClick:()=>e({isOpen:!0}),className:"mb-4 bg-blue-600 text-white rounded px-4 py-2",children:"Show dialog"}),r({...i,args:{...i.allArgs,isOpen:a,onClose:()=>e({isOpen:!1})}})]})},W={title:"Components/Dialog",component:n,decorators:[m],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"},primaryAction:{control:"text"},secondaryAction:{control:"text"},primaryActionColor:{control:"select",options:["primary","danger"]},isLoading:{control:"boolean"}}},o={args:{isOpen:!1,title:"Dialog Title",subtitle:"This is a subtitle for the dialog.",primaryAction:"Confirm",secondaryAction:"Cancel",primaryActionColor:"primary",isLoading:!1,onPrimaryAction:()=>alert("Primary action executed!"),onSecondaryAction:()=>alert("Secondary action executed!")},parameters:{docs:{description:{story:"An example dialogue."}}},render:r=>t.jsx(n,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Y=["DialogExample"];export{o as DialogExample,Y as __namedExportsOrder,W as default};
