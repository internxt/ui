import{j as m}from"./jsx-runtime-DEdD30eg.js";import{D as p}from"./Dropdown-CiQs3i6E.js";import{D as d}from"./DotsThree-CDi4_-Er.js";import"./index-RYns6xqu.js";import"./Menu-CuyP6RQK.js";import"./IconBase-C0B5zwrg.js";const h={title:"Components/Dropdown",component:p,parameters:{layout:"centered"},tags:["autodocs"]},c={children:m.jsx(d,{size:24,className:"text-gray-800 dark:text-white",weight:"bold"}),classMenuItems:"mt-1 w-max rounded-md border border-gray-10 bg-surface dark:bg-gray-5 py-1.5",options:[{text:"Option 1",onClick:()=>alert("Option 1 selected")},{text:"Option 2",onClick:()=>alert("Option 2 selected")}],menuItems:["Item 1","Item 2"],dropdownActionsContext:[{name:"Action 1",action:()=>alert("Launched action 1")},{name:"Action 2",action:()=>alert("Launched action 2")},{separator:!0},{name:"Action 3",action:()=>alert("Launched action 3")}],item:"Item",openDirection:"left"},e={args:{...c,openDirection:"right"}},t={args:{...c,openDirection:"left"}};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    openDirection: 'right'
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    openDirection: 'left'
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const D=["RightAlign","LeftAlign"];export{t as LeftAlign,e as RightAlign,D as __namedExportsOrder,h as default};
