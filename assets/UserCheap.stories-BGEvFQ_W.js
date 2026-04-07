import{j as e}from"./jsx-runtime-CccaB59u.js";import{A as l}from"./Avatar-B3NYUDVm.js";import"./iframe-CAAsQIpV.js";import"./preload-helper-PPVm8Dsz.js";const n=({fullName:t,email:m,avatar:i})=>e.jsx("div",{className:"flex flex-row gap-2 border max-w-64 bg-surface w-full border-gray-10 shadow-subtle rounded-lg",children:e.jsxs("div",{className:"flex flex-row w-full gap-2 p-4",children:[e.jsx(l,{src:i,fullName:t,diameter:40}),e.jsxs("div",{className:"flex flex-col min-w-0",children:[e.jsx("p",{className:"font-medium text-gray-100 truncate",children:t}),e.jsx("p",{className:"text-sm text-gray-50 truncate",children:m})]})]})});n.__docgenInfo={description:`A cheap user component to render a user's information.

@param {UserCheapProps} props - The props object.
@param {string} props.fullName - The user's full name.
@param {string} props.email - The user's email address.
@param {string} [props.avatar] - The user's avatar URL. If not provided, the avatar will be generated from the user's name.`,methods:[],displayName:"UserCheap",props:{fullName:{required:!0,tsType:{name:"string"},description:""},email:{required:!0,tsType:{name:"string"},description:""},avatar:{required:!1,tsType:{name:"string"},description:""}}};const h={title:"Mail/User Cheap",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{fullName:{control:"text",description:"Full name of the user"},email:{control:"text",description:"Email address of the user"},avatar:{control:"text",description:"URL of the user avatar image"}}},a={args:{fullName:"John Doe",email:"john.doe@example.com"}},r={args:{fullName:"Jane Smith",email:"jane.smith@example.com",avatar:"https://i.pravatar.cc/150?img=5"}},s={args:{fullName:"Alexander Maximilian Richardson III",email:"alexander.richardson@company.com"}},o={args:{fullName:"John Doe",email:"john.doe.very.long.email.address@subdomain.company.com"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    fullName: 'John Doe',
    email: 'john.doe@example.com'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatar: 'https://i.pravatar.cc/150?img=5'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fullName: 'Alexander Maximilian Richardson III',
    email: 'alexander.richardson@company.com'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    fullName: 'John Doe',
    email: 'john.doe.very.long.email.address@subdomain.company.com'
  }
}`,...o.parameters?.docs?.source}}};const g=["Default","WithAvatar","LongName","LongEmail"];export{a as Default,o as LongEmail,s as LongName,r as WithAvatar,g as __namedExportsOrder,h as default};
