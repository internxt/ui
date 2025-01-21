import{j as t}from"./jsx-runtime-DEdD30eg.js";import{R as o,r as l}from"./index-RYns6xqu.js";import{b as P}from"./IconBase-C0B5zwrg.js";import{D as R}from"./List-Cnz44mPL.js";import"./Avatar-Dqkp6atG.js";import"./BaseDialog-CO_0DwbN.js";import{B as k}from"./Button-UUIrlFY4.js";import"./Card-KI_ytpPC.js";import"./Checkbox-nMqsM2bW.js";import"./ContextMenu-D35dIR6F.js";import"./Copyable-IAl0oZTn.js";import"./Empty-BA-FNOEK.js";import"./InfiniteScroll-Bckbvu9a.js";import"./Input-BVGHFgkn.js";import"./Loader-BkvXvL7i.js";import{M as A}from"./Menu-KY-HMnSV.js";import"./Modal-BZOag5Dm.js";import"./Popover-D3jXCPSB.js";import"./RadioButton-CdUGs_6A.js";import"./RangeSlider-P4jgt9i4.js";import"./SkeletonLoader-CMPmhq88.js";import"./Switch-B_5fUSNe.js";import"./TextArea-D8l4yB63.js";import"./Tooltip-CSJfASjJ.js";import"./Table-D-RhmYWn.js";const N=new Map([["bold",o.createElement(o.Fragment,null,o.createElement("path",{d:"M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"}))],["duotone",o.createElement(o.Fragment,null,o.createElement("path",{d:"M176,128,96,208V48Z",opacity:"0.2"}),o.createElement("path",{d:"M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"}))],["fill",o.createElement(o.Fragment,null,o.createElement("path",{d:"M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"}))],["light",o.createElement(o.Fragment,null,o.createElement("path",{d:"M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"}))],["regular",o.createElement(o.Fragment,null,o.createElement("path",{d:"M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"}))],["thin",o.createElement(o.Fragment,null,o.createElement("path",{d:"M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"}))]]);var B=Object.defineProperty,M=Object.defineProperties,F=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,D=(e,n,a)=>n in e?B(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,V=(e,n)=>{for(var a in n||(n={}))L.call(n,a)&&D(e,a,n[a]);if(I)for(var a of I(n))O.call(n,a)&&D(e,a,n[a]);return e},$=(e,n)=>M(e,F(n));const S=l.forwardRef((e,n)=>o.createElement(P,$(V({ref:n},e),{weights:N})));S.displayName="CaretRight";const z=({isOpen:e,onClose:n,onPrimaryAction:a,onSecondaryAction:r,title:s,subtitle:u,primaryAction:m,secondaryAction:i,primaryActionColor:d,isLoading:p})=>{const[v,y]=l.useState(e),[b,f]=l.useState("opacity-0"),[w,h]=l.useState("scale-95");return l.useEffect(()=>{if(e){const g=setTimeout(()=>{f("opacity-100"),h("scale-100")},10);return y(!0),()=>clearTimeout(g)}else{f("opacity-0"),h("scale-95");const g=setTimeout(()=>{y(!1)},150);return()=>clearTimeout(g)}},[e]),l.useEffect(()=>{const g=x=>{x.key==="Escape"&&n()};return e&&window.addEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)}},[e,n]),t.jsx(t.Fragment,{children:v&&t.jsxs("div",{className:`fixed inset-0 z-50 ${e?"":"pointer-events-none"}`,children:[t.jsx("div",{className:`absolute inset-0 bg-gray-100/50 transition-opacity
             duration-150 dark:bg-black/75
              ${b}
            `,onClick:n,"data-testid":"dialog-overlay"}),t.jsxs("div",{className:`absolute
              left-1/2
              top-1/2
              w-full
              max-w-sm
              -translate-x-1/2
              -translate-y-1/2
              transform rounded-2xl
              bg-surface p-5
              transition-all
              duration-150
              dark:bg-gray-1
              ${w} 
              ${b}`,children:[t.jsxs("div",{className:"flex flex-col space-y-2",children:[t.jsx("p",{className:"text-2xl font-medium text-gray-100",children:s}),t.jsx("p",{className:"text-gray-60",children:u})]}),t.jsxs("div",{className:"mt-5 flex justify-end space-x-2",children:[t.jsx(k,{variant:"secondary",onClick:r,disabled:p,children:i}),t.jsx(k,{onClick:a,loading:p,variant:d==="primary"?"primary":"destructive",children:m})]})]})]})})};z.__docgenInfo={description:`Dialog component

@property {boolean} isOpen
- Controls whether the dialog is open or closed. If true, the dialog becomes visible.

@property {() => void} onClose
- Callback function triggered when the overlay or the close button is clicked. Used to close the dialog.

@property {() => void} onPrimaryAction
- Callback function triggered when the primary action button is clicked.

@property {() => void} onSecondaryAction
- Callback function triggered when the secondary action button is clicked.

@property {string} title
- The title of the dialog, displayed at the top of the dialog box.

@property {string} subtitle
- A subtitle for the dialog, displayed below the title.

@property {string} primaryAction
- The label for the primary action button.

@property {string} secondaryAction
- The label for the secondary action button.

@property {('primary' | 'danger')} primaryActionColor
- Defines the color of the primary action button. Can either be 'primary' or 'danger'.

@property {boolean} [isLoading]
- Optional flag to indicate if the buttons should show a loading state. Defaults to false.

@returns {JSX.Element}
- The rendered dialog component.`,methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrimaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSecondaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},primaryAction:{required:!0,tsType:{name:"string"},description:""},secondaryAction:{required:!0,tsType:{name:"string"},description:""},primaryActionColor:{required:!0,tsType:{name:"union",raw:"'primary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const G=e=>{const n=e.match(/px-(\d+(\.\d+)?)/),a=e.match(/py-(\d+(\.\d+)?)/),r=n?n[1]:void 0,s=a?a[1]:void 0;return{px:r,py:s}},q=({children:e,options:n,classButton:a,menuItems:r,classMenuItems:s,openDirection:u,dropdownActionsContext:m,item:i})=>{const[d,p]=l.useState(!1),v=u==="left"?"origin-top-left":"origin-top-right",y=l.useRef(null);l.useEffect(()=>{const c=E=>{y.current&&!y.current.contains(E.target)&&p(!1)};return document.addEventListener("mousedown",c),document.addEventListener("contextmenu",c),()=>{document.removeEventListener("mousedown",c),document.removeEventListener("contextmenu",c)}},[]);const b=n?n.map(c=>({name:c.text,action:()=>c.onClick()})):[],f=r?r.map(c=>({node:c})):[],w=m||[],h=[...b,...f,...w],g=()=>p(c=>!c),x=()=>p(!1),{px:C,py:j}=G(s);return t.jsxs("div",{className:"relative outline-none",ref:y,children:[t.jsx("button",{className:`cursor-pointer outline-none ${a}`,onClick:g,"aria-expanded":d,"aria-haspopup":"menu",children:typeof e=="function"?e({open:d}):e}),t.jsx("div",{className:`absolute ${u==="left"?"left-0":"right-0"} 
          transform shadow-subtle-hard transition-all duration-100 ease-in-out ${d?`scale-100 opacity-100 ${v}`:"pointer-events-none scale-95 opacity-0"}`,"data-testid":"menu-dropdown",children:t.jsx("div",{className:`absolute ${s}`,children:t.jsx(A,{item:i,isOpen:d,handleMenuClose:x,menu:h,paddingX:C,paddingY:j})})})]})};q.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ((obj: { open: boolean }) => JSX.Element)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ text: string; onClick: () => void }",signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"{ text: string; onClick: () => void }[]"},description:""},classButton:{required:!1,tsType:{name:"string"},description:""},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},classMenuItems:{required:!0,tsType:{name:"string"},description:""},openDirection:{required:!0,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},dropdownActionsContext:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| { separator: true }
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
}`,signature:{properties:[{key:"keyboardShortcutIcon",value:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<{ size?: number | string }>",elements:[{name:"signature",type:"object",raw:"{ size?: number | string }",signature:{properties:[{key:"size",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}],required:!1}},{key:"keyboardShortcutText",value:{name:"string",required:!1}}]},required:!1}},{key:"action",value:{name:"signature",type:"function",raw:"(target: T) => void | Promise<void>",signature:{arguments:[{type:{name:"T"},name:"target"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"node",value:{name:"ReactNode",required:!1}}]}}]}],raw:"Array<MenuItemType<T>>"},description:""},item:{required:!1,tsType:{name:"T"},description:""}}};const T=e=>{const[{isOver:n,canDrop:a},r]=e.useDrop(()=>({accept:e.acceptedTypes,collect:m=>({isOver:m.isOver(),canDrop:m.canDrop()}),canDrop:e.canItemDrop(e.item),drop:e.onItemDropped(e.item,e.namePath,e.isSomeItemSelected,e.selectedItems,e.dispatch)}),[e.selectedItems]),s=m=>{m.active&&m.onClick&&m.onClick()},u=n&&a?"drag-over-effect":"";return t.jsx(t.Fragment,{children:!e.item.active&&!e.item.dialog&&e.menu?t.jsx(e.menu,{item:e.item,items:e.items,onItemClicked:s}):t.jsxs("div",{ref:r,className:`flex ${e.isHiddenInList?"w-full":"max-w-fit"} ${e.item.isFirstPath?"shrink-0 pr-1":"min-w-breadcrumb flex-1 px-1.5 py-1.5"} cursor-pointer flex-row items-center truncate font-medium ${u}
        ${!e.item.active||e.item.isFirstPath&&e.totalBreadcrumbsLength===1?"text-gray-80":"text-gray-50 hover:text-gray-80"}`,onClick:()=>s(e.item),onKeyDown:()=>{},"data-cy":e==null?void 0:e.breadcrumbButtonDataCy,children:[e.itemComponent&&t.jsx(e.itemComponent,{className:"h-5 w-5"}),e.item.icon?e.item.icon:null,e.item.label?t.jsx("span",{className:`max-w-sm flex-1 cursor-pointer truncate ${e.isHiddenInList&&"pl-3 text-base"}`,title:e.item.label,children:e.item.label}):null]},e.item.uuid)})};T.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsItem",props:{item:{required:!0,tsType:{name:"BreadcrumbItemData"},description:""},totalBreadcrumbsLength:{required:!0,tsType:{name:"number"},description:""},isHiddenInList:{required:!1,tsType:{name:"boolean"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItemData"}],raw:"BreadcrumbItemData[]"},description:""},breadcrumbButtonDataCy:{required:!1,tsType:{name:"string"},description:""},menu:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: BreadcrumbsMenuProps) => JSX.Element",signature:{arguments:[{type:{name:"BreadcrumbsMenuProps"},name:"props"}],return:{name:"JSX.Element"}}},description:""},namePath:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  uuid: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:`{
  name: string;
  uuid: string;
}[]`},description:""},isSomeItemSelected:{required:!0,tsType:{name:"boolean"},description:""},selectedItems:{required:!0,tsType:{name:"tuple",raw:"[]",elements:[]},description:""},onItemDropped:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  item: BreadcrumbItemData,
  namePath: {
    name: string;
    uuid: string;
  }[],
  isSomeItemSelected: boolean,
  selectedItems: [],
  dispatch: T,
) => (draggedItem: unknown, monitor: DropTargetMonitor) => Promise<void>`,signature:{arguments:[{type:{name:"BreadcrumbItemData"},name:"item"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  uuid: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:`{
  name: string;
  uuid: string;
}[]`},name:"namePath"},{type:{name:"boolean"},name:"isSomeItemSelected"},{type:{name:"tuple",raw:"[]",elements:[]},name:"selectedItems"},{type:{name:"T"},name:"dispatch"}],return:{name:"signature",type:"function",raw:"(draggedItem: unknown, monitor: DropTargetMonitor) => Promise<void>",signature:{arguments:[{type:{name:"unknown"},name:"draggedItem"},{type:{name:"DropTargetMonitor"},name:"monitor"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}}}},description:""},canItemDrop:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  item: BreadcrumbItemData,
) => (draggedItem: unknown, monitor: DropTargetMonitor<unknown, unknown>) => boolean`,signature:{arguments:[{type:{name:"BreadcrumbItemData"},name:"item"}],return:{name:"signature",type:"function",raw:"(draggedItem: unknown, monitor: DropTargetMonitor<unknown, unknown>) => boolean",signature:{arguments:[{type:{name:"unknown"},name:"draggedItem"},{type:{name:"DropTargetMonitor",elements:[{name:"unknown"},{name:"unknown"}],raw:"DropTargetMonitor<unknown, unknown>"},name:"monitor"}],return:{name:"boolean"}}}}},description:""},itemComponent:{required:!1,tsType:{name:"FunctionComponent",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"FunctionComponent<SVGProps<SVGSVGElement>>"},description:""},acceptedTypes:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},dispatch:{required:!0,tsType:{name:"T"},description:""},useDrop:{required:!0,tsType:{name:"useDrop"},description:""}}};const Z=e=>{const n=l.forwardRef((r,s)=>t.jsx("div",{ref:s,className:"flex cursor-pointer items-center hover:bg-gray-5 hover:text-gray-80 dark:hover:bg-gray-10",children:r.children})),a=()=>{const r=e.items,s=[],u=[],m=i=>t.jsx("div",{className:"text-dgray-50 flex items-center",children:t.jsx(S,{weight:"bold",className:"h-4 w-4","data-testid":"caret-right"})},i);for(let i=0;i<r.length;i++){const d="breadcrumbSeparator-"+r[i].uuid+i.toString(),p="breadcrumbItem-"+r[i].uuid+i.toString();r.length>3&&i!==0&&i<r.length-2?(i===1&&s.push(m(d)),u.push(t.jsx(n,{children:t.jsx(T,{item:r[i],isHiddenInList:!0,totalBreadcrumbsLength:r.length,items:r,namePath:e.namePath,isSomeItemSelected:e.isSomeItemSelected,selectedItems:e.selectedItems,onItemDropped:e.onItemDropped,canItemDrop:e.canItemDrop,itemComponent:e.itemComponent,acceptedTypes:e.acceptedTypes,dispatch:e.dispatch,useDrop:e.useDrop},p)}))):(s.push(t.jsx(T,{breadcrumbButtonDataCy:i===0?e==null?void 0:e.rootBreadcrumbItemDataCy:void 0,item:r[i],totalBreadcrumbsLength:r.length,items:r,menu:e.menu,namePath:e.namePath,isSomeItemSelected:e.isSomeItemSelected,selectedItems:e.selectedItems,onItemDropped:e.onItemDropped,canItemDrop:e.canItemDrop,acceptedTypes:e.acceptedTypes,dispatch:e.dispatch,useDrop:e.useDrop},p)),i<r.length-1&&s.push(m(d)))}if(u.length>0){const i=t.jsx(q,{openDirection:"left",classMenuItems:`left-0 top-1 w-max max-h-80 overflow-y-auto
          rounded-md border border-gray-10 bg-surface dark:bg-gray-5 shadow-subtle-hard z-10`,menuItems:u,children:({open:d})=>t.jsx("div",{className:`flex h-8 w-8 items-center justify-center
                rounded-full text-gray-60 transition-all duration-75 ease-in-out hover:bg-gray-5 hover:text-gray-80 ${d?"bg-gray-5":""}`,children:t.jsx(R,{weight:"bold",className:"h-5 w-5"})})},"breadcrumbDropdownItems");s.splice(2,0,i)}return s};return t.jsx("div",{className:"flex w-full items-center",children:a()})};Z.__docgenInfo={description:`Breadcrumbs component

@property {BreadcrumbItemData[]} items
- Array of breadcrumb items to be displayed, each containing a label, icon, and other related properties.

@property {string} [rootBreadcrumbItemDataCy]
- Custom \`data-cy\` attribute  applied to the root breadcrumb item.

@property {Function} [menu]
- Optional custom menu component for rendering a dropdown menu for breadcrumb items that need additional actions
or options.

@property {Object[]} namePath
- Array of objects representing the path and UUID of the breadcrumb item, used for handling navigation or selection.

@property {boolean} isSomeItemSelected
- If true, indicates that some breadcrumb items are selected, affecting the display and behavior of the breadcrumbs.

@property {any[]} selectedItems
- Array of selected breadcrumb items, used to manage the selection state and related actions.

@property {Function} onItemDropped
- Callback function that is triggered when a breadcrumb item is dropped, used for handling drag-and-drop operations.

@property {Function} canItemDrop
- Determines if a breadcrumb item can be dropped. Used for validating drop actions in the drag-and-drop interaction.

@property {FunctionComponent<SVGProps<SVGSVGElement>>} [itemComponent]
- Optional custom component for rendering icons or other visual elements inside each breadcrumb item.

@property {string[]} acceptedTypes
- Array of accepted drag-and-drop types for breadcrumb items,
specifying what types of items can be dragged and dropped.

@property {Dispatch} dispatch
- The Redux dispatch function for dispatching actions related to the breadcrumb items.

@property {Functiodn} useDrop
- Hook for dnd.`,methods:[],displayName:"Breadcrumbs"};export{Z as B,z as D,q as a};
