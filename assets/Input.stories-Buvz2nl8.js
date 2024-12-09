import{I as L}from"./Input-BVGHFgkn.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import"./IconBase-C0B5zwrg.js";import"./X-B91Cd-JX.js";const{useState:Y}=__STORYBOOK_MODULE_PREVIEW_API__,A=(O,a)=>{const[l,W]=Y(a.args.value),y=c=>{var u;l!==c&&(W(c),(u=a.updateArgs)==null||u.call(a,{value:c}))};return O({...a,args:{...a.args,value:l,onChange:y}})},U={title:"Components/Input",component:L,parameters:{layout:"centered"},decorators:[A],tags:["autodocs"],argTypes:{onChange:{action:"changed"}}},e={args:{label:"Text Input",variant:"default",value:"",placeholder:"Type something...",maxLength:20}},r={args:{label:"Search Input",variant:"search",value:"",placeholder:"Search..."}},s={args:{label:"Password Input",variant:"password",value:"",placeholder:"Enter password..."}},n={args:{label:"Input with Success Message",variant:"default",value:"",message:"Your input is correct!",accent:"success"}},t={args:{label:"Input with Error Message",variant:"default",value:"",message:"There was an error!",accent:"error"}},o={args:{label:"Input with Warning Message",variant:"default",value:"",message:"This is a warning!",accent:"warning"}};var p,g,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Text Input',
    variant: 'default',
    value: '',
    placeholder: 'Type something...',
    maxLength: 20
  }
}`,...(i=(g=e.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var d,m,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Search Input',
    variant: 'search',
    value: '',
    placeholder: 'Search...'
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var v,w,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Password Input',
    variant: 'password',
    value: '',
    placeholder: 'Enter password...'
  }
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var I,M,b;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Input with Success Message',
    variant: 'default',
    value: '',
    message: 'Your input is correct!',
    accent: 'success'
  }
}`,...(b=(M=n.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var T,f,E;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Input with Error Message',
    variant: 'default',
    value: '',
    message: 'There was an error!',
    accent: 'error'
  }
}`,...(E=(f=t.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var _,P,C;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Input with Warning Message',
    variant: 'default',
    value: '',
    message: 'This is a warning!',
    accent: 'warning'
  }
}`,...(C=(P=o.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const V=["Text","Search","Password","SuccessMessage","ErrorMessage","WarningMessage"];export{t as ErrorMessage,s as Password,r as Search,n as SuccessMessage,e as Text,o as WarningMessage,V as __namedExportsOrder,U as default};
