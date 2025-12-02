import{I as i}from"./Input-xa1UM22n.js";import"./jsx-runtime-o9qq2xiW.js";import"./iframe-C1-GEPpH.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-DWuuYLqk.js";import"./Warning.es-N6yblQxM.js";import"./X.es-D67TZzyf.js";const{useState:d}=__STORYBOOK_MODULE_PREVIEW_API__,m=(u,a)=>{const[l,p]=d(a.args.value),g=c=>{l!==c&&(p(c),a.updateArgs?.({value:c}))};return u({...a,args:{...a.args,value:l,onChange:g}})},T={title:"Components/Input",component:i,parameters:{layout:"centered"},decorators:[m],tags:["autodocs"],argTypes:{onChange:{action:"changed"}}},e={args:{label:"Text Input",variant:"default",value:"",placeholder:"Type something...",maxLength:20}},r={args:{label:"Search Input",variant:"search",value:"",placeholder:"Search..."}},s={args:{label:"Password Input",variant:"password",value:"",placeholder:"Enter password..."}},n={args:{label:"Input with Success Message",variant:"default",value:"",message:"Your input is correct!",accent:"success"}},t={args:{label:"Input with Error Message",variant:"default",value:"",message:"There was an error!",accent:"error"}},o={args:{label:"Input with Warning Message",variant:"default",value:"",message:"This is a warning!",accent:"warning"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Text Input',
    variant: 'default',
    value: '',
    placeholder: 'Type something...',
    maxLength: 20
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search Input',
    variant: 'search',
    value: '',
    placeholder: 'Search...'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password Input',
    variant: 'password',
    value: '',
    placeholder: 'Enter password...'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input with Success Message',
    variant: 'default',
    value: '',
    message: 'Your input is correct!',
    accent: 'success'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input with Error Message',
    variant: 'default',
    value: '',
    message: 'There was an error!',
    accent: 'error'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input with Warning Message',
    variant: 'default',
    value: '',
    message: 'This is a warning!',
    accent: 'warning'
  }
}`,...o.parameters?.docs?.source}}};const f=["Text","Search","Password","SuccessMessage","ErrorMessage","WarningMessage"];export{t as ErrorMessage,s as Password,r as Search,n as SuccessMessage,e as Text,o as WarningMessage,f as __namedExportsOrder,T as default};
