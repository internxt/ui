import{j as n}from"./jsx-runtime-DEdD30eg.js";import{r as w}from"./index-RYns6xqu.js";import{M as v}from"./Menu-CuyP6RQK.js";const k=({children:t,options:o,classButton:u,menuItems:a,classMenuItems:d,openDirection:i,dropdownActionsContext:m,item:c})=>{const[r,s]=w.useState(!1),l=i==="left"?"origin-top-left":"origin-top-right",p=o?o.map(e=>({name:e.text,action:()=>e.onClick()})):[],g=a?a.map(e=>({node:e})):[],y=m||[],f=[...p,...g,...y],b=()=>s(e=>!e),h=()=>s(!1);return n.jsxs("div",{className:"relative outline-none",children:[n.jsx("button",{className:`cursor-pointer outline-none ${u}`,onClick:b,"aria-expanded":r,"aria-haspopup":"menu",children:typeof t=="function"?t({open:r}):t}),n.jsx("div",{className:`absolute ${i==="left"?"left-0":"right-0"} 
          transform shadow-subtle-hard transition-all duration-100 ease-in-out ${r?`scale-100 opacity-100 ${l}`:"pointer-events-none scale-95 opacity-0"}`,"data-testid":"menu-dropdown",children:n.jsx("div",{className:`absolute ${d}`,children:n.jsx(v,{item:c,handleMenuClose:h,menu:f})})})]})};k.__docgenInfo={description:`Dropdown component

@property {ReactNode | ((obj: { open: boolean }) => JSX.Element)} children
- The content of the dropdown button. It can be a React component or a function that receives an object
with the \`open\` property to render the dropdown's state.

@property {Object[]} [options]
- The dropdown options, where each option contains a text and an \`onClick\` function
that is executed when the option is clicked.

@property {string} [classButton]
- Additional classes for the dropdown button, allowing customization of its appearance.

@property {ReactNode[]} [menuItems]
- Menu items to be added to the dropdown. These can be React components rendered inside the menu.

@property {string} classMenuItems
- Additional CSS classes for the container of menu items, allowing for custom styling.

@property {'left' | 'right'} openDirection
- The direction in which the dropdown menu opens. It can be 'left' or 'right'.

@property {MenuItemsType<T>} [dropdownActionsContext]
- Additional actions that can be passed to the dropdown menu.
Used for extending the menu with more options or functionalities.

@property {T} [item]
- The current item that may be used within the options or actions of the menu,
allowing customization of the dropdown's logic.`,methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ((obj: { open: boolean }) => JSX.Element)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ text: string; onClick: () => void }",signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"{ text: string; onClick: () => void }[]"},description:""},classButton:{required:!1,tsType:{name:"string"},description:""},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},classMenuItems:{required:!0,tsType:{name:"string"},description:""},openDirection:{required:!0,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},dropdownActionsContext:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| { separator: true }
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
}`,signature:{properties:[{key:"keyboardShortcutIcon",value:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<{ size?: number | string }>",elements:[{name:"signature",type:"object",raw:"{ size?: number | string }",signature:{properties:[{key:"size",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}],required:!1}},{key:"keyboardShortcutText",value:{name:"string",required:!1}}]},required:!1}},{key:"action",value:{name:"signature",type:"function",raw:"(target: T) => void | Promise<void>",signature:{arguments:[{type:{name:"T"},name:"target"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"node",value:{name:"ReactNode",required:!1}}]}}]}],raw:"Array<MenuItemType<T>>"},description:""},item:{required:!1,tsType:{name:"T"},description:""}}};export{k as D};
