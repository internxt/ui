import{B as o}from"./Button-CWqAKjnC.js";import"./jsx-runtime-o9qq2xiW.js";import"./iframe-C1-GEPpH.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-DE4tniYN.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,p={title:"Components/Button",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:c()}},r={args:{variant:"primary",children:"Button"}},a={args:{variant:"secondary",children:"Button"}},e={args:{variant:"tertiary",children:"Button",disabled:!1},parameters:{backgrounds:{default:"blue",values:[{name:"blue",value:"#1E293B"}]}}},n={args:{variant:"ghost",children:"Button"},parameters:{backgrounds:{default:"blue",values:[{name:"blue",value:"#1E293B"}]}}},t={args:{variant:"destructive",children:"Button"}},s={args:{variant:"primary",children:"Button",loading:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Button'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Button',
    disabled: false
  },
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [{
        name: 'blue',
        value: '#1E293B'
      }]
    }
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Button'
  },
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [{
        name: 'blue',
        value: '#1E293B'
      }]
    }
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Button'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button',
    loading: true
  }
}`,...s.parameters?.docs?.source}}};const g=["Primary","Secondary","Tertiary","Ghost","Destructive","Loading"];export{t as Destructive,n as Ghost,s as Loading,r as Primary,a as Secondary,e as Tertiary,g as __namedExportsOrder,p as default};
