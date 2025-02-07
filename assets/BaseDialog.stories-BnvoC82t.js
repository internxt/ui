import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{B as h}from"./BaseDialog-CkHdizRO.js";import{B as b}from"./Button-t3VSbunz.js";import"./index-DJO9vBfz.js";import"./X-B8Py3cVj.js";import"./IconBase-CGf_ViAl.js";import"./Loader-WXXQ1viB.js";const x=g=>e.jsx("div",{style:{minHeight:"300px",minWidth:"600px"},children:e.jsx(g,{})}),S={title:"Components/BaseDialog",component:h,parameters:{layout:"centered"},decorators:[x],tags:["autodocs"]},o={isOpen:!0,title:"Dialog Title",subTitle:"Dialog Subtitle",children:e.jsxs("div",{className:"p-6 space-y-4",children:[e.jsx("div",{children:"Dialog content"}),e.jsx(b,{children:" Test button"})]}),onClose:()=>alert("Dialog closed"),bgColor:"bg-white",dialogRounded:!0,weightIcon:"bold"},s={args:{...o}},r={args:{...o,hideCloseButton:!0}},t={args:{...o,classes:"p-6 shadow-lg",panelClasses:"border border-red",titleClasses:"font-semibold",closeClass:"border border-red text-green hover:text-red"}};var a,l,n;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(n=(l=s.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var d,i,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    hideCloseButton: true
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    classes: 'p-6 shadow-lg',
    panelClasses: 'border border-red',
    titleClasses: 'font-semibold',
    closeClass: 'border border-red text-green hover:text-red'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const w=["Default","WithoutCloseButton","CustomStyles"];export{t as CustomStyles,s as Default,r as WithoutCloseButton,w as __namedExportsOrder,S as default};
