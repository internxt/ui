import{j as a}from"./jsx-runtime-Bgd51N7L.js";import{r as i}from"./CloudWarning.es-BtrRBa--.js";import{a as c}from"./Sidenav-DSi1mjIA.js";import"./iframe-BOtqV5zu.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-B7ATTMgr.js";import"./Warning.es-DIIjL2PG.js";import"./Popover-nEgJixAn.js";import"./Skeleton-Dirk8IVt.js";const U={title:"Navigation/SidenavStorage",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{percentage:{control:{type:"range",min:0,max:100,step:1}},onUpgradeClick:{action:"upgradeClick"}},decorators:[g=>a.jsx("div",{style:{width:280},children:a.jsx(g,{})})]},e={args:{usage:"2.8 GB",limit:"4 GB",percentage:70,upgradeLabel:"Upgrade",isLoading:!1,onUpgradeClick:()=>console.log("Upgrade clicked")}},r={args:{...e.args,isLoading:!0}},s={args:{...e.args,usage:"9.5 GB",limit:"10 GB",percentage:95,upgradeLabel:"Upgrade now",barClassName:"bg-danger",containerClassName:"bg-alert rounded-xl border border-alert-dark gap-2",advertisement:a.jsxs("div",{className:"flex flex-row gap-0.5 items-center",children:[a.jsx(i,{weight:"fill",className:"size-5 inline-block text-yellow-60 mr-1"}),a.jsx("p",{className:"text-sm font-semibold",children:"Buy space 85% off"})]})}},t={args:{...e.args,usage:"500 MB",limit:"4 GB",percentage:12}},o={args:{...e.args,usage:"10 GB",limit:"10 GB",percentage:100}},n={args:{...e.args,upgradeLabel:void 0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    usage: '2.8 GB',
    limit: '4 GB',
    percentage: 70,
    upgradeLabel: 'Upgrade',
    isLoading: false,
    onUpgradeClick: () => console.log('Upgrade clicked')
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isLoading: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    usage: '9.5 GB',
    limit: '10 GB',
    percentage: 95,
    upgradeLabel: 'Upgrade now',
    barClassName: 'bg-danger',
    containerClassName: 'bg-alert rounded-xl border border-alert-dark gap-2',
    advertisement: <div className="flex flex-row gap-0.5 items-center">
        <CloudWarningIcon weight="fill" className="size-5 inline-block text-yellow-60 mr-1" />
        <p className="text-sm font-semibold">Buy space 85% off</p>
      </div>
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    usage: '500 MB',
    limit: '4 GB',
    percentage: 12
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    usage: '10 GB',
    limit: '10 GB',
    percentage: 100
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    upgradeLabel: undefined
  }
}`,...n.parameters?.docs?.source}}};const G=["Default","Loading","HighUsage","LowUsage","Full","WithoutUpgradeButton"];export{e as Default,o as Full,s as HighUsage,r as Loading,t as LowUsage,n as WithoutUpgradeButton,G as __namedExportsOrder,U as default};
