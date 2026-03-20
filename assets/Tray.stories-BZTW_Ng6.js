import{j as n}from"./jsx-runtime-B2pc4T33.js";import{T as m}from"./TrayList-CpC0DOKg.js";import"./iframe-BC8gr1zk.js";import"./preload-helper-PPVm8Dsz.js";import"./InfiniteScroll-UFEVJ2Wi.js";import"./MessageCheapSkeleton-BkSlYQER.js";import"./MessageCheap-Df2sQn26.js";import"./Avatar-g0X4hdX2.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,e=[{id:"1",from:{name:"John Doe",avatar:""},subject:"Meeting tomorrow",createdAt:"10:30 AM",body:"Hi, just a reminder about our meeting tomorrow at 3pm.",read:!1},{id:"2",from:{name:"Jane Smith",avatar:""},subject:"Project update",createdAt:"9:15 AM",body:"The project is progressing well. Here are the latest updates...",read:!0},{id:"3",from:{name:"Mike Johnson",avatar:""},subject:"Invoice #1234",createdAt:"Yesterday",body:"Please find attached the invoice for last month services.",read:!0},{id:"4",from:{name:"Sarah Wilson",avatar:""},subject:"Welcome to the team!",createdAt:"Yesterday",body:"We are excited to have you on board. Let me know if you need anything.",read:!1},{id:"5",from:{name:"Tech Support",avatar:""},subject:"Your ticket has been resolved",createdAt:"Feb 20",body:"Your support ticket #5678 has been resolved. Please let us know if you have any questions.",read:!0}],M={title:"Mail/Tray List",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{loading:{control:"boolean",description:"Shows skeleton loaders when true"},checked:{control:"boolean",description:"Select all checkbox state"},activeEmail:{control:"text",description:"ID of the currently active email"},hasMoreItems:{control:"boolean",description:"Whether there are more items to load"}},args:{onMailSelected:i(),onLoadMore:i()}},a={args:{mails:e,selectedEmails:[],loading:!1,checked:!1,activeEmail:"",hasMoreItems:!1}},s={args:{mails:e,selectedEmails:[],loading:!1,checked:!1,activeEmail:"2",hasMoreItems:!1}},t={args:{mails:e,selectedEmails:["1","3","5"],loading:!1,checked:!1,activeEmail:"",hasMoreItems:!1}},r={args:{mails:e,selectedEmails:["1","3","5"],loading:!1,checked:!0,activeEmail:"",hasMoreItems:!1}},o={args:{mails:e,selectedEmails:[],loading:!1,checked:!1,activeEmail:"",hasMoreItems:!0}},l={args:{mails:[],selectedEmails:[],loading:!0,checked:!1,activeEmail:"",hasMoreItems:!1}},c={args:{mails:[],selectedEmails:[],loading:!1,checked:!1,activeEmail:"",hasMoreItems:!1,emptyState:n.jsx("div",{className:"flex h-screen justify-center items-center",children:"Empty state"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    mails: mockMails,
    selectedEmails: [],
    loading: false,
    checked: false,
    activeEmail: '',
    hasMoreItems: false
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    mails: mockMails,
    selectedEmails: [],
    loading: false,
    checked: false,
    activeEmail: '2',
    hasMoreItems: false
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    mails: mockMails,
    selectedEmails: ['1', '3', '5'],
    loading: false,
    checked: false,
    activeEmail: '',
    hasMoreItems: false
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    mails: mockMails,
    selectedEmails: ['1', '3', '5'],
    loading: false,
    checked: true,
    activeEmail: '',
    hasMoreItems: false
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    mails: mockMails,
    selectedEmails: [],
    loading: false,
    checked: false,
    activeEmail: '',
    hasMoreItems: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    mails: [],
    selectedEmails: [],
    loading: true,
    checked: false,
    activeEmail: '',
    hasMoreItems: false
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    mails: [],
    selectedEmails: [],
    loading: false,
    checked: false,
    activeEmail: '',
    hasMoreItems: false,
    emptyState: <div className="flex h-screen justify-center items-center">Empty state</div>
  }
}`,...c.parameters?.docs?.source}}};const k=["Default","WithActiveEmail","WithSelectedEmails","AllSelected","WithInfiniteScroll","Loading","Empty"];export{r as AllSelected,a as Default,c as Empty,l as Loading,s as WithActiveEmail,o as WithInfiniteScroll,t as WithSelectedEmails,k as __namedExportsOrder,M as default};
