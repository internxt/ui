import{I as P}from"./Input-CC9g1h6A.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import"./IconBase-C0B5zwrg.js";const{useArgs:T}=__STORYBOOK_MODULE_PREVIEW_API__,I=(w,t)=>{const[,x]=T();return w({...t,args:{...t.allArgs,onChange:z=>x({...t.args,value:z.target.value})}})},h={title:"Components/Input",component:P,parameters:{layout:"centered"},decorators:[I],tags:["autodocs"],argTypes:{onChange:{action:"changed"}}},e={args:{type:"text",size:"lg"}},s={args:{type:"text",size:"md"}},r={args:{type:"password",size:"lg"}},a={args:{type:"password",size:"md"}};var o,n,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'text',
    size: 'lg'
  }
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'text',
    size: 'md'
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,i,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'password',
    size: 'lg'
  }
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var l,y,_;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'password',
    size: 'md'
  }
}`,...(_=(y=a.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const A=["TextLarge","TextMedium","PasswordLarge","PasswordMedium"];export{r as PasswordLarge,a as PasswordMedium,e as TextLarge,s as TextMedium,A as __namedExportsOrder,h as default};
