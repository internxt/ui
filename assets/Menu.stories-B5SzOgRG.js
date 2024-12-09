import{j as t}from"./jsx-runtime-DEdD30eg.js";import{R as r}from"./index-RYns6xqu.js";import{M as u}from"./Menu-Bvvh4aMA.js";const{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,x=(e,n)=>{const[,p]=O();return e({...n,args:{...n.allArgs,handleMenuClose:()=>p({...n.args,isOpen:!1})}})},j={title:"Components/Menu",component:u,parameters:{layout:"centered"},decorators:[x],tags:["autodocs"],argTypes:{handleMenuClose:{action:"closed"},genericEnterKey:{action:"genericEnterKey"}}},g=r.forwardRef(({size:e=20},n)=>t.jsx("svg",{ref:n,width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("circle",{cx:"12",cy:"12",r:"10"})})),f=r.forwardRef(({size:e=20},n)=>t.jsx("svg",{ref:n,width:e,height:e,viewBox:"0 0 24 24",fill:"red",children:t.jsx("circle",{cx:"12",cy:"12",r:"10"})})),h=r.forwardRef(({size:e=20},n)=>t.jsx("svg",{ref:n,width:e,height:e,viewBox:"0 0 24 24",fill:"blue",children:t.jsx("circle",{cx:"12",cy:"12",r:"10"})})),I=r.forwardRef(({size:e=20},n)=>t.jsx("svg",{ref:n,width:e,height:e,viewBox:"0 0 24 24",fill:"green",children:t.jsx("circle",{cx:"12",cy:"12",r:"10"})})),a={args:{item:{id:1,name:"Sample Item"},menu:[{name:"Title",isTitle:()=>!0},{separator:!0},{name:"Option 1",action:()=>alert("Option 1 selected")},{name:"Option 2",disabled:()=>!0,action:()=>alert("Option 2 selected")},{name:"Option 3",disabled:()=>!1,action:()=>alert("Option 3 selected")},{name:"Option 4",action:()=>alert("Option 4 selected")}]}},o={args:{item:{id:1,name:"Sample Item"},menu:[{name:"Title",isTitle:()=>!0},{separator:!0},{name:"Option 1",action:()=>alert("Option 1 selected"),icon:g},{name:"Option 2",disabled:()=>!0,action:()=>alert("Option 2 selected"),icon:f},{name:"Option 3",disabled:()=>!1,action:()=>alert("Option 3 selected"),icon:h},{name:"Option 4",action:()=>alert("Option 4 selected"),icon:I}]}};var i,s,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    item: {
      id: 1,
      name: 'Sample Item'
    },
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
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    item: {
      id: 1,
      name: 'Sample Item'
    },
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const T=["Default","WithIcons"];export{a as Default,o as WithIcons,T as __namedExportsOrder,j as default};
