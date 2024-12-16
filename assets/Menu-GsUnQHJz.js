import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as b}from"./index-RYns6xqu.js";const j=(r,n=[])=>{const u=i=>{var g;if(["input","textarea"].includes(((g=document.activeElement)==null?void 0:g.tagName.toLowerCase())??"")&&i.key.toLowerCase()!=="escape")return;const f=`${i.ctrlKey?"ctrl+":""}${i.metaKey?"meta+":""}${i.key.toLowerCase()}`;r[f]&&(i.preventDefault(),r[f]())};b.useEffect(()=>(window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}),n)},q=({item:r,menu:n,isOpen:u,genericEnterKey:i,handleMenuClose:w})=>{const[f,g]=b.useState(null),[p,h]=b.useState(!1),T=e=>{g(e)},y=e=>{var a,s;return(e==null?void 0:e.separator)||r&&((a=e==null?void 0:e.disabled)==null?void 0:a.call(e,r))||r&&((s=e==null?void 0:e.isTitle)==null?void 0:s.call(e,r))},E=()=>{n&&u&&g(e=>{const a=d=>{let t=d,c=n[t];for(;y(c)&&(t=(t+1)%n.length,c=n[t],d!==t););return t},s=e===null?0:(e+1)%n.length,l=a(s),m=n[l];return y(m)?null:l})},C=()=>{n&&u&&g(e=>{const a=d=>{let t=d,c=n[t];for(;y(c)&&(t=(t-1+n.length)%n.length,c=n[t],d!==t););return t},s=e===null?n.length-1:(e-1+n.length)%n.length,l=a(s),m=n[l];return y(m)?null:l})},R=()=>{n&&u&&g(e=>{if(e!==null){const a=n?n[e]:void 0;if(r&&a&&"action"in a&&a.action&&a.action(r),r&&a&&"node"in a&&a.node&&b.isValidElement(a.node)){const s=a.node.props.onClick;s&&s()}}else i&&i();return h(!0),null})};return b.useEffect(()=>{p&&(w(),h(!1))},[p]),j({arrowdown:E,arrowup:C,enter:R},[u]),o.jsx("div",{className:"z-20 mt-0 flex flex-col rounded-lg bg-surface py-1.5 shadow-subtle-hard outline-none dark:bg-gray-5",children:n==null?void 0:n.map((e,a)=>{var s,l,m,d,t,c,x,k;return o.jsx("div",{children:e&&e.separator?o.jsx("div",{className:"my-0.5 flex w-full flex-row px-4",children:o.jsx("div",{className:"h-px w-full bg-gray-10"})}):e&&o.jsx("div",{className:`${y(e)?"pointer-events-none":""}`,onClick:S=>{var v;y(e)||(S.stopPropagation(),r&&((v=e.action)==null||v.call(e,r)),e.onClick&&e.onClick(),w())},onMouseEnter:()=>T(a),children:o.jsxs("div",{className:`flex cursor-pointer flex-row whitespace-nowrap px-4 py-1.5 text-base
                    ${r&&((s=e.disabled)!=null&&s.call(e,r))?"font-medium text-gray-50":""}
                    ${r&&((l=e.isTitle)!=null&&l.call(e,r))&&!((m=e.disabled)!=null&&m.call(e,r))?"font-medium text-gray-100":""}
                    ${f===a&&r&&!((d=e.disabled)!=null&&d.call(e,r))?"bg-gray-5 text-gray-100 dark:bg-gray-10":""}
                    ${r&&!((t=e.disabled)!=null&&t.call(e,r))&&!((c=e.isTitle)!=null&&c.call(e,r))&&f!==a?"text-gray-80":""}
                  `,children:[e.node?e.node:o.jsxs("div",{className:"flex flex-row items-center space-x-2",children:[e.icon&&o.jsx(e.icon,{size:20}),o.jsx("span",{children:e.name})]}),o.jsxs("span",{className:"ml-5 flex grow items-center justify-end text-sm text-gray-40",children:[((x=e.keyboardShortcutOptions)==null?void 0:x.keyboardShortcutIcon)&&o.jsx(e.keyboardShortcutOptions.keyboardShortcutIcon,{size:14}),((k=e.keyboardShortcutOptions)==null?void 0:k.keyboardShortcutText)??""]})]})})},a)})})};q.__docgenInfo={description:`Menu component

@template T
@param {MenuProps<T>} props - Properties of the Menu component.

@property {T} [item]
- Optional item that may be used in menu actions (e.g., data passed for actions).

@property {boolean} [isOpen]
- To know is Menu is visible.

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

It features a dynamic index for item selection, with keyboard and mouse-based navigation.`,methods:[],displayName:"Menu",props:{item:{required:!1,tsType:{name:"T"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},menu:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| { separator: true }
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
}`,signature:{properties:[{key:"keyboardShortcutIcon",value:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<{ size?: number | string }>",elements:[{name:"signature",type:"object",raw:"{ size?: number | string }",signature:{properties:[{key:"size",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}],required:!1}},{key:"keyboardShortcutText",value:{name:"string",required:!1}}]},required:!1}},{key:"action",value:{name:"signature",type:"function",raw:"(target: T) => void | Promise<void>",signature:{arguments:[{type:{name:"T"},name:"target"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"node",value:{name:"ReactNode",required:!1}}]}}]}],raw:"Array<MenuItemType<T>>"},description:""},handleMenuClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},genericEnterKey:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{q as M,j as u};
