import{j as e}from"./jsx-runtime-B2pc4T33.js";import{I as y}from"./InfiniteScroll-UFEVJ2Wi.js";import{M as t}from"./MessageCheapSkeleton-BkSlYQER.js";import{M as g}from"./MessageCheap-Df2sQn26.js";const f=({mails:n,selectedEmails:i=[],loading:s,checked:o,activeEmail:l,hasMoreItems:d=!1,emptyState:p,onMailSelected:m=()=>{},onLoadMore:c=()=>{}})=>{const u=e.jsx("div",{className:"flex flex-col",children:new Array(3).fill(0).map((r,a)=>e.jsx(t,{},a))});return e.jsx("div",{className:"flex flex-col w-[400px] min-w-[200px] max-w-[400px] h-full",children:e.jsx("div",{id:"tray-scroll-container",className:"overflow-y-auto w-full h-full min-h-0",children:s?e.jsx(e.Fragment,{children:new Array(8).fill(0).map((r,a)=>e.jsx("div",{className:"flex flex-col gap-2",children:e.jsx(t,{})},a))}):e.jsx(e.Fragment,{children:n.length===0?e.jsx(e.Fragment,{children:p}):e.jsx(y,{handleNextPage:c,hasMoreItems:d,loader:u,scrollableTarget:"tray-scroll-container",children:n.map(r=>e.jsx("div",{className:"flex items-center w-full flex-col",children:e.jsx(g,{email:r,active:l===r.id,selected:o||i.includes(r.id),onClick:m})},r.id))})})})})};f.__docgenInfo={description:`@param {TrayListProps} TrayListProps - Props for the TrayList component
@prop {Array} TrayListProps.mails - An array of email objects

@prop {string[]} TrayListProps.selectedEmails - An array of selected email IDs

@prop {boolean} TrayListProps.loading - A boolean indicating loading state

@prop {boolean} TrayListProps.checked - A boolean indicating whether all emails are checked

@prop {string} TrayListProps.activeEmail - The ID of the currently active email

@prop {boolean} TrayListProps.hasMoreItems - A boolean indicating whether there are more items to load

@prop {ReactNode} TrayListProps.emptyState - A JSX element to display when there are no emails

@prop {(id: string) => void} TrayListProps.onMailSelected - A function to handle email selection

@prop {() => void} TrayListProps.onLoadMore - A function to load more emails

@returns {JSX.Element} The rendered TrayList component`,methods:[],displayName:"TrayList",props:{mails:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  from: {
    name: string;
    avatar: string;
  };
  subject: string;
  createdAt: string;
  body: string;
  read: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"from",value:{name:"signature",type:"object",raw:`{
  name: string;
  avatar: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"avatar",value:{name:"string",required:!0}}]},required:!0}},{key:"subject",value:{name:"string",required:!0}},{key:"createdAt",value:{name:"string",required:!0}},{key:"body",value:{name:"string",required:!0}},{key:"read",value:{name:"boolean",required:!0}}]}}],raw:`{
  id: string;
  from: {
    name: string;
    avatar: string;
  };
  subject: string;
  createdAt: string;
  body: string;
  read: boolean;
}[]`},description:""},selectedEmails:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},loading:{required:!0,tsType:{name:"boolean"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},activeEmail:{required:!1,tsType:{name:"string"},description:""},hasMoreItems:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},emptyState:{required:!1,tsType:{name:"ReactNode"},description:""},onMailSelected:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onLoadMore:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};export{f as T};
