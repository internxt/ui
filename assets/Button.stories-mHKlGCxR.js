import{f as T}from"./index-C_FWhylE.js";import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const k=({className:e="",size:s})=>t.jsxs("svg",{className:`animate-spin ${e}`,width:s,height:s,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[t.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),t.jsx("path",{className:"opacity-75",fill:"currentColor",d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824\r
              3 7.938l3-2.647z`})]});k.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"number"},description:""}}};const B=({variant:e="primary",type:s="button",id:j,children:q,className:N="",disabled:r=!1,onClick:V=()=>{},onKeyDown:S=()=>{},size:C="default",loading:o,dataTest:_,autofocus:$,buttonDataCy:z,buttonChildrenDataCy:D})=>{let a="";return e==="primary"&&!r?a=`${o?"bg-primary-dark":"bg-primary"} active:bg-primary-dark text-white shadow-sm`:e==="primary"&&r?a="bg-gray-30 text-white shadow-sm":e==="destructive"&&!r?a=`${o?"bg-red-dark":"bg-red"} active:bg-red-dark text-white shadow-sm`:e==="destructive"&&r?a="bg-gray-30 text-white shadow-sm":e==="secondary"&&!r?a="bg-surface dark:bg-gray-5 border border-gray-10 hover:border-gray-20 active:bg-gray-1 dark:active:bg-gray-10 text-gray-80 shadow-sm":e==="secondary"&&r?a="bg-surface dark:bg-gray-5 text-gray-30 border border-gray-5 shadow-sm":e==="ghost"&&!r?a="hover:bg-gray-5 active:bg-gray-10 focus-visible:bg-gray-10":e==="ghost"&&r&&(a="text-gray-30"),t.jsxs("button",{"data-cy":z,id:j,onClick:V,onKeyDown:S,disabled:r||o,type:s,"data-test":_,autoFocus:$,className:`${C==="default"?"h-10 px-5":"h-8 px-3.5"} relative flex shrink-0 select-none flex-row items-center justify-center space-x-2 
      whitespace-nowrap rounded-lg text-base font-medium outline-none ring-2 ring-primary/0 
      ring-offset-2 ring-offset-transparent transition-all duration-100 ease-in-out 
      focus-visible:ring-primary/50 ${a} ${N}`,children:[o&&t.jsx(k,{size:18}),t.jsx("div",{className:"flex items-center justify-center space-x-2","data-cy":D,children:q})]})};B.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},onClick:{defaultValue:{value:"() => undefined",computed:!1},required:!1},onKeyDown:{defaultValue:{value:"() => undefined",computed:!1},required:!1},size:{defaultValue:{value:"'default'",computed:!1},required:!1}}};const P={title:"Components/Button",component:B,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:T()}},n={args:{variant:"primary",children:"Button"}},i={args:{variant:"secondary",children:"Button"}},c={args:{variant:"ghost",children:"Button"}},u={args:{variant:"destructive",children:"Button"}};var d,l,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button'
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,f,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Button'
  }
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,h,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Button'
  }
}`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,b,w;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Button'
  }
}`,...(w=(b=u.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const A=["Primary","Secondary","Ghost","Destructive"];export{u as Destructive,c as Ghost,n as Primary,i as Secondary,A as __namedExportsOrder,P as default};
