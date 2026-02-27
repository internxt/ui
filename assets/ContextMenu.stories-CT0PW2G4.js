import{j as o}from"./jsx-runtime-C89ddIqy.js";import{r as c}from"./iframe-CeiX8cuE.js";import{C as m}from"./ContextMenu-CSVlXjm6.js";import{B as d}from"./Button-CBG_LY9U.js";import"./preload-helper-PPVm8Dsz.js";import"./Menu-CsZZ-Dq8.js";import"./Loader-slauWO2S.js";const{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,l=({message:n,onClose:t})=>o.jsxs("div",{style:{padding:"10px",borderRadius:"5px"},children:[n,o.jsx(d,{onClick:t,children:"Clear"})]}),p=()=>{const[n,t]=c.useState(null),r=c.useRef(null),i=()=>t(null),a=[{name:"Title",action:()=>{},isTitle:()=>!0},{name:"Option 1",action:e=>t(`Selected Option 1 for ${e}`)},{name:"Option 2",action:e=>t(`Selected Option 2 for ${e}`),disabled:()=>!0},{separator:!0},{name:"Option 3",action:e=>t(`Selected Option 3 for ${e}`)},{name:"Option 4",action:e=>t(`Selected Option 4 for ${e}`),disabled:()=>!0},{name:"Option 5",action:e=>t(`Selected Option 5 for ${e}`),disabled:()=>!0},{separator:!0},{name:"Option 6",action:e=>t(`Selected Option 6 for ${e}`),disabled:()=>!0},{name:"Option 7",action:e=>t(`Selected Option 7 for ${e}`)},{name:"Option 8",action:e=>t(`Selected Option 8 for ${e}`)}];return o.jsx("div",{style:{position:"relative"},children:o.jsxs("div",{style:{width:"500px",height:"350px",border:"1px solid #ccc",position:"relative"},children:[n?o.jsx(l,{message:n,onClose:i}):o.jsx(l,{message:"Select an option (you can use keys).",onClose:i}),o.jsx(m,{item:"Sample Item",menu:a,menuItemsRef:r,openedFromRightClick:!1,posX:0,posY:0,isContextMenuCutOff:!1,genericEnterKey:()=>{},handleMenuClose:()=>{},isOpen:!0})]})})},f=(n,t)=>{const[{openedFromRightClick:r,posX:i,posY:a},e]=u();return o.jsx("div",{style:{padding:"20px"},children:n({...t,args:{...t.allArgs,openedFromRightClick:r,posX:i,posY:a,handleMenuClose:()=>e({openedFromRightClick:!1})}})})},b={title:"Components/ContextMenu",component:p,decorators:[f],tags:["autodocs"],parameters:{layout:"centered"},argTypes:{item:{control:"text"},menu:{control:"object"},openedFromRightClick:{control:"boolean"},posX:{control:"number"},posY:{control:"number"},isContextMenuCutOff:{control:"boolean"},genericEnterKey:{action:"genericEnterKey"},handleMenuClose:{action:"handleMenuClose"}}},s={args:{item:"Sample Item",openedFromRightClick:!1,isContextMenuCutOff:!1},parameters:{docs:{description:{story:"A basic example of a context menu with sample items and notifications for actions."}}},render:n=>o.jsx(p,{...n})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const y=["DefaultContextMenu"];export{s as DefaultContextMenu,y as __namedExportsOrder,b as default};
