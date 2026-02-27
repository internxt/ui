import{j as t}from"./jsx-runtime-C89ddIqy.js";import{I as l}from"./InfiniteScroll-B1HmUEgi.js";import{r as p}from"./iframe-CeiX8cuE.js";import"./preload-helper-PPVm8Dsz.js";const I={title:"Components/InfiniteScroll",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{handleNextPage:{action:"handleNextPage"},hasMoreItems:{control:"boolean"},loader:{control:"text"},scrollableTarget:{control:"text"}}},g=new Array(10).fill(0).map((e,s)=>t.jsx("div",{style:{padding:"8px",borderBottom:"1px solid #ccc"},children:"Loading item..."},s)),c=({hasMoreItems:e})=>{const[s,d]=p.useState(Array.from({length:10},(r,n)=>`Item loaded ${n+1}`)),i=()=>{setTimeout(()=>{d(r=>[...r,...Array.from({length:10},(n,m)=>`Item loaded ${r.length+m+1}`)])},1e3)};return t.jsx("div",{style:{height:"300px",overflowY:"auto",border:"1px solid #ccc",padding:"8px"},children:t.jsx(l,{handleNextPage:i,hasMoreItems:e,loader:g,children:s.map(r=>t.jsx("div",{style:{padding:"8px",borderBottom:"1px solid #ccc"},children:r},r))})})},o={args:{hasMoreItems:!0},render:e=>t.jsx(c,{...e})},a={args:{hasMoreItems:!1},render:e=>t.jsx(c,{...e})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    hasMoreItems: true
  },
  render: (args: any) => <InfiniteScrollWrapper {...args} />
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    hasMoreItems: false
  },
  render: (args: any) => <InfiniteScrollWrapper {...args} />
}`,...a.parameters?.docs?.source}}};const y=["Default","NoMoreItems"];export{o as Default,a as NoMoreItems,y as __namedExportsOrder,I as default};
