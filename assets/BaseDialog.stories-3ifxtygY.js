import{j as e}from"./jsx-runtime-DEdD30eg.js";import{B as h}from"./Modal-BI15CdoA.js";import"./Checkbox-B1LSGN-a.js";import"./Input-CC9g1h6A.js";import"./TextArea-BpjtNd7f.js";import{B as b}from"./Button-C7msI41c.js";import"./Switch-CMlADDZa.js";import"./RadioButton-D0I2JMte.js";import"./Avatar-Dqkp6atG.js";import"./RangeSlider-DcUOFDup.js";import"./InfiniteScroll-C-7M1eJr.js";import"./List-CBVHCCnz.js";import"./Dropdown-CiQs3i6E.js";import"./Menu-CuyP6RQK.js";import"./Breadcrumbs-xWvwyB-k.js";import"./index-RYns6xqu.js";import"./IconBase-C0B5zwrg.js";import"./index-BwmuJAIN.js";import"./DotsThree-CDi4_-Er.js";import"./SkeletonLoader-CMPmhq88.js";const x=g=>e.jsx("div",{style:{minHeight:"300px",minWidth:"600px"},children:e.jsx(g,{})}),q={title:"Components/BaseDialog",component:h,parameters:{layout:"centered"},decorators:[x],tags:["autodocs"]},s={isOpen:!0,title:"Dialog Title",subTitle:"Dialog Subtitle",children:e.jsxs("div",{className:"p-6 space-y-4",children:[e.jsx("div",{children:"Dialog content"}),e.jsx(b,{children:" Test button"})]}),onClose:()=>alert("Dialog closed"),bgColor:"bg-white",dialogRounded:!0,weightIcon:"bold"},r={args:{...s}},t={args:{...s,hideCloseButton:!0}},o={args:{...s,classes:"p-6 shadow-lg",panelClasses:"border border-red",titleClasses:"font-semibold",closeClass:"border border-red text-green hover:text-red"}};var a,i,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,d,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    hideCloseButton: true
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    classes: 'p-6 shadow-lg',
    panelClasses: 'border border-red',
    titleClasses: 'font-semibold',
    closeClass: 'border border-red text-green hover:text-red'
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const z=["Default","WithoutCloseButton","CustomStyles"];export{o as CustomStyles,r as Default,t as WithoutCloseButton,z as __namedExportsOrder,q as default};
