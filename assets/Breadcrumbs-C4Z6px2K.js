import{j as o}from"./jsx-runtime-DEdD30eg.js";import{R as u,r as d,g as q}from"./index-RYns6xqu.js";import{b as R}from"./IconBase-C0B5zwrg.js";import{D as P}from"./List-DypY7ZkG.js";import"./Avatar-Dqkp6atG.js";import"./BaseDialog-CO_0DwbN.js";import{B as k}from"./Button-UUIrlFY4.js";import"./Card-KI_ytpPC.js";import"./Checkbox-nMqsM2bW.js";import"./ContextMenu-CZf7FjxS.js";import"./Copyable-IAl0oZTn.js";import"./Empty-BA-FNOEK.js";import"./InfiniteScroll-Bckbvu9a.js";import"./Input-BVGHFgkn.js";import"./Loader-BkvXvL7i.js";import{M as A}from"./Menu-Bvvh4aMA.js";import"./Modal-BZOag5Dm.js";import"./Popover-D3jXCPSB.js";import"./RadioButton-CdUGs_6A.js";import"./RangeSlider-P4jgt9i4.js";import"./Switch-B_5fUSNe.js";import"./TextArea-D8l4yB63.js";import"./Tooltip-CSJfASjJ.js";const N=new Map([["bold",u.createElement(u.Fragment,null,u.createElement("path",{d:"M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"}))],["duotone",u.createElement(u.Fragment,null,u.createElement("path",{d:"M176,128,96,208V48Z",opacity:"0.2"}),u.createElement("path",{d:"M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"}))],["fill",u.createElement(u.Fragment,null,u.createElement("path",{d:"M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"}))],["light",u.createElement(u.Fragment,null,u.createElement("path",{d:"M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"}))],["regular",u.createElement(u.Fragment,null,u.createElement("path",{d:"M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"}))],["thin",u.createElement(u.Fragment,null,u.createElement("path",{d:"M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"}))]]);var F=Object.defineProperty,B=Object.defineProperties,L=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,O=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$=(e,t)=>{for(var n in t||(t={}))V.call(t,n)&&O(e,n,t[n]);if(S)for(var n of S(t))H.call(t,n)&&O(e,n,t[n]);return e},z=(e,t)=>B(e,L(t));const E=d.forwardRef((e,t)=>u.createElement(R,z($({ref:t},e),{weights:N})));E.displayName="CaretRight";const G=({isOpen:e,onClose:t,onPrimaryAction:n,onSecondaryAction:r,title:a,subtitle:i,primaryAction:s,secondaryAction:c,primaryActionColor:l,isLoading:m})=>{const[h,f]=d.useState(e),[y,b]=d.useState("opacity-0"),[I,w]=d.useState("scale-95");return d.useEffect(()=>{if(e){const p=setTimeout(()=>{b("opacity-100"),w("scale-100")},10);return f(!0),()=>clearTimeout(p)}else{b("opacity-0"),w("scale-95");const p=setTimeout(()=>{f(!1)},150);return()=>clearTimeout(p)}},[e]),d.useEffect(()=>{const p=g=>{g.key==="Escape"&&t()};return e&&window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}},[e,t]),o.jsx(o.Fragment,{children:h&&o.jsxs("div",{className:`fixed inset-0 z-50 ${e?"":"pointer-events-none"}`,children:[o.jsx("div",{className:`absolute inset-0 bg-gray-100/50 transition-opacity
             duration-150 dark:bg-black/75
              ${y}
            `,onClick:t,"data-testid":"dialog-overlay"}),o.jsxs("div",{className:`absolute
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
              ${I} 
              ${y}`,children:[o.jsxs("div",{className:"flex flex-col space-y-2",children:[o.jsx("p",{className:"text-2xl font-medium text-gray-100",children:a}),o.jsx("p",{className:"text-gray-60",children:i})]}),o.jsxs("div",{className:"mt-5 flex justify-end space-x-2",children:[o.jsx(k,{variant:"secondary",onClick:r,disabled:m,children:c}),o.jsx(k,{onClick:n,loading:m,variant:l==="primary"?"primary":"destructive",children:s})]})]})]})})};G.__docgenInfo={description:`Dialog component

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
- The rendered dialog component.`,methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrimaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSecondaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},primaryAction:{required:!0,tsType:{name:"string"},description:""},secondaryAction:{required:!0,tsType:{name:"string"},description:""},primaryActionColor:{required:!0,tsType:{name:"union",raw:"'primary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const M=({children:e,options:t,classButton:n,menuItems:r,classMenuItems:a,openDirection:i,dropdownActionsContext:s,item:c})=>{const[l,m]=d.useState(!1),h=i==="left"?"origin-top-left":"origin-top-right",f=t?t.map(g=>({name:g.text,action:()=>g.onClick()})):[],y=r?r.map(g=>({node:g})):[],b=s||[],I=[...f,...y,...b],w=()=>m(g=>!g),p=()=>m(!1);return o.jsxs("div",{className:"relative outline-none",children:[o.jsx("button",{className:`cursor-pointer outline-none ${n}`,onClick:w,"aria-expanded":l,"aria-haspopup":"menu",children:typeof e=="function"?e({open:l}):e}),o.jsx("div",{className:`absolute ${i==="left"?"left-0":"right-0"} 
          transform shadow-subtle-hard transition-all duration-100 ease-in-out ${l?`scale-100 opacity-100 ${h}`:"pointer-events-none scale-95 opacity-0"}`,"data-testid":"menu-dropdown",children:o.jsx("div",{className:`absolute ${a}`,children:o.jsx(A,{item:c,handleMenuClose:p,menu:I})})})]})};M.__docgenInfo={description:`Dropdown component

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

@property { Array<MenuItemType<T>>} [dropdownActionsContext]
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
}`,signature:{properties:[{key:"keyboardShortcutIcon",value:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<{ size?: number | string }>",elements:[{name:"signature",type:"object",raw:"{ size?: number | string }",signature:{properties:[{key:"size",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}],required:!1}},{key:"keyboardShortcutText",value:{name:"string",required:!1}}]},required:!1}},{key:"action",value:{name:"signature",type:"function",raw:"(target: T) => void | Promise<void>",signature:{arguments:[{type:{name:"T"},name:"target"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"node",value:{name:"ReactNode",required:!1}}]}}]}],raw:"Array<MenuItemType<T>>"},description:""},item:{required:!1,tsType:{name:"T"},description:""}}};const Z=d.createContext({dragDropManager:void 0});function T(e,t,...n){if(_()&&t===void 0)throw new Error("invariant requires an error message argument");if(!e){let r;if(t===void 0)r=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let a=0;r=new Error(t.replace(/%s/g,function(){return n[a++]})),r.name="Invariant Violation"}throw r.framesToPop=1,r}}function _(){return typeof process<"u"&&!0}var J=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,a,i;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(a=r;a--!==0;)if(!e(t[a],n[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(i=Object.keys(t),r=i.length,r!==Object.keys(n).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(n,i[a]))return!1;for(a=r;a--!==0;){var s=i[a];if(!e(t[s],n[s]))return!1}return!0}return t!==t&&n!==n};const X=q(J),v=typeof window<"u"?d.useLayoutEffect:d.useEffect;function K(e,t,n){const[r,a]=d.useState(()=>t(e)),i=d.useCallback(()=>{const s=t(e);X(r,s)||(a(s),n&&n())},[r,e,n]);return v(i),[r,i]}function U(e,t,n){const[r,a]=K(e,t,n);return v(function(){const s=e.getHandlerId();if(s!=null)return e.subscribeToStateChange(a,{handlerIds:[s]})},[e,a]),r}function W(e,t,n){return U(t,e||(()=>({})),()=>n.reconnect())}function Y(e,t){const n=[...t||[]];return t==null&&typeof e!="function"&&n.push(e),d.useMemo(()=>typeof e=="function"?e():e,n)}let D=!1;class Q{receiveHandlerId(t){this.targetId=t}getHandlerId(){return this.targetId}subscribeToStateChange(t,n){return this.internalMonitor.subscribeToStateChange(t,n)}canDrop(){if(!this.targetId)return!1;T(!D,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return D=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{D=!1}}isOver(t){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,t):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.targetId=null,this.internalMonitor=t.getMonitor()}}function ee(e,t,n){const r=n.getRegistry(),a=r.addTarget(e,t);return[a,()=>r.removeTarget(a)]}function te(e,t,n,r){let a;if(a!==void 0)return!!a;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;const i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;const c=Object.prototype.hasOwnProperty.bind(t);for(let l=0;l<i.length;l++){const m=i[l];if(!c(m))return!1;const h=e[m],f=t[m];if(a=void 0,a===!1||a===void 0&&h!==f)return!1}return!0}function ne(e){return e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function re(e){if(typeof e.type=="string")return;const t=e.type.displayName||e.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}function ae(e){return(t=null,n=null)=>{if(!d.isValidElement(t)){const i=t;return e(i,n),i}const r=t;return re(r),ie(r,n?i=>e(i,n):e)}}function oe(e){const t={};return Object.keys(e).forEach(n=>{const r=e[n];if(n.endsWith("Ref"))t[n]=e[n];else{const a=ae(r);t[n]=()=>a}}),t}function j(e,t){typeof e=="function"?e(t):e.current=t}function ie(e,t){const n=e.ref;return T(typeof n!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),n?d.cloneElement(e,{ref:r=>{j(n,r),j(t,r)}}):d.cloneElement(e,{ref:t})}class se{get connectTarget(){return this.dropTarget}reconnect(){const t=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();t&&this.disconnectDropTarget();const n=this.dropTarget;if(this.handlerId){if(!n){this.lastConnectedDropTarget=n;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=n,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,n,this.dropTargetOptions))}}receiveHandlerId(t){t!==this.handlerId&&(this.handlerId=t,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(t){this.dropTargetOptionsInternal=t}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!te(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(t){this.hooks=oe({dropTarget:(n,r)=>{this.clearDropTarget(),this.dropTargetOptions=r,ne(n)?this.dropTargetRef=n:this.dropTargetNode=n,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}}function C(){const{dragDropManager:e}=d.useContext(Z);return T(e!=null,"Expected drag drop context"),e}function ce(e){return d.useMemo(()=>e.hooks.dropTarget(),[e])}function de(e){const t=C(),n=d.useMemo(()=>new se(t.getBackend()),[t]);return v(()=>(n.dropTargetOptions=e||null,n.reconnect(),()=>n.disconnectDropTarget()),[e]),n}function ue(){const e=C();return d.useMemo(()=>new Q(e),[e])}function le(e){const{accept:t}=e;return d.useMemo(()=>(T(e.accept!=null,"accept must be defined"),Array.isArray(t)?t:[t]),[t])}class me{canDrop(){const t=this.spec,n=this.monitor;return t.canDrop?t.canDrop(n.getItem(),n):!0}hover(){const t=this.spec,n=this.monitor;t.hover&&t.hover(n.getItem(),n)}drop(){const t=this.spec,n=this.monitor;if(t.drop)return t.drop(n.getItem(),n)}constructor(t,n){this.spec=t,this.monitor=n}}function pe(e,t){const n=d.useMemo(()=>new me(e,t),[t]);return d.useEffect(()=>{n.spec=e},[e]),n}function ge(e,t,n){const r=C(),a=pe(e,t),i=le(e);v(function(){const[c,l]=ee(i,a,r);return t.receiveHandlerId(c),n.receiveHandlerId(c),l},[r,t,a,n,i.map(s=>s.toString()).join("|")])}function fe(e,t){const n=Y(e,t),r=ue(),a=de(n.options);return ge(n,r,a),[W(n.collect,r,a),ce(a)]}const x=e=>{const[{isOver:t,canDrop:n},r]=fe(()=>({accept:e.acceptedTypes,collect:s=>({isOver:s.isOver(),canDrop:s.canDrop()}),canDrop:e.canItemDrop(e.item),drop:e.onItemDropped(e.item,e.namePath,e.isSomeItemSelected,e.selectedItems,e.dispatch)}),[e.selectedItems]),a=s=>{s.active&&s.onClick&&s.onClick()},i=t&&n?"drag-over-effect":"";return o.jsx(o.Fragment,{children:!e.item.active&&!e.item.dialog&&e.menu?o.jsx(e.menu,{item:e.item,items:e.items,onItemClicked:a}):o.jsxs("div",{ref:r,className:`flex ${e.isHiddenInList?"w-full":"max-w-fit"} ${e.item.isFirstPath?"shrink-0 pr-1":"min-w-breadcrumb flex-1 px-1.5 py-1.5"} cursor-pointer flex-row items-center truncate font-medium ${i}
        ${!e.item.active||e.item.isFirstPath&&e.totalBreadcrumbsLength===1?"text-gray-80":"text-gray-50 hover:text-gray-80"}`,onClick:()=>a(e.item),onKeyDown:()=>{},"data-cy":e==null?void 0:e.breadcrumbButtonDataCy,children:[e.itemComponent&&o.jsx(e.itemComponent,{className:"h-5 w-5"}),e.item.icon?e.item.icon:null,e.item.label?o.jsx("span",{className:`max-w-sm flex-1 cursor-pointer truncate ${e.isHiddenInList&&"pl-3 text-base"}`,title:e.item.label,children:e.item.label}):null]},e.item.uuid)})};x.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsItem",props:{item:{required:!0,tsType:{name:"BreadcrumbItemData"},description:""},totalBreadcrumbsLength:{required:!0,tsType:{name:"number"},description:""},isHiddenInList:{required:!1,tsType:{name:"boolean"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItemData"}],raw:"BreadcrumbItemData[]"},description:""},breadcrumbButtonDataCy:{required:!1,tsType:{name:"string"},description:""},menu:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: BreadcrumbsMenuProps) => JSX.Element",signature:{arguments:[{type:{name:"BreadcrumbsMenuProps"},name:"props"}],return:{name:"JSX.Element"}}},description:""},namePath:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
) => (draggedItem: unknown, monitor: DropTargetMonitor<unknown, unknown>) => boolean`,signature:{arguments:[{type:{name:"BreadcrumbItemData"},name:"item"}],return:{name:"signature",type:"function",raw:"(draggedItem: unknown, monitor: DropTargetMonitor<unknown, unknown>) => boolean",signature:{arguments:[{type:{name:"unknown"},name:"draggedItem"},{type:{name:"DropTargetMonitor",elements:[{name:"unknown"},{name:"unknown"}],raw:"DropTargetMonitor<unknown, unknown>"},name:"monitor"}],return:{name:"boolean"}}}}},description:""},itemComponent:{required:!1,tsType:{name:"FunctionComponent",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"FunctionComponent<SVGProps<SVGSVGElement>>"},description:""},acceptedTypes:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},dispatch:{required:!0,tsType:{name:"T"},description:""}}};const he=e=>{const t=d.forwardRef((r,a)=>o.jsx("div",{ref:a,className:"flex cursor-pointer items-center hover:bg-gray-5 hover:text-gray-80 dark:hover:bg-gray-10",children:r.children})),n=()=>{const r=e.items,a=[],i=[],s=c=>o.jsx("div",{className:"text-dgray-50 flex items-center",children:o.jsx(E,{weight:"bold",className:"h-4 w-4","data-testid":"caret-right"})},c);for(let c=0;c<r.length;c++){const l="breadcrumbSeparator-"+r[c].uuid+c.toString(),m="breadcrumbItem-"+r[c].uuid+c.toString();r.length>3&&c!==0&&c<r.length-2?(c===1&&a.push(s(l)),i.push(o.jsx(t,{children:o.jsx(x,{item:r[c],isHiddenInList:!0,totalBreadcrumbsLength:r.length,items:r,namePath:e.namePath,isSomeItemSelected:e.isSomeItemSelected,selectedItems:e.selectedItems,onItemDropped:e.onItemDropped,canItemDrop:e.canItemDrop,itemComponent:e.itemComponent,acceptedTypes:e.acceptedTypes,dispatch:e.dispatch},m)}))):(a.push(o.jsx(x,{breadcrumbButtonDataCy:c===0?e==null?void 0:e.rootBreadcrumbItemDataCy:void 0,item:r[c],totalBreadcrumbsLength:r.length,items:r,menu:e.menu,namePath:e.namePath,isSomeItemSelected:e.isSomeItemSelected,selectedItems:e.selectedItems,onItemDropped:e.onItemDropped,canItemDrop:e.canItemDrop,acceptedTypes:e.acceptedTypes,dispatch:e.dispatch},m)),c<r.length-1&&a.push(s(l)))}if(i.length>0){const c=o.jsx(M,{openDirection:"left",classMenuItems:`left-0 top-1 w-max max-h-80 overflow-y-auto
          rounded-md border border-gray-10 bg-surface dark:bg-gray-5 shadow-subtle-hard z-10`,menuItems:i,children:({open:l})=>o.jsx("div",{className:`flex h-8 w-8 items-center justify-center
                rounded-full text-gray-60 transition-all duration-75 ease-in-out hover:bg-gray-5 hover:text-gray-80 ${l?"bg-gray-5":""}`,children:o.jsx(P,{weight:"bold",className:"h-5 w-5"})})},"breadcrumbDropdownItems");a.splice(2,0,c)}return a};return o.jsx("div",{className:"flex w-full items-center",children:n()})};he.__docgenInfo={description:`Breadcrumbs component

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
- The Redux dispatch function for dispatching actions related to the breadcrumb items.`,methods:[],displayName:"Breadcrumbs"};export{he as B,G as D,M as a,Z as b,T as i};
