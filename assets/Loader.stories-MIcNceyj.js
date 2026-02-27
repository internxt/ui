import{j as n}from"./jsx-runtime-C89ddIqy.js";import{L as m}from"./Loader-slauWO2S.js";import"./iframe-CeiX8cuE.js";import"./preload-helper-PPVm8Dsz.js";const c=p=>n.jsx("div",{style:{minHeight:"300px",minWidth:"600px"},children:n.jsx(p,{})}),g={title:"Components/Loader",component:m,parameters:{layout:"fullscreen"},decorators:[c],tags:["autodocs"]},e={classNameContainer:"absolute z-50 flex h-full w-full flex-col items-center justify-center bg-highlight/10",classNameLoader:"text-blue-500",size:40},r={args:{...e,type:"spinner"}},a={args:{...e,type:"pulse"}},s={args:{...e,type:"spinner",classNameText:"mt-5 text-2xl font-medium text-gray-100",text:"Cargando, por favor espera..."}},t={args:{...e,type:"pulse",classNameText:"mt-5 text-2xl font-medium text-gray-100",text:"Cargando, por favor espera..."}},o={args:{...e,size:80}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'spinner'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'pulse'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'spinner',
    classNameText: 'mt-5 text-2xl font-medium text-gray-100',
    text: 'Cargando, por favor espera...'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'pulse',
    classNameText: 'mt-5 text-2xl font-medium text-gray-100',
    text: 'Cargando, por favor espera...'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: 80
  }
}`,...o.parameters?.docs?.source}}};const x=["SpinnerLoader","PulseLoader","CustomSpinnerTextLoader","CustomPulseTextLoader","LargeLoader"];export{t as CustomPulseTextLoader,s as CustomSpinnerTextLoader,o as LargeLoader,a as PulseLoader,r as SpinnerLoader,x as __namedExportsOrder,g as default};
