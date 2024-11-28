import{j as s}from"./jsx-runtime-DEdD30eg.js";import{r as w}from"./index-RYns6xqu.js";const S=(a,r=[])=>{const y=c=>{const f=`${c.ctrlKey?"ctrl+":""}${c.metaKey?"meta+":""}${c.key.toLowerCase()}`;a[f]&&(c.preventDefault(),a[f]())};w.useEffect(()=>(window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}),r)},j=({item:a,menu:r,genericEnterKey:y,handleMenuClose:c})=>{const[f,b]=w.useState(null),[x,m]=w.useState(!1),p=e=>{b(e)},u=e=>{var n,i;return(e==null?void 0:e.separator)||a&&((n=e==null?void 0:e.disabled)==null?void 0:n.call(e,a))||a&&((i=e==null?void 0:e.isTitle)==null?void 0:i.call(e,a))},T=()=>{r&&b(e=>{const n=l=>{let t=l,d=r[t];for(;u(d)&&(t=(t+1)%r.length,d=r[t],l!==t););return t},i=e===null?0:(e+1)%r.length,o=n(i),g=r[o];return u(g)?null:o})},R=()=>{r&&b(e=>{const n=l=>{let t=l,d=r[t];for(;u(d)&&(t=(t-1+r.length)%r.length,d=r[t],l!==t););return t},i=e===null?r.length-1:(e-1+r.length)%r.length,o=n(i),g=r[o];return u(g)?null:o})},E=()=>{b(e=>{if(e!==null){const n=r?r[e]:void 0;a&&n&&"action"in n&&n.action&&n.action(a)}else y&&y();return m(!0),null})};return w.useEffect(()=>{x&&(c(),m(!1))},[x]),S({arrowdown:T,arrowup:R,enter:E},[]),s.jsx("div",{className:"z-20 mt-0 flex flex-col rounded-lg bg-surface py-1.5 shadow-subtle-hard outline-none dark:bg-gray-5",children:r==null?void 0:r.map((e,n)=>{var i,o,g,l,t,d,k,h;return s.jsx("div",{children:e&&e.separator?s.jsx("div",{className:"my-0.5 flex w-full flex-row px-4",children:s.jsx("div",{className:"h-px w-full bg-gray-10"})}):e&&s.jsx("div",{className:`${u(e)?"pointer-events-none":""}`,onClick:C=>{var v;u(e)||(C.stopPropagation(),a&&((v=e.action)==null||v.call(e,a)),e.onClick&&e.onClick(),c())},onMouseEnter:()=>p(n),children:s.jsxs("div",{className:`flex cursor-pointer flex-row whitespace-nowrap px-4 py-1.5 text-base
                    ${a&&((i=e.disabled)!=null&&i.call(e,a))?"font-medium text-gray-50":""}
                    ${a&&((o=e.isTitle)!=null&&o.call(e,a))&&!((g=e.disabled)!=null&&g.call(e,a))?"font-medium text-gray-100":""}
                    ${f===n&&a&&!((l=e.disabled)!=null&&l.call(e,a))?"bg-gray-5 text-gray-100 dark:bg-gray-10":""}
                    ${a&&!((t=e.disabled)!=null&&t.call(e,a))&&!((d=e.isTitle)!=null&&d.call(e,a))&&f!==n?"text-gray-80":""}
                  `,children:[e.node?e.node:s.jsxs("div",{className:"flex flex-row items-center space-x-2",children:[e.icon&&s.jsx(e.icon,{size:20}),s.jsx("span",{children:e.name})]}),s.jsxs("span",{className:"ml-5 flex grow items-center justify-end text-sm text-gray-40",children:[((k=e.keyboardShortcutOptions)==null?void 0:k.keyboardShortcutIcon)&&s.jsx(e.keyboardShortcutOptions.keyboardShortcutIcon,{size:14}),((h=e.keyboardShortcutOptions)==null?void 0:h.keyboardShortcutText)??""]})]})})},n)})})};j.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{item:{required:!1,tsType:{name:"T"},description:""},menu:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| { separator: true }
| {
    name?: string;
    separator?: false;
    disabled?: (target: T) => boolean;
    isTitle?: (target: T) => boolean;
    icon?: React.ForwardRefExoticComponent<{ size?: number | string }>;
    keyboardShortcutOptions?: {
      keyboardShortcutIcon?: React.ForwardRefExoticComponent<{ size?: number | string }>;
      keyboardShortcutText?: string;
    };

    action?: (target: T) => void | Promise<void>;
    onClick?: () => void;
    node?: ReactNode;
  }`,elements:[{name:"signature",type:"object",raw:"{ separator: true }",signature:{properties:[{key:"separator",value:{name:"literal",value:"true",required:!0}}]}},{name:"signature",type:"object",raw:`{
  name?: string;
  separator?: false;
  disabled?: (target: T) => boolean;
  isTitle?: (target: T) => boolean;
  icon?: React.ForwardRefExoticComponent<{ size?: number | string }>;
  keyboardShortcutOptions?: {
    keyboardShortcutIcon?: React.ForwardRefExoticComponent<{ size?: number | string }>;
    keyboardShortcutText?: string;
  };

  action?: (target: T) => void | Promise<void>;
  onClick?: () => void;
  node?: ReactNode;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"separator",value:{name:"literal",value:"false",required:!1}},{key:"disabled",value:{name:"signature",type:"function",raw:"(target: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"target"}],return:{name:"boolean"}},required:!1}},{key:"isTitle",value:{name:"signature",type:"function",raw:"(target: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"target"}],return:{name:"boolean"}},required:!1}},{key:"icon",value:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<{ size?: number | string }>",elements:[{name:"signature",type:"object",raw:"{ size?: number | string }",signature:{properties:[{key:"size",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}],required:!1}},{key:"keyboardShortcutOptions",value:{name:"signature",type:"object",raw:`{
  keyboardShortcutIcon?: React.ForwardRefExoticComponent<{ size?: number | string }>;
  keyboardShortcutText?: string;
}`,signature:{properties:[{key:"keyboardShortcutIcon",value:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<{ size?: number | string }>",elements:[{name:"signature",type:"object",raw:"{ size?: number | string }",signature:{properties:[{key:"size",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}],required:!1}},{key:"keyboardShortcutText",value:{name:"string",required:!1}}]},required:!1}},{key:"action",value:{name:"signature",type:"function",raw:"(target: T) => void | Promise<void>",signature:{arguments:[{type:{name:"T"},name:"target"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"node",value:{name:"ReactNode",required:!1}}]}}]}],raw:"Array<MenuItemType<T>>"},description:""},handleMenuClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},genericEnterKey:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{j as M,S as u};
