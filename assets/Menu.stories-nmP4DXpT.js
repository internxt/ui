import{j as t}from"./jsx-runtime-C89ddIqy.js";import{R as o}from"./iframe-CeiX8cuE.js";import{M as s}from"./Menu-CsZZ-Dq8.js";import"./preload-helper-PPVm8Dsz.js";const{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,l=(e,n)=>{const[,i]=c();return e({...n,args:{...n.allArgs,handleMenuClose:()=>i({...n.args,isOpen:!0})}})},h={title:"Components/Menu",component:s,parameters:{layout:"centered"},decorators:[l],tags:["autodocs"],argTypes:{handleMenuClose:{action:"closed"},genericEnterKey:{action:"genericEnterKey"}}},p=o.forwardRef(({size:e=20},n)=>t.jsx("svg",{ref:n,width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("circle",{cx:"12",cy:"12",r:"10"})})),m=o.forwardRef(({size:e=20},n)=>t.jsx("svg",{ref:n,width:e,height:e,viewBox:"0 0 24 24",fill:"red",children:t.jsx("circle",{cx:"12",cy:"12",r:"10"})})),d=o.forwardRef(({size:e=20},n)=>t.jsx("svg",{ref:n,width:e,height:e,viewBox:"0 0 24 24",fill:"blue",children:t.jsx("circle",{cx:"12",cy:"12",r:"10"})})),u=o.forwardRef(({size:e=20},n)=>t.jsx("svg",{ref:n,width:e,height:e,viewBox:"0 0 24 24",fill:"green",children:t.jsx("circle",{cx:"12",cy:"12",r:"10"})})),a={args:{item:{id:1,name:"Sample Item"},isOpen:!0,menu:[{name:"Title",isTitle:()=>!0},{separator:!0},{name:"Option 1",action:()=>alert("Option 1 selected")},{name:"Option 2",disabled:()=>!0,action:()=>alert("Option 2 selected")},{name:"Option 3",disabled:()=>!1,action:()=>alert("Option 3 selected")},{name:"Option 4",action:()=>alert("Option 4 selected")}]}},r={args:{item:{id:1,name:"Sample Item"},isOpen:!0,menu:[{name:"Title",isTitle:()=>!0},{separator:!0},{name:"Option 1",action:()=>alert("Option 1 selected"),icon:p},{name:"Option 2",disabled:()=>!0,action:()=>alert("Option 2 selected"),icon:m},{name:"Option 3",disabled:()=>!1,action:()=>alert("Option 3 selected"),icon:d},{name:"Option 4",action:()=>alert("Option 4 selected"),icon:u}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    item: {
      id: 1,
      name: 'Sample Item'
    },
    isOpen: true,
    menu: [{
      name: 'Title',
      isTitle: () => true
    }, {
      separator: true
    }, {
      name: 'Option 1',
      action: () => alert('Option 1 selected')
    }, {
      name: 'Option 2',
      disabled: () => true,
      action: () => alert('Option 2 selected')
    }, {
      name: 'Option 3',
      disabled: () => false,
      action: () => alert('Option 3 selected')
    }, {
      name: 'Option 4',
      action: () => alert('Option 4 selected')
    }]
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    item: {
      id: 1,
      name: 'Sample Item'
    },
    isOpen: true,
    menu: [{
      name: 'Title',
      isTitle: () => true
    }, {
      separator: true
    }, {
      name: 'Option 1',
      action: () => alert('Option 1 selected'),
      icon: ExampleIconCurrent
    }, {
      name: 'Option 2',
      disabled: () => true,
      action: () => alert('Option 2 selected'),
      icon: ExampleIconRed
    }, {
      name: 'Option 3',
      disabled: () => false,
      action: () => alert('Option 3 selected'),
      icon: ExampleIconBlue
    }, {
      name: 'Option 4',
      action: () => alert('Option 4 selected'),
      icon: ExampleIconGreen
    }]
  }
}`,...r.parameters?.docs?.source}}};const I=["Default","WithIcons"];export{a as Default,r as WithIcons,I as __namedExportsOrder,h as default};
