import{j as t}from"./jsx-runtime-B2pc4T33.js";import{D as n}from"./Breadcrumbs-CMloZe31.js";import{B as s}from"./Button-T3aTVeZl.js";import"./iframe-BC8gr1zk.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-Bl--yBIB.js";import"./List-PsDZx_dS.js";import"./ContextMenu-cPFiySUG.js";import"./Menu-xQ5AuHQE.js";import"./Checkbox-BbP_qEMN.js";import"./SkeletonLoader-Cak9gFcc.js";import"./InfiniteScroll-UFEVJ2Wi.js";import"./Avatar-g0X4hdX2.js";import"./BaseDialog-wzyQkKiE.js";import"./X.es-DZS6YKIf.js";import"./CircleButton-DRIBtA0h.js";import"./Warning.es-Bknw103E.js";import"./Card-Bcve9i6Y.js";import"./Copyable-Ba_aqZ5-.js";import"./Tooltip-BtOn1vnr.js";import"./Empty-BUO8-EHn.js";import"./Header-B_uKrbaa.js";import"./Input-YtIWnvAa.js";import"./Loader-Bnj2LbWV.js";import"./Modal-BGDA7akC.js";import"./TransparentModal-mlZQtpl4.js";import"./Popover-Cwqox2YM.js";import"./RadioButton-B-7FTmFB.js";import"./RangeSlider-BmMJ2L8z.js";import"./Sidenav-Cp-Ra5sN.js";import"./Switch-6vJDhPFG.js";import"./Table-C0EnAMFO.js";import"./TextArea-yKmLCKSQ.js";import"./TrayList-CpC0DOKg.js";import"./MessageCheapSkeleton-BkSlYQER.js";import"./MessageCheap-Df2sQn26.js";import"./UserCheap-D_IeAxNY.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,m=(r,i)=>{const[{isOpen:a},e]=p();return t.jsxs("div",{style:{padding:"20px"},children:[t.jsx(s,{onClick:()=>e({isOpen:!0}),className:"mb-4 bg-blue-600 text-white rounded px-4 py-2",children:"Show dialog"}),r({...i,args:{...i.allArgs,isOpen:a,onClose:()=>e({isOpen:!1})}})]})},G={title:"Components/Dialog",component:n,decorators:[m],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"},primaryAction:{control:"text"},secondaryAction:{control:"text"},primaryActionColor:{control:"select",options:["primary","danger"]},isLoading:{control:"boolean"}}},o={args:{isOpen:!1,title:"Dialog Title",subtitle:"This is a subtitle for the dialog.",primaryAction:"Confirm",secondaryAction:"Cancel",primaryActionColor:"primary",isLoading:!1,onPrimaryAction:()=>alert("Primary action executed!"),onSecondaryAction:()=>alert("Secondary action executed!")},parameters:{docs:{description:{story:"An example dialogue."}}},render:r=>t.jsx(n,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const H=["DialogExample"];export{o as DialogExample,H as __namedExportsOrder,G as default};
