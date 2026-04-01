import{j as t}from"./jsx-runtime-DQ7wxIhe.js";import{G as s}from"./Grid-CqXznJpJ.js";import"./iframe-B0e6c2EL.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/Grid",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{className:{control:"text",description:"Custom CSS classes for the Grid container"}}},e={render:a=>t.jsx(s,{...a,children:Array.from({length:12}).map((o,r)=>t.jsxs("div",{className:"flex items-center justify-center rounded-lg bg-gray-10 p-6 text-sm font-medium text-gray-80 shadow-sm",children:["Grid Item ",r+1]},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <Grid {...args}>
      {Array.from({
      length: 12
    }).map((_, index) => <div key={index} className="flex items-center justify-center rounded-lg bg-gray-10 p-6 text-sm font-medium text-gray-80 shadow-sm">
          Grid Item {index + 1}
        </div>)}
    </Grid>
}`,...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,c as default};
