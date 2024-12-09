import{j as o}from"./jsx-runtime-DEdD30eg.js";import{T as e}from"./Tooltip-CSJfASjJ.js";import{B as H}from"./Button-UUIrlFY4.js";import"./index-RYns6xqu.js";import"./Loader-BkvXvL7i.js";const A={title:"Components/Tooltip",component:e,parameters:{layout:"centered"},args:{title:"Tooltip Title",subtitle:"Optional subtitle",popsFrom:"top",arrow:!0,delayInMs:300},tags:["autodocs"]},s=o.jsx(H,{children:"Hover me"}),t={args:{arrow:!1},render:r=>o.jsx(e,{...r,children:s})},a={render:r=>o.jsx(e,{...r,children:s})},p={args:{popsFrom:"left"},render:r=>o.jsx(e,{...r,children:s})},n={args:{popsFrom:"right"},render:r=>o.jsx(e,{...r,children:s})},m={args:{popsFrom:"bottom"},render:r=>o.jsx(e,{...r,children:s})};var c,i,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    arrow: false
  },
  render: args => <Tooltip {...args}>{buttonHover}</Tooltip>
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,u,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>{buttonHover}</Tooltip>
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var T,F,h;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    popsFrom: 'left'
  },
  render: args => <Tooltip {...args}>{buttonHover}</Tooltip>
}`,...(h=(F=p.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var b,f,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    popsFrom: 'right'
  },
  render: args => <Tooltip {...args}>{buttonHover}</Tooltip>
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var j,P,v;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    popsFrom: 'bottom'
  },
  render: args => <Tooltip {...args}>{buttonHover}</Tooltip>
}`,...(v=(P=m.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};const E=["WithoutArrow","PopsFromTop","PopsFromLeft","PopsFromRight","PopsFromBottom"];export{m as PopsFromBottom,p as PopsFromLeft,n as PopsFromRight,a as PopsFromTop,t as WithoutArrow,E as __namedExportsOrder,A as default};
