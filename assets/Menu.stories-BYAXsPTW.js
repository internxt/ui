import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{R as o}from"./index-DJO9vBfz.js";import{M as u}from"./Menu-BFtBU9I-.js";const{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,x=(e,n)=>{const[,d]=O();return e({...n,args:{...n.allArgs,handleMenuClose:()=>d({...n.args,isOpen:!0})}})},j={title:"Components/Menu",component:u,parameters:{layout:"centered"},decorators:[x],tags:["autodocs"],argTypes:{handleMenuClose:{action:"closed"},genericEnterKey:{action:"genericEnterKey"}}},g=o.forwardRef(({size:e=20},n)=>t.jsx("svg",{ref:n,width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("circle",{cx:"12",cy:"12",r:"10"})})),f=o.forwardRef(({size:e=20},n)=>t.jsx("svg",{ref:n,width:e,height:e,viewBox:"0 0 24 24",fill:"red",children:t.jsx("circle",{cx:"12",cy:"12",r:"10"})})),h=o.forwardRef(({size:e=20},n)=>t.jsx("svg",{ref:n,width:e,height:e,viewBox:"0 0 24 24",fill:"blue",children:t.jsx("circle",{cx:"12",cy:"12",r:"10"})})),I=o.forwardRef(({size:e=20},n)=>t.jsx("svg",{ref:n,width:e,height:e,viewBox:"0 0 24 24",fill:"green",children:t.jsx("circle",{cx:"12",cy:"12",r:"10"})})),a={args:{item:{id:1,name:"Sample Item"},isOpen:!0,menu:[{name:"Title",isTitle:()=>!0},{separator:!0},{name:"Option 1",action:()=>alert("Option 1 selected")},{name:"Option 2",disabled:()=>!0,action:()=>alert("Option 2 selected")},{name:"Option 3",disabled:()=>!1,action:()=>alert("Option 3 selected")},{name:"Option 4",action:()=>alert("Option 4 selected")}]}},r={args:{item:{id:1,name:"Sample Item"},isOpen:!0,menu:[{name:"Title",isTitle:()=>!0},{separator:!0},{name:"Option 1",action:()=>alert("Option 1 selected"),icon:g},{name:"Option 2",disabled:()=>!0,action:()=>alert("Option 2 selected"),icon:f},{name:"Option 3",disabled:()=>!1,action:()=>alert("Option 3 selected"),icon:h},{name:"Option 4",action:()=>alert("Option 4 selected"),icon:I}]}};var i,s,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const T=["Default","WithIcons"];export{a as Default,r as WithIcons,T as __namedExportsOrder,j as default};
