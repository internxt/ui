import{j as e}from"./jsx-runtime-DQ7wxIhe.js";import{B as l}from"./BaseDialog-rlrtNF4O.js";import{B as n}from"./Button-BNCWPCAr.js";import"./iframe-B0e6c2EL.js";import"./preload-helper-PPVm8Dsz.js";import"./X.es-CbOdNntq.js";import"./IconBase.es-D7t78SyI.js";import"./Loader-CGM5KxLV.js";const d=a=>e.jsx("div",{style:{minHeight:"300px",minWidth:"600px"},children:e.jsx(a,{})}),x={title:"Components/BaseDialog",component:l,parameters:{layout:"centered"},decorators:[d],tags:["autodocs"]},o={isOpen:!0,title:"Dialog Title",subTitle:"Dialog Subtitle",children:e.jsxs("div",{className:"p-6 space-y-4",children:[e.jsx("div",{children:"Dialog content"}),e.jsx(n,{children:" Test button"})]}),onClose:()=>alert("Dialog closed"),bgColor:"bg-white",dialogRounded:!0,weightIcon:"bold"},s={args:{...o}},r={args:{...o,hideCloseButton:!0}},t={args:{...o,classes:"p-6 shadow-lg",panelClasses:"border border-red",titleClasses:"font-semibold",closeClass:"border border-red text-green hover:text-red"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    hideCloseButton: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    classes: 'p-6 shadow-lg',
    panelClasses: 'border border-red',
    titleClasses: 'font-semibold',
    closeClass: 'border border-red text-green hover:text-red'
  }
}`,...t.parameters?.docs?.source}}};const C=["Default","WithoutCloseButton","CustomStyles"];export{t as CustomStyles,s as Default,r as WithoutCloseButton,C as __namedExportsOrder,x as default};
