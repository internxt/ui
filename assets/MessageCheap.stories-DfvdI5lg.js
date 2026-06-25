import{j as i}from"./jsx-runtime-nJEeJLyR.js";import{M as m}from"./MessageCheap-DYuBJEVq.js";import"./iframe-D6-1bMoH.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-DR7w-8mp.js";import"./Checkbox-CvV9LGwS.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,e={id:"1",from:{name:"John Doe",avatar:""},subject:"Meeting tomorrow",createdAt:"10:30 AM",body:"Hi, just a reminder about our meeting tomorrow at 3pm.",read:!1},h={title:"Mail/MessageCheap",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{active:{control:"boolean",description:"Whether the message is currently selected/active"}},args:{onClick:l()},decorators:[c=>i.jsx("div",{className:"w-[400px]",children:i.jsx(c,{})})]},a={args:{email:e,active:!1}},r={args:{email:e,active:!0}},t={args:{email:{...e,read:!0},active:!1}},s={args:{email:{...e,read:!1},active:!1}},o={args:{email:{id:"2",from:{name:"Alexander Maximilian Richardson III",avatar:""},subject:"Important: Project deadline extension request for Q4 deliverables",createdAt:"Yesterday",body:"This is a very long email body that should be truncated when it exceeds the available width of the container.",read:!1},active:!1}},n={args:{email:{...e,from:{name:"Jane Smith",avatar:"https://i.pravatar.cc/150?img=5"}},active:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    email: mockEmail,
    active: false
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    email: mockEmail,
    active: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    email: {
      ...mockEmail,
      read: true
    },
    active: false
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    email: {
      ...mockEmail,
      read: false
    },
    active: false
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    email: {
      id: '2',
      from: {
        name: 'Alexander Maximilian Richardson III',
        avatar: ''
      },
      subject: 'Important: Project deadline extension request for Q4 deliverables',
      createdAt: 'Yesterday',
      body: 'This is a very long email body that should be truncated when it exceeds the available width of the container.',
      read: false
    },
    active: false
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    email: {
      ...mockEmail,
      from: {
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150?img=5'
      }
    },
    active: false
  }
}`,...n.parameters?.docs?.source}}};const b=["Default","Active","Read","Unread","LongContent","WithAvatar"];export{r as Active,a as Default,o as LongContent,t as Read,s as Unread,n as WithAvatar,b as __namedExportsOrder,h as default};
