import{j as t}from"./jsx-runtime-C89ddIqy.js";import{r as n}from"./iframe-CeiX8cuE.js";import{p as C}from"./IconBase.es-ySa3pMSe.js";import{n as E}from"./List-6hxXm6R7.js";import"./Avatar-DfoPFbjF.js";import"./BaseDialog-Dj6jxaEK.js";import{B as I}from"./Button-CBG_LY9U.js";import"./CircleButton-vhzqfwxC.js";import"./Card-C4xiAqLj.js";import"./Checkbox-BcWMKMTf.js";import"./ContextMenu-CSVlXjm6.js";import"./Copyable-D9GQNENb.js";import"./Empty-C_u805jA.js";import"./Header-BRgl_lNR.js";import"./InfiniteScroll-B1HmUEgi.js";import"./Input-g0SIY1q6.js";import"./Loader-slauWO2S.js";import{M as j}from"./Menu-CsZZ-Dq8.js";import"./Modal-DeIQxPlb.js";import"./TransparentModal-C6v41256.js";import"./Popover-d3ESCN4B.js";import"./RadioButton-DQGWVm3t.js";import"./SkeletonLoader-DsQXanlU.js";import"./RangeSlider-B2CWQxWZ.js";import"./Sidenav-W8WuYffF.js";import"./Switch-M7trTDfd.js";import"./Table-BmZ1tDmk.js";import"./TextArea-Ctxxjozv.js";import"./Tooltip-BvVdSqN6.js";const A=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M176,128,96,208V48Z",opacity:"0.2"}),n.createElement("path",{d:"M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"}))]]),k=n.forwardRef((e,o)=>n.createElement(C,{ref:o,...e,weights:A}));k.displayName="CaretRightIcon";const N=k,R=({isOpen:e,onClose:o,onPrimaryAction:c,onSecondaryAction:r,title:i,subtitle:u,primaryAction:s,secondaryAction:a,primaryActionColor:m,isLoading:l,maxWidth:v="sm"})=>{const[g,y]=n.useState(e),[b,h]=n.useState("opacity-0"),[w,f]=n.useState("scale-95");return n.useEffect(()=>{if(e){const p=setTimeout(()=>{h("opacity-100"),f("scale-100")},10);return y(!0),()=>clearTimeout(p)}else{h("opacity-0"),f("scale-95");const p=setTimeout(()=>{y(!1)},150);return()=>clearTimeout(p)}},[e]),n.useEffect(()=>{const p=x=>{x.key==="Escape"&&o()};return e&&window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}},[e,o]),t.jsx(t.Fragment,{children:g&&t.jsxs("div",{className:`fixed inset-0 z-50 ${e?"":"pointer-events-none"}`,children:[t.jsx("div",{className:`absolute inset-0 bg-gray-100/50 transition-opacity duration-150 dark:bg-black/75 ${b}`,onClick:o,"data-testid":"dialog-overlay"}),t.jsxs("div",{className:`absolute left-1/2 top-1/2 w-full max-w-${v} -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-surface p-5 transition-all duration-150 dark:bg-gray-1 ${w} ${b}`,children:[t.jsxs("div",{className:"flex flex-col space-y-2",children:[t.jsx("p",{className:"text-2xl font-medium text-gray-100",children:i}),t.jsx("p",{className:"text-gray-60",children:u})]}),t.jsxs("div",{className:"mt-5 flex justify-end space-x-2",children:[t.jsx(I,{variant:"secondary",onClick:r,disabled:l,children:a}),t.jsx(I,{onClick:c,loading:l,variant:m==="primary"?"primary":"destructive",children:s})]})]})]})})};R.__docgenInfo={description:`Dialog component

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

@property {string | JSX.Element} primaryAction
- The label or content for the primary action button.

@property {string} secondaryAction
- The label or content for the secondary action button.

@property {('primary' | 'danger')} primaryActionColor
- Defines the color of the primary action button. Can either be 'primary' or 'danger'.

@property {boolean} [isLoading]
- Optional flag to indicate if the buttons should show a loading state. Defaults to false.

@property {'sm' | 'md' | 'lg'} [maxWidth]
- Optional maximum width for the dialog. Can be 'sm', 'md', or 'lg'.

