import{j as o}from"./jsx-runtime-C89ddIqy.js";import{T as e}from"./Tooltip-BvVdSqN6.js";import{B as i}from"./Button-CBG_LY9U.js";import"./iframe-CeiX8cuE.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-slauWO2S.js";const F={title:"Components/Tooltip",component:e,parameters:{layout:"centered"},args:{title:"Tooltip Title",subtitle:"Optional subtitle",popsFrom:"top",arrow:!0,delayInMs:300},tags:["autodocs"]},s=o.jsx(i,{children:"Hover me"}),t={args:{arrow:!1},render:r=>o.jsx(e,{...r,children:s})},a={render:r=>o.jsx(e,{...r,children:s})},p={args:{popsFrom:"left"},render:r=>o.jsx(e,{...r,children:s})},n={args:{popsFrom:"right"},render:r=>o.jsx(e,{...r,children:s})},m={args:{popsFrom:"bottom"},render:r=>o.jsx(e,{...r,children:s})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    arrow: false
  },
  render: args => <Tooltip {...args}>{buttonHover}</Tooltip>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>{buttonHover}</Tooltip>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    popsFrom: 'left'
  },
  render: args => <Tooltip {...args}>{buttonHover}</Tooltip>
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    popsFrom: 'right'
  },
  render: args => <Tooltip {...args}>{buttonHover}</Tooltip>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    popsFrom: 'bottom'
  },
  render: args => <Tooltip {...args}>{buttonHover}</Tooltip>
}`,...m.parameters?.docs?.source}}};const h=["WithoutArrow","PopsFromTop","PopsFromLeft","PopsFromRight","PopsFromBottom"];export{m as PopsFromBottom,p as PopsFromLeft,n as PopsFromRight,a as PopsFromTop,t as WithoutArrow,h as __namedExportsOrder,F as default};
