import{j as e}from"./jsx-runtime-CccaB59u.js";import{I as T}from"./InfiniteScroll-C17qAQ3D.js";import{M as p}from"./MessageCheapSkeleton-B2BcOG2H.js";import{M as j}from"./MessageCheap-D230WlU0.js";import"./iframe-CAAsQIpV.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-B3NYUDVm.js";const f=({mails:m,selectedEmails:g=[],loading:h,checked:y,activeEmail:v,hasMoreItems:E=!1,emptyState:b,onMailSelected:k=()=>{},onLoadMore:M=()=>{}})=>{const x=e.jsx("div",{className:"flex flex-col",children:new Array(3).fill(0).map((a,d)=>e.jsx(p,{},d))});return e.jsx("div",{className:"flex flex-col w-[400px] min-w-[200px] max-w-[400px] h-full",children:e.jsx("div",{id:"tray-scroll-container",className:"overflow-y-auto w-full h-full min-h-0",children:h?e.jsx(e.Fragment,{children:new Array(8).fill(0).map((a,d)=>e.jsx("div",{className:"flex flex-col gap-2",children:e.jsx(p,{})},d))}):e.jsx(e.Fragment,{children:m.length===0?e.jsx(e.Fragment,{children:b}):e.jsx(T,{handleNextPage:M,hasMoreItems:E,loader:x,scrollableTarget:"tray-scroll-container",children:m.map(a=>e.jsx("div",{className:"flex items-center w-full flex-col",children:e.jsx(j,{email:a,active:v===a.id,selected:y||g.includes(a.id),onClick:k})},a.id))})})})})};f.__docgenInfo={description:`@param {TrayListProps} TrayListProps - Props for the TrayList component
@prop {Array} TrayListProps.mails - An array of email objects

@prop {string[]} TrayListProps.selectedEmails - An array of selected email IDs

@prop {boolean} TrayListProps.loading - A boolean indicating loading state

@prop {boolean} TrayListProps.checked - A boolean indicating whether all emails are checked

@prop {string} TrayListProps.activeEmail - The ID of the currently active email

@prop {boolean} TrayListProps.hasMoreItems - A boolean indicating whether there are more items to load

@prop {ReactNode} TrayListProps.emptyState - A JSX element to display when there are no emails

@prop {(id: string) => void} TrayListProps.onMailSelected - A function to handle email selection

@prop {() => void} TrayListProps.onLoadMore - A function to load more emails

@returns {JSX.Element} The rendered TrayList component`,methods:[],displayName:"TrayList",props:{mails:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  from: {
    name: string;
    avatar: string;
  };
  subject: string;
  createdAt: string;
  body: string;
  read: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"from",value:{name:"signature",type:"object",raw:`{
  name: string;
  avatar: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"avatar",value:{name:"string",required:!0}}]},required:!0}},{key:"subject",value:{name:"string",required:!0}},{key:"createdAt",value:{name:"string",required:!0}},{key:"body",value:{name:"string",required:!0}},{key:"read",value:{name:"boolean",required:!0}}]}}],raw:`{
  id: string;
  from: {
    name: string;
    avatar: string;
  };
  subject: string;
  createdAt: string;
  body: string;
  read: boolean;
}[]`},description:""},selectedEmails:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},loading:{required:!0,tsType:{name:"boolean"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},activeEmail:{required:!1,tsType:{name:"string"},description:""},hasMoreItems:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},emptyState:{required:!1,tsType:{name:"ReactNode"},description:""},onMailSelected:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, isRead?: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"boolean"},name:"isRead"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onLoadMore:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const{fn:u}=__STORYBOOK_MODULE_TEST__,r=[{id:"1",from:{name:"John Doe",avatar:""},subject:"Meeting tomorrow",createdAt:"10:30 AM",body:"Hi, just a reminder about our meeting tomorrow at 3pm.",read:!1},{id:"2",from:{name:"Jane Smith",avatar:""},subject:"Project update",createdAt:"9:15 AM",body:"The project is progressing well. Here are the latest updates...",read:!0},{id:"3",from:{name:"Mike Johnson",avatar:""},subject:"Invoice #1234",createdAt:"Yesterday",body:"Please find attached the invoice for last month services.",read:!0},{id:"4",from:{name:"Sarah Wilson",avatar:""},subject:"Welcome to the team!",createdAt:"Yesterday",body:"We are excited to have you on board. Let me know if you need anything.",read:!1},{id:"5",from:{name:"Tech Support",avatar:""},subject:"Your ticket has been resolved",createdAt:"Feb 20",body:"Your support ticket #5678 has been resolved. Please let us know if you have any questions.",read:!0}],_={title:"Mail/Tray List",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{loading:{control:"boolean",description:"Shows skeleton loaders when true"},checked:{control:"boolean",description:"Select all checkbox state"},activeEmail:{control:"text",description:"ID of the currently active email"},hasMoreItems:{control:"boolean",description:"Whether there are more items to load"}},args:{onMailSelected:u(),onLoadMore:u()}},s={args:{mails:r,selectedEmails:[],loading:!1,checked:!1,activeEmail:"",hasMoreItems:!1}},t={args:{mails:r,selectedEmails:[],loading:!1,checked:!1,activeEmail:"2",hasMoreItems:!1}},n={args:{mails:r,selectedEmails:["1","3","5"],loading:!1,checked:!1,activeEmail:"",hasMoreItems:!1}},i={args:{mails:r,selectedEmails:["1","3","5"],loading:!1,checked:!0,activeEmail:"",hasMoreItems:!1}},o={args:{mails:r,selectedEmails:[],loading:!1,checked:!1,activeEmail:"",hasMoreItems:!0}},l={args:{mails:[],selectedEmails:[],loading:!0,checked:!1,activeEmail:"",hasMoreItems:!1}},c={args:{mails:[],selectedEmails:[],loading:!1,checked:!1,activeEmail:"",hasMoreItems:!1,emptyState:e.jsx("div",{className:"flex h-screen justify-center items-center",children:"Empty state"})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    mails: mockMails,
    selectedEmails: [],
    loading: false,
    checked: false,
    activeEmail: '',
    hasMoreItems: false
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    mails: mockMails,
    selectedEmails: [],
    loading: false,
    checked: false,
    activeEmail: '2',
    hasMoreItems: false
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    mails: mockMails,
    selectedEmails: ['1', '3', '5'],
    loading: false,
    checked: false,
    activeEmail: '',
    hasMoreItems: false
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    mails: mockMails,
    selectedEmails: ['1', '3', '5'],
    loading: false,
    checked: true,
    activeEmail: '',
    hasMoreItems: false
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const N=["Default","WithActiveEmail","WithSelectedEmails","AllSelected","WithInfiniteScroll","Loading","Empty"];export{i as AllSelected,s as Default,c as Empty,l as Loading,t as WithActiveEmail,o as WithInfiniteScroll,n as WithSelectedEmails,N as __namedExportsOrder,_ as default};