@returns {JSX.Element}
- The rendered dialog component.`,methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrimaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSecondaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},primaryAction:{required:!0,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},secondaryAction:{required:!0,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},primaryActionColor:{required:!0,tsType:{name:"union",raw:"'primary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'sm'",computed:!1}}}};const P=e=>{const o=e.match(/px-(\d+(\.\d+)?)/),c=e.match(/py-(\d+(\.\d+)?)/),r=o?o[1]:void 0,i=c?c[1]:void 0;return{px:r,py:i}},D=({children:e,options:o,classButton:c,menuItems:r,classMenuItems:i,openDirection:u,dropdownActionsContext:s,item:a={}})=>{const[m,l]=n.useState(!1),v=u==="left"?"origin-top-left":"origin-top-right",g=n.useRef(null);n.useEffect(()=>{const d=q=>{g.current&&!g.current.contains(q.target)&&l(!1)};return document.addEventListener("mousedown",d),document.addEventListener("contextmenu",d),()=>{document.removeEventListener("mousedown",d),document.removeEventListener("contextmenu",d)}},[]);const y=o?o.map(d=>({name:d.text,action:()=>d.onClick()})):[],b=r?r.map(d=>({node:d})):[],h=s||[],w=[...y,...b,...h],f=()=>l(d=>!d),p=()=>l(!1),{px:x,py:S}=P(i);return t.jsxs("div",{className:"relative outline-none min-w-breadcrumb",ref:g,children:[t.jsx("button",{className:`cursor-pointer outline-none ${c}`,onClick:f,"aria-expanded":m,"aria-haspopup":"menu",children:typeof e=="function"?e({open:m}):e}),t.jsx("div",{className:`absolute ${u==="left"?"left-0":"right-0"} 
          transform shadow-subtle-hard transition-all duration-100 ease-in-out ${m?`scale-100 opacity-100 ${v}`:"pointer-events-none scale-95 opacity-0"}`,"data-testid":"menu-dropdown",children:t.jsx("div",{className:`absolute ${i}`,children:t.jsx(j,{item:a,isOpen:m,handleMenuClose:p,menu:w,paddingX:x,paddingY:S})})})]})};D.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ((obj: { open: boolean }) => JSX.Element)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ text: string; onClick: () => void }",signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"{ text: string; onClick: () => void }[]"},description:""},classButton:{required:!1,tsType:{name:"string"},description:""},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},classMenuItems:{required:!0,tsType:{name:"string"},description:""},openDirection:{required:!0,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},dropdownActionsContext:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| { separator: true }
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
}`,signature:{properties:[{key:"keyboardShortcutIcon",value:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<{ size?: number | string }>",elements:[{name:"signature",type:"object",raw:"{ size?: number | string }",signature:{properties:[{key:"size",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}],required:!1}},{key:"keyboardShortcutText",value:{name:"string",required:!1}}]},required:!1}},{key:"action",value:{name:"signature",type:"function",raw:"(target: T) => void | Promise<void>",signature:{arguments:[{type:{name:"T"},name:"target"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"node",value:{name:"ReactNode",required:!1}}]}}]}],raw:"Array<MenuItemType<T>>"},description:""},item:{required:!1,tsType:{name:"T"},description:"",defaultValue:{value:"{}",computed:!1}}}};const T=e=>{const[{isOver:o,canDrop:c},r]=e.useDrop(()=>({accept:e.acceptedTypes,collect:s=>({isOver:s.isOver(),canDrop:s.canDrop()}),canDrop:e.canItemDrop(e.item),drop:e.onItemDropped(e.item,e.namePath,e.isSomeItemSelected,e.selectedItems,e.dispatch)}),[e.selectedItems]),i=s=>{s.active&&s.onClick&&s.onClick()},u=o&&c?"drag-over-effect":"";return t.jsx(t.Fragment,{children:!e.item.active&&!e.item.dialog&&e.menu?t.jsx(e.menu,{item:e.item,items:e.items,onItemClicked:i}):t.jsxs("div",{ref:r,className:`flex ${e.isHiddenInList?"w-full":"max-w-fit"} ${e.item.isFirstPath?"shrink-0 pr-1":"min-w-breadcrumb flex-1 px-1.5 py-1.5"} cursor-pointer flex-row items-center truncate font-medium ${u}
        ${!e.item.active||e.item.isFirstPath&&e.totalBreadcrumbsLength===1?"text-gray-80":"text-gray-50 hover:text-gray-80"}`,onClick:()=>i(e.item),onKeyDown:()=>{},"data-cy":e?.breadcrumbButtonDataCy,children:[e.itemComponent&&t.jsx(e.itemComponent,{className:"h-5 w-5"}),e.item.icon?e.item.icon:null,e.item.label?t.jsx("span",{className:`max-w-sm flex-1 cursor-pointer truncate ${e.isHiddenInList&&"pl-3 text-base"}`,title:e.item.label,children:e.item.label}):null]},e.item.uuid)})};T.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsItem",props:{item:{required:!0,tsType:{name:"BreadcrumbItemData"},description:""},totalBreadcrumbsLength:{required:!0,tsType:{name:"number"},description:""},isHiddenInList:{required:!1,tsType:{name:"boolean"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItemData"}],raw:"BreadcrumbItemData[]"},description:""},breadcrumbButtonDataCy:{required:!1,tsType:{name:"string"},description:""},menu:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: BreadcrumbsMenuProps) => JSX.Element",signature:{arguments:[{type:{name:"BreadcrumbsMenuProps"},name:"props"}],return:{name:"JSX.Element"}}},description:""},namePath:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  uuid: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:`{
  name: string;
  uuid: string;
}[]`},description:""},isSomeItemSelected:{required:!0,tsType:{name:"boolean"},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"U"}],raw:"U[]"},description:""},onItemDropped:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  item: BreadcrumbItemData,
  namePath: {
    name: string;
    uuid: string;
  }[],
  isSomeItemSelected: boolean,
  selectedItems: U[],
  dispatch: T,
) => (draggedItem: U, monitor: DropTargetMonitor) => Promise<void>`,signature:{arguments:[{type:{name:"BreadcrumbItemData"},name:"item"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  uuid: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"uuid",value:{name:"string",required:!0}}]}}],raw:`{
  name: string;
  uuid: string;
}[]`},name:"namePath"},{type:{name:"boolean"},name:"isSomeItemSelected"},{type:{name:"Array",elements:[{name:"U"}],raw:"U[]"},name:"selectedItems"},{type:{name:"T"},name:"dispatch"}],return:{name:"signature",type:"function",raw:"(draggedItem: U, monitor: DropTargetMonitor) => Promise<void>",signature:{arguments:[{type:{name:"U"},name:"draggedItem"},{type:{name:"DropTargetMonitor"},name:"monitor"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}}}},description:""},canItemDrop:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: BreadcrumbItemData) => (draggedItem: U, monitor: DropTargetMonitor<unknown, unknown>) => boolean",signature:{arguments:[{type:{name:"BreadcrumbItemData"},name:"item"}],return:{name:"signature",type:"function",raw:"(draggedItem: U, monitor: DropTargetMonitor<unknown, unknown>) => boolean",signature:{arguments:[{type:{name:"U"},name:"draggedItem"},{type:{name:"DropTargetMonitor",elements:[{name:"unknown"},{name:"unknown"}],raw:"DropTargetMonitor<unknown, unknown>"},name:"monitor"}],return:{name:"boolean"}}}}},description:""},itemComponent:{required:!1,tsType:{name:"FunctionComponent",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"FunctionComponent<SVGProps<SVGSVGElement>>"},description:""},acceptedTypes:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},dispatch:{required:!0,tsType:{name:"T"},description:""},useDrop:{required:!0,tsType:{name:"useDrop"},description:""}}};const B=e=>{const o=n.forwardRef((r,i)=>t.jsx("div",{ref:i,className:"flex cursor-pointer items-center hover:bg-gray-5 hover:text-gray-80 dark:hover:bg-gray-10",children:r.children})),c=()=>{const r=e.items,i=[],u=[],s=a=>t.jsx("div",{className:"text-dgray-50 flex items-center",children:t.jsx(N,{weight:"bold",className:"h-4 w-4","data-testid":"caret-right"})},a);for(let a=0;a<r.length;a++){const m="breadcrumbSeparator-"+r[a].uuid+a.toString(),l="breadcrumbItem-"+r[a].uuid+a.toString();r.length>3&&a!==0&&a<r.length-2?(a===1&&i.push(s(m)),u.push(t.jsx(o,{children:t.jsx(T,{item:r[a],isHiddenInList:!0,totalBreadcrumbsLength:r.length,items:r,namePath:e.namePath,isSomeItemSelected:e.isSomeItemSelected,selectedItems:e.selectedItems,onItemDropped:e.onItemDropped,canItemDrop:e.canItemDrop,itemComponent:e.itemComponent,acceptedTypes:e.acceptedTypes,dispatch:e.dispatch,useDrop:e.useDrop},l)}))):(i.push(t.jsx(T,{breadcrumbButtonDataCy:a===0?e?.rootBreadcrumbItemDataCy:void 0,item:r[a],totalBreadcrumbsLength:r.length,items:r,menu:e.menu,namePath:e.namePath,isSomeItemSelected:e.isSomeItemSelected,selectedItems:e.selectedItems,onItemDropped:e.onItemDropped,canItemDrop:e.canItemDrop,acceptedTypes:e.acceptedTypes,dispatch:e.dispatch,useDrop:e.useDrop},l)),a<r.length-1&&i.push(s(m)))}if(u.length>0){const a=t.jsx(D,{openDirection:"left",classMenuItems:`left-0 top-1 w-max max-h-80 overflow-y-auto
          rounded-md border border-gray-10 bg-surface dark:bg-gray-5 shadow-subtle-hard z-10`,menuItems:u,children:({open:m})=>t.jsx("div",{className:`flex h-8 w-8 items-center justify-center
                rounded-full text-gray-60 transition-all duration-75 ease-in-out hover:bg-gray-5 hover:text-gray-80 ${m?"bg-gray-5":""}`,children:t.jsx(E,{weight:"bold",className:"h-5 w-5"})})},"breadcrumbDropdownItems");i.splice(2,0,a)}return i};return t.jsx("div",{className:"flex w-full items-center",children:c()})};B.__docgenInfo={description:`Breadcrumbs component

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
- Hook for dnd.`,methods:[],displayName:"Breadcrumbs"};export{B,R as D,D as a};
