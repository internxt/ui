import{U as s}from"./UserCheap-D_IeAxNY.js";import"./jsx-runtime-B2pc4T33.js";import"./iframe-BC8gr1zk.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-g0X4hdX2.js";const i={title:"Mail/User Cheap",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{fullName:{control:"text",description:"Full name of the user"},email:{control:"text",description:"Email address of the user"},avatar:{control:"text",description:"URL of the user avatar image"}}},a={args:{fullName:"John Doe",email:"john.doe@example.com"}},e={args:{fullName:"Jane Smith",email:"jane.smith@example.com",avatar:"https://i.pravatar.cc/150?img=5"}},r={args:{fullName:"Alexander Maximilian Richardson III",email:"alexander.richardson@company.com"}},o={args:{fullName:"John Doe",email:"john.doe.very.long.email.address@subdomain.company.com"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    fullName: 'John Doe',
    email: 'john.doe@example.com'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatar: 'https://i.pravatar.cc/150?img=5'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    fullName: 'Alexander Maximilian Richardson III',
    email: 'alexander.richardson@company.com'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    fullName: 'John Doe',
    email: 'john.doe.very.long.email.address@subdomain.company.com'
  }
}`,...o.parameters?.docs?.source}}};const p=["Default","WithAvatar","LongName","LongEmail"];export{a as Default,o as LongEmail,r as LongName,e as WithAvatar,p as __namedExportsOrder,i as default};
