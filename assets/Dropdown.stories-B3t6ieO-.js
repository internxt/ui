import{j as r}from"./jsx-runtime-CiAlIWFd.js";import{D as n}from"./Dropdown-hSRZNsRA.js";import{n as a}from"./DotsThree.es-BRRjtXeP.js";import"./iframe-B8JFBOZm.js";import"./preload-helper-PPVm8Dsz.js";import"./Menu-C0fuJQ44.js";import"./IconBase.es-B0sfiftb.js";const g={title:"Navigation/Dropdown",component:n,parameters:{layout:"centered"},tags:["autodocs"]},o={children:r.jsx(a,{size:24,className:"text-gray-800 dark:text-white",weight:"bold"}),classMenuItems:"mt-1 w-max rounded-md border border-gray-10 bg-surface dark:bg-gray-5 py-1.5",options:[{text:"Option 1",onClick:()=>alert("Option 1 selected")},{text:"Option 2",onClick:()=>alert("Option 2 selected")}],menuItems:[r.jsx("div",{onClick:()=>alert("Item 1 selected"),children:"Item 1"}),r.jsx("div",{onClick:()=>alert("Item 2 selected"),children:"Item 2"})],dropdownActionsContext:[{name:"Action 1",action:()=>{alert("Launched action 1")}},{name:"Action 2",action:()=>alert("Launched action 2")},{separator:!0},{name:"Action 3",action:()=>alert("Launched action 3")}],openDirection:"left"},e={args:{...o,openDirection:"right"}},t={args:{...o,openDirection:"left"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    openDirection: 'right'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    openDirection: 'left'
  }
}`,...t.parameters?.docs?.source}}};const u=["RightAlign","LeftAlign"];export{t as LeftAlign,e as RightAlign,u as __namedExportsOrder,g as default};
