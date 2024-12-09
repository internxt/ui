import{j as s}from"./jsx-runtime-DEdD30eg.js";import{r as b}from"./index-RYns6xqu.js";const S=(n,r=[])=>{const y=c=>{const m=`${c.ctrlKey?"ctrl+":""}${c.metaKey?"meta+":""}${c.key.toLowerCase()}`;n[m]&&(c.preventDefault(),n[m]())};b.useEffect(()=>(window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}),r)},j=({item:n,menu:r,genericEnterKey:y,handleMenuClose:c})=>{const[m,f]=b.useState(null),[w,h]=b.useState(!1),v=e=>{f(e)},u=e=>{var a,o;return(e==null?void 0:e.separator)||n&&((a=e==null?void 0:e.disabled)==null?void 0:a.call(e,n))||n&&((o=e==null?void 0:e.isTitle)==null?void 0:o.call(e,n))},T=()=>{r&&f(e=>{const a=l=>{let t=l,d=r[t];for(;u(d)&&(t=(t+1)%r.length,d=r[t],l!==t););return t},o=e===null?0:(e+1)%r.length,i=a(o),g=r[i];return u(g)?null:i})},E=()=>{r&&f(e=>{const a=l=>{let t=l,d=r[t];for(;u(d)&&(t=(t-1+r.length)%r.length,d=r[t],l!==t););return t},o=e===null?r.length-1:(e-1+r.length)%r.length,i=a(o),g=r[i];return u(g)?null:i})},R=()=>{f(e=>{if(e!==null){const a=r?r[e]:void 0;n&&a&&"action"in a&&a.action&&a.action(n)}else y&&y();return h(!0),null})};return b.useEffect(()=>{w&&(c(),h(!1))},[w]),S({arrowdown:T,arrowup:E,enter:R},[]),s.jsx("div",{className:"z-20 mt-0 flex flex-col rounded-lg bg-surface py-1.5 shadow-subtle-hard outline-none dark:bg-gray-5",children:r==null?void 0:r.map((e,a)=>{var o,i,g,l,t,d,p,x;return s.jsx("div",{children:e&&e.separator?s.jsx("div",{className:"my-0.5 flex w-full flex-row px-4",children:s.jsx("div",{className:"h-px w-full bg-gray-10"})}):e&&s.jsx("div",{className:`${u(e)?"pointer-events-none":""}`,onClick:C=>{var k;u(e)||(C.stopPropagation(),n&&((k=e.action)==null||k.call(e,n)),e.onClick&&e.onClick(),c())},onMouseEnter:()=>v(a),children:s.jsxs("div",{className:`flex cursor-pointer flex-row whitespace-nowrap px-4 py-1.5 text-base
                    ${n&&((o=e.disabled)!=null&&o.call(e,n))?"font-medium text-gray-50":""}
                    ${n&&((i=e.isTitle)!=null&&i.call(e,n))&&!((g=e.disabled)!=null&&g.call(e,n))?"font-medium text-gray-100":""}
                    ${m===a&&n&&!((l=e.disabled)!=null&&l.call(e,n))?"bg-gray-5 text-gray-100 dark:bg-gray-10":""}
                    ${n&&!((t=e.disabled)!=null&&t.call(e,n))&&!((d=e.isTitle)!=null&&d.call(e,n))&&m!==a?"text-gray-80":""}
                  `,children:[e.node?e.node:s.jsxs("div",{className:"flex flex-row items-center space-x-2",children:[e.icon&&s.jsx(e.icon,{size:20}),s.jsx("span",{children:e.name})]}),s.jsxs("span",{className:"ml-5 flex grow items-center justify-end text-sm text-gray-40",children:[((p=e.keyboardShortcutOptions)==null?void 0:p.keyboardShortcutIcon)&&s.jsx(e.keyboardShortcutOptions.keyboardShortcutIcon,{size:14}),((x=e.keyboardShortcutOptions)==null?void 0:x.keyboardShortcutText)??""]})]})})},a)})})};j.__docgenInfo={description:`Menu component

@template T
@param {MenuProps<T>} props - Properties of the Menu component.

@property {T} [item]
- Optional item that may be used in menu actions (e.g., data passed for actions).

@property {MenuItemsType<T>} [menu]
- Optional array of menu items. Each item can define a separator, title, icon, action, etc.

@property {() => void} handleMenuClose
- Function to close the menu.

@property {() => void} [genericEnterKey]
- Optional callback for when the Enter key is pressed without selecting a menu item.

@returns {JSX.Element}
- The rendered Menu component.

The component handles key events such as Arrow Down, Arrow Up, and Enter for navigation and action execution.
It also supports mouse interactions for hovering and selecting menu items.

Each menu item can have an action, an optional keyboard shortcut, and an icon.
If the item is disabled or marked as a title, it won't be clickable.

It features a dynamic index for item selection, with keyboard and mouse-based navigation.`,methods:[],displayName:"Menu",props:{item:{required:!1,tsType:{name:"T"},description:""},menu:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| { separator: true }
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
