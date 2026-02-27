import{j as o}from"./jsx-runtime-C89ddIqy.js";import{r as p}from"./iframe-CeiX8cuE.js";const I=(n,t=[])=>{const l=s=>{if(["input","textarea"].includes(document.activeElement?.tagName.toLowerCase()??"")&&s.key.toLowerCase()!=="escape")return;const g=`${s.ctrlKey?"ctrl+":""}${s.metaKey?"meta+":""}${s.key.toLowerCase()}`;n[g]&&(s.preventDefault(),n[g]())};p.useEffect(()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}),t)},R=({item:n,menu:t,isOpen:l,genericEnterKey:s,handleMenuClose:f,paddingX:g="px-4",paddingY:w="py-1.5"})=>{const[h,y]=p.useState(null),[x,k]=p.useState(!1),v=e=>{y(e)},d=e=>e?.separator||n&&e?.disabled?.(n)||n&&e?.isTitle?.(n),T=()=>{t&&l&&y(e=>{const r=c=>{let a=c,m=t[a];for(;d(m)&&(a=(a+1)%t.length,m=t[a],c!==a););return a},i=e===null?0:(e+1)%t.length,u=r(i),b=t[u];return d(b)?null:u})},E=()=>{t&&l&&y(e=>{const r=c=>{let a=c,m=t[a];for(;d(m)&&(a=(a-1+t.length)%t.length,m=t[a],c!==a););return a},i=e===null?t.length-1:(e-1+t.length)%t.length,u=r(i),b=t[u];return d(b)?null:u})},C=()=>{t&&l&&y(e=>{if(e!==null){const r=t?t[e]:void 0;if(n&&r&&"action"in r&&r.action&&r.action(n),n&&r&&"node"in r&&r.node&&p.isValidElement(r.node)){const i=r.node.props.onClick;i&&i()}}else s&&s();return k(!0),null})};return p.useEffect(()=>{x&&(f(),k(!1))},[x]),I({arrowdown:T,arrowup:E,enter:C},[l]),o.jsx("div",{className:`z-20 mt-0 flex flex-col rounded-lg bg-surface ${w} outline-none dark:bg-gray-5`,children:t?.map((e,r)=>o.jsx("div",{children:e&&e.separator?o.jsx("div",{className:"my-0.5 flex w-full flex-row px-4",children:o.jsx("div",{className:"h-px w-full bg-gray-10"})}):e&&o.jsx("div",{className:`${d(e)?"pointer-events-none":""}`,onClick:i=>{d(e)||(i.stopPropagation(),n&&e.action?.(n),e.onClick&&e.onClick(),f())},onMouseEnter:()=>v(r),children:o.jsxs("div",{className:`flex cursor-pointer flex-row whitespace-nowrap ${g} ${w} text-base
                    ${n&&e.disabled?.(n)&&"font-medium text-gray-50"}
                    ${n&&e.isTitle?.(n)&&!e.disabled?.(n)&&"font-medium text-gray-100"}
                    ${h===r&&n&&!e.disabled?.(n)&&"bg-gray-5 text-gray-100 dark:bg-gray-10"}
                    ${n&&!e.disabled?.(n)&&!e.isTitle?.(n)&&h!==r&&"text-gray-80"}
                  `,children:[e.node?e.node:o.jsxs("div",{className:"flex flex-row items-center space-x-2",children:[e.icon&&o.jsx(e.icon,{size:20}),o.jsx("span",{children:e.name})]}),e.keyboardShortcutOptions&&o.jsxs("span",{className:"ml-5 flex grow items-center justify-end text-sm text-gray-40",children:[e.keyboardShortcutOptions?.keyboardShortcutIcon&&o.jsx(e.keyboardShortcutOptions.keyboardShortcutIcon,{size:14}),e.keyboardShortcutOptions?.keyboardShortcutText??""]})]})})},r))})};R.__docgenInfo={description:`Menu component

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

@property {string} [paddingX='px-4']
- Optional padding for the X axis (horizontal) of each menu item. Defaults to \`px-4\`.

@property {string} [paddingY='py-1.5']
- Optional padding for the Y axis (vertical) of each menu item. Defaults to \`py-1.5\`.

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
}`,signature:{properties:[{key:"keyboardShortcutIcon",value:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<{ size?: number | string }>",elements:[{name:"signature",type:"object",raw:"{ size?: number | string }",signature:{properties:[{key:"size",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}],required:!1}},{key:"keyboardShortcutText",value:{name:"string",required:!1}}]},required:!1}},{key:"action",value:{name:"signature",type:"function",raw:"(target: T) => void | Promise<void>",signature:{arguments:[{type:{name:"T"},name:"target"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"node",value:{name:"ReactNode",required:!1}}]}}]}],raw:"Array<MenuItemType<T>>"},description:""},handleMenuClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},genericEnterKey:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},paddingX:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'px-4'",computed:!1}},paddingY:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'py-1.5'",computed:!1}}}};export{R as M,I as u};
