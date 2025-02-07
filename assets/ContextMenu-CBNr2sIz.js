import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{M as d}from"./Menu-BFtBU9I-.js";const l=40,c=({item:n,menuItemsRef:t,menu:r,openedFromRightClick:o,posX:i,posY:a,isContextMenuCutOff:s,isOpen:u,genericEnterKey:m,handleMenuClose:p})=>e.jsx("div",{className:"z-20 mt-0 flex flex-col rounded-lg bg-surface py-1.5 shadow-subtle-hard outline-none dark:bg-gray-5",style:o?{position:"absolute",left:i,top:a,zIndex:99}:{position:"absolute",right:20,[s?"bottom":"top"]:l,zIndex:9999},ref:t,children:e.jsx(d,{item:n,isOpen:u,genericEnterKey:m,handleMenuClose:p,menu:r})});c.__docgenInfo={description:`Properties for \`ContextMenuProps<T>\`

@template T - Generic type representing the item to which the context menu applies.

@property {T} item
- The current item associated with the context menu.
This object is passed to each menu option's \`action\` and \`disabled\` functions.

@property {React.MutableRefObject<HTMLDivElement | null>} menuItemsRef
- A mutable ref to the \`div\` containing the context menu. Used for handling the menu's positioning and visibility.

@property {MenuType<T>} [menu]
- An array of menu options, where each option includes properties like \`name\`, \`icon\`, \`action\`, etc.
The \`MenuType<T>\` type allows some options to be separators (\`separator: boolean\`).

@property {boolean} openedFromRightClick
- Indicates whether the context menu was opened via a right-click (\`true\`).
Determines whether the menu's position is set based on the click location or a predefined position.

@property {boolean} [isOpen]
- To know is Menu is visible.

@property {number} posX
- X-coordinate for the menu's position, used if \`openedFromRightClick\` is \`true\`.

@property {number} posY
- Y-coordinate for the menu's position, used if \`openedFromRightClick\` is \`true\`.

@property {boolean} isContextMenuCutOff
- Specifies whether the menu should align to the bottom of the screen to prevent it
from being cut off on smaller screens. Switches menu positioning between top or bottom.

@property {() => void} genericEnterKey
- A callback that executes if the Enter key is pressed without a selected menu option.
Can be used to define a default action.

@property {() => void} handleMenuClose
- Function to close the context menu. Called after an action is executed or when pressing Enter in the menu.`,methods:[],displayName:"ContextMenu",props:{item:{required:!0,tsType:{name:"T"},description:""},menuItemsRef:{required:!0,tsType:{name:"ReactMutableRefObject",raw:"React.MutableRefObject<HTMLDivElement | null>",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}]},description:""},menu:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| { separator: true }
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
}`,signature:{properties:[{key:"keyboardShortcutIcon",value:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<{ size?: number | string }>",elements:[{name:"signature",type:"object",raw:"{ size?: number | string }",signature:{properties:[{key:"size",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}],required:!1}},{key:"keyboardShortcutText",value:{name:"string",required:!1}}]},required:!1}},{key:"action",value:{name:"signature",type:"function",raw:"(target: T) => void | Promise<void>",signature:{arguments:[{type:{name:"T"},name:"target"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"node",value:{name:"ReactNode",required:!1}}]}}]}],raw:"Array<MenuItemType<T>>"},description:""},openedFromRightClick:{required:!0,tsType:{name:"boolean"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},posX:{required:!0,tsType:{name:"number"},description:""},posY:{required:!0,tsType:{name:"number"},description:""},isContextMenuCutOff:{required:!0,tsType:{name:"boolean"},description:""},genericEnterKey:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handleMenuClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{c as C};
