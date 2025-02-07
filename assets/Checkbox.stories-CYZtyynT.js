import{C as y}from"./Checkbox-lZn49SZJ.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,R=(I,n)=>{const[{checked:O},x]=P();return I({...n,args:{...n.allArgs,onClick:()=>x({...n.args,checked:!O})}})},L={title:"Components/Checkbox",component:y,parameters:{layout:"centered"},decorators:[R],tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{checked:!1}},r={args:{checked:!1,disabled:!0}},s={args:{checked:!0}},a={args:{checked:!0,disabled:!0}},c={args:{checked:!0,indeterminate:!0}},t={args:{indeterminate:!0,disabled:!0}};var o,d,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,u,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,g,k;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var h,b,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var _,D,S;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    checked: true,
    indeterminate: true
  }
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var f,A,E;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    disabled: true
  }
}`,...(E=(A=t.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const M=["Enabled","Disabled","Checked","CheckedAndDisabled","Indeterminate","IndeterminateDisabled"];export{s as Checked,a as CheckedAndDisabled,r as Disabled,e as Enabled,c as Indeterminate,t as IndeterminateDisabled,M as __namedExportsOrder,L as default};
