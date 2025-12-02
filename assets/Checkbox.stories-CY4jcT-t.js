import{C as m}from"./Checkbox-DhuBjC8k.js";import"./jsx-runtime-o9qq2xiW.js";import"./iframe-C1-GEPpH.js";import"./preload-helper-PPVm8Dsz.js";const{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,p=(o,n)=>{const[{checked:d},i]=u();return o({...n,args:{...n.allArgs,onClick:()=>i({...n.args,checked:!d})}})},b={title:"Components/Checkbox",component:m,parameters:{layout:"centered"},decorators:[p],tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{checked:!1}},r={args:{checked:!1,disabled:!0}},s={args:{checked:!0}},a={args:{checked:!0,disabled:!0}},c={args:{checked:!0,indeterminate:!0}},t={args:{indeterminate:!0,disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    indeterminate: true
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const C=["Enabled","Disabled","Checked","CheckedAndDisabled","Indeterminate","IndeterminateDisabled"];export{s as Checked,a as CheckedAndDisabled,r as Disabled,e as Enabled,c as Indeterminate,t as IndeterminateDisabled,C as __namedExportsOrder,b as default};
