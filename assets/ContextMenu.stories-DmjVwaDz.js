import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";import{C as f}from"./ContextMenu-CZf7FjxS.js";import{B as x}from"./Button-UUIrlFY4.js";import"./Menu-Bvvh4aMA.js";import"./Loader-BkvXvL7i.js";const{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,l=({message:n,onClose:t})=>o.jsxs("div",{style:{padding:"10px",borderRadius:"5px"},children:[n,o.jsx(x,{onClick:t,children:"Clear"})]}),u=()=>{const[n,t]=c.useState(null),a=c.useRef(null),i=()=>t(null),r=[{name:"Title",action:()=>{},isTitle:()=>!0},{name:"Option 1",action:e=>t(`Selected Option 1 for ${e}`)},{name:"Option 2",action:e=>t(`Selected Option 2 for ${e}`),disabled:()=>!0},{separator:!0},{name:"Option 3",action:e=>t(`Selected Option 3 for ${e}`)},{name:"Option 4",action:e=>t(`Selected Option 4 for ${e}`),disabled:()=>!0},{name:"Option 5",action:e=>t(`Selected Option 5 for ${e}`),disabled:()=>!0},{separator:!0},{name:"Option 6",action:e=>t(`Selected Option 6 for ${e}`),disabled:()=>!0},{name:"Option 7",action:e=>t(`Selected Option 7 for ${e}`)},{name:"Option 8",action:e=>t(`Selected Option 8 for ${e}`)}];return o.jsx("div",{style:{position:"relative"},children:o.jsxs("div",{style:{width:"500px",height:"350px",border:"1px solid #ccc",position:"relative"},children:[n?o.jsx(l,{message:n,onClose:i}):o.jsx(l,{message:"Select an option (you can use keys).",onClose:i}),o.jsx(f,{item:"Sample Item",menu:r,menuItemsRef:a,openedFromRightClick:!1,posX:0,posY:0,isContextMenuCutOff:!1,genericEnterKey:()=>{},handleMenuClose:()=>{}})]})})},O=(n,t)=>{const[{openedFromRightClick:a,posX:i,posY:r},e]=C();return o.jsx("div",{style:{padding:"20px"},children:n({...t,args:{...t.allArgs,openedFromRightClick:a,posX:i,posY:r,handleMenuClose:()=>e({openedFromRightClick:!1})}})})},j={title:"Components/ContextMenu",component:u,decorators:[O],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{item:{control:"text"},menu:{control:"object"},openedFromRightClick:{control:"boolean"},posX:{control:"number"},posY:{control:"number"},isContextMenuCutOff:{control:"boolean"},genericEnterKey:{action:"genericEnterKey"},handleMenuClose:{action:"handleMenuClose"}}},s={args:{item:"Sample Item",openedFromRightClick:!1,isContextMenuCutOff:!1},parameters:{docs:{description:{story:"A basic example of a context menu with sample items and notifications for actions."}}},render:n=>o.jsx(u,{...n})};var p,m,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    item: 'Sample Item',
    openedFromRightClick: false,
    isContextMenuCutOff: false
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic example of a context menu with sample items and notifications for actions.'
      }
    }
  },
  render: args => <ContextMenuWithNotifications {...args} />
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const R=["DefaultContextMenu"];export{s as DefaultContextMenu,R as __namedExportsOrder,j as default};
