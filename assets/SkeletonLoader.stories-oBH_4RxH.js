import{j as e}from"./jsx-runtime-o9qq2xiW.js";import{S as o}from"./SkeletonLoader-DCUECBVL.js";import"./iframe-C1-GEPpH.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/SkeletonLoader",component:o,parameters:{layout:"centered"},tags:["autodocs"]},t=new Array(5).fill(0).map((a,r)=>({skeletonItem:[e.jsxs("div",{className:"mr-3 flex w-full flex-row items-center space-x-4",children:[e.jsx("div",{className:"h-8 w-8 rounded-md bg-gray-5"}),e.jsx("div",{className:"h-4 w-full rounded bg-gray-5"})]},`skin-skeleton-1-${r}`),e.jsx("div",{className:"h-4 w-64 rounded bg-gray-5"},`skin-skeleton-2-${r}`),e.jsx("div",{className:"ml-3 h-4 w-24 rounded bg-gray-5"},`skin-skeleton-3-${r}`)],columns:["flex grow items-center min-w-driveNameHeader","w-date","w-size"]})),s={args:{skeleton:t},render:a=>e.jsx(o,{...a})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    skeleton: skeletonData
  },
  render: (args: any) => <SkeletonLoader {...args} />
}`,...s.parameters?.docs?.source}}};const i=["ListLayout"];export{s as ListLayout,i as __namedExportsOrder,c as default};
