import{j as e}from"./jsx-runtime-nJEeJLyR.js";import{r as h}from"./CloudWarning.es-nIgirw6D.js";import{e as b}from"./X.es-NQt5Xagl.js";import{B as j}from"./Button-jOTbfW4C.js";import{S as w}from"./Skeleton-Cuclasla.js";import"./iframe-D6-1bMoH.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-BuxlsOO9.js";import"./Loader-BZmbh6xM.js";const i=({title:o,description:l,usage:c,limit:d,percentage:p,upgradeLabel:u,closeButtonLabel:g,onUpgradeClick:m,onCloseButtonClick:f,barClassName:x="bg-yellow-60",isLoading:y=!1})=>e.jsxs("div",{className:"flex flex-col w-full px-4 py-3 rounded-xl bg-alert border-alert-dark border h-min",children:[e.jsxs("div",{className:"flex flex-col w-full gap-1",children:[e.jsxs("div",{className:"flex flex-row justify-between items-center",children:[e.jsxs("span",{className:"flex flex-row items-center gap-2",children:[e.jsx(h,{weight:"fill",className:"size-5 text-yellow-60"}),e.jsx("p",{className:"text-sm font-semibold text-gray-80",children:o})]}),e.jsx("button",{type:"button","aria-label":g,onClick:f,className:"flex items-center justify-center",children:e.jsx(b,{className:"size-5 text-gray-53 cursor-pointer"})})]}),e.jsx("div",{className:"text-xs font-medium text-gray-52",children:l})]}),e.jsxs("div",{className:"flex flex-row items-center gap-6 h-10",children:[e.jsxs("div",{className:"flex flex-1 flex-col gap-1",children:[e.jsx("div",{className:"flex w-full h-1.5 bg-gray-10 rounded-full",children:e.jsx("div",{className:`${x} h-full rounded-full`,style:{width:`${p}%`}})}),y?e.jsx(w,{}):e.jsxs("span",{className:"flex flex-row gap-1",children:[e.jsx("p",{className:"text-gray-60 text-xs",children:c}),e.jsx("p",{className:"text-gray-60 text-xs",children:"/"}),e.jsx("p",{className:"text-gray-60 text-xs",children:d})]})]}),e.jsx(j,{variant:"secondary",size:"medium",onClick:m,children:u})]})]});i.__docgenInfo={description:"",methods:[],displayName:"UsageWarningBanner",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"ReactNode"},description:""},usage:{required:!0,tsType:{name:"string"},description:""},limit:{required:!0,tsType:{name:"string"},description:""},percentage:{required:!0,tsType:{name:"number"},description:""},upgradeLabel:{required:!0,tsType:{name:"string"},description:""},closeButtonLabel:{required:!0,tsType:{name:"string"},description:""},onUpgradeClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},barClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'bg-yellow-60'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{fn:a}=__STORYBOOK_MODULE_TEST__,S={title:"Feedback/Banner",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{percentage:{control:{type:"range",min:0,max:100,step:1}},isLoading:{control:{type:"boolean"}}},args:{onUpgradeClick:a(),onCloseButtonClick:a(),closeButtonLabel:"Close"}},s={args:{usage:"600MB",limit:"1GB",percentage:60,barClassName:"bg-yellow-60",title:"Get more space for your files",description:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Unlock additional storage with an exclusive ",e.jsx("strong",{children:"85% discount"})," on your upgrade"]}),e.jsx("p",{children:"Access advanced features like file version history, Rclone, NAS support, premium support, and more"})]}),upgradeLabel:"Get offer",isLoading:!1}},r={args:{...s.args,usage:"800MB",limit:"1GB",percentage:80,barClassName:"bg-orange-60",title:"Your storage is filling up",description:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Upgrade today with an exclusive ",e.jsx("strong",{children:"85% discount"})," and keep uploading without interruptions"]}),e.jsx("p",{children:"Get more storage plus advanced features like file version history, NAS support, Rclone integration, and premium support"})]})}},n={args:{...s.args,usage:"950MB",limit:"1GB",percentage:95,barClassName:"bg-danger",title:"Your storage is almost full",description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"You may soon be unable to upload new files"}),e.jsxs("p",{children:["Upgrade now with an exclusive ",e.jsx("strong",{children:"85% discount"})," to continue storing and syncing your files without limits"]})]})}},t={args:{...s.args,isLoading:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    usage: '600MB',
    limit: '1GB',
    percentage: 60,
    barClassName: 'bg-yellow-60',
    title: 'Get more space for your files',
    description: <>
        <p>
          Unlock additional storage with an exclusive <strong>85% discount</strong> on your upgrade
        </p>
        <p>Access advanced features like file version history, Rclone, NAS support, premium support, and more</p>
      </>,
    upgradeLabel: 'Get offer',
    isLoading: false
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    usage: '800MB',
    limit: '1GB',
    percentage: 80,
    barClassName: 'bg-orange-60',
    title: 'Your storage is filling up',
    description: <>
        <p>
          Upgrade today with an exclusive <strong>85% discount</strong> and keep uploading without interruptions
        </p>
        <p>
          Get more storage plus advanced features like file version history, NAS support, Rclone integration, and
          premium support
        </p>
      </>
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    usage: '950MB',
    limit: '1GB',
    percentage: 95,
    barClassName: 'bg-danger',
    title: 'Your storage is almost full',
    description: <>
        <p>You may soon be unable to upload new files</p>
        <p>
          Upgrade now with an exclusive <strong>85% discount</strong> to continue storing and syncing your files
          without limits
        </p>
      </>
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isLoading: true
  }
}`,...t.parameters?.docs?.source}}};const q=["Default","LowUsage","AlmostFull","Loading"];export{n as AlmostFull,s as Default,t as Loading,r as LowUsage,q as __namedExportsOrder,S as default};
