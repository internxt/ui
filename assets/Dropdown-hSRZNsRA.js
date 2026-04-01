import{j as r}from"./jsx-runtime-CiAlIWFd.js";import{r as m}from"./iframe-B8JFBOZm.js";import{M as R}from"./Menu-C0fuJQ44.js";const q=n=>{const t=n.match(/px-(\d+(\.\d+)?)/),a=n.match(/py-(\d+(\.\d+)?)/),o=t?t[1]:void 0,i=a?a[1]:void 0;return{px:o,py:i}},C=({children:n,options:t,classButton:a,menuItems:o,classMenuItems:i,openDirection:c,dropdownActionsContext:l,item:p={}})=>{const[s,u]=m.useState(!1),g=c==="left"?"origin-top-left":"origin-top-right",d=m.useRef(null);m.useEffect(()=>{const e=h=>{d.current&&!d.current.contains(h.target)&&u(!1)};return document.addEventListener("mousedown",e),document.addEventListener("contextmenu",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("contextmenu",e)}},[]);const y=t?t.map(e=>({name:e.text,action:()=>e.onClick()})):[],f=o?o.map(e=>({node:e})):[],v=l||[],b=[...y,...f,...v],w=()=>u(e=>!e),k=()=>u(!1),{px:x,py:T}=q(i);return r.jsxs("div",{className:"relative outline-none min-w-breadcrumb",ref:d,children:[r.jsx("button",{className:`cursor-pointer outline-none ${a}`,onClick:w,"aria-expanded":s,"aria-haspopup":"menu",children:typeof n=="function"?n({open:s}):n}),r.jsx("div",{className:`absolute ${c==="left"?"left-0":"right-0"} 
          transform shadow-subtle-hard transition-all duration-100 ease-in-out ${s?`scale-100 opacity-100 ${g}`:"pointer-events-none scale-95 opacity-0"}`,"data-testid":"menu-dropdown",children:r.jsx("div",{className:`absolute ${i}`,children:r.jsx(R,{item:p,isOpen:s,handleMenuClose:k,menu:b,paddingX:x,paddingY:T})})})]})};C.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ((obj: { open: boolean }) => JSX.Element)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ text: string; onClick: () => void }",signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"{ text: string; onClick: () => void }[]"},description:""},classButton:{required:!1,tsType:{name:"string"},description:""},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},classMenuItems:{required:!0,tsType:{name:"string"},description:""},openDirection:{required:!0,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},dropdownActionsContext:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| { separator: true }
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
}`,signature:{properties:[{key:"keyboardShortcutIcon",value:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<{ size?: number | string }>",elements:[{name:"signature",type:"object",raw:"{ size?: number | string }",signature:{properties:[{key:"size",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}],required:!1}},{key:"keyboardShortcutText",value:{name:"string",required:!1}}]},required:!1}},{key:"action",value:{name:"signature",type:"function",raw:"(target: T) => void | Promise<void>",signature:{arguments:[{type:{name:"T"},name:"target"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"node",value:{name:"ReactNode",required:!1}}]}}]}],raw:"Array<MenuItemType<T>>"},description:""},item:{required:!1,tsType:{name:"T"},description:"",defaultValue:{value:"{}",computed:!1}}}};export{C as D};
