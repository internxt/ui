import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{D as p}from"./Breadcrumbs-DZKQcSEe.js";import{B as l}from"./Button-t3VSbunz.js";import"./index-DJO9vBfz.js";import"./IconBase-CGf_ViAl.js";import"./List-5YqXNeuz.js";import"./ContextMenu-CBNr2sIz.js";import"./Menu-BFtBU9I-.js";import"./Checkbox-lZn49SZJ.js";import"./SkeletonLoader-Dqy1sb8d.js";import"./InfiniteScroll-D6rpEwbe.js";import"./Avatar-CfXFXE0c.js";import"./BaseDialog-CkHdizRO.js";import"./X-B8Py3cVj.js";import"./Card-fKDrKv44.js";import"./Copyable-Bkvo8Q8V.js";import"./Tooltip-0LdMC1i1.js";import"./Empty-NNdb0wjV.js";import"./Header-BQo-kNV3.js";import"./Input-DA6u682F.js";import"./Loader-WXXQ1viB.js";import"./Modal-DBGlfaXo.js";import"./TransparentModal-CobRkEZ_.js";import"./Popover-DAHs1B_g.js";import"./RadioButton-BaYA9ZTr.js";import"./RangeSlider-DGMvr0L_.js";import"./Switch-Ccx_Dh3W.js";import"./Table-DMgsH0ne.js";import"./TextArea-C2r9IsVv.js";const{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,d=(r,e)=>{const[{isOpen:m},i]=c();return t.jsxs("div",{style:{padding:"20px"},children:[t.jsx(l,{onClick:()=>i({isOpen:!0}),className:"mb-4 bg-blue-600 text-white rounded px-4 py-2",children:"Show dialog"}),r({...e,args:{...e.allArgs,isOpen:m,onClose:()=>i({isOpen:!1})}})]})},W={title:"Components/Dialog",component:p,decorators:[d],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"},primaryAction:{control:"text"},secondaryAction:{control:"text"},primaryActionColor:{control:"select",options:["primary","danger"]},isLoading:{control:"boolean"}}},o={args:{isOpen:!1,title:"Dialog Title",subtitle:"This is a subtitle for the dialog.",primaryAction:"Confirm",secondaryAction:"Cancel",primaryActionColor:"primary",isLoading:!1,onPrimaryAction:()=>alert("Primary action executed!"),onSecondaryAction:()=>alert("Secondary action executed!")},parameters:{docs:{description:{story:"An example dialogue."}}},render:r=>t.jsx(p,{...r})};var n,a,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const Y=["DialogExample"];export{o as DialogExample,Y as __namedExportsOrder,W as default};
