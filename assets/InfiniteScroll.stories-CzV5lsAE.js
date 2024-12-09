import{j as t}from"./jsx-runtime-DEdD30eg.js";import{I as g}from"./InfiniteScroll-Bckbvu9a.js";import{r as I}from"./index-RYns6xqu.js";const b={title:"Components/InfiniteScroll",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{handleNextPage:{action:"handleNextPage"},hasMoreItems:{control:"boolean"},loader:{control:"text"},scrollableTarget:{control:"text"}}},j=new Array(10).fill(0).map((e,a)=>t.jsx("div",{style:{padding:"8px",borderBottom:"1px solid #ccc"},children:"Loading item..."},a)),x=({hasMoreItems:e})=>{const[a,u]=I.useState(Array.from({length:10},(r,n)=>`Item loaded ${n+1}`)),f=()=>{setTimeout(()=>{u(r=>[...r,...Array.from({length:10},(n,h)=>`Item loaded ${r.length+h+1}`)])},1e3)};return t.jsx("div",{style:{height:"300px",overflowY:"auto",border:"1px solid #ccc",padding:"8px"},children:t.jsx(g,{handleNextPage:f,hasMoreItems:e,loader:j,children:a.map(r=>t.jsx("div",{style:{padding:"8px",borderBottom:"1px solid #ccc"},children:r},r))})})},o={args:{hasMoreItems:!0},render:e=>t.jsx(x,{...e})},s={args:{hasMoreItems:!1},render:e=>t.jsx(x,{...e})};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    hasMoreItems: true
  },
  render: args => <InfiniteScrollWrapper {...args} />
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    hasMoreItems: false
  },
  render: args => <InfiniteScrollWrapper {...args} />
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const N=["Default","NoMoreItems"];export{o as Default,s as NoMoreItems,N as __namedExportsOrder,b as default};
